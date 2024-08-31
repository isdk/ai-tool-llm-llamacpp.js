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

[packages/ai-tool-llm-llamacpp/src/options.ts:531](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L531)

___

### content

• **content**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:516](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L516)

___

### generation\_settings

• **generation\_settings**: [`LLamaCppModelGenerationSettings`](LLamaCppModelGenerationSettings.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:517](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L517)

___

### model

• **model**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:518](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L518)

___

### prompt

• **prompt**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:519](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L519)

___

### slot\_id

• **slot\_id**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:520](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L520)

___

### stop

• **stop**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:521](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L521)

___

### stopped\_eos

• **stopped\_eos**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:522](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L522)

___

### stopped\_limit

• **stopped\_limit**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:523](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L523)

___

### stopped\_word

• **stopped\_word**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:524](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L524)

___

### stopping\_word

• **stopping\_word**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:525](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L525)

___

### taskId

• `Optional` **taskId**: `AsyncTaskId`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:532](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L532)

___

### timings

• **timings**: [`LLamaCppModelTimings`](LLamaCppModelTimings.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:526](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L526)

___

### tokens\_cached

• **tokens\_cached**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:527](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L527)

___

### tokens\_evaluated

• **tokens\_evaluated**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:528](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L528)

___

### tokens\_predicted

• **tokens\_predicted**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:529](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L529)

___

### truncated

• **truncated**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:530](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db257f84cb586462dda4b541aacf37e9583f6807/src/options.ts#L530)
