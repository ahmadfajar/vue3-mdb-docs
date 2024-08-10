---
outline: [2, 3]
---

# Progress Bar

:::lead
**BsProgressBar** is bootstrap progress bar's component featuring support for
animated background and text labels which are typically used for displaying
simple progress bar.
:::

<SmallNote color="teal">Added since v2.0.0</SmallNote>


## Overview

`<bs-progress-bar>` is built from [Bootstrap](https://getbootstrap.com/docs/5.2/components/progress/)
progress bar's component. Although it is a simple progress bar, it can be customized
with many options to make it look beautiful. For example, the `color` property can
be used to change the bar color. Text label to provide additional information,
flexible striped bar color and animated striped bar color.


::: BlockVue {title="ProgressBar Example" file="./docs/components/scripts/progressbar-1.js"}

```vue
<template>
  <div class="my-demo-wrapper bg-white w-100 rounded-3 p-4">
    <bs-progress-bar v-model="progress1" color="indigo"></bs-progress-bar>
    <div class="mt-4">
      <div class="mb-2">
        Value: <b>{{ progress1 }}%</b>
      </div>
      <input v-model.number="progress1" class="form-range" type="range" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const progress1 = ref<number>(25);
</script>
```
:::

<!-- @include: @/components/colors-tip.md -->


## Text Label

`<bs-progress-bar>` supports text label to provide additional information. It can be created 
from progress bar value or by providing a custom text label.

### Simple

Here the text label is created from the progress bar value and can be enabled by defining 
the `show-value` property explicitly and the placement can be change using the
`value-position` property. The valid values for `value-position` property are `start`, 
`end`, `top`, `bottom`, `inside` (_default_).

<SmallNote color="teal">Added since v2.0.3</SmallNote>

::: BlockVue {title="ProgressBar Label Example" file="./docs/components/scripts/progressbar-2.js"}

```vue
<template>
  <div class="my-demo-wrapper bg-white w-100 rounded-3 p-4">
    <bs-progress-bar v-model="progress2" :value-position="position1" show-value></bs-progress-bar>
    <div class="col-md-8 mt-4">
      <bs-combobox v-model="position1" :data-source="position1Src" filled>
        <label class="col-md-4 col-form-label">Value Position</label>
      </bs-combobox>
    </div>
    <div class="mt-4">
      <div class="mb-2">
        Value: <b>{{ progress2 }}%</b>
      </div>
      <input v-model.number="progress2" class="form-range" type="range" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsArrayStore } from 'vue-mdbootstrap';
import type { TDataSource, TDataListSchemaProps, TProgressBarValuePosition } from 'vue-mdbootstrap';

const progress2 = ref<number>(70);
const position1 = ref<TProgressBarValuePosition>('inside');
const position1Src: TDataSource = {
  proxy: new BsArrayStore(
    [
      { id: 'inside', text: 'Inside' },
      { id: 'start', text: 'Start' },
      { id: 'end', text: 'End' },
      { id: 'top', text: 'Top' },
      { id: 'bottom', text: 'Bottom' }
    ],
    {
      idProperty: 'id'
    }
  ),
  schema: { displayField: 'text', valueField: 'id' } as TDataListSchemaProps
};
</script>
```
:::


### Custom {class="mt-lg-5"}

Here the text label is created from a custom text by providing a simple text to the 
`label` property. The placement can be change using the `label-position` property.
The valid values for `label-position` property are `top` (_default_), `bottom`, `start`, `end`.

<SmallNote color="teal">Added since v2.0.10</SmallNote>

::: BlockVue {title="ProgressBar Custom Label Example" file="./docs/components/scripts/progressbar-5.js"}

```vue
<template>
  <div class="my-demo-wrapper bg-white w-100 rounded-3 p-4">
    <bs-progress-bar 
      v-model="progress7" 
      :label-position="position2" 
      color="purple"
      label="Marketing Progress" 
      label-alignment="start" 
      show-value>
    </bs-progress-bar>
    <div class="col-md-8 mt-4">
      <bs-combobox v-model="position2" :data-source="position2Src" filled>
        <label class="col-md-4 col-form-label">Label Position</label>
      </bs-combobox>
    </div>
    <div class="mt-4">
      <div class="mb-2">
        Value: <b>{{ progress7 }}%</b>
      </div>
      <input v-model.number="progress7" class="form-range" type="range" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsArrayStore } from 'vue-mdbootstrap';
import type { TDataSource, TDataListSchemaProps, TProgressBarLabelPosition } from 'vue-mdbootstrap';

const progress7 = ref<number>(80);
const position2 = ref<TProgressBarLabelPosition>('top');
const position2Src: TDataSource = {
  proxy: new BsArrayStore(
    [
      { id: 'top', text: 'Top' },
      { id: 'bottom', text: 'Bottom' },
      { id: 'start', text: 'Start' },
      { id: 'end', text: 'End' },
    ],
    {
      idProperty: 'id'
    }
  ),
  schema: { displayField: 'text', valueField: 'id' } as TDataListSchemaProps
};
</script>
```
:::


## Styling

### Thickness

The progress bar thickness can be adjust by using the `height` property.

::: BlockVue {clientOnly="true" title="ProgressBar Thickness Example" file="./docs/components/scripts/progressbar-3.js"}

```vue
<template>
  <div class="my-demo-wrapper bg-white w-100 rounded-3 p-4">
    <bs-progress-bar v-model="progress3" :height="thickness1"></bs-progress-bar>
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


### Stripes {class="mt-lg-5"}

Stripes progress bar can be enabled by defining the `striped` property explicitly and 
sets the stripes color using the `color` property.


::: BlockVue {title="ProgressBar Stripes Example" file="./docs/components/scripts/progressbar-4.js"}

```vue
<template>
  <div class="my-demo-wrapper bg-white w-100 rounded-3 p-4">
    <bs-progress-bar
      v-model="progress4"
      class="mb-2"
      color="danger"
      height="12"
      striped
    ></bs-progress-bar>
    <bs-progress-bar v-model="progress5" class="mb-2" color="purple" striped></bs-progress-bar>
    <bs-progress-bar
      v-model="progress6"
      color="indigo"
      height="18"
      striped
    ></bs-progress-bar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const progress4 = ref<number>(50);
const progress5 = ref<number>(65);
const progress6 = ref<number>(80);
</script>
```
:::


### Animated Stripes {class="mt-lg-5"}

Animated stripes progress bar can be enabled by defining the `striped` and
`striped-animation` property explicitly and sets the stripes color using the `color` property.


::: BlockVue {title="ProgressBar Animated Stripes Example" file="./docs/components/scripts/progressbar-4.js"}

```vue
<template>
  <div class="my-demo-wrapper bg-white w-100 rounded-3 p-4">
    <bs-progress-bar
      v-model="progress4"
      class="mb-2"
      color="danger"
      height="12"
      striped
      striped-animation
    ></bs-progress-bar>
    <bs-progress-bar
      v-model="progress5"
      class="mb-2"
      color="purple"
      striped
      striped-animation
    ></bs-progress-bar>
    <bs-progress-bar
      v-model="progress6"
      color="indigo"
      height="18"
      striped
      striped-animation
    ></bs-progress-bar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const progress4 = ref<number>(50);
const progress5 = ref<number>(65);
const progress6 = ref<number>(80);
</script>
```
:::


## Advanced Example

The following is an example that demonstrate more advanced use of `<bs-progress-bar>`. 

::: BlockVue {title="ProgressBar Advanced Example" file="./docs/components/scripts/progressbar-6.js"}

```vue
<template>
  <bs-app-container class="my-demo-wrapper mobi-card mx-auto">
    <bs-card class="rounded-3" shadow>
      <bs-appbar class="bg-indigo rounded-3 rounded-bottom-0">
        <bs-appbar-title class="text-white" title="Dashboard - Revenue"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey" icon="more_vert" mode="icon" flat></bs-button>
      </bs-appbar>
      <bs-card-body class="dashboard-widgets">
        <bs-card-content type="title">By Location</bs-card-content>
        <div class="d-flex align-items-end mt-4">
          <bs-progress-bar
            v-model="newYork"
            class="flex-grow-1"
            color="indigo"
            height="12"
            inner-cls="rounded-end"
            label="New York"
            label-alignment="start"
          ></bs-progress-bar>
          <div class="value-label">{{ newYork }}k</div>
        </div>
        <div class="d-flex align-items-end mt-3">
          <bs-progress-bar
            v-model="sanFransisco"
            class="flex-grow-1"
            color="indigo"
            height="12"
            inner-cls="rounded-end"
            label="San Fransisco"
            label-alignment="start"
          ></bs-progress-bar>
          <div class="value-label">{{ sanFransisco }}k</div>
        </div>
        <div class="d-flex align-items-end mt-3">
          <bs-progress-bar
            v-model="sydney"
            class="flex-grow-1"
            color="indigo"
            height="12"
            inner-cls="rounded-end"
            label="Sydney"
            label-alignment="start"
          ></bs-progress-bar>
          <div class="value-label">{{ sydney }}k</div>
        </div>
        <div class="d-flex align-items-end my-3">
          <bs-progress-bar
            v-model="singapore"
            class="flex-grow-1"
            color="indigo"
            height="12"
            inner-cls="rounded-end"
            label="Singapore"
            label-alignment="start"
          ></bs-progress-bar>
          <div class="value-label">{{ singapore }}k</div>
        </div>
      </bs-card-body>
    </bs-card>
  </bs-app-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const newYork = ref<number>(72);
const sanFransisco = ref<number>(39);
const sydney = ref<number>(25);
const singapore = ref<number>(61);
</script>

<style>
.my-demo-wrapper { width: 100%; padding: 1rem; }
.dashboard-widgets .md-progress-wrapper + .value-label {
  font-size: .8rem;
  font-weight: 600;
  margin-left: .5rem;
}
</style>
```
:::

## CSS Variables

The component css variables inherited from 
[Bootstrap Progress](https://getbootstrap.com/docs/5.2/components/progress/#css).

<SmallNote color="teal">Updated on v2.0.10</SmallNote>

```scss
--bs-progress-height: 1rem;
--bs-progress-font-size: 0.75rem;
--bs-progress-bg: #e9ecef;
--bs-progress-bar-color: #fff;
--bs-progress-bar-bg: #0d6efd;
--bs-progress-bar-transition: width 0.6s ease;
--bs-progress-border-radius: 0.375rem;
--bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);

// custom variables
--md-progress-color: currentColor;
--md-progress-font-size: .75rem;
--md-progress-label-font-size: .825rem;
--md-progress-label-font-weight: 600;

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| color    | `String` | | The control bar color appearance. Any of [MDBootstrap Colors](/reference/color-variants#mdbootstrap-colors) variant or [Material Color](/reference/color-variants#material-colors) variants can be applied. |
| height   | `Number` | | Progress bar thickness. |
| inner-cls   | `String` | | Optional, control bar css classes. <BsBadge color="info">v2.0.10</BsBadge> |
| label   | `String` | | The ProgressBar text label. <BsBadge color="info">v2.0.10</BsBadge> |
| label-alignment   | `String` | `'center'` | The ProgressBar text label alignment. Valid values are: `start`, `end`, `center`. <BsBadge color="info">v2.0.10</BsBadge> |
| label-position   | `String` | `'top'` | The ProgressBar label position. Valid values are: `top`, `bottom`, `start`, `end`. <BsBadge color="info">v2.0.10</BsBadge> |
| model-value <Badge type="tip">v-model</Badge> | `Number` | `0` | The value monitored by `v-model` to control the progress bar value. |
| rounded-off  | `Boolean` | `false`  | Remove the rounded side border of the progress bar. <BsBadge color="info">v2.0.10</BsBadge> |
| striped  | `Boolean` | `false` | Create striped progress bar. |
| striped-animation | `Boolean` | `false` | Create animated stripe progress bar. |
| show-value | `Boolean` | `false` | Display progress bar value as text label or not. |
| value-position | `String` | `'inside'` | Adjust text label placement. Valid values are: `inside`, `top`, `bottom`, `start`, `end`. <BsBadge color="info">v2.0.3</BsBadge> |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { ref } from 'vue';
import type { TDataSource, TDataListSchemaProps } from 'vue-mdbootstrap';
import { BsArrayStore } from 'vue-mdbootstrap';

const tabs1active = ref(0);
const progress1 = ref(25);
const progress2 = ref(70);
const progress3 = ref(25);
const progress4 = ref(50);
const progress5 = ref(65);
const progress6 = ref(80);
const progress7 = ref(80);
const thickness1 = ref(5);
const newYork = ref(72);
const sanFransisco = ref(39);
const sydney = ref(25);
const singapore = ref(61);

const position1 = ref('inside');
const position2 = ref('top');

const position1Src: TDataSource = {
  proxy: new BsArrayStore(
    [
      { id: 'inside', text: 'Inside' },
      { id: 'start', text: 'Start' },
      { id: 'end', text: 'End' },
      { id: 'top', text: 'Top' },
      { id: 'bottom', text: 'Bottom' },
    ],
    {
      idProperty: 'id'
    }
  ),
  schema: { displayField: 'text', valueField: 'id' } as TDataListSchemaProps
};
const position2Src: TDataSource = {
  proxy: new BsArrayStore(
    [
      { id: 'top', text: 'Top' },
      { id: 'bottom', text: 'Bottom' },
      { id: 'start', text: 'Start' },
      { id: 'end', text: 'End' },
    ],
    {
      idProperty: 'id'
    }
  ),
  schema: { displayField: 'text', valueField: 'id' } as TDataListSchemaProps
};
</script>

<style>
.dashboard-widgets .md-progress-wrapper + .value-label {
  font-size: .8rem;
  font-weight: 600;
  margin-left: .5rem;
}
</style>