---
description: A built-in data store class for working with collection of entity objects and remote API.
---

# BsStore

::: lead
A built-in data store class for working with collection of entity objects and remote API.
:::


## Overview 

**Vue MDBootstrap** provides built-in data store class for working with collection 
of entity objects and remote API. **BsStore** is used to store collection of entity 
objects locally and your application is reponsible to manage them. Components like 
[BsCombobox](/components/inputs/combobox) and [BsListbox](/components/inputs/listbox) 
are examples of components that use **BsStore** for their data binding.

### Usage Example 

```ts
import { BsStore } from "vue-mdbootstrap";

const dsStore = new BsStore({
  idProperty: 'id',
  dataProperty: 'data',
  totalProperty: 'total', 
  pageSize: 15, 
  restProxy: { 
    browse: './api/users', 
    delete: { url: './api/users/{id}', method: 'delete' }, 
    save: { url: './api/users', method: 'post' }, 
    update: { url: './api/users', method: 'patch' } 
  }
});
```

## CSRF Token

If the RESTful backend needs CSRF token within the **POST**,**PATCH**, **PUT** or 
**DELETE** request, we can accomplish it with:

```ts
import { BsStore } from "vue-mdbootstrap";

const dsStore = new BsStore({
  idProperty: 'id',
  dataProperty: 'data',
  totalProperty: 'total', 
  pageSize: 15, 
  restProxy: { 
    browse: './api/users', 
    delete: { url: './api/users/{id}', method: 'delete' }, 
    save: { url: './api/users', method: 'post' }, 
    update: { url: './api/users', method: 'patch' } 
  },
  csrfConfig: {
    // do not change text: '{name}'
    url: './api/token/{name}',
    // 'token_name' is a keyword to identify the token. 
    // This keyword is used by the RESTful backend to create the CSRF token.
    tokenName: 'token_name', 
    dataField: 'value',
    // If 'suffix' is 'true' then the keyword will become: 'token_name-create', 'token_name-update', 'token_name-delete'
    // when perfoming HTTP request to save, update or delete record.
    suffix: false,
  }
});
```

## Filtering Data

### Filter dataset at creation time

***BsStore*** provides functionality to define filters at creation time. The filters 
we define here will be treated as default filters. See example below:

```ts
import { BsStore } from "vue-mdbootstrap";

const dsStore = new BsStore({
  idProperty: 'id',
  dataProperty: 'data',
  totalProperty: 'total', 
  pageSize: 15, 
  filters: [{ property: 'fullName', value: 'john', operator: 'contains' }],
  restProxy: { 
    browse: './api/users', 
    delete: { url: './api/users/{id}', method: 'delete' }, 
    save: { url: './api/users', method: 'post' }, 
    update: { url: './api/users', method: 'patch' } 
  }
});

// load the data
dsStore.load()
  .then(() => {
    console.info('datas: ', dsStore.dataItems);
  })
  .catch((error) => {
    console.warn(error);
  });
```

### Filter dataset on demands

***BsStore*** also provides functionality to filter dataset on demands. See example below:

```ts
import { BsStore } from "vue-mdbootstrap";

const dsStore = new BsStore({
  idProperty: 'id',
  dataProperty: 'data',
  totalProperty: 'total', 
  pageSize: 15, 
  restProxy: { 
    browse: './api/users', 
    delete: { url: './api/users/{id}', method: 'delete' }, 
    save: { url: './api/users', method: 'post' }, 
    update: { url: './api/users', method: 'patch' } 
  }
});

// apply filter to the dataset
dsStore.filters = [{ property: 'fullName', value: 'john', operator: 'contains' }];

// load the dataset
dsStore.load()
  .then(() => {
    console.info('datas: ', dsStore.dataItems);
  })
  .catch((error) => {
    console.warn(error);
  });
``` 

## Sorting Data

### Sort dataset at creation time

***BsStore*** provides functionality to define sort criterias at creation time. 
See example below:

```ts
import { BsStore } from "vue-mdbootstrap";

const dsStore = new BsStore({
  idProperty: 'id',
  dataProperty: 'data',
  totalProperty: 'total', 
  pageSize: 15, 
  sorts: [{ property: 'fullName', direction: 'asc' }],
  restProxy: { 
    browse: './api/users', 
    delete: { url: './api/users/{id}', method: 'delete' }, 
    save: { url: './api/users', method: 'post' }, 
    update: { url: './api/users', method: 'patch' } 
  }
});

// load the dataset
dsStore.load()
  .then(() => {
    console.info('datas: ', dsStore.dataItems);
  })
  .catch((error) => {
    console.warn(error);
  });
```

### Sort dataset on demands

***BsStore*** also provides functionality to sort dataset on demands. See example below:

```ts
import { BsStore } from "vue-mdbootstrap";

const dsStore = new BsStore({
  idProperty: 'id',
  dataProperty: 'data',
  totalProperty: 'total', 
  pageSize: 15, 
  restProxy: { 
    browse: './api/users', 
    delete: { url: './api/users/{id}', method: 'delete' }, 
    save: { url: './api/users', method: 'post' }, 
    update: { url: './api/users', method: 'patch' } 
  }
});

// define sorters criteria then load the dataset
dsStore.setSorters([{ property: 'fullName', direction: 'asc' }])
  .load()
  .then(() => {
    console.info('datas: ', dsStore.dataItems);
  })
  .catch((error) => {
    console.warn(error);
  });
```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Method" url="#api-reference">
<div class="doc-api pt-3">
<ul>
<li><div class="h5">destroy</div>

```ts
interface IBsStore {
  destroy(): void;
}
``` 
Cleaning up resources and dispose each property before destroying this object.
</li>
<li><div class="h5 mt-4">clear</div>

```ts
interface IBsStore {
  clear(): void;
}
``` 
Clear all dataset on local storage and reset data store state.

</li>
<li><div class="h5 mt-4">resetState</div>

```ts
interface IBsStore {
  resetState(): void;
}
``` 
Reset this data store state back to its initial states, like `loading`, etc.

</li>
<li><div class="h5 mt-4">addFilter</div>

```ts
interface IBsStore {
  addFilter(
    field: string,
    value: string | number | boolean,
    operator?: TFilterOperator,
    type?: string,
    logic?: TFilterLogic
  ): this;
}
``` 
Add a filter to the Store.

**Details**:
* `field`: The field name to which the filter will be applied.
* `value`: The filter value.
* `operator`: Filter operator to be used, valid values: `eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `in`, `notin`, `startwith`, `endwith`, `contains`, `fts`
* `type`: Optional, backend ORM custom data type.
* `logic`: Optional, logic to be used when mixing two or more filters.

</li>
<li><div class="h5 mt-4">createFilters</div>

```ts
interface IBsStore {
  createFilters(values: TFilterOption | TFilterOption[]): TFilterOption[];
}
``` 
Create an array of FilterOption criteria.

**Details**:
* `values`: An array of filter options configuration.

</li>
<li><div class="h5 mt-4">setFilters</div>

```ts
interface IBsStore {
  setFilters(newFilters: TFilterOption[] | TFilterOption, includeDefault?: boolean): this;
}
``` 
Replace old filters and apply new filters to the Store dataset.

**Details**:
* `newFilters`: The filters to apply.
* `includeDefault`: Include default filters or not.

</li>
<li><div class="h5 mt-4">setFilterLogic</div>

```ts
interface IBsStore {
  setFilterLogic(logic: TFilterLogic): this;
}
``` 
Define the filter logic to be used when filtering the Store’s dataset.

**Details**:
* `logic`: The filter logic, valid values: `AND`, `OR`.

</li>
<li><div class="h5 mt-4">find</div>

```ts
interface IBsStore {
  find(property: string, value: unknown, startIndex?: number): IBsModel | undefined;
}
``` 
Finds the first matching item in the local dataset by a specific field value.

**Details**:
* `property`: The field name to test.
* `value`: The value to match.
* `startIndex`: The index to start searching at.

</li>
<li><div class="h5 mt-4">findBy</div>

```ts
interface IBsStore {
  findBy(predicate: (value: IBsModel, index: number) => boolean): IBsModel | undefined;
}
``` 
Finds the first matching item in the local dataset by function's predicate.
If the predicate returns `true`, it is considered a match. Returns the item of the 
first element in the array that satisfies the provided testing function. Otherwise, 
`undefined` is returned.

**Details**:
* `predicate`: Function to execute on each value in the array.

</li>
<li><div class="h5 mt-4">findIndex</div>

```ts
interface IBsStore {
  findIndex(property: string, value: unknown, startIndex?: number): number;
}
``` 
Finds the index of the first matching Item in the local dataset by a specific field 
value. Returns the index of first match element, otherwise -1 is returned.

**Details**:
* `property`: The field name to test.
* `value`: The value to match.
* `startIndex`: The index to start searching at.

</li>
<li><div class="h5 mt-4">localFilter</div>

```ts
interface IBsStore {
  localFilter(): IBsModel[];
}
``` 
Filter the dataset locally and returns new array with all elements that pass the test.

</li>
<li><div class="h5 mt-4">localSort</div>

```ts
interface IBsStore {
  localSort(): IBsModel[];
}
``` 
Sorts the dataset locally and returns new sorted dataset.

</li>
<li><div class="h5 mt-4">isEmpty</div>

```ts
interface IBsStore {
  isEmpty(): boolean;
}
``` 
Check if the data in the local dataset is empty or not.

</li>
<li><div class="h5 mt-4">page</div>

```ts
interface IBsStore {
  page(value: number): this;
}
``` 
Sets the current active page.

**Details**:
* `value`: The new page number, based-1 index.

</li>
<li><div class="h5 mt-4">previousPage</div>

```ts
interface IBsStore {
  previousPage(): this;
}
``` 
Marks data Store to load the previous page.

</li>
<li><div class="h5 mt-4">nextPage</div>

```ts
interface IBsStore {
  nextPage(): this;
}
``` 
Marks data Store to load the next page.

</li>
<li><div class="h5 mt-4">setPageSize</div>

```ts
interface IBsStore {
  setPageSize(value: number): this;
}
``` 
Set the number of items within a page.

**Details**:
* `value`: Starting index position.

</li>
<li><div class="h5 mt-4">isCandidateForModel</div>

```ts
interface IBsStore {
  isCandidateForModel(item: TRecord): boolean;
}
``` 
Check if the given item is a data Model or not.

**Details**:
* `item`: The item to be checked.

</li>
<li><div class="h5 mt-4">createModel</div>

```ts
interface IBsStore {
  createModel(item: TRecord): IBsModel | BsModel;
}
``` 
Create new Model instance from the given object.

**Details**:
* `item`: Data to be transformed into a model instance.

</li>
<li><div class="h5 mt-4">createSorters</div>

```ts
interface IBsStore {
  createSorters(
    property: string | string[] | TSortOption | TSortOption[],
    direction?: TSortDirection,
    replace?: boolean
  ): TSortOption[];
}
``` 
Create an array of SortOption criteria.

**Details**:
* `property`: The field name to sort or sort method criterias.
* `direction`: The sort direction.
* `replace`: Replace existing sort criteria or not.

</li>
<li><div class="h5 mt-4">setSorters</div>

```ts
interface IBsStore {
  setSorters(sortOptions: TSortOption[] | TSortOption): this;
}
``` 
Set sorter's criteria collection.

**Details**:
* `sortOptions`: One or more sorting method criteria(s).

</li>
<li><div class="h5 mt-4">sort</div>

```ts
interface IBsStore {
  sort(
    options: string | string[] | TSortOption | TSortOption[],
    direction?: TSortDirection
  ): Promise<IBsModel[]>;
}
``` 
Sorts the internal dataset with the given criteria and returns the reference of 
the internal dataset. This method depends on `remoteSort` property.

**Example**:
```ts
// sort by a single field
const results = await myStore.sort('myField', 'asc');

// sorting by multiple fields
const results = await myStore.sort([
  {property: 'age', direction: 'desc'},
  {property: 'name', direction: 'asc'}
]);
```

**Details**:
* `options`: The field name to sort or sort method criterias.
* `direction`: The sort direction.

</li>
<li><div class="h5 mt-4">queryParams</div>

```ts
interface IBsStore {
  queryParams(): TQueryParameter;
}
``` 
Get current query parameter's configuration.

</li>
<li><div class="h5 mt-4">load</div>

```ts
interface IBsStore {
  load(data?: unknown): Promise<IBsModel[] | AxiosResponse>;
}
``` 
Load data from the remote service or assign new data directly.
The internal dataset will be replaced by the loaded data.

**Details**:
* `data`: The new data to replace the internal dataset.

</li>
<li><div class="h5 mt-4">append</div>

```ts
interface IBsStore {
  append(item: TRecord): void;
}
``` 
Append an item to the internal dataset and also save the item as a new record to 
the remote service whenever possible. The item can be saved to the remote service, 
if `restUrl` property contains a `save` key.

**Details**:
* `item`: Data to append to the internal dataset.

</li>
<li><div class="h5 mt-4">assignData</div>

```ts
interface IBsStore {
  assignData(data: unknown, silent?: boolean): void;
}
``` 
Replace internal dataset with new data. The proses only affected the internal dataset
and nothing is sent to the remote service.

**Details**:
* `data`: The new data to be assigned.
* `silent`: Append the data silently and don't trigger data transformer.

</li>
<li><div class="h5 mt-4">delete</div>

```ts
interface IBsStore {
  delete<T extends BsModel>(item: T): Promise<AxiosResponse | TMessageResponse>;
}
``` 
Delete specific item from internal dataset as well as from remote service whenever 
possible. The item can be deleted from the remote service, if `restUrl` property 
contains a `delete` key.

**Details**:
* `item`: The new data to be assigned.

</li>
<li><div class="h5 mt-4">deletes</div>

```ts
interface IBsStore {
  deletes<T extends BsModel>(items: T[]): Promise<TMessageResponse>;
}
``` 
Delete specific items from internal dataset as well as from remote service whenever 
possible. The items can be deleted from the remote service, if `restUrl` property 
contains a `delete` key.

**Details**:
* `items`: Collection of data Model instances to be removed.

</li>
<li><div class="h5 mt-4">remove</div>

```ts
interface IBsStore {
  remove<T extends BsModel>(items: T[] | T): void;
}
``` 
Removes the specified item(s) from the internal dataset.

**Details**:
* `item`: Model instance or array of model instances to be removed.

</li>
<li><div class="h5 mt-4">removeAt</div>

```ts
interface IBsStore {
  removeAt(index: number, count?: number): void;
}
``` 
Removes the model instance(s) at the given index from the internal dataset.

**Details**:
* `index`: Starting index position.
* `count`: Number of items to delete.

</li>
<li><div class="h5 mt-4">fetch</div>

```ts
interface IBsStore {
  fetch(id: string | number): Promise<AxiosResponse>;
}
``` 
Fetch single item from the remote service via REST API and replace internal dataset 
with the one comes from the remote service.

**Details**:
* `id`: The item ID to fetch.

</li>
<li><div class="h5 mt-4">aggregateAvg</div>

```ts
interface IBsStore {
  aggregateAvg(field: string): number;
}
``` 
Calculate means or average value based on the given field.

**Details**:
* `field`: The field name of the dataset to calculate.

</li>
<li><div class="h5 mt-4">aggregateCountBy</div>

```ts
interface IBsStore {
  aggregateCountBy(field: string, value: unknown): number;
}
``` 
Count number of items in the internal dataset specified by the given criteria.

**Details**:
* `field`: The grouping field name criteria.
* `value`: The grouping value criteria.

</li>
<li><div class="h5 mt-4">aggregateSum</div>

```ts
interface IBsStore {
  aggregateSum(field: string): number;
}
``` 
Calculate the SUM or total value based on the given field.

**Details**:
* `field`: The field name to be used when calculating value.

</li>
<li><div class="h5 mt-4">addListener</div>

```ts
interface IBsStore {
  addListener<T>(event: string, fn: ListenerFn<T>): void;
}
``` 
Register event listener.

**Details**:
* `event`: The event name, valid values are: `error`, and `loaded`.
* `fn`: The event callback function.

</li>
<li><div class="h5 mt-4">onError</div>

```ts
interface IBsStore {
  onError(fn: ErrorCallbackFn): void;
}
``` 
Shortcut function to register `error` event listener.

**Details**:
* `fn`: Callback function when error occured.

</li>
<li><div class="h5 mt-4">onLoaded</div>

```ts
interface IBsStore {
  onLoaded(fn: LoadedCallbackFn): void;
}
``` 
Shortcut function to register `loaded` event listener.

**Details**:
* `fn`: Callback function when data is successfully loaded to this store dataset.

</li>
</ul>
</div>
  </BsTab>
  <BsTab label="Property" url="#api-reference">
<div class="doc-table-responsive doc-table-3cols">

| Name   | Type | Description |
|--------|---------------|-------------|
| storeState | `Readonly<TDataStoreState>` | Readonly reactive data store state. |
| loading  | `Boolean` | Readonly data store state, whether it is still loading data or not. |
| updating | `Boolean` | Readonly data store state, whether it is still in the process of saving/updating data to the remote service or not. |
| deleting | `Boolean` | Readonly data store state, whether it is still in the process of deleting data from the remote service or not. |
| hasError | `Boolean` | Readonly data store state, whether there was an error when loading/saving/deleting data or not. |
| proxy    | `IRestAdapter`/`undefined` | Returns REST proxy adapter which is used to work with remote service. |
| adapterInstance | `AxiosInstance`/`undefined` | Returns the axios plugin adapter. |
| restUrl <Badge>Get/Set</Badge> | `TRestConfig` | REST URL configuration. |
| currentPage | `Number` | Returns active page number (base-1 index). |
| pageSize <Badge>Get/Set</Badge> | `Number` | Number of items within a page. |
| length     | `Number`  | Returns the number of items on the active page. |
| totalCount | `Number`  | Returns total number of items in the Store's dataset. |
| totalPages | `Number`  | Returns total number of pages. |
| defaultFilters <Badge>Get/Set</Badge> | `TFilterOption[]`  | Default filters to be used. |
| filters <Badge>Get/Set</Badge> | `TFilterOption[]`  | Collection of filters to be used. |
| sorters <Badge>Get/Set</Badge> | `TSortOption[]`  | Collection of sorter objects to be used when sorting the dataset. |
| dataItems | `IBsModel[]`  | Returns dataset from the active page. <div class="mt-3">If a filter or sorter has been applied before, then the returned dataset will also be affected by it.</div> |
| remoteFilter <Badge>Get/Set</Badge> | `Boolean`  | Enable/disable server filtering or check if the data Store is using server filtering or local filtering. |
| remotePaging <Badge>Get/Set</Badge> | `Boolean`  | Enable/disable server paging or check if the data Store is using server paging or local paging. |
| remoteSort <Badge>Get/Set</Badge> | `Boolean`  | Enable/disable server sort or check if the data Store is using server sort or local sort. |

</div>
  </BsTab>  
  <BsTab label="Constructor" url="#api-reference">
    <div class="pt-3 px-3 px-lg-0">

```ts
class BsStore {
  constructor(config: TDataStoreConfig, adapter?: AxiosInstance | null);
}

```  
**Details**:
-  `config`: The configuration options.
-  `adapter`: Axios adapter instance. <BsBadge color="info">Optional</BsBadge>

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);

</script> 
