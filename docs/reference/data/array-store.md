---
description: A built-in data store class for working with collection of entity objects locally.
---

# BsArrayStore

::: lead
A built-in data store class for working with collection of entity objects locally.
:::


## Overview 

**Vue MDBootstrap** provides built-in data store class for working with collection 
of entity objects locally. **BsArrayStore** is used to store collection of entity 
objects locally and your application is reponsible to manage them. Components like 
[BsCombobox](/components/inputs/combobox) and [BsListbox](/components/inputs/listbox) 
are examples of components that use **BsStore** for their data binding. 

### Usage Example 

```ts
import { BsArrayStore } from "vue-mdbootstrap";

const myStore = new BsArrayStore(
  [
    {id: 1, name: 'Sandra Adams'},
    {id: 2, name: 'Ali Connors'},
    {id: 3, name: 'Trevor Hansen'},
    {id: 4, name: 'Tucker Smith'},
    {id: 5, name: 'Britta Holt'},
    {id: 6, name: 'Jane Smith'},
    {id: 7, name: 'John Smith'},
    {id: 8, name: 'Sandra Williams'}
  ], {
    idProperty: 'id'
  }
);

``` 

## Filtering Data

***BsArrayStore*** provides functionality to filter dataset on demands. See example below:

```ts
import { BsArrayStore } from "vue-mdbootstrap";

const myStore = new BsArrayStore(
  [{...}, {...}, {...}],
  { idProperty: 'id' }
);

// apply filter to the dataset
myStore.filters = [{ property: 'name', value: 'john', operator: 'startwith' }];

// do something
console.info('datas: ', myStore.dataItems);

```


## Sorting Data

***BsArrayStore*** provides functionality to sort dataset on demands. See example below:

```ts
import { BsArrayStore } from "vue-mdbootstrap";

const myStore = new BsArrayStore(
  [{...}, {...}, {...}],
  { idProperty: 'id' }
);

// sorts by a single field
const results = myStore.sort('name', 'asc');

// sorts by multiple fields
const results = myStore.sort([
  {property: 'age', direction: 'desc'},
  {property: 'name', direction: 'asc'}
]);

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Method" url="#api-reference">
<div class="doc-api pt-3">
<ul>
<li><div class="h5">destroy</div>

```ts
interface IArrayStore {
  destroy(): void;
}
``` 
Cleaning up resources and dispose each property before destroying this object.
</li>
<li><div class="h5 mt-4">clear</div>

```ts
interface IArrayStore {
  clear(): void;
}
``` 
Clear all dataset on local storage and reset data store state.

</li>
<li><div class="h5 mt-4">resetState</div>

```ts
interface IArrayStore {
  resetState(): void;
}
``` 
Reset this data store state back to its initial states, like `loading`, etc.

</li>
<li><div class="h5 mt-4">addFilter</div>

```ts
interface IArrayStore {
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
interface IArrayStore {
  createFilters(values: TFilterOption | TFilterOption[]): TFilterOption[];
}
``` 
Create an array of FilterOption criteria.

**Details**:
* `values`: An array of filter options configuration.

</li>
<li><div class="h5 mt-4">setFilters</div>

```ts
interface IArrayStore {
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
interface IArrayStore {
  setFilterLogic(logic: TFilterLogic): this;
}
``` 
Define the filter logic to be used when filtering the Store’s dataset.

**Details**:
* `logic`: The filter logic, valid values: `AND`, `OR`.

</li>
<li><div class="h5 mt-4">find</div>

```ts
interface IArrayStore {
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
interface IArrayStore {
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
interface IArrayStore {
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
<li><div class="h5 mt-4">isEmpty</div>

```ts
interface IArrayStore {
  isEmpty(): boolean;
}
``` 
Check if the data in the local dataset is empty or not.

</li>
<li><div class="h5 mt-4">page</div>

```ts
interface IArrayStore {
  page(value: number): this;
}
``` 
Sets the current active page.

**Details**:
* `value`: The new page number, based-1 index.

</li>
<li><div class="h5 mt-4">previousPage</div>

```ts
interface IArrayStore {
  previousPage(): this;
}
``` 
Marks data Store to load the previous page.

</li>
<li><div class="h5 mt-4">nextPage</div>

```ts
interface IArrayStore {
  nextPage(): this;
}
``` 
Marks data Store to load the next page.

</li>
<li><div class="h5 mt-4">setPageSize</div>

```ts
interface IArrayStore {
  setPageSize(value: number): this;
}
``` 
Set the number of items within a page.

**Details**:
* `value`: Starting index position.

</li>
<li><div class="h5 mt-4">isCandidateForModel</div>

```ts
interface IArrayStore {
  isCandidateForModel(item: TRecord): boolean;
}
``` 
Check if the given item is a data Model or not.

**Details**:
* `item`: The item to be checked.

</li>
<li><div class="h5 mt-4">createModel</div>

```ts
interface IArrayStore {
  createModel(item: TRecord): IBsModel | BsModel;
}
``` 
Create new Model instance from the given object.

**Details**:
* `item`: Data to be transformed into a model instance.

</li>
<li><div class="h5 mt-4">createSorters</div>

```ts
interface IArrayStore {
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
interface IArrayStore {
  setSorters(sortOptions: TSortOption[] | TSortOption): this;
}
``` 
Set sorter's criteria collection.

**Details**:
* `sortOptions`: One or more sorting method criteria(s).

</li>
<li><div class="h5 mt-4">sort</div>

```ts
interface IArrayStore {
  sort(
    options: string | string[] | TSortOption | TSortOption[],
    direction?: TSortDirection
  ): IBsModel[];
}
``` 
Sorts the internal dataset with the given criteria and returns the reference of 
the internal dataset.

**Example**:
```ts
// sort by a single field
const results = myStore.sort('myField', 'asc');

// sorting by multiple fields
const results = myStore.sort([
  {property: 'age', direction: 'desc'},
  {property: 'name', direction: 'asc'}
]);
```

**Details**:
* `options`: The field name to sort or sort method criterias.
* `direction`: The sort direction.

</li>
<li><div class="h5 mt-4">load</div>

```ts
interface IArrayStore {
  load(data?: unknown): Promise<IBsModel[] | AxiosResponse>;
}
``` 
Load and replace internal dataset with the given data.

**Details**:
* `data`: The new data to replace the internal dataset.

</li>
<li><div class="h5 mt-4">append</div>

```ts
interface IArrayStore {
  append(item: TRecord): void;
}
``` 
Append an item to the internal dataset and sorted if needed.

**Details**:
* `item`: Data to append to the internal dataset.

</li>
<li><div class="h5 mt-4">assignData</div>

```ts
interface IArrayStore {
  assignData(data: unknown, silent?: boolean): void;
}
``` 
Replace internal dataset with new data.

**Details**:
* `data`: The new data to be assigned.
* `silent`: Append the data silently and don't trigger data transformer.

</li>
<li><div class="h5 mt-4">remove</div>

```ts
interface IArrayStore {
  remove<T extends BsModel>(items: T[] | T): void;
}
``` 
Removes the specified item(s) from the internal dataset.

**Details**:
* `item`: Model instance or array of model instances to be removed.

</li>
<li><div class="h5 mt-4">removeAt</div>

```ts
interface IArrayStore {
  removeAt(index: number, count?: number): void;
}
``` 
Removes the model instance(s) at the given index from the internal dataset.

**Details**:
* `index`: Starting index position.
* `count`: Number of items to delete.

</li>
<li><div class="h5 mt-4">aggregateAvg</div>

```ts
interface IArrayStore {
  aggregateAvg(field: string): number;
}
``` 
Calculate means or average value based on the given field.

**Details**:
* `field`: The field name of the dataset to calculate.

</li>
<li><div class="h5 mt-4">aggregateCountBy</div>

```ts
interface IArrayStore {
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
interface IArrayStore {
  aggregateSum(field: string): number;
}
``` 
Calculate the SUM or total value based on the given field.

**Details**:
* `field`: The field name to be used when calculating value.

</li>
<li><div class="h5 mt-4">addListener</div>

```ts
interface IArrayStore {
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
interface IArrayStore {
  onError(fn: ErrorCallbackFn): void;
}
``` 
Shortcut function to register `error` event listener.

**Details**:
* `fn`: Callback function when error occured.

</li>
<li><div class="h5 mt-4">onLoaded</div>

```ts
interface IArrayStore {
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
| currentPage | `Number` | Returns active page number (base-1 index). |
| pageSize <Badge>Get/Set</Badge> | `Number` | Number of items within a page. |
| length     | `Number`  | Returns the number of items on the active page. |
| totalCount | `Number`  | Returns total number of items in the Store's dataset. |
| totalPages | `Number`  | Returns total number of pages. |
| filters <Badge>Get/Set</Badge> | `TFilterOption[]`  | Collection of filters to be used. |
| sorters <Badge>Get/Set</Badge> | `TSortOption[]`  | Collection of sorter objects to be used when sorting the dataset. |
| dataItems | `IBsModel[]`  | Returns dataset from the active page. <div class="mt-3">If a filter or sorter has been applied before, then the returned dataset will also be affected by it.</div> |

</div>
  </BsTab>  
  <BsTab label="Constructor" url="#api-reference">
    <div class="pt-3 px-3 px-lg-0">

```ts
interface IArrayStore {
  constructor(data: unknown[], config?: TDataStoreConfig);
}

```  
**Details**:
-  `data`: Collection of records to be assigned.
-  `config`: The configuration options. <BsBadge color="info">Optional</BsBadge>

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);

</script> 
