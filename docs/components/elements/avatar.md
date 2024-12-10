---
outline: [2, 3] 
description: A component which are typically used to display a user profile as a picture, icon, or short text. 
---

# Avatar


::: lead
**BsAvatar** is a component which are typically used to display a user profile as a picture, icon, or 
short text. The **BsAvatar** component provides several properties for customizing its appearance such 
as size and roundness.
:::


## Overview

**BsAvatar** is a lightweight component, which render inline by default, so that are vertically 
centered beside any adjoining plain text. It also can be used as children of other components.

::: BlockVue {title="Basic Avatar Example"}

```html
<div class="my-demo-wrapper row row-cols-auto">
  <div class="col">
    <bs-avatar img-src="/img/kitty-2.jpg" />
  </div>
  <div class="col">
    <bs-avatar class="bg-teal text-white" icon="person" />
  </div>
  <div class="col">
    <bs-avatar class="bg-grey-600 text-white" style="font-size: 150%" text="BS" />
  </div>
</div>
```
:::


## Styling

### Shape

`<bs-avatar>` component comes with three predefined shape style: *Circle*, *Rounded* 
and *Square* (default). Example below will shows you how to enable *Circle* and *Rounded* shape.

::: BlockVue {title="Styling Avatar Example"}

```html
<div class="my-demo-wrapper flex-column">
  <div class="row row-cols-auto mb-3">
    <div class="col">
      <bs-avatar img-src="/img/kitty-2.jpg" rounded />
    </div>
    <div class="col">
      <bs-avatar class="bg-deep-purple darken-1 text-white" icon="person" rounded />
    </div>
    <div class="col">
      <bs-avatar class="bg-grey-600 text-white" style="font-size: 150%" text="BS" rounded />
    </div>
  </div>
  <div class="row row-cols-auto">
    <div class="col">
      <bs-avatar img-src="/img/kitty-2.jpg" circle />
    </div>
    <div class="col">
      <bs-avatar class="bg-deep-purple darken-1 text-white" icon="person" circle />
    </div>
    <div class="col">
      <bs-avatar class="bg-grey-600 text-white" style="font-size: 125%" text="BS" circle />
    </div>
  </div>
</div>
```
:::


### Border {class="mt-lg-5"}

`<bs-avatar>` can also have border. Use `border` property and `border-color` property 
to adjust border thickness and its color. 

<SmallNote color="teal">Added since v2.0.3</SmallNote>

::: BlockVue {title="Styling Avatar Example"}

```html
<div class="my-demo-wrapper flex-column">
  <div class="row row-cols-auto mb-3">
    <div class="col">
      <bs-avatar img-src="/img/kitty-2.jpg" border="1px" class="text-white" rounded />
    </div>
    <div class="col">
      <bs-avatar border="1px" class="bg-deep-purple darken-1 text-white" icon="person" rounded />
    </div>
    <div class="col">
      <bs-avatar
        border="1px"
        class="bg-grey-600 text-white"
        style="font-size: 150%"
        text="BS"
        rounded
      />
    </div>
  </div>
  <div class="row row-cols-auto">
    <div class="col">
      <bs-avatar img-src="/img/kitty-2.jpg" border="2px" border-color="danger" circle />
    </div>
    <div class="col">
      <bs-avatar
        border="2px"
        border-color="amber"
        class="bg-deep-purple darken-1 text-white"
        icon="person"
        circle
      />
    </div>
    <div class="col">
      <bs-avatar
        border="3px"
        border-color="warning"
        class="bg-grey-600 text-white"
        style="font-size: 125%"
        text="BS"
        circle
      />
    </div>
  </div>
</div>

```
:::


## Sizes

By default `<bs-avatar>` size is `48px`. You can change the size of the `<bs-avatar>` by changing 
the `size` property explicitly. Numbers will get converted to pixel. Any other value must include 
the units (such as `px`, `em`, or `rem`). You can also create an avatar with different height and 
width by explicitly define the `height` and `width` property.

<SmallNote color="teal">Updated on v2.0.0</SmallNote>


::: BlockVue {title="Sizing Avatar Example"}

```html
<div class="my-demo-wrapper row row-cols-auto">
  <div class="col">
    <bs-avatar img-src="/img/kitty-2.jpg" size="4rem" circle />
  </div>
  <div class="col">
    <bs-avatar img-src="/img/kitty-1.jpg" width="4.5rem" height="4rem" rounded />
  </div>
  <div class="col">
    <bs-avatar class="bg-deep-purple darken-1 text-white" icon="person" size="4rem" circle />
  </div>
  <div class="col">
    <bs-avatar
      class="bg-grey-600 text-white"
      style="font-size: 185%"
      size="4rem"
      text="BS"
      circle
    />
  </div>
</div>
```
:::


## Animation 

You can apply animation such as _spin_ or _pulse_ on avatar icon. Because 
actually **BsAvatar** uses [BsIcon](/components/icons/icon) internally.

::: BlockVue {title="Animate Avatar's Icon Example" file="./docs/components/scripts/avatar.js"}

```vue
<template>
  <div class="my-demo-wrapper row row-cols-auto" style="color: var(--vp-c-neutral)">
    <div class="col text-center" style="min-width: 180px">
      <bs-avatar
        :icon-spin="isSpin"
        class="bg-deep-orange darken-3 text-white"
        icon="cached"
        size="56"
        circle
      ></bs-avatar>
      <bs-switch
        v-model="isSpin"
        :value="true"
        color="indigo"
        class="mt-2"
        checked-icon
        inset-outlined
      >
        Spin {{ isSpin ? 'OFF' : 'ON' }}
      </bs-switch>
    </div>
    <div class="col text-center" style="min-width: 180px">
      <bs-avatar
        :icon-pulse="isPulse"
        class="bg-teal text-white"
        icon="rotate_right"
        size="56"
        circle
      ></bs-avatar>
      <bs-switch
        v-model="isPulse"
        :value="true"
        color="indigo"
        class="mt-2"
        checked-icon
        inset-outlined
      >
        Pulse {{ isPulse ? 'OFF' : 'ON' }}
      </bs-switch>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isSpin = ref(false);
const isPulse = ref(false);
</script>
```
:::


## Usage Example

The following is an example that demonstrate more advanced use of the `<bs-avatar>`.

### Inside Other Component  

`<bs-avatar>` can also be used inside other component. Example below, shows you how to
use `<bs-avatar>` inside **BsListTile** component.

::: BlockVue {title="Avatar Inside Other Component" file="./docs/components/scripts/avatar.js"}

```html
<div class="my-demo-wrapper" style="max-width: 500px">
  <bs-list-view class="border rounded-3">
    <bs-list-tile>
      <bs-list-tile-leading size="42">
        <bs-avatar img-src="/img/kitty-2.jpg" size="40" circle />
      </bs-list-tile-leading>
      <bs-list-tile-content>
        <bs-list-tile-title>Avatar using external image</bs-list-tile-title>
      </bs-list-tile-content>
      <bs-list-tile-action center>
        <bs-badge type="pill" color="info">22</bs-badge>
      </bs-list-tile-action>
    </bs-list-tile>
    <bs-divider></bs-divider>
    <bs-list-tile>
      <bs-list-tile-leading size="42">
        <bs-avatar class="bg-teal text-white" size="40" icon="folder_shared" circle />
      </bs-list-tile-leading>
      <bs-list-tile-content>
        <bs-list-tile-title>Avatar using Material Icon</bs-list-tile-title>
      </bs-list-tile-content>
      <bs-list-tile-action center>
        <bs-badge type="pill" color="info">8</bs-badge>
      </bs-list-tile-action>
    </bs-list-tile>
    <bs-divider></bs-divider>
    <bs-list-tile>
      <bs-list-tile-leading size="42">
        <bs-avatar class="bg-deep-purple text-white" size="40" text="BS" circle />
      </bs-list-tile-leading>
      <bs-list-tile-content>
        <bs-list-tile-title>This avatar created using ShortText</bs-list-tile-title>
      </bs-list-tile-content>
      <bs-list-tile-action center>
        <bs-badge type="pill" color="info">5</bs-badge>
      </bs-list-tile-action>
    </bs-list-tile>
  </bs-list-view>
</div>
```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property      | Type        | Default  | Description |
|---------------|-------------|----------|-------------|
| border        | `String`    |          | Apply border to the component. <BsBadge color="info">v2.0.3</BsBadge> |
| border-color  | `String`    |          | The component border's color. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) and [Material Color](/reference/color-variants#material-colors) variants can be used. <BsBadge color="info">v2.0.3</BsBadge> |
| circle        | `Boolean`   | `false`  | Create avatar with **circle** shape. |
| height        | `Number`/`String` |    | The component's height in pixel. If using unit, valid units are: `px`, `rem`, `em`. <BsBadge color="info">v2.0.0</BsBadge> |
| icon          | `String`    |          | <div style="min-width:425px">The icon to display as avatar. <BsBadge color="info">Updated on v2.1.0</BsBadge> <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `icon-variant` property.</div> |
| icon-flip     | `String`    |          | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| icon-pulse    | `Boolean`   | `false`  | Apply **pulse** animation to the icon. |
| icon-rotation | `Number`    |          | Rotate the icon, valid values are: `90`, `180`, `270`. |
| icon-spin     | `Boolean`   | `false`  | Apply **spin** animation to the icon. |
| icon-variant  | `String`    | `'outlined'` | Use predefined icon style. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <BsBadge color="info">Updated on v2.1.0</BsBadge> |
| img-src       | `String`    |          | Set the image location or image url to be displayed as avatar. |
| rounded       | `Boolean`   | `false`  | Create avatar with **rounded** shape. If `circle` and `rounded` are not set, then avatar shape will become `square`. |
| size          | `Number`/`String` | `48` | The component's size in pixel. If using unit, valid units are: `px`, `rem`, `em`. |
| text          | `String`    |          | The text to display inside the component. Use short text (_1 to 3 characters_), so the text can be displayed properly. The text will be transformed to uppercase. |
| width         | `Number`/`String` |    | The component's width in pixel. If using unit, valid units are: `px`, `rem`, `em`. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place custom content. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const isSpin = ref(false);
const isPulse = ref(false);
const tabs1active = ref(0);
</script>
