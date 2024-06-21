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

[packages/ai-tool-llm-llamacpp/src/options.ts:300](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/92a347cd5a5e7f74790a85a758870bb2cf59aad1/src/options.ts#L300)

___

### chat\_template

• `Optional` **chat\_template**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:318](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/92a347cd5a5e7f74790a85a758870bb2cf59aad1/src/options.ts#L318)

___

### model

• **model**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:298](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/92a347cd5a5e7f74790a85a758870bb2cf59aad1/src/options.ts#L298)

___

### n\_ctx\_train

• `Optional` **n\_ctx\_train**: `number`

the content length in train

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:308](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/92a347cd5a5e7f74790a85a758870bb2cf59aad1/src/options.ts#L308)

___

### n\_embd

• `Optional` **n\_embd**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:317](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/92a347cd5a5e7f74790a85a758870bb2cf59aad1/src/options.ts#L317)

___

### n\_params

• `Optional` **n\_params**: `number`

the model params size in bytes

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:312](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/92a347cd5a5e7f74790a85a758870bb2cf59aad1/src/options.ts#L312)

___

### n\_vocab

• `Optional` **n\_vocab**: `number`

the quanted model size in bytes

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:316](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/92a347cd5a5e7f74790a85a758870bb2cf59aad1/src/options.ts#L316)

___

### quant

• `Optional` **quant**: `AIModelQuantType`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:303](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/92a347cd5a5e7f74790a85a758870bb2cf59aad1/src/options.ts#L303)

___

### size

• `Optional` **size**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:302](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/92a347cd5a5e7f74790a85a758870bb2cf59aad1/src/options.ts#L302)

___

### size\_type

• `Optional` **size\_type**: [`LlmSizeType`](../enums/LlmSizeType.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:301](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/92a347cd5a5e7f74790a85a758870bb2cf59aad1/src/options.ts#L301)

___

### state

• `Optional` **state**: `LlamaCppServerState`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:299](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/92a347cd5a5e7f74790a85a758870bb2cf59aad1/src/options.ts#L299)

___

### vocab\_type

• `Optional` **vocab\_type**: [`LlamaVocabType`](../enums/LlamaVocabType.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:304](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/92a347cd5a5e7f74790a85a758870bb2cf59aad1/src/options.ts#L304)
