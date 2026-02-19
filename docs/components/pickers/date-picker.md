---
outline: [2, 3] 
description: DatePicker is aA component that generates a calendar style date selection widget. 
---

# Date Picker

::: lead
**BsDatePicker** is a component that generates a calendar style date selection widget.
:::


## Overview

**BsDatePicker** comes in two orientation variations, portrait (**default**) and landscape. 
Additionaly, you can use `v-model` directive to create two-way data bindings on the 
`model-value` property.

### Default Orientation {#overview-default-orientation}

::: BlockVue {clientOnly="true" title="DatePicker Overview - Default Orientation" file="./docs/components/pickers/js/date-picker-1.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-date-picker v-model="picker1" class="shadow"></bs-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const picker1 = ref<string>();
</script>
```
:::


### Landscape Orientation {#overview-landscape-orientation class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DatePicker Overview - Landscape Orientation" file="./docs/components/pickers/js/date-picker-2.js"}

```vue
<template>
  <div class="demo-wrapper">
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

`<bs-date-picker>` color styles can be customize using properties: `header-color`, `button-color`,
`selected-color`, `surface-class`.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {clientOnly="true" title="DatePicker Color Style" file="./docs/components/pickers/js/date-picker-3.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-date-picker 
      v-model="picker3" 
      class="shadow" 
      header-color="orange" 
      button-color="light"
      selected-color="warning"
      surface-class="bg-stylish-color-dark text-light"
    ></bs-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const picker3 = ref<string>();
</script>

```
:::


## Picker Selection Modes

Use `mode` property to change the Date Picker view mode and selection mode. _Date_ selection 
mode is the default selection.

### Date mode

::: BlockVue {clientOnly="true" title="DatePicker Selection Modes - Date Mode" file="./docs/components/pickers/js/date-picker-4.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex justify-center">
    <div class="inline-block">
      <bs-date-picker v-model="picker4" class="shadow"></bs-date-picker>
      <div class="pt-4" style="color: var(--vp-c-text-1)">
        Output value: <span class="font-weight-semibold">{{ picker4 }}</span>
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

::: BlockVue {clientOnly="true" title="DatePicker Selection Modes - DateTime Mode" file="./docs/components/pickers/js/date-picker-5.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex justify-center">
    <div class="inline-block">
      <bs-date-picker v-model="picker5" class="shadow" mode="datetime"></bs-date-picker>
      <div class="pt-4" style="color: var(--vp-c-text-1)">
        Output value: <span class="font-weight-semibold">{{ picker5 }}</span>
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

::: BlockVue {clientOnly="true" title="DatePicker Selection Modes - Month Mode" file="./docs/components/pickers/js/date-picker-6.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex justify-center">
    <div class="inline-block">
      <bs-date-picker v-model="picker6" class="shadow" mode="month"></bs-date-picker>
      <div class="pt-4" style="color: var(--vp-c-text-1)">
        Output value: <span class="font-weight-semibold">{{ picker6 }}</span>
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

::: BlockVue {clientOnly="true" title="DatePicker Selection Modes - Year Mode" file="./docs/components/pickers/js/date-picker-7.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex justify-center">
    <div class="inline-block">
      <bs-date-picker v-model="picker7" class="shadow" mode="year"></bs-date-picker>
      <div class="pt-4" style="color: var(--vp-c-text-1)">
        Output value: <span class="font-weight-semibold">{{ picker7 }}</span>
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

::: BlockVue {clientOnly="true" title="DatePicker Selection Modes - Time Mode" file="./docs/components/pickers/js/date-picker-8.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex justify-center">
    <div class="inline-block">
      <bs-date-picker v-model="picker8" class="shadow" mode="time"></bs-date-picker>
      <div class="pt-4" style="color: var(--vp-c-text-1)">
        Output value: <span class="font-weight-semibold">{{ picker8 }}</span>
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

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-datepicker` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-datepicker {
  --md-datepicker-border-radius: var(--md-radius) ;
  --md-datepicker-padding-x: #{vars.$padding-md};
  --md-datepicker-padding-y: #{vars.$padding-md};
  --md-datepicker-bg: var(--background-tertiary);
  --md-datepicker-header-color: #{colors.$white};
  --md-datepicker-header-font-weight: var(--font-weight-medium);
  --md-datepicker-table-header-color: #{colors.$gray-500};
  --md-datepicker-title-font-size: 1.8rem;
  --md-datepicker-subtitle-font-size: 1.25rem;
}

```

## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property     | Type      | Default | Description |
|--------------|-----------|---------|-------------|
| full-width   | `Boolean` | `false`       | Display Date picker in 100% width or occupy its parent element width. |
| button-color | `String`  | `'secondary'` | Sets calendar `date`, `month`, `year` `time` and `navigation` button color. <MdBadge color="info">v2.2.0</MdBadge> <div class="pt-3">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light` and `dark`.</div> |
| header-color | `String`  | `'primary'`   | Date picker header panel background color. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger` and `info`.</div> |
| header-panel | `Boolean` | `true`        | Show or hide header panel. |
| landscape    | `Boolean` | `false`       | Display Date picker in landscape orientation. |
| locale       | `String`  |               | Default locale to be used. Default value is using browser's locale. |
| mode         | `String`  | `'date'`      | DateTime picker view mode, valid values are: `date`, `month`, `year`, `time` or `datetime`. <MdBadge color="info">v2.0.0</MdBadge> |
| model-value <Badge type="tip">v-model</Badge> | `String`&#124;`Number`&#124;`Date` |  | Monitored by `v-model` to maintain the component's value. The value must be convertible to datetime. <MdBadge color="info">v2.0.0</MdBadge><div class="pt-3">The initial value can be: <ol><li>From an ISO 8601 valid string.</li><li>From a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC).</li></ol></div> |
| readonly       | `Boolean` | `false`     | Put Date picker in readonly state. |
| selected-color | `String`  | `'primary'` | Sets selected calendar `date`, `month`, `year` and `time` button color. <MdBadge color="info">v2.2.0</MdBadge> <div class="pt-3">Default is interpolated from `header-color`.</div> |
| surface-class  | `String`  |             | Optional, sets custom css class for date picker's container background and text. <MdBadge color="info">v2.2.0</MdBadge> |
| surface-color <Badge type="warning">deprecated</Badge> | `String` | | Date picker container background color. <div class="pt-2">Use `surface-class` instead.</div> |
| view-mode <Badge type="warning">deprecated</Badge>     | `String` | | Use `mode` property instead. |
| width        | `Number` | `300` | Date picker's container width in pixels. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments     | Description |
|---------|---------------|-------------|
| update:model-value | ( value:`String`) | Fired when this component's `model-value` is updated. <MdBadge color="info">v2.0.0</MdBadge> |

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