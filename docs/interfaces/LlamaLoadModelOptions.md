[@isdk/ai-tool-llm-llamacpp](../README.md) / [Exports](../modules.md) / LlamaLoadModelOptions

# Interface: LlamaLoadModelOptions

## Hierarchy

- `AIOptions`

  ↳ **`LlamaLoadModelOptions`**

## Table of contents

### Properties

- [alias](LlamaLoadModelOptions.md#alias)
- [batch](LlamaLoadModelOptions.md#batch)
- [cache\_type\_k](LlamaLoadModelOptions.md#cache_type_k)
- [cache\_type\_v](LlamaLoadModelOptions.md#cache_type_v)
- [cont\_batching](LlamaLoadModelOptions.md#cont_batching)
- [embedding](LlamaLoadModelOptions.md#embedding)
- [gpu\_layers](LlamaLoadModelOptions.md#gpu_layers)
- [grp\_attn\_n](LlamaLoadModelOptions.md#grp_attn_n)
- [grp\_attn\_w](LlamaLoadModelOptions.md#grp_attn_w)
- [lora](LlamaLoadModelOptions.md#lora)
- [lora\_base](LlamaLoadModelOptions.md#lora_base)
- [mmproj](LlamaLoadModelOptions.md#mmproj)
- [model](LlamaLoadModelOptions.md#model)
- [n\_ctx](LlamaLoadModelOptions.md#n_ctx)
- [n\_predict](LlamaLoadModelOptions.md#n_predict)
- [n\_threads\_batch](LlamaLoadModelOptions.md#n_threads_batch)
- [parallel](LlamaLoadModelOptions.md#parallel)
- [rope\_freq\_base](LlamaLoadModelOptions.md#rope_freq_base)
- [rope\_freq\_scale](LlamaLoadModelOptions.md#rope_freq_scale)
- [rope\_scaling](LlamaLoadModelOptions.md#rope_scaling)
- [threads](LlamaLoadModelOptions.md#threads)
- [use\_mlock](LlamaLoadModelOptions.md#use_mlock)
- [use\_mmap](LlamaLoadModelOptions.md#use_mmap)
- [yarn\_attn\_factor](LlamaLoadModelOptions.md#yarn_attn_factor)
- [yarn\_beta\_fast](LlamaLoadModelOptions.md#yarn_beta_fast)
- [yarn\_beta\_slow](LlamaLoadModelOptions.md#yarn_beta_slow)
- [yarn\_ext\_factor](LlamaLoadModelOptions.md#yarn_ext_factor)

## Properties

### alias

• `Optional` **alias**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:229](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L229)

___

### batch

• `Optional` **batch**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:239](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L239)

___

### cache\_type\_k

• `Optional` **cache\_type\_k**: [`LlamaCacheQuantType`](../modules.md#llamacachequanttype)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:256](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L256)

___

### cache\_type\_v

• `Optional` **cache\_type\_v**: [`LlamaCacheQuantType`](../modules.md#llamacachequanttype)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:257](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L257)

___

### cont\_batching

• `Optional` **cont\_batching**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:254](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L254)

___

### embedding

• `Optional` **embedding**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:238](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L238)

___

### gpu\_layers

• `Optional` **gpu\_layers**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:230](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L230)

___

### grp\_attn\_n

• `Optional` **grp\_attn\_n**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:243](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L243)

___

### grp\_attn\_w

• `Optional` **grp\_attn\_w**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:244](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L244)

___

### lora

• `Optional` **lora**: [`LoraItem`](../modules.md#loraitem) \| [`LoraItems`](../modules.md#loraitems)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:258](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L258)

___

### lora\_base

• `Optional` **lora\_base**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:259](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L259)

___

### mmproj

• `Optional` **mmproj**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:227](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L227)

___

### model

• **model**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:225](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L225)

___

### n\_ctx

• `Optional` **n\_ctx**: `number`

Specify the context window size of the model that you have loaded in your
Llama.cpp server.
// Set the size of the prompt context. The default is 512, but LLaMA models were built with a context of 2048, which will provide better results for longer input/inference.
// The size may differ in other models, for example, baichuan models were build with a context of 4096.

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:237](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L237)

___

### n\_predict

• `Optional` **n\_predict**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:255](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L255)

___

### n\_threads\_batch

• `Optional` **n\_threads\_batch**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:242](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L242)

___

### parallel

• `Optional` **parallel**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:240](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L240)

___

### rope\_freq\_base

• `Optional` **rope\_freq\_base**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:246](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L246)

___

### rope\_freq\_scale

• `Optional` **rope\_freq\_scale**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:247](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L247)

___

### rope\_scaling

• `Optional` **rope\_scaling**: [`LlamaRopeScalingType`](../modules.md#llamaropescalingtype)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:245](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L245)

___

### threads

• `Optional` **threads**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:241](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L241)

___

### use\_mlock

• `Optional` **use\_mlock**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:253](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L253)

___

### use\_mmap

• `Optional` **use\_mmap**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:252](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L252)

___

### yarn\_attn\_factor

• `Optional` **yarn\_attn\_factor**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:249](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L249)

___

### yarn\_beta\_fast

• `Optional` **yarn\_beta\_fast**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:250](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L250)

___

### yarn\_beta\_slow

• `Optional` **yarn\_beta\_slow**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:251](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L251)

___

### yarn\_ext\_factor

• `Optional` **yarn\_ext\_factor**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:248](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/8ad3aed2562165f4fe13169c552b1b3d76889041/src/options.ts#L248)