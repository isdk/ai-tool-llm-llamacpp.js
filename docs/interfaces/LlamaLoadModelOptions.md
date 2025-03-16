[**@isdk/ai-tool-llm-llamacpp**](../README.md)

***

[@isdk/ai-tool-llm-llamacpp](../globals.md) / LlamaLoadModelOptions

# Interface: LlamaLoadModelOptions

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:282](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L282)

## Extends

- `AIOptions`

## Indexable

\[`name`: `string`\]: `any`

## Properties

### api\_key?

> `optional` **api\_key**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:285](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L285)

***

### attention?

> `optional` **attention**: `"causal"` \| `"non-causal"`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:337](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L337)

***

### batch\_size?

> `optional` **batch\_size**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:342](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L342)

***

### cache\_type\_k?

> `optional` **cache\_type\_k**: [`LlamaCacheQuantType`](../type-aliases/LlamaCacheQuantType.md)

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:375](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L375)

***

### cache\_type\_v?

> `optional` **cache\_type\_v**: [`LlamaCacheQuantType`](../type-aliases/LlamaCacheQuantType.md)

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:376](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L376)

***

### check\_tensors?

> `optional` **check\_tensors**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:398](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L398)

***

### chunks?

> `optional` **chunks**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:346](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L346)

***

### cont\_batching?

> `optional` **cont\_batching**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:378](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L378)

***

### conversation?

> `optional` **conversation**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:371](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L371)

***

### ctx\_size?

> `optional` **ctx\_size**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:324](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L324)

Specify the context window size of the model that you have loaded in your
Llama.cpp server.
// Set the size of the prompt context. The default is 512, but LLaMA models were built with a context of 2048, which will provide better results for longer input/inference.
// The size may differ in other models, for example, baichuan models were build with a context of 4096.

***

### defrag\_thold?

> `optional` **defrag\_thold**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:338](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L338)

***

### display\_prompt?

> `optional` **display\_prompt**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:393](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L393)

***

### draft?

> `optional` **draft**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:345](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L345)

***

### dump\_kv\_cache?

> `optional` **dump\_kv\_cache**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:373](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L373)

***

### embd\_normalize?

> `optional` **embd\_normalize**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:368](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L368)

***

### embd\_output\_format?

> `optional` **embd\_output\_format**: `""` \| `"array"` \| `"json"` \| `"json+"`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:369](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L369)

***

### embd\_sep?

> `optional` **embd\_sep**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:370](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L370)

***

### embedding?

> `optional` **embedding**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:367](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L367)

***

### escape?

> `optional` **escape**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:312](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L312)

***

### flash\_attn?

> `optional` **flash\_attn**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:380](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L380)

***

### gpu\_layers?

> `optional` **gpu\_layers**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:382](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L382)

***

### gpu\_layers\_draft?

> `optional` **gpu\_layers\_draft**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:383](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L383)

***

### grp\_attn\_n?

> `optional` **grp\_attn\_n**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:325](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L325)

***

### grp\_attn\_w?

> `optional` **grp\_attn\_w**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:326](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L326)

***

### hf\_file?

> `optional` **hf\_file**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:357](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L357)

***

### hf\_repo?

> `optional` **hf\_repo**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:356](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L356)

***

### hf\_token?

> `optional` **hf\_token**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:355](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L355)

***

### host?

> `optional` **host**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:283](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L283)

***

### image?

> `optional` **image**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:365](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L365)

***

### infill?

> `optional` **infill**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:372](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L372)

***

### keep?

> `optional` **keep**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:344](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L344)

***

### log\_append?

> `optional` **log\_append**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:299](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L299)

***

### log\_colors?

> `optional` **log\_colors**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:300](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L300)

***

### log\_disable?

> `optional` **log\_disable**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:295](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L295)

***

### log\_enable?

> `optional` **log\_enable**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:296](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L296)

***

### log\_file?

> `optional` **log\_file**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:297](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L297)

***

### log\_new?

> `optional` **log\_new**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:298](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L298)

***

### log\_prefix?

> `optional` **log\_prefix**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:303](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L303)

***

### log\_timestamps?

> `optional` **log\_timestamps**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:304](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L304)

***

### log\_verbose?

> `optional` **log\_verbose**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:301](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L301)

***

### log\_verbosity?

> `optional` **log\_verbosity**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:302](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L302)

***

### logdir?

> `optional` **logdir**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:294](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L294)

***

### logits\_all?

> `optional` **logits\_all**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:397](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L397)

***

### logits\_file?

> `optional` **logits\_file**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:396](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L396)

***

### lookup\_cache\_dynamic?

> `optional` **lookup\_cache\_dynamic**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:395](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L395)

***

### lookup\_cache\_static?

> `optional` **lookup\_cache\_static**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:394](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L394)

***

### lora?

> `optional` **lora**: [`LoraItem`](../type-aliases/LoraItem.md) \| [`LoraItems`](../type-aliases/LoraItems.md)

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:359](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L359)

***

### lora\_init\_without\_apply?

> `optional` **lora\_init\_without\_apply**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:360](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L360)

***

### main\_gpu?

> `optional` **main\_gpu**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:384](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L384)

***

### mmproj?

> `optional` **mmproj**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:364](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L364)

***

### model

> **model**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:351](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L351)

***

### model\_alias?

> `optional` **model\_alias**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:353](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L353)

***

### model\_draft?

> `optional` **model\_draft**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:352](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L352)

***

### model\_url?

> `optional` **model\_url**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:354](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L354)

***

### multiline\_input?

> `optional` **multiline\_input**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:377](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L377)

***

### no\_cont\_batching?

> `optional` **no\_cont\_batching**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:379](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L379)

***

### no\_escape?

> `optional` **no\_escape**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:313](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L313)

***

### no\_kv\_offload?

> `optional` **no\_kv\_offload**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:374](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L374)

***

### no\_slots?

> `optional` **no\_slots**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:306](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L306)

***

### numa?

> `optional` **numa**: `"distribute"` \| `"isolate"` \| `"numactl"`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:389](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L389)

***

### p\_split?

> `optional` **p\_split**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:349](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L349)

***

### parallel?

> `optional` **parallel**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:347](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L347)

***

### path\_prompt\_cache?

> `optional` **path\_prompt\_cache**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:314](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L314)

***

### pooling?

> `optional` **pooling**: `"none"` \| `"mean"` \| `"cls"` \| `"last"`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:336](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L336)

***

### port?

> `optional` **port**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:284](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L284)

***

### predict?

> `optional` **predict**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:317](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L317)

***

### prompt\_cache\_all?

> `optional` **prompt\_cache\_all**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:315](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L315)

***

### prompt\_cache\_ro?

> `optional` **prompt\_cache\_ro**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:316](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L316)

***

### reverse\_prompt?

> `optional` **reverse\_prompt**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:392](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L392)

***

### rope\_freq\_base?

> `optional` **rope\_freq\_base**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:327](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L327)

***

### rope\_freq\_scale?

> `optional` **rope\_freq\_scale**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:328](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L328)

***

### rope\_scale?

> `optional` **rope\_scale**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:330](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L330)

***

### rope\_scaling?

> `optional` **rope\_scaling**: [`LlamaRopeScalingType`](../type-aliases/LlamaRopeScalingType.md)

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:329](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L329)

***

### rpc\_servers?

> `optional` **rpc\_servers**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:387](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L387)

***

### samplers?

> `optional` **samplers**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:339](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L339)

***

### samplers\_sequence?

> `optional` **samplers\_sequence**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:340](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L340)

***

### sequences?

> `optional` **sequences**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:348](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L348)

***

### simple\_io?

> `optional` **simple\_io**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:293](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L293)

***

### special?

> `optional` **special**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:366](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L366)

***

### split\_mode?

> `optional` **split\_mode**: [`LlamaSplitMode`](../enumerations/LlamaSplitMode.md)

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:385](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L385)

***

### ssl\_cert\_file?

> `optional` **ssl\_cert\_file**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:287](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L287)

***

### ssl\_key\_file?

> `optional` **ssl\_key\_file**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:286](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L286)

***

### tensor\_split?

> `optional` **tensor\_split**: `string`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:386](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L386)

***

### threads?

> `optional` **threads**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:308](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L308)

***

### threads\_batch?

> `optional` **threads\_batch**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:309](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L309)

***

### threads\_batch\_draft?

> `optional` **threads\_batch\_draft**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:311](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L311)

***

### threads\_draft?

> `optional` **threads\_draft**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:310](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L310)

***

### threads\_http?

> `optional` **threads\_http**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:289](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L289)

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:288](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L288)

***

### ubatch\_size?

> `optional` **ubatch\_size**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:343](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L343)

***

### use\_mlock?

> `optional` **use\_mlock**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:381](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L381)

***

### use\_mmap?

> `optional` **use\_mmap**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:388](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L388)

***

### verbose\_prompt?

> `optional` **verbose\_prompt**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:391](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L391)

***

### verbosity?

> `optional` **verbosity**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:390](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L390)

***

### version?

> `optional` **version**: `boolean`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:290](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L290)

***

### yarn\_attn\_factor?

> `optional` **yarn\_attn\_factor**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:333](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L333)

***

### yarn\_beta\_fast?

> `optional` **yarn\_beta\_fast**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:334](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L334)

***

### yarn\_beta\_slow?

> `optional` **yarn\_beta\_slow**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:335](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L335)

***

### yarn\_ext\_factor?

> `optional` **yarn\_ext\_factor**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:332](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L332)

***

### yarn\_orig\_ctx?

> `optional` **yarn\_orig\_ctx**: `number`

Defined in: [packages/ai-tool-llm-llamacpp/src/options.ts:331](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/474332917999cc9529d7dcbcd5079ae3a0f5177d/src/options.ts#L331)
