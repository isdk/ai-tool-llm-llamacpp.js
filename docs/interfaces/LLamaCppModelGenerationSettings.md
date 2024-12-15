[**@isdk/ai-tool-llm-llamacpp**](../README.md) • **Docs**

***

[@isdk/ai-tool-llm-llamacpp](../globals.md) / LLamaCppModelGenerationSettings

# Interface: LLamaCppModelGenerationSettings

## Extends

- [`LlamaModelOptions`](LlamaModelOptions.md)

## Properties

### cache\_prompt?

> `optional` **cache\_prompt**: `boolean`

Save the prompt and generation for avoid reprocess entire prompt if a part of this isn't change (default: false)

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`cache_prompt`](LlamaModelOptions.md#cache_prompt)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:127](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L127)

***

### content\_size?

> `optional` **content\_size**: `number`

Specify the context window size of the model that you have loaded.

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`content_size`](LlamaModelOptions.md#content_size)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:34

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Repeat alpha frequency penalty (default: 0.0, 0.0 = disabled).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`frequency_penalty`](LlamaModelOptions.md#frequency_penalty)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:66](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L66)

***

### gen\_count?

> `optional` **gen\_count**: `number`

Number of texts to generate.

Specifies the number of responses or completions the model should generate for a given prompt.
This is useful when you need multiple different outputs or ideas for a single prompt.
The model will generate 'n' distinct responses, each based on the same initial prompt.
In a streaming model this will result in both responses streamed back in real time.

Does nothing if the model does not support this setting.

Example: `gen_count: 3` // The model will produce 3 different responses.

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`gen_count`](LlamaModelOptions.md#gen_count)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:63

***

### grammar?

> `optional` **grammar**: `string`

Set grammar for grammar-based sampling (default: no grammar)

#### See

https://github.com/ggerganov/llama.cpp/blob/master/grammars/README.md

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`grammar`](LlamaModelOptions.md#grammar)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:96](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L96)

***

### ignore\_eos?

> `optional` **ignore\_eos**: `boolean`

Ignore end of stream token and continue generating (default: false).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`ignore_eos`](LlamaModelOptions.md#ignore_eos)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:107](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L107)

***

### logit\_bias?

> `optional` **logit\_bias**: [`number`, `number` \| `false`][]

Modify the likelihood of a token appearing in the generated text completion.
For example, use "logit_bias": [[15043,1.0]] to increase the likelihood of the token
'Hello', or "logit_bias": [[15043,-1.0]] to decrease its likelihood.
Setting the value to false, "logit_bias": [[15043,false]] ensures that the token Hello is
never produced (default: []).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`logit_bias`](LlamaModelOptions.md#logit_bias)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:116](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L116)

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Specifies the maximum number of tokens (words, punctuation, parts of words) that the model can generate in a single response.
It helps to control the length of the output.

Does nothing if the model does not support this setting.

Example: `max_tokens: 1000`

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`max_tokens`](LlamaModelOptions.md#max_tokens)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:29

***

### min\_p?

> `optional` **min\_p**: `number`

The minimum probability for a token to be considered, relative to the probability of the most likely token (default: 0.05).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`min_p`](LlamaModelOptions.md#min_p)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:24](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L24)

***

### mirostat?

> `optional` **mirostat**: `number`

Enable Mirostat sampling, controlling perplexity during text generation
(default: 0, 0 = disabled, 1 = Mirostat, 2 = Mirostat 2.0).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`mirostat`](LlamaModelOptions.md#mirostat)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:79](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L79)

***

### mirostat\_eta?

> `optional` **mirostat\_eta**: `number`

Set the Mirostat learning rate, parameter eta (default: 0.1).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`mirostat_eta`](LlamaModelOptions.md#mirostat_eta)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:89](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L89)

***

### mirostat\_tau?

> `optional` **mirostat\_tau**: `number`

Set the Mirostat target entropy, parameter tau (default: 5.0).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`mirostat_tau`](LlamaModelOptions.md#mirostat_tau)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:84](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L84)

***

### model?

> `optional` **model**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:518](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L518)

***

### model\_id?

> `optional` **model\_id**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:519](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L519)

***

### n\_keep?

> `optional` **n\_keep**: `number`

Specify the number of tokens from the prompt to retain when the context size is exceeded
and tokens need to be discarded. By default, this value is set to 0 (meaning no tokens
are kept). Use -1 to retain all tokens from the prompt.

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`n_keep`](LlamaModelOptions.md#n_keep)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:31](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L31)

***

### n\_predict?

> `optional` **n\_predict**: `number`

maximum tokens to predict, -1 means no limits.
It could not exceed the server's n_predict.

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`n_predict`](LlamaModelOptions.md#n_predict)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:139](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L139)

***

### n\_probs?

> `optional` **n\_probs**: `number`

If greater than 0, the response also contains the probabilities of top N tokens
for each generated token (default: 0)

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`n_probs`](LlamaModelOptions.md#n_probs)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:122](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L122)

***

### penalize\_nl?

> `optional` **penalize\_nl**: `boolean`

Penalize newline tokens when applying the repeat penalty (default: true).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`penalize_nl`](LlamaModelOptions.md#penalize_nl)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:56](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L56)

***

### penalty\_prompt?

> `optional` **penalty\_prompt**: `string` \| `number`[]

This will replace the prompt for the purpose of the penalty evaluation.
Can be either null, a string or an array of numbers representing tokens
(default: null = use the original prompt).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`penalty_prompt`](LlamaModelOptions.md#penalty_prompt)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:73](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L73)

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Repeat alpha presence penalty (default: 0.0, 0.0 = disabled).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`presence_penalty`](LlamaModelOptions.md#presence_penalty)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:61](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L61)

***

### repeat\_last\_n?

> `optional` **repeat\_last\_n**: `number`

Last n tokens to consider for penalizing repetition (default: 64, 0 = disabled, -1 = ctx-size).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`repeat_last_n`](LlamaModelOptions.md#repeat_last_n)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:51](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L51)

***

### repeat\_penalty?

> `optional` **repeat\_penalty**: `number`

Control the repetition of token sequences in the generated text (default: 1.1).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`repeat_penalty`](LlamaModelOptions.md#repeat_penalty)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:46](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L46)

***

### response\_format?

> `optional` **response\_format**: `AIResponseFormat`

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`response_format`](LlamaModelOptions.md#response_format)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:72

***

### samplers

> **samplers**: `string`[]

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:520](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L520)

***

### seed?

> `optional` **seed**: `number`

Set the random number generator (RNG) seed
(default: -1, -1 = random seed).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`seed`](LlamaModelOptions.md#seed)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:102](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L102)

***

### slot\_id?

> `optional` **slot\_id**: `number`

Assign the completion task to an specific slot.
If is -1 the task will be assigned to a Idle slot (default: -1)

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`slot_id`](LlamaModelOptions.md#slot_id)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:133](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L133)

***

### stop?

> `optional` **stop**: `string`[]

Stop generation when any of these tokens are generated in llama.cpp.
same as stop_words in ai-tool-llm

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`stop`](LlamaModelOptions.md#stop)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:9](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L9)

***

### stop\_words?

> `optional` **stop\_words**: `string` \| `string`[]

Stop sequences to use.
Stop sequences are an array of strings or a single string that the model will recognize as end-of-text indicators.
The model stops generating more content when it encounters any of these strings.
This is particularly useful in scripted or formatted text generation, where a specific end point is required.
Stop sequences not included in the generated text.

Does nothing if the model does not support this setting.

Example: `stop_words: ['\n', 'END']`

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`stop_words`](LlamaModelOptions.md#stop_words)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:46

***

### stream?

> `optional` **stream**: `boolean`

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`stream`](LlamaModelOptions.md#stream)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:71

***

### temperature?

> `optional` **temperature**: `number`

Adjust the randomness of the generated text.

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`temperature`](LlamaModelOptions.md#temperature)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:20

***

### tfs\_z?

> `optional` **tfs\_z**: `number`

Enable tail free sampling with parameter z (default: 1.0, 1.0 = disabled).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`tfs_z`](LlamaModelOptions.md#tfs_z)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:36](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L36)

***

### top\_k?

> `optional` **top\_k**: `number`

Limit the next token selection to the K most probable tokens (default: 40).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`top_k`](LlamaModelOptions.md#top_k)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:14](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L14)

***

### top\_p?

> `optional` **top\_p**: `number`

Limit the next token selection to a subset of tokens with a cumulative probability above a threshold P (default: 0.95).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`top_p`](LlamaModelOptions.md#top_p)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:19](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L19)

***

### trim?

> `optional` **trim**: `boolean`

When true, the leading and trailing white space and line terminator characters
are removed from the generated text.

Default: true.

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`trim`](LlamaModelOptions.md#trim)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:70

***

### typical\_p?

> `optional` **typical\_p**: `number`

Enable locally typical sampling with parameter p (default: 1.0, 1.0 = disabled).

#### Inherited from

[`LlamaModelOptions`](LlamaModelOptions.md).[`typical_p`](LlamaModelOptions.md#typical_p)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:41](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L41)

***

### use\_penalty\_prompt\_tokens

> **use\_penalty\_prompt\_tokens**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:521](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/4a295abe49bf283a8ebce2bd5c5b428e7aeec859/src/options.ts#L521)
