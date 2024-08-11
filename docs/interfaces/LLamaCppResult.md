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

[packages/ai-tool-llm-llamacpp/src/options.ts:373](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L373)

___

### content

• **content**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:358](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L358)

___

### generation\_settings

• **generation\_settings**: [`LLamaCppModelGenerationSettings`](LLamaCppModelGenerationSettings.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:359](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L359)

___

### model

• **model**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:360](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L360)

___

### prompt

• **prompt**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:361](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L361)

___

### slot\_id

• **slot\_id**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:362](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L362)

___

### stop

• **stop**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:363](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L363)

___

### stopped\_eos

• **stopped\_eos**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:364](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L364)

___

### stopped\_limit

• **stopped\_limit**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:365](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L365)

___

### stopped\_word

• **stopped\_word**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:366](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L366)

___

### stopping\_word

• **stopping\_word**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:367](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L367)

___

### taskId

• `Optional` **taskId**: `AsyncTaskId`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:374](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L374)

___

### timings

• **timings**: [`LLamaCppModelTimings`](LLamaCppModelTimings.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:368](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L368)

___

### tokens\_cached

• **tokens\_cached**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:369](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L369)

___

### tokens\_evaluated

• **tokens\_evaluated**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:370](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L370)

___

### tokens\_predicted

• **tokens\_predicted**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:371](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L371)

___

### truncated

• **truncated**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:372](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/96e5e54d979071fb1b53199389afb36b9b11bf69/src/options.ts#L372)
