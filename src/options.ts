import { AIResult, AIStreamParser, AsyncTaskId } from "@isdk/ai-tool";
import { AIOptions, AILavaModelSettings, AIModelQuantType, AITextGenerationOptions, flip, } from "@isdk/ai-tool-llm";

export interface LlamaModelOptions extends AITextGenerationOptions {
  /**
   * Stop generation when any of these tokens are generated in llama.cpp.
   * same as stop_words in ai-tool-llm
   */
  stop?: string[];

  /**
   * Limit the next token selection to the K most probable tokens (default: 40).
   */
  top_k?: number;

  /**
   * Limit the next token selection to a subset of tokens with a cumulative probability above a threshold P (default: 0.95).
   */
  top_p?: number;

  /**
   * The minimum probability for a token to be considered, relative to the probability of the most likely token (default: 0.05).
   */
  min_p?: number;

  /**
   * Specify the number of tokens from the prompt to retain when the context size is exceeded
   * and tokens need to be discarded. By default, this value is set to 0 (meaning no tokens
   * are kept). Use -1 to retain all tokens from the prompt.
   */
  n_keep?: number;

  /**
   * Enable tail free sampling with parameter z (default: 1.0, 1.0 = disabled).
   */
  tfs_z?: number;

  /**
   * Enable locally typical sampling with parameter p (default: 1.0, 1.0 = disabled).
   */
  typical_p?: number;

  /**
   * Control the repetition of token sequences in the generated text (default: 1.1).
   */
  repeat_penalty?: number;

  /**
   * Last n tokens to consider for penalizing repetition (default: 64, 0 = disabled, -1 = ctx-size).
   */
  repeat_last_n?: number;

  /**
   * Penalize newline tokens when applying the repeat penalty (default: true).
   */
  penalize_nl?: boolean;

  /**
   * Repeat alpha presence penalty (default: 0.0, 0.0 = disabled).
   */
  presence_penalty?: number;

  /**
   * Repeat alpha frequency penalty (default: 0.0, 0.0 = disabled).
   */
  frequency_penalty?: number;

  /**
   * This will replace the prompt for the purpose of the penalty evaluation.
   * Can be either null, a string or an array of numbers representing tokens
   * (default: null = use the original prompt).
   */
  penalty_prompt?: string | number[];

  /**
   * Enable Mirostat sampling, controlling perplexity during text generation
   * (default: 0, 0 = disabled, 1 = Mirostat, 2 = Mirostat 2.0).
   */
  mirostat?: number;

  /**
   * Set the Mirostat target entropy, parameter tau (default: 5.0).
   */
  mirostat_tau?: number;

  /**
   * Set the Mirostat learning rate, parameter eta (default: 0.1).
   */
  mirostat_eta?: number;

  /**
   * Set grammar for grammar-based sampling (default: no grammar)
   *
   * @see https://github.com/ggerganov/llama.cpp/blob/master/grammars/README.md
   */
  grammar?: string;

  /**
   * Set the random number generator (RNG) seed
   * (default: -1, -1 = random seed).
   */
  seed?: number;

  /**
   * Ignore end of stream token and continue generating (default: false).
   */
  ignore_eos?: boolean;

  /**
   * Modify the likelihood of a token appearing in the generated text completion.
   * For example, use "logit_bias": [[15043,1.0]] to increase the likelihood of the token
   * 'Hello', or "logit_bias": [[15043,-1.0]] to decrease its likelihood.
   * Setting the value to false, "logit_bias": [[15043,false]] ensures that the token Hello is
   * never produced (default: []).
   */
  logit_bias?: Array<[number, number | false]>;

  /**
   * If greater than 0, the response also contains the probabilities of top N tokens
   * for each generated token (default: 0)
   */
  n_probs?: number;

  /**
   * Save the prompt and generation for avoid reprocess entire prompt if a part of this isn't change (default: false)
   */
  cache_prompt?: boolean;

  /**
   * Assign the completion task to an specific slot.
   * If is -1 the task will be assigned to a Idle slot (default: -1)
   */
  slot_id?: number;

  /**
   * maximum tokens to predict, -1 means no limits.
   * It could not exceed the server's n_predict.
   */
  n_predict?: number;
}

export type LlamaRopeScalingType = 'none' | 'linear' | 'yarn'
export type LlamaCacheQuantType = 'f32' | 'f16' | 'q8_0' | 'q4_0' | 'q4_1' | 'q5_0' | 'q5_1'

export interface LoraItemObject {
  // the lora model name
  name: string
  scale?: number
}

export type LoraItem = LoraItemObject | string
export type LoraItems = LoraItem[]

export enum LlmSizeType {
  Unknown,
  _17M,
  _22M,
  _33M,
  _109M,
  _137M,
  _335M,
  _0_5B,
  _1B,
  _2B,
  _3B,
  _4B,
  _7B,
  _8B,
  _13B,
  _14B,
  _15B,
  _20B,
  _30B,
  _34B,
  _35B,
  _40B,
  _65B,
  _70B,
  Small,
  Medium,
  Large,
  XL,
}

export enum LlmArch {
  Llama,
  Falcon,
  Baichuan,
  Grok,
  Gpt2,
  Gptj,
  Gptneox,
  Mpt,
  Starcoder,
  Refact,
  Bert,
  Nomic_bert,
  Jina_bert_v2,
  Bloom,
  Stablelm,
  Qwen,
  Qwen2,
  Qwen2moe,
  Phi2,
  Phi3,
  Plamo,
  Codeshell,
  Orion,
  Internlm2,
  Minicpm,
  Gemma,
  Starcoder2,
  Mamba,
  Xverse,
  Command_r,
  Dbrx,
  Olmo,
  Arctic,
  Deepseek2,
  Unknown,
}

export enum LlamaVocabType {
  None, // For models without vocab
  Spm, // SentencePiece
  Bpe, // Byte Pair Encoding
  Wpm, // WordPiece
}

export interface LlamaLoadModelOptions extends AIOptions {
  model: string
  // the projector model name
  mmproj?: string
  // the model alias
  alias?: string
  gpu_layers?: number
  /**
   * Specify the context window size of the model that you have loaded in your
   * Llama.cpp server.
  // Set the size of the prompt context. The default is 512, but LLaMA models were built with a context of 2048, which will provide better results for longer input/inference.
  // The size may differ in other models, for example, baichuan models were build with a context of 4096.
   */
  n_ctx?: number
  embedding?: boolean
  batch?: number
  parallel?: number
  threads?: number
  n_threads_batch?: number
  grp_attn_n?: number
  grp_attn_w?: number
  rope_scaling?: LlamaRopeScalingType
  rope_freq_base?: number
  rope_freq_scale?: number
  yarn_ext_factor?: number
  yarn_attn_factor?: number
  yarn_beta_fast?: number
  yarn_beta_slow?: number
  use_mmap?: boolean
  use_mlock?: boolean
  cont_batching?: boolean
  n_predict?: number
  cache_type_k?: LlamaCacheQuantType
  cache_type_v?: LlamaCacheQuantType
  lora?: LoraItem|LoraItems
  lora_base?: string
}

export const LlamaLoadModelOptionsKeys: (keyof LlamaLoadModelOptions)[] = [
  'mmproj',
  'alias',
  'gpu_layers',
  'n_ctx',
  'embedding',
  'batch',
  'parallel',
  'threads',
  'n_threads_batch',
  'grp_attn_n',
  'grp_attn_w',
  'rope_scaling',
  'rope_freq_base',
  'rope_freq_scale',
  'yarn_ext_factor',
  'yarn_attn_factor',
  'yarn_beta_fast',
  'yarn_beta_slow',
  'use_mmap',
  'use_mlock',
  'cont_batching',
  'cache_type_k',
  'cache_type_v',
  'lora',
  'lora_base',
];

enum LlamaCppServerState {
  LoadingModel, // Server is starting up, model not fully loaded yet
  Ready,        // Server is ready and model is loaded
  Unloaded,     // model unloaded
  Error,        // An error occurred, load_model failed
}

export interface LlamaModelSettings {
  model: string
  state?: LlamaCppServerState
  arch?: LlmArch
  size_type?: LlmSizeType
  size?: number
  quant?: AIModelQuantType
  vocab_type?: LlamaVocabType
  /**
   * the content length in train
   */
  n_ctx_train?: number
  /**
   * the model params size in bytes
   */
  n_params?: number
  /**
   * the quanted model size in bytes
   */
  n_vocab?: number
  n_embd?: number
  chat_template?: string
  [name: string]: any
}

export interface LlamaLavaModelSettings extends AILavaModelSettings {
  n_embd?: number
}

export interface LLamaCppModelGenerationSettings extends LlamaModelOptions {
  model?: string
  model_id?: string
  samplers: string[]
  use_penalty_prompt_tokens: boolean
}

export interface LLamaCppModelTimings {
  predicted_ms: number
  predicted_n: number
  predicted_per_second: number
  predicted_per_token_ms: number
  prompt_ms: number
  prompt_n: number
  prompt_per_second: number
  prompt_per_token_ms: number
}

export interface LLamaCppPartResult {
  content: string
  multimodal?: boolean
  slot_id: number
  stop: boolean
}

export interface LLamaCppResult {
  content: string
  generation_settings: LLamaCppModelGenerationSettings
  model: string
  prompt: string
  slot_id: number
  stop: boolean
  stopped_eos: boolean
  stopped_limit: boolean
  stopped_word: boolean
  stopping_word: string
  timings: LLamaCppModelTimings
  tokens_cached: number
  tokens_evaluated: number
  tokens_predicted: number
  truncated: boolean
  chatTemplateId?: {id: string, version?: string}
  taskId?: AsyncTaskId
}

export type LlamaCppAIStreamParser<T = LLamaCppResult> = AIStreamParser<string, T>
export type LlamaCppAIResult = AIResult<string, LLamaCppResult>

export function llamaCppToAIResult(data: LLamaCppResult): LlamaCppAIResult {
  const result: LlamaCppAIResult = {content: data.content, options: data}
  if (data.stop) {
    if ((data as LLamaCppResult).stopped_eos || (data as LLamaCppResult).stopped_word) {
      result.finishReason = 'stop'
    } else if ((data as LLamaCppResult).stopped_limit) {
      result.finishReason = 'length'
    } else {
      result.finishReason = null
    }
  }
  if (data.stop !== undefined) {result.stop = data.stop}
  return result
}

export function parseLlamaCppStream(opt?: any): LlamaCppAIStreamParser {
  return data => {
    const result = JSON.parse(data)
    return llamaCppToAIResult({...opt, ...result})
  }
}

export const AIOptionsMap = {
  // max_tokens: 'n_predict',
  stop_words: 'stop',
  content_size: 'n_ctx',
  'response_format.type': 'grammar_id',
  'response_format.schema': 'json_schema',
}

export const ReverseAIOptionsMap = flip(AIOptionsMap);

export const AILoadModelOptionsMap = {
  content_size: 'n_ctx',
  stop_words: 'stop',
}

export const ReverseAILoadModelOptions = flip(AILoadModelOptionsMap)

export const AIModelSettingsMap = {
  model: 'name',
  // n_predict: 'max_tokens',
  n_ctx: 'content_size',
}
