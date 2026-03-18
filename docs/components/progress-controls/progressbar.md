---
outline: [2, 3] 
description: ProgressBar is a component featuring support for animated background and text labels which are typically used for displaying simple progress bar. 
---

# ProgressBar

:::lead
**BsProgressBar** is a component featuring support for animated background and text 
labels which are typically used for displaying simple progress bar.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>


## Overview

`<bs-progress-bar>` is a lightweight component for displaying simple progress bar. 
Although it is simple component, it can be customized with many options to make it 
look beautiful. For example, the `color` property can be used to change the bar color. 
Text label to provide additional information, flexible striped bar color and animated 
striped bar color.

::: BlockVue {title="ProgressBar Overview" file="./docs/components/progress-controls/js/progressbar-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2">
    <bs-progress-bar v-model="progress1" color="indigo"></bs-progress-bar>
    <div class="col-sm-6 mt-4">
      <bs-numeric-field 
        v-model="progress1" 
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

const progress1 = ref<number>(25);
</script>

```
:::

::: info <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">INFO</span>
- **BsProgressBar** originally used [Bootstrap CSS](https://getbootstrap.com/docs/5.2/components/progress/) 
  classes. However, since v2.2.0, **BsProgressBar** no longer uses Bootstrap CSS. This improvement 
  allows **BsProgressBar** to work seamlessly with both TailwindCSS and Bootstrap CSS frameworks.
- The bundle only provide contextual color variants. It is located
  at `dist/theme-light.css` and `dist/theme-dark.css` files. 
:::


## Text Label

`<bs-progress-bar>` supports text label to provide additional information. It can be created 
from progress bar value or by providing a custom text label.

### Simple {#text-label-simple}

Here the text label is created from the progress bar value and can be enabled by defining 
the `show-value` property explicitly and the placement can be change using the
`value-position` property. The valid values for `value-position` property are `start`, 
`end`, `top`, `bottom`, `inside` (_default_).

<SmallNote color="teal">Added in v2.0.3</SmallNote>

::: BlockVue {title="ProgressBar with Simple Text Label" file="./docs/components/progress-controls/js/progressbar-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2">
    <bs-progress-bar v-model="progress2" :value-position="position1" show-value></bs-progress-bar>
    <div class="col-sm-6 mt-4">
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
    </div>
    <div class="col-sm-6 mt-4">
      <bs-combobox v-model="position1" :data-source="position1Src" filled floating-label>
        <label>Value Position</label>
      </bs-combobox>
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


### Custom {#text-label-custom class="mt-lg-5"}

Here the text label is created from a custom text by providing a simple text to the 
`label` property. The placement can be change using the `label-position` property.
The valid values for `label-position` property are `top` (_default_), `bottom`, `start`, `end`.

<SmallNote color="teal">Added in v2.0.10</SmallNote>

::: BlockVue {title="ProgressBar with Custom Text Label" file="./docs/components/progress-controls/js/progressbar-5.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2">
    <bs-progress-bar 
      v-model="progress3" 
      :label-position="position2" 
      color="purple"
      label="Marketing Progress" 
      label-alignment="start" 
      show-value>
    </bs-progress-bar>
    <div class="col-sm-6 mt-4">
      <bs-combobox v-model="position2" :data-source="position2Src" filled floating-label>
        <label>Label Position</label>
      </bs-combobox>
    </div>
    <div class="col-sm-6 mt-4">
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
import { BsArrayStore } from 'vue-mdbootstrap';
import type { TDataSource, TDataListSchemaProps, TProgressBarLabelPosition } from 'vue-mdbootstrap';

const progress3 = ref<number>(80);
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

### Thickness {#styling-thickness}

The progress bar thickness can be adjust by using the `height` property.

::: BlockVue {clientOnly="true" title="ProgressBar Styling - Thickness" file="./docs/components/progress-controls/js/progressbar-3.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2">
    <bs-progress-bar v-model="progress4" :height="thickness1"></bs-progress-bar>
    <div class="col-sm-6 mt-4">
      <bs-numeric-field 
        v-model="thickness1" 
        max-value="50" 
        min-value="2" 
        filled 
        floating-label
      >
        <label>Thickness: </label>
      </bs-numeric-field>
    </div>
    <div class="col-sm-6 mt-4">
      <bs-numeric-field 
        v-model="progress4" 
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

const progress4 = ref<number>(25);
const thickness1 = ref<number>(5);
</script>

```
:::


### Stripes {#styling-stripes class="mt-lg-5"}

Stripes progress bar can be enabled by defining the `striped` property explicitly and 
sets the stripes color using the `color` property.


::: BlockVue {title="ProgressBar Styling - Stripes" file="./docs/components/progress-controls/js/progressbar-4.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2">
    <bs-progress-bar
      v-model="progress5"
      class="mb-2"
      color="danger"
      height="12"
      striped
    ></bs-progress-bar>
    <bs-progress-bar v-model="progress6" class="mb-2" color="purple" striped></bs-progress-bar>
    <bs-progress-bar
      v-model="progress7"
      color="indigo"
      height="18"
      striped
    ></bs-progress-bar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const progress5 = ref<number>(50);
const progress6 = ref<number>(65);
const progress7 = ref<number>(80);
</script>

```
:::


### Animated Stripes {#styling-animated-stripes class="mt-lg-5"}

Animated stripes progress bar can be enabled by defining the `striped` and
`striped-animation` property explicitly and sets the stripes color using the `color` property.


::: BlockVue {title="ProgressBar Styling - Animated Stripes" file="./docs/components/progress-controls/js/progressbar-4.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2">
    <bs-progress-bar
      v-model="progress5"
      class="mb-2"
      color="danger"
      height="12"
      striped
      striped-animation
    ></bs-progress-bar>
    <bs-progress-bar
      v-model="progress6"
      class="mb-2"
      color="purple"
      striped
      striped-animation
    ></bs-progress-bar>
    <bs-progress-bar
      v-model="progress7"
      color="indigo"
      height="18"
      striped
      striped-animation
    ></bs-progress-bar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const progress5 = ref<number>(50);
const progress6 = ref<number>(65);
const progress7 = ref<number>(80);
</script>

```
:::


## Advanced Example

The following is an example that demonstrate more advanced use of `<bs-progress-bar>`. 

::: BlockVue {title="ProgressBar Advanced Usage" file="./docs/components/progress-controls/js/progressbar-6.js"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <bs-card class="mobi-card mx-auto">
      <bs-card-header class="flex items-center bg-indigo text-light">
        <div class="h4 mb-0">Revenue</div>
        <bs-spacer></bs-spacer>
        <bs-button color="light" icon="more_vert" mode="icon" flat></bs-button>
      </bs-card-header>
      <bs-card-body class="mb-3">
        <bs-card-content type="title">By Location</bs-card-content>
        <div v-for="item in revenues" :key="item.city" class="flex items-end mt-3">
          <bs-progress-bar
            :model-value="item.revenue/1000"
            :label="item.city"
            class="flex-fill"
            height="12"
            inner-cls="rounded"
            label-alignment="start"
          ></bs-progress-bar>
          <div class="font-weight-semibold ps-2" style="font-size: 12px">
            {{ Helper.roundNumber(item.revenue/1000, 1) }} K
          </div>
        </div>
      </bs-card-body>
    </bs-card>
  </div>
</template>

<script lang="ts" setup>
import { Helper } from 'vue-mdbootstrap';

const revenues = [
  {city: 'New York', revenue: '72345'},
  {city: 'San Fransisco', revenue: '39145'},
  {city: 'Sidney', revenue: '25139'},
  {city: 'Singapore', revenue: '61439'},
]
</script>

```
:::

## CSS Variables
As CSS technology evolves, Vue MDBootstrap introduces local CSS variables 
on `.md-progressbar-simple` for better customization.

<SmallNote color="teal">Updated in v2.2.1</SmallNote>

```scss
.md-progressbar-simple {
  --md-progress-bg: #{vars.$progress-bg};
  --md-progress-bar-bg: #{vars.$progress-bar-bg};
  --md-progress-bar-color: #{vars.$progress-bar-color};
  --md-progress-bar-transition: #{vars.$progress-bar-transition};
  --md-progress-border-radius: #{vars.$progress-border-radius};
  --md-progress-box-shadow: #{vars.$progress-box-shadow};
  --md-progress-color: currentColor;
  --md-progress-font-size: #{vars.$progress-font-size};
  --md-progress-height: #{vars.$progress-height};
  --md-progress-label-font-size: 0.825rem;
  --md-progress-label-font-weight: 600;
}

```

## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| color    | `String` | | The control bar color appearance. Any of [Colors](/reference/colors) variants can be applied. |
| height   | `Number` | | Progress bar thickness. |
| inner-cls   | `String` | | Optional, control bar css classes. <MdBadge color="info">v2.0.10</MdBadge> |
| label   | `String` | | The ProgressBar text label. <MdBadge color="info">v2.0.10</MdBadge> |
| label-alignment   | `String` | `'center'` | The ProgressBar text label alignment. Valid values are: `start`, `end`, `center`. <MdBadge color="info">v2.0.10</MdBadge> |
| label-position   | `String` | `'top'` | The ProgressBar label position. Valid values are: `top`, `bottom`, `start`, `end`. <MdBadge color="info">v2.0.10</MdBadge> |
| model-value <Badge type="tip">v-model</Badge> | `Number` | `0` | The value monitored by `v-model` to control the progress bar value. |
| rounded-off  | `Boolean` | `false`  | Remove the rounded side border of the progress bar. <MdBadge color="info">v2.0.10</MdBadge> |
| striped  | `Boolean` | `false` | Create striped progress bar. |
| striped-animation | `Boolean` | `false` | Create animated stripe progress bar. |
| show-value | `Boolean` | `false` | Display progress bar value as text label or not. |
| value-position | `String` | `'inside'` | Adjust text label placement. Valid values are: `inside`, `top`, `bottom`, `start`, `end`. <MdBadge color="info">v2.0.3</MdBadge> |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { ref } from 'vue';
import type { TDataSource, TDataListSchemaProps } from 'vue-mdbootstrap';
import { BsArrayStore, Helper } from 'vue-mdbootstrap';

const tabs1active = ref(0);
const progress1 = ref(25);
const progress2 = ref(70);
const progress3 = ref(80);
const progress4 = ref(25);
const progress5 = ref(50);
const progress6 = ref(65);
const progress7 = ref(80);
const thickness1 = ref(5);

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

const revenues = [
  {city: 'New York', revenue: '72345'},
  {city: 'San Fransisco', revenue: '39145'},
  {city: 'Sidney', revenue: '25139'},
  {city: 'Singapore', revenue: '61439'},
]
</script>
