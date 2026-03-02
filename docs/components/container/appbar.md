---
outline: [2, 3] 
description: Appbar is a lightweight component which is placed at the top of the page as a container for page title, logo, menus, and action buttons which is usually known as Navigation Bar. 
---

# Appbar


::: lead
**BsAppbar** is a lightweight component which is placed at the top of the page as a 
container for page title, logo, menus, and action buttons which is usually known as
*Navigation Bar*.
:::


## Examples

### Basic usage

::: BlockVue {title="Appbar Basic Usage"}

```vue
<template>
  <bs-app>
    <bs-appbar class="bg-indigo" shadow>
      <bs-button color="light" mode="icon" icon="menu" flat></bs-button>
      <bs-appbar-title class="text-light" title="Page Title"> </bs-appbar-title>
    </bs-appbar>
  </bs-app>
</template>
```
:::


### With button and menus

::: BlockVue {title="Appbar with Buttons and Menus" clientOnly="true"}

```vue
<template>
  <bs-app>
    <bs-appbar class="bg-indigo" shadow>
      <bs-button color="light" mode="icon" icon="menu" flat></bs-button>
      <bs-appbar-title class="text-light" title="Page Title"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-appbar-items>
        <bs-button icon="search" mode="icon" color="light" flat></bs-button>
        <bs-button icon="notifications_outlined" mode="icon" color="light" flat></bs-button>
        <bs-dropdown-menu class="ml-2" placement="bottom-right" space="3">
          <bs-button icon="more_vert" mode="icon" color="light" flat></bs-button>
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

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-appbar` and global CSS variables for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: code-group

```scss [Local CSS]
.md-appbar {
  --md-appbar-bg: var(--appbar-background);
  --md-appbar-color: var(--appbar-foreground);
  --md-appbar-height: var(--appbar-height, 4rem);
  --md-appbar-padding: #{vars.$padding-sm (vars.$padding-md - 0.25) vars.$padding-sm vars.$padding-md};
  --md-appbar-title-font-size: 1.5rem;
  --md-appbar-title-font-weight: var(--font-weight-normal) ;
}

```

```css [Global CSS]
:root {
  --appbar-background: var(--background);
  --appbar-foreground: var(--foreground);
  --appbar-height: 4rem;
}

```
:::


## API Reference

### BsAppbar {#api-reference-appbar}

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type        | Default     | Description |
|-------------|-------------|-------------|-------------|
| clipped-left  | `Boolean`  | `false`  | Cut off the left side of the component. Use this property if [BsSideDrawer](/components/container/side-drawer) is on the left. |
| clipped-right | `Boolean`  | `false`  | Cut off the right side of the component. Use this property if [BsSideDrawer](/components/container/side-drawer) is on the right. <MdBadge color="info">v2.0.0</MdBadge> |
| fixed-top  | `Boolean`  | `false`  | Place the component fixed at the top of the page. See [Bootstrap Position](https://getbootstrap.com/docs/5.3/helpers/position/) documentation. |
| sticky-top | `Boolean`  | `false`  | Stick the component at the top of the page. See [Bootstrap Position](https://getbootstrap.com/docs/5.3/helpers/position/) documentation. <MdBadge color="info">v2.0.3</MdBadge> |
| shadow | `Boolean`  | `false`  | Add shadow effect to the component. |
| tag | `String`  | `'header'`  | Html tag used to render the component. <MdBadge color="info">Updated in v2.2.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| resize | ( target:`HTMLElement`) | Triggers when the component is resized. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>

### BsAppbarItems {#api-reference-appbar-items class="mt-lg-5"}

Optional component to create a component's container inside `<bs-appbar>` which 
may contains buttons, menus and others.

<BsTabs v-model="tabs2active" variant="md3" class="doc-api-reference">
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>

### BsAppbarTitle {#api-reference-appbar-title class="mt-lg-5"}

Lightweight component to put page title on **Appbar**.

<BsTabs v-model="tabs3active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property  | Type     | Default | Description |
|-----------|----------|---------|-------------|
| title     | `String` |         | The text to display. |

</div>
  </BsTab>
  <BsTab label="Slots">
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
