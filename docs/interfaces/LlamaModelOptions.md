[**@isdk/ai-tool-llm-llamacpp**](../README.md)

***

[@isdk/ai-tool-llm-llamacpp](../globals.md) / LlamaModelOptions

# Interface: LlamaModelOptions

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:4](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L4)

## Extends

- `AITextGenerationOptions`

## Extended by

- [`LLamaCppModelGenerationSettings`](LLamaCppModelGenerationSettings.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### cache\_prompt?

> `optional` **cache\_prompt**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:127](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L127)

Save the prompt and generation for avoid reprocess entire prompt if a part of this isn't change (default: false)

***

### content\_size?

> `optional` **content\_size**: `number`

Defined in: @isdk/ai-tools/packages/ai-tool-llm/dist/index.d.ts:34

Specify the context window size of the model that you have loaded.

#### Inherited from

`AITextGenerationOptions.content_size`

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:66](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L66)

Repeat alpha frequency penalty (default: 0.0, 0.0 = disabled).

#### Overrides

`AITextGenerationOptions.frequency_penalty`

***

### gen\_count?

> `optional` **gen\_count**: `number`

Defined in: @isdk/ai-tools/packages/ai-tool-llm/dist/index.d.ts:63

Number of texts to generate.

Specifies the number of responses or completions the model should generate for a given prompt.
This is useful when you need multiple different outputs or ideas for a single prompt.
The model will generate 'n' distinct responses, each based on the same initial prompt.
In a streaming model this will result in both responses streamed back in real time.

Does nothing if the model does not support this setting.

Example: `gen_count: 3` // The model will produce 3 different responses.

#### Inherited from

`AITextGenerationOptions.gen_count`

***

### grammar?

> `optional` **grammar**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:96](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L96)

Set grammar for grammar-based sampling (default: no grammar)

#### See

https://github.com/ggerganov/llama.cpp/blob/master/grammars/README.md

***

### ignore\_eos?

> `optional` **ignore\_eos**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:107](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L107)

Ignore end of stream token and continue generating (default: false).

***

### logit\_bias?

> `optional` **logit\_bias**: \[`number`, `number` \| `false`\][]

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:116](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L116)

Modify the likelihood of a token appearing in the generated text completion.
For example, use "logit_bias": [[15043,1.0]] to increase the likelihood of the token
'Hello', or "logit_bias": [[15043,-1.0]] to decrease its likelihood.
Setting the value to false, "logit_bias": [[15043,false]] ensures that the token Hello is
never produced (default: []).

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: @isdk/ai-tools/packages/ai-tool-llm/dist/index.d.ts:29

Specifies the maximum number of tokens (words, punctuation, parts of words) that the model can generate in a single response.
It helps to control the length of the output.

Does nothing if the model does not support this setting.

Example: `max_tokens: 1000`

#### Inherited from

`AITextGenerationOptions.max_tokens`

***

### min\_p?

> `optional` **min\_p**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:24](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L24)

The minimum probability for a token to be considered, relative to the probability of the most likely token (default: 0.05).

***

### mirostat?

> `optional` **mirostat**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:79](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L79)

Enable Mirostat sampling, controlling perplexity during text generation
(default: 0, 0 = disabled, 1 = Mirostat, 2 = Mirostat 2.0).

***

### mirostat\_eta?

> `optional` **mirostat\_eta**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:89](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L89)

Set the Mirostat learning rate, parameter eta (default: 0.1).

***

### mirostat\_tau?

> `optional` **mirostat\_tau**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:84](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L84)

Set the Mirostat target entropy, parameter tau (default: 5.0).

***

### n\_keep?

> `optional` **n\_keep**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:31](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L31)

Specify the number of tokens from the prompt to retain when the context size is exceeded
and tokens need to be discarded. By default, this value is set to 0 (meaning no tokens
are kept). Use -1 to retain all tokens from the prompt.

***

### n\_predict?

> `optional` **n\_predict**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:139](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L139)

maximum tokens to predict, -1 means no limits.
It could not exceed the server's n_predict.

***

### n\_probs?

> `optional` **n\_probs**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:122](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L122)

If greater than 0, the response also contains the probabilities of top N tokens
for each generated token (default: 0)

***

### penalize\_nl?

> `optional` **penalize\_nl**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:56](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L56)

Penalize newline tokens when applying the repeat penalty (default: true).

***

### penalty\_prompt?

> `optional` **penalty\_prompt**: `string` \| `number`[]

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:73](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L73)

This will replace the prompt for the purpose of the penalty evaluation.
Can be either null, a string or an array of numbers representing tokens
(default: null = use the original prompt).

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:61](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L61)

Repeat alpha presence penalty (default: 0.0, 0.0 = disabled).

#### Overrides

`AITextGenerationOptions.presence_penalty`

***

### repeat\_last\_n?

> `optional` **repeat\_last\_n**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:51](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L51)

Last n tokens to consider for penalizing repetition (default: 64, 0 = disabled, -1 = ctx-size).

***

### repeat\_penalty?

> `optional` **repeat\_penalty**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:46](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L46)

Control the repetition of token sequences in the generated text (default: 1.1).

***

### response\_format?

> `optional` **response\_format**: `AIResponseFormat`

Defined in: @isdk/ai-tools/packages/ai-tool-llm/dist/index.d.ts:72

#### Inherited from

`AITextGenerationOptions.response_format`

***

### seed?

> `optional` **seed**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:102](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L102)

Set the random number generator (RNG) seed
(default: -1, -1 = random seed).

#### Overrides

`AITextGenerationOptions.seed`

***

### slot\_id?

> `optional` **slot\_id**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:133](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L133)

Assign the completion task to an specific slot.
If is -1 the task will be assigned to a Idle slot (default: -1)

***

### stop?

> `optional` **stop**: `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:9](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L9)

Stop generation when any of these tokens are generated in llama.cpp.
same as stop_words in ai-tool-llm

#### Overrides

`AITextGenerationOptions.stop`

***

### stop\_words?

> `optional` **stop\_words**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/ai-tool-llm/dist/index.d.ts:46

Stop sequences to use.
Stop sequences are an array of strings or a single string that the model will recognize as end-of-text indicators.
The model stops generating more content when it encounters any of these strings.
This is particularly useful in scripted or formatted text generation, where a specific end point is required.
Stop sequences not included in the generated text.

Does nothing if the model does not support this setting.

Example: `stop_words: ['\n', 'END']`

#### Inherited from

`AITextGenerationOptions.stop_words`

***

### stream?

> `optional` **stream**: `boolean`

Defined in: @isdk/ai-tools/packages/ai-tool-llm/dist/index.d.ts:71

#### Inherited from

`AITextGenerationOptions.stream`

***

### temperature?

> `optional` **temperature**: `number`

Defined in: @isdk/ai-tools/packages/ai-tool-llm/dist/index.d.ts:20

Adjust the randomness of the generated text.

#### Inherited from

`AITextGenerationOptions.temperature`

***

### tfs\_z?

> `optional` **tfs\_z**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:36](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L36)

Enable tail free sampling with parameter z (default: 1.0, 1.0 = disabled).

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:14](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L14)

Limit the next token selection to the K most probable tokens (default: 40).

#### Overrides

`AITextGenerationOptions.top_k`

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:19](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L19)

Limit the next token selection to a subset of tokens with a cumulative probability above a threshold P (default: 0.95).

#### Overrides

`AITextGenerationOptions.top_p`

***

### trim?

> `optional` **trim**: `boolean`

Defined in: @isdk/ai-tools/packages/ai-tool-llm/dist/index.d.ts:70

When true, the leading and trailing white space and line terminator characters
are removed from the generated text.

Default: true.

#### Inherited from

`AITextGenerationOptions.trim`

***

### typical\_p?

> `optional` **typical\_p**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:41](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L41)

Enable locally typical sampling with parameter p (default: 1.0, 1.0 = disabled).
