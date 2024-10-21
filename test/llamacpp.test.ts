import { AIModelQuantType, LLMProvider, llm } from '@isdk/ai-tool-llm';
import { AIPromptsFunc, AIPromptsName } from '@isdk/ai-tool-prompt'

import { LlamaCppProviderName, llamaCpp } from '../src'
import { LlmArch } from '../src/options';
import { AbortError, AIChatMessageParam, TaskAbortController, TaskPromise, ToolAsyncCancelableBit, ToolFunc } from '@isdk/ai-tool';

const testLLMProvider = new LLMProvider('LLMTest', {
  rule: /.test$/
})

const apiUrl = 'http://localhost:8080'
llamaCpp.apiUrl = apiUrl

const promptsFunc = new AIPromptsFunc(AIPromptsName, {dbPath: ':memory:'})

const messages = [
  {role: 'user', content: '1+2='},
  {role: 'assistant', content: '3'},
  {role: 'user', content: '2+3='},
] as AIChatMessageParam[]

const prompt = `This is a conversation between User and Assistant, a friendly Assistant. Assistant is helpful, kind, honest, good at writing, and never fails to answer any requests immediately and with precision.just give the result, no more words.

User: 1+2=
Assistant: 3
User: 2+3=
Assistant:`

const chatMLPrompt = `<|im_start|>system
calculate the expression<|im_end|>
<|im_start|>user
1+1=<|im_end|>
<|im_start|>assistant
2<|im_end|>
<|im_start|>user
2+3=<|im_end|>
<|im_start|>assistant`
const chatMLStop = '<|im_end|>'

async function testGeneration(provider: LLMProvider = llamaCpp) {
  const hasCancelableFeature = provider.hasAsyncFeature(ToolAsyncCancelableBit)

  if (hasCancelableFeature) {
    it('should abort generate text with stream by provider', async () => {
      const options: any = {stop_words: ['User:', 'Assistant:'], stream: true}
      const taskInfo = provider.run({
        model: 'llamacpp://.',
        value: [
          {role: 'user', content: '1+2='},
          {role: 'assistant', content: 'One plus two, the result is three.'},
          {role: 'user', content: '2+3='},
        ],
        options,
      }) as TaskPromise
      const task = taskInfo.task!
      expect(task).toBeInstanceOf(TaskAbortController)
      expect(task).toBe(options.aborter)
      expect(task).toHaveProperty('id')
      const stream = await taskInfo as ReadableStream
      expect(stream).toBeInstanceOf(ReadableStream)
      const reader = stream.getReader()
      let err: any
      const chunks: any[] = []
      try {
        for (let chunk = await reader.read(); !chunk.done; chunk = await reader.read()) {
          if (chunk.done) break; // exit loop when done reading the stream
          const taskId = chunk.value.taskId;
          expect(taskId).not.toBeUndefined()
          // console.log('Chunk received:', chunk.value); // process or handle each chunk as needed
          chunks.push(chunk.value)
          // provider.abort('test', {taskId})
          task.abort('test')
        }

      } catch (error) {
        // console.error('An error occurred while consuming data from ReadableStream:', error);
        err = error
      } finally {
        reader.releaseLock()
      }

      expect(err).toHaveProperty('name', 'AbortError')
      expect(err).toHaveProperty('data')
      expect(err.data).toHaveProperty('what', 'test')
    });
  }

  it('should abort generate text from outside', async () => {
    const aborter = new AbortController()
    const stream = await provider.run({
      model: 'llamacpp://.',
      value: [
        {role: 'user', content: '1+2='},
        {role: 'assistant', content: 'One plus two, the result is three.'},
        {role: 'user', content: '2+3='},
      ],
      options: {stop_words: ['User:', 'Assistant:'], stream: true, aborter}
    }) as ReadableStream
    expect(stream).toBeInstanceOf(ReadableStream)
    const reader = stream.getReader()
    let err: any
    const chunks: any[] = []
    try {
      while (true) {
        const chunk = await reader.read(); // read data in chunks
        if (chunk.done) break; // exit loop when done reading the stream
        // console.log('Chunk received:', chunk.value); // process or handle each chunk as needed
        chunks.push(chunk.value)
        if (hasCancelableFeature) {aborter.abort()}
      }

    } catch (error) {
      console.error('An error occurred while consuming data from ReadableStream:', error);
      err = error
    } finally {
      reader.releaseLock()
    }

    if (hasCancelableFeature) {
      expect(err).toHaveProperty('name', 'AbortError')
    } else {
      expect(err).toBeUndefined()
    }
  });

  it('should generate text with messages format', async () => {
    const result = await provider.run({
      model: 'llamacpp://.',
      value: messages,
      options: {max_tokens:1024, temperature: 0, stop_words: ['<|end|>'], add_generation_prompt: true}
    })
    expect(result.content.trim()).toMatch(/^5|(2\s*[+]\s*3\s*([=]|(equal)[s]?)\s*5)($|\.)/i)
    expect(result.options.generation_settings.stream).toBeFalsy()
    expect(result.options.generation_settings.temperature).toBe(0)
    expect(result.finishReason).toStrictEqual('stop')
    // expect(result.options.stopped_word).toBeTruthy()
    // expect(result.options.stopping_word).toStrictEqual('User:')
  });

  it('should generate text with max_tokens', async () => {
    const result = await provider.run({
      model: 'llamacpp://.',
      value: [{role: 'user', content: 'hi.'}],
      options: {max_tokens:1, temperature: 0, stop_words: ['<|end|>'], add_generation_prompt: true}
    })
    expect(result.content.trim().length).toBeLessThan(10)
    expect(result.options.generation_settings.stream).toBeFalsy()
    expect(result.options.generation_settings.temperature).toBe(0)
    expect(result.finishReason).toStrictEqual('length')
    // expect(result.options.stopped_word).toBeTruthy()
    // expect(result.options.stopping_word).toStrictEqual('User:')
  });

  it('should generate text with stream', async () => {
    const stream = await provider.run({
      model: 'llamacpp://.',
      value: messages,
      options: {stop_words: ['User:', 'Assistant:'], stream: true}
    }) as ReadableStream
    expect(stream).toBeInstanceOf(ReadableStream)
    const reader = stream.getReader()
    let err: any
    const chunks: any[] = []
    try {
      while (true) {
        const chunk = await reader.read(); // read data in chunks
        if (chunk.done) break; // exit loop when done reading the stream
        // console.log('Chunk received:', chunk.value); // process or handle each chunk as needed
        chunks.push(chunk.value)
      }

    } catch (error) {
      console.error('An error occurred while consuming data from ReadableStream:', error);
      err = error
    } finally {
      reader.releaseLock()
    }
    expect(err).toBeUndefined()
    const content = chunks.map(i=>i.content).join('').trim()
    const lastChunk = chunks[chunks.length-1]
    expect(lastChunk.options).toHaveProperty('stop', true)
    expect(lastChunk.options.generation_settings.stream).toBeTruthy()
    expect(lastChunk.finishReason).toStrictEqual('stop')

    // console.log('🚀 ~ it ~ content:', content)
    expect(content).toMatch(/^5|(2\s*[+]\s*3\s*([=]|(equal)[s]?)\s*5)($|\.)/i)
  });
}

describe('LlamaCpp Provider', async () => {
  beforeAll(async ()=>{
    await promptsFunc.initData()
    ToolFunc.register(promptsFunc)
    testLLMProvider.register()
    llamaCpp.register()
    /*
    fetchMock.mockIf(/^https?:\/\/localhost.*$/, (req) => {
      if (req.url.endsWith('/completion')) {
        return {
          body: '{"content":"5","generation_settings":{"dynatemp_exponent":1.0,"dynatemp_range":0.0,"frequency_penalty":0.0,"grammar":"","ignore_eos":false,"logit_bias":[],"min_keep":0,"min_p":0.05000000074505806,"mirostat":0,"mirostat_eta":0.10000000149011612,"mirostat_tau":5.0,"model":"gemma-2b-zephyr-dpo.Q8_0","model_id":"gemma-2b-zephyr-dpo.Q8_0.gguf","n_ctx":4096,"n_keep":0,"n_predict":1024,"n_probs":0,"penalize_nl":true,"penalty_prompt_tokens":[],"presence_penalty":0.0,"repeat_last_n":64,"repeat_penalty":1.100000023841858,"samplers":["top_k","tfs_z","typical_p","top_p","min_p","temperature"],"seed":4294967295,"stop":["User:","Assistant:"],"stream":false,"temperature":0.800000011920929,"tfs_z":1.0,"top_k":40,"top_p":0.949999988079071,"typical_p":1.0,"use_penalty_prompt_tokens":false},"model":"gemma-2b-zephyr-dpo.Q8_0","prompt":"\\"This is a conversation between User and Assistant, a friendly Assistant. Assistant is helpful, kind, honest, good at writing, and never fails to answer any requests immediately and with precision.\\n\\nUser: 2+3=\\nAssistant:","slot_id":0,"stop":true,"stopped_eos":false,"stopped_limit":false,"stopped_word":true,"stopping_word":"User:","timings":{"predicted_ms":97.608,"predicted_n":10,"predicted_per_second":102.45061880173756,"predicted_per_token_ms":9.7608,"prompt_ms":51.974,"prompt_n":50,"prompt_per_second":962.0194712740986,"prompt_per_token_ms":1.03948},"tokens_cached":59,"tokens_evaluated":50,"tokens_predicted":10,"truncated":false}',
          headers: {
            'content-type': 'application/json; charset=utf-8',
          },
        };
      } else {
        return {
          status: 404,
          body: 'Not Found',
        };
      }
    });
    // fetchMock.doMock();
    fetchMock.dontMock();
    */
  })

  afterAll(()=>{
    llamaCpp.unregister()
    testLLMProvider.unregister()
    // fetchMock.dontMock();
  })

  beforeEach(() => {
    // db.prepare('DELETE FROM kv').run()
  });

  await testGeneration(llamaCpp);

  it('isModelNameMatched', ()=>{
    expect(llamaCpp.isModelNameMatched('c:\\df\\cc\\abc.gguf')).toBeTruthy()
    expect(llamaCpp.isModelNameMatched('c:\\df\\cc\\abc.gg')).toBeFalsy()
  })

  it('getByModel', ()=>{
    let result = LLMProvider.getByModel('hi/world/no.test')
    expect(result).toStrictEqual(testLLMProvider)
    result = LLMProvider.getByModel('hi/world/no.gguf')
    expect(result).toStrictEqual(llamaCpp)
  })

  it('getByModel via protocol', ()=>{
    const result = LLMProvider.getByModel('llamacpp://hi/world/no.test')
    expect(result).toStrictEqual(llamaCpp)
  })


  it('should get current model info', async ()=>{
    const result = await llamaCpp.getModelInfo()
    expect(result).toHaveProperty('name')
  })

  it('should get model info', async ()=>{
    let result = await llamaCpp.getModelInfo()
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('max_tokens')
    expect(result).toHaveProperty('content_size')
    expect(result).toHaveProperty('temperature')
  })

  it('should generate text with custom stop words merged', async () => {
    const result = await llamaCpp.run({
      value: messages,
      options: {max_tokens:1024, temperature: 0, stop_words: ['='], add_generation_prompt: true}
    })
    const llmSettings = result.options.generation_settings
    // expect(llmSettings.max_tokens).toBe(1024) // current llama.cpp can not return the user configured max_tokens
    expect(llmSettings.stop_words).toContain('=')
    expect(result.content.trim()).toMatch(/^5|(2\s*[+]\s*3\s*([=]|(equal)[s]?)\s*5)($|\.)/i)
    expect(llmSettings.stream).toBeFalsy()
    expect(result.finishReason).toStrictEqual('stop')
    // expect(result.options.stopped_word).toBeTruthy()
    // expect(result.options.stopping_word).toStrictEqual('User:')
  });

  it('should generate text with max_tokens option', async () => {
    const result = await llamaCpp.run({
      value: messages,
      options: {max_tokens:1, temperature: 0, stop_words: ['='], add_generation_prompt: true}
    })
    const llmSettings = result.options.generation_settings
    expect(llmSettings.max_tokens).toBe(1) // current llama.cpp can not return the user configured max_tokens
    expect(llmSettings.stop_words).toContain('=')
    expect(result.content.trim().length).toBe(1)
    expect(llmSettings.stream).toBeFalsy()
    expect(result.finishReason).toStrictEqual('length')
    // expect(result.options.stopped_word).toBeTruthy()
    // expect(result.options.stopping_word).toStrictEqual('User:')
  });

  it('should generate text stream with max_tokens option', async () => {
    const stream = await llamaCpp.run({
      value: messages,
      options: {stream: true, max_tokens:1, temperature: 0, stop_words: ['='], add_generation_prompt: true}
    })
    expect(stream).toBeInstanceOf(ReadableStream)
    const reader = stream.getReader()
    let err: any
    const chunks: any[] = []
    try {
      while (true) {
        const chunk = await reader.read(); // read data in chunks
        if (chunk.done) break; // exit loop when done reading the stream
        // console.log('Chunk received:', chunk.value); // process or handle each chunk as needed
        chunks.push(chunk.value)
      }
    } catch (error) {
      console.error('An error occurred while consuming data from ReadableStream:', error);
      err = error
    } finally {
      reader.releaseLock()
    }
    const content = chunks.map(i=>i.content).join('').trim()
    const lastChunk = chunks.pop()
    const llmSettings = lastChunk.options.generation_settings
    expect(llmSettings.max_tokens).toBe(1) // current llama.cpp can not return the user configured max_tokens
    expect(llmSettings.stop_words).toContain('=')
    expect(content.trim().length).toBe(1)
    expect(llmSettings.stream).toBeTruthy()
    expect(lastChunk.finishReason).toStrictEqual('length')
    // expect(result.options.stopped_word).toBeTruthy()
    // expect(result.options.stopping_word).toStrictEqual('User:')
  });

  it('should tokenize', async ()=>{
    let result = await llamaCpp.tokenize('hello world')
    expect(result).toHaveProperty('length')
    expect(result.length).toBeGreaterThan(1)
    result = await llamaCpp.tokenize('你好世界')
    expect(result).toHaveProperty('length')
    expect(result.length).toBeGreaterThan(1)
  })

  it('should count tokenize length', async ()=>{
    let result = await llamaCpp.countTokens('hello world')
    expect(result).toBeGreaterThan(1)
    result = await llamaCpp.countTokens('你好世界')
    expect(result).toBeGreaterThan(1)
  })

  describe('LlmProvider', async ()=>{
    beforeAll(()=>{
      llm.setCurrentProvider(LlamaCppProviderName)
    })

    it('should current provider is llamacpp', async ()=>{
      expect(llm.getCurrentProvider()).toStrictEqual(llamaCpp)
    })

    it('should get current model info', async ()=>{
      const model = await llm.getModelInfo('llamacpp://.')
      expect(model).toHaveProperty('name')
      expect(model).toHaveProperty('max_tokens')
      expect(model).toHaveProperty('content_size')
      expect(model).toHaveProperty('temperature')
      expect(model?.provider).toStrictEqual(LlamaCppProviderName)
    })

    it('should list providers', async ()=>{
      let providers = llm.listProviders()
      expect(Object.keys(providers).length).toBeGreaterThanOrEqual(2)
      expect(providers[LlamaCppProviderName]).toStrictEqual(llamaCpp)
      expect(providers['LLMTest']).toStrictEqual(testLLMProvider)
      expect(llamaCpp).toHaveProperty('enabled', true)
      expect(testLLMProvider).toHaveProperty('enabled', true)
      testLLMProvider.enabled = false
      try {
        providers = llm.listProviders()
        expect(Object.keys(providers).length).toBeGreaterThanOrEqual(1)
        expect(providers[LlamaCppProviderName]).toStrictEqual(llamaCpp)
        expect(providers['LLMTest']).toBeUndefined()
        providers = llm.listProviders({all: true})
        expect(Object.keys(providers).length).toBeGreaterThanOrEqual(2)
        expect(providers[LlamaCppProviderName]).toStrictEqual(llamaCpp)
        expect(providers['LLMTest']).toStrictEqual(testLLMProvider)
        providers = llm.listProviders({all: true, filter: /Test$/})
        expect(Object.keys(providers).length).toBeGreaterThanOrEqual(1)
        expect(providers[LlamaCppProviderName]).toBeUndefined()
        expect(providers['LLMTest']).toStrictEqual(testLLMProvider)
        } finally {
        testLLMProvider.enabled = true
      }
    })

    await testGeneration(llm);

  })
});

function numToStr(num: number, fractionDigits = 2) {
  let result = ''
  if (num >= 1e12) { result = (num / 1e12).toFixed(fractionDigits) + 'T' }
  else if (num >= 1e9) { result = (num / 1e9).toFixed(fractionDigits) + 'B' }
  else if (num >= 1e6) { result = (num / 1e6).toFixed(fractionDigits) + 'M' }
  else if (num >= 1e3) { result = (num / 1e3).toFixed(fractionDigits) + 'K' }
  else { result = num.toFixed(fractionDigits) }
  return result
}