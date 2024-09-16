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
- [taskId](LLamaCppResult.md#taskid)
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

[packages/ai-tool-llm-llamacpp/src/options.ts:553](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L553)

___

### content

• **content**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:538](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L538)

___

### generation\_settings

• **generation\_settings**: [`LLamaCppModelGenerationSettings`](LLamaCppModelGenerationSettings.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:539](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L539)

___

### model

• **model**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:540](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L540)

___

### prompt

• **prompt**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:541](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L541)

___

### slot\_id

• **slot\_id**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:542](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L542)

___

### stop

• **stop**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:543](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L543)

___

### stopped\_eos

• **stopped\_eos**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:544](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L544)

___

### stopped\_limit

• **stopped\_limit**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:545](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L545)

___

### stopped\_word

• **stopped\_word**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:546](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L546)

___

### stopping\_word

• **stopping\_word**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:547](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L547)

___

### taskId

• `Optional` **taskId**: `AsyncTaskId`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:554](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L554)

___

### timings

• **timings**: [`LLamaCppModelTimings`](LLamaCppModelTimings.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:548](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L548)

___

### tokens\_cached

• **tokens\_cached**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:549](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L549)

___

### tokens\_evaluated

• **tokens\_evaluated**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:550](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L550)

___

### tokens\_predicted

• **tokens\_predicted**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:551](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L551)

___

### truncated

• **truncated**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:552](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L552)
