---
outline: [2, 3]
---

# Color Variants

::: lead
**Vue MDBootstrap** provides color classes that follow commonly used colors and derived from
_Bootstrap CSS_. Each color might exposed various tones varying from bright to dark. This will
aid you in creating an inviting and color-consistent design. When using Vue MDBootstrap
components, these variants refers to their **color-name**, rather than by the underlying CSS classname.
:::


## Applying Color Variants

### Background color variants

Background color can be applied to any html element by using the CSS classname `bg-{color-name}`.

::: BlockHtml

```html
<div class="col-6 col-md-4 col-xl-3 text-center" style="color: var(--vp-c-neutral)">
  <div class="bg-primary p-3">Inner text.</div>
</div>
```
:::


### Border color variants {class="mt-lg-5"}

Border color can be applied to any html element by using the CSS classname `border-{color-name}`.

::: BlockHtml

```html
<div class="col-6 col-md-4 col-xl-3 text-center" style="color: var(--vp-c-neutral)">
  <div class="border border-primary p-3">Inner text.</div>
</div>
```
:::


### Text color variants {class="mt-lg-5"}

Text color can be applied to any html element by using the CSS classname `text-{color-name}`.

::: BlockHtml

```html
<div class="w-100" style="color: var(--vp-c-neutral)">
  <p class="text-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <p class="text-success">Impedit architecto, totam hic sunt eum odio, deleniti.</p>
  <p class="text-danger">Similique ex, expedita minus assumenda a magni beatae dolorum itaque.</p>
  <p>Impedit architecto, <a class="text-purple">totam hic sunt eum odio, deleniti</a>.</p>
</div>
```
:::


## MDBootstrap Colors

<ColorPalette palette="bootstrap" class="py-3"></ColorPalette>

::: tip <BsIcon icon="tips_and_updates" /><span class="ms-2 h6 mb-0">TIP</span>
These color variants except for `white` and `black` color variants can be applied 
on some UI components via its property, such as `color` without `bg-` prefix. They also 
can be applied to html element, see: applying [background](#background-color-variants), 
[border](#border-color-variants), and [text](#text-color-variants) color variants above. 
:::


## Material Colors

<ColorPalette palette="material" class="py-3"></ColorPalette>

::: tip <BsIcon icon="tips_and_updates" /><span class="ms-2 h6 mb-0">TIP</span>
These color variants can be applied on some UI components via its property, such as `color` 
without `bg-` prefix. They also can be applied to html element, see: applying 
[background](#background-color-variants), [border](#border-color-variants), and 
[text](#text-color-variants) color variants above.
:::


## Grey Colors

<ColorPalette palette="grays" class="py-3"></ColorPalette>

::: tip <BsIcon icon="tips_and_updates" /><span class="ms-2 h6 mb-0">TIP</span>
These grey color variants can only be applied to html element, see: applying
[background](#background-color-variants), [border](#border-color-variants), and
[text](#text-color-variants) color variants above. If wanted to apply
to an UI component, use its _CSS classname_ on component's `class` property.
:::


## Full Colors

<ColorPalette palette="fullColor" class="py-3"></ColorPalette>

::: tip <BsIcon icon="tips_and_updates" /><span class="ms-2 h6 mb-0">TIP</span>
These color variants can only be applied as the background color of an html element, see: applying
[background color variants](#background-color-variants) above. If wanted to apply
to an UI component, use its _CSS classname_ on component's `class` property.
:::


### RGBA color variants {class="mt-lg-5"}

The base color of the above color variants can also be used to produce an **RGBA background color**.

::: BlockHtml

```html
<div class="w-100" style="color: var(--vp-c-neutral)">
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
These RGBA color variants can only be applied as the background color of an html element, see: applying
[background color variants](#background-color-variants) above. If wanted to apply
to an UI component, use its _CSS classname_ on component's `class` property.
:::
