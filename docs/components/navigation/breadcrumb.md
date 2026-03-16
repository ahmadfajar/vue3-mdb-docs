---
outline: [2, 3] 
description: Breadcrumb is a component which is used indicate the current page's location within a navigational hierarchy. 
---

# Breadcrumb


::: lead
**BsBreadcrumb** is a component which is used indicate the current page's location within 
a navigational hierarchy.
:::

<SmallNote color="teal">Update in v2.2.0</SmallNote>

## Overview 

**BsBreadcrumb** is simple and lightweight component and can be customized with many options. 

::: BlockVue {title="Breadcrumb Overview" file="./docs/components/navigation/js/breadcrumb-1.js" }

```vue
<template>
  <div class="demo-wrapper w-full">
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

::: info <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">INFO</span>
**BsBreadcrumb** originally used [Bootstrap CSS](https://getbootstrap.com/docs/5.2/components/breadcrumb/) 
classes. However, since v2.2.0, **BsBreadcrumb** no longer uses Bootstrap CSS. This improvement 
allows **BsBreadcrumb** to work seamlessly with both TailwindCSS and Bootstrap CSS frameworks.
:::

## Icons

Property `prepend-icon` is used to display an icon before the first breadcrumb label. 
Use any valid android icon name from 
[Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon style variant. 

Additionally you can use slot `icon` to display a custom icon.

::: BlockVue {title="Breadcrumb Icon" file="./docs/components/navigation/js/breadcrumb-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <bs-breadcrumb :items="items2" prepend-icon="home_rounded"></bs-breadcrumb>
    <bs-breadcrumb :items="items2" prepend-icon="home_sharp_filled" icon-size="28"></bs-breadcrumb>
    <bs-breadcrumb :items="items2">
      <template #icon>
        <bs-fontawesome-icon icon="house" variant="regular"></bs-fontawesome-icon>
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

::: BlockVue {title="Breadcrumb Separators" file="./docs/components/navigation/js/breadcrumb-3.js"}

```vue
<template>
  <div class="demo-wrapper w-full">
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

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-breadcrumb` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-breadcrumb {
  --md-breadcrumb-padding-x: #{vars.$breadcrumb-padding-x};
  --md-breadcrumb-padding-y: #{vars.$breadcrumb-padding-y};
  --md-breadcrumb-icon-color: inherit;
  --md-breadcrumb-font-size: inherit;
  --md-breadcrumb-font-weight: var(--font-weight-medium);
  --md-breadcrumb-line-height: #{vars.$breadcrumb-line-height};

  --md-breadcrumb-item-color: var(--foreground-subtle);
  --md-breadcrumb-item-active-color: inherit;
  --md-breadcrumb-item-hover-color: var(--link-color, #{colors.$primary-color});
  --md-breadcrumb-item-separator-color: var(--foreground-subtle-tertiary);
  --md-breadcrumb-item-spacing: #{vars.$breadcrumb-item-spacing};
}

```

## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
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

### TBreadcrumb {#api-reference-breadcrumb class="mt-lg-5"}

The data object to build breadcrumb data source has the following properties:

<div class="doc-api-reference mt-0">
<div class="doc-table-responsive doc-table-3cols">

| Property | Type      | Description |
|----------|-----------|-------------|
| label <Badge type="danger">required</Badge> | `String` | The breadcrumb item label. |
| href     | `String` | Absolute or relative URL if not using [vue-router](https://router.vuejs.org/). |
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
