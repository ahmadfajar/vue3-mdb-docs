---
description: A component which are typically used for displaying a loading progress with backdrop overlay.
--- 

# Mask Loader


::: lead
**BsMaskLoader** is a component which are typically used for displaying a loading 
progress with backdrop overlay.
:::


## Overview

**BsMaskLoader** uses `<bs-overlay>` and `<bs-progress>` component internally and 
can be used to obscure parent element. With this you can provide information to 
User that the application is busy performing a background task. Example below will 
shows you how to use the `<bs-mask-loader>` component.

::: BlockVue {title="Mask Loader Example" file="./docs/components/scripts/mask-loader-1.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100">
    <bs-card>
      <bs-card-body>
        <bs-card-content type="title">Content Title</bs-card-content>
        <p>Click the button to toggle the Mask Loader.</p>
        <bs-button @click="showLoader = true">Show Loader</bs-button>
      </bs-card-body>
      <bs-mask-loader :show="showLoader" />
    </bs-card>
    <bs-button class="mt-4" color="indigo" @click="showLoader = !showLoader">
      Toggle Loader
    </bs-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showLoader = ref(false);
</script>

```
:::


## Loader Variants

**BsMaskLoader** comes with **four** type variants, which are: `linear` (*default*), 
`linear-alt`, `spinner`, and `grow`. This variant can be sets via `variant` property.

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVue {title="Mask Loader Variants Example" file="./docs/components/scripts/mask-loader-2.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100">
    <div class="mb-4">
      <bs-card>
        <bs-card-body>
          <bs-card-content type="title">Linear Loader</bs-card-content>
          <div class="mt-3">{{ loremIpsum }}</div>
        </bs-card-body>
        <bs-mask-loader :show="showLinear1" />
      </bs-card>
      <bs-button class="mt-4" color="indigo" @click="showLinear1 = !showLinear1">
        Toggle Loader
      </bs-button>
    </div>
    <bs-divider></bs-divider>
    <div class="my-4">
      <bs-card>
        <bs-card-body>
          <bs-card-content type="title">Linear-Alt Loader </bs-card-content>
          <div class="mt-3">{{ loremIpsum }}</div>
        </bs-card-body>
        <bs-mask-loader :show="showLinear2" type="linear-alt" />
      </bs-card>
      <bs-button class="mt-4" color="indigo" @click="showLinear2 = !showLinear2">
        Toggle Loader
      </bs-button>
    </div>
    <bs-divider></bs-divider>
    <div class="my-4">
      <bs-card>
        <bs-card-body>
          <bs-card-content type="title">Spinner Loader</bs-card-content>
          <div class="mt-3">{{ loremIpsum }}</div>
        </bs-card-body>
        <bs-mask-loader :show="showSpinner" type="spinner" />
      </bs-card>
      <bs-button class="mt-4" color="indigo" @click="showSpinner = !showSpinner">
        Toggle Loader
      </bs-button>
    </div>
    <bs-divider></bs-divider>
    <div class="mt-4">
      <bs-card>
        <bs-card-body>
          <bs-card-content type="title">Grow Loader</bs-card-content>
          <div class="mt-3">{{ loremIpsum }}</div>
        </bs-card-body>
        <bs-mask-loader :show="showGrow" type="grow" />
      </bs-card>
      <bs-button class="mt-4" color="indigo" @click="showGrow = !showGrow">
        Toggle Loader
      </bs-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const showLinear1 = ref(false);
const showLinear2 = ref(false);
const showSpinner = ref(false);
const showGrow = ref(false);
</script>

```
:::


## Size and Color

You can change the **Loader** size simply by changing the `spinner-diameter` property value.
And specify the value of the `spinner-color` property to change its color. Any 
[MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) and 
[Material Color](/reference/color-variants#material-colors) variants can be applied 
to the `spinner-color` property. Additionally you can set the value of the `overlay-color` 
property to change the backdrop overlay color.

::: BlockVue {title="Mask Loader Size and Color Example" file="./docs/components/scripts/mask-loader-3.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100">
    <div class="mb-4">
      <bs-card>
        <bs-card-body>
          <bs-card-content type="title">Linear Loader</bs-card-content>
          <div class="mt-3">{{ loremIpsum }}</div>
        </bs-card-body>
        <bs-mask-loader
          :show="showLoader1"
          overlay-color="#064E40"
          spinner-color="red"
          spinner-diameter="60"
          spinner-thickness="8"
        />
      </bs-card>
      <bs-button class="mt-4" color="indigo" @click="showLoader1 = !showLoader1">
        Toggle Loader
      </bs-button>
    </div>
    <bs-divider></bs-divider>
    <div class="my-4">
      <bs-card>
        <bs-card-body>
          <bs-card-content type="title">Linear-Alt Loader </bs-card-content>
          <div class="mt-3">{{ loremIpsum }}</div>
        </bs-card-body>
        <bs-mask-loader
          :show="showLoader2"
          type="linear-alt"
          overlay-color="#064E40"
          spinner-color="blue-green"
          spinner-diameter="60"
          spinner-thickness="8"
        />
      </bs-card>
      <bs-button class="mt-4" color="indigo" @click="showLoader2 = !showLoader2">
        Toggle Loader
      </bs-button>
    </div>
    <bs-divider></bs-divider>
    <div class="my-4">
      <bs-card>
        <bs-card-body>
          <bs-card-content type="title">Spinner Loader</bs-card-content>
          <div class="mt-3">{{ loremIpsum }}</div>
        </bs-card-body>
        <bs-mask-loader
          :show="showSpinnerLoader"
          type="spinner"
          overlay-color="#064E40"
          spinner-color="purple"
          spinner-diameter="60"
        />
      </bs-card>
      <bs-button class="mt-4" color="indigo" @click="showSpinnerLoader = !showSpinnerLoader">
        Toggle Loader
      </bs-button>
    </div>
    <bs-divider></bs-divider>
    <div class="mt-4">
      <bs-card>
        <bs-card-body>
          <bs-card-content type="title">Grow Loader</bs-card-content>
          <div class="mt-3">{{ loremIpsum }}</div>
        </bs-card-body>
        <bs-mask-loader
          :show="showGrowLoader"
          type="grow"
          overlay-color="#064E40"
          spinner-color="danger-color-dark"
          spinner-diameter="60"
        />
      </bs-card>
      <bs-button class="mt-4" color="indigo" @click="showGrowLoader = !showGrowLoader">
        Toggle Loader
      </bs-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const showLoader1 = ref(false);
const showLoader2 = ref(false);
const showSpinnerLoader = ref(false);
const showGrowLoader = ref(false);
</script>
```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type        | Default     | Description |
|-------------|-------------|-------------|-------------|
| fixed-position  | `Boolean` | `false` | Sets the inline css-style `position` property value. If `true` then the inline css-style `position` property is set to `fixed`. |
| overlay-color   | `String`  | `'#000'` | Backdrop overlay color in hex color formatted value. |
| overlay-opacity | `Number`  | `0.5` | Backdrop overlay opacity value. |
| show <Badge type="danger">required</Badge> | `Boolean` | `false` | The component state, `show` or `hide`. |
| spinner-color | `String` | `'primary'` | The spinner color. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) and [Material Color](/reference/color-variants#material-colors) variants can be used. |
| spinner-diameter  | `Number` | `36` | The spinner diameter. |
| spinner-thickness | `Number` | `5` | The spinner thickness. Only valid for `linear` and `linear-alt` variants. |
| spinner-type <Badge type="warning">deprecated</Badge> | `String` |  | Use `type` property instead. |
| type  | `String` | `'linear'` | The spinner types variant. Available types are: `linear`, `linear-alt`, `spinner`, and `grow`. <BsBadge color="info">v2.0.0</BsBadge> |
| transition | `String` | `'fade'` | Animation transition to use when the component becomes visible or invisible. |
| z-index | `Number` | `100` | Sets the inline css-style `z-index` property. |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const showLoader = ref(false);
const showLinear1 = ref(false);
const showLinear2 = ref(false);
const showSpinner = ref(false);
const showGrow = ref(false);
const showLoader1 = ref(false);
const showLoader2 = ref(false);
const showSpinnerLoader = ref(false);
const showGrowLoader = ref(false);
const tabs1active = ref(0);
</script>