---
outline: [2, 3] 
description: Explains various color classes and variants provided by Vue MDBootstrap.
---

# Colors

::: lead
**Vue MDBootstrap** provides color classes that follow commonly used colors. Each 
color might exposed various tones varying from bright to dark. This will aid you 
in creating an inviting and color-consistent design. When using Vue MDBootstrap
components, these variants refers to their **color-name**, rather than by the 
underlying CSS classname.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>


## Applying Color

### Background color

Background color can be applied to any html element by using the CSS classname `bg-{color-name}`.

::: BlockHtml

```html
<div class="col-6 col-md-4 col-xl-3 text-center">
  <div class="bg-primary text-light p-3">Inner text.</div>
</div>
```
:::


### Border color {class="mt-lg-5"}

Border color can be applied to any html element by using the CSS classname `border-{color-name}`.

::: BlockHtml

```html
<div class="col-6 col-md-4 col-xl-3 text-center">
  <div class="border border-primary p-3">Inner text.</div>
</div>
```
:::


### Text color {class="mt-lg-5"}

Text color can be applied to any html element by using the CSS classname `text-{color-name}`.

::: BlockHtml

```html
<div class="w-full">
  <p class="text-primary mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <p class="text-success">Impedit architecto, totam hic sunt eum odio, deleniti.</p>
  <p class="text-danger mb-0">Similique ex, expedita minus assumenda a magni beatae dolorum itaque.</p>
</div>
```
:::


## Contextual Colors

<ColorPalette palette="contextual" class="py-3"></ColorPalette>

::: info <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">INFO</span>
Since **v2.2.0**, **Vue MDBootstrap** doesn't provides color variants 
in its core bundle (`dist/bundle-core.css` and `dist/bundle-core.min.css`) to reduce 
the file size. The component color variants are distributed in `dist/theme-light.css` and 
`dist/theme-dark.css`. This will give developers the freedom to produce their own theme colors.

Use the following code to get the distribution:  

::: code-group

```ts [src/main.ts]
// Import components core css stylesheet
import 'vue-mdbootstrap/styles';

// Import theme color for light theme
import 'vue-mdbootstrap/theme-light';

// Import theme color for dark theme
import 'vue-mdbootstrap/theme-dark';

```
:::


## Additional Colors

Since **v2.2.0**, these color variants are distributed in `dist/decorator-colors.css` and 
`dist/decorator-colors.min.css`. 

Use the following code to get the distribution:  

::: code-group

```ts [src/main.ts]
// Optional, import style color decorators
import 'vue-mdbootstrap/styles-color';

```
:::


### Main Colors

<ColorPalette palette="primary" class="py-4"></ColorPalette>


### Material Colors 

<ColorPalette palette="material" class="py-4"></ColorPalette>

### Full Colors

<ColorPalette palette="fullColor" class="py-3"></ColorPalette>

::: tip <BsIcon icon="tips_and_updates" /><span class="ms-2 h6 mb-0">TIP</span>
These color variants can only be applied as the background color of an html element,
see: applying [background color variants](#background-color) above.
:::


### Accent Colors

<ColorPalette palette="accentColor" class="py-3"></ColorPalette>

::: tip <BsIcon icon="tips_and_updates" /><span class="ms-2 h6 mb-0">TIP</span>
These color variants can only be applied as the background color of an html element,
see: applying [background color variants](#background-color) above.
:::

### RGBA Colors {class="mt-lg-5"}

The [Main colors](#main-colors) can also be used to produce an **RGBA background color**.

::: BlockHtml

```html
<div class="w-full">
  <div class="row row-cols-1 row-cols-sm-2">
    <div class="col text-center mb-4 mb-sm-0">
      <div class="p-3 bg-rgba-blue-slight">rgba-blue-slight</div>
      <div class="p-3 bg-rgba-blue-light">rgba-blue-light</div>
      <div class="p-3 bg-rgba-blue-strong">rgba-blue-strong</div>
    </div>
    <div class="col text-center mb-4 mb-sm-0">
      <div class="p-3 bg-rgba-red-slight">rgba-red-slight</div>
      <div class="p-3 bg-rgba-red-light">rgba-red-light</div>
      <div class="p-3 bg-rgba-red-strong">rgba-red-strong</div>
    </div>
  </div>
</div>
```
:::

::: tip <BsIcon icon="tips_and_updates" /><span class="ms-2 h6 mb-0">TIP</span>
These color variants can only be applied as the background color of an html element,
see: applying [background color variants](#background-color) above.
:::
