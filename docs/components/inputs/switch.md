---
outline: [2, 3] 
description: Switch button is a component that let users toggle the selection of an item on or off. 
---

# Switch Button


::: lead
**BsSwitch** is a component that let users toggle the selection of an item on or off.
:::


## Overview

**BsSwitch** component mimics the HTML5 `<input type="checkbox">` behaviour. This means 
that you can add attributes like `required`, `readonly`, or `disabled` and it will react 
to them to give the best experience. You can also use `v-model` directive to create two-way 
data bindings on the `model-value` property.


::: BlockVue {title="Switch Button Overview" file="./docs/components/inputs/js/switch-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
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

::: BlockVue {title="Switch Button States" file="./docs/components/inputs/js/switch-2.js"}

```html
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <div class="row row-cols-1 row-cols-sm-2">
      <div class="col mb-2">
        <bs-switch v-model="switch2" value="off" readonly>Readonly :: OFF</bs-switch>
      </div>
      <div class="col mb-2">
        <bs-switch v-model="switch2" value="on" readonly>Readonly :: ON</bs-switch>
      </div>
      <div class="col mb-2 mb-sm-0">
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

### Default {#style-variants-default}

`<bs-switch>` default style is based on Google **Material Design 2** specifications.

::: BlockVue {title="Switch Button Style Variants - Default" file="./docs/components/inputs/js/switch-3.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-switch v-model="switch4" value="on">
      Power meter : <b>{{ switch4 || 'off' }}</b>
    </bs-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const switch4 = ref<string>();
</script>

```
:::


### Inset {#style-variants-inset class="mt-lg-5"}

Use `inset-mode` property explicitly to enable **inset fill style** appearance.

<SmallNote color="teal">Added in v2.0.0</SmallNote>

::: BlockVue {title="Switch Button Style Variants - Inset" file="./docs/components/inputs/js/switch-4.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-switch v-model="switch5" value="on" inset-mode>
      Power meter : <b>{{ switch5 || 'off' }}</b>
    </bs-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const switch5 = ref<string>();
</script>

```
:::


### Inset Outlined {#style-variants-inset-outlined class="mt-lg-5"}

Use `inset-outlined` property explicitly to enable **outline inset fill style** appearance.
This style variant have an appearance that follows Google **Material Design 3** specifications.

<SmallNote color="teal">Added in v2.0.0</SmallNote>

::: BlockVue {title="Switch Button Style Variants - Inset Outlined" file="./docs/components/inputs/js/switch-5.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-switch v-model="switch6" value="on" inset-outlined>
      Power meter : <b>{{ switch6 || 'off' }}</b>
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

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {title="Switch Button Colors" file="./docs/components/inputs/js/switch-6.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <div class="flex flex-col md-gap-3">
      <bs-switch v-model="switch7" value="on" color="primary"> 
        Color : <b>primary</b> 
      </bs-switch>
      <bs-switch v-model="switch8" value="on" color="success" inset-mode>
        Color : <b>success</b>
      </bs-switch>
      <bs-switch v-model="switch9" value="on" color="warning" inset-outlined>
        Color : <b>warning</b>
      </bs-switch>
    </div>

    <div class="h5 border-b pt-4 pb-2">Switch States</div>
    <div class="row row-cols-1 row-cols-sm-2 my-3">
      <div class="col mb-2">
        <bs-switch v-model="switch10" value="off" color="primary" readonly>
          Readonly :: OFF
        </bs-switch>
      </div>
      <div class="col mb-2">
        <bs-switch v-model="switch10" value="on" color="primary" readonly>
          Readonly :: ON
        </bs-switch>
      </div>
      <div class="col mb-2 mb-sm-0">
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
    <div class="row row-cols-1 row-cols-sm-2 my-3">
      <div class="col mb-2">
        <bs-switch v-model="switch10" value="off" color="success" inset-mode readonly>
          Readonly :: OFF
        </bs-switch>
      </div>
      <div class="col mb-2">
        <bs-switch v-model="switch10" value="on" color="success" inset-mode readonly>
          Readonly :: ON
        </bs-switch>
      </div>
      <div class="col mb-2 mb-sm-0">
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
    <div class="row row-cols-1 row-cols-sm-2 mt-3">
      <div class="col mb-2">
        <bs-switch v-model="switch10" value="off" color="warning" inset-outlined readonly>
          Readonly :: OFF
        </bs-switch>
      </div>
      <div class="col mb-2">
        <bs-switch v-model="switch10" value="on" color="warning" inset-outlined readonly>
          Readonly :: ON
        </bs-switch>
      </div>
      <div class="col mb-2 mb-sm-0">
        <bs-switch v-model="switch10" value="off" color="warning" inset-outlined disabled>
          Disabled :: OFF
        </bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch10" value="on" color="warning" inset-outlined disabled>
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


## Thumb Icon

Use `checkoff-icon` or `checked-icon` property explicitly to enable icon on `<bs-switch>` thumb.

<SmallNote color="teal">Added in v2.0.0</SmallNote>

::: BlockVue {title="Switch Button Thumb Icon" file="./docs/components/inputs/js/switch-7.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <div class="row row-cols-1 row-cols-sm-2">
      <div class="col mb-2 mb-sm-0">
        <bs-switch v-model="switch11" value="on" checkoff-icon checked-icon inset-mode>
          Power meter : <b>{{ switch11 || 'off' }}</b>
        </bs-switch>
      </div>
      <div class="col">
        <bs-switch v-model="switch12" value="on" checked-icon inset-outlined>
          Power meter : <b>{{ switch12 || 'off' }}</b>
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
- `checkoff-icon` works only on **_Inset_** style variant. 
- `checked-icon` works only on **_Inset_** or **_Inset Outlined_** style variant.
:::


## Label Position

Use `label-position` property to change `<bs-switch>` label positioning. Additionally,
use `label-class` property to fine tune the field label with css classes.

::: BlockVue {clientOnly="true" title="Switch Button Label Positioning" file="./docs/components/inputs/js/switch-8.js"}

```vue
<template>
  <bs-app class="p-2">
    <bs-card class="mobi-card w-full mx-auto" shadow>
      <bs-appbar class="bg-indigo">
        <bs-button color="light" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-light" title="Privacy"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light" icon="more_vert" mode="icon" flat></bs-button>
      </bs-appbar>
      <bs-card-body>
        <div class="mb-2 mt-2">
          <bs-switch
            v-model="switch13"
            label-class="flex-fill"
            label-position="left"
            value="on" 
            checked-icon
            inset-outlined
          >
            <div>Permission manager</div>
            <div class="text-subtle-secondary" style="font-size: 80%">
              App has access to your data
            </div>
          </bs-switch>
        </div>
        <div class="mb-2">
          <bs-switch
            v-model="switch14"
            label-class="flex-fill"
            label-position="left"
            value="on" 
            checked-icon
            inset-outlined
          >
            <div>Camera access</div>
            <div class="text-subtle-secondary" style="font-size: 80%">
              App has access to your camera
            </div>
          </bs-switch>
        </div>
        <div class="mb-4">
          <bs-switch
            v-model="switch15"
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
          <bs-button @click="submit($notification)">
            <bs-spin-loader
              v-if="loading"
              role="status"
              size="24"
              thickness="3">
            </bs-spin-loader>
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

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-switch` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-switch {
  --md-switch-box-shadow: #{vars.$switch-shadows};
  --md-switch-margin: #{vars.$switch-margin};
  --md-switch-thumb-bg: #{colors.$neutral-lighten-5};
  --md-switch-thumb-color: #{colors.$neutral-lighten-5};
  --md-switch-thumb-size: #{vars.$switch-thumb-size};
  --md-switch-touch-size: #{vars.$switch-touch-size};
  --md-switch-track-color: #{colors.$neutral-lighten-2};
  --md-switch-track-height: #{vars.$switch-track-height};
  --md-switch-track-width: #{vars.$switch-track-width};
  --md-switch-inset-thumb-size: #{vars.$switch-inset-thumb-size};
  --md-switch-inset-track-height: #{vars.$switch-inset-track-height};
  --md-switch-inset-track-width: #{vars.$switch-inset-track-width};
  --md-switch-outlined-thumb-color: #{colors.$gray-500};
  --md-switch-outlined-thumb-size: #{vars.$switch-outlined-thumb-size};
  --md-switch-outlined-stroke: #{vars.$switch-outline-stroke};
  --md-switch-outlined-stroke-color: #{colors.$gray-500};
  --md-switch-outlined-track-color: #{colors.$neutral-lighten-3};
  --md-switch-disabled-box-shadow: #{vars.$switch-disabled-shadows};
  --md-switch-disabled-thumb-bg: #{colors.$neutral-lighten-2};
  --md-switch-disabled-thumb-color: #{colors.$neutral-base};
  --md-switch-disabled-track-color: #{colors.$gray-300};

  --md-switch-active-box-shadow: #{0 0 6px -1px rgba(#000, .13), 0 1px 1px 1px rgba($color, .15), 0 1px 3px 0 rgba(#000, .2)};
  --md-switch-active-thumb-bg: #{$color};
  --md-switch-active-thumb-color: #{$color};
  --md-switch-active-track-color: #{color.change($color, $alpha: 0.38)};
  --md-switch-active-inset-track-color: #{$track-color};
  --md-switch-active-inset-thumb-bg: #{$thumb-bg};
  --md-switch-active-inset-thumb-color: #{$thumb-color};
  --md-switch-active-outlined-stroke-color: #{color.change($track-color, $alpha: 0.15)};
}

```

## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| checkoff-icon | `Boolean` | `false`     | Enable the component's thumb icon when the component is on **_unchecked_** state. <MdBadge color="info">v2.0.0</MdBadge> |
| checked-icon  | `Boolean` | `false`     | Enable the component's thumb icon when the component is on **_checked_** state. <MdBadge color="info">v2.0.0</MdBadge> |
| color         | `String`  | `'default'` | The component's color appearance. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3" style="min-width: 375px">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger` and `info`.</div> |
| disabled      | `Boolean` | `false`     | Sets the component into disable state and sets the `<input>` element `disabled` attribute. |
| id            | `String`  |  | Sets the `<input>` element `ID` attribute. This property value is auto generates. |
| inset-mode    | `Boolean` | `false`     | Sets the switch style appearance to **_Inset style_**. <MdBadge color="info">v2.0.0</MdBadge> |
| inset-outlined | `Boolean` | `false`    | Sets the switch style appearance to **_Inset Outlined style_**. <MdBadge color="info">v2.0.0</MdBadge> |
| label-class    | `String`&#124;`String[]` |  | Additional css class for the text label. |
| label-position | `String` | `'right'`   | The switch text label position, valid values are: `left`, `right`. |
| model-value <Badge type="tip">v-model</Badge> | `String`&#124;`Number`&#124;`Boolean` |  | The value monitored by `v-model` to maintain checked state. <MdBadge color="info">v2.0.0</MdBadge> |
| name        | `String`  |  | Sets the `<input>` element `name` attribute. |
| readonly    | `Boolean` | `false` | Sets the component into readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| value <Badge type="danger">required</Badge> | `String`&#124;`Number`&#124;`Boolean` |  | The `<input>` element `value` attribute. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| checked | ( state:`Boolean`) | Triggers after the switch state changed. <MdBadge color="info">v2.0.0</MdBadge> |
| update:model-value | ( value:`String`&#124;`Number`&#124;`Boolean`) | Used to update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
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
