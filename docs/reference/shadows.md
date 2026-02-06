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

::: BlockVue {title="Shadows Example"}

```html
<div class="bg-white rounded-md-3 p-5 w-100">
  <div class="d-flex flex-column flex-sm-row align-items-center justify-content-around gap-5 text-center mb-5">
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
  <div class="d-flex flex-column flex-sm-row align-items-center justify-content-around gap-5 text-center">
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
shadows utilities provided by **Bootstrap**.

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
