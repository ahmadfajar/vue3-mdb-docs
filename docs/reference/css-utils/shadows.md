---
description: Add or remove shadows to elements with box-shadow utilities.
---

# Shadows


::: lead
Add or remove shadows to elements with box-shadow utilities.
:::


## Overview

**Vue MDBootstrap** shadows is an effect used in web elements which provides important
visual cues about objects depth and directional movement. They are the only visual cue
indicating the amount of separation between surfaces. An object’s elevation determines
the appearance of its shadow.

Creating shadows with Vue MDBootstrap is very easy.
You only need to add one of the shadow classes to the chosen element.

<div class="doc-api-reference mt-3">
<div class="doc-table-responsive doc-table-3cols table:font-mono:col-2 table:code:col-2">

| Class   | Styles |
|---------|--------|
| md-shadow | box-shadow: 0 1px 2px 0 oklch(0.369 0.007 240.019 / 0.35), 0 1px 4px 3px oklch(0.369 0.007 240.019 / 0.05); |
| md-shadow-0 | box-shadow: none; |
| md-shadow-1 | box-shadow: 0 5px 11px 0 oklch(0 0 0 / 0.12), 0 4px 15px 0 oklch(0 0 0 / 0.1); |
| md-shadow-2 | box-shadow: 0 8px 17px 0 oklch(0 0 0 / 0.12), 0 6px 20px 0 oklch(0 0 0 / 0.1); |
| md-shadow-3 | box-shadow: 0 12px 15px 0 oklch(0 0 0 / 0.1), 0 17px 50px 0 oklch(0 0 0 / 0.1); |
| md-shadow-4 | box-shadow: 0 16px 28px 0 oklch(0 0 0 / 0.15), 0 25px 55px 0 oklch(0 0 0 / 0.1); |
| md-shadow-5 | box-shadow: 0 15px 30px 6px oklch(0% 0 0deg / 0.1), 0 20px 50px 15px oklch(0 0 0 / 0.1); |

</div>
</div>

### Examples 

::: BlockVue {title="Shadows Example"}

```html
<div class="bg-white rounded-md-3 p-5 w-100">
  <div class="flex flex-col flex-md-row items-center justify-around gap-5 text-center mb-5">
    <div class="md-shadow text-body rounded p-3" style="width: 160px">
      md-shadow
    </div>
    <div class="md-shadow-1 text-body rounded p-3" style="width: 160px">
      md-shadow-1
    </div>
    <div class="md-shadow-2 text-body rounded p-3" style="width: 160px">
      md-shadow-2
    </div>
  </div>
  <div class="flex flex-col flex-md-row items-center justify-around gap-5 text-center">
    <div class="md-shadow-3 text-body rounded p-3" style="width: 160px">
      md-shadow-3
    </div>
    <div class="md-shadow-4 text-body rounded p-3" style="width: 160px">
      md-shadow-4
    </div>
    <div class="md-shadow-5 text-body rounded p-3" style="width: 160px">
      md-shadow-5
    </div>
  </div>
</div>
```
:::


## Bootstrap Shadows

If shadows provided by **Vue MDBootstrap** still not enough, you can still use
shadows utilities provided by [Bootstrap](https://getbootstrap.com/docs/5.3/utilities/shadows/).

::: BlockVue {title="Bootstrap Shadows Example"}

```html
<div class="bg-white rounded-md-3 p-5 w-100">
  <div class="mb-5">
    <div class="shadow-sm bg-white text-body rounded p-4">Small shadow</div>
  </div>
  <div class="mb-5">
    <div class="shadow bg-white text-body rounded p-4">Default shadow</div>
  </div>
  <div class="mb-2">
    <div class="shadow-lg bg-white text-body rounded p-4">Large shadow</div>
  </div>
</div>
```
:::


## Shadow on Hover

::: BlockVue {title="Shadow Hover Example"}

```html
<div class="bg-white rounded-md-3 p-5 w-100">
  <div class="bg-primary text-white rounded md-hover-shadow p-4">hover me!</div>
</div>
```
:::
