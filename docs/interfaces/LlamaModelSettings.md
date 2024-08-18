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

[packages/ai-tool-llm-llamacpp/src/options.ts:464](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/93d35820584e194d5f0d1f510bbd9e1fb303d907/src/options.ts#L464)

___

### chat\_template

• `Optional` **chat\_template**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:482](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/93d35820584e194d5f0d1f510bbd9e1fb303d907/src/options.ts#L482)

___

### model

• **model**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:462](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/93d35820584e194d5f0d1f510bbd9e1fb303d907/src/options.ts#L462)

___

### n\_ctx\_train

• `Optional` **n\_ctx\_train**: `number`

the content length in train

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:472](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/93d35820584e194d5f0d1f510bbd9e1fb303d907/src/options.ts#L472)

___

### n\_embd

• `Optional` **n\_embd**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:481](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/93d35820584e194d5f0d1f510bbd9e1fb303d907/src/options.ts#L481)

___

### n\_params

• `Optional` **n\_params**: `number`

the model params size in bytes

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:476](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/93d35820584e194d5f0d1f510bbd9e1fb303d907/src/options.ts#L476)

___

### n\_vocab

• `Optional` **n\_vocab**: `number`

the quanted model size in bytes

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:480](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/93d35820584e194d5f0d1f510bbd9e1fb303d907/src/options.ts#L480)

___

### quant

• `Optional` **quant**: `AIModelQuantType`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:467](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/93d35820584e194d5f0d1f510bbd9e1fb303d907/src/options.ts#L467)

___

### size

• `Optional` **size**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:466](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/93d35820584e194d5f0d1f510bbd9e1fb303d907/src/options.ts#L466)

___

### size\_type

• `Optional` **size\_type**: [`LlmSizeType`](../enums/LlmSizeType.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:465](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/93d35820584e194d5f0d1f510bbd9e1fb303d907/src/options.ts#L465)

___

### state

• `Optional` **state**: `LlamaCppServerState`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:463](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/93d35820584e194d5f0d1f510bbd9e1fb303d907/src/options.ts#L463)

___

### vocab\_type

• `Optional` **vocab\_type**: [`LlamaVocabType`](../enums/LlamaVocabType.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:468](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/93d35820584e194d5f0d1f510bbd9e1fb303d907/src/options.ts#L468)
