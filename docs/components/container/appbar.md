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
<bs-app>
  <bs-appbar class="bg-indigo" shadow>
    <bs-button color="light-grey" mode="icon" icon="menu" flat></bs-button>
    <bs-appbar-title class="text-white" title="Page Title"> </bs-appbar-title>
  </bs-appbar>
</bs-app>
```
:::


### With button and menus

::: BlockVue {title="Appbar Example" clientOnly="true"}

```vue
<template>
  <bs-app>
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
                <a class="dropdown-item" href="#with-button-and-menus">First Action</a>
                <a class="dropdown-item" href="#with-button-and-menus">Second Action</a>
                <a class="dropdown-item" href="#with-button-and-menus">Third Action</a>
                <bs-divider></bs-divider>
                <a class="dropdown-item" href="#with-button-and-menus">Another Action</a>
              </div>
            </bs-list-view>
          </template>
        </bs-dropdown-menu>
      </bs-appbar-items>
    </bs-appbar>
  </bs-app>
</template>
```
:::


## CSS Variables

<SmallNote color="teal" class="mt-3">Added since v2.0.0</SmallNote>

```scss
--md-appbar-bg: #fff;
--md-appbar-color: #212121;
--md-appbar-height: 64px;
--md-appbar-margin: 0.5rem 0.75rem 0.5rem 1rem;
--md-appbar-title-font-size: 1.5rem;
--md-appbar-title-font-weight: 400;

```

## API Reference

### BsAppbar {#api-appbar}

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-appbar">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type        | Default     | Description |
|-------------|-------------|-------------|-------------|
| clipped-left  | `Boolean`  | `false`  | Cut off the left side of the component. Use this property if [BsSideDrawer](/components/container/side-drawer) is on the left. |
| clipped-right | `Boolean`  | `false`  | Cut off the right side of the component. Use this property if [BsSideDrawer](/components/container/side-drawer) is on the right. <BsBadge color="info">v2.0.0</BsBadge> |
| fixed-top  | `Boolean`  | `false`  | Place the component fixed at the top of the page. See [Bootstrap Position](https://getbootstrap.com/docs/5.3/helpers/position/) documentation. |
| sticky-top | `Boolean`  | `false`  | Stick the component at the top of the page. See [Bootstrap Position](https://getbootstrap.com/docs/5.3/helpers/position/) documentation. <BsBadge color="info">v2.0.3</BsBadge> |
| shadow | `Boolean`  | `false`  | Add shadow effect to the component. |
| tag | `String`  | `'nav'`  | Html tag used to render the component. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-appbar">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| resize | ( target:`HTMLElement`) | Triggers when the component is resized. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-appbar">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>

### BsAppbarItems {#api-appbar-items class="mt-lg-5"}

Optional component to create a component's container inside `<bs-appbar>` which 
may contains buttons, menus and others.

<BsTabs v-model="tabs2active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Slots" url="#api-appbar-items">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>

### BsAppbarTitle {#api-appbar-title class="mt-lg-5"}

Lightweight component to put page title on **Appbar**.

<BsTabs v-model="tabs3active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-appbar-title">
    <div class="doc-table-responsive doc-table-props">

| Property  | Type     | Default | Description |
|-----------|----------|---------|-------------|
| title     | `String` |         | The text to display. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-appbar-title">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the custom content. |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { ref } from 'vue';

const tabs1active = ref(0);
const tabs2active = ref(0);
const tabs3active = ref(0);
</script>
