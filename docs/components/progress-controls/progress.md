---
outline: [2, 3] 
description: A component which are typically used to visualize the data loading progress. 
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

::: BlockVue {title="Progress Example" file="./docs/components/scripts/progress-1.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100">
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


### Buffer Mode {class="mt-lg-5"}

The _buffer_ mode can only works for _Bar_ progress type. Sets the `mode` property
to `buffer` to enable the buffer mode.

::: BlockVue {title="Progress Bar Buffer Example" file="./docs/components/scripts/progress-2.js"}

```vue
<template>
  <div class="my-demo-wrapper bg-white w-100 rounded-3 p-4">
    <bs-progress v-model="progress2" :buffer="buffer1" mode="buffer"></bs-progress>
    <div class="mt-4 mb-2">Value: <b>{{ progress2 }}%</b></div>
    <input v-model.number="progress2" class="form-range" type="range" />
    <div class="my-2">Buffer: <b>{{ buffer1 }}%</b></div>
    <input v-model.number="buffer1" class="form-range" type="range" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const progress2 = ref<number>(25);
const buffer1 = ref<number>(50);
</script>
```
:::


### Thickness {class="mt-lg-5"}

Use `height` property to sets the _Bar_ progress thickness.

::: BlockVue {clientOnly="true" title="Progress Bar Thickness Example" file="./docs/components/scripts/progress-3.js"}

```vue
<template>
  <div class="my-demo-wrapper bg-white w-100 rounded-3 p-4">
    <bs-progress v-model="progress3" :height="thickness1" mode="determinate"></bs-progress>
    <div class="col-md-8 mt-4">
      <bs-numeric-field v-model="thickness1" min-value="2" max-value="50" filled>
        <label class="col-md-4 col-form-label">Thickness: </label>
      </bs-numeric-field>
    </div>
    <div class="mt-4">
      <div class="mb-2">Value: <b>{{ progress3 }}%</b></div>
      <input v-model.number="progress3" class="form-range" type="range" />
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

::: BlockVue {title="Progress Spinner Example" file="./docs/components/scripts/progress-4.js"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center w-100">
    <bs-progress class="me-4" type="spinner"></bs-progress>
    <bs-progress v-model="spinner1" mode="determinate" type="spinner"></bs-progress>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const spinner1 = ref<number>(70);
</script>
```
:::


### Size and Thickness {class="mt-lg-5"}

Use `diameter` property to set the _Spinner_ size and `stroke` property to set its thickness.

::: BlockVue {title="Progress Spinner Example" file="./docs/components/scripts/progress-4.js"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center w-100">
    <bs-progress class="me-4" diameter="80" stroke="8" type="spinner"></bs-progress>
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
Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants
can be applied to the `color` property.

::: BlockVue {title="Progress Colors Example" file="./docs/components/scripts/progress-5.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100">
    <bs-progress class="mb-3" color="teal"></bs-progress>
    <bs-progress v-model="progress1" color="green" mode="determinate"></bs-progress>
    <div class="d-flex justify-content-center mt-5">
      <bs-progress class="me-4" color="orange" diameter="80" type="spinner"></bs-progress>
      <bs-progress
        v-model="progress1"
        color="danger"
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

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| buffer   | `Number` | `0`     | Progress bar buffer length. |
| color    | `String` | `'primary'` | The component color appearance. Any of [MDBootstrap Colors](/reference/color-variants#mdbootstrap-colors) variant can be applied. |
| diameter | `Number` | `60`    | Spinner diameter value. |
| height   | `Number` | `5`     | Progress bar thickness. |
| mode     | `String` | `'indeterminate'` | Progress control mode, valid values are: `determinate`, `indeterminate`, `buffer`. |
| model-value <Badge type="tip">v-model</Badge> | `Number` | `0` | The value monitored by `v-model` to control the progress value. <BsBadge color="info">v2.0.0</BsBadge> |
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
