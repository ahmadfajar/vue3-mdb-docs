---
outline: [2, 3] 
description: A lightweight component which can be used for adaptive tagging such as adding context to just about any content. 
---

# Badge


::: lead
**BsBadge** is small and a lightweight component which is mainly used for adaptive tagging such as 
adding context to just about any content.
:::


## Overview

**BsBadge** uses [Boostrap CSS](https://getbootstrap.com/docs/5.2/components/badge/) classes
internally and can scale to match the size of the immediate parent element by using relative font sizing.

::: BlockVue {title="Basic Badge Example"}

```html
<div class="my-demo-wrapper w-100" style="color: var(--vp-c-neutral)">
  <h2>Example heading <bs-badge>New</bs-badge></h2>
  <h3>Example heading <bs-badge>New</bs-badge></h3>
  <h4>Example heading <bs-badge>New</bs-badge></h4>
  <h5>Example heading <bs-badge>New</bs-badge></h5>
  <h6>Example heading <bs-badge>New</bs-badge></h6>
</div>
```
:::

**BsBadge** can be used as part of links or button to provide a counter.

::: BlockVue {title="Badge Inside Button Example"}

```html
<bs-button color="primary">
  Notifications 
  <bs-badge variant="light" class="ms-2">9</bs-badge>
</bs-button>
```
:::


## Contextual Badges

Add any of the following variants: `primary`, `secondary`, `success`, `warning`, 
`danger`, `info`, `light`, or `dark` to the `variant` property to change the 
appearance of a badge. If no variant is specified, the `color` property is used.

::: BlockVue {title="Badge Variations Example"}

```html
<div class="my-demo-wrapper">
  <bs-badge variant="primary">Primary</bs-badge>
  <bs-badge variant="secondary">Secondary</bs-badge>
  <bs-badge variant="success">Success</bs-badge>
  <bs-badge variant="danger">Danger</bs-badge>
  <bs-badge variant="warning">Warning</bs-badge>
  <bs-badge variant="info">Info</bs-badge>
  <bs-badge variant="light">Light</bs-badge>
  <bs-badge variant="dark">Dark</bs-badge>
</div>
```
:::

If you wish to use color different variation, you can change its appearance by explicitly 
define the value of `color` property. Any [color variants](/reference/color-variants) 
can be applied to the `color` property.

::: BlockVue {title="Badge Colors Example"}

```html
<div class="my-demo-wrapper">
  <bs-badge color="pink">pink</bs-badge>
  <bs-badge color="purple">purple</bs-badge>
  <bs-badge color="default-color">default-color</bs-badge>
  <bs-badge color="secondary-color-dark">secondary-color-dark</bs-badge>
  <bs-badge color="orange darken-2">orange darken-2</bs-badge>
  <bs-badge color="lime accent-4">lime accent-4</bs-badge>
</div>
```
:::


## Style Variants

### Pill

Sets the `type` property of `<bs-badge>` to `pill` to make badges more rounded with 
a larger border-radius and a slight larger padding.

::: BlockVue {title="Pill Badges Example"}

```html
<div class="my-demo-wrapper">
  <bs-badge type="pill" variant="primary">Primary</bs-badge>
  <bs-badge type="pill" variant="secondary">Secondary</bs-badge>
  <bs-badge type="pill" variant="success">Success</bs-badge>
  <bs-badge type="pill" variant="danger">Danger</bs-badge>
  <bs-badge type="pill" variant="warning">Warning</bs-badge>
  <bs-badge type="pill" variant="info">Info</bs-badge>
</div>
```
::: 


### Label {class="mt-lg-5"}

Sets the `type` property of `<bs-badge>` to `label` to make badges little larger 
than normal with a slight larger padding. 

::: BlockVue {title="Label Badges Example"}

```html
<div class="my-demo-wrapper">
  <bs-badge type="label" variant="primary">Primary</bs-badge>
  <bs-badge type="label" variant="secondary">Secondary</bs-badge>
  <bs-badge type="label" variant="success">Success</bs-badge>
  <bs-badge type="label" variant="danger">Danger</bs-badge>
  <bs-badge type="label" variant="warning">Warning</bs-badge>
  <bs-badge type="label" variant="info">Info</bs-badge>
</div>
```
:::


### Outlined {class="mt-lg-5"}

Define the `outlined` property explicitly to create outline badges. Additionally 
you can combine with the `type` property to create an outline _Pill badge_ or outline 
_Label badge_. Currently outline badges only support [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) 
variant and [Material Color](/reference/color-variants#material-colors) variant.

<SmallNote color="teal">Added since v2.0.4</SmallNote>

::: BlockVue {title="Outline Badges Example"}

```html
<div class="my-demo-wrapper flex-column">
  <div class="mb-3">
    <bs-badge type="pill" variant="primary" outlined>Primary</bs-badge>
    <bs-badge type="pill" variant="secondary" outlined>Secondary</bs-badge>
    <bs-badge type="pill" variant="success" outlined>Success</bs-badge>
    <bs-badge type="pill" variant="danger" outlined>Danger</bs-badge>
    <bs-badge type="pill" variant="warning" outlined>Warning</bs-badge>
    <bs-badge type="pill" variant="info" outlined>Info</bs-badge>
  </div>
  <div>
    <bs-badge type="label" color="purple" outlined>purple</bs-badge>
    <bs-badge type="label" color="pink" outlined>pink</bs-badge>
    <bs-badge type="label" color="orange" outlined>orange</bs-badge>
    <bs-badge type="label" color="lime" outlined>lime</bs-badge>
    <bs-badge type="label" color="secondary-color" outlined>secondary-color</bs-badge>
    <bs-badge type="label" color="unique-color" outlined>unique-color</bs-badge>
  </div>
</div>
```
::: 


## Actionable Badges

Quickly provide actionable badges with hover and focus states by specifying the 
`tag` and `href` property.

::: BlockVue {title="Actionable Badges Example"}

```html
<div class="my-demo-wrapper">
  <bs-badge tag="a" variant="primary" href="#actionable-badges">Primary</bs-badge>
  <bs-badge tag="a" variant="secondary" href="#actionable-badges">Secondary</bs-badge>
  <bs-badge tag="a" variant="success" href="#actionable-badges">Success</bs-badge>
  <bs-badge tag="a" variant="danger" href="#actionable-badges">Danger</bs-badge>
  <bs-badge tag="a" variant="warning" href="#actionable-badges">Warning</bs-badge>
  <bs-badge tag="a" variant="info" href="#actionable-badges">Info</bs-badge>
  <bs-badge tag="a" variant="light" href="#actionable-badges">light</bs-badge>
  <bs-badge tag="a" variant="dark" href="#actionable-badges">dark</bs-badge>
</div>
```
:::


## Badge Positioning

Use bootstrap css utilities to modify a badge and position it in the corner of a 
link or button. Or even create rounded badge without a count for a more generic indicator.

<SmallNote color="teal">Added since v2.0.0</SmallNote>

::: BlockVue {title="Badge Positioning Example"}

```vue
<template>
  <div class="my-demo-wrapper row row-cols-auto">
    <div class="col">
      <button type="button" class="btn btn-primary position-relative p-2 px-3">
        Inbox
        <bs-badge variant="danger" class="position-absolute top-0 start-100 translate-middle rounded-pill">
          99+
          <span class="visually-hidden">unread messages</span>
        </bs-badge>
      </button>
    </div>
    <div class="px-2"></div>
    <div class="col">
      <button type="button" class="btn btn-primary position-relative p-2 px-3">
        Profile
        <bs-badge variant="danger" class="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
          <span class="visually-hidden">New alerts</span>
        </bs-badge>
      </button>
    </div>
    <div class="col">
      <div class="position-relative">
        <bs-button icon="notifications_outlined" mode="icon" flat></bs-button>
        <bs-badge variant="danger" class="position-absolute top-0 start-50 translate-middle-y rounded-pill">
          9+<span class="visually-hidden">unread messages</span>
        </bs-badge>
      </div>
    </div>
  </div>
</template>

<style>
.my-demo-wrapper {
  margin: 30px;
}
</style>

```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default  | Description |
|----------|----------|----------|-------------|
| color    | `String` | `'default'` | The badge color appearance. |
| outlined | `Boolean` | `false` | Create outline badge style. <BsBadge color="info">v2.0.4</BsBadge> |
| tag      | `String` | `'span'` | The html tag is used to render the component. |
| type     | `String` |   | Create badge with `pill` or `label` style. |
| variant  | `String` |   | Create contextual badge with [Bootstrap badge color](https://getbootstrap.com/docs/5.2/components/badge/#background-colors). Valid values are: `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light`, `dark`. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
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
