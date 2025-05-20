---
outline: [2, 3] 
description: A component that let users toggle the selection of an item on or off. 
---

# Switch


::: lead
**BsSwitch** is a component that let users toggle the selection of an item on or off.
:::


## Overview

**BsSwitch** component mimics the HTML5 `<input type="checkbox">` behaviour. This means 
that you can add attributes like `required`, `readonly`, or `disabled` and it will react 
to them to give the best experience. You can also use `v-model` directive to create two-way 
data bindings on the `model-value` property.


::: BlockVue {title="Switch Example" file="./docs/components/scripts/switch-1.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <bs-switch v-model="switch1" :value="true">
      Enable power meter : <b>{{ switch1 }}</b>
    </bs-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const switch1 = ref<boolean>();
</script>
```
:::


## States

`<bs-switch>` component has states: `disabled` and `readonly`. Use their respective 
property to enable the state.

::: BlockVue {title="Switch States Example" file="./docs/components/scripts/switch-2.js"}

```html
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <bs-switch v-model="switch2" value="off" readonly>Readonly :: OFF</bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch2" value="on" readonly>Readonly :: ON</bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch3" value="off" disabled>Disabled :: OFF</bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch3" value="on" disabled>Disabled :: ON</bs-switch>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const switch2 = ref<string>('on');
const switch3 = ref<string>('on');
</script>

```
:::


## Style Variants

You can style `<bs-switch>` to your own preference or use a style variant 
based on Google **Material Design 2** or **Material Design 3** specifications. 

### Default

`<bs-switch>` default style is based on Google **Material Design 2** specifications.

::: BlockVue {title="Switch with default style" file="./docs/components/scripts/switch-3.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <bs-switch v-model="switch4" value="on">
      Power meter : <b>{{ switch4 }}</b>
    </bs-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const switch4 = ref<string>();
</script>
```
:::


### Inset {class="mt-lg-5"}

Use `inset-mode` property explicitly to enable **inset fill style** appearance.

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.0</SmallNote>

::: BlockVue {title="Switch with inset style" file="./docs/components/scripts/switch-4.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <bs-switch v-model="switch5" value="on" inset-mode>
      Power meter : <b>{{ switch5 }}</b>
    </bs-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const switch5 = ref<string>();
</script>
```
:::


### Inset Outlined {class="mt-lg-5"}

Use `inset-outlined` property explicitly to enable **outline inset fill style** appearance.
This style variant have an appearance that follows Google **Material Design 3** specifications.

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.0</SmallNote>

::: BlockVue {title="Switch with inset outline style" file="./docs/components/scripts/switch-5.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <bs-switch v-model="switch6" value="on" inset-outlined>
      Power meter : <b>{{ switch6 }}</b>
    </bs-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const switch6 = ref<string>();
</script>
```
:::


## Colors

Use `color` property to change `<bs-switch>` color appearance.

<SmallNote color="teal" class="mt-lg-4">Updated on v2.0.0</SmallNote>

::: BlockVue {title="Switch color variants example" file="./docs/components/scripts/switch-6.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <div class="mb-2">
      <bs-switch v-model="switch7" value="on" color="primary"> 
        Color : <b>primary</b> 
      </bs-switch>
    </div>
    <div class="mb-1">
      <bs-switch v-model="switch8" value="on" color="success" inset-mode>
        Color : <b>success</b>
      </bs-switch>
    </div>
    <div class="mb-3">
      <bs-switch v-model="switch9" value="on" color="default-color" inset-outlined>
        Color : <b>default-color</b>
      </bs-switch>
    </div>
    <h6 class="border-bottom pb-2">Switch States</h6>
    <div class="row row-cols-1 row-cols-md-2 mb-3">
      <div class="col">
        <bs-switch v-model="switch10" value="off" color="primary" readonly>
          Readonly :: OFF
        </bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch10" value="on" color="primary" readonly>
          Readonly :: ON
        </bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch10" value="off" color="primary" disabled>
          Disabled :: OFF
        </bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch10" value="on" color="primary" disabled>
          Disabled :: ON
        </bs-switch>
      </div>
    </div>
    <bs-divider></bs-divider>
    <div class="row row-cols-1 row-cols-md-2 mb-2">
      <div class="col">
        <bs-switch v-model="switch10" value="off" color="success" inset-mode readonly>
          Readonly :: OFF
        </bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch10" value="on" color="success" inset-mode readonly>
          Readonly :: ON
        </bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch10" value="off" color="success" inset-mode disabled>
          Disabled :: OFF
        </bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch10" value="on" color="success" inset-mode disabled>
          Disabled :: ON
        </bs-switch>
      </div>
    </div>
    <bs-divider></bs-divider>
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <bs-switch v-model="switch10" value="off" color="default-color" inset-outlined readonly>
          Readonly :: OFF
        </bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch10" value="on" color="default-color" inset-outlined readonly>
          Readonly :: ON
        </bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch10" value="off" color="default-color" inset-outlined disabled>
          Disabled :: OFF
        </bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch10" value="on" color="default-color" inset-outlined disabled>
          Disabled :: ON
        </bs-switch>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const switch7 = ref<string>();
const switch8 = ref<string>();
const switch9 = ref<string>();
const switch10 = ref<string>('on');
</script>
```
:::

<!-- @include: @/components/colors-tip.md -->


## Thumb Icon

Use `checkoff-icon` or `checked-icon` property explicitly to enable icon on `<bs-switch>` thumb.

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.0</SmallNote>

::: BlockVue {title="Switch thumb icon example" file="./docs/components/scripts/switch-7.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <bs-switch v-model="switch11" value="on" color="default-color" checkoff-icon checked-icon inset-mode>
          Power meter : <b>{{ switch11 }}</b>
        </bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch12" value="on" color="deep-orange" checked-icon inset-outlined>
          Power meter : <b>{{ switch12 }}</b>
        </bs-switch>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const switch11 = ref<string>();
const switch12 = ref<string>();
</script>
```
:::

::: info <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">INFO</span>
- `checkoff-icon` works only on **_Inset style_** variant. 
- `checked-icon` works only on **_Inset style_** or **_Inset Outlined style_** variant.
:::


## Label Position

Use `label-position` property to change `<bs-switch>` label positioning. Additionally,
use `label-class` property to fine tune the field label with css classes.

::: BlockVue {clientOnly="true" title="Switch label positioning example" file="./docs/components/scripts/switch-8.js"}

```vue
<template>
  <bs-app class="my-demo-wrapper mobi-card mx-auto">
    <bs-card class="rounded-3" shadow>
      <bs-appbar class="bg-indigo rounded-3 rounded-bottom-0">
        <bs-button color="light-grey" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-white" title="Privacy"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey" icon="more_vert" mode="icon" flat></bs-button>
      </bs-appbar>
      <bs-card-body>
        <div class="mb-2 mt-3">
          <bs-switch
            v-model="switch13"
            color="default-color"
            label-class="flex-fill"
            label-position="left"
            value="on" 
            checked-icon
            inset-outlined
          >
            <div>Permission manager</div>
            <div class="text-grey-600" style="font-size: 80%">App has access to your data</div>
          </bs-switch>
        </div>
        <div class="mb-2">
          <bs-switch
            v-model="switch14"
            color="default-color"
            label-class="flex-fill"
            label-position="left"
            value="on" 
            checked-icon
            inset-outlined
          >
            <div>Camera access</div>
            <div class="text-grey-600" style="font-size: 80%">App has access to your camera</div>
          </bs-switch>
        </div>
        <div class="mb-5">
          <bs-switch
            v-model="switch15"
            color="default-color"
            label-class="flex-fill"
            label-position="left"
            value="on" 
            checked-icon
            inset-outlined
          >
            <div>Show Password</div>
          </bs-switch>
        </div>
        <div class="d-grid gap-3">
          <bs-button color="indigo" @click="submit($notification)">
            <div
              v-if="loading"
              class="spinner-border"
              role="status"
              style="width: 24px; height: 24px; border-width: 3px"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <span v-else>Save</span>
          </bs-button>
        </div>
      </bs-card-body>
    </bs-card>
    <bs-notification></bs-notification>
  </bs-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Helper, type INotificationProvider } from "vue-mdbootstrap";

const loading = ref<boolean>(false);
const switch13 = ref<string>();
const switch14 = ref<string>();
const switch15 = ref<string>();

function submit(notification: INotificationProvider) {
  loading.value = true;
  
  Helper.defer(() => {
    loading.value = false;
    notification.success("Configuration has been saved.", "Success");
  }, 1000);
}
</script>
```
:::


## CSS Variables

<SmallNote color="teal">Added since v2.0.0</SmallNote>

```scss
--md-switch-margin: .5rem .25rem;
--md-switch-thumb-bg: #fafafa;
--md-switch-thumb-color: #fafafa;
--md-switch-thumb-size: 20px;
--md-switch-touch-size: 40px;
--md-switch-track-color: #bdbdbd;
--md-switch-track-height: 14px;
--md-switch-track-width: 38px;
--md-switch-inset-thumb-size: 24px;
--md-switch-inset-track-height: 32px;
--md-switch-inset-track-width: 52px;
--md-switch-outlined-thumb-color: #6c757d;
--md-switch-outlined-thumb-size: 18px;
--md-switch-outlined-stroke: 1.5px;
--md-switch-outlined-stroke-color: #6c757d;
--md-switch-outlined-track-color: #e0e0e0;

--md-switch-active-box-shadow: #{0 0 6px -1px rgba(#000, .13), 0 1px 1px 1px rgba($color, .15), 0 1px 3px 0 rgba(#000, .2)};
--md-switch-active-thumb-bg: #{$color};
--md-switch-active-thumb-color: #{$color};
--md-switch-active-track-color: #{rgba($color, .38)};
--md-switch-active-inset-track-color: #{color.scale($color, $lightness: 60%)};
--md-switch-active-inset-thumb-bg: #{$thumb-bg};
--md-switch-active-inset-thumb-color: #{$thumb-color};

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| checkoff-icon | `Boolean` | `false`     | Enable the component's thumb icon when the component is on **_unchecked_** state. <BsBadge color="info">v2.0.0</BsBadge> |
| checked-icon  | `Boolean` | `false`     | Enable the component's thumb icon when the component is on **_checked_** state. <BsBadge color="info">v2.0.0</BsBadge> |
| color         | `String`  | `'default'` | The component's color appearance. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used. |
| disabled      | `Boolean` | `false`     | Sets the component into disable state and sets the `<input>` element `disabled` attribute. |
| id            | `String`  |  | Sets the `<input>` element `ID` attribute. This property value is auto generates. |
| inset-mode    | `Boolean` | `false`     | Sets the switch style appearance to **_Inset style_**. <BsBadge color="info">v2.0.0</BsBadge> |
| inset-outlined | `Boolean` | `false`    | Sets the switch style appearance to **_Inset Outlined style_**. <BsBadge color="info">v2.0.0</BsBadge> |
| label-class    | `String`/`String[]` |  | Additional css class for the text label. |
| label-position | `String` | `'right'`   | The switch text label position, valid values are: `left`, `right`. |
| model-value <Badge type="tip">v-model</Badge> | `String`/`Number`/`Boolean`/`String[]`/`Number[]` |  | The value monitored by `v-model` to maintain checked state. <BsBadge color="info">v2.0.0</BsBadge> |
| name        | `String`  |  | Sets the `<input>` element `name` attribute. |
| readonly    | `Boolean` | `false` | Sets the component into readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| value <Badge type="danger">required</Badge> | `String`/`Number`/`Boolean` |  | The `<input>` element `value` attribute. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| checked | ( state:`Boolean`) | Triggers after the switch state changed. <BsBadge color="info">v2.0.0</BsBadge> |
| update:model-value | ( value:`String`/`Number`/`Boolean`/`String[]`/`Number[]`) | Used to update the `model-value` property. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-2cols">

| Name        | Description  |
|-------------|--------------|
| default     | The outlet slot used to place the field label. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from "vue";
import { Helper, type INotificationProvider } from "vue-mdbootstrap";

const tabs1active = ref(0);
const loading = ref<boolean>(false);
const switch1 = ref<boolean>();
const switch2 = ref<string>('on');
const switch3 = ref<string>('on');
const switch4 = ref<string>();
const switch5 = ref<string>();
const switch6 = ref<string>();
const switch7 = ref<string>();
const switch8 = ref<string>();
const switch9 = ref<string>();
const switch10 = ref<string>('on');
const switch11 = ref<string>();
const switch12 = ref<string>();
const switch13 = ref<string>();
const switch14 = ref<string>();
const switch15 = ref<string>();

function submit(notification: INotificationProvider) {
  loading.value = true;

  Helper.defer(() => {
    loading.value = false;
    notification.success("Configuration has been saved.", "Success");
  }, 1000);
}

</script>
