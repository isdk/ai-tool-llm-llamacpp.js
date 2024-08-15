import path from 'path'
import { AIStream, AsyncFeatures, CommonError, ErrorCode, NotFoundError, TaskAbortController, getResponseErrorReadableStream, makeToolFuncCancelable, throwError } from "@isdk/ai-tool";
import { AIModelParams, LLMProvider, joinUrl, mapApiOptions, AIOptions } from "@isdk/ai-tool-llm";
import {
  LLamaCppResult,
  LlamaModelOptions,
  parseLlamaCppStream,
  llamaCppToAIResult,
  LlamaCppAIResult,
  AIOptionsMap,
  AIModelSettingsMap,
} from "./options";

export const LlamaCppProviderName = 'llamacpp'

function toLlamaCppOptions(opts?: LlamaModelOptions) {
  return mapApiOptions<LlamaModelOptions>(opts, AIOptionsMap)
}

export class LlamaCppProvider extends LLMProvider {
  rule = /.gguf$/

  async processModelOptions(model: string, value: any, options: AIOptions) {
    const vIsString = typeof value === 'string'
    if (!value || (!vIsString && !Array.isArray(value))) {
      throwError('missing prompt value', 'LlamaCppProvider')
    }

    options = toLlamaCppOptions(options) as AIOptions
    if (options.stop && typeof options.stop === 'string') {
      options.stop = [options.stop]
    }

    let modelInfo: AIModelParams
    if (model) {
      if (model.endsWith('.gguf')) {model = model.slice(0, -5)}
      if (model.startsWith(LlamaCppProviderName + '://')) {model = model.slice(LlamaCppProviderName.length + 3)}
      modelInfo = await this.getModelInfo()
      const currentModel = modelInfo?.name
      if (currentModel && currentModel.indexOf(model) < 0) {
        throw new CommonError(`the model(${model}) is not the current llamaCpp running model(${currentModel})`, this.name, ErrorCode.InvalidArgument)
      }
    } else {
      modelInfo = await this.getModelInfo()
    }

    if (!modelInfo) {
      throwError('llamaCpp no current model', this.name)
    }

    let chatTemplate: any
    let endOfTokens: undefined|string[]
    if (!vIsString) {
      const prompt = await this.formatPrompt(value, modelInfo, options)
      if (!prompt) {throw new NotFoundError('ChatTemplate:'+ modelInfo.name, this.name)}
      value = prompt
      if (options.chatTemplate) {
        endOfTokens = getEndOfTokensFromPromptTemplate(options.chatTemplate)
        chatTemplate = options.chatTemplate.prompt
      }
    } else {
      chatTemplate = await this.getChatTemplate(modelInfo, options)
      if (chatTemplate) {
        endOfTokens = getEndOfTokensFromPromptTemplate(chatTemplate)
        chatTemplate = chatTemplate.prompt
      }
    }

    if (chatTemplate?.parameters) {
      const defaultParams = this.getDefaultParameters(chatTemplate, modelInfo.name!)
      if (defaultParams) {
        if (defaultParams.eot_token || defaultParams.eos_token) {
          if (!endOfTokens) endOfTokens = []
          if (defaultParams.eot_token && !endOfTokens.includes(defaultParams.eot_token)) {endOfTokens.push(defaultParams.eot_token)}
          if (defaultParams.eos_token && !endOfTokens.includes(defaultParams.eos_token)) {endOfTokens.push(defaultParams.eos_token)}
        }
        const defaultParamsOptions = toLlamaCppOptions(defaultParams)
        if (Array.isArray(defaultParamsOptions.stop) && Array.isArray(options.stop)) {
          options.stop = [...defaultParamsOptions.stop, ...options.stop].filter((v, i, arr) => arr.indexOf(v) === i)
        }
        options = {...defaultParamsOptions, ...options}
      }
    }

    if (modelInfo.eot_token || modelInfo.eos_token) {
      if (!endOfTokens) endOfTokens = []
      if (modelInfo.eot_token && !endOfTokens.includes(modelInfo.eot_token)) {endOfTokens.push(modelInfo.eot_token)}
      if (modelInfo.eos_token && !endOfTokens.includes(modelInfo.eos_token)) {endOfTokens.push(modelInfo.eos_token)}
    }
    if (endOfTokens && endOfTokens.length) {
      if (Array.isArray(options.stop)) {
        options.stop = Array.from(new Set([...endOfTokens, ...options.stop]))
      } else {
        options.stop = endOfTokens
      }
    }
    if (options.grammar_id && options.json_schema) {
      delete options.grammar_id
    }

    let chatTemplateId: any
    if (options.chatTemplate) {
      if (options.chatTemplate.prompt?._id) {
        chatTemplateId = {id: options.chatTemplate.prompt._id}
        if (options.chatTemplate.version) {
          chatTemplateId.version = options.chatTemplate.version
        }
      }
      delete options.chatTemplate
    }

    if (chatTemplateId) {options.chatTemplateId = chatTemplateId}
    options.value = value
    return options
  }

  func({model, value, options}: {model: string, value: any, options: AIOptions}): Promise<any> {
    const taskPromise = this.runAsyncCancelableTask(options, async (params: any) => {
      const aborter = params.aborter as TaskAbortController
      const signal = aborter.signal

      params= {...params}
      delete params.aborter
      params = await this.processModelOptions(model, value, params)

      const url = this.apiUrl ?? 'http://localhost:8080'
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      }
      const isStream = options!.stream
      if (isStream) {
        headers.Connection = 'keep-alive'
        headers.Accept = 'text/event-stream'
      }


      const chatTemplateId = params.chatTemplateId
      if (chatTemplateId) {delete params.chatTemplateId}

      value = params.value
      delete params.value

      const body = {
        ...params,
        model,
        prompt: value,
      }
      // delete body.aborter

      const response = await fetch(joinUrl(url, '/completion'), {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        signal,
      })

      let result: LlamaCppAIResult | ReadableStream<LlamaCppAIResult>

      if (!response.ok) {
        const processed = this.emitError ? this.emitError(response, url, body) : undefined
        if (!processed) {
          if (isStream) {
            result = getResponseErrorReadableStream(response.body)
          } else {
            throw new CommonError(await response.text(), 'LlamaCppProvider')
          }
        } else {
          result = processed
        }
      } else if (!isStream) {
        const text = await response.text()
        // const obj = await response.json() as LLamaCppResult
        const obj = JSON.parse(text)
        obj.chatTemplateId = chatTemplateId
        result = llamaCppToAIResult(obj)
      } else {
        result = AIStream<string, LLamaCppResult>(response, parseLlamaCppStream({chatTemplateId}))
      }

      return result
    });

    return taskPromise
  }

  async getModelInfo() {
    const url = this.apiUrl ?? 'http://localhost:8080'
    const response = await fetch(joinUrl(url, '/props'))
    const obj = await response.json()
    const err = obj.error
    if (err) {
      if (err.code) {
        throw new CommonError(err.message, 'getModelInfo', err.code)
      } else {
        throw new CommonError(err, 'getModelInfo')
      }
    }
    const generation_settings = obj.default_generation_settings
    delete obj.default_generation_settings
    const result = mapApiOptions({...obj, ...generation_settings}, AIModelSettingsMap)
    result.name = path.basename(result.name)
    return result as AIModelParams
  }
}
makeToolFuncCancelable(LlamaCppProvider, {asyncFeatures: AsyncFeatures.MultiTask})

export const llamaCpp = new LlamaCppProvider(LlamaCppProviderName)

function getEndOfTokensFromPromptTemplate(chatTemplate: {prompt: any, version?: string|string[]}) {
  let result: any[] = []
  let ver = chatTemplate.version
  if (Array.isArray(ver)) {
    ver = ver[0]
  }
  const promptInfo = chatTemplate.prompt
  const vers = promptInfo.version
  let p = vers?.[ver!]?.prompt
  if (ver && ver !== '@' && p) {
    // eot_token: end of turn token
    if (p.eot_token) {result.push(p.eot_token)}
    if (p.eos_token) {result.push(p.eos_token)}
  } else if (promptInfo.prompt) {
    p = promptInfo.prompt
    if (p.eot_token) {result.push(p.eot_token)}
    if (p.eos_token) {result.push(p.eos_token)}
  }

  return result.length ? result : undefined
}
