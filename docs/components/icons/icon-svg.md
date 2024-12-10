---
description: A lightweight component which is primarily used to embed SVG icon inline inside an html element and the SVG icon is loaded from Google Material Symbols dynamically. 
--- 

# Icon SVG

::: lead
**BsIconSvg** is a lightweight component which is primarily used to embed SVG icon 
inline inside an html element and the SVG icon is loaded from 
[Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) dynamically. 
:::

<SmallNote color="teal">Updated on v2.1.0</SmallNote>


## Overview

**BsIconSvg** embed SVG inline, inside an html element. This component is also
used internally by [BsIcon](/components/icons/icon) and [BsToggleIcon](/components/icons/toggle-icon).

**BsIconSvg** uses the android icon name as in Google Material Symbols for its icon name.
**BsIconSvg** has six icon variants, namely: _Outlined_ (default), _Rounded_, _Sharp_,
_Outlined Filled_, _Rounded Filled_, and _Sharp Filled_. 

Use suffix `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, 
`_rounded_filled`, or `_sharp_filled` on `icon` property to use the icon variant 
mentioned above, otherwise default icon variant will be used. Suffix `_filled` 
and `_outlined_filled` will display the same icon variant. And you can either use 
suffix `*_filled` or set the `filled` property to `true` to display an icon variant 
with fill style.

`width` and `height` properties are used to set the icon size. And if not set,
the default size will be used.


::: BlockVue {title="Basic IconSVG Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div class="col">
      <h6 class="mb-3">Outlined</h6>
      <div class="mb-3">
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="home" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="lock" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="delete" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="shopping_cart" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="thumb_up" width="36" height="36" />
        </div>
      </div>
      <h6 class="mb-3">Rounded</h6>
      <div class="mb-3">
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="home_rounded" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="lock_rounded" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="delete_rounded" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="shopping_cart_rounded" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="thumb_up_rounded" width="36" height="36" />
        </div>
      </div>
      <h6 class="mb-3">Sharp</h6>
      <div class="mb-3">
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="home_sharp" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="lock_sharp" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="delete_sharp" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="shopping_cart_sharp" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="thumb_up_sharp" width="36" height="36" />
        </div>
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Outlined Filled</h6>
      <div class="mb-3">
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="home_outlined_filled" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="lock_outlined_filled" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="delete_outlined_filled" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="shopping_cart_outlined_filled" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="thumb_up_outlined_filled" width="36" height="36" />
        </div>
      </div>
      <h6 class="mb-3">Rounded Filled</h6>
      <div class="mb-3">
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="home_rounded_filled" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="lock_rounded_filled" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="delete_rounded_filled" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="shopping_cart_rounded_filled" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="thumb_up_rounded_filled" width="36" height="36" />
        </div>
      </div>
      <h6 class="mb-3">Sharp Filled</h6>
      <div class="mb-3">
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="home_sharp_filled" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="lock_sharp_filled" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="delete_sharp_filled" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="shopping_cart_sharp_filled" width="36" height="36" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-svg icon="thumb_up_sharp_filled" width="36" height="36" />
        </div>
      </div>
    </div>
  </div>
</div>
```
:::

<!-- @include: @/components/icon-migration-info.md -->


## Styling an Icon

`<bs-icon-svg>` can be styles with css class or inline style.

::: BlockVue {title="Styling IconSVG Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div class="col">
      <h6 class="mb-3">Outlined</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="home" width="36" height="36" class="text-primary" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="account_circle" width="36" height="36" class="text-primary" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="settings" width="36" height="36" class="text-primary" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="delete" width="36" height="36" class="text-primary" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="shopping_cart" width="36" height="36" class="text-primary" />
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Outlined Filled</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="home_filled" width="36" height="36" class="text-danger" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="account_circle_filled" width="36" height="36" class="text-danger" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="settings_filled" width="36" height="36" class="text-danger" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="delete_filled" width="36" height="36" class="text-danger" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="shopping_cart_filled" width="36" height="36" class="text-danger" />
      </div>
    </div>
  </div>
</div>
```
:::


## Rotating an Icon

Additionally, you can also rotate the icon to some extent. Use `flip` property or `rotation` 
property to rotate the icon, but do not use both property together.

::: BlockVue {title="Rotating IconSVG Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3 text-center">
    <div class="col">
      <h6 class="mb-3">Flip</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="shopping_cart" width="36" height="36" flip="horizontal" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="shopping_cart" width="36" height="36" flip="vertical" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="shopping_cart" width="36" height="36" flip="both" />
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Rotate</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="navigation" width="36" height="36" rotate="90" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="navigation" width="36" height="36" rotate="180" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="navigation" width="36" height="36" rotate="270" />
      </div>
    </div>
  </div>
</div>
```
:::


## Animation

`<bs-icon-svg>` also has built-in animations, which are: _Spin_ and _Pulse_.

::: BlockVue {title="IconSVG Animation Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3 text-center">
    <div class="col">
      <h6 class="mb-3">Spin animation</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="refresh" width="36" height="36" spin />
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Pulse animation</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="token" width="36" height="36" pulse />
      </div>
    </div>
  </div>
</div>

```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| filled   | `Boolean`| `false` | Use [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with fill style variant. <BsBadge color="info">v2.1.0</BsBadge> |
| flip     | `String` |         | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| height   | `Number` | `24`    | The icon's height in pixel. |
| icon <Badge type="danger">required</Badge> | `String` |  | The icon's name. <BsBadge color="info">Updated on v2.1.0</BsBadge> <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, or `_sharp_filled`.</p> |
| pulse    | `Boolean`| `false` | Apply **pulse** animation. |
| rotate   | `Number` |         | Rotate the icon, valid values are: `90`, `180`, `270`. |
| spin     | `Boolean`| `false` | Apply **spin** animation. |
| width    | `Number` | `24`    | The icon's width in pixel. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
