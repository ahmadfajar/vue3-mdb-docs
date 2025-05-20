---
outline: [2, 3] 
description: A component that generates a calendar style date selection widget. 
---

# Date Picker

::: lead
**BsDatePicker** is a component that generates a calendar style date selection widget.
:::


## Overview

**BsDatePicker** comes in two orientation variations, portrait (**default**) and landscape. 
Additionaly, you can use `v-model` directive to create two-way data bindings on the 
`model-value` property.

### Default Orientation 

::: BlockVue {clientOnly="true" title="DatePicker Example" file="./docs/components/scripts/date-picker-1.js"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <bs-date-picker v-model="picker1" class="shadow"></bs-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const picker1 = ref<string>();
</script>
```
:::


### Landscape Orientation {class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DatePicker Orientation Example" file="./docs/components/scripts/date-picker-2.js"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <bs-date-picker v-model="picker2" class="shadow" landscape></bs-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const picker2 = ref<string>();
</script>
```
:::

::: info <BsIcon icon="info_outlined" /> <span class="ms-2 h6 mb-0">INFO</span>
Landscape orientation only works on medium screen size and above. 
:::


## Color Style

`<bs-date-picker>` colors can be customize using the `surface-color` and `header-color` property.

::: BlockVue {clientOnly="true" title="DatePicker Colors Example" file="./docs/components/scripts/date-picker-3.js"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <bs-date-picker 
      v-model="picker3" 
      class="shadow" 
      header-color="orange" 
      surface-color="stylish-color-dark"
    ></bs-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const picker3 = ref<string>();
</script>
```
:::


::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants 
and [Material Color](/reference/color-variants#material-colors) variants can be
be applied to the `<bs-date-picker>` component. 
:::


## Picker Selection Modes

Use `mode` property to change the Date Picker view mode and selection mode. _Date_ selection 
mode is the default selection.

### Date mode

::: BlockVue {clientOnly="true" title="DatePicker Selection Mode Example" file="./docs/components/scripts/date-picker-4.js"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center w-100">
    <div class="d-inline-block">
      <bs-date-picker v-model="picker4" class="shadow"></bs-date-picker>
      <div class="pt-4" style="color: var(--vp-c-text-1)">
        Output value: <span class="fw-semibold">{{ picker4 }}</span>
      </div>
    </div>  
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const picker4 = ref<string>();
</script>
```
:::


### DateTime mode {class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DatePicker Selection Mode Example" file="./docs/components/scripts/date-picker-5.js"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center w-100">
    <div class="d-inline-block">
      <bs-date-picker v-model="picker5" class="shadow" mode="datetime"></bs-date-picker>
      <div class="pt-4" style="color: var(--vp-c-text-1)">
        Output value: <span class="fw-semibold">{{ picker5 }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const picker5 = ref<string>();
</script>
```
:::


### Month mode {class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DatePicker Selection Mode Example" file="./docs/components/scripts/date-picker-6.js"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center w-100">
    <div class="d-inline-block">
      <bs-date-picker v-model="picker6" class="shadow" mode="month"></bs-date-picker>
      <div class="pt-4" style="color: var(--vp-c-text-1)">
        Output value: <span class="fw-semibold">{{ picker6 }}</span>
      </div>
    </div>  
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const picker6 = ref<string>();
</script>
```
:::


### Year mode {class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DatePicker Selection Mode Example" file="./docs/components/scripts/date-picker-7.js"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center w-100">
    <div class="d-inline-block">
      <bs-date-picker v-model="picker7" class="shadow" mode="year"></bs-date-picker>
      <div class="pt-4" style="color: var(--vp-c-text-1)">
        Output value: <span class="fw-semibold">{{ picker7 }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const picker7 = ref<string>();
</script>
```
:::


### Time mode {class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DatePicker Selection Mode Example" file="./docs/components/scripts/date-picker-8.js"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center w-100">
    <div class="d-inline-block">
      <bs-date-picker v-model="picker8" class="shadow" mode="time"></bs-date-picker>
      <div class="pt-4" style="color: var(--vp-c-text-1)">
        Output value: <span class="fw-semibold">{{ picker8 }}</span>
      </div>
    </div>  
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const picker8 = ref<string>();
</script>
```
:::


## CSS Variables

<SmallNote color="teal">Added since v2.0.0</SmallNote>

```scss
--md-datepicker-border-radius: .375rem;
--md-datepicker-padding-x: 1rem;
--md-datepicker-padding-y: 1rem;
--md-datepicker-header-color: #fff;
--md-datepicker-table-header-color: #6c757d;
--md-datepicker-title-font-size: 1.8rem;
--md-datepicker-subtitle-font-size: 1.25rem;

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property     | Type      | Default | Description |
|--------------|-----------|---------|-------------|
| full-width   | `Boolean` | `false` | Display Date picker in 100% width or occupy its parent element width. |
| header-color | `String`  | `'primary'` | Date picker header panel background color. <div class="pt-3">Any of [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used.</div> |
| header-panel | `Boolean` | `true`  | Show or hide header panel. |
| landscape    | `Boolean` | `false` | Display Date picker in landscape orientation. |
| locale       | `String`  |  | Default locale to be used. Default value is using browser's locale. |
| mode         | `String`  | `'date'`| DateTime picker view mode, valid values are: `date`, `month`, `year`, `time` or `datetime`. <BsBadge color="info">v2.0.0</BsBadge> |
| model-value <Badge type="tip">v-model</Badge> | `String`/`Number`/`Date` |  | Monitored by `v-model` to maintain the component's value. The value must be convertible to datetime. <BsBadge color="info">v2.0.0</BsBadge><div class="pt-3">The initial value can be: <ol><li>From an ISO 8601 valid string.</li><li>From a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC).</li></ol></div> |
| readonly     | `Boolean` | `false` | Put Date picker in readonly state. |
| surface-color | `String` | `'white'` | Date picker container background color. <BsBadge color="info">v2.0.0</BsBadge> <div class="pt-3">Any of [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used.</div> |
| view-mode <Badge type="warning">deprecated</Badge> | `String`  | | Use `mode` property instead. |
| width        | `Number`  | `300`  | Date picker's container width in pixels. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments     | Description |
|---------|---------------|-------------|
| update:model-value | ( value:`String`) | Fired when this component's `model-value` is updated. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
const picker1 = ref<string>();
const picker2 = ref<string>();
const picker3 = ref<string>();
const picker4 = ref<string>();
const picker5 = ref<string>();
const picker6 = ref<string>();
const picker7 = ref<string>();
const picker8 = ref<string>();
</script>