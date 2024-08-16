[@isdk/ai-tool-llm-llamacpp](../README.md) / [Exports](../modules.md) / LlamaModelSettings

# Interface: LlamaModelSettings

## Indexable

▪ [name: `string`]: `any`

## Table of contents

### Properties

- [arch](LlamaModelSettings.md#arch)
- [chat\_template](LlamaModelSettings.md#chat_template)
- [model](LlamaModelSettings.md#model)
- [n\_ctx\_train](LlamaModelSettings.md#n_ctx_train)
- [n\_embd](LlamaModelSettings.md#n_embd)
- [n\_params](LlamaModelSettings.md#n_params)
- [n\_vocab](LlamaModelSettings.md#n_vocab)
- [quant](LlamaModelSettings.md#quant)
- [size](LlamaModelSettings.md#size)
- [size\_type](LlamaModelSettings.md#size_type)
- [state](LlamaModelSettings.md#state)
- [vocab\_type](LlamaModelSettings.md#vocab_type)

## Properties

### arch

• `Optional` **arch**: [`LlmArch`](../enums/LlmArch.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:306](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/fc98f39e3b115ecb3b202be85a03fb23642cba74/src/options.ts#L306)

___

### chat\_template

• `Optional` **chat\_template**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:324](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/fc98f39e3b115ecb3b202be85a03fb23642cba74/src/options.ts#L324)

___

### model

• **model**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:304](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/fc98f39e3b115ecb3b202be85a03fb23642cba74/src/options.ts#L304)

___

### n\_ctx\_train

• `Optional` **n\_ctx\_train**: `number`

the content length in train

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:314](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/fc98f39e3b115ecb3b202be85a03fb23642cba74/src/options.ts#L314)

___

### n\_embd

• `Optional` **n\_embd**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:323](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/fc98f39e3b115ecb3b202be85a03fb23642cba74/src/options.ts#L323)

___

### n\_params

• `Optional` **n\_params**: `number`

the model params size in bytes

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:318](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/fc98f39e3b115ecb3b202be85a03fb23642cba74/src/options.ts#L318)

___

### n\_vocab

• `Optional` **n\_vocab**: `number`

the quanted model size in bytes

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:322](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/fc98f39e3b115ecb3b202be85a03fb23642cba74/src/options.ts#L322)

___

### quant

• `Optional` **quant**: `AIModelQuantType`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:309](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/fc98f39e3b115ecb3b202be85a03fb23642cba74/src/options.ts#L309)

___

### size

• `Optional` **size**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:308](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/fc98f39e3b115ecb3b202be85a03fb23642cba74/src/options.ts#L308)

___

### size\_type

• `Optional` **size\_type**: [`LlmSizeType`](../enums/LlmSizeType.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:307](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/fc98f39e3b115ecb3b202be85a03fb23642cba74/src/options.ts#L307)

___

### state

• `Optional` **state**: `LlamaCppServerState`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:305](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/fc98f39e3b115ecb3b202be85a03fb23642cba74/src/options.ts#L305)

___

### vocab\_type

• `Optional` **vocab\_type**: [`LlamaVocabType`](../enums/LlamaVocabType.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:310](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/fc98f39e3b115ecb3b202be85a03fb23642cba74/src/options.ts#L310)
