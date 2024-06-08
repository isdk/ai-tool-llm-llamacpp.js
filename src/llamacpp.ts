import path from 'path'
import { AIStream, CommonError, ErrorCode, NotFoundError, getResponseErrorReadableStream, throwError } from "@isdk/ai-tool";
import { AIModelParams, LLMProvider, joinUrl, mapApiOptions, AIOptions } from "@isdk/ai-tool-llm";
import {
  LLamaCppResult,
  LlamaModelOptions,
  parseLlamaCppStream,
  llamaCppToAIResult,
  LlamaCppAIResult,
  AIOptionsMap,
  ReverseAIOptionsMap,
  AIModelSettingsMap,
} from "./options";

export const LlamaCppProviderName = 'llamacpp'

function toLlamaCppOptions(opts?: LlamaModelOptions) {
  return mapApiOptions<LlamaModelOptions>(opts, AIOptionsMap)
}

function toApiOptions(opts: LlamaModelOptions) {
  return mapApiOptions<LlamaModelOptions>(opts, ReverseAIOptionsMap)
}

export class LlamaCppProvider extends LLMProvider {
  rule = /.gguf$/

  async func({model, value, options}: {model: string, value: any, options: AIOptions}): Promise<any> {
    const vIsString = typeof value === 'string'
    if (!value || (!vIsString && !Array.isArray(value))) {
      throwError('missing prompt value', 'LlamaCppProvider')
    }

    const url = this.apiUrl ?? 'http://localhost:8080'
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }

    options = toLlamaCppOptions(options) as AIOptions

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
    // eot_token: end of turn token
    let eot_token
    if (!vIsString) {
      const prompt = await this.formatPrompt(value, modelInfo, options)
      if (!prompt) {throw new NotFoundError('ChatTemplate:'+ modelInfo.name, this.name)}
      value = prompt
      if (options.chatTemplate) {
        eot_token = getEndOfTurnTokenFromPromptTemplate(options.chatTemplate)
        chatTemplate = options.chatTemplate.prompt
      }
    } else {
      chatTemplate = await this.getChatTemplate(modelInfo, options)
      if (chatTemplate) {
        eot_token = getEndOfTurnTokenFromPromptTemplate(chatTemplate)
        chatTemplate = chatTemplate.prompt
      }
    }

    if (chatTemplate?.parameters) {
      const defaultParams = this.getDefaultParameters(chatTemplate, modelInfo.name!)
      if (defaultParams) {
        if (!eot_token) {
          eot_token = defaultParams.eot_token || defaultParams.eos_token
        }
        const defaultParamsOptions = toLlamaCppOptions(defaultParams)
        if (Array.isArray(defaultParamsOptions.stop) && Array.isArray(options.stop)) {
          options.stop = [...defaultParamsOptions.stop, ...options.stop].filter((v, i, arr) => arr.indexOf(v) === i)
        }
        options = {...defaultParamsOptions, ...options}
      }
    }

    const signal = options!.signal
    delete options!.signal

    const isStream = options!.stream
    if (isStream) {
      headers.Connection = 'keep-alive'
      headers.Accept = 'text/event-stream'
    }

    // eot_token: end of turn token
    if (!eot_token) {eot_token = modelInfo.eot_token || modelInfo.eos_token}
    if (eot_token) {
      if (Array.isArray(options.stop)) {
        if (options.stop.indexOf(eot_token) === -1) {options.stop.push(eot_token)}
      } else {
        options.stop = [eot_token]
      }
    }
    if (options.grammar_id && options.json_schema) {
      delete options.grammar_id
    }

    if (options.chatTemplate) {
      delete options.chatTemplate
    }

    const body = {
      ...options,
      model,
      prompt: value,
    }
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
      if (obj.generation_settings) {
        obj.generation_settings = toApiOptions(obj.generation_settings)
      }
      result = llamaCppToAIResult(obj)
    } else {
      result = AIStream<string, LLamaCppResult>(response, parseLlamaCppStream())
    }
    return result
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

export const llamaCpp = new LlamaCppProvider(LlamaCppProviderName)

function getEndOfTurnTokenFromPromptTemplate(chatTemplate: {prompt: any, version?: string|string[]}) {
  let result: any
  let ver = chatTemplate.version
  if (Array.isArray(ver)) {
    if (ver.includes('@')) {
      ver = undefined
    } else {
      ver = ver[0]
    }
  }
  const promptInfo = chatTemplate.prompt
  const vers = promptInfo.version
  if (ver && ver !== '@' && vers?.[ver]?.prompt) {
    const p = vers[ver].prompt
    result = p.eot_token || p.eos_token
  } else if (promptInfo.prompt) {
    result = promptInfo.prompt.eot_token || promptInfo.prompt.eos_token
  }
  return result
}