# Icon SVG

::: lead
**BsIconSvg** is a lightweight component that load an icon from
[Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) dynamically.
:::


## Overview

`<bs-icon-svg-svg>` embed SVG inline, inside an html element. This component is also
used internally by [BsIcon](/components/icon) and [BsToggleIcon](/components/toggle-icon).

`<bs-icon-svg-svg>` use icon's name as in
[Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons).
`<bs-icon-svg-svg>` has four icon variants: `filled` (_default_), `outlined`, `rounded`,
and `sharp`. Use `width` and `height` property to sets the icon size, otherwise 
default size will be used.

<SmallNote color="teal">Added since v2.0.0</SmallNote>

::: BlockVue {title="Basic IconSVG Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div class="col">
      <h6 class="mb-3">Filled</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="home" width="36" height="36" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="account_circle" width="36" height="36" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="settings" width="36" height="36" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="delete" width="36" height="36" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="shopping_cart" width="36" height="36" />
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Outlined</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="home_outlined" width="36" height="36" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="account_circle_outlined" width="36" height="36" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="settings_outlined" width="36" height="36" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="delete_outlined" width="36" height="36" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="shopping_cart_outlined" width="36" height="36" />
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Rounded</h6>
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
    <div class="col">
      <h6 class="mb-3">Sharp</h6>
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
</div>
```
:::


## Styling an Icon

`<bs-icon-svg>` can be styles with css class or inline style.

::: BlockVue {title="Styling IconSVG Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div class="col">
      <h6 class="mb-3">Filled</h6>
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
      <h6 class="mb-3">Outlined</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="home_outlined" width="36" height="36" class="text-danger" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="account_circle_outlined" width="36" height="36" class="text-danger" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="settings_outlined" width="36" height="36" class="text-danger" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="delete_outlined" width="36" height="36" class="text-danger" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="shopping_cart_outlined" width="36" height="36" class="text-danger" />
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

`<bs-icon-svg>` also has built-in animations, which are: `spin` and `pulse`.

::: BlockVue {title="Icon Animation Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3 text-center">
    <div class="col">
      <h6 class="mb-3">Spin animation</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="shopping_cart" width="36" height="36" spin />
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Pulse animation</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-svg icon="filter_vintage" width="36" height="36" pulse />
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
| flip     | `String` |         | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| height   | `Number` | `24`    | The icon's height in pixel. |
| icon <Badge type="danger">required</Badge> | `String` |  | The icon's name. Use any valid [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) name. |
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
