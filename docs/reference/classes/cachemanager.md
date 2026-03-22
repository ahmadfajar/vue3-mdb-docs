---
outline: [2, 3] 
description: A singleton instance that caches data objects in the sessionStorage if available, otherwise memory is used.
---

# CacheManager

::: lead
A singleton instance that caches data objects in the [session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) 
if available, otherwise memory is used. 
:::

## Properties

### size 

Returns an integer representing the number of items stored in the cache.


## Methods

<div class="doc-api">

### clear

```ts
class CacheManager {
  static clear(): void; 
}

```

Remove all items in the cache storage. 


### deleteItem {#delete-item}

```ts
class CacheManager {
  static deleteItem(key: string): void; 
}

```

Remove an item from the cache storage by its key if exists.

**Details**:
* `key`: The key to delete


### deleteItems {#delete-items}

```ts
class CacheManager {
  static deleteItems(keys: string[]): void; 
}

```

Remove multiple items from the cache storage.

**Details**:
* `keys`: The keys to delete


### getItem {#get-item}

```ts
class CacheManager {
  static getItem(key: string): ICacheItem | undefined; 
}

```

Returns the cached item that represents the specified key.

**Details**:
* `key`: The key to be used to return the corresponding cached item


### getItems {#get-items}

```ts
class CacheManager {
  static getItems(keys: string[]): ICacheItem[]; 
}

```

Get multiple items from the cache storage and each of them is representing a cached item.

**Details**:
* `keys`: An indexed array of keys to be used to return the corresponding cached items


### hasItem {#has-item}

```ts
class CacheManager {
  static hasItem(key: string): boolean; 
}

```

Confirms if the cache storage contains the specified cached item.

**Details**:
* `key`: The key for which to check its existence.


### save 

```ts
class CacheManager {
  static save(item: TRawCacheItem | ICacheItem): void; 
}

```

Persists an item to the cache storage immediately.

**Details**:
* `item`: A data object to be cached

</div>

## Example

```ts
import { CacheManager, type TRawCacheItem } from 'vue-mdbootstrap';
import axios, { type AxiosError } from 'axios';

const response = await axios.get('<api-url>');
const item = { key: url, value: response.data } as TRawCacheItem;
CacheManager.save(item);

```
