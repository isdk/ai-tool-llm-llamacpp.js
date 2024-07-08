[@isdk/ai-tool-llm-llamacpp](../README.md) / [Exports](../modules.md) / LlamaCppProvider

# Class: LlamaCppProvider

## Hierarchy

- `LLMProvider`

  ↳ **`LlamaCppProvider`**

## Table of contents

### Constructors

- [constructor](LlamaCppProvider.md#constructor)

### Properties

- [$attributes](LlamaCppProvider.md#$attributes)
- [apiKey](LlamaCppProvider.md#apikey)
- [apiUrl](LlamaCppProvider.md#apiurl)
- [constructor](LlamaCppProvider.md#constructor-1)
- [defaultOptions](LlamaCppProvider.md#defaultoptions)
- [depends](LlamaCppProvider.md#depends)
- [description](LlamaCppProvider.md#description)
- [name](LlamaCppProvider.md#name)
- [nonExported1stChar](LlamaCppProvider.md#nonexported1stchar)
- [params](LlamaCppProvider.md#params)
- [prior](LlamaCppProvider.md#prior)
- [result](LlamaCppProvider.md#result)
- [rule](LlamaCppProvider.md#rule)
- [scope](LlamaCppProvider.md#scope)
- [setup](LlamaCppProvider.md#setup)
- [supports](LlamaCppProvider.md#supports)
- [tags](LlamaCppProvider.md#tags)
- [current](LlamaCppProvider.md#current)
- [dataPath](LlamaCppProvider.md#datapath)
- [items](LlamaCppProvider.md#items)

### Methods

- [addModel](LlamaCppProvider.md#addmodel)
- [arr2ObjParams](LlamaCppProvider.md#arr2objparams)
- [assign](LlamaCppProvider.md#assign)
- [assignProperty](LlamaCppProvider.md#assignproperty)
- [assignPropertyTo](LlamaCppProvider.md#assignpropertyto)
- [assignTo](LlamaCppProvider.md#assignto)
- [clone](LlamaCppProvider.md#clone)
- [cloneTo](LlamaCppProvider.md#cloneto)
- [defineProperties](LlamaCppProvider.md#defineproperties)
- [deleteModel](LlamaCppProvider.md#deletemodel)
- [exportTo](LlamaCppProvider.md#exportto)
- [formatPrompt](LlamaCppProvider.md#formatprompt)
- [func](LlamaCppProvider.md#func)
- [getChatTemplate](LlamaCppProvider.md#getchattemplate)
- [getCurrentProvider](LlamaCppProvider.md#getcurrentprovider)
- [getDefaultParameters](LlamaCppProvider.md#getdefaultparameters)
- [getFunc](LlamaCppProvider.md#getfunc)
- [getFuncWithPos](LlamaCppProvider.md#getfuncwithpos)
- [getModelInfo](LlamaCppProvider.md#getmodelinfo)
- [getProperties](LlamaCppProvider.md#getproperties)
- [hasOwnProperty](LlamaCppProvider.md#hasownproperty)
- [initialize](LlamaCppProvider.md#initialize)
- [isModelNameMatched](LlamaCppProvider.md#ismodelnamematched)
- [isPrototypeOf](LlamaCppProvider.md#isprototypeof)
- [isSame](LlamaCppProvider.md#issame)
- [isStream](LlamaCppProvider.md#isstream)
- [listModels](LlamaCppProvider.md#listmodels)
- [listProviders](LlamaCppProvider.md#listproviders)
- [mergeTo](LlamaCppProvider.md#mergeto)
- [obj2ArrParams](LlamaCppProvider.md#obj2arrparams)
- [propertyIsEnumerable](LlamaCppProvider.md#propertyisenumerable)
- [register](LlamaCppProvider.md#register)
- [run](LlamaCppProvider.md#run)
- [runAs](LlamaCppProvider.md#runas)
- [runAsSync](LlamaCppProvider.md#runassync)
- [runSync](LlamaCppProvider.md#runsync)
- [runWithPos](LlamaCppProvider.md#runwithpos)
- [runWithPosAs](LlamaCppProvider.md#runwithposas)
- [runWithPosAsSync](LlamaCppProvider.md#runwithposassync)
- [runWithPosSync](LlamaCppProvider.md#runwithpossync)
- [setCurrentProvider](LlamaCppProvider.md#setcurrentprovider)
- [toJSON](LlamaCppProvider.md#tojson)
- [toLocaleString](LlamaCppProvider.md#tolocalestring)
- [toObject](LlamaCppProvider.md#toobject)
- [toString](LlamaCppProvider.md#tostring)
- [unregister](LlamaCppProvider.md#unregister)
- [updateModel](LlamaCppProvider.md#updatemodel)
- [valueOf](LlamaCppProvider.md#valueof)
- [assign](LlamaCppProvider.md#assign-1)
- [create](LlamaCppProvider.md#create)
- [defineProperties](LlamaCppProvider.md#defineproperties-1)
- [defineProperty](LlamaCppProvider.md#defineproperty)
- [entries](LlamaCppProvider.md#entries)
- [freeze](LlamaCppProvider.md#freeze)
- [fromEntries](LlamaCppProvider.md#fromentries)
- [get](LlamaCppProvider.md#get)
- [getAllByTag](LlamaCppProvider.md#getallbytag)
- [getByModel](LlamaCppProvider.md#getbymodel)
- [getByTag](LlamaCppProvider.md#getbytag)
- [getCurrentProvider](LlamaCppProvider.md#getcurrentprovider-1)
- [getFunc](LlamaCppProvider.md#getfunc-1)
- [getFuncWithPos](LlamaCppProvider.md#getfuncwithpos-1)
- [getOwnPropertyDescriptor](LlamaCppProvider.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](LlamaCppProvider.md#getownpropertydescriptors)
- [getOwnPropertyNames](LlamaCppProvider.md#getownpropertynames)
- [getOwnPropertySymbols](LlamaCppProvider.md#getownpropertysymbols)
- [getProperties](LlamaCppProvider.md#getproperties-1)
- [getPrototypeOf](LlamaCppProvider.md#getprototypeof)
- [is](LlamaCppProvider.md#is)
- [isExtensible](LlamaCppProvider.md#isextensible)
- [isFrozen](LlamaCppProvider.md#isfrozen)
- [isSealed](LlamaCppProvider.md#issealed)
- [keys](LlamaCppProvider.md#keys)
- [list](LlamaCppProvider.md#list)
- [preventExtensions](LlamaCppProvider.md#preventextensions)
- [register](LlamaCppProvider.md#register-1)
- [run](LlamaCppProvider.md#run-1)
- [runSync](LlamaCppProvider.md#runsync-1)
- [runWithPos](LlamaCppProvider.md#runwithpos-1)
- [runWithPosSync](LlamaCppProvider.md#runwithpossync-1)
- [seal](LlamaCppProvider.md#seal)
- [setPrototypeOf](LlamaCppProvider.md#setprototypeof)
- [unregister](LlamaCppProvider.md#unregister-1)
- [values](LlamaCppProvider.md#values)

## Constructors

### constructor

• **new LlamaCppProvider**(`name`, `options?`): [`LlamaCppProvider`](LlamaCppProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `FuncItem` |
| `options?` | `any` |

#### Returns

[`LlamaCppProvider`](LlamaCppProvider.md)

#### Inherited from

LLMProvider.constructor

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:58

## Properties

### $attributes

• **$attributes**: `Properties`

#### Inherited from

LLMProvider.$attributes

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:5

___

### apiKey

• `Optional` **apiKey**: `string`

#### Inherited from

LLMProvider.apiKey

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:192

___

### apiUrl

• `Optional` **apiUrl**: `string`

#### Inherited from

LLMProvider.apiUrl

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:193

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

LLMProvider.constructor

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:125

___

### defaultOptions

• **defaultOptions**: `Object`

The default options for export and assign

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assign?` | `IMergeOptions` |
| `export?` | `IMergeOptions` |

#### Inherited from

LLMProvider.defaultOptions

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:74

___

### depends

• **depends**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event-bus` | `EventToolFunc` |

#### Inherited from

LLMProvider.depends

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:361

___

### description

• **description**: `string`

#### Inherited from

LLMProvider.description

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:342

___

### name

• `Optional` **name**: `string`

#### Inherited from

LLMProvider.name

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:22

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

LLMProvider.nonExported1stChar

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• **params**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `model` | \{ `description`: `string` ; `name`: `string` ; `type`: `string`  } |
| `model.description` | `string` |
| `model.name` | `string` |
| `model.type` | `string` |
| `options` | \{ `description`: `string` ; `name`: `string` ; `type`: `string`  } |
| `options.description` | `string` |
| `options.name` | `string` |
| `options.type` | `string` |
| `value` | \{ `description`: `string` ; `name`: `string` ; `type`: `string`  } |
| `value.description` | `string` |
| `value.name` | `string` |
| `value.type` | `string` |

#### Inherited from

LLMProvider.params

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:343

___

### prior

• **prior**: `number`

#### Inherited from

LLMProvider.prior

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:190

___

### result

• **result**: `string`

#### Inherited from

LLMProvider.result

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:360

___

### rule

• **rule**: `RegExp`

#### Overrides

LLMProvider.rule

#### Defined in

[packages/ai-tool-llm-llamacpp/src/llamacpp.ts:26](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db80c661dd7093828e823cbf9f58e7d76ff863e6/src/llamacpp.ts#L26)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

LLMProvider.scope

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:25

___

### setup

• `Optional` **setup**: (`this`: `ToolFunc`, `options?`: `FuncItem`) => `void`

#### Type declaration

▸ (`this`, `options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ToolFunc` |
| `options?` | `FuncItem` |

##### Returns

`void`

#### Inherited from

LLMProvider.setup

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:27

___

### supports

• **supports**: `AIModelType` \| `AIModelType`[]

#### Inherited from

LLMProvider.supports

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:191

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

LLMProvider.tags

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:26

___

### current

▪ `Static` `Optional` **current**: `string`

#### Inherited from

LLMProvider.current

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:338

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Inherited from

LLMProvider.dataPath

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:43

___

### items

▪ `Static` **items**: `Object`

#### Index signature

▪ [name: `string`]: `LLMProvider`

#### Inherited from

LLMProvider.items

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:339

## Methods

### addModel

▸ **addModel**(`modelName`, `model`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |
| `model` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

LLMProvider.addModel

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:334

___

### arr2ObjParams

▸ **arr2ObjParams**(`params`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`any`[]

#### Inherited from

LLMProvider.arr2ObjParams

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:61

___

### assign

▸ **assign**(`src`, `options?`): `this`

Assign the values from the src object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the source object |
| `options?` | `IMergeOptions` | - |

#### Returns

`this`

this object

#### Inherited from

LLMProvider.assign

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:106

___

### assignProperty

▸ **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign a property of src to this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the src object |
| `name` | `string` | the property name to assign |
| `value` | `any` | the property value to assign |
| `attrs?` | `any` | the attributes object |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

#### Inherited from

LLMProvider.assignProperty

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:117

___

### assignPropertyTo

▸ **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign the property value from the src to destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `src` | `any` | The src object |
| `name` | `string` | The property name |
| `value` | `any` | The property value |
| `attrs?` | `any` | The attributes object of the property |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

**`Abstract`**

#### Inherited from

LLMProvider.assignPropertyTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:131

___

### assignTo

▸ **assignTo**(`dest?`, `options?`): `any`

Assign this attributes to the dest object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest?` | `any` | the destination object |
| `options?` | `IMergeOptions` | - |

#### Returns

`any`

the dest object

#### Inherited from

LLMProvider.assignTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:191

___

### clone

▸ **clone**(`options?`): `any`

Create a new object with the same values of attributes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IMergeOptions` |

#### Returns

`any`

the new object

#### Inherited from

LLMProvider.clone

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:155

___

### cloneTo

▸ **cloneTo**(`dest`, `options?`): `any`

Create and assign the values to the destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IMergeOptions` |  |

#### Returns

`any`

the new dest object

#### Inherited from

LLMProvider.cloneTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:148

___

### defineProperties

▸ **defineProperties**(`aProperties`): `any`

Define the attributes of this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aProperties` | `SimplePropDescriptors` | the defined attributes of the object |

#### Returns

`any`

**`Abstract`**

#### Inherited from

LLMProvider.defineProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:89

___

### deleteModel

▸ **deleteModel**(`modelName`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

LLMProvider.deleteModel

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:335

___

### exportTo

▸ **exportTo**(`dest`, `options?`): `any`

Export attributes to the dest json object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IExportOptions` | - |

#### Returns

`any`

the dest object.

#### Inherited from

LLMProvider.exportTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:173

___

### formatPrompt

▸ **formatPrompt**(`messages`, `modelInfo?`, `options?`): `Promise`\<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | `AIChatMessageParam`[] |
| `modelInfo?` | `string` \| `AIModelParams` |
| `options?` | `Object` |
| `options.add_generation_prompt?` | `boolean` |
| `options.chatTemplate?` | `AIPromptResult` |
| `options.defaultTemplate?` | `boolean` |
| `options.prompt?` | `any` |
| `options.type?` | `AIPromptType` |

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Inherited from

LLMProvider.formatPrompt

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:382

___

### func

▸ **func**(`«destructured»`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `model` | `string` |
| › `options` | `AIOptions` |
| › `value` | `any` |

#### Returns

`Promise`\<`any`\>

#### Overrides

LLMProvider.func

#### Defined in

[packages/ai-tool-llm-llamacpp/src/llamacpp.ts:28](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db80c661dd7093828e823cbf9f58e7d76ff863e6/src/llamacpp.ts#L28)

___

### getChatTemplate

▸ **getChatTemplate**(`modelInfo?`, `options?`): `Promise`\<`undefined` \| `AIPromptResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelInfo?` | `string` \| `AIModelParams` |
| `options?` | `Object` |
| `options.defaultTemplate?` | `boolean` |
| `options.type?` | `AIPromptType` |

#### Returns

`Promise`\<`undefined` \| `AIPromptResult`\>

#### Inherited from

LLMProvider.getChatTemplate

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:378

___

### getCurrentProvider

▸ **getCurrentProvider**(): `undefined` \| `LLMProvider`

#### Returns

`undefined` \| `LLMProvider`

#### Inherited from

LLMProvider.getCurrentProvider

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:375

___

### getDefaultParameters

▸ **getDefaultParameters**(`chatTemplate`, `model`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatTemplate` | `AIPromptSettings` |
| `model` | `string` |

#### Returns

`any`

#### Inherited from

LLMProvider.getDefaultParameters

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:389

___

### getFunc

▸ **getFunc**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Inherited from

LLMProvider.getFunc

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:67

___

### getFuncWithPos

▸ **getFuncWithPos**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Inherited from

LLMProvider.getFuncWithPos

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:72

___

### getModelInfo

▸ **getModelInfo**(): `Promise`\<`AIModelParams`\>

#### Returns

`Promise`\<`AIModelParams`\>

#### Overrides

LLMProvider.getModelInfo

#### Defined in

[packages/ai-tool-llm-llamacpp/src/llamacpp.ts:171](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/db80c661dd7093828e823cbf9f58e7d76ff863e6/src/llamacpp.ts#L171)

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Inherited from

LLMProvider.getProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:98

___

### hasOwnProperty

▸ **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Inherited from

LLMProvider.hasOwnProperty

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:140

___

### initialize

▸ **initialize**(`src?`): `this`

Initialize object and assign attribute values from src if src exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src?` | `any` |

#### Returns

`this`

this object.

#### Inherited from

LLMProvider.initialize

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:139

___

### isModelNameMatched

▸ **isModelNameMatched**(`modelName`, `rule?`): `undefined` \| `string` \| `RegExpExecArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |
| `rule?` | `AIModelNameRules` |

#### Returns

`undefined` \| `string` \| `RegExpExecArray`

#### Inherited from

LLMProvider.isModelNameMatched

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:366

___

### isPrototypeOf

▸ **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `Object` | Another object whose prototype chain is to be checked. |

#### Returns

`boolean`

#### Inherited from

LLMProvider.isPrototypeOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:146

___

### isSame

▸ **isSame**(`src`, `options?`): `boolean`

Check the src object whether “equals” this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | The source object |
| `options?` | `IMergeOptions` | - |

#### Returns

`boolean`

#### Inherited from

LLMProvider.isSame

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:200

___

### isStream

▸ **isStream**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ServerFuncParams` |

#### Returns

`any`

#### Inherited from

LLMProvider.isStream

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:367

___

### listModels

▸ **listModels**(): `Promise`\<`undefined` \| `string`[]\>

#### Returns

`Promise`\<`undefined` \| `string`[]\>

#### Inherited from

LLMProvider.listModels

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:332

___

### listProviders

▸ **listProviders**(`options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.all?` | `boolean` |
| `options.filter?` | `AIModelNameRules` |

#### Returns

`Object`

#### Inherited from

LLMProvider.listProviders

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:369

___

### mergeTo

▸ **mergeTo**(`dest`, `options?`): `any`

Merge this attributes to dest object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `options?` | `IMergeOptions` | - |

#### Returns

`any`

the dest object.

#### Inherited from

LLMProvider.mergeTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:164

___

### obj2ArrParams

▸ **obj2ArrParams**(`params?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`[]

#### Inherited from

LLMProvider.obj2ArrParams

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:62

___

### propertyIsEnumerable

▸ **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Inherited from

LLMProvider.propertyIsEnumerable

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### register

▸ **register**(): `boolean` \| `ToolFunc`

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

LLMProvider.register

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:59

___

### run

▸ **run**(`params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

LLMProvider.run

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:64

___

### runAs

▸ **runAs**(`name`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

LLMProvider.runAs

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:65

___

### runAsSync

▸ **runAsSync**(`name`, `params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

LLMProvider.runAsSync

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:66

___

### runSync

▸ **runSync**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

LLMProvider.runSync

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:63

___

### runWithPos

▸ **runWithPos**(`...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

LLMProvider.runWithPos

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:70

___

### runWithPosAs

▸ **runWithPosAs**(`name`, `...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

LLMProvider.runWithPosAs

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:71

___

### runWithPosAsSync

▸ **runWithPosAsSync**(`name`, `...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

LLMProvider.runWithPosAsSync

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:69

___

### runWithPosSync

▸ **runWithPosSync**(`...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

LLMProvider.runWithPosSync

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:68

___

### setCurrentProvider

▸ **setCurrentProvider**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

LLMProvider.setCurrentProvider

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:376

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

LLMProvider.toJSON

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

LLMProvider.toLocaleString

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:131

___

### toObject

▸ **toObject**(`options?`): `any`

Convert the attributes to the json object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`any`

the json object.

#### Inherited from

LLMProvider.toObject

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

LLMProvider.toString

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Inherited from

LLMProvider.unregister

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:60

___

### updateModel

▸ **updateModel**(`modelName`, `model`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |
| `model` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

LLMProvider.updateModel

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:333

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

LLMProvider.valueOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:134

___

### assign

▸ **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source` | `U` | The source object from which to copy properties. |

#### Returns

`T` & `U`

#### Inherited from

LLMProvider.assign

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:284

▸ **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |

#### Returns

`T` & `U` & `V`

#### Inherited from

LLMProvider.assign

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:293

▸ **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |
| `W` | `W` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |
| `source3` | `W` | The third source object from which to copy properties. |

#### Returns

`T` & `U` & `V` & `W`

#### Inherited from

LLMProvider.assign

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:303

▸ **assign**(`target`, `...sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | The target object to copy to. |
| `...sources` | `any`[] | One or more source objects from which to copy properties |

#### Returns

`any`

#### Inherited from

LLMProvider.assign

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:311

___

### create

▸ **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | ``null`` \| `object` | Object to use as a prototype. May be null. |

#### Returns

`any`

#### Inherited from

LLMProvider.create

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:188

▸ **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | ``null`` \| `object` | Object to use as a prototype. May be null |
| `properties` | `PropertyDescriptorMap` & `ThisType`\<`any`\> | JavaScript object that contains one or more property descriptors. |

#### Returns

`any`

#### Inherited from

LLMProvider.create

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:195

___

### defineProperties

▸ **defineProperties**(`aTarget`, `aProperties`, `recreate?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aTarget` | `any` |
| `aProperties` | `PropDescriptors` |
| `recreate?` | `boolean` |

#### Returns

`any`

#### Inherited from

LLMProvider.defineProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:11

___

### defineProperty

▸ **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object. |
| `p` | `PropertyKey` | The property name. |
| `attributes` | `PropertyDescriptor` & `ThisType`\<`any`\> | Descriptor for the property. It can be for a data property or an accessor property. |

#### Returns

`T`

#### Inherited from

LLMProvider.defineProperty

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:203

___

### entries

▸ **entries**\<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `T`][]

#### Inherited from

LLMProvider.entries

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:36

▸ **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `any`][]

#### Inherited from

LLMProvider.entries

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:42

___

### freeze

▸ **freeze**\<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Inherited from

LLMProvider.freeze

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:222

▸ **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | extends `string` \| `number` \| `bigint` \| `boolean` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`\<`T`\>

#### Inherited from

LLMProvider.freeze

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:228

▸ **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`\<`T`\>

#### Inherited from

LLMProvider.freeze

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:234

___

### fromEntries

▸ **fromEntries**\<`T`\>(`entries`): `Object`

Returns an object created by key-value entries for properties and methods

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<readonly [`PropertyKey`, `T`]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`Object`

#### Inherited from

LLMProvider.fromEntries

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:26

▸ **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<readonly `any`[]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`any`

#### Inherited from

LLMProvider.fromEntries

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:32

___

### get

▸ **get**(`name`): `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`ToolFunc`

#### Inherited from

LLMProvider.get

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:44

___

### getAllByTag

▸ **getAllByTag**(`tagName`): `ToolFunc`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`ToolFunc`[]

#### Inherited from

LLMProvider.getAllByTag

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:47

___

### getByModel

▸ **getByModel**(`modelName?`): `undefined` \| `LLMProvider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName?` | `string` |

#### Returns

`undefined` \| `LLMProvider`

#### Inherited from

LLMProvider.getByModel

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:364

___

### getByTag

▸ **getByTag**(`tagName`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

LLMProvider.getByTag

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:46

___

### getCurrentProvider

▸ **getCurrentProvider**(): `undefined` \| `LLMProvider`

#### Returns

`undefined` \| `LLMProvider`

#### Inherited from

LLMProvider.getCurrentProvider

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:365

___

### getFunc

▸ **getFunc**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

LLMProvider.getFunc

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:50

___

### getFuncWithPos

▸ **getFuncWithPos**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

LLMProvider.getFuncWithPos

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:53

___

### getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the property. |
| `p` | `PropertyKey` | Name of the property. |

#### Returns

`undefined` \| `PropertyDescriptor`

#### Inherited from

LLMProvider.getOwnPropertyDescriptor

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:175

___

### getOwnPropertyDescriptors

▸ **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ [P in string \| number \| symbol]: TypedPropertyDescriptor\<T[P]\> } & \{ `[x: string]`: `PropertyDescriptor`;  }

Returns an object containing all own property descriptors of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

\{ [P in string \| number \| symbol]: TypedPropertyDescriptor\<T[P]\> } & \{ `[x: string]`: `PropertyDescriptor`;  }

#### Inherited from

LLMProvider.getOwnPropertyDescriptors

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:48

___

### getOwnPropertyNames

▸ **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the own properties. |

#### Returns

`string`[]

#### Inherited from

LLMProvider.getOwnPropertyNames

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:182

___

### getOwnPropertySymbols

▸ **getOwnPropertySymbols**(`o`): `symbol`[]

Returns an array of all symbol properties found directly on object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to retrieve the symbols from. |

#### Returns

`symbol`[]

#### Inherited from

LLMProvider.getOwnPropertySymbols

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

LLMProvider.getProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:10

___

### getPrototypeOf

▸ **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object that references the prototype. |

#### Returns

`any`

#### Inherited from

LLMProvider.getPrototypeOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:167

___

### is

▸ **is**(`value1`, `value2`): `boolean`

Returns true if the values are the same value, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `any` | The first value. |
| `value2` | `any` | The second value. |

#### Returns

`boolean`

#### Inherited from

LLMProvider.is

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:330

___

### isExtensible

▸ **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Inherited from

LLMProvider.isExtensible

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:258

___

### isFrozen

▸ **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Inherited from

LLMProvider.isFrozen

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:252

___

### isSealed

▸ **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Inherited from

LLMProvider.isSealed

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:246

___

### keys

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Inherited from

LLMProvider.keys

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:264

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Inherited from

LLMProvider.keys

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): `Funcs`

#### Returns

`Funcs`

#### Inherited from

LLMProvider.list

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:45

___

### preventExtensions

▸ **preventExtensions**\<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object to make non-extensible. |

#### Returns

`T`

#### Inherited from

LLMProvider.preventExtensions

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:240

___

### register

▸ **register**(`name`, `options`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

LLMProvider.register

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:54

▸ **register**(`func`, `options`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

LLMProvider.register

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:55

▸ **register**(`name`, `options?`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `ToolFunc` \| `FuncItem` |
| `options?` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

LLMProvider.register

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:56

___

### run

▸ **run**(`name`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

LLMProvider.run

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:48

___

### runSync

▸ **runSync**(`name`, `params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

LLMProvider.runSync

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:49

___

### runWithPos

▸ **runWithPos**(`name`, `...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

LLMProvider.runWithPos

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:51

___

### runWithPosSync

▸ **runWithPosSync**(`name`, `...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

LLMProvider.runWithPosSync

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:52

___

### seal

▸ **seal**\<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Inherited from

LLMProvider.seal

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:216

___

### setPrototypeOf

▸ **setPrototypeOf**(`o`, `proto`): `any`

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object to change its prototype. |
| `proto` | ``null`` \| `object` | The value of the new prototype or null. |

#### Returns

`any`

#### Inherited from

LLMProvider.setPrototypeOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:337

___

### unregister

▸ **unregister**(`name`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

LLMProvider.unregister

#### Defined in

packages/ai-tool/dist/index-japi6bEq.d.ts:57

___

### values

▸ **values**\<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`T`[]

#### Inherited from

LLMProvider.values

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:24

▸ **values**(`o`): `any`[]

Returns an array of values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`any`[]

#### Inherited from

LLMProvider.values

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
