---
outline: [2, 3] 
description: Radio button is a component that let users select one option from a set of options. 
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


::: BlockVue {title="Radio Button Overview" file="./docs/components/inputs/js/radio-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
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


::: BlockVue {title="Radio Group" file="./docs/components/inputs/js/radio-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-3 p-2 px-md-3">
    <bs-radio-group v-model="selectedFavoriteColor" :items="favoriteColors">
      <label class="col-12 col-form-label">Select a color</label>
    </bs-radio-group>
    <div class="mt-3">Selected color: <b>{{ selectedFavoriteColor }}</b></div>
    <bs-divider></bs-divider>
    <bs-radio-group v-model="selectedFavoriteFruit" :items="favoriteFruits">
      <label class="col-md-3 col-form-label">Select a fruit</label>
    </bs-radio-group>
    <div>Selected fruit: <b>{{ selectedFavoriteFruit }}</b></div>
  </div>
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


### Multi Column {#radio-group-multi-column class="mt-lg-5"}

With `<bs-radio-group>`, collection of `<bs-radio>` can be arranged in multi-columns. 
When the number of `<bs-radio>` exceed the number of maximum columns, then the remaining 
`<bs-radio>` will be placed on the next row.

<SmallNote color="teal">Updated in v2.0.0</SmallNote>

::: BlockVue {title="Radio Group Multicolumn" file="./docs/components/inputs/js/radio-3.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
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

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {title="Radio Colors" file="./docs/components/inputs/js/radio-4.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-3 p-2 px-md-3">
    <bs-radio-group
      v-model="selectedFruit"
      :items="favoriteFruits"
      color="primary"
      column="2"
    >
      <label class="col-md-3 col-form-label">Single color</label>
    </bs-radio-group>
    <bs-divider></bs-divider>
    <bs-radio-group v-model="selectedColor" :items="colorsItems" column="2">
      <label class="col-md-3 col-form-label">Different Color</label>
    </bs-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selectedColor = ref<string>();
const selectedFruit = ref<string>();

const favoriteFruits = [
  { value: "Orange", label: "Orange" },
  { value: "Apple", label: "Apple" },
  { value: "Pineapple", label: "Pineapple" },
  { value: "Grape", label: "Grape" },
];
const colorsItems = [
  { value: "primary", label: "Primary", color: "primary" },
  { value: "success", label: "Success", color: "success" },
  { value: "danger", label: "Danger", color: "danger" },
  { value: "warning", label: "Warning", color: "warning" },
];

</script>

```
::: 


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-radio` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-radio {
  --md-radio-size: #{vars.$radio-size};
  --md-radio-touch-size: #{vars.$radio-touch-size};
  --md-radio-stroke: #{vars.$radio-stroke};
  --md-radio-margin: #{vars.$radio-margin};

  --md-radio-color: currentColor;
  --md-radio-active-color: #{$color};
  --md-radio-disabled-bg: transparent;
  --md-radio-disabled-opacity: var(--md-field-disabled-opacity);
}

```

## API Reference

### BsRadio {#api-reference-radio}

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| color       | `String`  | `'default'` | The component's color appearance. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3" style="min-width: 375px">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger` and `info`.</div> |
| disabled    | `Boolean` | `false`     | Enable/disable the component and the `<input>` element. |
| id          | `String`  |  | Sets the `<input>` element `ID` attribute. This property value is auto generates. |
| model-value <Badge type="tip">v-model</Badge> | `String`&#124;`Number`&#124;`Boolean` |  | The radio button value monitored by `v-model` to maintain checked state. <MdBadge color="info">v2.0.0</MdBadge> |
| name        | `String`  |  | Sets the `<input>` element `name` attribute. |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| value <Badge type="danger">required</Badge> | `String`&#124;`Number`&#124;`Boolean` |  | The `<input>` element `value` attribute. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| checked | ( state:`Boolean`) | Triggers after the radio button state changed. <MdBadge color="info">v2.0.0</MdBadge> |
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


### BsRadioGroup {#api-reference-radio-group class="mt-lg-5"}

<BsTabs v-model="tabs2active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| color       | `String`  |  | The component's color appearance. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3" style="min-width: 375px">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger` and `info`.</div> |
| column      | `Number`  |  | Sets the maximum number of columns to display the radio button.<MdBadge color="info">v2.0.0</MdBadge> <p>When the number of items exceed the number of columns, then the remaining items will be displayed on the next row.</p>  |
| disabled    | `Boolean` | `false`     | Enable/disable the component. |
| help-text   | `String`  |          | The help text to display below the component. |
| items <Badge type="danger">required</Badge> | `TRadioInputProps[]` |  | The configuration option to construct the `<bs-radio>`. |
| model-value <Badge type="tip">v-model</Badge> | `String`&#124;`Number` |  | The component value monitored by `v-model` to maintain checked state. <MdBadge color="info">v2.0.0</MdBadge> |
| name        | `String`  |  | Sets default `<input>` element `name` attribute. |
| persistent-help-text <Badge type="warning">deprecated</Badge> | `Boolean` | `true` | Use `persistent-help-off` instead. |
| persistent-help-off | `Boolean` | `false` | Prevents help text from being visible when the component is not focused. <MdBadge color="info">v2.2.0</MdBadge> |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| validator   | `TValidator` |   | The configuration options to integrate external validator plugin to validate this field value. <MdBadge color="info">v2.0.0</MdBadge> <div class="pt-3">See [Text Field - TValidator](/components/inputs/textfield#api-validator) for more details.</div> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| update:model-value | ( value:`String`&#124;`Number`) | Used to update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name        | Description  |
|-------------|--------------|
| default     | The outlet slot used to place the component label. |

</div>
  </BsTab>
</BsTabs>


### TRadioInputProps {#api-reference-radio-input-props class="mt-lg-5"}

<div class="doc-api-reference mt-2">
<div class="doc-table-responsive doc-table-3cols">

| Property | Type      | Description |
|----------|-----------|-------------|
| value <Badge type="danger">required</Badge> | `String`&#124;`Number` | The `<bs-radio>` value. |
| label <Badge type="danger">required</Badge> | `String` | The `<bs-radio>` label. |
| color    | `String`  | The `<bs-radio>` color appearance. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3" style="min-width: 365px">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger` and `info`.</div> |
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
  { value: "primary", label: "Primary", color: "primary" },
  { value: "success", label: "Success", color: "success" },
  { value: "danger", label: "Danger", color: "danger" },
  { value: "warning", label: "Warning", color: "warning" },
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
