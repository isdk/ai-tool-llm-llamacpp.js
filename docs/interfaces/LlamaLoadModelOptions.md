[@isdk/ai-tool-llm-llamacpp](../README.md) / [Exports](../modules.md) / LlamaLoadModelOptions

# Interface: LlamaLoadModelOptions

## Hierarchy

- `AIOptions`

  ↳ **`LlamaLoadModelOptions`**

## Table of contents

### Properties

- [attention\_type](LlamaLoadModelOptions.md#attention_type)
- [batch](LlamaLoadModelOptions.md#batch)
- [cache\_type\_k](LlamaLoadModelOptions.md#cache_type_k)
- [cache\_type\_v](LlamaLoadModelOptions.md#cache_type_v)
- [check\_tensors](LlamaLoadModelOptions.md#check_tensors)
- [cont\_batching](LlamaLoadModelOptions.md#cont_batching)
- [conversation](LlamaLoadModelOptions.md#conversation)
- [defrag\_thold](LlamaLoadModelOptions.md#defrag_thold)
- [display\_prompt](LlamaLoadModelOptions.md#display_prompt)
- [dump\_kv\_cache](LlamaLoadModelOptions.md#dump_kv_cache)
- [embd\_normalize](LlamaLoadModelOptions.md#embd_normalize)
- [embd\_output\_format](LlamaLoadModelOptions.md#embd_output_format)
- [embd\_sep](LlamaLoadModelOptions.md#embd_sep)
- [embedding](LlamaLoadModelOptions.md#embedding)
- [escape](LlamaLoadModelOptions.md#escape)
- [flash\_attn](LlamaLoadModelOptions.md#flash_attn)
- [gpu\_layers](LlamaLoadModelOptions.md#gpu_layers)
- [gpu\_layers\_draft](LlamaLoadModelOptions.md#gpu_layers_draft)
- [grp\_attn\_n](LlamaLoadModelOptions.md#grp_attn_n)
- [grp\_attn\_w](LlamaLoadModelOptions.md#grp_attn_w)
- [hf\_file](LlamaLoadModelOptions.md#hf_file)
- [hf\_repo](LlamaLoadModelOptions.md#hf_repo)
- [hf\_token](LlamaLoadModelOptions.md#hf_token)
- [image](LlamaLoadModelOptions.md#image)
- [infill](LlamaLoadModelOptions.md#infill)
- [logdir](LlamaLoadModelOptions.md#logdir)
- [logits\_all](LlamaLoadModelOptions.md#logits_all)
- [logits\_file](LlamaLoadModelOptions.md#logits_file)
- [lookup\_cache\_dynamic](LlamaLoadModelOptions.md#lookup_cache_dynamic)
- [lookup\_cache\_static](LlamaLoadModelOptions.md#lookup_cache_static)
- [lora](LlamaLoadModelOptions.md#lora)
- [lora\_init\_without\_apply](LlamaLoadModelOptions.md#lora_init_without_apply)
- [main\_gpu](LlamaLoadModelOptions.md#main_gpu)
- [mmproj](LlamaLoadModelOptions.md#mmproj)
- [model](LlamaLoadModelOptions.md#model)
- [model\_alias](LlamaLoadModelOptions.md#model_alias)
- [model\_draft](LlamaLoadModelOptions.md#model_draft)
- [model\_url](LlamaLoadModelOptions.md#model_url)
- [multiline\_input](LlamaLoadModelOptions.md#multiline_input)
- [n\_chunks](LlamaLoadModelOptions.md#n_chunks)
- [n\_ctx](LlamaLoadModelOptions.md#n_ctx)
- [n\_draft](LlamaLoadModelOptions.md#n_draft)
- [n\_keep](LlamaLoadModelOptions.md#n_keep)
- [n\_predict](LlamaLoadModelOptions.md#n_predict)
- [n\_sequences](LlamaLoadModelOptions.md#n_sequences)
- [no\_kv\_offload](LlamaLoadModelOptions.md#no_kv_offload)
- [numa](LlamaLoadModelOptions.md#numa)
- [p\_split](LlamaLoadModelOptions.md#p_split)
- [parallel](LlamaLoadModelOptions.md#parallel)
- [path\_prompt\_cache](LlamaLoadModelOptions.md#path_prompt_cache)
- [pooling](LlamaLoadModelOptions.md#pooling)
- [prompt\_cache\_all](LlamaLoadModelOptions.md#prompt_cache_all)
- [prompt\_cache\_ro](LlamaLoadModelOptions.md#prompt_cache_ro)
- [reverse\_prompt](LlamaLoadModelOptions.md#reverse_prompt)
- [rope\_freq\_base](LlamaLoadModelOptions.md#rope_freq_base)
- [rope\_freq\_scale](LlamaLoadModelOptions.md#rope_freq_scale)
- [rope\_scaling](LlamaLoadModelOptions.md#rope_scaling)
- [rpc\_servers](LlamaLoadModelOptions.md#rpc_servers)
- [samplers](LlamaLoadModelOptions.md#samplers)
- [samplers\_sequence](LlamaLoadModelOptions.md#samplers_sequence)
- [special](LlamaLoadModelOptions.md#special)
- [split\_mode](LlamaLoadModelOptions.md#split_mode)
- [tensor\_split](LlamaLoadModelOptions.md#tensor_split)
- [threads](LlamaLoadModelOptions.md#threads)
- [threads\_batch](LlamaLoadModelOptions.md#threads_batch)
- [threads\_batch\_draft](LlamaLoadModelOptions.md#threads_batch_draft)
- [threads\_draft](LlamaLoadModelOptions.md#threads_draft)
- [ubatch](LlamaLoadModelOptions.md#ubatch)
- [use\_mlock](LlamaLoadModelOptions.md#use_mlock)
- [use\_mmap](LlamaLoadModelOptions.md#use_mmap)
- [verbose\_prompt](LlamaLoadModelOptions.md#verbose_prompt)
- [verbosity](LlamaLoadModelOptions.md#verbosity)
- [yarn\_attn\_factor](LlamaLoadModelOptions.md#yarn_attn_factor)
- [yarn\_beta\_fast](LlamaLoadModelOptions.md#yarn_beta_fast)
- [yarn\_beta\_slow](LlamaLoadModelOptions.md#yarn_beta_slow)
- [yarn\_ext\_factor](LlamaLoadModelOptions.md#yarn_ext_factor)
- [yarn\_orig\_ctx](LlamaLoadModelOptions.md#yarn_orig_ctx)

## Properties

### attention\_type

• `Optional` **attention\_type**: ``"causal"`` \| ``"non-causal"``

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:310](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L310)

___

### batch

• `Optional` **batch**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:315](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L315)

___

### cache\_type\_k

• `Optional` **cache\_type\_k**: [`LlamaCacheQuantType`](../modules.md#llamacachequanttype)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:348](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L348)

___

### cache\_type\_v

• `Optional` **cache\_type\_v**: [`LlamaCacheQuantType`](../modules.md#llamacachequanttype)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:349](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L349)

___

### check\_tensors

• `Optional` **check\_tensors**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:371](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L371)

___

### cont\_batching

• `Optional` **cont\_batching**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:351](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L351)

___

### conversation

• `Optional` **conversation**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:344](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L344)

___

### defrag\_thold

• `Optional` **defrag\_thold**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:311](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L311)

___

### display\_prompt

• `Optional` **display\_prompt**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:365](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L365)

___

### dump\_kv\_cache

• `Optional` **dump\_kv\_cache**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:346](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L346)

___

### embd\_normalize

• `Optional` **embd\_normalize**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:341](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L341)

___

### embd\_output\_format

• `Optional` **embd\_output\_format**: ``""`` \| ``"array"`` \| ``"json"`` \| ``"json+"``

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:342](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L342)

___

### embd\_sep

• `Optional` **embd\_sep**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:343](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L343)

___

### embedding

• `Optional` **embedding**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:340](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L340)

___

### escape

• `Optional` **escape**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:287](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L287)

___

### flash\_attn

• `Optional` **flash\_attn**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:352](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L352)

___

### gpu\_layers

• `Optional` **gpu\_layers**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:354](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L354)

___

### gpu\_layers\_draft

• `Optional` **gpu\_layers\_draft**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:355](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L355)

___

### grp\_attn\_n

• `Optional` **grp\_attn\_n**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:299](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L299)

___

### grp\_attn\_w

• `Optional` **grp\_attn\_w**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:300](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L300)

___

### hf\_file

• `Optional` **hf\_file**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:330](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L330)

___

### hf\_repo

• `Optional` **hf\_repo**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:329](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L329)

___

### hf\_token

• `Optional` **hf\_token**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:328](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L328)

___

### image

• `Optional` **image**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:338](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L338)

___

### infill

• `Optional` **infill**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:345](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L345)

___

### logdir

• `Optional` **logdir**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:366](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L366)

___

### logits\_all

• `Optional` **logits\_all**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:370](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L370)

___

### logits\_file

• `Optional` **logits\_file**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:369](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L369)

___

### lookup\_cache\_dynamic

• `Optional` **lookup\_cache\_dynamic**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:368](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L368)

___

### lookup\_cache\_static

• `Optional` **lookup\_cache\_static**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:367](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L367)

___

### lora

• `Optional` **lora**: [`LoraItem`](../modules.md#loraitem) \| [`LoraItems`](../modules.md#loraitems)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:332](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L332)

___

### lora\_init\_without\_apply

• `Optional` **lora\_init\_without\_apply**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:333](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L333)

___

### main\_gpu

• `Optional` **main\_gpu**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:356](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L356)

___

### mmproj

• `Optional` **mmproj**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:337](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L337)

___

### model

• **model**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:324](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L324)

___

### model\_alias

• `Optional` **model\_alias**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:326](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L326)

___

### model\_draft

• `Optional` **model\_draft**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:325](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L325)

___

### model\_url

• `Optional` **model\_url**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:327](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L327)

___

### multiline\_input

• `Optional` **multiline\_input**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:350](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L350)

___

### n\_chunks

• `Optional` **n\_chunks**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:319](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L319)

___

### n\_ctx

• `Optional` **n\_ctx**: `number`

Specify the context window size of the model that you have loaded in your
Llama.cpp server.
// Set the size of the prompt context. The default is 512, but LLaMA models were built with a context of 2048, which will provide better results for longer input/inference.
// The size may differ in other models, for example, baichuan models were build with a context of 4096.

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:298](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L298)

___

### n\_draft

• `Optional` **n\_draft**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:318](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L318)

___

### n\_keep

• `Optional` **n\_keep**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:317](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L317)

___

### n\_predict

• `Optional` **n\_predict**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:291](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L291)

___

### n\_sequences

• `Optional` **n\_sequences**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:321](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L321)

___

### no\_kv\_offload

• `Optional` **no\_kv\_offload**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:347](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L347)

___

### numa

• `Optional` **numa**: ``"distribute"`` \| ``"isolate"`` \| ``"numactl"``

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:361](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L361)

___

### p\_split

• `Optional` **p\_split**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:322](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L322)

___

### parallel

• `Optional` **parallel**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:320](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L320)

___

### path\_prompt\_cache

• `Optional` **path\_prompt\_cache**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:288](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L288)

___

### pooling

• `Optional` **pooling**: ``"none"`` \| ``"mean"`` \| ``"cls"`` \| ``"last"``

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:309](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L309)

___

### prompt\_cache\_all

• `Optional` **prompt\_cache\_all**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:289](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L289)

___

### prompt\_cache\_ro

• `Optional` **prompt\_cache\_ro**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:290](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L290)

___

### reverse\_prompt

• `Optional` **reverse\_prompt**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:364](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L364)

___

### rope\_freq\_base

• `Optional` **rope\_freq\_base**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:301](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L301)

___

### rope\_freq\_scale

• `Optional` **rope\_freq\_scale**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:302](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L302)

___

### rope\_scaling

• `Optional` **rope\_scaling**: [`LlamaRopeScalingType`](../modules.md#llamaropescalingtype)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:303](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L303)

___

### rpc\_servers

• `Optional` **rpc\_servers**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:359](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L359)

___

### samplers

• `Optional` **samplers**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:312](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L312)

___

### samplers\_sequence

• `Optional` **samplers\_sequence**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:313](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L313)

___

### special

• `Optional` **special**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:339](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L339)

___

### split\_mode

• `Optional` **split\_mode**: [`LlamaSplitMode`](../enums/LlamaSplitMode.md)

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:357](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L357)

___

### tensor\_split

• `Optional` **tensor\_split**: `string`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:358](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L358)

___

### threads

• `Optional` **threads**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:283](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L283)

___

### threads\_batch

• `Optional` **threads\_batch**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:284](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L284)

___

### threads\_batch\_draft

• `Optional` **threads\_batch\_draft**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:286](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L286)

___

### threads\_draft

• `Optional` **threads\_draft**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:285](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L285)

___

### ubatch

• `Optional` **ubatch**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:316](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L316)

___

### use\_mlock

• `Optional` **use\_mlock**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:353](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L353)

___

### use\_mmap

• `Optional` **use\_mmap**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:360](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L360)

___

### verbose\_prompt

• `Optional` **verbose\_prompt**: `boolean`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:363](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L363)

___

### verbosity

• `Optional` **verbosity**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:362](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L362)

___

### yarn\_attn\_factor

• `Optional` **yarn\_attn\_factor**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:306](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L306)

___

### yarn\_beta\_fast

• `Optional` **yarn\_beta\_fast**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:307](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L307)

___

### yarn\_beta\_slow

• `Optional` **yarn\_beta\_slow**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:308](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L308)

___

### yarn\_ext\_factor

• `Optional` **yarn\_ext\_factor**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:305](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L305)

___

### yarn\_orig\_ctx

• `Optional` **yarn\_orig\_ctx**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:304](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/1faba182a165808fbbc7003c50a815dfe07e42ff/src/options.ts#L304)
