---
description: SvgIcon is a lightweight component which is primarily used to embed SVG icon inline inside an html element and the SVG icon is loaded from Google Material Symbols dynamically. 
--- 

# SVG Icon

::: lead
**BsSvgIcon** is a lightweight component which is primarily used to embed SVG icon 
inline inside an html element and the SVG icon is loaded from 
[Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) dynamically. 
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>


## Overview

**BsSvgIcon** embed SVG inline, inside an html element. This component is also
used internally by [BsIcon](/components/icons/icon) and [BsToggleIcon](/components/icons/toggle-icon).

**BsSvgIcon** uses the android icon name as in Google Material Symbols for its icon name.
**BsSvgIcon** has six icon variants, namely: _Outlined_ (default), _Rounded_, _Sharp_,
_Outlined Filled_, _Rounded Filled_, and _Sharp Filled_. 

Use suffix `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, 
`_rounded_filled`, or `_sharp_filled` on `icon` property to use the icon variant 
mentioned above, otherwise default icon variant will be used. Suffix `_filled` 
and `_outlined_filled` will display the same icon variant. And you can either use 
suffix `*_filled` or set the `filled` property to `true` to display an icon variant 
with fill style.

`width` and `height` properties are used to set the icon size. And if not set,
the default size will be used.


::: BlockVue {title="SvgIcon Overview"}

```vue
<template>
  <div class="demo-wrapper px-2">
    <div class="row row-cols-1 row-cols-md-2 g-5">
      <div class="col">
        <h6 class="mb-3">Outlined</h6>
        <div class="flex md-gap-3 mb-3">
          <bs-svg-icon icon="home" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="lock" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="delete" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="shopping_cart" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="thumb_up" width="36" height="36"></bs-svg-icon>
        </div>
        <h6 class="mb-3">Rounded</h6>
        <div class="flex md-gap-3 mb-3">
          <bs-svg-icon icon="home_rounded" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="lock_rounded" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="delete_rounded" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="shopping_cart_rounded" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="thumb_up_rounded" width="36" height="36"></bs-svg-icon>
        </div>
        <h6 class="mb-3">Sharp</h6>
        <div class="flex md-gap-3">
          <bs-svg-icon icon="home_sharp" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="lock_sharp" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="delete_sharp" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="shopping_cart_sharp" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="thumb_up_sharp" width="36" height="36"></bs-svg-icon>
        </div>
      </div>
      <div class="col">
        <h6 class="mb-3">Outlined Filled</h6>
        <div class="flex md-gap-3 mb-3">
          <bs-svg-icon icon="home_outlined_filled" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="lock_outlined_filled" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="delete_outlined_filled" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="shopping_cart_outlined_filled" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="thumb_up_outlined_filled" width="36" height="36"></bs-svg-icon>
        </div>
        <h6 class="mb-3">Rounded Filled</h6>
        <div class="flex md-gap-3 mb-3">
          <bs-svg-icon icon="home_rounded_filled" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="lock_rounded_filled" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="delete_rounded_filled" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="shopping_cart_rounded_filled" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="thumb_up_rounded_filled" width="36" height="36"></bs-svg-icon>
        </div>
        <h6 class="mb-3">Sharp Filled</h6>
        <div class="flex md-gap-3">
          <bs-svg-icon icon="home_sharp_filled" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="lock_sharp_filled" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="delete_sharp_filled" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="shopping_cart_sharp_filled" width="36" height="36"></bs-svg-icon>
          <bs-svg-icon icon="thumb_up_sharp_filled" width="36" height="36"></bs-svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

```
:::

::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
- Since v2.1.0, [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) are replaced with [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols).
- The `<bs-icon-svg>` tag still works, but has been deprecated since v2.2.0.
:::


## Styling an Icon

`<bs-svg-icon>` can be styles with css class or inline style.

::: BlockVue {title="Styling an SvgIcon"}

```vue
<template>
  <div class="demo-wrapper px-2">
    <div class="row row-cols-1 row-cols-md-2 g-5">
      <div class="col">
        <h6 class="mb-3">Outlined</h6>
        <div class="flex md-gap-3">
          <bs-svg-icon icon="home" width="36" height="36" class="text-primary"></bs-svg-icon>
          <bs-svg-icon icon="account_circle" width="36" height="36" class="text-primary"></bs-svg-icon>
          <bs-svg-icon icon="settings" width="36" height="36" class="text-primary"></bs-svg-icon>
          <bs-svg-icon icon="delete" width="36" height="36" class="text-primary"></bs-svg-icon>
          <bs-svg-icon icon="shopping_cart" width="36" height="36" class="text-primary"></bs-svg-icon>
        </div>
      </div>
      <div class="col">
        <h6 class="mb-3">Outlined Filled</h6>
        <div class="flex md-gap-3">
          <bs-svg-icon icon="home_filled" width="36" height="36" class="text-danger"></bs-svg-icon>
          <bs-svg-icon icon="account_circle_filled" width="36" height="36" class="text-danger"></bs-svg-icon>
          <bs-svg-icon icon="settings_filled" width="36" height="36" class="text-danger"></bs-svg-icon>
          <bs-svg-icon icon="delete_filled" width="36" height="36" class="text-danger"></bs-svg-icon>
          <bs-svg-icon icon="shopping_cart_filled" width="36" height="36" class="text-danger"></bs-svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

```
:::


## Rotating an Icon

Additionally, you can also rotate the icon to some extent. Use `flip` property or `rotation` 
property to rotate the icon, but do not use both property together.

::: BlockVue {title="Rotating an SvgIcon"}

```vue
<template>
  <div class="demo-wrapper px-2">
    <div class="row row-cols-1 row-cols-md-2 g-5">
      <div class="col">
        <h6 class="mb-3">Flip</h6>
        <div class="flex md-gap-3">
          <bs-svg-icon icon="shopping_cart" width="36" height="36" flip="horizontal"></bs-svg-icon>
          <bs-svg-icon icon="shopping_cart" width="36" height="36" flip="vertical"></bs-svg-icon>
          <bs-svg-icon icon="shopping_cart" width="36" height="36" flip="both"></bs-svg-icon>
        </div>
      </div>
      <div class="col">
        <h6 class="mb-3">Rotate</h6>
        <div class="flex md-gap-3">
          <bs-svg-icon icon="navigation" width="36" height="36" rotate="90"></bs-svg-icon>
          <bs-svg-icon icon="navigation" width="36" height="36" rotate="180"></bs-svg-icon>
          <bs-svg-icon icon="navigation" width="36" height="36" rotate="270"></bs-svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

```
:::


## Animation

`<bs-svg-icon>` also has built-in animations, which are: _Spin_ and _Pulse_.

::: BlockVue {title="IconSVG Animation Example"}

```vue
<template>
  <div class="demo-wrapper w-full px-2">
    <div class="row row-cols-1 row-cols-sm-2 g-5">
      <div class="col flex flex-col items-center">
        <h6 class="mb-3">Spin animation</h6>
        <div><bs-svg-icon icon="refresh" width="36" height="36" spin></bs-svg-icon></div>
      </div>
      <div class="col  flex flex-col items-center">
        <h6 class="mb-3">Pulse animation</h6>
        <bs-svg-icon icon="token" width="36" height="36" pulse></bs-svg-icon>
      </div>
    </div>
  </div>
</template>

```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| filled   | `Boolean`| `false` | Use [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with fill style variant. <MdBadge color="info">v2.1.0</MdBadge> |
| flip     | `String` |         | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| height   | `Number` | `24`    | The icon's height in pixel. |
| icon <Badge type="danger">required</Badge> | `String` |  | The icon's name. <MdBadge color="info">Updated in v2.1.0</MdBadge> <div class="pt-3">Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, or `_sharp_filled`.</div> |
| pulse    | `Boolean`| `false` | Apply **pulse** animation. |
| rotate   | `Number` |         | Rotate the icon, valid values are: `90`, `180`, `270`. |
| size     | `Number` |         | Shortcut to create icon with equal height and width. <MdBadge color="info">v2.2.0</MdBadge> |
| spin     | `Boolean`| `false` | Apply **spin** animation. |
| width    | `Number` | `24`    | The icon's width in pixel. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
