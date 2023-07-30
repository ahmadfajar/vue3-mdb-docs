---
outline: [2, 3]
---


# Button

::: lead
**BsButton** is a component for actions in form, dialog, and more with support for 
a handful of color variations, sizes, states, and more.
:::


## Overview

**BsButton** uses [Boostrap CSS](https://getbootstrap.com/docs/5.2/components/buttons/) 
classes internally, and made some modifications to meet the 
[Google Material Design 3](https://m3.material.io/components/all-buttons) specifications.

::: BlockVue {title="Basic Buttons Example"}

```html
<div class="my-demo-wrapper row row-cols-2 row-cols-md-3 g-3">
  <div class="col text-center">
    <bs-button>Default</bs-button>
  </div>
  <div class="col text-center">
    <bs-button color="primary">Primary</bs-button>
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
</div>
```
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants 
and [Material Color](/reference/color-variants#material-colors) variants can be
applied to the `color` property.
:::


## Button State

`<bs-button>` component has four state: `default`, `active`, `disabled` and `readonly`.
Use their respective property to enable the state.

::: BlockVue {title="Button's State Example"}

```html
<div class="my-demo-wrapper row row-cols-auto g-3 justify-content-center">
  <div class="col">
    <bs-button color="primary" active>Active</bs-button>
  </div>
  <div class="col">
    <bs-button color="primary" readonly>Readonly</bs-button>
  </div>
  <div class="col">
    <bs-button color="primary" disabled>Disabled</bs-button>
  </div>
</div>
```
:::


## Element Type

`<bs-button>` component by default renders a `<button>` element. However, you can also render an 
`<a>` element by providing `href` attribute value. You can also change the button's `type` attribute
with specific value, such as `button`, `submit`, or `reset`.

::: BlockVue {title="Buttons Element Example"}

```html
<div class="my-demo-wrapper row row-cols-2 row-cols-md-auto g-3">
  <div class="col text-center">
    <bs-button type="button">Button</bs-button>
  </div>
  <div class="col text-center">
    <bs-button type="submit" color="primary">Submit</bs-button>
  </div>
  <div class="col text-center">
    <bs-button type="reset" color="secondary">Reset</bs-button>
  </div>
  <div class="col text-center">
    <bs-button href="#" color="blue">Link</bs-button>
  </div>
</div>
```
:::


## Style Variants

You can style the `<bs-button>` to your own preference or use a style variant 
based on Google **Material Design 3** specifications. 

### Filled 

This style is the default button's style and its appearance is like Material Design 3 - 
[Filled Button](https://m3.material.io/components/buttons/specs#0b1b7bd2-3de8-431a-afa1-d692e2e18b0d). 

*Updated since Vue MDBootstrap `v2.0.0`*

::: BlockVue {title="Filled Buttons Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-auto g-3 justify-content-center">
    <div class="col">
      <bs-button>Default</bs-button>
    </div>
    <div class="col">
      <bs-button color="primary">
        Primary
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="success">
        Success
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="danger">
        Danger
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="warning">
        Warning
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="default-color">
        Default Color
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="secondary-color">
        Secondary Color
      </bs-button>
    </div>
  </div>
</div>
```
:::

### Filled Tonal {class="pt-3"}

You can create button with filled tonal style like Material Design 3 - 
[Filled Tonal Button](https://m3.material.io/components/buttons/specs#158f0a18-67fb-4ac4-9d22-cc4d1adc4579) 
by defining the `tonal` property explicitly.

*Available since Vue MDBootstrap `v2.0.4`*

::: BlockVue {title="Filled Tonal Buttons Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-auto g-3 justify-content-center">
    <div class="col">
      <bs-button tonal>
        Default
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="primary" tonal>
        Primary
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="success" tonal>
        Success
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="danger" tonal>
        Danger
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="warning" tonal>
        Warning
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="default-color" tonal>
        Default Color
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="secondary-color" tonal>
        Secondary Color
      </bs-button>
    </div>
  </div>
</div>
```
:::

### Elevated {class="pt-3"}

You can create button with elevated style like Material Design 3 - 
[Elevated Button](https://m3.material.io/components/buttons/specs#0eea2a85-b4d7-4c74-b08e-98410b9412c7) 
by defining the `raised` property explicitly.

*Updated since Vue MDBootstrap `v2.0.0`*

::: BlockVue {title="Elevated Buttons Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-auto g-3 justify-content-center">
    <div class="col">
      <bs-button raised>
        Default
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="primary" raised>
        Primary
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="success" raised>
        Success
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="danger" raised>
        Danger
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="warning" raised>
        Warning
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="default-color" raised>
        Default Color
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="secondary-color" raised>
        Secondary Color
      </bs-button>
    </div>
  </div>
</div>
```
:::

### Outlined {class="pt-3"}

You can create button with outlined style like Material Design 3 - 
[Outlined Button](https://m3.material.io/components/buttons/specs#de72d8b1-ba16-4cd7-989e-e2ad3293cf63) 
by defining the `outlined` property explicitly.

*Updated since Vue MDBootstrap `v2.0.0`*

::: BlockVue {title="Outlined Buttons Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-auto g-3 justify-content-center">
    <div class="col">
      <bs-button outlined>
        Default
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="primary" outlined>
        Primary
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="success" outlined>
        Success
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="danger" outlined>
        Danger
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="warning" outlined>
        Warning
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="default-color" outlined>
        Default Color
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="secondary-color" outlined>
        Secondary Color
      </bs-button>
    </div>
  </div>
</div>
```
:::

### Flat {class="pt-3"}

You can create button with flat style like Material Design 3 - 
[Text Button](https://m3.material.io/components/buttons/specs#899b9107-0127-4a01-8f4c-87f19323a1b4) 
by defining the `flat` property explicitly.

*Updated since Vue MDBootstrap `v2.0.0`*

::: BlockVue {title="Flat Buttons Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-auto g-3 justify-content-center">
    <div class="col">
      <bs-button flat>
        Default
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="primary" flat>
        Primary
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="success" flat>
        Success
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="danger" flat>
        Danger
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="warning" flat>
        Warning
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="default-color" flat>
        Default Color
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="secondary-color" flat>
        Secondary Color
      </bs-button>
    </div>
  </div>
</div>
```
:::

### Rounded {class="pt-3"}

You can create button with rounded style by defining the `rounded` property explicitly 
and sets the `pill` property to `false`.

::: BlockVue {title="Rounded Buttons Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-auto g-3 justify-content-center">
    <div class="col">
      <bs-button :pill="false" rounded>
        Default
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="primary" :pill="false" rounded>
        Primary
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="success" :pill="false" rounded>
        Success
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="danger" :pill="false" rounded>
        Danger
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="warning" :pill="false" rounded>
        Warning
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="default-color" :pill="false" rounded>
        Default Color
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="secondary-color" :pill="false" rounded>
        Secondary Color
      </bs-button>
    </div>
  </div>
</div>
```
:::

### Rectangle {class="pt-3"}

You can create button with rectangle style by setting the `pill` property to `false`.

::: BlockVue {title="Rectangle Buttons Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-auto g-3 justify-content-center">
    <div class="col">
      <bs-button :pill="false">
        Default
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="primary" :pill="false">
        Primary
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="success" :pill="false">
        Success
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="danger" :pill="false">
        Danger
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="warning" :pill="false">
        Warning
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="default-color" :pill="false">
        Default Color
      </bs-button>
    </div>
    <div class="col">
      <bs-button color="secondary-color" :pill="false">
        Secondary Color
      </bs-button>
    </div>
  </div>
</div>
```
:::

### Combination {class="pt-3"}

Other than those styles above, some styles can be combine to create another 
effect. Example below will shows you how to do it.

::: BlockVue {title="Button Styles Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-1 row-cols-md-auto g-3 justify-content-center">
    <div class="col text-center">
      <bs-button :pill="false" raised rounded>
        Rounded Elevated
      </bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="primary" :pill="false" outlined raised rounded>
        Rounded Outlined Elevated
      </bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="danger" :pill="false" outlined rounded>
        Rounded Outlined
      </bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="success" :pill="false" flat raised rounded>
        Rounded Flat Elevated
      </bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="info" :pill="false" flat rounded>
        Rounded Flat
      </bs-button>
    </div>
  </div>
</div>
```
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
- `outlined` and `flat` property can't be combined. If both `true`, then `outlined` will take precedence.
- `pill` and `rounded` property can't be combined. If both `true`, then `pill` will take precedence.
- When the `tonal` property is set to `true` or defined, `outlined` and `flat` are automatically disabled.
:::


## Icon

`<bs-button>` can have an icon inside it. The icon can be positioned on the `left` side 
(before text) or on the `right` side (after text). Use any valid Google Material icon name, 
see [Google Material Icon](https://fonts.google.com/icons?icon.set=Material+Icons)
for details.

*Updated since Vue MDBootstrap `v2.0.0`*

::: BlockVue {title="Icon Inside Button Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-auto justify-content-center g-3">
    <div class="col">
      <bs-button 
        color="default-color" 
        icon="shopping_cart"
      >
        Icon Left
      </bs-button>
    </div>
    <div class="col">
      <bs-button 
        color="default-color" 
        icon="shopping_cart" 
        icon-position="right"
      >
        Icon Right
      </bs-button>
    </div>
  </div>
</div>
```
:::

::: warning <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
As of Vue MDBootstrap v2.0, [FontAwesome Icon](https://fontawesome.com/icons?d=gallery&s=solid&m=free) 
is removed from the component's bundle, and replaced with dynamic loading Google Material Icons.
:::

### Rotating an icon

Additionally, you can also rotate the icon to some extent. Use `icon-flip` property or `icon-rotation` 
property to rotate the icon, but do not use both property together.

::: BlockVue {title="Rotating Button's Icon Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-1 row-cols-sm-auto justify-content-center g-3">
    <div class="col text-center">
      <bs-button color="default-color" icon="shopping_cart" icon-flip="horizontal">
        Flip Horizontal
      </bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="default-color" icon="shopping_cart" icon-flip="vertical">
        Flip Vertical
      </bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="default-color" icon="shopping_cart" icon-flip="both">
        Flip Both
      </bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="default-color" icon="navigation" icon-rotation="90">
        Rotate 90&deg;
      </bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="default-color" icon="navigation" icon-rotation="180">
        Rotate 180&deg;
      </bs-button>
    </div>
    <div class="col text-center">
      <bs-button color="default-color" icon="navigation" icon-rotation="270">
        Rotate 270&deg;
      </bs-button>
    </div>
  </div>
</div>
```
:::

### Animating an icon

`<bs-button>` also has built-in animations for icon, which are: `spin` and `pulse`.

::: BlockVue {title="Animating Button's Icon Example"}

```vue
<template>
  <div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
    <div class="row row-cols-1 row-cols-md-auto justify-content-center g-3">
      <div class="col text-center">
        <bs-button color="default-color" icon="rotate_right" icon-spin>
          Spin Animation
        </bs-button>
      </div>
      <div class="col text-center">
        <bs-button color="default-color" icon="rotate_right" icon-pulse>
          Pulse Animation
        </bs-button>
      </div>
      <div class="col text-center">
        <bs-button color="default-color">
          <template #icon>
            <bs-icon-spinner size="20" spin></bs-icon-spinner>
          </template>
          Custom Icon-Spin
        </bs-button>
      </div>
      <div class="col text-center">
        <bs-button color="default-color" icon-position="right">
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

::: BlockVue {title="Sizing Buttons Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-auto g-3 justify-content-center">
    <div class="col d-flex align-items-center">
      <bs-button size="xs">Extra Small</bs-button>
    </div>
    <div class="col d-flex align-items-center">
      <bs-button color="primary" size="sm">Small button</bs-button>
    </div>
    <div class="col d-flex align-items-center">
      <bs-button color="success">Standard button</bs-button>
    </div>
    <div class="col">
      <bs-button color="default-color" size="lg">Large button</bs-button>
    </div>
  </div>
  <div class="row row-cols-auto g-3 pt-3 justify-content-center">
    <div class="col d-flex align-items-center">
      <bs-button size="xs" outlined>Extra Small</bs-button>
    </div>
    <div class="col d-flex align-items-center">
      <bs-button color="primary" size="sm" outlined>Small button</bs-button>
    </div>
    <div class="col d-flex align-items-center">
      <bs-button color="success" outlined>Standard button</bs-button>
    </div>
    <div class="col">
      <bs-button color="default-color" size="lg" outlined>Large button</bs-button>
    </div>
  </div>
  <div class="row row-cols-auto g-3 pt-3 justify-content-center">
    <div class="col d-flex align-items-center">
      <bs-button size="xs" flat>Extra Small</bs-button>
    </div>
    <div class="col d-flex align-items-center">
      <bs-button color="primary" size="sm" flat>Small button</bs-button>
    </div>
    <div class="col d-flex align-items-center">
      <bs-button color="success" flat>Standard button</bs-button>
    </div>
    <div class="col">
      <bs-button color="default-color" size="lg" flat>Large button</bs-button>
    </div>
  </div>
</div>
```
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
If you use `<bs-button>` other than standard/default button size and you have 
an icon inside it, then you have to adjust the icon size using the `icon-size` property.
:::


## Icon Button

With `<bs-button>` you can also create icon button like Google Material Design 3 -
[Icon Button](https://m3.material.io/components/icon-buttons/overview). Just use 
the `mode` property with value `icon`, `<bs-button>` will be rendered as icon button.

::: BlockVue {title="Icon Buttons Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-auto justify-content-center g-3">
    <div class="col d-flex align-items-center">
      <bs-button 
        icon="shopping_cart" 
        icon-size="14" 
        mode="icon" 
        size="xs" 
      />
    </div>
    <div class="col d-flex align-items-center">
      <bs-button 
        icon="shopping_cart" 
        icon-size="18" 
        mode="icon" 
        color="primary" 
        size="sm" 
      />
    </div>
    <div class="col d-flex align-items-center">
      <bs-button icon="shopping_cart" mode="icon" color="success" />
    </div>
    <div class="col">
      <bs-button
        icon="shopping_cart"
        icon-size="32"
        mode="icon"
        color="default-color"
        size="lg"
      />
    </div>
  </div>
  <div class="row row-cols-auto justify-content-center g-3 pt-3">
    <div class="col d-flex align-items-center">
      <bs-button 
        icon="shopping_cart" 
        icon-size="14" 
        mode="icon" 
        size="xs" 
        outlined 
      />
    </div>
    <div class="col d-flex align-items-center">
      <bs-button
        icon="shopping_cart"
        icon-size="18"
        mode="icon"
        color="primary"
        size="sm"
        outlined
      />
    </div>
    <div class="col d-flex align-items-center">
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
        color="default-color"
        size="lg"
        outlined
      />
    </div>
  </div>
  <div class="row row-cols-auto justify-content-center g-3 pt-3">
    <div class="col d-flex align-items-center">
      <bs-button 
        icon="shopping_cart" 
        icon-size="14" 
        mode="icon" 
        size="xs" 
        flat 
      />
    </div>
    <div class="col d-flex align-items-center">
      <bs-button 
        icon="shopping_cart" 
        icon-size="18" 
        mode="icon" 
        color="primary" 
        size="sm" 
        flat 
      />
    </div>
    <div class="col d-flex align-items-center">
      <bs-button 
        icon="shopping_cart" 
        mode="icon" 
        color="success" 
        flat 
      />
    </div>
    <div class="col">
      <bs-button
        icon="shopping_cart"
        icon-size="32"
        mode="icon"
        color="default-color"
        size="lg"
        flat
      />
    </div>
  </div>
</div>
```
:::


## FAB 

`<bs-button>` can also create FAB's button like Google Material Design 3 -
[FAB](https://m3.material.io/components/floating-action-button/overview) with just 
simple step. Use the `mode` property with value `fab`, `<bs-button>` will be rendered 
as FAB's button. The only downside is, `<bs-button>` doesn't have the ability to 
automatically position itself on the screen. You have to manually adjust its position 
on the screen using css helper or make your own css to adjust its position.

*Available since Vue MDBootstrap `v2.0.4`*

::: BlockVue {title="FAB Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-auto justify-content-center g-3">
    <div class="col d-flex align-items-center">
      <bs-button 
        color="secondary-color" 
        icon="shopping_cart" 
        icon-size="18" 
        mode="fab" 
        size="xs" 
      />
    </div>
    <div class="col d-flex align-items-center">
      <bs-button 
        color="primary" 
        icon="shopping_cart" 
        icon-size="24" 
        mode="fab" 
        size="sm" 
      />
    </div>
    <div class="col d-flex align-items-center">
      <bs-button color="success" icon="shopping_cart" mode="fab" />
    </div>
    <div class="col">
      <bs-button 
        color="default-color" 
        icon="shopping_cart" 
        icon-size="36" 
        mode="fab" 
        size="lg" 
      />
    </div>
  </div>
  <div class="row row-cols-auto justify-content-center g-3 pt-3">
    <div class="col d-flex align-items-center">
      <bs-button 
        color="secondary-color" 
        icon="shopping_cart" 
        icon-size="18" 
        mode="fab" 
        size="xs" 
        outlined 
      />
    </div>
    <div class="col d-flex align-items-center">
      <bs-button
        icon="shopping_cart"
        icon-size="24"
        mode="fab"
        color="primary"
        size="sm"
        outlined
      />
    </div>
    <div class="col d-flex align-items-center">
      <bs-button icon="shopping_cart" mode="fab" color="success" outlined />
    </div>
    <div class="col">
      <bs-button
        icon="shopping_cart"
        icon-size="36"
        mode="fab"
        color="default-color"
        size="lg"
        outlined
      />
    </div>
  </div>
</div>
```
:::


### Extended FAB

::: BlockVue {title="Extended FAB Example"}

```html
<div class="my-demo-wrapper w-100 p-3 bg-white rounded-4">
  <div class="row row-cols-auto justify-content-center g-3">
    <div class="col d-flex align-items-center">
      <bs-button
        color="secondary-color"
        icon="navigation_outlined"
        icon-size="18"
        mode="fab"
        size="xs"
      >
        Navigate
      </bs-button>
    </div>
    <div class="col d-flex align-items-center">
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
    <div class="col d-flex align-items-center">
      <bs-button icon="navigation_outlined" mode="fab" color="success">
        Navigate
      </bs-button>
    </div>
    <div class="col">
      <bs-button
        icon="navigation_outlined"
        icon-size="36"
        mode="fab"
        color="default-color"
        size="lg"
      >
        Navigate
      </bs-button>
    </div>
  </div>
  <div class="row row-cols-auto justify-content-center g-3 pt-3">
    <div class="col d-flex align-items-center">
      <bs-button
        color="secondary-color"
        icon="navigation_outlined"
        icon-size="18"
        mode="fab"
        size="xs"
        outlined
      >
        Navigate
      </bs-button>
    </div>
    <div class="col d-flex align-items-center">
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
    <div class="col d-flex align-items-center">
      <bs-button
        icon="navigation_outlined"
        mode="fab"
        color="success"
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
        color="default-color"
        size="lg"
        outlined
      >
        Navigate
      </bs-button>
    </div>
  </div>
</div>
```
:::


## Button Group

`<bs-button>` can be grouped as series of buttons on a single line called _button group_ 
by utilizing [Bootstrap CSS](https://getbootstrap.com/docs/5.2/components/button-group/).


*Updated since Vue MDBootstrap `v2.0.4`*

::: BlockVue {title="Button Group Example"}

```html
<div class="my-demo-wrapper bg-white w-100 rounded-4 p-3">
  <div class="d-flex justify-content-center">
    <div class="btn-group" role="group" aria-label="Button group pill">
      <bs-button color="primary">Left</bs-button>
      <bs-button color="primary">Middle</bs-button>
      <bs-button color="primary">Right</bs-button>
    </div>
  </div>
  <div class="d-flex justify-content-center pt-4">
    <div class="btn-group" role="group" aria-label="Button group outlined">
      <bs-button color="primary" outlined>Left</bs-button>
      <bs-button color="primary" outlined>Middle</bs-button>
      <bs-button color="primary" outlined>Right</bs-button>
    </div>
  </div>
  <div class="d-flex justify-content-center pt-4">
    <div class="btn-group" role="group" aria-label="Button group rounded">
      <bs-button color="default-color" :pill="false" rounded>
        Left
      </bs-button>
      <bs-button color="default-color" :pill="false" rounded>
        Middle
      </bs-button>
      <bs-button color="default-color" :pill="false" rounded>
        Right
      </bs-button>
    </div>
  </div>
  <div class="d-flex justify-content-center pt-4">
    <div class="btn-group" role="group" aria-label="Button group rounded outlined">
      <bs-button color="default-color" :pill="false" rounded outlined>
        Left
      </bs-button>
      <bs-button color="default-color" :pill="false" rounded outlined>
        Middle
      </bs-button>
      <bs-button color="default-color" :pill="false" rounded outlined>
        Right
      </bs-button>
    </div>
  </div>
</div>
```
:::

### Button toolbar

`<bs-button>` can also be combined as sets of button groups called **button toolbar**
by utilizing [Bootstrap CSS](https://getbootstrap.com/docs/5.2/components/button-group/#button-toolbar).

::: BlockVue {title="Button Toolbar Example"}

```html
<div class="my-demo-wrapper bg-white w-100 rounded-4 p-3">
  <div class="d-flex justify-content-center">
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with bs-button groups">
      <div class="btn-group me-2" role="group" aria-label="First group">
        <bs-button color="primary">1</bs-button>
        <bs-button color="primary">2</bs-button>
        <bs-button color="primary">3</bs-button>
        <bs-button color="primary">4</bs-button>
      </div>
      <div class="btn-group me-2" role="group" aria-label="Second group">
        <bs-button color="blue">5</bs-button>
        <bs-button color="blue">6</bs-button>
        <bs-button color="blue">7</bs-button>
      </div>
      <div class="btn-group" role="group" aria-label="Third group">
        <bs-button color="info">8</bs-button>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center pt-4">
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with bs-button groups">
      <div class="btn-group me-2" role="group" aria-label="First group">
        <bs-button color="default-color" :pill="false" rounded>1</bs-button>
        <bs-button color="default-color" :pill="false" rounded>2</bs-button>
        <bs-button color="default-color" :pill="false" rounded>3</bs-button>
        <bs-button color="default-color" :pill="false" rounded>4</bs-button>
      </div>
      <div class="btn-group me-2" role="group" aria-label="Second group">
        <bs-button color="secondary-color" :pill="false" rounded>5</bs-button>
        <bs-button color="secondary-color" :pill="false" rounded>6</bs-button>
        <bs-button color="secondary-color" :pill="false" rounded>7</bs-button>
      </div>
      <div class="btn-group" role="group" aria-label="Third group">
        <bs-button color="secondary-color" :pill="false" rounded>8</bs-button>
      </div>
    </div>
  </div>
</div>
```
:::


## Usage Example

The following are a collection of examples that demonstrate more advanced use of the `<bs-button>`.

### Order menu item 

::: BlockVue {title="Button Advanced Example"}

```html
<div class="my-demo-wrapper">
  <bs-card 
    class="bg-yellow lighten-5" 
    img-top-src="/img/pork-buns.jpg" 
    style="max-width: 400px" 
    shadow
  >
    <bs-card-body>
      <bs-card-content 
        type="title" 
        class="d-flex align-items-center justify-content-between"
      >
        <div>Pork bao buns</div>
        <div style="font-size: .65em">$7.95</div>
      </bs-card-content>
      <p>
        Made with barbeque-flavored sha siu pork and steamed to perfection,
        these pork buns are our most popular menu items.
      </p>
      <div class="d-grid">
        <bs-button color="default-color">Add to order</bs-button>
      </div>
    </bs-card-body>
  </bs-card>
</div>
```
:::

### Join video conference

::: BlockVue {title="Button Advanced Example"}

```html
<div class="my-demo-wrapper">
  <bs-app-container class="rounded" style="max-width: 400px">
    <bs-appbar class="bg-default-color">
      <bs-button color="light-grey" icon="arrow_back" mode="icon" flat />
      <bs-appbar-title class="text-white" title="Join Conference" />
    </bs-appbar>
    <bs-container>
      <bs-card class="rounded-bottom" rounded-off>
        <div class="p-2 position-relative">
          <img src="/img/conference-room.jpg" alt="" class="rounded-3" />
          <div class="position-absolute bottom-0 start-0 end-0 m-3">
            <div class="d-flex justify-content-between">
              <bs-button 
                color="default-color" 
                icon="more_horiz" 
                mode="icon" 
                size="sm" 
              />
              <bs-button 
                color="dark" 
                icon="mic_none" 
                mode="icon" 
                icon-size="20" 
                size="sm" 
                flat 
                active 
              />
              <bs-button 
                color="dark" 
                icon="videocam_outlined" 
                icon-size="20" 
                mode="icon" 
                size="sm" 
                flat 
                active 
              />
            </div>
          </div>
        </div>
        <bs-card-body class="text-center">
          <bs-card-content type="title">Etiqutte for the Internet</bs-card-content>
          <bs-card-content>Two persons has joined.</bs-card-content>
          <div class="d-flex justify-content-center pt-3">
            <bs-button color="default-color">Join now</bs-button>
            <bs-button 
              color="default-color" 
              icon="present_to_all" 
              icon-size="20" 
              tonal
            >
              Present
            </bs-button>
          </div>
        </bs-card-body>
      </bs-card>
    </bs-container>
  </bs-app-container>
</div>
```
:::


## CSS Variables

*Available since Vue MDBootstrap `v2.0.0`*

```css
--bs-btn-font-family: #{$body-font-family};
--bs-btn-font-size: 1rem;
--bs-btn-font-weight: 400;
--bs-btn-line-height: 1.5;
--bs-btn-disabled-opacity: 0.65;
--bs-btn-readonly-opacity: 0.75;
--bs-btn-border-radius: #{$btn-border-radius};
--bs-btn-border-width: 1px;

--bs-btn-bg: #{$btn-bg-color};
--bs-btn-color: #{$btn-text-color};
--bs-btn-border-color: #{$btn-border-color};
--bs-btn-active-bg: #{$btn-bg-color};
--bs-btn-active-color: #{$btn-text-color};
--bs-btn-active-border-color: #{$btn-border-color};
--bs-btn-disabled-bg: #{lighten($gray-500, 20%)};
--bs-btn-disabled-color: #{$gray-700};
--bs-btn-disabled-border-color: #{$lighten($gray-500, 8%)};
--bs-btn-hover-bg: #{$btn-bg-color};
--bs-btn-hover-color: #{$btn-text-color};
--bs-btn-hover-border-color: #{$btn-border-color};

--bs-btn-inner-padding-x: 1.5rem;
--bs-btn-inner-padding-y: 0.425rem;
--bs-btn-lg-inner-padding-x: 1.5rem;
--bs-btn-lg-inner-padding-y: 0.5rem;
--bs-btn-sm-inner-padding-x: 1rem;
--bs-btn-sm-inner-padding-y: 0.4rem;
--bs-btn-xs-inner-padding-x: 0.75rem;
--bs-btn-xs-inner-padding-y: 0.375rem;

--bs-btn-initial-box-shadow: none;
--bs-btn-active-box-shadow: 0 1px 2px 0 rgba(50, 50, 50, 0.35), 0 2px 4px 2px rgba(10, 10, 10, 0.05);
--bs-btn-focus-box-shadow: 0 1px 2px 0 rgba(50, 50, 50, 0.35), 0 2px 4px 2px rgba(10, 10, 10, 0.05);
--bs-btn-hover-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 4px 8px 0 rgba(0, 0, 0, 0.12);

```

### Icon button

Most css variables are inherit from button css variables.

```css
--bs-btn-border-radius: 50%;
--bs-btn-line-height: 2.25rem;
--bs-btn-lg-line-height: 3.5rem;
--bs-btn-sm-line-height: 2rem;
--bs-btn-xs-line-height: 1.5rem;

--bs-btn-height: 2.75rem;
--bs-btn-width: 2.75rem;
--bs-btn-lg-height: 3.5rem;
--bs-btn-lg-width: 3.5rem;
--bs-btn-sm-height: 2rem;
--bs-btn-sm-width: 2rem;
--bs-btn-xs-height: 1.5rem;
--bs-btn-xs-width: 1.5rem;

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| active   | `Boolean` | `false`  | The component state. |
| disabled | `Boolean` | `false`  | The component state. |
| color    | `String`  | `'default'` | The component color appearance. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used. |
| dropdown-toggle | `Boolean` | `false` | Render as `dropdown` button when used inside `<bs-dropdown-menu>` component. |
| flat     | `Boolean` | `false`  | Enable ***flat*** button style. |
| href     | `String`  |      | Render as `<a>` element and define its `href` property and apply button styles to the `<a>` element. |
| icon     | `String`  |  | Icon to display inside the component. Use any valid [Google Material Icon](https://fonts.google.com/icons?icon.set=Material+Icons) name. |
| icon-flip     | `String`  |   | Flip the icon. Valid values are: `horizontal`, `vertical`, `both`. |
| icon-position | `String`  | `'left'` | The icon placement. Valid values are: `left` (before text), `right` (after text). |
| icon-pulse    | `Boolean` | `false` | Apply ***pulse*** animation to the icon. |
| icon-rotation | `Number`  |   | Rotate the icon. Valid values are: `90`, `180`, `270`. |
| icon-size     | `Number`  |   | Render the icon at predefined size in pixel. |
| icon-spin     | `Boolean` | `false` | Apply ***spin*** animation to the icon. |
| mode     | `String`  | `'default'` | Create the component with spesific style variant. Valid values are: `default`, `icon`, `fab`. |
| outlined | `Boolean` | `false` | Enable ***outlined*** button style. |
| pill     | `Boolean` | `true`  | Enable ***rounded-pill*** button style. |
| raised   | `Boolean` | `false` | Enable ***elevated*** button style. |
| readonly | `Boolean` | `false`  | The component state. <BsBadge color="info">v2.0.0</BsBadge> |
| ripple-off | `Boolean` | `false` | Disable _ripple_ effect. |
| rounded  | `Boolean` | `false` | Enable ***rounded*** button style. |
| size     | `String`  |   | Create the component with predefined size. Valid values are: `xs`, `sm`, `lg`. |
| tonal    | `Boolean` | `false`  | Enable ***filled tonal*** button style. <BsBadge color="info">v2.0.4</BsBadge> |
| type     | `String`  | `'button'` | Sets the value to the `type` attribute of `<button>` element . Valid values are: `button`, `submit`, `reset`. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to render the main content. |
| icon | The outlet slot used to render custom icon. <BsBadge color="info">v2.0.1</BsBadge> |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
