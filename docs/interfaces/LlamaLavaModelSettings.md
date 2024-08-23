[@isdk/ai-tool-llm-llamacpp](../README.md) / [Exports](../modules.md) / LlamaLavaModelSettings

# Interface: LlamaLavaModelSettings

## Hierarchy

- `AILavaModelSettings`

  ↳ **`LlamaLavaModelSettings`**

## Table of contents

### Properties

- [\_id](LlamaLavaModelSettings.md#_id)
- [author](LlamaLavaModelSettings.md#author)
- [chat\_template](LlamaLavaModelSettings.md#chat_template)
- [config](LlamaLavaModelSettings.md#config)
- [content\_size](LlamaLavaModelSettings.md#content_size)
- [createdAt](LlamaLavaModelSettings.md#createdat)
- [description](LlamaLavaModelSettings.md#description)
- [downloaded](LlamaLavaModelSettings.md#downloaded)
- [downloads](LlamaLavaModelSettings.md#downloads)
- [featured](LlamaLavaModelSettings.md#featured)
- [files](LlamaLavaModelSettings.md#files)
- [hf\_repo](LlamaLavaModelSettings.md#hf_repo)
- [language](LlamaLavaModelSettings.md#language)
- [license](LlamaLavaModelSettings.md#license)
- [likes](LlamaLavaModelSettings.md#likes)
- [logo](LlamaLavaModelSettings.md#logo)
- [model](LlamaLavaModelSettings.md#model)
- [n\_embd](LlamaLavaModelSettings.md#n_embd)
- [name](LlamaLavaModelSettings.md#name)
- [params\_size](LlamaLavaModelSettings.md#params_size)
- [provider](LlamaLavaModelSettings.md#provider)
- [scale](LlamaLavaModelSettings.md#scale)
- [skills](LlamaLavaModelSettings.md#skills)
- [source](LlamaLavaModelSettings.md#source)
- [supports](LlamaLavaModelSettings.md#supports)
- [title](LlamaLavaModelSettings.md#title)
- [type](LlamaLavaModelSettings.md#type)
- [updatedAt](LlamaLavaModelSettings.md#updatedat)
- [url](LlamaLavaModelSettings.md#url)

## Properties

### \_id

• `Optional` **\_id**: `string`

#### Inherited from

AILavaModelSettings.\_id

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:214

___

### author

• `Optional` **author**: `string`

#### Inherited from

AILavaModelSettings.author

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:246

___

### chat\_template

• `Optional` **chat\_template**: `string`

#### Inherited from

AILavaModelSettings.chat\_template

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:249

___

### config

• `Optional` **config**: `AIOptions`

#### Inherited from

AILavaModelSettings.config

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:250

___

### content\_size

• `Optional` **content\_size**: `number`

the content length in train

#### Inherited from

AILavaModelSettings.content\_size

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:229

___

### createdAt

• `Optional` **createdAt**: `Date`

#### Inherited from

AILavaModelSettings.createdAt

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:252

___

### description

• `Optional` **description**: `string`

#### Inherited from

AILavaModelSettings.description

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:245

___

### downloaded

• `Optional` **downloaded**: `boolean`

#### Inherited from

AILavaModelSettings.downloaded

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:254

___

### downloads

• `Optional` **downloads**: `number`

#### Inherited from

AILavaModelSettings.downloads

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:243

___

### featured

• `Optional` **featured**: `boolean`

#### Inherited from

AILavaModelSettings.featured

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:241

___

### files

• `Optional` **files**: `AIModelFileSettings`[]

#### Inherited from

AILavaModelSettings.files

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:259

___

### hf\_repo

• `Optional` **hf\_repo**: `string`

hugging-face repo name

#### Inherited from

AILavaModelSettings.hf\_repo

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:238

___

### language

• `Optional` **language**: `string`[]

#### Inherited from

AILavaModelSettings.language

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:251

___

### license

• `Optional` **license**: `string`

#### Inherited from

AILavaModelSettings.license

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:247

___

### likes

• `Optional` **likes**: `number`

#### Inherited from

AILavaModelSettings.likes

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:242

___

### logo

• `Optional` **logo**: `string`

#### Inherited from

AILavaModelSettings.logo

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:248

___

### model

• **model**: `AIModelNameRule` \| `AIModelNameRule`[]

#### Inherited from

AILavaModelSettings.model

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:262

___

### n\_embd

• `Optional` **n\_embd**: `number`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/options.ts:487](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/bddcb350cde2314c95df2454df8e6e5e2a38d96d/src/options.ts#L487)

___

### name

• `Optional` **name**: `string`

the model unique name, but not the unique in db

#### Inherited from

AILavaModelSettings.name

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:218

___

### params\_size

• `Optional` **params\_size**: `number`

the model params size in bytes

#### Inherited from

AILavaModelSettings.params\_size

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:225

___

### provider

• `Optional` **provider**: `string`

#### Inherited from

AILavaModelSettings.provider

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:240

___

### scale

• `Optional` **scale**: `string`

#### Inherited from

AILavaModelSettings.scale

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:230

___

### skills

• `Optional` **skills**: `AIModelSkillName`[]

#### Inherited from

AILavaModelSettings.skills

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:239

___

### source

• `Optional` **source**: ``"huggingface"``

#### Inherited from

AILavaModelSettings.source

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:221

___

### supports

• `Optional` **supports**: `AIModelType` \| `AIModelType`[]

#### Inherited from

AILavaModelSettings.supports

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:220

___

### title

• `Optional` **title**: `string`

#### Inherited from

AILavaModelSettings.title

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:244

___

### type

• `Optional` **type**: `AIModelType`

#### Inherited from

AILavaModelSettings.type

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:219

___

### updatedAt

• `Optional` **updatedAt**: `Date`

#### Inherited from

AILavaModelSettings.updatedAt

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:253

___

### url

• `Optional` **url**: `string`

the remote url to download the model

#### Inherited from

AILavaModelSettings.url

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:234
