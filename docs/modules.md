[@isdk/ai-tool-llm-llamacpp](README.md) / Exports

# @isdk/ai-tool-llm-llamacpp

## Table of contents

### Enumerations

- [LlamaSplitMode](enums/LlamaSplitMode.md)
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

[packages/ai-tool-llm-llamacpp/src/options.ts:143](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L143)

___

### LlamaCppAIResult

Ƭ **LlamaCppAIResult**: `AIResult`\<`string`, [`LLamaCppResult`](interfaces/LLamaCppResult.md)\>

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:558](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L558)

___

### LlamaCppAIStreamParser

Ƭ **LlamaCppAIStreamParser**\<`T`\>: `AIStreamParser`\<`string`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`LLamaCppResult`](interfaces/LLamaCppResult.md) |

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:557](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L557)

___

### LlamaRopeScalingType

Ƭ **LlamaRopeScalingType**: ``"none"`` \| ``"linear"`` \| ``"yarn"``

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:142](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L142)

___

### LoraItem

Ƭ **LoraItem**: [`LoraItemObject`](interfaces/LoraItemObject.md) \| `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:151](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L151)

___

### LoraItems

Ƭ **LoraItems**: [`LoraItem`](modules.md#loraitem)[]

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:152](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L152)

## Variables

### AILoadModelOptionsMap

• `Const` **AILoadModelOptionsMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content_size` | `string` |
| `stop_words` | `string` |

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:602](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L602)

___

### AIModelSettingsMap

• `Const` **AIModelSettingsMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `model` | `string` |
| `n_ctx` | `string` |

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:609](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L609)

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

[packages/ai-tool-llm-llamacpp/src/options.ts:592](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L592)

___

### LlamaCppProviderName

• `Const` **LlamaCppProviderName**: ``"llamacpp"``

#### Defined in

[packages/ai-tool-llm-llamacpp/src/llamacpp.ts:16](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/llamacpp.ts#L16)

___

### LlamaLoadModelOptionsKeys

• `Const` **LlamaLoadModelOptionsKeys**: keyof [`LlamaLoadModelOptions`](interfaces/LlamaLoadModelOptions.md)[]

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:396](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L396)

___

### ReverseAILoadModelOptions

• `Const` **ReverseAILoadModelOptions**: `Object`

#### Index signature

▪ [k: `string`]: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:607](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L607)

___

### ReverseAIOptionsMap

• `Const` **ReverseAIOptionsMap**: `Object`

#### Index signature

▪ [k: `string`]: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:600](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L600)

___

### llamaCpp

• `Const` **llamaCpp**: [`LlamaCppProvider`](classes/LlamaCppProvider.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/llamacpp.ts:235](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/llamacpp.ts#L235)

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

[packages/ai-tool-llm-llamacpp/src/options.ts:564](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L564)

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

[packages/ai-tool-llm-llamacpp/src/options.ts:585](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L585)
