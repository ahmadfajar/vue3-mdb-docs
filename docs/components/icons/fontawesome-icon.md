---
description: FontawesomeIcon is small and lightweight component which can be used inside almost any component or html element and the icon is loaded from Font Awesome dynamically. 
--- 

# Font Awesome Icon

::: lead
**BsFontawesomeIcon** is small and a lightweight component. It can be used inside almost
any component or html element. **BsFontawesomeIcon** loads *Font Awesome* free icons dynamically.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>


## Overview

The icon's name used by **BsFontawesomeIcon** is the same as in
[Font Awesome website](https://fontawesome.com/search?ic=free-collection).
**BsFontawesomeIcon** has three icon variants, namely: _Solid_ (default), _Regular_, and _Brands_.

The `size` property is used to set the icon size. And if not set, the default size
will be used.

::: BlockVue {title="FontAwesome Icon Overview"}

```vue
<template>
  <div class="demo-wrapper px-2">
    <div class="row row-cols-1 row-cols-md-2 g-5">
      <div class="col">
        <h6 class="mb-3">Solid</h6>
        <div class="flex items-center md-gap-3">
          <bs-fontawesome-icon icon="house" size="36"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="circle-user" size="36"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="envelope" size="36"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="gift" size="36"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="thumbs-up" size="36"></bs-fontawesome-icon>
        </div>
      </div>
      <div class="col">
        <h6 class="mb-3">Regular</h6>
        <div class="flex items-center md-gap-3">
          <bs-fontawesome-icon icon="house" size="36" variant="regular"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="circle-user" size="36" variant="regular"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="address-book" size="36" variant="regular"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="envelope" size="36" variant="regular"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="thumbs-up" size="36" variant="regular"></bs-fontawesome-icon>
        </div>
      </div>
      <div class="col">
        <h6 class="mb-3">Brands</h6>
        <div class="flex items-center md-gap-3">
          <bs-fontawesome-icon icon="app-store-ios" size="36" variant="brands"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="atlassian" size="36" variant="brands"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="gitlab" size="36" variant="brands"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="facebook" size="36" variant="brands"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="github" size="36" variant="brands"></bs-fontawesome-icon>
        </div>
      </div>
    </div>
  </div>
</template>

```
:::

::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
The `<bs-icon-fontawesome>` tag still works, but has been deprecated since v2.2.0.
:::


## Styling an Icon

`<bs-fontawesome-icon>` can be styles with css class or inline style.

::: BlockVue {title="Styling FontAwesome Icon"}

```vue
<template>
  <div class="demo-wrapper px-2">
    <div class="row row-cols-1 row-cols-md-2 g-5">
      <div class="col">
        <h6 class="mb-3">Solid</h6>
        <div class="flex items-center md-gap-3">
          <bs-fontawesome-icon icon="house" size="36" class="text-purple"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="circle-user" size="36" class="text-purple"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="gear" size="36" class="text-purple"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="trash-can" size="36" class="text-purple"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="cart-shopping" size="36" class="text-purple"></bs-fontawesome-icon>
        </div>
      </div>
      <div class="col">
        <h6 class="mb-3">Regular</h6>
        <div class="flex items-center md-gap-3">
          <bs-fontawesome-icon 
            icon="house" 
            size="36" 
            class="text-primary" 
            variant="regular"
          ></bs-fontawesome-icon>
          <bs-fontawesome-icon
            icon="circle-user"
            size="36"
            class="text-primary"
            variant="regular"
          ></bs-fontawesome-icon>
          <bs-fontawesome-icon 
            icon="address-card" size="36" 
            class="text-primary" 
            variant="regular"
          ></bs-fontawesome-icon>
          <bs-fontawesome-icon
            icon="trash-can" 
            size="36" 
            class="text-primary" 
            variant="regular"
          ></bs-fontawesome-icon>
          <bs-fontawesome-icon
            icon="truck"
            size="36"
            class="text-primary"
            variant="regular"
          ></bs-fontawesome-icon>
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

::: BlockVue {title="Rotating FontAwesome Icon"}

```vue
<template>
  <div class="demo-wrapper px-2">
    <div class="row row-cols-1 row-cols-sm-2 g-5">
      <div class="col">
        <h6 class="mb-3">Flip</h6>
        <div class="flex md-gap-3">
          <bs-fontawesome-icon icon="cart-shopping" size="36" flip="horizontal"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="cart-shopping" size="36" flip="vertical"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="cart-shopping" size="36" flip="both"></bs-fontawesome-icon>
        </div>
      </div>
      <div class="col">
        <h6 class="mb-3">Rotate</h6>
        <div class="flex md-gap-3">
          <bs-fontawesome-icon icon="plane" size="36" rotate="90"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="plane" size="36" rotate="180"></bs-fontawesome-icon>
          <bs-fontawesome-icon icon="plane" size="36" rotate="270"></bs-fontawesome-icon>
        </div>
      </div>
    </div>
  </div>
</template>

```
:::

## Animation

`<bs-fontawesome-icon>` also has built-in animations, which are: _Spin_ and _Pulse_.

::: BlockVue {title="FontAwesome Icon Animation"}

```vue
<template>
  <div class="demo-wrapper w-full px-2">
    <div class="row row-cols-1 row-cols-sm-2 g-4 text-sm-center">
      <div class="col">
        <h6 class="mb-3">Spin animation</h6>
        <bs-fontawesome-icon icon="compass" size="42" variant="regular" spin />
      </div>
      <div class="col">
        <h6 class="mb-3">Pulse animation</h6>
        <bs-fontawesome-icon icon="gear" size="42" pulse />
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
| flip     | `String` |         | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| height   | `Number` | `24`    | The icon's height in pixel. |
| icon <Badge type="danger">required</Badge> | `String` |  | The icon's name. Use any valid icon name from [Font Awesome website](https://fontawesome.com/search?ic=free-collection). |
| pulse    | `Boolean`| `false` | Apply **pulse** animation. |
| rotate   | `Number` |         | Rotate the icon, valid values are: `90`, `180`, `270`. |
| size     | `Number` |         | Shortcut to create icon with equal height and width. |
| spin     | `Boolean`| `false` | Apply **spin** animation. |
| svg-class | `String`|  | Apply custom css class to the svg element. <MdBadge color="info">v2.2.0</MdBadge> |
| variant  | `String` | `'solid'` | Icon style variant, valid values are: `regular`, `solid`, `brands`. <MdBadge color="info">Updated in v2.2.0</MdBadge> |
| version  | `String` | `'7.2.0'` | Font Awesome vendor version. <MdBadge color="info">Updated in v2.2.1</MdBadge> |
| width    | `Number` | `24`      | The icon's width in pixel. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
