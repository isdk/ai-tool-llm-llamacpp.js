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

[packages/ai-tool-llm-llamacpp/src/options.ts:486](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L486)

___

### chat\_template

• `Optional` **chat\_template**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:504](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L504)

___

### model

• **model**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:484](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L484)

___

### n\_ctx\_train

• `Optional` **n\_ctx\_train**: `number`

the content length in train

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:494](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L494)

___

### n\_embd

• `Optional` **n\_embd**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:503](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L503)

___

### n\_params

• `Optional` **n\_params**: `number`

the model params size in bytes

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:498](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L498)

___

### n\_vocab

• `Optional` **n\_vocab**: `number`

the quanted model size in bytes

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:502](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L502)

___

### quant

• `Optional` **quant**: `AIModelQuantType`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:489](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L489)

___

### size

• `Optional` **size**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:488](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L488)

___

### size\_type

• `Optional` **size\_type**: [`LlmSizeType`](../enums/LlmSizeType.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:487](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L487)

___

### state

• `Optional` **state**: `LlamaCppServerState`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:485](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L485)

___

### vocab\_type

• `Optional` **vocab\_type**: [`LlamaVocabType`](../enums/LlamaVocabType.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:490](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/f98652bc726258c43e820ee0ee0870e0c0aa57df/src/options.ts#L490)
