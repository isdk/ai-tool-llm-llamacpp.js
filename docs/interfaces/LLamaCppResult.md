[**@isdk/ai-tool-llm-llamacpp**](../README.md)

***

[@isdk/ai-tool-llm-llamacpp](../globals.md) / LLamaCppResult

# Interface: LLamaCppResult

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:549](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L549)

## Properties

### chatTemplateId?

> `optional` **chatTemplateId**: `object`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:566](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L566)

#### id

> **id**: `string`

#### version?

> `optional` **version**: `string`

***

### completion\_probabilities?

> `optional` **completion\_probabilities**: [`LlamaCppProbabilityItem`](LlamaCppProbabilityItem.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:568](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L568)

***

### content

> **content**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:550](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L550)

***

### generation\_settings

> **generation\_settings**: [`LLamaCppModelGenerationSettings`](LLamaCppModelGenerationSettings.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:551](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L551)

***

### model

> **model**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:552](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L552)

***

### perplexity?

> `optional` **perplexity**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:569](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L569)

***

### prompt

> **prompt**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:553](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L553)

***

### slot\_id

> **slot\_id**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:554](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L554)

***

### stop

> **stop**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:555](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L555)

***

### stop\_type

> **stop\_type**: `"none"` \| `"eos"` \| `"limit"` \| `"word"`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:565](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L565)

***

### stopped\_eos

> **stopped\_eos**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:556](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L556)

***

### stopped\_limit

> **stopped\_limit**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:557](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L557)

***

### stopped\_word

> **stopped\_word**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:558](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L558)

***

### stopping\_word

> **stopping\_word**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:559](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L559)

***

### taskId?

> `optional` **taskId**: `AsyncTaskId`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:567](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L567)

***

### timings

> **timings**: [`LLamaCppModelTimings`](LLamaCppModelTimings.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:560](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L560)

***

### tokens\_cached

> **tokens\_cached**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:561](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L561)

***

### tokens\_evaluated

> **tokens\_evaluated**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:562](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L562)

***

### tokens\_predicted

> **tokens\_predicted**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:563](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L563)

***

### truncated

> **truncated**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm-llamacpp/src/options.ts:564](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/0d16068f52cb374c4608ded739a170f44769754f/src/options.ts#L564)
