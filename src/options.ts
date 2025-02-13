import { AIResult, AIStreamParser, AsyncTaskId } from "@isdk/ai-tool";
import { AIOptions, AILavaModelSettings, AIModelQuantType, AITextGenerationOptions, flip, mapApiOptions, } from "@isdk/ai-tool-llm";

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

// e_model
export enum LlmSizeType {
  Unknown,
  _14M,
  _17M,
  _22M,
  _33M,
  _60M,
  _70M,
  _80M,
  _109M,
  _137M,
  _160M,
  _220M,
  _250M,
  _270M,
  _335M,
  _410M,
  _450M,
  _770M,
  _780M,
  _0_5B,
  _1B,
  _1_3B,
  _1_4B,
  _2B,
  _2_8B,
  _3B,
  _4B,
  _6B,
  _6_9B,
  _7B,
  _8B,
  _9B,
  _11B,
  _12B,
  _13B,
  _14B,
  _15B,
  _16B,
  _20B,
  _30B,
  _34B,
  _35B,
  _40B,
  _65B,
  _70B,
  _236B,
  _314B,
  _SMALL,
  _MEDIUM,
  _LARGE,
  _XL,
  _A2_7B,
  _8x7B,
  _8x22B,
  _16x12B,
  _10B_128x3_66B,
  _57B_A14B,
  _27B,
}

//src/llama.cpp llm_arch
export enum LlmArch {
  Llama,
  Falcon,
  Grok,
  Gpt2,
  Gptj,
  Gptneox,
  Mpt,
  Baichuan,
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
  Gemma2,
  Starcoder2,
  Mamba,
  Xverse,
  Command_r,
  Dbrx,
  Olmo,
  Openelm,
  Arctic,
  Deepseek2,
  Chatglm,
  Bitnet,
  T5,
  T5encoder,
  Jais,
  Nemotron,
  Exaone,
  Unknown,
}

// llama_vocab_type
export enum LlamaVocabType {
  NONE, // For models without vocab
  SPM, // SentencePiece
  BPE, // Byte Pair Encoding
  WPM, // WordPiece
  UGM, // T5 tokenizer based on Unigram
}

// llama_split_mode
export enum LlamaSplitMode {
  SPLIT_MODE_NONE    = 0, // single GPU
  SPLIT_MODE_LAYER   = 1, // split layers and KV across GPUs
  SPLIT_MODE_ROW     = 2, // split rows across GPUs
}

// common/common.h gpt_params
// common/common.cpp gpt_params_find_arg
export interface LlamaLoadModelOptions extends AIOptions {
  host?: string
  port?: number
  api_key?: string
  ssl_key_file?: string
  ssl_cert_file?: string
  timeout?: number
  threads_http?: number
  version?: boolean

  // log_format?: 'json' | 'text'
  simple_io?: boolean   // use basic IO for better compatibility in subprocesses and limited consoles
  logdir?: string       // path under which to save YAML logs (no logging if unset)
  log_disable?: boolean // Disable trace logs
  log_enable?: boolean  // Enable trace logs
  log_file?: string     // Specify a log filename (without extension)
  log_new?: boolean     // Create a separate new log file on start. Each log file will have unique name: "<name>.<ID>.log"
  log_append?: boolean  // Don't truncate the old log file.
  log_colors?: boolean
  log_verbose?: boolean
  log_verbosity?: number // Set the verbosity threshold. Messages with a higher verbosity will be
  log_prefix?: boolean
  log_timestamps?: boolean

  no_slots?: boolean

  threads?: number
  threads_batch?: number
  threads_draft?: number
  threads_batch_draft?: number
  escape?: boolean
  no_escape?: boolean
  path_prompt_cache?: string
  prompt_cache_all?: boolean  // save user input and generations to prompt cache
  prompt_cache_ro?: boolean   // open the prompt cache read-only and do not update it
  predict?: number            // number of tokens to predict (default: -1, -1 = infinity, -2 = until context filled)
  /**
   * Specify the context window size of the model that you have loaded in your
   * Llama.cpp server.
  // Set the size of the prompt context. The default is 512, but LLaMA models were built with a context of 2048, which will provide better results for longer input/inference.
  // The size may differ in other models, for example, baichuan models were build with a context of 4096.
   */
  ctx_size?: number // size of the prompt context (default: 0, 0 = loaded from model)
  grp_attn_n?: number
  grp_attn_w?: number
  rope_freq_base?: number
  rope_freq_scale?: number
  rope_scaling?: LlamaRopeScalingType
  rope_scale?: number
  yarn_orig_ctx?: number
  yarn_ext_factor?: number
  yarn_attn_factor?: number
  yarn_beta_fast?: number
  yarn_beta_slow?: number
  pooling?: 'none'|'mean'|'cls'|'last'
  attention?: 'causal'|'non-causal'
  defrag_thold?: number
  samplers?: string
  samplers_sequence?: string

  batch_size?: number
  ubatch_size?: number
  keep?: number     // number of tokens to keep from the initial prompt (default: 0, -1 = all)
  draft?: number    // number of tokens to draft for speculative decoding (default: 5)
  chunks?: number   // max number of chunks to process (default: -1, -1 = all)
  parallel?: number
  sequences?: number  // number of sequences to decode (default: 1)
  p_split?: number    // speculative decoding split probability (default: 0.1)

  model: string
  model_draft?: string // draft model for speculative decoding
  model_alias?: string
  model_url?: string
  hf_token?: string
  hf_repo?: string
  hf_file?: string

  lora?: LoraItem|LoraItems
  lora_init_without_apply?: boolean
  // lora_base?: string

  // the projector model name
  mmproj?: string
  image?: string // path to image file
  special?: boolean // enable special token output
  embedding?: boolean
  embd_normalize?: number
  embd_output_format?: ""|"array"|"json"|"json+" // empty = default, "array" = [[],[]...], "json" = openai style, "json+" = same "json" + cosine similarity matrix
  embd_sep?: string // separator of embendings, defaults to "\n"
  conversation?: boolean // conversation mode (does not print special tokens and suffix/prefix)
  infill?: boolean // enable infilling mode should disable embedding mode
  dump_kv_cache?: boolean // dump the KV cache contents for debugging purposes
  no_kv_offload?: boolean // disable KV offloading
  cache_type_k?: LlamaCacheQuantType
  cache_type_v?: LlamaCacheQuantType
  multiline_input?: boolean
  cont_batching?: boolean
  no_cont_batching?: boolean
  flash_attn?: boolean    // enable Flash Attention (default: disabled)
  use_mlock?: boolean
  gpu_layers?: number
  gpu_layers_draft?: number
  main_gpu?: number
  split_mode?: LlamaSplitMode
  tensor_split?: string
  rpc_servers?: string
  use_mmap?: boolean
  numa?: 'distribute'|'isolate'|'numactl'
  verbosity?: number
  verbose_prompt?: boolean
  reverse_prompt?: boolean
  display_prompt?: boolean
  lookup_cache_static?: string
  lookup_cache_dynamic?: string
  logits_file?: string
  logits_all?: boolean
  check_tensors?: boolean
}

export const LlamaLoadModelOptionsKeys: (keyof LlamaLoadModelOptions)[] = [
  'threads',
  'threads_batch',
  'threads_draft',
  'threads_batch_draft',
  'escape',
  'path_prompt_cache',
  'prompt_cache_all',
  'prompt_cache_ro',
  'predict',
  'ctx_size',
  'grp_attn_n',
  'grp_attn_w',
  'rope_freq_base',
  'rope_freq_scale',
  'rope_scaling',
  'yarn_orig_ctx',
  'yarn_ext_factor',
  'yarn_attn_factor',
  'yarn_beta_fast',
  'yarn_beta_slow',
  'pooling',
  'attention_type',
  'defrag_thold',
  'samplers',
  'samplers_sequence',
  'batch_size',
  'ubatch_size',
  'keep',
  'draft',
  'chunks',
  'parallel',
  'sequences',
  'p_split',
  'model',
  'model_draft',
  'model_alias',
  'model_url',
  'hf_token',
  'hf_repo',
  'hf_file',
  'lora',
  'lora_init_without_apply',
  'mmproj',
  'image',
  'special',
  'embedding',
  'embd_normalize',
  'embd_output_format',
  'embd_sep',
  'conversation',
  'infill',
  'dump_kv_cache',
  'no_kv_offload',
  'cache_type_k',
  'cache_type_v',
  'multiline_input',
  'cont_batching',
  'flash_attn',
  'use_mlock',
  'gpu_layers',
  'gpu_layers_draft',
  'main_gpu',
  'split_mode',
  'tensor_split',
  'rpc_servers',
  'use_mmap',
  'numa',
  'verbosity',
  'verbose_prompt',
  'reverse_prompt',
  'display_prompt',
  'logdir',
  'lookup_cache_static',
  'lookup_cache_dynamic',
  'logits_file',
  'logits_all',
  'check_tensors',
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
  stop_type: 'none'|'eos'|'limit'|'word'
  chatTemplateId?: {id: string, version?: string}
  taskId?: AsyncTaskId
}

export type LlamaCppAIStreamParser<T = LLamaCppResult> = AIStreamParser<string, T>
export type LlamaCppAIResult = AIResult<string, LLamaCppResult>

function toApiOptions(opts: LlamaModelOptions) {
  return mapApiOptions<LlamaModelOptions>(opts, ReverseAIOptionsMap)
}

export function llamaCppToAIResult(data: LLamaCppResult): LlamaCppAIResult {
  const result: LlamaCppAIResult = {content: data.content, options: data}
  if (data.stop) {
    if (data.stopped_eos || data.stopped_word || data.stop_type === 'eos' || data.stop_type === 'word') {
      result.finishReason = 'stop'
    } else if (data.stopped_limit || data.stop_type === 'limit') {
      result.finishReason = 'length'
    } else {
      result.finishReason = null
    }
  }
  if (data.stop !== undefined) {result.stop = data.stop}
  if (data.generation_settings) {
    const max_tokens = data.generation_settings.max_tokens
    data.generation_settings = toApiOptions(data.generation_settings) as any
    data.generation_settings.model_id = data.model

    if (max_tokens) {data.generation_settings.max_tokens = max_tokens}
  }

  return result
}

export function parseLlamaCppStream(opt?: any): LlamaCppAIStreamParser {
  return data => {
    const result = JSON.parse(data)
    return llamaCppToAIResult({...opt, ...result})
  }
}

export const AIOptionsMap = {
  max_tokens: 'n_predict',
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
