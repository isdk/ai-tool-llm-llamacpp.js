[@isdk/ai-tool-llm-llamacpp](README.md) / Exports

# @isdk/ai-tool-llm-llamacpp

## Table of contents

### Enumerations

- [LlamaVocabType](enums/LlamaVocabType.md)
- [LlmArch](enums/LlmArch.md)
- [LlmSizeType](enums/LlmSizeType.md)

### Classes

- [LlamaCppProvider](classes/LlamaCppProvider.md)

### Interfaces

- [LLamaCppModelGenerationSettings](interfaces/LLamaCppModelGenerationSettings.md)
- [LLamaCppModelTimings](interfaces/LLamaCppModelTimings.md)
- [LLamaCppPartResult](interfaces/LLamaCppPartResult.md)
- [LLamaCppResult](interfaces/LLamaCppResult.md)
- [LlamaLavaModelSettings](interfaces/LlamaLavaModelSettings.md)
- [LlamaLoadModelOptions](interfaces/LlamaLoadModelOptions.md)
- [LlamaModelOptions](interfaces/LlamaModelOptions.md)
- [LlamaModelSettings](interfaces/LlamaModelSettings.md)
- [LoraItemObject](interfaces/LoraItemObject.md)

### Type Aliases

- [LlamaCacheQuantType](modules.md#llamacachequanttype)
- [LlamaCppAIResult](modules.md#llamacppairesult)
- [LlamaCppAIStreamParser](modules.md#llamacppaistreamparser)
- [LlamaRopeScalingType](modules.md#llamaropescalingtype)
- [LoraItem](modules.md#loraitem)
- [LoraItems](modules.md#loraitems)

### Variables

- [AILoadModelOptionsMap](modules.md#ailoadmodeloptionsmap)
- [AIModelSettingsMap](modules.md#aimodelsettingsmap)
- [AIOptionsMap](modules.md#aioptionsmap)
- [LlamaCppProviderName](modules.md#llamacppprovidername)
- [LlamaLoadModelOptionsKeys](modules.md#llamaloadmodeloptionskeys)
- [ReverseAILoadModelOptions](modules.md#reverseailoadmodeloptions)
- [ReverseAIOptionsMap](modules.md#reverseaioptionsmap)
- [llamaCpp](modules.md#llamacpp)

### Functions

- [llamaCppToAIResult](modules.md#llamacpptoairesult)
- [parseLlamaCppStream](modules.md#parsellamacppstream)

## Type Aliases

### LlamaCacheQuantType

Ƭ **LlamaCacheQuantType**: ``"f32"`` \| ``"f16"`` \| ``"q8_0"`` \| ``"q4_0"`` \| ``"q4_1"`` \| ``"q5_0"`` \| ``"q5_1"``

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:143](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L143)

___

### LlamaCppAIResult

Ƭ **LlamaCppAIResult**: `AIResult`\<`string`, [`LLamaCppResult`](interfaces/LLamaCppResult.md)\>

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:371](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L371)

___

### LlamaCppAIStreamParser

Ƭ **LlamaCppAIStreamParser**\<`T`\>: `AIStreamParser`\<`string`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`LLamaCppResult`](interfaces/LLamaCppResult.md) |

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:370](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L370)

___

### LlamaRopeScalingType

Ƭ **LlamaRopeScalingType**: ``"none"`` \| ``"linear"`` \| ``"yarn"``

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:142](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L142)

___

### LoraItem

Ƭ **LoraItem**: [`LoraItemObject`](interfaces/LoraItemObject.md) \| `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:151](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L151)

___

### LoraItems

Ƭ **LoraItems**: [`LoraItem`](modules.md#loraitem)[]

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:152](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L152)

## Variables

### AILoadModelOptionsMap

• `Const` **AILoadModelOptionsMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content_size` | `string` |
| `stop_words` | `string` |

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:405](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L405)

___

### AIModelSettingsMap

• `Const` **AIModelSettingsMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `model` | `string` |
| `n_ctx` | `string` |
| `n_predict` | `string` |

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:412](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L412)

___

### AIOptionsMap

• `Const` **AIOptionsMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content_size` | `string` |
| `max_tokens` | `string` |
| `response_format.schema` | `string` |
| `response_format.type` | `string` |
| `stop_words` | `string` |

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:395](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L395)

___

### LlamaCppProviderName

• `Const` **LlamaCppProviderName**: ``"llamacpp"``

#### Defined in

[packages/ai-tool-llm-llamacpp/src/llamacpp.ts:15](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/llamacpp.ts#L15)

___

### LlamaLoadModelOptionsKeys

• `Const` **LlamaLoadModelOptionsKeys**: keyof [`LlamaLoadModelOptions`](interfaces/LlamaLoadModelOptions.md)[]

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:262](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L262)

___

### ReverseAILoadModelOptions

• `Const` **ReverseAILoadModelOptions**: `Object`

#### Index signature

▪ [k: `string`]: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:410](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L410)

___

### ReverseAIOptionsMap

• `Const` **ReverseAIOptionsMap**: `Object`

#### Index signature

▪ [k: `string`]: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:403](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L403)

___

### llamaCpp

• `Const` **llamaCpp**: [`LlamaCppProvider`](classes/LlamaCppProvider.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/llamacpp.ts:188](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/llamacpp.ts#L188)

## Functions

### llamaCppToAIResult

▸ **llamaCppToAIResult**(`data`): [`LlamaCppAIResult`](modules.md#llamacppairesult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`LLamaCppResult`](interfaces/LLamaCppResult.md) |

#### Returns

[`LlamaCppAIResult`](modules.md#llamacppairesult)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:373](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L373)

___

### parseLlamaCppStream

▸ **parseLlamaCppStream**(`opt?`): [`LlamaCppAIStreamParser`](modules.md#llamacppaistreamparser)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt?` | `any` |

#### Returns

[`LlamaCppAIStreamParser`](modules.md#llamacppaistreamparser)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:388](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/d3b305c35cb3c708a6eebf74554559e930a3ef35/src/options.ts#L388)
