---
outline: [2, 3] 
description: Chip is a component which is used to convey small pieces of information to create arbitrary items, like categories or tags. 
---

# Chip

::: lead
**BsChip** is a component which is used to convey small pieces of information to 
create arbitrary items, like _categories_ or _tags_, help enter information, make 
selections, filter content, or trigger actions.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>


## Overview

**BsChip** can be used like a badge to create arbitrary items, like categories or 
tags, show options for a specific context like make selections, filter content or
triggers action. 

::: BlockVue {title="Chip Overview"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-wrap md-gap-y-2 p-sm-2">
    <bs-chip color="default">Default</bs-chip>
    <bs-chip color="primary">Primary</bs-chip>
    <bs-chip color="secondary">Secondary</bs-chip>
    <bs-chip color="success">Success</bs-chip>
    <bs-chip color="danger">Danger</bs-chip>
    <bs-chip color="warning">Warning</bs-chip>
    <bs-chip color="info">Info</bs-chip>
    <bs-chip color="light">Light</bs-chip>
  </div>
</template>
```
:::

<!-- @include: @/components/contextual-color-info.md -->


## States

`<bs-chip>` component has states: `active`, `disabled` and `readonly`.
Use their respective property to enable the state.

::: BlockVue {title="Chip State"}

```vue
<template>
  <div class="demo-wrapper w-full flex justify-center">
    <bs-chip color="primary" active>Active</bs-chip>
    <bs-chip color="primary" readonly>Readonly</bs-chip>
    <bs-chip color="primary" disabled>Disabled</bs-chip>
  </div>
</template>
```
:::


## Element Type 

The `<bs-chip>` component by default renders a `<div>` element. However, you can 
also render as `<a>` element by providing `href` attribute value.

::: BlockVue {title="Chip Element Type"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-wrap md-gap-y-2 p-sm-2">
    <bs-chip color="default" href="#element-type">Default</bs-chip>
    <bs-chip color="primary" href="#element-type">Primary</bs-chip>
    <bs-chip color="secondary" href="#element-type">Secondary</bs-chip>
    <bs-chip color="success" href="#element-type">Success</bs-chip>
    <bs-chip color="danger" href="#element-type">Danger</bs-chip>
    <bs-chip color="warning" href="#element-type">Warning</bs-chip>
    <bs-chip color="info" href="#element-type">Info</bs-chip>
    <bs-chip color="light" href="#element-type">Light</bs-chip>
  </div>
</template>

```
:::


## Style Variants

You can style the `<bs-chip>` to your own preference or use a style variant 
based on Google **Material Design 3** specifications. 

### Default

::: BlockVue {title="Chip Style Variants - Default"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-wrap md-gap-y-2 p-sm-2">
    <bs-chip color="default">Default</bs-chip>
    <bs-chip color="primary">Primary</bs-chip>
    <bs-chip color="secondary">Secondary</bs-chip>
    <bs-chip color="success">Success</bs-chip>
    <bs-chip color="danger">Danger</bs-chip>
    <bs-chip color="warning">Warning</bs-chip>
    <bs-chip color="info">Info</bs-chip>
    <bs-chip color="light">Light</bs-chip>
  </div>
</template>

```
:::


### Rounded Pill {class="mt-lg-5"}

You can create chip with rounded-pill style by defining the `pill` property explicitly.

::: BlockVue {title="Chip Style Variants - Rounded Pill"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-wrap md-gap-y-2 p-sm-2">
    <bs-chip color="default" pill>Default</bs-chip>
    <bs-chip color="primary" pill>Primary</bs-chip>
    <bs-chip color="secondary" pill>Secondary</bs-chip>
    <bs-chip color="success" pill>Success</bs-chip>
    <bs-chip color="danger" pill>Danger</bs-chip>
    <bs-chip color="warning" pill>Warning</bs-chip>
    <bs-chip color="info" pill>Info</bs-chip>
    <bs-chip color="light" pill>Light</bs-chip>
  </div>
</template>

```
:::

### Outlined {class="mt-lg-5"}

You can create chip with outlined style by defining the `outlined` property explicitly.

::: BlockVue {title="Chip Style Variants - Outlined"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-wrap md-gap-y-2 p-sm-2">
    <bs-chip color="default" outlined>Default</bs-chip>
    <bs-chip color="primary" outlined>Primary</bs-chip>
    <bs-chip color="secondary" outlined>Secondary</bs-chip>
    <bs-chip color="success" outlined>Success</bs-chip>
    <bs-chip color="danger" outlined>Danger</bs-chip>
    <bs-chip color="warning" outlined>Warning</bs-chip>
    <bs-chip color="info" outlined>Info</bs-chip>
    <bs-chip color="light" outlined>Light</bs-chip>
  </div>
</template>

```
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
`outlined` and `pill` property can be combined to create another style variants.
:::


## Sizes 

`<bs-chip>` can be set in different size: `sm` (small), or `lg` (large).

::: BlockVue {title="Chip Size"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-auto g-2 justify-center mb-3">
      <div class="col flex items-center">
        <bs-chip size="sm">Small chip</bs-chip>
      </div>
      <div class="col flex items-center">
        <bs-chip color="default">Standard chip</bs-chip>
      </div>
      <div class="col">
        <bs-chip color="primary" size="lg">Large chip</bs-chip>
      </div>
    </div>
    <div class="row row-cols-auto g-2 justify-center mb-3">
      <div class="col flex items-center">
        <bs-chip size="sm" pill>Small chip</bs-chip>
      </div>
      <div class="col flex items-center">
        <bs-chip color="default" pill>Standard chip</bs-chip>
      </div>
      <div class="col">
        <bs-chip color="primary" size="lg" pill>Large chip</bs-chip>
      </div>
    </div>
    <div class="row row-cols-auto g-2 justify-center">
      <div class="col flex items-center">
        <bs-chip size="sm" outlined>Small chip</bs-chip>
      </div>
      <div class="col flex items-center">
        <bs-chip color="default" outlined>Standard chip</bs-chip>
      </div>
      <div class="col">
        <bs-chip color="primary" size="lg" outlined>Large chip</bs-chip>
      </div>
    </div>
  </div>
</template>

```
:::


## Icon 

`<bs-chip>` can have an icon inside it. The icon can be positioned on the `left` side 
(before text) or on the `right` side (after text) using `icon-position` property.

Use `icon` property to display an icon and sets the value to a valid android icon 
name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon variant. 

Beside using suffix, property `icon-variant` can also be used to set the icon variant. 
Valid values are: `outlined` (_default_), `rounded`, `sharp`, `filled`, `outlined_filled`, 
`rounded_filled`, and `sharp_filled`. Suffix will take precedence over `icon-variant` property.

Additionally custom icon can also be displayed using the `icon` slot and the 
`icon` property must be omitted. 

::: BlockVue {title="Chip with Icon"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-auto g-2 justify-center mb-3">
      <div class="col flex items-center">
        <bs-chip size="sm" icon="check">
          Small chip
        </bs-chip>
      </div>
      <div class="col flex items-center">
        <bs-chip color="default" icon="help">
          Standard chip
        </bs-chip>
      </div>
      <div class="col">
        <bs-chip color="primary" size="lg" icon="notifications">
          Large chip
        </bs-chip>
      </div>
    </div>
    <div class="row row-cols-auto g-2 justify-center mb-3">
      <div class="col flex items-center">
        <bs-chip size="sm" icon="check" icon-position="right" pill>
          Small chip
        </bs-chip>
      </div>
      <div class="col flex items-center">
        <bs-chip color="default" icon="help" icon-position="right" pill>
          Standard chip
        </bs-chip>
      </div>
      <div class="col">
        <bs-chip color="primary" size="lg" icon="notifications" icon-position="right" pill>
          Large chip
        </bs-chip>
      </div>
    </div>
    <div class="row row-cols-auto g-2 justify-center">
      <div class="col flex items-center">
        <bs-chip size="sm" icon="check" outlined>
          Small chip
        </bs-chip>
      </div>
      <div class="col flex items-center">
        <bs-chip color="default" icon="help_outline" icon-variant="outlined" outlined>
          Standard chip
        </bs-chip>
      </div>
      <div class="col">
        <bs-chip color="primary" size="lg" icon="notifications_outlined" outlined>
          Large chip
        </bs-chip>
      </div>
    </div>
  </div>
</template>

```
:::

<!-- @include: @/components/icon-migration-info.md -->


### Rotating an icon {class="mt-lg-5"}

Additionally, you can also rotate the icon to some extent. Use `icon-flip` property or `icon-rotation` 
property to rotate the icon, but do not use both property together.

::: BlockVue {title="Chip with Rotated Icon"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-auto justify-center g-2 mb-2">
      <div class="col text-center">
        <bs-chip icon="shopping_cart" icon-flip="horizontal">
          Flip Horizontal
        </bs-chip>
      </div>
      <div class="col text-center">
        <bs-chip color="default" icon="shopping_cart" icon-flip="vertical">
          Flip Vertical
        </bs-chip>
      </div>
      <div class="col text-center">
        <bs-chip color="primary" icon="shopping_cart" icon-flip="both">
          Flip Both
        </bs-chip>
      </div>
    </div>
    <div class="row row-cols-auto justify-center g-2">
      <div class="col text-center">
        <bs-chip icon="navigation" icon-rotation="90">
          Rotate 90&deg;
        </bs-chip>
      </div>
      <div class="col text-center">
        <bs-chip color="default" icon="navigation" icon-rotation="180">
          Rotate 180&deg;
        </bs-chip>
      </div>
      <div class="col text-center">
        <bs-chip color="primary" icon="navigation" icon-rotation="270">
          Rotate 270&deg;
        </bs-chip>
      </div>
    </div>
  </div>
</template>

```
:::


### Animating an icon {class="mt-lg-5"}

`<bs-chip>` also has built-in animations for icon, which are: `spin` and `pulse`.
Example below, demonstrate the built-in icon animation and the use of `icon` slot.

::: BlockVue {title="Chip with Animated Icon"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-auto justify-center g-2 mb-2">
      <div class="col text-center">
        <bs-chip color="default" icon="refresh" icon-spin>
          Spin Animation
        </bs-chip>
      </div>
      <div class="col text-center">
        <bs-chip color="default" icon="star" icon-pulse>
          Pulse Animation
        </bs-chip>
      </div>
    </div>
    <div class="row row-cols-auto justify-center g-2">
      <div class="col text-center">
        <bs-chip color="default">
          <template #icon>
            <bs-spinner-icon size="18" spin></bs-spinner-icon>
          </template>
          Custom Icon-Spin
        </bs-chip>
      </div>
      <div class="col text-center">
        <bs-chip color="default" icon-position="right">
          <template #icon>
            <bs-spinner-icon size="18" pulse></bs-spinner-icon>
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

::: BlockVue {title="Chip with Avatar"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-auto g-2 justify-center mb-3">
      <div class="col flex items-center">
        <bs-chip color="default" size="sm" img-src="/img/1.jpg">
          Small chip
        </bs-chip>
      </div>
      <div class="col flex items-center">
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
    <div class="row row-cols-auto g-2 justify-center mb-3">
      <div class="col flex items-center">
        <bs-chip color="default" size="sm" img-src="/img/1.jpg" pill>
          Small chip
        </bs-chip>
      </div>
      <div class="col flex items-center">
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
    <div class="row row-cols-auto g-2 justify-center mb-3">
      <div class="col flex items-center">
        <bs-chip color="default" size="sm" img-src="/img/1.jpg" outlined>
          Small chip
        </bs-chip>
      </div>
      <div class="col flex items-center">
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
    <div class="row row-cols-auto g-2 justify-center">
      <div class="col flex items-center">
        <bs-chip color="default" size="sm" img-src="/img/1.jpg" outlined pill>
          Small chip
        </bs-chip>
      </div>
      <div class="col flex items-center">
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
</template>

```
:::

### Adjusting avatar size {class="mt-lg-5"}

Avatar size can be adjusted to match the chip height by eliminating the margin 
around the avatar. This can be achieved by defining the `img-padding-off` 
property explicitly. 

::: BlockVue {title="Chip's Avatar Example"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-auto g-2 justify-center mb-3">
      <div class="col flex items-center">
        <bs-chip color="default" size="sm" img-src="/img/1.jpg" img-padding-off>
          Small chip
        </bs-chip>
      </div>
      <div class="col flex items-center">
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
    <div class="row row-cols-auto g-2 justify-center mb-3">
      <div class="col flex items-center">
        <bs-chip color="default" size="sm" img-src="/img/1.jpg" img-padding-off pill>
          Small chip
        </bs-chip>
      </div>
      <div class="col flex items-center">
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
    <div class="row row-cols-auto g-2 justify-center mb-3">
      <div class="col flex items-center">
        <bs-chip color="default" size="sm" img-src="/img/1.jpg" img-padding-off outlined>
          Small chip
        </bs-chip>
      </div>
      <div class="col flex items-center">
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
    <div class="row row-cols-auto g-2 justify-center">
      <div class="col flex items-center">
        <bs-chip color="default" size="sm" img-src="/img/1.jpg" img-padding-off outlined pill>
          Small chip
        </bs-chip>
      </div>
      <div class="col flex items-center">
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
<template>

```
:::


## Dropdown Menus

`<bs-chip>` component can also be placed inside `<bs-dropdown-menu>` component.

::: BlockVue {title="Chip with Dropdown Menu"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="flex justify-center md-gap-2 mb-2">
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
        <bs-chip color="default" icon="shopping_cart_outlined">
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
    <div class="flex justify-center md-gap-2">
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
        <bs-chip color="default" icon="shopping_cart_outlined" outlined>
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

::: BlockVue {title="Clickable Chips" file="./docs/components/chips/js/chip-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full text-center">
    <bs-chip 
      :active="chip1Active" 
      :icon="chip1Icon" 
      color="default" 
      @click="toggleChip1(chip1Active)"
    >
      Solid
    </bs-chip>
    <bs-chip 
      :active="chip2Active" 
      :icon="chip2Icon" 
      color="default"
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

::: BlockVue {title="Dismissible Chips"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="flex justify-center mb-2">
      <bs-chip color="default" dismissible>Solid</bs-chip>
      <bs-chip color="default" pill dismissible>Solid-Pill</bs-chip>
    </div>
    <div class="flex justify-center">
      <bs-chip color="default" outlined dismissible>Outlined</bs-chip>
      <bs-chip color="default" outlined pill dismissible>Outlined-Pill</bs-chip>
    </div>
  </div>
</template>

```
:::


### Controlling dismissible chip {class="mt-lg-5"}

Use the `v-model` directive to create two-way data bindings on the `model-value` 
property as in `v-model="showDismissibleChip"`. This is useful to control the 
dismissible chip, because when the chip is closed, the variable will be updated. 

::: BlockVue {title="Controlling Dismissible Chips" file="./docs/components/chips/js/chip-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex p-sm-2">
    <bs-button 
      color="default" 
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

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-chip` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss 
.md-chip {
  --md-chip-border-width: thin;
  --md-chip-font-weight: 400;

  --md-chip-disabled-bg: #{$disabled-bg};
  --md-chip-disabled-border-color: #{$disabled-border-color};
  --md-chip-disabled-color: #{colors.$gray-800};
  --md-chip-disabled-icon-color: #{colors.$gray-500};
  --md-chip-disabled-opacity: 0.5;
  --md-chip-readonly-opacity: 0.65;

  --md-chip-gutter-x: #{vars.$padding-sm};
  --md-chip-gutter-y: #{vars.$padding-xs};

  --md-chip-avatar-margin-left: #{(vars.$padding-sm + 0.175) * -1};
  --md-chip-avatar-margin-right: #{vars.$padding-sm};
  --md-chip-icon-margin-left: #{vars.$padding-sm * -1};
  --md-chip-icon-margin-right: #{vars.$padding-sm};
  --md-chip-dismiss-btn-margin-left: #{vars.$padding-sm};
  --md-chip-dismiss-btn-margin-right: #{(vars.$padding-sm + 0.25) * -1};

  --md-chip-sm-border-radius: #{vars.$radius-sm};
  --md-chip-sm-font-size: #{vars.$chip-sm-font-size};
  --md-chip-sm-height: #{vars.$chip-sm-height};
  --md-chip-sm-padding-x: 0.75rem;
  --md-chip-sm-padding-y: 0;

  --md-chip-md-border-radius: #{vars.$radius-md};
  --md-chip-md-font-size: #{vars.$chip-md-font-size};
  --md-chip-md-height: #{vars.$chip-md-height};
  --md-chip-md-padding-x: #{vars.$padding-md};
  --md-chip-md-padding-y: 0;

  --md-chip-lg-border-radius: #{vars.$radius-lg};
  --md-chip-lg-font-size: #{vars.$chip-lg-font-size};
  --md-chip-lg-height: #{vars.$chip-lg-height};
  --md-chip-lg-padding-x: #{vars.$padding-lg};
  --md-chip-lg-padding-y: 0;

  --md-chip-bg: #{$bg-color};
  --md-chip-color: #{$color};
  --md-chip-border-color: #{$border-color};
  --md-chip-icon-color: #{$icon-color};
  --md-chip-hover-bg: #{$hover-bg};
  --md-chip-hover-color: #{$hover-color};
  --md-chip-hover-border-color: #{$hover-border};
  --md-chip-active-bg: #{$active-bg};
  --md-chip-active-color: #{$active-color};
  --md-chip-active-border-color: #{$active-bg};
  --md-chip-active-icon-color: #{$active-icon-color};
  --md-chip-focus-border-color: #{$focus-border};
  --md-chip-focus-shadow-color: #{$box-shadow-color};
}

```

### SASS mixins

Sometimes, simply creating a new chip color can be overwhelming, as there are 
too many CSS variables to modify. For cases like this, Vue MDBootstrap provides 
several SASS mixins to help you create new chip style variants.

::: code-group

```scss [Light Theme]
use 'vue-mdbootstrap/scss/mixins/chip';

@include chip.make-default-variant-light($name, $color);
@include chip.make-outline-variant-light($name, $color);

```

```scss [Dark Theme]
use 'vue-mdbootstrap/scss/mixins/chip';

@include chip.make-default-variant-dark($name, $color);
@include chip.make-outline-variant-dark($name, $color);

```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| active        | `Boolean` | `false` | The component state. |
| active-class  | `String`  |  | Custom css class to apply when the Chip is in active state. See [Color Variants](/reference/colors) for more information. |
| close-button-color | `String` | | Apply custom color to the **close button**. <MdBadge color="info">v2.2.0</MdBadge> <br/><br/> Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`. `light` and `dark`. |
| color         | `String`  | `'secondary'`| The component's color appearance. <MdBadge color="info">Updated in v2.2.0</MdBadge> <br/><br/> Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info` and `light`. |
| disabled      | `Boolean` | `false` | The component state. |
| dismissible   | `Boolean` | `false` | When defined, display the close (`x`) button to dismiss/hide the component. |
| href          | `String`  |  | Render as `<a>` element and define its `href` property and apply chip styles to the `<a>` element. |
| icon          | `String`  |  | <div style="min-width:425px"> Icon to display inside the component. <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `icon-variant` property. </div> |
| icon-flip     | `String`  |  | Flip the icon. Valid values are: `horizontal`, `vertical`, `both`. |
| icon-position | `String`  | `'left'` | The icon placement. Valid values are: `left` (before text), `right` (after text). <MdBadge color="info">v2.0.3</MdBadge> |
| icon-pulse    | `Boolean` | `false` | Apply ***pulse*** animation to the icon. |
| icon-rotation | `Number`  |  | Rotate the icon. Valid values are: `90`, `180`, `270`. |
| icon-spin     | `Boolean` | `false` | Apply ***spin*** animation to the icon. |
| icon-variant  | `String`  | `'outlined'` | Use predefined icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <br /><br />See [Icon](#icon) section for details. |
| img-circle    | `Boolean` | `false` | Apply **circle** shape to the avatar image. |
| img-padding-off | `Boolean` | `false` | Adjust avatar size to match the component height by eliminating the margin around the avatar. <MdBadge color="info">v2.0.4</MdBadge> |
| img-src    | `String`  |    | Enable avatar image and sets the image location url. |
| model-value <Badge type="tip">v-model</Badge> | `Boolean` | `true` | The component state: ***show*** or ***hide***. This property is monitored by `v-model`. <MdBadge color="info">v2.0.0</MdBadge>. |
| outlined   | `Boolean` | `false` | Enable ***outlined*** chip style. |
| pill       | `Boolean` | `false` | Enable ***rounded-pill*** chip style. |
| readonly   | `Boolean` | `false` | The component state. <MdBadge color="info">v2.0.3</MdBadge> |
| ripple-off | `Boolean` | `false` | Disable _ripple_ effect. Ripple effect is automatically disabled when `click` event or `href` property is not defined. |
| size       | `String`  |   | Create the component with predefined size. Valid values are: `sm` (small), `lg` (large). |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| close  |  | Triggers when the close (`x`) button is clicked or chip has been dismissed. |
| update:active      | ( value:`Boolean`) | Triggers when the chip is dismissed and update the `active` property. <MdBadge color="info">v2.0.0</MdBadge> |
| update:model-value | ( value:`Boolean`) | Triggers when the chip is dismissed and update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |
| icon    | The outlet slot used to place custom icon. <MdBadge color="info">v2.0.1</MdBadge> |

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
