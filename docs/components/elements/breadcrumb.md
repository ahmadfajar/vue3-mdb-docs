---
outline: [2, 3] 
description: A component that indicate the current page's location within a navigational hierarchy. 
---

# Breadcrumb


::: lead
**BsBreadcrumb** is a component that indicate the current page's location within 
a navigational hierarchy.
:::

<SmallNote color="teal">Added since v2.1.0</SmallNote>

## Overview 

**BsBreadcrumb** is built from [Bootstrap](https://getbootstrap.com/docs/5.2/components/breadcrumb/)
breadcrumb's component. Although it is a simple breadcrumb, it can be customized
with many options. 

::: BlockVue {title="Breadcrumb Example" file="./docs/components/scripts/breadcrumb-1.js" }

```vue
<template>
  <div class="rounded-3 py-3 bg-white w-100">
    <bs-breadcrumb :items="items1"></bs-breadcrumb>
  </div>
</template>

<script setup lang="ts">
const items1 = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Breadcrumb', href: '#' },
];
</script>
```
:::


## Icons

Property `prepend-icon` is used to display an icon before the first breadcrumb label. 
Use any valid android icon name from 
[Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon style variant. 

Additionally you can use slot `icon` to display a custom icon.

::: BlockVue {title="Breadcrumb Icon Example" file="./docs/components/scripts/breadcrumb-2.js"}

```vue
<template>
  <div class="rounded-3 py-3 bg-white w-100">
    <bs-breadcrumb :items="items2" prepend-icon="home_rounded"></bs-breadcrumb>
    <bs-breadcrumb :items="items2" prepend-icon="home_sharp_filled" icon-size="28"></bs-breadcrumb>
    <bs-breadcrumb :items="items2">
      <template #icon>
        <bs-icon-fontawesome icon="house-user" variant="regular"></bs-icon-fontawesome>
      </template>
    </bs-breadcrumb>
  </div>
</template>

<script setup lang="ts">
const items2 = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Breadcrumb', href: '#' },
];
</script>
```
:::


## Separators 

Separator between label can be changed using property `separator`. Use a simple 
**single character** or **embedded SVG icon** to specify the value of the `separator` property.

::: BlockVue {title="Breadcrumb Separators Example" file="./docs/components/scripts/breadcrumb-3.js"}

```vue
<template>
  <div class="rounded-3 py-3 bg-white w-100">
    <bs-breadcrumb :items="items3" prepend-icon="home_rounded" separator=">"></bs-breadcrumb>
    <bs-breadcrumb :items="items3" prepend-icon="home_sharp" :separator="svg"></bs-breadcrumb>
  </div>
</template>

<script setup lang="ts">
const svg = encodeURI('url("data:image/svg+xml, <svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 -60 320 512\' fill=\'#3b7cf5\' width=\'14\' height=\'16\'><path d=\'M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z\'/></svg>")');
const items3 = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Breadcrumb', href: '#' },
];
</script>
```
:::


## CSS Variables

```scss
--md-breadcrumb-container-padding-x: 1.5rem;
--md-breadcrumb-container-padding-y: 0.75rem;
--md-breadcrumb-separator-color: var(--bs-gray-600);
--md-breadcrumb-icon-color: inherit;
--md-breadcrumb-font-size: inherit;
--md-breadcrumb-label-color: inherit;
--md-breadcrumb-label-active-color: var(--bs-gray-700);
--md-breadcrumb-label-hover-color: var(--bs-link-color);
--md-breadcrumb-line-height: 1.25;

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property     | Type      | Default  | Description |
|--------------|-----------|----------|-------------|
| icon-size    | `Number`  |  | The size of icon to display, in pixel. |
| items <Badge type="danger">required</Badge> | `TBreadcrumb[]` |  | The data-source to build the breadcrumb. |
| prepend-icon | `String`  |  | <div style="min-width:320px"> The icon to display before the first breadcrumb label. <br/><br/> Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. </div> |
| separator    | `String`  |  | Change the default breadcrumb label's separator. |
| sticky       | `Boolean` | `false` | If `true`, the breadcrumb will be positioned using *sticky-top*. |
| tag          | `String`  | `'nav'` | Change the default HTML tag to render the breadcrumb container.  |

</div>
  </BsTab>
</BsTabs>

### TBreadcrumb {#api-breadcrumb class="mt-lg-5"}

The data object to build breadcrumb data source has the following properties:

<div class="doc-api-reference mt-0">
<div class="doc-table-responsive doc-table-3cols">

| Property | Type      | Description |
|----------|-----------|-------------|
| label <Badge type="danger">required</Badge> | `String` | The breadcrumb item label. |
| href     | `String>` | Absolute or relative URL if not using [vue-router](https://router.vuejs.org/). |
| location | `RouterLinkProps` | The navigation location target. <br /> <br /> This must be an object that satifies the properties of `<RouterLink>` component when using [vue-router](https://router.vuejs.org/). <br /> <br /> This is a shortcut to create a `<RouterLink>` as part of item's label. |
| path     | `String` | The route path for the navigation target. <br /> <br /> This is a shortcut to create a `<RouterLink>` as part of item's label. See [vue-router](https://router.vuejs.org/) for more information. |
| pathName | `String` | The path name for the navigation target. <br /> <br /> This is a shortcut to create a `<RouterLink>` as part of item's label. See [vue-router](https://router.vuejs.org/) for more information. |
| handler  | `VoidFunction` | `onClick` event handler for this items's label. <p>`handler`, `location`, `pathName`, `path` and `href` properties can't be mixed together. If all or some of the properties is defined, then `handler` will take priority.</p> The priorities are sorted as follows: <ol> <li>`handler` (highest priority),</li> <li>`location`,</li> <li>`pathName`,</li> <li>`path`,</li> <li>`href` (lowest priority).</li></ol> |

</div>
</div>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
const svg = encodeURI('url("data:image/svg+xml, <svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 -60 320 512\' fill=\'#3b7cf5\' width=\'14\' height=\'16\'><path d=\'M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z\'/></svg>")');

const items1 = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '/components/elements/breadcrumb' },
  { label: 'Breadcrumb', href: '#overview' },
];
const items2 = [
  { label: 'Home', href: '#icons' },
  { label: 'Components', href: '#icons' },
  { label: 'Breadcrumb', href: '#icons' },
];
const items3 = [
  { label: 'Home', href: '#separators' },
  { label: 'Components', href: '#separators' },
  { label: 'Breadcrumb', href: '#separators' },
];
</script>
