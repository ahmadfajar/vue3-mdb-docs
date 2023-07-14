---
outline: [2,3]
---

# Introduction 

<div class="lead">

**Vue MDBootstrap** provides color classes that follow commonly used colors, and derived from 
*Bootstrap CSS*. Each color might exposed various tones varying from bright to dark. This will 
aid you in creating an inviting and color-consistent design. When using Vue MDBootstrap 
components, these variants refers to their **color-name**, rather than by the underlying CSS classname.

</div>


## Applying Color Variants

### Background color variants

Background color can be applied to any html element by using the CSS classname `bg-{color-name}`.

::: pureHtml
```html
<div class="w-100">
    <div class="row text-center">
        <div class="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
            <div class="bg-primary p-4">Inner text.</div>
        </div>
    </div>
</div>
```
:::


### Border color variants

Border color can be applied to any html element by using the CSS classname `border-{color-name}`.

::: pureHtml
```html
<div class="w-100">
    <div class="row text-center">
        <div class="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
            <div class="border border-primary p-4">Inner text.</div>
        </div>
    </div>
</div>
```
:::


### Text color variants

Text color can be applied to any html element by using the CSS classname `text-{color-name}`.

::: pureHtml
```html
<div class="w-100">
    <p class="text-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p class="text-success">Impedit architecto, totam hic sunt eum odio, deleniti.</p>
    <p class="text-danger">Similique ex, expedita minus assumenda a magni beatae dolorum itaque.</p>
    <p>Impedit architecto, <a class="text-purple">totam hic sunt eum odio, deleniti</a>.</p>
</div>
```
:::


## MDBootstrap Colors

<ColorPalete palette="bootstrap"></ColorPalete>

::: tip
These color variants can be applied on some UI components via its property, such as `color`.
:::


## Material Colors

<ColorPalete palette="material"></ColorPalete>

::: tip
These color variants can be applied on some UI components via its property, such as `color`.
:::


## Grey colors

<ColorPalete palette="grays"></ColorPalete>

::: tip
These grey color variants can only be applied to html element, see: [background](#background-color-variants), 
[border](#border-color-variants), and [text](#text-color-variants) color variants above. If wanted top apply
to an UI component, use its *CSS classname* on component's `class` property.
:::
 

## Full colors

<ColorPalete palette="fullColor"></ColorPalete>

::: tip
These color variants can only be applied as background color to html element, 
see: [background color variants](#background-color-variants) above. If wanted top apply
to an UI component, use its *CSS classname* on component's `class` property.
:::

<div class="pt-4"></div>

These color variants can also be used to produce **RGBA background colors**.

::: pureHtml
```html
<div class="w-100">
    <div class="row text-center mb-3 mb-md-0">
        <div class="col-md-4">
            <div class="p-3 bg-rgba-blue-slight">bg-rgba-blue-slight</div>
        </div>
        <div class="col-md-4">
            <div class="p-3 bg-rgba-blue-light">bg-rgba-blue-light</div>
        </div>
        <div class="col-md-4">
            <div class="p-3 bg-rgba-blue-strong">bg-rgba-blue-strong</div>
        </div>
    </div> 
    <div class="row text-center">
        <div class="col-md-4">
            <div class="p-3 bg-rgba-red-slight">bg-rgba-red-slight</div>
        </div>
        <div class="col-md-4">
            <div class="p-3 bg-rgba-red-light">bg-rgba-red-light</div>
        </div>
        <div class="col-md-4">
            <div class="p-3 bg-rgba-red-strong">bg-rgba-red-strong</div>
        </div>
    </div>
</div>
```
:::

::: tip
These color variants can only be applied as background color to html element, 
see: [background color variants](#background-color-variants) above. If wanted top apply
to an UI component, use its *CSS classname* on component's `class` property.
:::
