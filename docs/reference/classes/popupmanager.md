---
description: Singleton instance that help manage the popup elements.
---

# PopupManager Class

::: lead
Singleton instance that help manage the popup elements. 
:::

<div class="doc-api">

## add

```ts
class PopupManager {
  static add(instance: ComponentInternalInstance, props: Readonly<TPopupOptions>, active: Ref<boolean>): void; 
}
```

Add any vue component instance that has `TPopupOptions` as its property to the PopupManager. 

**Details**:
* `instance`: The component instance to manage
* `props`: The overlay property options
* `active`: Reference to the component state


## remove

```ts
class PopupManager {
  static remove(instance: ComponentInternalInstance): void; 
}
```

Remove component instance that already exists in the PopupManager's data store. 

**Details**:
* `instance`: The component to remove


## findItem

```ts
class PopupManager {
  static findItem(instance: ComponentInternalInstance): number; 
}
```

Find an instance of a component in the PopupManager's data store and return 
its position index. 

**Details**:
* `instance`: The component instance to search


## closePopover

```ts
class PopupManager {
  static closePopover(instance: ComponentInternalInstance, active: Ref<boolean>, message: string): void; 
}
```

Find component instance, trigger `close` event if it is found and remove it from 
the PopupManager's data store. 

**Details**:
* `instance`: The component instance to search
* `active`: Reference to the component state
* `message`: Message explaining the closure


## preventScrolling

```ts
class PopupManager {
  static preventScrolling(): void; 
}
```

Prevent document body from scrolling. This method is automatically called by `add()` 
method if the given component instance has overlay.


## allowScrolling 

```ts
class PopupManager {
  static allowScrolling(): void; 
}
```

Enable scrolling to the document body. This method is automatically called by `remove()` 
method if the given component instance has overlay.

</div>
