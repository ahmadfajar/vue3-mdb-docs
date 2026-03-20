---
outline: [2, 3] 
description: Badge is a lightweight component which can be used for adaptive tagging such as adding context to just about any content. 
---

# Badge


::: lead
**BsBadge** is small and a lightweight component which is mainly used for adaptive tagging such as 
adding context to just about any content.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

## Overview

**BsBadge** is a lightweight component and can scale to match the size of the immediate parent element by using relative font sizing.

::: BlockVue {title="Badge Overview"}

```vue
<template>
  <div class="demo-wrapper w-full px-2">
    <h2>Example heading <bs-badge>New</bs-badge></h2>
    <h3>Example heading <bs-badge>New</bs-badge></h3>
    <h4>Example heading <bs-badge>New</bs-badge></h4>
    <h5>Example heading <bs-badge>New</bs-badge></h5>
    <h6>Example heading <bs-badge>New</bs-badge></h6>
  </div>
</template>

```
:::

**BsBadge** can be used as part of links or button to provide a counter.

::: BlockVue {title="Badge Inside Button"}

```vue
<template>
  <bs-button color="primary">
    Notifications 
    <bs-badge variant="light" class="ms-2">9</bs-badge>
  </bs-button>
</template>

```
:::

::: info <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">INFO</span>
- **BsBadge** originally used [Bootstrap CSS](https://getbootstrap.com/docs/5.2/components/badge/) 
  classes. However, since v2.2.0, **BsBadge** no longer uses Bootstrap CSS. This improvement 
  allows **BsBadge** to work seamlessly with the TailwindCSS and Bootstrap CSS frameworks.
- The bundle only provide contextual color variants. It is located
  at `dist/theme-light.css` and `dist/theme-dark.css` files. If the component style
  and color doesn't suit to your needs, you can customize it using the component's 
  CSS variables or use the provided SASS mixins. 
:::


## Contextual Badges

Add any of the following variants: `primary`, `secondary`, `success`, `warning`, 
`danger`, `info` or `light` to the `variant` property to change the 
appearance of a badge. If no variant is specified, the `color` property is used.

::: BlockVue {title="Contextual Badges"}

```vue
<template>
  <div class="demo-wrapper flex flex-wrap md-gap-2">
    <bs-badge variant="primary">Primary</bs-badge>
    <bs-badge variant="secondary">Secondary</bs-badge>
    <bs-badge variant="success">Success</bs-badge>
    <bs-badge variant="danger">Danger</bs-badge>
    <bs-badge variant="warning">Warning</bs-badge>
    <bs-badge variant="info">Info</bs-badge>
    <bs-badge variant="light">Light</bs-badge>
  </div>
</template>

```
:::

If you wish to use color different variation, you can change its appearance by explicitly 
define the value of `color` property. Any [additional color](/reference/colors#additional-colors)
variants can be applied to the `color` property.

::: BlockVue {title="Badge Colors"}

```vue
<template>
  <div class="demo-wrapper flex flex-wrap md-gap-2">
    <bs-badge color="pink">pink</bs-badge>
    <bs-badge color="default-color">default-color</bs-badge>
    <bs-badge color="secondary-color">secondary-color</bs-badge>
    <bs-badge color="orange-600">orange-600</bs-badge>
    <bs-badge color="lime-700">lime-700</bs-badge>
  </div>
</template>

```
:::


## Style Variants

### Label {#style-variants-label class="mt-lg-5"}

Sets the `type` property of `<bs-badge>` to `label` to make badges little larger 
than normal with a slight larger padding. 

::: BlockVue {title="Badge Style Variants - Label"}

```vue
<template>
  <div class="demo-wrapper flex flex-wrap md-gap-2">
    <bs-badge type="label" variant="primary">Primary</bs-badge>
    <bs-badge type="label" variant="secondary">Secondary</bs-badge>
    <bs-badge type="label" variant="success">Success</bs-badge>
    <bs-badge type="label" variant="danger">Danger</bs-badge>
    <bs-badge type="label" variant="warning">Warning</bs-badge>
    <bs-badge type="label" variant="info">Info</bs-badge>
    <bs-badge type="label" variant="light">Light</bs-badge>
  </div>
</template>

```
:::

### Rounded Pill {#style-variants-rounded-pill}

Sets the `type` property of `<bs-badge>` to `pill` to make badges more rounded with 
a larger border-radius and a slight larger padding.

::: BlockVue {title="Badge Style Variants - Rounded Pill"}

```vue
<template>
  <div class="demo-wrapper flex flex-wrap md-gap-2">
    <bs-badge type="pill" variant="primary">Primary</bs-badge>
    <bs-badge type="pill" variant="secondary">Secondary</bs-badge>
    <bs-badge type="pill" variant="success">Success</bs-badge>
    <bs-badge type="pill" variant="danger">Danger</bs-badge>
    <bs-badge type="pill" variant="warning">Warning</bs-badge>
    <bs-badge type="pill" variant="info">Info</bs-badge>
    <bs-badge type="pill" variant="light">Light</bs-badge>
  </div>
</template>

```
::: 

### Outlined {#style-variants-outlined class="mt-lg-5"}

Define the `outlined` property explicitly to create outline badges. Additionally 
you can combine with the `type` property to create an _Rounded Pill badge_ or _Label badge_ 
with outlined style. 

::: BlockVue {title="Badge Style Variants - Outlined"}

```vue
<template>
  <div class="demo-wrapper">
    <div class="flex flex-wrap md-gap-2 mb-3">
      <bs-badge type="pill" variant="primary" outlined>Primary</bs-badge>
      <bs-badge type="pill" variant="secondary" outlined>Secondary</bs-badge>
      <bs-badge type="pill" variant="success" outlined>Success</bs-badge>
      <bs-badge type="pill" variant="danger" outlined>Danger</bs-badge>
      <bs-badge type="pill" variant="warning" outlined>Warning</bs-badge>
      <bs-badge type="pill" variant="info" outlined>Info</bs-badge>
    </div>
    <div class="flex flex-wrap md-gap-2">
      <bs-badge type="label" color="purple" outlined>purple</bs-badge>
      <bs-badge type="label" color="pink" outlined>pink</bs-badge>
      <bs-badge type="label" color="orange" outlined>orange</bs-badge>
      <bs-badge type="label" color="lime" outlined>lime</bs-badge>
      <bs-badge type="label" color="secondary-color" outlined>secondary-color</bs-badge>
      <bs-badge type="label" color="unique-color" outlined>unique-color</bs-badge>
    </div>
  </div>
</template>

```
::: 


## Actionable Badges

Quickly provide actionable badges with hover and focus states by specifying the 
`tag` and `href` property.

::: BlockVue {title="Actionable Badges"}

```vue
<template>
  <div class="demo-wrapper flex flex-wrap md-gap-2">
    <bs-badge tag="a" variant="primary" href="#actionable-badges">Primary</bs-badge>
    <bs-badge tag="a" variant="secondary" href="#actionable-badges">Secondary</bs-badge>
    <bs-badge tag="a" variant="success" href="#actionable-badges">Success</bs-badge>
    <bs-badge tag="a" variant="danger" href="#actionable-badges">Danger</bs-badge>
    <bs-badge tag="a" variant="warning" href="#actionable-badges">Warning</bs-badge>
    <bs-badge tag="a" variant="info" href="#actionable-badges">Info</bs-badge>
    <bs-badge tag="a" variant="light" href="#actionable-badges">light</bs-badge>
  </div>
</template>

```
:::


## Badge Positioning

Use bootstrap css utilities to modify a badge and position it in the corner of a 
link or button. Or even create rounded badge without a count for a more generic indicator.

::: BlockVue {title="Badge Positioning"}

```vue
<template>
  <div class="demo-wrapper row row-cols-auto">
    <div class="col">
      <bs-button icon="inbox">
        Inbox
        <bs-badge class="ms-3" color="bg-gray-200 text-dark" style="margin-right: -14px" type="pill">
          99+
        </bs-badge>
      </bs-button>
    </div>
    <div class="col">
      <div class="relative">
        <bs-button icon="notifications_outlined" mode="icon" flat></bs-button>
        <bs-badge variant="danger" class="absolute start-100 top-0 translate-middle" type="pill">
          9+
        </bs-badge>
      </div>
    </div>
    <div class="col ps-4">
      <div class="relative">
        <bs-button flat icon="notifications_filled" mode="icon"></bs-button>
        <bs-badge variant="danger" class="absolute start-50 top-0 rounded-circle p-2 translate-middle-y">
          <span class="visually-hidden">New alerts</span>
        </bs-badge>
      </div>
    </div>
  </div>
</template>

```
:::

## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-badge` for better customization.

<SmallNote color="teal">Added in v2.2.0</SmallNote>

```scss
.md-badge {
  --md-badge-border-radius: #{vars.$badge-border-radius};
  --md-badge-color: #{colors.$white};
  --md-badge-font-size: #{vars.$badge-font-size};
  --md-badge-font-weight: var(--font-weight-medium);
  --md-badge-padding-x: #{vars.$badge-padding-x};
  --md-badge-padding-y: #{vars.$badge-padding-y};
}

```

### SASS mixins

Sometimes, simply creating a new actionable badge color variants can be overwhelming, 
as there are too many CSS variables to modify. For cases like this, Vue MDBootstrap 
provides SASS mixins to help you create new actionable badge color variants.

::: code-group

```scss [Light Theme]
use 'vue-mdbootstrap/scss/mixins/badge';

@include badge.make-actionable-variant-light($name, $color);

```

```scss [Dark Theme]
use 'vue-mdbootstrap/scss/mixins/badge';

@include badge.make-actionable-variant-dark($name, $color);

```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default  | Description |
|----------|----------|----------|-------------|
| color    | `String` | `'default'` | The badge color appearance. |
| outlined | `Boolean` | `false` | Create outline badge style. <MdBadge color="info">v2.0.4</MdBadge> |
| tag      | `String` | `'span'` | The html tag is used to render the component. |
| type     | `String` |   | Create badge with `pill` or `label` style. |
| variant  | `String` |   | Create contextual badge. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3">Valid values are: `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light`.</div> |

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


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
