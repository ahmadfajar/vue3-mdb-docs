# Icon

::: lead
**BsIcon** is small, and a lightweight component. It can be used inside almost
any component or html element. **BsIcon** loads icon from
[Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) dynamically.
:::


## Overview

The icon's name used by `<bs-icon>` is the same as in Google Material Icons.
`<bs-icon>` has four icon variants: `filled` (*default*), `outlined`, `rounded`, 
and `sharp`. Use `size` property to sets the icon size, otherwise default size will be used.

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVue {title="Basic Icon Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div class="col">
      <h6 class="mb-3">Filled</h6>
      <span class="mx-2"><bs-icon icon="home" size="36" /></span>
      <span class="mx-2"><bs-icon icon="account_circle" size="36" /></span>
      <span class="mx-2"><bs-icon icon="settings" size="36" /></span>
      <span class="mx-2"><bs-icon icon="delete" size="36" /></span>
      <span class="mx-2"><bs-icon icon="shopping_cart" size="36" /></span>
    </div>
    <div class="col">
      <h6 class="mb-3">Outlined</h6>
      <span class="mx-2"><bs-icon icon="home_outlined" size="36" /></span>
      <span class="mx-2"><bs-icon icon="account_circle_outlined" size="36" /></span>
      <span class="mx-2"><bs-icon icon="settings_outlined" size="36" /></span>
      <span class="mx-2"><bs-icon icon="delete_outlined" size="36" /></span>
      <span class="mx-2"><bs-icon icon="shopping_cart_outlined" size="36" /></span>
    </div>
    <div class="col">
      <h6 class="mb-3">Rounded</h6>
      <span class="mx-2"><bs-icon icon="home_rounded" size="36" /></span>
      <span class="mx-2"><bs-icon icon="lock_rounded" size="36" /></span>
      <span class="mx-2"><bs-icon icon="delete_rounded" size="36" /></span>
      <span class="mx-2"><bs-icon icon="shopping_cart_rounded" size="36" /></span>
      <span class="mx-2"><bs-icon icon="thumb_up_rounded" size="36" /></span>
    </div>
    <div class="col">
      <h6 class="mb-3">Sharp</h6>
      <span class="mx-2"><bs-icon icon="home_sharp" size="36" /></span>
      <span class="mx-2"><bs-icon icon="lock_sharp" size="36" /></span>
      <span class="mx-2"><bs-icon icon="delete_sharp" size="36" /></span>
      <span class="mx-2"><bs-icon icon="shopping_cart_sharp" size="36" /></span>
      <span class="mx-2"><bs-icon icon="thumb_up_sharp" size="36" /></span>
    </div>
  </div>
</div>

```
:::


## Styling an Icon

`<bs-icon>` can be styles with css class or inline style.

::: BlockVue {title="Icon Style Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div class="col">
      <h6 class="mb-3">Filled</h6>
      <span class="mx-2"><bs-icon icon="home" size="36" class="text-primary" /></span>
      <span class="mx-2"><bs-icon icon="account_circle" size="36" class="text-primary" /></span>
      <span class="mx-2"><bs-icon icon="settings" size="36" class="text-primary" /></span>
      <span class="mx-2"><bs-icon icon="delete" size="36" class="text-primary" /></span>
      <span class="mx-2"><bs-icon icon="shopping_cart" size="36" class="text-primary" /></span>
    </div>
    <div class="col">
      <h6 class="mb-3">Outlined</h6>
      <span class="mx-2"><bs-icon icon="home_outlined" size="36" class="text-orange" /></span>
      <span class="mx-2"><bs-icon icon="account_circle_outlined" size="36" class="text-orange" /></span>
      <span class="mx-2"><bs-icon icon="settings_outlined" size="36" class="text-orange" /></span>
      <span class="mx-2"><bs-icon icon="delete_outlined" size="36" class="text-orange" /></span>
      <span class="mx-2"><bs-icon icon="shopping_cart_outlined" size="36" class="text-orange" /></span>
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

`<bs-icon>` also has built-in animations, which are: `spin` and `pulse`.

::: BlockVue {title="Icon Animation Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3 text-center">
    <div class="col">
      <h6 class="mb-3">Spin animation</h6>
      <span class="mx-2"><bs-icon icon="shopping_cart" size="42" spin /></span>
    </div>
    <div class="col">
      <h6 class="mb-3">Pulse animation</h6>
      <span class="mx-2"><bs-icon icon="filter_vintage" size="42" pulse /></span>
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
| flip     | `String` |         | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| height   | `Number` | `24`    | The icon's height in pixel. |
| icon <Badge type="danger">required</Badge> | `String` |  | The icon's name. Use any valid [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) name. |
| pulse    | `Boolean`| `false` | Apply **pulse** animation. |
| rotate   | `Number` |         | Rotate the icon, valid values are: `90`, `180`, `270`. <BsBadge color="info">v2.0.0</BsBadge> |
| size     | `Number` |         | Shortcut to create equal height and width. |
| spin     | `Boolean`| `false` | Apply **spin** animation. |
| width    | `Number` | `24`    | The icon's width in pixel. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
