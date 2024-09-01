[@isdk/ai-tool-llm-llamacpp](../README.md) / [Exports](../modules.md) / LlamaCppProvider

# Class: LlamaCppProvider

## Hierarchy

- `CancelableAbility`

- `LLMProvider`

  ↳ **`LlamaCppProvider`**

## Table of contents

### Constructors

- [constructor](LlamaCppProvider.md#constructor)

### Properties

- [$attributes](LlamaCppProvider.md#$attributes)
- [\_\_task\_aborter](LlamaCppProvider.md#__task_aborter)
- [\_\_task\_semaphore](LlamaCppProvider.md#__task_semaphore)
- [\_asyncFeatures](LlamaCppProvider.md#_asyncfeatures)
- [\_maxTaskConcurrency](LlamaCppProvider.md#_maxtaskconcurrency)
- [apiKey](LlamaCppProvider.md#apikey)
- [apiUrl](LlamaCppProvider.md#apiurl)
- [cleanMultiTaskAborter](LlamaCppProvider.md#cleanmultitaskaborter)
- [constructor](LlamaCppProvider.md#constructor-1)
- [defaultOptions](LlamaCppProvider.md#defaultoptions)
- [depends](LlamaCppProvider.md#depends)
- [description](LlamaCppProvider.md#description)
- [generateAsyncTaskId](LlamaCppProvider.md#generateasynctaskid)
- [isApi](LlamaCppProvider.md#isapi)
- [name](LlamaCppProvider.md#name)
- [nonExported1stChar](LlamaCppProvider.md#nonexported1stchar)
- [params](LlamaCppProvider.md#params)
- [prior](LlamaCppProvider.md#prior)
- [result](LlamaCppProvider.md#result)
- [rule](LlamaCppProvider.md#rule)
- [scope](LlamaCppProvider.md#scope)
- [setup](LlamaCppProvider.md#setup)
- [stream](LlamaCppProvider.md#stream)
- [supports](LlamaCppProvider.md#supports)
- [tags](LlamaCppProvider.md#tags)
- [current](LlamaCppProvider.md#current)
- [dataPath](LlamaCppProvider.md#datapath)
- [items](LlamaCppProvider.md#items)

### Accessors

- [maxTaskConcurrency](LlamaCppProvider.md#maxtaskconcurrency)
- [semaphore](LlamaCppProvider.md#semaphore)

### Methods

- [$cleanMultiTaskAborter](LlamaCppProvider.md#$cleanmultitaskaborter)
- [$generateAsyncTaskId](LlamaCppProvider.md#$generateasynctaskid)
- [\_cleanMultiTaskAborter](LlamaCppProvider.md#_cleanmultitaskaborter)
- [\_generateAsyncTaskId](LlamaCppProvider.md#_generateasynctaskid)
- [abort](LlamaCppProvider.md#abort)
- [addModel](LlamaCppProvider.md#addmodel)
- [arr2ObjParams](LlamaCppProvider.md#arr2objparams)
- [assign](LlamaCppProvider.md#assign)
- [assignProperty](LlamaCppProvider.md#assignproperty)
- [assignPropertyTo](LlamaCppProvider.md#assignpropertyto)
- [assignTo](LlamaCppProvider.md#assignto)
- [cleanTaskAborter](LlamaCppProvider.md#cleantaskaborter)
- [clone](LlamaCppProvider.md#clone)
- [cloneTo](LlamaCppProvider.md#cloneto)
- [createAborter](LlamaCppProvider.md#createaborter)
- [createTaskPromise](LlamaCppProvider.md#createtaskpromise)
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
- [getRunningTask](LlamaCppProvider.md#getrunningtask)
- [getRunningTaskCount](LlamaCppProvider.md#getrunningtaskcount)
- [hasAsyncFeature](LlamaCppProvider.md#hasasyncfeature)
- [hasOwnProperty](LlamaCppProvider.md#hasownproperty)
- [initialize](LlamaCppProvider.md#initialize)
- [isAborted](LlamaCppProvider.md#isaborted)
- [isModelNameMatched](LlamaCppProvider.md#ismodelnamematched)
- [isPrototypeOf](LlamaCppProvider.md#isprototypeof)
- [isSame](LlamaCppProvider.md#issame)
- [isStream](LlamaCppProvider.md#isstream)
- [listModels](LlamaCppProvider.md#listmodels)
- [listProviders](LlamaCppProvider.md#listproviders)
- [loadModel](LlamaCppProvider.md#loadmodel)
- [mergeTo](LlamaCppProvider.md#mergeto)
- [obj2ArrParams](LlamaCppProvider.md#obj2arrparams)
- [processModelOptions](LlamaCppProvider.md#processmodeloptions)
- [propertyIsEnumerable](LlamaCppProvider.md#propertyisenumerable)
- [register](LlamaCppProvider.md#register)
- [run](LlamaCppProvider.md#run)
- [runAs](LlamaCppProvider.md#runas)
- [runAsSync](LlamaCppProvider.md#runassync)
- [runAsyncCancelableTask](LlamaCppProvider.md#runasynccancelabletask)
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
- [hasAsyncFeature](LlamaCppProvider.md#hasasyncfeature-1)
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

CancelableAbility.constructor

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:80

## Properties

### $attributes

• **$attributes**: `Properties`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/advance.d.ts:5

___

### \_\_task\_aborter

• **\_\_task\_aborter**: `undefined` \| `TaskAbortController` \| `TaskAbortControllers`

#### Inherited from

CancelableAbility.\_\_task\_aborter

#### Defined in

packages/ai-tool/dist/index.d.ts:210

___

### \_\_task\_semaphore

• **\_\_task\_semaphore**: `undefined` \| `Semaphore`

#### Inherited from

CancelableAbility.\_\_task\_semaphore

#### Defined in

packages/ai-tool/dist/index.d.ts:211

___

### \_asyncFeatures

• `Optional` **\_asyncFeatures**: `number`

#### Inherited from

CancelableAbility.\_asyncFeatures

#### Defined in

packages/ai-tool/dist/index.d.ts:203

___

### \_maxTaskConcurrency

• **\_maxTaskConcurrency**: `undefined` \| `number`

#### Inherited from

CancelableAbility.\_maxTaskConcurrency

#### Defined in

packages/ai-tool/dist/index.d.ts:204

___

### apiKey

• `Optional` **apiKey**: `string`

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:153

___

### apiUrl

• `Optional` **apiUrl**: `string`

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:154

___

### cleanMultiTaskAborter

• **cleanMultiTaskAborter**: (`id`: `AsyncTaskId`, `aborters`: `TaskAbortControllers`) => `void`

#### Type declaration

▸ (`id`, `aborters`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `AsyncTaskId` |
| `aborters` | `TaskAbortControllers` |

##### Returns

`void`

#### Inherited from

CancelableAbility.cleanMultiTaskAborter

#### Defined in

packages/ai-tool/dist/index.d.ts:209

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:74

___

### depends

• **depends**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event-bus` | `EventToolFunc` |

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:326

___

### description

• **description**: `string`

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:307

___

### generateAsyncTaskId

• **generateAsyncTaskId**: (`taskId?`: `AsyncTaskId`, `aborters?`: `TaskAbortControllers`) => `AsyncTaskId`

#### Type declaration

▸ (`taskId?`, `aborters?`): `AsyncTaskId`

##### Parameters

| Name | Type |
| :------ | :------ |
| `taskId?` | `AsyncTaskId` |
| `aborters?` | `TaskAbortControllers` |

##### Returns

`AsyncTaskId`

#### Inherited from

CancelableAbility.generateAsyncTaskId

#### Defined in

packages/ai-tool/dist/index.d.ts:208

___

### isApi

• `Optional` **isApi**: `boolean`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:42

___

### name

• `Optional` **name**: `string`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:36

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:78

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

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:308

___

### prior

• **prior**: `number`

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:151

___

### result

• **result**: `string`

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:325

___

### rule

• **rule**: `RegExp`

#### Defined in

[packages/ai-tool-llm-llamacpp/src/llamacpp.ts:41](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/06ab54f6b02255f9775640093ce77c0a5eb361a3/src/llamacpp.ts#L41)

___

### scope

• `Optional` **scope**: `any`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:39

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

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:41

___

### stream

• `Optional` **stream**: `boolean`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:43

___

### supports

• **supports**: `AIModelType` \| `AIModelType`[]

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:152

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:40

___

### current

▪ `Static` `Optional` **current**: `string`

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:303

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:64

___

### items

▪ `Static` **items**: `Object`

#### Index signature

▪ [name: `string`]: `LLMProvider`

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:304

## Accessors

### maxTaskConcurrency

• `get` **maxTaskConcurrency**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

CancelableAbility.maxTaskConcurrency

#### Defined in

packages/ai-tool/dist/index.d.ts:212

___

### semaphore

• `get` **semaphore**(): `undefined` \| `Semaphore`

#### Returns

`undefined` \| `Semaphore`

#### Inherited from

CancelableAbility.semaphore

#### Defined in

packages/ai-tool/dist/index.d.ts:213

## Methods

### $cleanMultiTaskAborter

▸ **$cleanMultiTaskAborter**(`id`, `aborters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `AsyncTaskId` |
| `aborters` | `TaskAbortControllers` |

#### Returns

`void`

#### Inherited from

CancelableAbility.$cleanMultiTaskAborter

#### Defined in

packages/ai-tool/dist/index.d.ts:220

___

### $generateAsyncTaskId

▸ **$generateAsyncTaskId**(`taskId?`, `aborters?`): `undefined` \| `AsyncTaskId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId?` | `AsyncTaskId` |
| `aborters?` | `TaskAbortControllers` |

#### Returns

`undefined` \| `AsyncTaskId`

#### Inherited from

CancelableAbility.$generateAsyncTaskId

#### Defined in

packages/ai-tool/dist/index.d.ts:218

___

### \_cleanMultiTaskAborter

▸ **_cleanMultiTaskAborter**(`id`, `aborters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `AsyncTaskId` |
| `aborters` | `TaskAbortControllers` |

#### Returns

`void`

#### Inherited from

CancelableAbility.\_cleanMultiTaskAborter

#### Defined in

packages/ai-tool/dist/index.d.ts:222

___

### \_generateAsyncTaskId

▸ **_generateAsyncTaskId**(`taskId?`, `aborters?`): `AsyncTaskId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId?` | `AsyncTaskId` |
| `aborters?` | `TaskAbortControllers` |

#### Returns

`AsyncTaskId`

#### Inherited from

CancelableAbility.\_generateAsyncTaskId

#### Defined in

packages/ai-tool/dist/index.d.ts:217

___

### abort

▸ **abort**(`reason?`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |
| `data?` | `any` |

#### Returns

`void`

#### Inherited from

CancelableAbility.abort

#### Defined in

packages/ai-tool/dist/index.d.ts:231

___

### addModel

▸ **addModel**(`modelName`, `model`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |
| `model` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:299

___

### arr2ObjParams

▸ **arr2ObjParams**(`params`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`any`[]

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:83

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:106

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:117

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:131

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:191

___

### cleanTaskAborter

▸ **cleanTaskAborter**(`aborter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aborter` | `TaskAbortController` |

#### Returns

`void`

#### Inherited from

CancelableAbility.cleanTaskAborter

#### Defined in

packages/ai-tool/dist/index.d.ts:221

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:155

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:148

___

### createAborter

▸ **createAborter**(`params?`, `taskId?`, `raiseError?`): `TaskAbortController`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |
| `taskId?` | `AsyncTaskId` |
| `raiseError?` | `boolean` |

#### Returns

`TaskAbortController`

#### Inherited from

CancelableAbility.createAborter

#### Defined in

packages/ai-tool/dist/index.d.ts:219

___

### createTaskPromise

▸ **createTaskPromise**\<`Output`\>(`runTask`, `params`, `options?`): `TaskPromise`\<`Output`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `runTask` | (`params`: `Record`\<`string`, `any`\>, `aborter`: `TaskAbortController`) => `Promise`\<`Output`\> |
| `params` | `Record`\<`string`, `any`\> |
| `options?` | `Object` |
| `options.raiseError?` | `boolean` |
| `options.taskId?` | `AsyncTaskId` |

#### Returns

`TaskPromise`\<`Output`\>

#### Inherited from

CancelableAbility.createTaskPromise

#### Defined in

packages/ai-tool/dist/index.d.ts:223

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:89

___

### deleteModel

▸ **deleteModel**(`modelName`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:300

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:173

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

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:347

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

#### Defined in

[packages/ai-tool-llm-llamacpp/src/llamacpp.ts:140](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/06ab54f6b02255f9775640093ce77c0a5eb361a3/src/llamacpp.ts#L140)

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

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:343

___

### getCurrentProvider

▸ **getCurrentProvider**(): `undefined` \| `LLMProvider`

#### Returns

`undefined` \| `LLMProvider`

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:340

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

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:354

___

### getFunc

▸ **getFunc**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:89

___

### getFuncWithPos

▸ **getFuncWithPos**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:94

___

### getModelInfo

▸ **getModelInfo**(`modelName?`): `Promise`\<`AIModelParams`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName?` | `string` |

#### Returns

`Promise`\<`AIModelParams`\>

#### Defined in

[packages/ai-tool-llm-llamacpp/src/llamacpp.ts:214](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/06ab54f6b02255f9775640093ce77c0a5eb361a3/src/llamacpp.ts#L214)

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:98

___

### getRunningTask

▸ **getRunningTask**(`taskId?`): `undefined` \| `TaskAbortController`

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId?` | `AsyncTaskId` |

#### Returns

`undefined` \| `TaskAbortController`

#### Inherited from

CancelableAbility.getRunningTask

#### Defined in

packages/ai-tool/dist/index.d.ts:215

___

### getRunningTaskCount

▸ **getRunningTaskCount**(): `number`

#### Returns

`number`

#### Inherited from

CancelableAbility.getRunningTaskCount

#### Defined in

packages/ai-tool/dist/index.d.ts:216

___

### hasAsyncFeature

▸ **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `AsyncFeatureBits` |

#### Returns

`boolean`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:95

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:139

___

### isAborted

▸ **isAborted**(`taskId?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId?` | `AsyncTaskId` |

#### Returns

`boolean`

#### Inherited from

CancelableAbility.isAborted

#### Defined in

packages/ai-tool/dist/index.d.ts:214

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

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:331

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:200

___

### isStream

▸ **isStream**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ServerFuncParams` |

#### Returns

`any`

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:332

___

### listModels

▸ **listModels**(): `Promise`\<`undefined` \| `string`[]\>

#### Returns

`Promise`\<`undefined` \| `string`[]\>

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:297

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

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:334

___

### loadModel

▸ **loadModel**(`model`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`LlamaLoadModelOptions`](../interfaces/LlamaLoadModelOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool-llm-llamacpp/src/llamacpp.ts:209](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/06ab54f6b02255f9775640093ce77c0a5eb361a3/src/llamacpp.ts#L209)

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:164

___

### obj2ArrParams

▸ **obj2ArrParams**(`params?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`[]

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:84

___

### processModelOptions

▸ **processModelOptions**(`model`, `value`, `options`): `Promise`\<`AIOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `string` |
| `value` | `any` |
| `options` | `AIOptions` |

#### Returns

`Promise`\<`AIOptions`\>

#### Defined in

[packages/ai-tool-llm-llamacpp/src/llamacpp.ts:43](https://github.com/isdk/ai-tool-llm-llamacpp.js/blob/06ab54f6b02255f9775640093ce77c0a5eb361a3/src/llamacpp.ts#L43)

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### register

▸ **register**(): `boolean` \| `ToolFunc`

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:81

___

### run

▸ **run**(`params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:86

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

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:87

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

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:88

___

### runAsyncCancelableTask

▸ **runAsyncCancelableTask**\<`Output`\>(`params`, `runTask`, `options?`): `TaskPromise`\<`Output`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `undefined` \| `Record`\<`string`, `any`\> |
| `runTask` | (`params`: `Record`\<`string`, `any`\>, `aborter`: `TaskAbortController`) => `Promise`\<`Output`\> |
| `options?` | `Object` |
| `options.raiseError?` | `boolean` |
| `options.taskId?` | `AsyncTaskId` |

#### Returns

`TaskPromise`\<`Output`\>

#### Inherited from

CancelableAbility.runAsyncCancelableTask

#### Defined in

packages/ai-tool/dist/index.d.ts:227

___

### runSync

▸ **runSync**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:85

___

### runWithPos

▸ **runWithPos**(`...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:92

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

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:93

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

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:91

___

### runWithPosSync

▸ **runWithPosSync**(`...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:90

___

### setCurrentProvider

▸ **setCurrentProvider**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:341

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:82

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

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:298

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/advance.d.ts:11

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

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:65

___

### getAllByTag

▸ **getAllByTag**(`tagName`): `ToolFunc`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`ToolFunc`[]

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:68

___

### getByModel

▸ **getByModel**(`modelName?`): `undefined` \| `LLMProvider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName?` | `string` |

#### Returns

`undefined` \| `LLMProvider`

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:329

___

### getByTag

▸ **getByTag**(`tagName`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:67

___

### getCurrentProvider

▸ **getCurrentProvider**(): `undefined` \| `LLMProvider`

#### Returns

`undefined` \| `LLMProvider`

#### Defined in

packages/ai-tool-llm/dist/index.d.ts:330

___

### getFunc

▸ **getFunc**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:72

___

### getFuncWithPos

▸ **getFuncWithPos**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:75

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/advance.d.ts:10

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:167

___

### hasAsyncFeature

▸ **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `AsyncFeatureBits` |

#### Returns

`boolean`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:69

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): `Funcs`

#### Returns

`Funcs`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:66

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

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:76

▸ **register**(`func`, `options`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:77

▸ **register**(`name`, `options?`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `ToolFunc` \| `FuncItem` |
| `options?` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:78

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

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:70

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

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:71

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

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:73

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

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:74

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

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:79

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
