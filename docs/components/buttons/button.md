---
outline: [2, 3] 
description: Button is a component for actions in form, dialog, and more. Includes support for a handful of color variations, sizes, states, and more. 
---


# Button

::: lead
**BsButton** is a component for actions in form, dialog, and more with support for 
a handful of color variations, sizes, states, and more.
:::

<SmallNote color="teal">Updated on v2.2.0</SmallNote>


## Overview

**BsButton** is the most commonly used component in a web page. The component is 
designed to meet the [Google Material Design 3](https://m3.material.io/components/all-buttons) 
specifications. Featuring with many options, making it easy to adjust to your needs.

::: BlockVue {title="Button Overview"}

```vue
<template>
  <div class="demo-wrapper row row-cols-2 row-cols-md-3 g-3">
    <div class="col text-center">
      <bs-button>Default</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="primary">Primary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="secondary">Secondary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="success">Success</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="danger">Danger</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="warning">Warning</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="info">Info</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="light">Light</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="dark">Dark</bs-button>
    </div>
  </div>
</template>
```
:::

<!-- @include: @/components/contextual-color-info.md -->


## States

`<bs-button>` component has states: `active`, `disabled` and `readonly`.
Use their respective property to enable the state.

::: BlockVue {title="Button States"}

```vue
<template>
  <div class="w-full p-3 flex flex-wrap justify-around md-gap-5">
    <bs-button color="primary" active>Active</bs-button>
    <bs-button color="primary" readonly>Readonly</bs-button>
    <bs-button color="primary" disabled>Disabled</bs-button>
  </div>
</template>
```
:::


## Element Type

`<bs-button>` component by default renders a `<button>` element. However, you can also render an 
`<a>` element by providing `href` attribute value. You can also change the button's `type` attribute
with specific value, such as `button`, `submit`, or `reset`.

::: BlockVue {title="Button Element Type"}

```vue
<template>
  <div class="w-full p-3 flex flex-wrap justify-around md-gap-5">
    <bs-button type="button">Button</bs-button>
    <bs-button type="submit" color="primary">Submit</bs-button>
    <bs-button type="reset" color="secondary">Reset</bs-button>
    <bs-button href="#element-type" color="success">Link</bs-button>
  </div>
</template>
```
:::


## Style Variants

You can adjust the `<bs-button>` to your own preference or use a style variant 
based on [Google Material Design 3](https://m3.material.io/components/all-buttons) specifications. 

### Filled {#style-variants-filled}

This style is the default button's style and its appearance is like Material Design 3 - 
[Filled Button](https://m3.material.io/components/buttons/specs#7b9ba06e-d393-491b-830e-ae3fe0816d4b). 

::: BlockVue {title="Button Style Variants - Filled"}

```vue
<template>
  <div class="demo-wrapper row row-cols-2 row-cols-md-3 g-3">
    <div class="col text-center">
      <bs-button>Default</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="primary">Primary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="secondary">Secondary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="success">Success</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="danger">Danger</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="warning">Warning</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="info">Info</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="light">Light</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="dark">Dark</bs-button>
    </div>
  </div>
</template>

```
:::

### Filled Tonal {#style-variants-tonal class="mt-lg-5"}

You can create button with filled tonal style like Material Design 3 - 
[Filled Tonal Button](https://m3.material.io/components/buttons/specs#31a04913-d070-49c5-9c36-41d551f20096) 
by defining the `tonal` property explicitly.

<SmallNote color="teal">Added since v2.0.4</SmallNote>

::: BlockVue {title="Button Style Variants - Tonal"}

```vue
<template>
  <div class="demo-wrapper row row-cols-2 row-cols-md-3 g-3">
    <div class="col text-center">
      <bs-button tonal>Default</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="primary" tonal>Primary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="secondary" tonal>Secondary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="success" tonal>Success</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="danger" tonal>Danger</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="warning" tonal>Warning</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="info" tonal>Info</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="light" tonal>Light</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="dark" tonal>Dark</bs-button>
    </div>
  </div>
</template>

```
:::

### Filled Elevated {#style-variants-elevated class="mt-lg-5"}

You can create button with elevated style like Material Design 3 - 
[Elevated Button](https://m3.material.io/components/buttons/specs#81e12069-106c-47b5-b148-1cd6077fa3d5) 
by defining the `raised` property explicitly.

::: BlockVue {title="Button Style Variants - Elevated"}

```vue
<template>
  <div class="demo-wrapper row row-cols-2 row-cols-md-3 g-3">
    <div class="col text-center">
      <bs-button raised>Default</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="primary" raised>Primary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="secondary" raised>Secondary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="success" raised>Success</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="danger" raised>Danger</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="warning" raised>Warning</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="info" raised>Info</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="light" raised>Light</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="dark" raised>Dark</bs-button>
    </div>
  </div>
</template>

```
:::

### Filled Rounded {#style-variants-rounded class="mt-lg-5"}

You can create button with rounded style by defining the `rounded` property explicitly.

::: BlockVue {title="Button Style Variants - Rounded"}

```vue
<template>
  <div class="demo-wrapper row row-cols-2 row-cols-md-3 g-3">
    <div class="col text-center">
      <bs-button rounded>Default</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="primary" rounded>Primary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="secondary" rounded>Secondary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="success" rounded>Success</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="danger" rounded>Danger</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="warning" rounded>Warning</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="info" rounded>Info</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="light" rounded>Light</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="dark" rounded>Dark</bs-button>
    </div>
  </div>
</template>

```
:::

### Filled Rectangle {#style-variants-rectangle class="mt-lg-5"}

You can create button with rectangle style by defining the `pill-off` property explicitly.

<SmallNote color="teal">Updated on v2.2.0</SmallNote>

::: BlockVue {title="Button Style Variants - Rectangle"}

```vue
<template>
  <div class="demo-wrapper row row-cols-2 row-cols-md-3 g-3">
    <div class="col text-center">
      <bs-button pill-off>Default</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="primary" pill-off>Primary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="secondary" pill-off>Secondary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="success" pill-off>Success</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="danger" pill-off>Danger</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="warning" pill-off>Warning</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="info" pill-off>Info</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="light" pill-off>Light</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="dark" pill-off>Dark</bs-button>
    </div>
  </div>
</template>

```
:::

### Outlined {#style-variants-outlined class="mt-lg-5"}

You can create button with outlined style like Material Design 3 - 
[Outlined Button](https://m3.material.io/components/buttons/specs#6757c97e-0ae6-4802-a2d5-9e3b134a7231) 
by defining the `outlined` property explicitly.

::: BlockVue {title="Button Style Variants - Outlined"}

```vue
<template>
  <div class="demo-wrapper row row-cols-2 row-cols-md-3 g-3">
    <div class="col text-center">
      <bs-button outlined>Default</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="primary" outlined>Primary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="secondary" outlined>Secondary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="success" outlined>Success</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="danger" outlined>Danger</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="warning" outlined>Warning</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="info" outlined>Info</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="light" outlined>Light</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="dark" outlined>Dark</bs-button>
    </div>
  </div>
</template>

```
:::

### Flat {#style-variants-flat class="mt-lg-5"}

You can create button with flat style like Material Design 3 - 
[Text Button](https://m3.material.io/components/buttons/specs#73f33b9b-346b-480e-8028-f97c81ca293d) 
by defining the `flat` property explicitly.

::: BlockVue {title="Button Style Variants - Flat"}

```vue
<template>
  <div class="demo-wrapper row row-cols-2 row-cols-md-3 g-3">
    <div class="col text-center">
      <bs-button flat>Default</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="primary" flat>Primary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="secondary" flat>Secondary</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="success" flat>Success</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="danger" flat>Danger</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="warning" flat>Warning</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="info" flat>Info</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="light" flat>Light</bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="dark" flat>Dark</bs-button>
    </div>
  </div>
</template>

```
:::

### Combination {#style-variants-combination class="mt-lg-5"}

Other than those styles above, some styles can be combine to create another 
effect. Example below will shows you how to do it.

::: BlockVue {title="Button Style Variants - Combination"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-wrap md-gap-5">
    <bs-button raised rounded>Rounded Elevated</bs-button>
    <bs-button color="primary" outlined raised rounded>Outlined Rounded Elevated</bs-button>
    <bs-button color="primary" tonal rounded>Tonal Rounded</bs-button>
    <bs-button color="success" outlined rounded>Outlined Rounded</bs-button>
    <bs-button color="warning" pill-off outlined>Outlined Rectangle</bs-button>  
  </div>
</template>

```
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
- `outlined` and `flat` property can't be combined. If both `true`, then `outlined` will take precedence.
- When the `tonal` property is set to `true` or defined, `outlined` and `flat` are automatically disabled.
:::


## Icon

`<bs-button>` can have an icon inside it. The icon can be positioned on the `left` side 
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

::: BlockVue {title="Button with Icon"}

```vue
<template>
  <div class="demo-wrapper w-full flex justify-center md-gap-4">
    <bs-button icon="shopping_cart">Icon Left</bs-button>
    <bs-button icon="shopping_cart_filled" icon-position="right">Icon Right</bs-button>
  </div>
</template>

```
:::

<!-- @include: @/components/icon-migration-info.md -->


### Rotating an icon {#icon-rotating class="mt-lg-5"}

Additionally, you can also rotate the icon to some extent. Use `icon-flip` property 
or `icon-rotation` property to rotate the icon, but do not use both property together.

::: BlockVue {title="Button with Rotated Icon"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-1 row-cols-sm-auto justify-center g-3">
      <div class="col text-center">
        <bs-button icon="shopping_cart" icon-flip="horizontal">
          Flip Horizontal
        </bs-button>
      </div>
      <div class="col text-center">
        <bs-button icon="shopping_cart" icon-flip="vertical">
          Flip Vertical
        </bs-button>
      </div>
      <div class="col text-center">
        <bs-button icon="shopping_cart" icon-flip="both">
          Flip Both
        </bs-button>
      </div>
      <div class="col text-center">
        <bs-button color="primary" icon="navigation" icon-rotation="90">
          Rotate 90&deg;
        </bs-button>
      </div>
      <div class="col text-center">
        <bs-button color="primary" icon="navigation" icon-rotation="180">
          Rotate 180&deg;
        </bs-button>
      </div>
      <div class="col text-center">
        <bs-button color="primary" icon="navigation" icon-rotation="270">
          Rotate 270&deg;
        </bs-button>
      </div>
    </div>
  </div>
</template>
```
:::

### Animating an icon {#icon-animating class="mt-lg-5"}

`<bs-button>` also has built-in animations for icon, which are: `spin` and `pulse`.
Example below, demonstrate the built-in icon animation and the use of `icon` slot.

::: BlockVue {title="Button with Animated Icon"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-1 row-cols-sm-2 g-3">
      <div class="col text-center">
        <bs-button icon="refresh" icon-spin>
          Spin Animation
        </bs-button>
      </div>
      <div class="col text-center">
        <bs-button icon="star" icon-pulse>
          Pulse Animation
        </bs-button>
      </div>
      <div class="col text-center">
        <bs-button icon-size="20">
          <template #icon>
            <bs-icon-spinner size="20" spin></bs-icon-spinner>
          </template>
          Custom Icon-Spin
        </bs-button>
      </div>
      <div class="col text-center">
        <bs-button icon-size="20" icon-position="right">
          <template #icon>
            <bs-icon-spinner size="20" pulse></bs-icon-spinner>
          </template>
          Custom Icon-Pulse
        </bs-button>
      </div>
    </div>
  </div>
</template>
```
:::

## Sizes

`<bs-button>` can be set to different size: `xs` (extra-small), `sm` (small), or `lg` (large).

::: BlockVue {title="Button Size"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-auto g-3">
      <div class="col flex items-center">
        <bs-button size="xs">Extra Small</bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button color="primary" size="sm">Small button</bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button color="success">Standard button</bs-button>
      </div>
      <div class="col">
        <bs-button color="danger" size="lg">Large button</bs-button>
      </div>
    </div>
    <div class="row row-cols-auto g-3 pt-3">
      <div class="col flex items-center">
        <bs-button size="xs" outlined>Extra Small</bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button color="primary" size="sm" outlined>Small button</bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button color="success" outlined>Standard button</bs-button>
      </div>
      <div class="col">
        <bs-button color="danger" size="lg" outlined>Large button</bs-button>
      </div>
    </div>
    <div class="row row-cols-auto g-3 pt-3">
      <div class="col flex items-center">
        <bs-button size="xs" flat>Extra Small</bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button color="primary" size="sm" flat>Small button</bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button color="success" flat>Standard button</bs-button>
      </div>
      <div class="col">
        <bs-button color="danger" size="lg" flat>Large button</bs-button>
      </div>
    </div>

    <h4 class="mt-4 mb-1">With Icon</h4>
    <bs-divider></bs-divider>

    <div class="row row-cols-auto g-3 pt-3">
      <div class="col flex items-center">
        <bs-button size="xs" icon="shopping_cart" icon-size="16">
          Extra Small
        </bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button color="primary" icon="shopping_cart" icon-size="20" size="sm">
          Small button
        </bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button color="success" icon="shopping_cart">
          Standard button
        </bs-button>
      </div>
      <div class="col">
        <bs-button color="danger" icon="shopping_cart" icon-size="32" size="lg">
          Large button
        </bs-button>
      </div>
    </div>
    <div class="row row-cols-auto g-3 pt-5">
      <div class="col flex items-center">
        <bs-button size="xs" icon="shopping_cart" icon-size="16" outlined>
          Extra Small
        </bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button color="primary" icon="shopping_cart" icon-size="20" size="sm" outlined>
          Small button
        </bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button color="success" icon="shopping_cart" outlined>
          Standard button
        </bs-button>
      </div>
      <div class="col">
        <bs-button color="danger" icon="shopping_cart" icon-size="32" size="lg" outlined>
          Large button
        </bs-button>
      </div>
    </div>
    <div class="row row-cols-auto g-3 pt-5">
      <div class="col flex items-center">
        <bs-button size="xs" icon="shopping_cart" icon-size="16" flat>
          Extra Small
        </bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button color="primary" icon="shopping_cart" icon-size="20" size="sm" flat>
          Small button
        </bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button color="success" icon="shopping_cart" flat>
          Standard button
        </bs-button>
      </div>
      <div class="col">
        <bs-button color="danger" icon="shopping_cart" icon-size="32" size="lg" flat>
          Large button
        </bs-button>
      </div>
    </div>
  </div>
</template>
```
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
Other than standard/default button size and please adjusts the icon size using the `icon-size` property.
:::


## Icon Button

With `<bs-button>` you can also create icon button like Google Material Design 3 -
[Icon Button](https://m3.material.io/components/icon-buttons/overview). Just use 
the `mode` property and sets the value to `icon`, `<bs-button>` will be rendered 
as icon button.

::: BlockVue {title="Icon Buttons"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-auto justify-content-center g-3">
      <div class="col flex items-center">
        <bs-button 
          icon="shopping_cart" 
          icon-size="14" 
          mode="icon" 
          size="xs" 
        />
      </div>
      <div class="col flex items-center">
        <bs-button 
          icon="shopping_cart" 
          icon-size="18" 
          mode="icon" 
          color="primary" 
          size="sm" 
        />
      </div>
      <div class="col flex items-center">
        <bs-button icon="shopping_cart" mode="icon" color="success" />
      </div>
      <div class="col">
        <bs-button
          icon="shopping_cart"
          icon-size="32"
          mode="icon"
          color="danger"
          size="lg"
        />
      </div>
    </div>
    <div class="row row-cols-auto justify-content-center g-3 pt-3">
      <div class="col flex items-center">
        <bs-button 
          icon="shopping_cart" 
          icon-size="14" 
          mode="icon" 
          size="xs" 
          tonal 
        />
      </div>
      <div class="col flex items-center">
        <bs-button
          icon="shopping_cart"
          icon-size="18"
          mode="icon"
          color="primary"
          size="sm"
          tonal
        />
      </div>
      <div class="col flex items-center">
        <bs-button 
          icon="shopping_cart" 
          mode="icon" 
          color="success" 
          tonal 
        />
      </div>
      <div class="col">
        <bs-button
          icon="shopping_cart"
          icon-size="32"
          mode="icon"
          color="danger"
          size="lg"
          tonal
        />
      </div>
    </div>
    <div class="row row-cols-auto justify-content-center g-3 pt-3">
      <div class="col flex items-center">
        <bs-button 
          icon="shopping_cart" 
          icon-size="14" 
          mode="icon" 
          size="xs" 
          outlined 
        />
      </div>
      <div class="col flex items-center">
        <bs-button
          icon="shopping_cart"
          icon-size="18"
          mode="icon"
          color="primary"
          size="sm"
          outlined
        />
      </div>
      <div class="col flex items-center">
        <bs-button 
          icon="shopping_cart" 
          mode="icon" 
          color="success" 
          outlined 
        />
      </div>
      <div class="col">
        <bs-button
          icon="shopping_cart"
          icon-size="32"
          mode="icon"
          color="danger"
          size="lg"
          outlined
        />
      </div>
    </div>
    <div class="row row-cols-auto justify-content-center g-3 pt-3">
      <div class="col flex items-center">
        <bs-button 
          icon="shopping_cart_filled" 
          icon-size="14" 
          mode="icon" 
          size="xs" 
          flat 
        />
      </div>
      <div class="col flex items-center">
        <bs-button 
          icon="shopping_cart_filled" 
          icon-size="18" 
          mode="icon" 
          color="primary" 
          size="sm" 
          flat 
        />
      </div>
      <div class="col flex items-center">
        <bs-button 
          icon="shopping_cart_filled" 
          mode="icon" 
          color="success" 
          flat 
        />
      </div>
      <div class="col">
        <bs-button
          icon="shopping_cart_filled"
          icon-size="32"
          mode="icon"
          color="danger"
          size="lg"
          flat
        />
      </div>
    </div>
  </div>
</template>
```
:::


## FAB 

`<bs-button>` can also create FAB's button like Google Material Design 3 -
[FAB](https://m3.material.io/components/floating-action-button/overview) with just 
simple step. Use the `mode` property and sets the value to `fab`, `<bs-button>` will be rendered 
as FAB's button. The only downside is, `<bs-button>` doesn't have the ability to 
automatically position itself on the screen. You have to manually adjust its position 
on the screen using css helper or make your own css to adjust its position.

<SmallNote color="teal">Added since v2.0.4</SmallNote>

::: BlockVue {title="FAB Buttons"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-auto justify-content-center g-3">
      <div class="col flex items-center">
        <bs-button 
          color="secondary" 
          icon="shopping_cart_filled" 
          icon-size="18" 
          mode="fab" 
          size="xs" 
        />
      </div>
      <div class="col flex items-center">
        <bs-button 
          color="primary" 
          icon="shopping_cart_filled" 
          icon-size="24" 
          mode="fab" 
          size="sm" 
        />
      </div>
      <div class="col flex items-center">
        <bs-button icon="shopping_cart" mode="fab" />
      </div>
      <div class="col">
        <bs-button 
          color="warning" 
          icon="shopping_cart" 
          icon-size="36" 
          mode="fab" 
          size="lg" 
        />
      </div>
    </div>
    <div class="row row-cols-auto justify-content-center g-3 pt-3">
      <div class="col flex items-center">
        <bs-button 
          color="secondary" 
          icon="shopping_cart_filled" 
          icon-size="18" 
          mode="fab" 
          size="xs" 
          outlined 
        />
      </div>
      <div class="col flex items-center">
        <bs-button
          icon="shopping_cart_filled"
          icon-size="24"
          mode="fab"
          color="primary"
          size="sm"
          outlined
        />
      </div>
      <div class="col flex items-center">
        <bs-button icon="shopping_cart" mode="fab" outlined />
      </div>
      <div class="col">
        <bs-button
          icon="shopping_cart"
          icon-size="36"
          mode="fab"
          color="warning"
          size="lg"
          outlined
        />
      </div>
    </div>
  </div>
</template>
```
:::


### Extended FAB

::: BlockVue {title="FAB Buttons - Extended"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-auto justify-content-center g-3">
      <div class="col flex items-center">
        <bs-button
          color="secondary"
          icon="navigation_outlined"
          icon-size="18"
          mode="fab"
          size="xs"
        >
          Navigate
        </bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button
          icon="navigation_outlined"
          icon-size="24"
          mode="fab"
          color="primary"
          size="sm"
        >
          Navigate
        </bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button icon="navigation_outlined" mode="fab">
          Navigate
        </bs-button>
      </div>
      <div class="col">
        <bs-button
          icon="navigation_outlined"
          icon-size="36"
          mode="fab"
          color="warning"
          size="lg"
        >
          Navigate
        </bs-button>
      </div>
    </div>
    <div class="row row-cols-auto justify-content-center g-3 pt-3">
      <div class="col flex items-center">
        <bs-button
          color="secondary"
          icon="navigation_outlined"
          icon-size="18"
          mode="fab"
          size="xs"
          outlined
        >
          Navigate
        </bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button
          icon="navigation_outlined"
          icon-size="24"
          mode="fab"
          color="primary"
          size="sm"
          outlined
        >
          Navigate
        </bs-button>
      </div>
      <div class="col flex items-center">
        <bs-button
          icon="navigation_outlined"
          mode="fab"
          outlined
        >
          Navigate
        </bs-button>
      </div>
      <div class="col">
        <bs-button
          icon="navigation_outlined"
          icon-size="36"
          mode="fab"
          color="warning"
          size="lg"
          outlined
        >
          Navigate
        </bs-button>
      </div>
    </div>
  </div>
</template>
```
:::


## Button Group

`<bs-button>` can be grouped as series of buttons like
[Google Material Design 3](https://m3.material.io/components/button-groups/overview).

<SmallNote color="teal">Updated on v2.2.0</SmallNote>

::: BlockVue {title="Button Group"}

```vue
<template>
  <div class="demo-wrapper flex flex-col md-gap-8 py-3">
    <div class="md-button-group" role="group" style="gap: 2px" aria-label="Button Group 1">
      <bs-button icon="shopping_cart" icon-size="22" mode="icon"></bs-button>
      <bs-button icon="favorite" style="border-radius: 22px 6px 6px 22px">
        Label
      </bs-button>
      <bs-button icon="star" style="border-radius: 6px 22px 22px 6px">
        Label
      </bs-button>
      <bs-button color="danger" icon="delete" mode="icon"></bs-button>
    </div>

    <div class="md-button-group" role="group" style="gap: 3px" aria-label="Button Group 2">
      <bs-button icon="bluetooth" mode="icon" tonal></bs-button>
      <bs-button tonal style="--md-btn-md-padding-x: 1rem">
        <bs-icon icon="wifi" />
      </bs-button>
      <bs-button color="primary" icon="favorite" tonal>Label</bs-button>
      <bs-button 
        icon="flashlight_on" 
        icon-size="20"
        mode="icon" 
        tonal 
        style="border-radius: 20px; --md-btn-md-width: 2.25rem">
      </bs-button>
      <bs-button color="danger" icon="delete" mode="icon" tonal></bs-button>
    </div>

    <div class="md-button-group" role="group" style="gap: 3px" aria-label="Button Group 3">
      <bs-button icon="bluetooth" icon-size="22" mode="icon" outlined></bs-button>
      <bs-button outlined style="--md-btn-md-padding-x: 1rem">
        <bs-icon icon="wifi" />
      </bs-button>
      <bs-button 
        icon="favorite" 
        outlined 
        style="border-radius: 22px 6px 6px 22px">
        Label
      </bs-button>
      <bs-button 
        color="primary" 
        icon="star" 
        outlined 
        style="border-radius: 6px 22px 22px 6px">
        Label
      </bs-button>
    </div>  
  </div>
</template>

```
:::


### With dropdown menus {#button-group-with-dropdown-menus class="mt-lg-5"}

::: BlockVue {title="Button Group - Dropdown Menus" clientOnly="true"}

```vue
<template>
  <div class="demo-wrapper flex flex-col md-gap-8 py-3">
    <div class="md-button-group" role="group" style="gap: 3px" aria-label="Button Group">
      <bs-button icon="bluetooth" mode="icon" tonal></bs-button>
      <bs-button 
        icon="mic" 
        icon-size="22"
        mode="icon" 
        tonal
        style="border-radius: 20px; --md-btn-md-width: 2.25rem">
      </bs-button>

      <bs-dropdown-menu space="4">
        <bs-button color="primary" dropdown-toggle icon="favorite" tonal>
          Label
        </bs-button>
        <template #content>
          <bs-list-view>
            <div class="dropdown-menu">
              <div class="dropdown-item">First Action</div>
              <div class="dropdown-item">Second Action</div>
              <div class="dropdown-item">Third Action</div>
            </div>
          </bs-list-view>
        </template>
      </bs-dropdown-menu>

      <bs-dropdown-menu space="4">
        <bs-button color="primary" dropdown-toggle icon="share" tonal></bs-button>
        <template #content>
          <bs-list-view>
            <div class="dropdown-menu">
              <div class="dropdown-item">First Action</div>
              <div class="dropdown-item">Second Action</div>
              <div class="dropdown-item">Third Action</div>
            </div>
          </bs-list-view>
        </template>
      </bs-dropdown-menu>
    </div>
  </div>
</template>

```
:::

### Button toolbar {#button-group-toolbar class="mt-lg-5"}

`<bs-button>` can be grouped as series of buttons like
[Bootstrap](https://getbootstrap.com/docs/5.3/components/button-group/#button-toolbar).

::: BlockVue {title="Button - Toolbar"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col items-center md-gap-8">
    <div class="md-button-toolbar md-gap-3" role="toolbar" aria-label="Button Toolbar 1">
      <div class="inline-flex" role="group" aria-label="First group">
        <bs-button>1</bs-button>
        <bs-button>2</bs-button>
        <bs-button>3</bs-button>
        <bs-button>4</bs-button>
      </div>
      <div class="inline-flex" role="group" aria-label="Second group">
        <bs-button color="primary">5</bs-button>
        <bs-button color="primary">6</bs-button>
        <bs-button color="primary">7</bs-button>
      </div>
      <div class="inline-flex" role="group" aria-label="Third group">
        <bs-button color="secondary">8</bs-button>
      </div>
    </div>

    <div class="md-button-toolbar md-gap-3" role="toolbar" aria-label="Button Toolbar 2">
      <div class="inline-flex" role="group" aria-label="First group">
        <bs-button color="primary" rounded>1</bs-button>
        <bs-button color="primary" rounded>2</bs-button>
        <bs-button color="primary" rounded>3</bs-button>
        <bs-button color="primary" rounded>4</bs-button>
      </div>
      <div class="inline-flex" role="group" aria-label="Second group">
        <bs-button color="primary" rounded outlined>5</bs-button>
        <bs-button color="primary" rounded outlined>6</bs-button>
        <bs-button color="primary" rounded outlined>7</bs-button>
      </div>
      <div class="inline-flex" role="group" aria-label="Third group">
        <bs-button color="secondary" rounded>8</bs-button>
      </div>
    </div>
  </div>
</template>

```
:::


## Usage Example

The following are a collection of examples that demonstrate more advanced use of the `<bs-button>`.

### Order menu item {#usage-example-order-menu-item}

::: BlockVue {title="Button Usage - Advanced"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card 
      class="bg-yellow-50 dark:bg-yellow/85 mobi-card" 
      img-top-src="/img/pork-buns.jpg"
      border-off 
      shadow
    >
      <bs-card-body>
        <bs-card-content 
          type="title" 
          class="flex items-center justify-between"
        >
          <div>Pork bao buns</div>
          <div style="font-size: .65em">$7.95</div>
        </bs-card-content>
        <p>
          Made with barbeque-flavored sha siu pork and steamed to perfection,
          these pork buns are our most popular menu items.
        </p>
        <div class="d-grid pt-3">
          <bs-button>Add to order</bs-button>
        </div>
      </bs-card-body>
    </bs-card>
  </div>
</template>

```
:::

### Join video conference {#usage-example-join-video-conference class="mt-lg-5"}

::: BlockVue {title="Button Usage - Advanced"}

```vue
<template>
  <bs-app class="demo-wrapper p-3">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-appbar class="bg-default-color">
        <bs-button color="light" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-light" title="Join Conference"></bs-appbar-title>
      </bs-appbar>
      <div class="p-2 relative">
        <img src="/img/conference-room.jpg" alt="" class="img-fluid rounded-3" />
        <div class="position-absolute bottom-0 start-0 end-0 m-3">
          <div class="d-flex justify-content-between">
            <bs-button 
              icon="more_horiz" 
              mode="icon" 
              size="sm">
            </bs-button>
            <bs-button 
              color="dark" 
              icon="mic_none" 
              mode="icon" 
              icon-size="20" 
              size="sm" 
              style="--md-btn-bg: oklch(0.213 0 0 / 0.25); --md-btn-color: oklch(0.95 0 0); --md-btn-hover-bg: var(--md-btn-bg); --md-btn-hover-color: var(--md-btn-color)"
              tonal>
            </bs-button>
            <bs-button 
              color="dark" 
              icon="videocam" 
              icon-size="20" 
              mode="icon" 
              size="sm"
              style="--md-btn-bg: oklch(0.213 0 0 / 0.25); --md-btn-color: oklch(0.95 0 0); --md-btn-hover-bg: var(--md-btn-bg); --md-btn-hover-color: var(--md-btn-color)" 
              tonal>
            </bs-button>
          </div>
        </div>
      </div>
      <bs-card-body class="text-center">
        <bs-card-content type="title">Etiqutte for the Internet</bs-card-content>
        <bs-card-content>Two persons has joined.</bs-card-content>
        <div class="flex justify-center md-gap-2 pt-3">
          <bs-button>Join now</bs-button>
          <bs-button 
            icon="present_to_all" 
            icon-size="20" 
            tonal
          >
            Present
          </bs-button>
        </div>
      </bs-card-body>
    </bs-card>
  </bs-app>
</template>

```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-btn`, `.md-btn-fab`, and `.md-btn-icon` for better customization.

<SmallNote color="teal">Updated on v2.2.0</SmallNote>

```scss
.md-btn, .md-btn-fab, .md-btn-icon {
  --md-btn-border-width: 0.094rem;
  --md-btn-disabled-bg: oklch(0.907 0.02 239.98 / 0.8);
  --md-btn-disabled-color: oklch(0.558 0.016 244.893);
  --md-btn-disabled-border-color: oklch(0.937 0.02 239.98);
  --md-btn-disabled-opacity: 0.6;
  --md-btn-readonly-opacity: 0.75;

  --md-btn-xs-font-size: 0.75rem;
  --md-btn-sm-font-size: 0.875rem;
  --md-btn-md-font-size: 1rem;
  --md-btn-lg-font-size: 1.25rem;

  --md-btn-font-size: var(--md-btn-md-font-size);
  --md-btn-font-weight: var(--font-weight-medium, 500);

  --md-btn-box-shadow: none;
  --md-btn-active-box-shadow: none;
  --md-btn-hover-box-shadow: 0 1px 2px 0 oklch(0.317 0 89.876 / 0.35), 0 2px 4px 2px oklch(0.145 0 89.876 / 0.05);
  --md-btn-focus-box-shadow: 0 0 0 0.25rem var(--md-btn-focus-shadow-color);
  --md-btn-focus-border-color: oklch(0.985 0 89.876 / 0.85);
  --md-btn-elevated-box-shadow: 0 2px 5px 0 oklch(0 0 0 / 0.16), 0 4px 8px 0 oklch(0 0 0 / 0.12);
  --md-btn-elevated-active-box-shadow: 0 1px 2px 0 oklch(0.317 0 89.876 / 0.35), 0 2px 4px 2px oklch(0.145 0 89.876 / 0.05);
  --md-btn-elevated-hover-box-shadow: 0 5px 11px 0 oklch(0 0 0 / 0.12), 0 4px 15px 0 oklch(0 0 0 / 0.1);

  --md-btn-bg: #{$bg-color};
  --md-btn-color: #{$color};
  --md-btn-border-color: #{$border-color};
  --md-btn-active-bg: #{$active-bg};
  --md-btn-active-color: #{$active-color};
  --md-btn-active-border-color: #{$active-border-color};
  --md-btn-hover-bg: #{$hover-bg};
  --md-btn-hover-color: #{$hover-color};
  --md-btn-hover-border-color: #{$hover-border-color};
  --md-btn-focus-shadow-color: #{$focus-shadow-color};
}

.md-btn {
  --md-btn-xs-border-radius: 0.375rem;
  --md-btn-xs-line-height: 1;
  --md-btn-xs-padding-x: 1rem;
  --md-btn-xs-padding-y: 0.375rem;

  --md-btn-sm-border-radius: 0.625rem;
  --md-btn-sm-line-height: 1.3;
  --md-btn-sm-padding-x: 1.25rem;
  --md-btn-sm-padding-y: 0.4rem;

  --md-btn-md-border-radius: 0.625rem;
  --md-btn-md-line-height: 1.5;
  --md-btn-md-padding-x: 1.5rem;
  --md-btn-md-padding-y: 0.425rem;

  --md-btn-lg-border-radius: 0.875rem;
  --md-btn-lg-line-height: 1.5;
  --md-btn-lg-padding-x: 1.875rem;
  --md-btn-lg-padding-y: 0.75rem;

  --md-btn-border-radius: var(--md-btn-md-border-radius);
}

```

### Icon button CSS variables

```scss
.md-btn-icon {
  --md-btn-lg-width: 3.625rem;
  --md-btn-lg-height: 3.625rem;
  --md-btn-lg-line-height: 3.625rem;

  --md-btn-md-width: 2.625rem;
  --md-btn-md-height: 2.625rem;
  --md-btn-md-line-height: 2.25rem;
  
  --md-btn-sm-width: 2.125rem;
  --md-btn-sm-height: 2.125rem;
  --md-btn-sm-line-height: 2rem;

  --md-btn-xs-width: 1.75rem;
  --md-btn-xs-height: 1.75rem;
  --md-btn-xs-line-height: 1.5rem;

  --md-btn-border-radius: 50%;
}

```

### FAB button CSS variables

```scss
.md-btn-fab {
  --md-btn-xs-padding-x: 0.375rem;
  --md-btn-xs-padding-y: 0.375rem;
  --md-btn-xs-border-radius: 0.5rem;

  --md-btn-sm-padding-x: 0.5rem;
  --md-btn-sm-padding-y: 0.5rem;
  --md-btn-sm-border-radius: 0.75rem;
  
  --md-btn-md-padding-x: 1rem;
  --md-btn-md-padding-y: 1rem;
  --md-btn-md-border-radius: 1rem;

  --md-btn-lg-padding-x: 1.5rem;
  --md-btn-lg-padding-y: 1.5rem;
  --md-btn-lg-border-radius: 1.5rem;

  --md-btn-border-radius: var(--md-btn-md-border-radius);
  --md-btn-box-shadow: 0 1px 2px 0 oklch(0.317 0 89.876 / 0.35), 0 2px 4px 2px oklch(0.145 0 89.876 / 0.05);
}

```

### SASS mixins

Sometimes, simply creating a new button color can be overwhelming, as there are 
too many CSS variables to modify. For cases like this, Vue MDBootstrap provides 
several SASS mixins to help you create new button style variants.

::: code-group

```scss [Light Theme]
use 'vue-mdbootstrap/scss/mixins/button';

@include button.make-default-variant-light($name, $color);
@include button.make-outline-variant-light($name, $color);
@include button.make-flat-variant-light($name, $color);

```

```scss [Dark Theme]
use 'vue-mdbootstrap/scss/mixins/button';

@include button.make-default-variant-dark($name, $color);
@include button.make-outline-variant-dark($name, $color);
@include button.make-flat-variant-dark($name, $color);

```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| active   | `Boolean` | `false`  | The component state. |
| disabled | `Boolean` | `false`  | The component state. |
| color    | `String`  | `'default'` | The component color appearance. <MdBadge color="info">Updated on v2.2.0</MdBadge> <br/><br/> Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light` and `dark`. |
| dropdown-toggle | `Boolean` | `false` | Render as ***dropdown button*** when used inside `<bs-dropdown-menu>` component. |
| flat     | `Boolean` | `false`  | Enable ***flat*** button style. |
| href     | `String`  |      | Render as `<a>` element and define its `href` property and apply button styles to the `<a>` element. |
| icon     | `String`  |  | <div style="min-width:425px"> Icon to display inside the component. <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `icon-variant` property. </div> |
| icon-class    | `String`&#124;`String[]` |   | Apply custom css class to the icon. <MdBadge color="info">v2.2.0</MdBadge> |
| icon-flip     | `String`  |   | Flip the icon. Valid values are: `horizontal`, `vertical`, `both`. |
| icon-position | `String`  | `'left'` | The icon placement. Valid values are: `left` (before text), `right` (after text). |
| icon-pulse    | `Boolean` | `false` | Apply ***pulse*** animation to the icon. |
| icon-rotation | `Number`  |   | Rotate the icon. Valid values are: `90`, `180`, `270`. |
| icon-size     | `Number`  |   | Render the icon at predefined size in pixel. |
| icon-spin     | `Boolean` | `false` | Apply ***spin*** animation to the icon. |
| icon-variant  | `String`  | `'outlined'` | Use predefined icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <MdBadge color="info">v2.1.0</MdBadge> <br /><br />See [Icon](#icon) section for details. |
| mode     | `String`  | `'default'` | Create the component with spesific style variant. Valid values are: `default`, `icon`, `fab`. |
| outlined | `Boolean` | `false` | Enable ***outlined*** button style. |
| pill <Badge type="warning">deprecated</Badge> | `Boolean` | `true`  | Enable ***rounded-pill*** button style. |
| pill-off | `Boolean` | `false`  | Disable ***rounded-pill*** button style. <MdBadge color="info">v2.2.0</MdBadge> |
| raised   | `Boolean` | `false` | Enable ***elevated*** button style. |
| readonly | `Boolean` | `false`  | The component state. <MdBadge color="info">v2.0.0</MdBadge> |
| ripple-off | `Boolean` | `false` | Disable _ripple_ effect. |
| rounded  | `Boolean` | `false` | Enable ***rounded*** button style. |
| size     | `String`  |   | Create the component with predefined size. Valid values are: `xs`, `sm`, `lg`. |
| tonal    | `Boolean` | `false`  | Enable ***filled tonal*** button style. <MdBadge color="info">v2.0.4</MdBadge> |
| type     | `String`  | `'button'` | Sets the value to the `type` attribute of `<button>` element . Valid values are: `button`, `submit`, `reset`. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |
| icon | The outlet slot used to place custom icon. <MdBadge color="info">v2.0.1</MdBadge> |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
