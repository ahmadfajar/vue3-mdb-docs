---
outline: [2, 3]
---

# Appbar


::: lead
**BsAppbar** is a lightweight component which is placed at the top of the page as a 
container for page title, logo, menus, and action buttons which is usually known as
*Navigation Bar*.
:::


## Examples

### Basic usage

::: BlockVue {title="Appbar Example"}

```html
<bs-app-container>
  <bs-appbar class="bg-indigo" shadow>
    <bs-button color="light-grey" mode="icon" icon="menu" flat></bs-button>
    <bs-appbar-title class="text-white" title="Page Title"> </bs-appbar-title>
  </bs-appbar>
</bs-app-container>
```
:::


### With button and menus

::: BlockVue {title="Appbar Example" clientOnly="true"}

```vue
<template>
  <bs-app-container>
    <bs-appbar class="bg-indigo" shadow>
      <bs-button color="light-grey" mode="icon" icon="menu" flat></bs-button>
      <bs-appbar-title class="text-white" title="Page Title"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-appbar-items>
        <bs-button icon="search" mode="icon" color="light-grey" flat></bs-button>
        <bs-button icon="notifications_outlined" mode="icon" color="light-grey" flat></bs-button>
        <bs-dropdown-menu class="ml-2" placement="bottom-right" space="3">
          <bs-button icon="more_vert" mode="icon" color="light-grey" flat></bs-button>
          <template #content>
            <bs-list-view>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">First Action</a>
                <a class="dropdown-item" href="#">Second Action</a>
                <a class="dropdown-item" href="#">Third Action</a>
                <bs-divider></bs-divider>
                <a class="dropdown-item" href="#">Another Action</a>
              </div>
            </bs-list-view>
          </template>
        </bs-dropdown-menu>
      </bs-appbar-items>
    </bs-appbar>
  </bs-app-container>
</template>
```
:::


## API Reference

### BsAppbar

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type        | Default     | Description |
|-------------|-------------|-------------|-------------|
| clipped-left  | `Boolean`  | `false`  | Cut off the left side of the component. Use this property if [BsSideDrawer](/components/side-drawer) is on the left. |
| clipped-right | `Boolean`  | `false`  | Cut off the right side of the component. Use this property if [BsSideDrawer](/components/side-drawer) is on the right. <BsBadge>v2.0.0</BsBadge> |
| fixed-top  | `Boolean`  | `false`  | Place the component fixed at the top of the page. See [Bootstrap Position](https://getbootstrap.com/docs/5.3/helpers/position/) documentation. |
| sticky-top | `Boolean`  | `false`  | Stick the component at the top of the page. See [Bootstrap Position](https://getbootstrap.com/docs/5.3/helpers/position/) documentation. <BsBadge>v2.0.3</BsBadge> |
| shadow | `Boolean`  | `false`  | Add shadow effect to the component. |
| tag | `String`  | `'nav'`  | Html tag used to render the component. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| resize | (`target: HTMLElement`) | Triggers when the component is resized. <BsBadge>v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to render the main content. |

</div>
  </BsTab>
</BsTabs>

### BsAppbarItems {class="pt-3"}

Optional component to create a component's container inside `<bs-appbar>` which 
may contains buttons, menus and others.

<BsTabs v-model="tabs2active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to render the main content. |

</div>
  </BsTab>
</BsTabs>

### BsAppbarTitle {class="pt-3"}

Lightweight component to put page title on **Appbar**.

<BsTabs v-model="tabs3active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type        | Default     | Description |
|-------------|-------------|-------------|-------------|
| title  | `String` | | The text to display. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to render the custom content. |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { ref } from 'vue';

const tabs1active = ref(0);
const tabs2active = ref(0);
const tabs3active = ref(0);
</script>
