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

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants
and [Material Color](/reference/color-variants#material-colors) variants can be
applied to the `color` property.
:::


## Text Label

`<bs-progress-bar>` supports text label to provide additional information. The text
label can be enabled by defining the `show-value` property explicitly and the default
placement can be change using the `value-position` property. The valid values
for `value-position` property are `start`, `end`, `top`, `bottom`, `inside` (_default_).

<SmallNote color="teal">Added since v2.0.3</SmallNote>

::: BlockVue {title="ProgressBar Label Example" file="./docs/components/scripts/progressbar-2.js"}

```vue
<template>
  <div class="my-demo-wrapper bg-white w-100 rounded-3 p-4">
    <bs-progress-bar v-model="progress2" :value-position="position1" show-value></bs-progress-bar>
    <div class="col-md-8 mt-4">
      <bs-combobox v-model="position1" :data-source="positionSrc" filled>
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
import type { TDataSource, TDataListSchemaProps } from 'vue-mdbootstrap';

const progress2 = ref<number>(70);
const position1 = ref<string>('inside');
const positionSrc: TDataSource = {
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


## CSS Variables

The component css variables inherited from 
[Bootstrap Progress](https://getbootstrap.com/docs/5.2/components/progress/#css).

<SmallNote color="teal">Added since v2.0.0</SmallNote>

```scss
--bs-progress-height: 1rem;
--bs-progress-font-size: 0.75rem;
--bs-progress-bg: #e9ecef;
--bs-progress-bar-color: #fff;
--bs-progress-bar-bg: #0d6efd;
--bs-progress-bar-transition: width 0.6s ease;
--bs-progress-border-radius: 0.375rem;
--bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| color    | `String` | | The component color appearance. Any of [MDBootstrap Colors](/reference/color-variants#mdbootstrap-colors) variant or [Material Color](/reference/color-variants#material-colors) variants can be applied. |
| height   | `Number` | | Progress bar thickness. |
| model-value <Badge type="tip">v-model</Badge> | `Number` | `0` | The value monitored by `v-model` to control the progress bar value. |
| rounded  | `Boolean` | `true`  | Set to `false` to remove the rounded border on the side of the progress bar. |
| striped  | `Boolean` | `false` | Enable stripes bar background. |
| striped-animation | `Boolean` | `false` | Enable animated stripes bar background. |
| show-value | `Boolean` | `false` | Display progress bar value as text label or not. |
| value-position | `String` | `'inside'` | Adjust text label placement. Valid values are: `start`, `end`, `top`, `bottom`, `inside`. <BsBadge color="info">v2.0.3</BsBadge> |

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
const thickness1 = ref(5);
const position1 = ref('inside');

const positionSrc: TDataSource = {
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

</script>
