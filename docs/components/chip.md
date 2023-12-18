---
outline: [2, 3]
---

# Chip

::: lead
**BsChip** is a component which is used to convey small pieces of information to 
create arbitrary items, like categories or tags, help enter information, make 
selections, filter content, or trigger actions.
:::


## Overview

**BsChip** can be used like a badge to create arbitrary items, like categories or 
tags, show options for a specific context like make selections, filter content or
triggers action. 

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVue {title="Basic Chips Example"}

```html
<div class="my-demo-wrapper bg-white rounded-3 p-4 w-100 text-center">
  <bs-chip>Default</bs-chip>
  <bs-chip color="primary">Primary</bs-chip>
  <bs-chip color="success">Success</bs-chip>
  <bs-chip color="danger">Danger</bs-chip>
  <bs-chip color="warning">Warning</bs-chip>
  <bs-chip color="info">Info</bs-chip>
</div>
```
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants 
and [Material Color](/reference/color-variants#material-colors) variants can be
applied to the `color` property.
:::


## States

`<bs-chip>` component has states: `active`, `disabled` and `readonly`.
Use their respective property to enable the state.

::: BlockVue {title="Chip States Example"}

```html
<div class="my-demo-wrapper bg-white rounded-3 p-4 w-100 text-center">
  <bs-chip color="primary" active>Active</bs-chip>
  <bs-chip color="primary" readonly>Readonly</bs-chip>
  <bs-chip color="primary" disabled>Disabled</bs-chip>
</div>
```
:::


## Element Type 

The `<bs-chip>` component by default renders a `<div>` element. However, you can 
also render as `<a>` element by providing `href` attribute value.

::: BlockVue {title="Chips Element Example"}

```html
<div class="my-demo-wrapper bg-white rounded-3 p-4 w-100 text-center">
  <bs-chip href="#">Default</bs-chip>
  <bs-chip color="primary" href="#">Primary</bs-chip>
  <bs-chip color="success" href="#">Success</bs-chip>
  <bs-chip color="danger" href="#">Danger</bs-chip>
  <bs-chip color="warning" href="#">Warning</bs-chip>
  <bs-chip color="info" href="#">Info</bs-chip>
</div>
```
:::


## Style Variants

You can style the `<bs-chip>` to your own preference or use a style variant 
based on Google **Material Design 3** specifications. 

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

### Default

::: BlockVue {title="Default Chips Example"}

```html
<div class="my-demo-wrapper bg-white rounded-3 p-4 w-100 text-center">
  <bs-chip>Default</bs-chip>
  <bs-chip color="primary">Primary</bs-chip>
  <bs-chip color="success">Success</bs-chip>
  <bs-chip color="danger">Danger</bs-chip>
  <bs-chip color="warning">Warning</bs-chip>
  <bs-chip color="info">Info</bs-chip>
</div>
```
:::


### Rounded Pill {class="mt-lg-5"}

You can create chip with rounded-pill style by defining the `pill` property explicitly.

::: BlockVue {title="Rounded Pill Chips Example"}

```html
<div class="my-demo-wrapper bg-white rounded-3 p-4 w-100 text-center">
  <bs-chip pill>Default</bs-chip>
  <bs-chip color="primary" pill>Primary</bs-chip>
  <bs-chip color="success" pill>Success</bs-chip>
  <bs-chip color="danger" pill>Danger</bs-chip>
  <bs-chip color="warning" pill>Warning</bs-chip>
  <bs-chip color="info" pill>Info</bs-chip>
</div>
```
:::

### Outlined {class="mt-lg-5"}

You can create chip with outlined style by defining the `outlined` property explicitly.

::: BlockVue {title="Outlined Chips Example"}

```html
<div class="my-demo-wrapper bg-white rounded-3 p-4 w-100 text-center">
  <bs-chip outlined>Default</bs-chip>
  <bs-chip color="primary" outlined>Primary</bs-chip>
  <bs-chip color="success" outlined>Success</bs-chip>
  <bs-chip color="danger" outlined>Danger</bs-chip>
  <bs-chip color="warning" outlined>Warning</bs-chip>
  <bs-chip color="info" outlined>Info</bs-chip>
</div>
```
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
`outlined` and `pill` property can be combined to create another style variants.
:::


## Sizes 

`<bs-chip>` can be set in different size: `sm` (small), or `lg` (large).

::: BlockVue {title="Chips Size Example"}

```html
<div class="my-demo-wrapper bg-white rounded-3 p-4 w-100">
  <div class="row row-cols-auto g-2 justify-content-center mb-3">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm">Small chip</bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary">Standard chip</bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg">Large chip</bs-chip>
    </div>
  </div>
  <div class="row row-cols-auto g-2 justify-content-center mb-3">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" pill>Small chip</bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" pill>Standard chip</bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" pill>Large chip</bs-chip>
    </div>
  </div>
  <div class="row row-cols-auto g-2 justify-content-center">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" outlined>Small chip</bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" outlined>Standard chip</bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" outlined>Large chip</bs-chip>
    </div>
  </div>
</div>
```
:::


## Icon

`<bs-chip>` can have an icon inside it. The icon can be positioned on the `left` side 
(before text) or on the `right` side (after text) using `icon-position` property
and use any valid [Google Material Icon](https://fonts.google.com/icons?icon.set=Material+Icons) 
name for the `icon` property. And to use a custom icon, use the `icon` slot and 
omit the `icon` property.

<SmallNote color="teal">Updated on v2.0.4</SmallNote>

::: BlockVue {title="Chip's Icon Example"}

```html
<div class="my-demo-wrapper bg-white rounded-3 p-4 w-100">
  <div class="row row-cols-auto g-2 justify-content-center mb-3">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" icon="check">
        Small chip
      </bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" icon="help">
        Standard chip
      </bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" icon="notifications">
        Large chip
      </bs-chip>
    </div>
  </div>
  <div class="row row-cols-auto g-2 justify-content-center mb-3">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" icon="check" icon-position="right" pill>
        Small chip
      </bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" icon="help" icon-position="right" pill>
        Standard chip
      </bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" icon="notifications" icon-position="right" pill>
        Large chip
      </bs-chip>
    </div>
  </div>
  <div class="row row-cols-auto g-2 justify-content-center">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" icon="check" outlined>
        Small chip
      </bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" icon="help_outline" icon-variant="outlined" outlined>
        Standard chip
      </bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" icon="notifications_outlined" outlined>
        Large chip
      </bs-chip>
    </div>
  </div>
</div>
```
:::

::: warning <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
As of Vue MDBootstrap v2.0, [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) 
is removed from the component's bundle, and replaced with dynamic loading of Google Material Icons.
:::

### Rotating an icon {class="mt-lg-5"}

Additionally, you can also rotate the icon to some extent. Use `icon-flip` property or `icon-rotation` 
property to rotate the icon, but do not use both property together.

::: BlockVue {title="Rotating Chip's Icon Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-sm-auto justify-content-center g-2 mb-2">
    <div class="col text-center">
      <bs-chip color="default-color" icon="shopping_cart" icon-flip="horizontal">
        Flip Horizontal
      </bs-chip>
    </div>
    <div class="col text-center">
      <bs-chip color="default-color" icon="shopping_cart" icon-flip="vertical">
        Flip Vertical
      </bs-chip>
    </div>
    <div class="col text-center">
      <bs-chip color="default-color" icon="shopping_cart" icon-flip="both">
        Flip Both
      </bs-chip>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-sm-auto justify-content-center g-2">
    <div class="col text-center">
      <bs-chip color="default-color" icon="navigation" icon-rotation="90">
        Rotate 90&deg;
      </bs-chip>
    </div>
    <div class="col text-center">
      <bs-chip color="default-color" icon="navigation" icon-rotation="180">
        Rotate 180&deg;
      </bs-chip>
    </div>
    <div class="col text-center">
      <bs-chip color="default-color" icon="navigation" icon-rotation="270">
        Rotate 270&deg;
      </bs-chip>
    </div>
  </div>
</div>
```
:::

### Animating an icon {class="mt-lg-5"}

`<bs-chip>` also has built-in animations for icon, which are: `spin` and `pulse`.
Example below, demonstrate the built-in icon animation and the use of `icon` slot.

::: BlockVue {title="Animating Chips's Icon Example"}

```vue
<template>
  <div class="my-demo-wrapper w-100 p-3 bg-white rounded-3">
    <div class="row row-cols-1 row-cols-md-auto justify-content-center g-2 mb-2">
      <div class="col text-center">
        <bs-chip color="default-color" icon="rotate_right" icon-spin>
          Spin Animation
        </bs-chip>
      </div>
      <div class="col text-center">
        <bs-chip color="default-color" icon="rotate_right" icon-pulse>
          Pulse Animation
        </bs-chip>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-auto justify-content-center g-2">
      <div class="col text-center">
        <bs-chip color="default-color">
          <template #icon>
            <bs-icon-spinner size="18" spin></bs-icon-spinner>
          </template>
          Custom Icon-Spin
        </bs-chip>
      </div>
      <div class="col text-center">
        <bs-chip color="default-color" icon-position="right">
          <template #icon>
            <bs-icon-spinner size="18" pulse></bs-icon-spinner>
          </template>
          Custom Icon-Pulse
        </bs-chip>
      </div>
    </div>
  </div>
</template>
```
:::


## Avatar

Chip's avatar can be enabled by using the `img-src` property and additionally you
can define the `img-circle` property explicitly to create circle shape avatar style.

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVue {title="Chip's Avatar Example"}

```html
<div class="my-demo-wrapper bg-white rounded-3 p-4 w-100">
  <div class="row row-cols-auto g-2 justify-content-center mb-3">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" img-src="/img/1.jpg">
        Small chip
      </bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" img-src="/img/1.jpg">
        Standard chip
      </bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" img-src="/img/1.jpg">
        Large chip
      </bs-chip>
    </div>
  </div>
  <div class="row row-cols-auto g-2 justify-content-center mb-3">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" img-src="/img/1.jpg" pill>
        Small chip
      </bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" img-src="/img/1.jpg" pill>
        Standard chip
      </bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" img-src="/img/1.jpg" pill>
        Large chip
      </bs-chip>
    </div>
  </div>
  <div class="row row-cols-auto g-2 justify-content-center mb-3">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" img-src="/img/1.jpg" outlined>
        Small chip
      </bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" img-src="/img/1.jpg" outlined>
        Standard chip
      </bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" img-src="/img/1.jpg" outlined>
        Large chip
      </bs-chip>
    </div>
  </div>
  <div class="row row-cols-auto g-2 justify-content-center">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" img-src="/img/1.jpg" outlined pill>
        Small chip
      </bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" img-src="/img/1.jpg" outlined pill>
        Standard chip
      </bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" img-src="/img/1.jpg" outlined pill>
        Large chip
      </bs-chip>
    </div>
  </div>
</div>
```
:::

### Adjusting avatar size {class="mt-lg-5"}

Avatar size can be adjusted to match the chip height by eliminating the margin 
around the avatar. This can be achieved by defining the `img-padding-off` 
property explicitly. 

<SmallNote color="teal">Updated on v2.0.4</SmallNote>

::: BlockVue {title="Chip's Avatar Example"}

```html
<div class="my-demo-wrapper bg-white rounded-3 p-4 w-100">
  <div class="row row-cols-auto g-2 justify-content-center mb-3">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" img-src="/img/1.jpg" img-padding-off>
        Small chip
      </bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" img-src="/img/1.jpg" img-padding-off>
        Standard chip
      </bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" img-src="/img/1.jpg" img-padding-off>
        Large chip
      </bs-chip>
    </div>
  </div>
  <div class="row row-cols-auto g-2 justify-content-center mb-3">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" img-src="/img/1.jpg" img-padding-off pill>
        Small chip
      </bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" img-src="/img/1.jpg" img-padding-off pill>
        Standard chip
      </bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" img-src="/img/1.jpg" img-padding-off pill>
        Large chip
      </bs-chip>
    </div>
  </div>
  <div class="row row-cols-auto g-2 justify-content-center mb-3">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" img-src="/img/1.jpg" img-padding-off outlined>
        Small chip
      </bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" img-src="/img/1.jpg" img-padding-off outlined>
        Standard chip
      </bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" img-src="/img/1.jpg" img-padding-off outlined>
        Large chip
      </bs-chip>
    </div>
  </div>
  <div class="row row-cols-auto g-2 justify-content-center">
    <div class="col d-flex align-items-center">
      <bs-chip color="default" size="sm" img-src="/img/1.jpg" img-padding-off outlined pill>
        Small chip
      </bs-chip>
    </div>
    <div class="col d-flex align-items-center">
      <bs-chip color="primary" img-src="/img/1.jpg" img-padding-off outlined pill>
        Standard chip
      </bs-chip>
    </div>
    <div class="col">
      <bs-chip color="danger" size="lg" img-src="/img/1.jpg" img-padding-off outlined pill>
        Large chip
      </bs-chip>
    </div>
  </div>
</div>
```
:::


## Dropdown Menus

`<bs-chip>` component can also be placed inside `<bs-dropdown-menu>` component.

<SmallNote color="teal">Updated on v2.0.3</SmallNote>

::: BlockVue {title="Chips with Drowndown menus example"}

```vue
<template>
  <div class="my-demo-wrapper bg-white rounded-3 p-4 w-100">
    <div class="d-flex justify-content-center mb-2">
      <bs-dropdown-menu placement="bottom-right">
        <bs-chip>
          Chip Action <span class="caret-down ms-2"></span>
        </bs-chip>
        <template #content>
          <bs-list-view>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#dropdown-menus">First Action</a>
              <a class="dropdown-item" href="#dropdown-menus">Second Action</a>
              <a class="dropdown-item" href="#dropdown-menus">Third Action</a>
            </div>
          </bs-list-view>
        </template>
      </bs-dropdown-menu>
      <bs-dropdown-menu placement="bottom-right">
        <bs-chip color="default-color" icon="shopping_cart_outlined">
          Chip Action <span class="caret-down ms-2"></span>
        </bs-chip>
        <template #content>
          <bs-list-view>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#dropdown-menus">First Action</a>
              <a class="dropdown-item" href="#dropdown-menus">Second Action</a>
              <a class="dropdown-item" href="#dropdown-menus">Third Action</a>
            </div>
          </bs-list-view>
        </template>
      </bs-dropdown-menu>
    </div>
    <div class="d-flex justify-content-center">
      <bs-dropdown-menu placement="bottom-right">
        <bs-chip outlined>
          Chip Action <span class="caret-down ms-2"></span>
        </bs-chip>
        <template #content>
          <bs-list-view>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#dropdown-menus">First Action</a>
              <a class="dropdown-item" href="#dropdown-menus">Second Action</a>
              <a class="dropdown-item" href="#dropdown-menus">Third Action</a>
            </div>
          </bs-list-view>
        </template>
      </bs-dropdown-menu>
      <bs-dropdown-menu placement="bottom-right">
        <bs-chip color="default-color" icon="shopping_cart_outlined" outlined>
          Chip Action <span class="caret-down ms-2"></span>
        </bs-chip>
        <template #content>
          <bs-list-view>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#dropdown-menus">First Action</a>
              <a class="dropdown-item" href="#dropdown-menus">Second Action</a>
              <a class="dropdown-item" href="#dropdown-menus">Third Action</a>
            </div>
          </bs-list-view>
        </template>
      </bs-dropdown-menu>
    </div>
  </div>
</template>
```
:::


## Click Events

`<bs-chip>` component can also received `click` event like html element.

::: BlockVue {title="Clickable Chips Example" file="./docs/components/scripts/chip-1.js"}

```vue
<template>
  <div class="my-demo-wrapper bg-white rounded-3 p-4 w-100 text-center">
    <bs-chip 
      :active="chip1Active" 
      :icon="chip1Icon" 
      color="default-color" 
      @click="toggleChip1(chip1Active)"
    >
      Solid
    </bs-chip>
    <bs-chip 
      :active="chip2Active" 
      :icon="chip2Icon" 
      color="default-color"
      outlined 
      @click="toggleChip2(chip2Active)"
    >
      Outlined
    </bs-chip>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const chip1Active = ref(false);
const chip2Active = ref(false);
const chip1Icon = ref();
const chip2Icon = ref();

function toggleChip1(value: boolean) {
  chip1Active.value = !value;
  chip1Icon.value = chip1Active.value ? 'check' : undefined;
}

function toggleChip2(value: boolean) {
  chip2Active.value = !value;
  chip2Icon.value = chip2Active.value ? 'check' : undefined;
}
</script>
```
:::

## Dismissible Chip

Use the `dismissible` property to dismiss any `<bs-chip>`. This will add a close 
`X` button. Additionally you can listen to the `close` event to execute a task after 
the chip has been dismissed.

::: BlockVue {title="Dismissible Chips Example"}

```html
<div class="my-demo-wrapper bg-white rounded-3 p-3 w-100">
  <div class="d-flex justify-content-center mb-2">
    <bs-chip color="default-color" dismissible>Solid</bs-chip>
    <bs-chip color="default-color" pill dismissible>Solid-Pill</bs-chip>
  </div>
  <div class="d-flex justify-content-center">
    <bs-chip color="default-color" outlined dismissible>Outlined</bs-chip>
    <bs-chip color="default-color" outlined pill dismissible>Outlined-Pill</bs-chip>
  </div>
</div>
```
:::


### Controlling dismissible chip {class="mt-lg-5"}

Use the `v-model` directive to create two-way data bindings on the `model-value` 
property as in `v-model="showDismissibleChip"`. This is useful to control the 
dismissible chip, because when the chip is closed, the variable will be updated. 

::: BlockVue {title="Controlling Dismissible Chips Example" file="./docs/components/scripts/chip-2.js"}

```vue
<template>
  <div class="my-demo-wrapper d-flex bg-white rounded-3 p-3 w-100">
    <bs-button 
      color="default-color" 
      style="width: 130px"
      @click="toggleDismissibleChip(showDismissibleChip)"
    >
      {{ showDismissibleChip ? 'Hide' : 'Show' }} chip
    </bs-button>
    <div class="flex-fill text-center">
      <bs-chip 
        v-model="showDismissibleChip" 
        color="default"
        outlined 
        dismissible
      >
        Dismissible chip
      </bs-chip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showDismissibleChip = ref(true);

function toggleDismissibleChip(value: boolean) {
  showDismissibleChip.value = !value;
}
</script>
```
:::

## CSS Variables

<SmallNote color="teal">Added since v2.0.0</SmallNote>

```scss
--md-chip-border-radius: #{$chip-border-radius};
--md-chip-border-width: 0;
--md-chip-font-weight: 400;

--md-chip-gutter-x: #{$padding-sm};
--md-chip-gutter-y: #{$padding-xs};
--md-chip-padding-x: #{$padding-base};
--md-chip-padding-y: 0;

--md-chip-avatar-margin-left: -0.675rem;
--md-chip-avatar-margin-right: #{$padding-sm};
--md-chip-icon-margin-left: #{-$padding-sm};
--md-chip-icon-margin-right: #{$padding-sm};
--md-chip-dismiss-btn-margin-left: #{$padding-sm};
--md-chip-dismiss-btn-margin-right: -0.75rem;

--md-chip-disabled-bg: #{lighten($gray-500, 15%)};
--md-chip-disabled-border-color: #{lighten($gray-500, 8%)};
--md-chip-disabled-color: #{$gray-900};
--md-chip-disabled-opacity: 0.5;
--md-chip-readonly-opacity: 0.65;

--md-chip-bg: #{$chip-bg};
--md-chip-border-color: #{$chip-border};
--md-chip-color: #{$chip-color};
--md-chip-icon-color: #{$chip-icon-color};

--md-chip-active-bg: #{$chip-active-bg};
--md-chip-active-border-color: #{$chip-active-border};
--md-chip-active-color: #{$chip-active-color};
--md-chip-active-icon-color: #{$chip-active-icon};

--md-chip-hover-bg: #{$chip-hover-bg};
--md-chip-hover-border-color: #{$chip-hover-border};
--md-chip-hover-color: #{$chip-hover-color};

--md-chip-focus-border-color: #{$chip-active-border};
--md-chip-focus-shadow-color: #{$chip-focus-box-shadow-rgb};

--md-chip-height: 2rem;
--md-chip-sm-height: 1.56rem;
--md-chip-sm-font-size: 85%;
--md-chip-lg-height: 3rem;
--md-chip-lg-font-size: 120%;

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| active        | `Boolean` | `false` | The component state. |
| active-class  | `String`  |  | Custom css class to apply when the Chip is in active state. See [Color Variants](/reference/color-variants) for more information. |
| color         | `String`  | `'grey'`| The component's color appearance. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used. |
| disabled      | `Boolean` | `false` | The component state. |
| dismissible   | `Boolean` | `false` | When defined, display the close (`x`) button to dismiss/hide the component. |
| href          | `String`  |  | Render as `<a>` element and define its `href` property and apply chip styles to the `<a>` element. |
| icon          | `String`  |  | Icon to display inside the component. Use any valid [Google Material Icon](https://fonts.google.com/icons?icon.set=Material+Icons) name. <p>If the value has suffix `_outlined`, `_filled`, `_rounded`, or `_sharp` then the suffix takes precedence over the `icon-variant` property. <BsBadge color="info">v2.0.4</BsBadge></p> |
| icon-flip     | `String`  |  | Flip the icon. Valid values are: `horizontal`, `vertical`, `both`. |
| icon-position | `String`  | `'left'` | The icon placement. Valid values are: `left` (before text), `right` (after text). |
| icon-pulse    | `Boolean` | `false` | Apply ***pulse*** animation to the icon. |
| icon-rotation | `Number`  |  | Rotate the icon. Valid values are: `90`, `180`, `270`. |
| icon-spin     | `Boolean` | `false` | Apply ***spin*** animation to the icon. |
| icon-variant  | `String`  |  | Use predefined icon style. Valid values are: `outlined`, `filled`, `rounded`, `sharp`. See [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) for details. <BsBadge color="info">v2.0.0</BsBadge> |
| img-circle    | `Boolean` | `false` | Apply **circle** shape to the avatar image. |
| img-padding <Badge type="warning">deprecated</Badge> | `Boolean`  | `true` | Use `img-padding-off` property instead. |
| img-padding-off | `Boolean` | `false` | Adjust avatar size to match the component height by eliminating the margin around the avatar. |
| img-src    | `String`  |    | Enable avatar image and sets the image location url. |
| model-value <Badge type="tip">v-model</Badge> | `Boolean` | `true` | The component state: ***show*** or ***hide***. This property is monitored by `v-model`. <BsBadge color="info">v2.0.0</BsBadge>. |
| outlined   | `Boolean` | `false` | Enable ***outlined*** chip style. |
| pill       | `Boolean` | `false` | Enable ***rounded-pill*** chip style. |
| readonly   | `Boolean` | `false` | The component state. |
| ripple-off | `Boolean` | `false` | Disable _ripple_ effect. Ripple effect is automatically disabled when `click` event or `href` property is not defined. |
| size       | `String`  |   | Create the component with predefined size. Valid values are: `sm` (small), `lg` (large). |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| close  |  | Triggers when the close (`x`) button is clicked or chip has been dismissed. |
| update:active      | (`value: boolean`) | Triggers when the chip is dismissed and update the `active` property. <BsBadge color="info">v2.0.0</BsBadge> |
| update:model-value | (`value: boolean`) | Triggers when the chip is dismissed and update the `model-value` property. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |
| icon    | The outlet slot used to place custom icon. <BsBadge color="info">v2.0.1</BsBadge> |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const chip1Active = ref(false);
const chip2Active = ref(false);
const chip1Icon = ref();
const chip2Icon = ref();
const showDismissibleChip = ref(true);

function toggleChip1(value: boolean) {
  chip1Active.value = !value;
  chip1Icon.value = chip1Active.value ? 'check' : undefined;
}

function toggleChip2(value: boolean) {
  chip2Active.value = !value;
  chip2Icon.value = chip2Active.value ? 'check' : undefined;
}

function toggleDismissibleChip(value: boolean) {
  showDismissibleChip.value = !value;
}

const tabs1active = ref(0);
</script>
