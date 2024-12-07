---
outline: [2, 3]
---

# Radio Button


::: lead
**BsRadio** is a component that let users select one option from a set of options.
:::

## Overview

**BsRadio** component mimics the HTML5 `<input type="radio">` element. This means 
that you can add attributes like `required`, `readonly`, or `disabled` and it will react 
to them to give the best experience. You can also use `v-model` directive to create two-way 
data bindings on the `model-value` property.


::: BlockVue {title="Radio Button Example" file="./docs/components/scripts/radio-1.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <div class="mb-3">
      <div class="col-form-label">Select an option</div>
      <div v-for="idx in 3" :key="'option-' + idx">
        <bs-radio :value="idx" v-model="radio1">
          Option {{ idx }}
        </bs-radio>
      </div>
    </div>
    <div>Value: <b>{{ radio1 }}</b></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const radio1 = ref<number>();
</script>
```
:::


## Radio Group

**BsRadioGroup** is a collection of **BsRadio**. Rather than create multiple 
`<bs-radio>`, it's better to create single `<bs-radio-group>`. `<bs-radio-group>` 
can be integrated with external validator plugin such as 
[Vuelidate](https://vuelidate-next.netlify.app/). 


::: BlockVue {title="Radio Group Example" file="./docs/components/scripts/radio-2.js"}

```vue
<template>
  <bs-card class="w-100" border-off>
    <bs-card-body>
      <bs-radio-group v-model="selectedFavoriteColor" :items="favoriteColors">
        <label class="col-12 col-form-label">Select a color</label>
      </bs-radio-group>
      <p class="mt-3">Selected color: <b>{{ selectedFavoriteColor }}</b></p>
      <hr />
      <div class="mb-3">
        <bs-radio-group v-model="selectedFavoriteFruit" :items="favoriteFruits">
          <label class="col-md-3 col-form-label">Select a fruit</label>
        </bs-radio-group>
      </div>
      <div>Selected fruit: <b>{{ selectedFavoriteFruit }}</b></div>
    </bs-card-body>
  </bs-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selectedFavoriteColor = ref<string>();
const selectedFavoriteFruit = ref<string>();

const favoriteColors = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
];
const favoriteFruits = [
  { value: "Orange", label: "Orange" },
  { value: "Apple", label: "Apple" },
  { value: "Pineapple", label: "Pineapple" },
  { value: "Grape", label: "Grape" },
];
</script>

```
:::

::: info <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">INFO</span>
`<bs-radio-group>` will be displayed in **_one column_** if the media query matches 
`(max-width: 575px)`. And if the media query matches `(min-width: 576px)` it will try
to fit up to **_four columns_**.
:::


### Multi Column {class="mt-lg-5"}

With `<bs-radio-group>`, collection of `<bs-radio>` can be arranged in multi-columns. 
When the number of `<bs-radio>` exceed the number of maximum columns, then the remaining 
`<bs-radio>` will be placed on the next row.

<SmallNote color="teal" class="mt-lg-4">Updated on v2.0.0</SmallNote>

::: BlockVue {title="Radio Group Multicolumn Example" file="./docs/components/scripts/radio-3.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <div class="mb-3">
      <bs-radio-group v-model="selectedItem" :items="dummyItems" column="3">
        <label class="col-md-3 col-form-label">Multi Column</label>
      </bs-radio-group>
    </div>
    <div>Selected item: <b>{{ selectedItem }}</b></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selectedItem = ref<number>();
const dummyItems = [
  { value: 1, label: "Item 1" },
  { value: 2, label: "Item 2" },
  { value: 3, label: "Item 3" },
  { value: 4, label: "Item 4" },
  { value: 5, label: "Item 5", disabled: true },
  { value: 6, label: "Item 6" },
];
</script>

```
:::

::: info <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">INFO</span>
Multi columns are closely tied to the bootstrap class `col-lg-*`. Which means if 
the media query matches `(min-width: 992px)`, it will be displayed correctly. And 
if the media query matches `(min-width: 768px)`, it will be displayed in 
**_two columns_** only.
:::


## Colors

Use `color` property to change `<bs-radio>` or `<bs-radio-group>` color appearance.
Additionally, you can set each radio of `<bs-radio-group>` to have different color.

::: BlockVue {title="Radio Color Style Example" file="./docs/components/scripts/radio-4.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <div class="mb-3">
      <bs-radio-group
        v-model="selectedFruit"
        :items="favoriteFruits"
        color="deep-purple"
        column="2"
      >
        <label class="col-md-3 col-form-label">Single color</label>
      </bs-radio-group>
    </div>
    <hr />
    <div>
      <bs-radio-group v-model="selectedColor" :items="colorsItems" column="2">
        <label class="col-md-3 col-form-label">Different Color</label>
      </bs-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selectedColor = ref<string>();
const selectedFruit = ref<string>();

const colorsItems = [
  { value: "red", label: "Red", color: "red" },
  { value: "green", label: "Green", color: "green" },
  { value: "blue", label: "Blue", color: "blue" },
  { value: "purple", label: "Purple", color: "purple" },
];

const favoriteFruits = [
  { value: "Orange", label: "Orange" },
  { value: "Apple", label: "Apple" },
  { value: "Pineapple", label: "Pineapple" },
  { value: "Grape", label: "Grape" },
];
</script>

```
::: 

<!-- @include: @/components/colors-tip.md -->


## CSS Variables

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.0</SmallNote>

```scss
--md-radio-margin: .5rem 1rem .5rem 0;
--md-radio-size: 20px;
--md-radio-stroke: 2px;
--md-radio-touch-size: 40px;
--md-radio-disabled-bg: transparent;
--md-radio-disabled-opacity: calc(var(--md-field-disabled-opacity) - .2);

--md-radio-color: currentColor;
--md-radio-active-color: #{$color};

```

## API Reference

### BsRadio {#api-radio}

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-radio">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| color       | `String`  | `'default'` | The component's color appearance. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used. |
| disabled    | `Boolean` | `false`     | Enable/disable the component and the `<input>` element. |
| id          | `String`  |  | Sets the `<input>` element `ID` attribute. This property value is auto generates. |
| model-value <Badge type="tip">v-model</Badge> | `String`/`Number`/`Boolean` |  | The radio button value monitored by `v-model` to maintain checked state. <BsBadge color="info">v2.0.0</BsBadge> |
| name        | `String`  |  | Sets the `<input>` element `name` attribute. |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| value <Badge type="danger">required</Badge> | `String`/`Number`/`Boolean` |  | The `<input>` element `value` attribute. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-radio">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| checked | ( state:`Boolean`) | Triggers after the radio button state changed. <BsBadge color="info">v2.0.0</BsBadge> |
| update:model-value | ( value:`String`/`Number`/`Boolean`) | Used to update the `model-value` property. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-radio">
    <div class="doc-table-responsive doc-table-2cols">

| Name        | Description  |
|-------------|--------------|
| default     | The outlet slot used to place the field label. |

</div>
  </BsTab>
</BsTabs>


### BsRadioGroup {#api-radio-group class="mt-lg-5"}

<BsTabs v-model="tabs2active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-radio-group">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| color       | `String`  | `'default'` | The component's color appearance. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used. |
| column      | `Number`  |  | Sets the maximum number of columns to display the radio button.<BsBadge color="info">v2.0.0</BsBadge> <p>When the number of items exceed the number of columns, then the remaining items will be displayed on the next row.</p>  |
| disabled    | `Boolean` | `false`     | Enable/disable the component. |
| external-validator <Badge type="warning">deprecated</Badge> | `TValidator` |    | Use `validator` instead. |
| help-text   | `String`  |          | The help text to display below the component. |
| items <Badge type="danger">required</Badge> | `TRadioProps[]` |  | The configuration option to construct the `<bs-radio>`. |
| model-value <Badge type="tip">v-model</Badge> | `String`/`Number` |  | The component value monitored by `v-model` to maintain checked state. <BsBadge color="info">v2.0.0</BsBadge> |
| name        | `String`  |  | Sets default `<input>` element `name` attribute. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| validator   | `TValidator` |   | The configuration options to integrate external validator plugin to validate this field value. <BsBadge color="info">v2.0.0</BsBadge> <p>More details, see [Text Field - TValidator](/components/inputs/textfield#api-validator)</p> |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-radio-group">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| update:model-value | ( value:`String`/`Number`) | Used to update the `model-value` property. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-radio-group">
    <div class="doc-table-responsive doc-table-2cols">

| Name        | Description  |
|-------------|--------------|
| default     | The outlet slot used to place the component label. |

</div>
  </BsTab>
</BsTabs>


### TRadioProps {#api-tradio-props class="mt-lg-5"}

The _TRadioProps_ has properties as described below:

<div class="doc-api-reference mt-0">
<div class="doc-table-responsive doc-table-3cols">

| Property | Type      | Description |
|----------|-----------|-------------|
| value <Badge type="danger">required</Badge> | `String`/`Number` | The `<bs-radio>` value. |
| label <Badge type="danger">required</Badge> | `String` | The `<bs-radio>` label. |
| color    | `String`  | The `<bs-radio>` color appearance. |
| disabled | `Boolean` | Create `<bs-radio>` in disabled state. |
| readonly | `Boolean` | Create `<bs-radio>` in readonly state. |
| id       | `String`  | Sets the `<bs-radio>` element `ID` attribute. This property value is auto generates. |
| name     | `Boolean` | Sets the `<bs-radio>` element `name` attribute. |

</div>
</div>


<script lang="ts" setup>
import { ref } from "vue";

const tabs1active = ref(0);
const tabs2active = ref(0);
const radio1 = ref<number>();
const selectedColor = ref<string>();
const selectedFruit = ref<string>();
const selectedFavoriteColor = ref<string>();
const selectedFavoriteFruit = ref<string>();
const selectedItem = ref<number>();

const colorsItems = [
  { value: "red", label: "Red", color: "red" },
  { value: "green", label: "Green", color: "green" },
  { value: "blue", label: "Blue", color: "blue" },
  { value: "purple", label: "Purple", color: "purple" },
];
const dummyItems = [
  { value: 1, label: "Item 1" },
  { value: 2, label: "Item 2" },
  { value: 3, label: "Item 3" },
  { value: 4, label: "Item 4" },
  { value: 5, label: "Item 5", disabled: true },
  { value: 6, label: "Item 6" },
];
const favoriteColors = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
];
const favoriteFruits = [
  { value: "Orange", label: "Orange" },
  { value: "Apple", label: "Apple" },
  { value: "Pineapple", label: "Pineapple" },
  { value: "Grape", label: "Grape" },
];
</script>
