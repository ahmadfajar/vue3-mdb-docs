---
outline: [2, 3] 
description: Progress is a component which are typically used to visualize the data loading progress. 
---

# Progress

:::lead
**BsProgress** is a component which are typically used to visualize the data
loading progress.
:::


## Bar

`<bs-progress>` is typically used to control the visualization of data loading progress. 
The _Bar_ progress type is the default progress control. The `mode` property has three 
valid values, which are: `indeterminate` (_default_), `determinate`, and `buffer`.

::: BlockVue {title="Progress Bar" file="./docs/components/progress-controls/js/progress-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2">
    <bs-progress class="mb-3"></bs-progress>
    <bs-progress v-model="progress1" mode="determinate"></bs-progress>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const progress1 = ref<number>(10);
const timer = ref<number>();

onMounted(() => {
  timer.value = window.setInterval(() => {
    progress1.value += 10;
    if (progress1.value > 100) {
      progress1.value = 0;
    }
  }, 1000);
});

onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>

```
:::


### Buffer Mode {#bar-buffer-mode class="mt-lg-5"}

The _buffer_ mode can only works for _Bar_ progress type. Sets the `mode` property
to `buffer` to enable the buffer mode.

::: BlockVue {title="Progress Bar - Buffer Mode" file="./docs/components/progress-controls/js/progress-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2">
    <bs-progress v-model="progress2" :buffer="buffer1" mode="buffer"></bs-progress>
    <div class="col-sm-6 flex flex-col md-gap-y-5 pt-4">
      <bs-numeric-field 
        v-model="progress2" 
        filled
        floating-label 
        max-value="100" 
        min-value="0"
        suffix="%" 
      >
        <label>Value</label>
      </bs-numeric-field>
      <bs-numeric-field 
        v-model="buffer1" 
        filled
        floating-label 
        max-value="100" 
        min-value="0"
        suffix="%" 
      >
        <label>Buffer</label>
      </bs-numeric-field>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const progress2 = ref<number>(25);
const buffer1 = ref<number>(50);
</script>

```
:::


### Thickness {#bar-thickness class="mt-lg-5"}

Use `height` property to sets the _Bar_ progress thickness.

::: BlockVue {clientOnly="true" title="Progress Bar - Thickness" file="./docs/components/progress-controls/js/progress-3.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2">
    <bs-progress v-model="progress3" :height="thickness1" mode="determinate"></bs-progress>
    <div class="col-sm-6 flex flex-col md-gap-y-5 pt-4">
      <bs-numeric-field 
        v-model="thickness1" 
        filled
        floating-label 
        max-value="50" 
        min-value="0"
      >
        <label>Thickness</label>
      </bs-numeric-field>
      <bs-numeric-field 
        v-model="progress3" 
        filled
        floating-label 
        max-value="100" 
        min-value="0"
        suffix="%" 
      >
        <label>Value</label>
      </bs-numeric-field>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const progress3 = ref<number>(25);
const thickness1 = ref<number>(5);
</script>

```
:::


## Spinner

The _Spinner_ progress type can be enabled by using `type` property sets to `spinner`.

::: BlockVue {title="Progress Spinner" file="./docs/components/progress-controls/js/progress-4.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex justify-center md-gap-8">
    <bs-progress type="spinner"></bs-progress>
    <bs-progress v-model="spinner1" mode="determinate" type="spinner"></bs-progress>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const spinner1 = ref<number>(70);
</script>

```
:::


### Size and Thickness {#spinner-size-and-thickness class="mt-lg-5"}

Use `diameter` property to set the _Spinner_ size and `stroke` property to set its thickness.

::: BlockVue {title="Progress Spinner - Size and Thickness" file="./docs/components/progress-controls/js/progress-4.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex justify-center md-gap-8">
    <bs-progress diameter="80" stroke="8" type="spinner"></bs-progress>
    <bs-progress
      v-model="spinner1"
      diameter="80"
      stroke="12"
      mode="determinate"
      type="spinner"
    ></bs-progress>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const spinner1 = ref<number>(70);
</script>

```
:::


## Colors

You can change the color of _Bar_ or _Spinner_ progress using the `color` property.
Any [Contextual Color](/reference/colors#contextual-colors) variants
can be applied to the `color` property except `dark` and `light` color variants.

::: BlockVue {title="Progress Bar and Spinner Colors" file="./docs/components/progress-controls/js/progress-5.js"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <bs-progress class="mb-3" color="default"></bs-progress>
    <bs-progress v-model="progress1" color="success" mode="determinate"></bs-progress>
    <div class="flex justify-center mt-5">
      <bs-progress class="me-4" color="warning" diameter="80" type="spinner"></bs-progress>
      <bs-progress
        v-model="progress1"
        color="info"
        diameter="80"
        stroke="10"
        mode="determinate"
        type="spinner"
      ></bs-progress>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const progress1 = ref<number>(10);
const timer = ref<number>();

onMounted(() => {
  timer.value = window.setInterval(() => {
    progress1.value += 10;
    if (progress1.value > 100) {
      progress1.value = 0;
    }
  }, 1000);
});

onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>

```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| buffer   | `Number` | `0`     | Progress bar buffer length. |
| color    | `String` | `'primary'` | The component color appearance. |
| diameter | `Number` | `60`    | Spinner diameter value. |
| height   | `Number` | `5`     | Progress bar thickness. |
| mode     | `String` | `'indeterminate'` | Progress control mode, valid values are: `determinate`, `indeterminate`, `buffer`. |
| model-value <Badge type="tip">v-model</Badge> | `Number` | `0` | The value monitored by `v-model` to control the progress value. <MdBadge color="info">v2.0.0</MdBadge> |
| stroke   | `Number` | `6`     | Spinner thickness. |
| type     | `String` | `'bar'` | ProgressControl type, valid values are: `spinner`, `bar`. |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const tabs1active = ref(0);
const timer = ref<number>();
const progress1 = ref(10);
const progress2 = ref(25);
const progress3 = ref(25);
const spinner1 = ref(70);
const buffer1 = ref(50);
const thickness1 = ref(5);

onMounted(() => {
  timer.value = window.setInterval(() => {
    progress1.value += 10;
    if (progress1.value > 100) {
      progress1.value = 0;
    }
  }, 1000);
});

onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>
