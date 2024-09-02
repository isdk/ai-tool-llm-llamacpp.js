[@isdk/ai-tool-llm-llamacpp](../README.md) / [Exports](../modules.md) / LLamaCppModelGenerationSettings

# Interface: LLamaCppModelGenerationSettings

## Hierarchy

- [`LlamaModelOptions`](LlamaModelOptions.md)

  ↳ **`LLamaCppModelGenerationSettings`**

## Table of contents

### Properties

- [cache\_prompt](LLamaCppModelGenerationSettings.md#cache_prompt)
- [content\_size](LLamaCppModelGenerationSettings.md#content_size)
- [frequency\_penalty](LLamaCppModelGenerationSettings.md#frequency_penalty)
- [gen\_count](LLamaCppModelGenerationSettings.md#gen_count)
- [grammar](LLamaCppModelGenerationSettings.md#grammar)
- [ignore\_eos](LLamaCppModelGenerationSettings.md#ignore_eos)
- [logit\_bias](LLamaCppModelGenerationSettings.md#logit_bias)
- [max\_tokens](LLamaCppModelGenerationSettings.md#max_tokens)
- [min\_p](LLamaCppModelGenerationSettings.md#min_p)
- [mirostat](LLamaCppModelGenerationSettings.md#mirostat)
- [mirostat\_eta](LLamaCppModelGenerationSettings.md#mirostat_eta)
- [mirostat\_tau](LLamaCppModelGenerationSettings.md#mirostat_tau)
- [model](LLamaCppModelGenerationSettings.md#model)
- [model\_id](LLamaCppModelGenerationSettings.md#model_id)
- [n\_keep](LLamaCppModelGenerationSettings.md#n_keep)
- [n\_predict](LLamaCppModelGenerationSettings.md#n_predict)
- [n\_probs](LLamaCppModelGenerationSettings.md#n_probs)
- [penalize\_nl](LLamaCppModelGenerationSettings.md#penalize_nl)
- [penalty\_prompt](LLamaCppModelGenerationSettings.md#penalty_prompt)
- [presence\_penalty](LLamaCppModelGenerationSettings.md#presence_penalty)
- [repeat\_last\_n](LLamaCppModelGenerationSettings.md#repeat_last_n)
- [repeat\_penalty](LLamaCppModelGenerationSettings.md#repeat_penalty)
- [response\_format](LLamaCppModelGenerationSettings.md#response_format)
- [samplers](LLamaCppModelGenerationSettings.md#samplers)
- [seed](LLamaCppModelGenerationSettings.md#seed)
- [slot\_id](LLamaCppModelGenerationSettings.md#slot_id)
- [stop](LLamaCppModelGenerationSettings.md#stop)
- [stop\_words](LLamaCppModelGenerationSettings.md#stop_words)
- [stream](LLamaCppModelGenerationSettings.md#stream)
- [temperature](LLamaCppModelGenerationSettings.md#temperature)
- [tfs\_z](LLamaCppModelGenerationSettings.md#tfs_z)
- [top\_k](LLamaCppModelGenerationSettings.md#top_k)
- [top\_p](LLamaCppModelGenerationSettings.md#top_p)
- [trim](LLamaCppModelGenerationSettings.md#trim)
- [typical\_p](LLamaCppModelGenerationSettings.md#typical_p)
- [use\_penalty\_prompt\_tokens](LLamaCppModelGenerationSettings.md#use_penalty_prompt_tokens)

## Properties

### cache\_prompt

• `Optional` **cache\_prompt**: `boolean`

Save the prompt and generation for avoid reprocess entire prompt if a part of this isn't change (default: false)

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[cache_prompt](LlamaModelOptions.md#cache_prompt)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:127](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L127)

___

### content\_size

• `Optional` **content\_size**: `number`

Specify the context window size of the model that you have loaded.

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[content_size](LlamaModelOptions.md#content_size)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:33

___

### frequency\_penalty

• `Optional` **frequency\_penalty**: `number`

Repeat alpha frequency penalty (default: 0.0, 0.0 = disabled).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[frequency_penalty](LlamaModelOptions.md#frequency_penalty)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:66](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L66)

___

### gen\_count

• `Optional` **gen\_count**: `number`

Number of texts to generate.

Specifies the number of responses or completions the model should generate for a given prompt.
This is useful when you need multiple different outputs or ideas for a single prompt.
The model will generate 'n' distinct responses, each based on the same initial prompt.
In a streaming model this will result in both responses streamed back in real time.

Does nothing if the model does not support this setting.

Example: `gen_count: 3` // The model will produce 3 different responses.

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[gen_count](LlamaModelOptions.md#gen_count)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:62

___

### grammar

• `Optional` **grammar**: `string`

Set grammar for grammar-based sampling (default: no grammar)

**`See`**

https://github.com/ggerganov/llama.cpp/blob/master/grammars/README.md

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[grammar](LlamaModelOptions.md#grammar)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:96](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L96)

___

### ignore\_eos

• `Optional` **ignore\_eos**: `boolean`

Ignore end of stream token and continue generating (default: false).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[ignore_eos](LlamaModelOptions.md#ignore_eos)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:107](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L107)

___

### logit\_bias

• `Optional` **logit\_bias**: [`number`, `number` \| ``false``][]

Modify the likelihood of a token appearing in the generated text completion.
For example, use "logit_bias": [[15043,1.0]] to increase the likelihood of the token
'Hello', or "logit_bias": [[15043,-1.0]] to decrease its likelihood.
Setting the value to false, "logit_bias": [[15043,false]] ensures that the token Hello is
never produced (default: []).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[logit_bias](LlamaModelOptions.md#logit_bias)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:116](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L116)

___

### max\_tokens

• `Optional` **max\_tokens**: `number`

Specifies the maximum number of tokens (words, punctuation, parts of words) that the model can generate in a single response.
It helps to control the length of the output.

Does nothing if the model does not support this setting.

Example: `max_tokens: 1000`

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[max_tokens](LlamaModelOptions.md#max_tokens)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:28

___

### min\_p

• `Optional` **min\_p**: `number`

The minimum probability for a token to be considered, relative to the probability of the most likely token (default: 0.05).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[min_p](LlamaModelOptions.md#min_p)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:24](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L24)

___

### mirostat

• `Optional` **mirostat**: `number`

Enable Mirostat sampling, controlling perplexity during text generation
(default: 0, 0 = disabled, 1 = Mirostat, 2 = Mirostat 2.0).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[mirostat](LlamaModelOptions.md#mirostat)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:79](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L79)

___

### mirostat\_eta

• `Optional` **mirostat\_eta**: `number`

Set the Mirostat learning rate, parameter eta (default: 0.1).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[mirostat_eta](LlamaModelOptions.md#mirostat_eta)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:89](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L89)

___

### mirostat\_tau

• `Optional` **mirostat\_tau**: `number`

Set the Mirostat target entropy, parameter tau (default: 5.0).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[mirostat_tau](LlamaModelOptions.md#mirostat_tau)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:84](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L84)

___

### model

• `Optional` **model**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:491](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L491)

___

### model\_id

• `Optional` **model\_id**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:492](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L492)

___

### n\_keep

• `Optional` **n\_keep**: `number`

Specify the number of tokens from the prompt to retain when the context size is exceeded
and tokens need to be discarded. By default, this value is set to 0 (meaning no tokens
are kept). Use -1 to retain all tokens from the prompt.

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[n_keep](LlamaModelOptions.md#n_keep)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:31](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L31)

___

### n\_predict

• `Optional` **n\_predict**: `number`

maximum tokens to predict, -1 means no limits.
It could not exceed the server's n_predict.

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[n_predict](LlamaModelOptions.md#n_predict)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:139](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L139)

___

### n\_probs

• `Optional` **n\_probs**: `number`

If greater than 0, the response also contains the probabilities of top N tokens
for each generated token (default: 0)

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[n_probs](LlamaModelOptions.md#n_probs)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:122](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L122)

___

### penalize\_nl

• `Optional` **penalize\_nl**: `boolean`

Penalize newline tokens when applying the repeat penalty (default: true).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[penalize_nl](LlamaModelOptions.md#penalize_nl)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:56](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L56)

___

### penalty\_prompt

• `Optional` **penalty\_prompt**: `string` \| `number`[]

This will replace the prompt for the purpose of the penalty evaluation.
Can be either null, a string or an array of numbers representing tokens
(default: null = use the original prompt).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[penalty_prompt](LlamaModelOptions.md#penalty_prompt)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:73](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L73)

___

### presence\_penalty

• `Optional` **presence\_penalty**: `number`

Repeat alpha presence penalty (default: 0.0, 0.0 = disabled).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[presence_penalty](LlamaModelOptions.md#presence_penalty)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:61](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L61)

___

### repeat\_last\_n

• `Optional` **repeat\_last\_n**: `number`

Last n tokens to consider for penalizing repetition (default: 64, 0 = disabled, -1 = ctx-size).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[repeat_last_n](LlamaModelOptions.md#repeat_last_n)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:51](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L51)

___

### repeat\_penalty

• `Optional` **repeat\_penalty**: `number`

Control the repetition of token sequences in the generated text (default: 1.1).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[repeat_penalty](LlamaModelOptions.md#repeat_penalty)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:46](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L46)

___

### response\_format

• `Optional` **response\_format**: `AIResponseFormat`

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[response_format](LlamaModelOptions.md#response_format)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:71

___

### samplers

• **samplers**: `string`[]

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:493](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L493)

___

### seed

• `Optional` **seed**: `number`

Set the random number generator (RNG) seed
(default: -1, -1 = random seed).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[seed](LlamaModelOptions.md#seed)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:102](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L102)

___

### slot\_id

• `Optional` **slot\_id**: `number`

Assign the completion task to an specific slot.
If is -1 the task will be assigned to a Idle slot (default: -1)

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[slot_id](LlamaModelOptions.md#slot_id)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:133](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L133)

___

### stop

• `Optional` **stop**: `string`[]

Stop generation when any of these tokens are generated in llama.cpp.
same as stop_words in ai-tool-llm

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[stop](LlamaModelOptions.md#stop)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:9](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L9)

___

### stop\_words

• `Optional` **stop\_words**: `string` \| `string`[]

Stop sequences to use.
Stop sequences are an array of strings or a single string that the model will recognize as end-of-text indicators.
The model stops generating more content when it encounters any of these strings.
This is particularly useful in scripted or formatted text generation, where a specific end point is required.
Stop sequences not included in the generated text.

Does nothing if the model does not support this setting.

Example: `stop_words: ['\n', 'END']`

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[stop_words](LlamaModelOptions.md#stop_words)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:45

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[stream](LlamaModelOptions.md#stream)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:70

___

### temperature

• `Optional` **temperature**: `number`

Adjust the randomness of the generated text.

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[temperature](LlamaModelOptions.md#temperature)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:19

___

### tfs\_z

• `Optional` **tfs\_z**: `number`

Enable tail free sampling with parameter z (default: 1.0, 1.0 = disabled).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[tfs_z](LlamaModelOptions.md#tfs_z)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:36](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L36)

___

### top\_k

• `Optional` **top\_k**: `number`

Limit the next token selection to the K most probable tokens (default: 40).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[top_k](LlamaModelOptions.md#top_k)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:14](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L14)

___

### top\_p

• `Optional` **top\_p**: `number`

Limit the next token selection to a subset of tokens with a cumulative probability above a threshold P (default: 0.95).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[top_p](LlamaModelOptions.md#top_p)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:19](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L19)

___

### trim

• `Optional` **trim**: `boolean`

When true, the leading and trailing white space and line terminator characters
are removed from the generated text.

Default: true.

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[trim](LlamaModelOptions.md#trim)

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:69

___

### typical\_p

• `Optional` **typical\_p**: `number`

Enable locally typical sampling with parameter p (default: 1.0, 1.0 = disabled).

#### Inherited from

[LlamaModelOptions](LlamaModelOptions.md).[typical_p](LlamaModelOptions.md#typical_p)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:41](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L41)

___

### use\_penalty\_prompt\_tokens

• **use\_penalty\_prompt\_tokens**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:494](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/3661fcccaf352a8c2144d2056aa4c79066d53ee6/src/options.ts#L494)
