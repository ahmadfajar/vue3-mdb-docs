# Icon

::: lead
**BsIcon** is small, and a lightweight component. It can be used inside almost
any component or html element. **BsIcon** loads icon from
[Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) dynamically.
:::

<SmallNote color="teal">Updated on v2.1.0</SmallNote>


## Overview

**BsIcon** uses the android icon name as in Google Material Symbols for its icon name.
**BsIcon** has six icon variants, namely: _Outlined_ (default), _Rounded_, _Sharp_,
_Outlined Filled_, _Rounded Filled_, and _Sharp Filled_. 

Use suffix `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, 
`_rounded_filled`, or `_sharp_filled` on `icon` property to use the icon variant 
mentioned above, otherwise default icon variant will be used. Suffix `_filled` 
and `_outlined_filled` will display the same icon variant. And you can either use 
suffix `*_filled` or set the `filled` property to `true` to display an icon variant 
with fill style.

The `size` property is used to set the icon size. And if not set, the default size 
will be used.


::: BlockVue {title="Basic Icon Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div class="col">
      <h6 class="mb-3">Outlined</h6>
      <div class="mb-3">
        <span class="mx-2"><bs-icon icon="home" size="36" /></span>
        <span class="mx-2"><bs-icon icon="lock" size="36" /></span>
        <span class="mx-2"><bs-icon icon="delete" size="36" /></span>
        <span class="mx-2"><bs-icon icon="shopping_cart" size="36" /></span>
        <span class="mx-2"><bs-icon icon="thumb_up" size="36" /></span>
      </div>
      <h6 class="mb-3">Rounded</h6>
      <div class="mb-3">
        <span class="mx-2"><bs-icon icon="home_rounded" size="36" /></span>
        <span class="mx-2"><bs-icon icon="lock_rounded" size="36" /></span>
        <span class="mx-2"><bs-icon icon="delete_rounded" size="36" /></span>
        <span class="mx-2"><bs-icon icon="shopping_cart_rounded" size="36" /></span>
        <span class="mx-2"><bs-icon icon="thumb_up_rounded" size="36" /></span>
      </div>
      <h6 class="mb-3">Sharp</h6>
      <div>
        <span class="mx-2"><bs-icon icon="home_sharp" size="36" /></span>
        <span class="mx-2"><bs-icon icon="lock_sharp" size="36" /></span>
        <span class="mx-2"><bs-icon icon="delete_sharp" size="36" /></span>
        <span class="mx-2"><bs-icon icon="shopping_cart_sharp" size="36" /></span>
        <span class="mx-2"><bs-icon icon="thumb_up_sharp" size="36" /></span>
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Outlined Filled</h6>
      <div class="mb-3">
        <span class="mx-2"><bs-icon icon="home_outlined_filled" size="36" /></span>
        <span class="mx-2"><bs-icon icon="lock_outlined_filled" size="36" /></span>
        <span class="mx-2"><bs-icon icon="delete_outlined_filled" size="36" /></span>
        <span class="mx-2"><bs-icon icon="shopping_cart_outlined_filled" size="36" /></span>
        <span class="mx-2"><bs-icon icon="thumb_up_outlined_filled" size="36" /></span>
      </div>
      <h6 class="mb-3">Rounded Filled</h6>
      <div class="mb-3">
        <span class="mx-2"><bs-icon icon="home_rounded_filled" size="36" /></span>
        <span class="mx-2"><bs-icon icon="lock_rounded_filled" size="36" /></span>
        <span class="mx-2"><bs-icon icon="delete_rounded_filled" size="36" /></span>
        <span class="mx-2"><bs-icon icon="shopping_cart_rounded_filled" size="36" /></span>
        <span class="mx-2"><bs-icon icon="thumb_up_rounded_filled" size="36" /></span>
      </div>
      <h6 class="mb-3">Sharp Filled</h6>
      <div>
        <span class="mx-2"><bs-icon icon="home_sharp_filled" size="36" /></span>
        <span class="mx-2"><bs-icon icon="lock_sharp_filled" size="36" /></span>
        <span class="mx-2"><bs-icon icon="delete_sharp_filled" size="36" /></span>
        <span class="mx-2"><bs-icon icon="shopping_cart_sharp_filled" size="36" /></span>
        <span class="mx-2"><bs-icon icon="thumb_up_sharp_filled" size="36" /></span>
      </div>
    </div>
  </div>
</div>

```
:::

<!-- @include: @/components/icon-migration-info.md -->


## Styling an Icon

`<bs-icon>` can be styles with css class or inline style.

::: BlockVue {title="Icon Style Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div class="col">
      <h6 class="mb-3">Outlined</h6>
      <span class="mx-2"><bs-icon icon="home" size="36" class="text-purple" /></span>
      <span class="mx-2"><bs-icon icon="account_circle" size="36" class="text-purple" /></span>
      <span class="mx-2"><bs-icon icon="settings" size="36" class="text-purple" /></span>
      <span class="mx-2"><bs-icon icon="delete" size="36" class="text-purple" /></span>
      <span class="mx-2"><bs-icon icon="shopping_cart" size="36" class="text-purple" /></span>
    </div>
    <div class="col">
      <h6 class="mb-3">Outlined Filled</h6>
      <span class="mx-2"><bs-icon icon="home_filled" size="36" class="text-primary" /></span>
      <span class="mx-2"><bs-icon icon="account_circle_filled" size="36" class="text-primary" /></span>
      <span class="mx-2"><bs-icon icon="settings_filled" size="36" class="text-primary" /></span>
      <span class="mx-2"><bs-icon icon="delete_filled" size="36" class="text-primary" /></span>
      <span class="mx-2"><bs-icon icon="shopping_cart_filled" size="36" class="text-primary" /></span>
    </div>
  </div>
</div>

```
:::


## Rotating an Icon

Additionally, you can also rotate the icon to some extent. Use `flip` property or `rotation` 
property to rotate the icon, but do not use both property together.

::: BlockVue {title="Rotating Icon Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3 text-center">
    <div class="col">
      <h6 class="mb-3">Flip</h6>
      <span class="mx-2"><bs-icon icon="shopping_cart" size="36" flip="horizontal" /></span>
      <span class="mx-2"><bs-icon icon="shopping_cart" size="36" flip="vertical" /></span>
      <span class="mx-2"><bs-icon icon="shopping_cart" size="36" flip="both" /></span>
    </div>
    <div class="col">
      <h6 class="mb-3">Rotate</h6>
      <span class="mx-2"><bs-icon icon="navigation" size="36" rotate="90" /></span>
      <span class="mx-2"><bs-icon icon="navigation" size="36" rotate="180" /></span>
      <span class="mx-2"><bs-icon icon="navigation" size="36" rotate="270" /></span>
    </div>
  </div>
</div>

```
:::


## Animation

`<bs-icon>` also has built-in animations, which are: _Spin_ and _Pulse_.

::: BlockVue {title="Icon Animation Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3 text-center">
    <div class="col">
      <h6 class="mb-3">Spin animation</h6>
      <span class="mx-2"><bs-icon icon="refresh" size="42" spin /></span>
    </div>
    <div class="col">
      <h6 class="mb-3">Pulse animation</h6>
      <span class="mx-2"><bs-icon icon="settings" size="42" pulse /></span>
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
| rotate   | `Number` |         | Rotate the icon, valid values are: `90`, `180`, `270`. <BsBadge color="info">v2.0.0</BsBadge> |
| size     | `Number` |         | Shortcut to create icon with equal height and width. |
| spin     | `Boolean`| `false` | Apply **spin** animation. |
| width    | `Number` | `24`    | The icon's width in pixel. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
