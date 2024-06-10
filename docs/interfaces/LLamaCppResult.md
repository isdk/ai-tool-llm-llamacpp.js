[@isdk/ai-tool-llm-llamacpp](../README.md) / [Exports](../modules.md) / LLamaCppResult

# Interface: LLamaCppResult

## Table of contents

### Properties

- [chatTemplateId](LLamaCppResult.md#chattemplateid)
- [content](LLamaCppResult.md#content)
- [generation\_settings](LLamaCppResult.md#generation_settings)
- [model](LLamaCppResult.md#model)
- [prompt](LLamaCppResult.md#prompt)
- [slot\_id](LLamaCppResult.md#slot_id)
- [stop](LLamaCppResult.md#stop)
- [stopped\_eos](LLamaCppResult.md#stopped_eos)
- [stopped\_limit](LLamaCppResult.md#stopped_limit)
- [stopped\_word](LLamaCppResult.md#stopped_word)
- [stopping\_word](LLamaCppResult.md#stopping_word)
- [timings](LLamaCppResult.md#timings)
- [tokens\_cached](LLamaCppResult.md#tokens_cached)
- [tokens\_evaluated](LLamaCppResult.md#tokens_evaluated)
- [tokens\_predicted](LLamaCppResult.md#tokens_predicted)
- [truncated](LLamaCppResult.md#truncated)

## Properties

### chatTemplateId

• `Optional` **chatTemplateId**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `version?` | `string` |

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:367](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L367)

___

### content

• **content**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:352](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L352)

___

### generation\_settings

• **generation\_settings**: [`LLamaCppModelGenerationSettings`](LLamaCppModelGenerationSettings.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:353](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L353)

___

### model

• **model**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:354](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L354)

___

### prompt

• **prompt**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:355](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L355)

___

### slot\_id

• **slot\_id**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:356](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L356)

___

### stop

• **stop**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:357](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L357)

___

### stopped\_eos

• **stopped\_eos**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:358](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L358)

___

### stopped\_limit

• **stopped\_limit**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:359](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L359)

___

### stopped\_word

• **stopped\_word**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:360](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L360)

___

### stopping\_word

• **stopping\_word**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:361](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L361)

___

### timings

• **timings**: [`LLamaCppModelTimings`](LLamaCppModelTimings.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:362](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L362)

___

### tokens\_cached

• **tokens\_cached**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:363](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L363)

___

### tokens\_evaluated

• **tokens\_evaluated**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:364](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L364)

___

### tokens\_predicted

• **tokens\_predicted**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:365](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L365)

___

### truncated

• **truncated**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:366](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/73752d3ea8a97aa01d93de2dbd448639a81bec1d/src/options.ts#L366)
