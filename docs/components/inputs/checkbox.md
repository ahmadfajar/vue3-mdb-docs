---
outline: [2, 3] 
description: A component that let users select one or more items from a list, or turn an item on or off. 
---

# Checkbox


::: lead
**BsCheckbox** is a component that let users select one or more items from a list, 
or turn an item on or off.
:::


## Overview

**BsCheckbox** component mimics the HTML5 `<input type="checkbox">` element. This means 
that you can add attributes like `required`, `readonly`, or `disabled` and it will react 
to them to give the best experience. You can also use `v-model` directive to create two-way 
data bindings on the `model-value` property.


::: BlockVue {title="Checkbox Example" file="./docs/components/scripts/checkbox-1.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <div class="mb-3">
      <bs-checkbox value="accepted" v-model="checkbox1">
        Accept the terms and use
      </bs-checkbox>
    </div>
    <div>Value: <b>{{ checkbox1 }}</b></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const checkbox1 = ref<string>();
</script>
```
:::


## Checkbox Group

**BsCheckboxGroup** is a collection of **BsCheckbox**. Rather than create multiple 
`<bs-checkbox>`, it's better to create single `<bs-checkbox-group>`. `<bs-checkbox-group>` 
can be integrated with external validator plugin such as 
[Vuelidate](https://vuelidate-next.netlify.app/). 


::: BlockVue {title="Checkbox Group Example" file="./docs/components/scripts/checkbox-2.js"}

```vue
<template>
  <bs-card class="w-100" border-off>
    <bs-card-body>
      <bs-checkbox-group v-model="selectedFavoriteColors" :items="favoriteColors">
        <label class="col-12 col-form-label">Please select colors</label>
      </bs-checkbox-group>
      <p class="mt-3">Selected colors: <b>{{ selectedFavoriteColors }}</b></p>
      <hr />
      <div class="mb-3">
        <bs-checkbox-group v-model="selectedFavoriteFruits" :items="favoriteFruits">
          <label class="col-md-3 col-form-label">Select fruits</label>
        </bs-checkbox-group>
      </div>
      <div>Selected fruits: <b>{{ selectedFavoriteFruits }}</b></div>
    </bs-card-body>
  </bs-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selectedFavoriteColors = ref<string[]>([]);
const selectedFavoriteFruits = ref<string[]>([]);

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
`<bs-checkbox-group>` will be displayed in **_one column_** if the media query matches 
`(max-width: 575px)`. And if the media query matches `(min-width: 576px)` it will try
to fit up to **_four columns_**.
:::


### Multi Column {class="mt-lg-5"}

With `<bs-checkbox-group>`, collection of `<bs-checkbox>` can be arranged in multi-columns. 
When the number of `<bs-checkbox>` exceed the number of maximum columns, then the remaining 
`<bs-checkbox>` will be placed on the next row.

<SmallNote color="teal" class="mt-lg-4">Updated on v2.0.0</SmallNote>

::: BlockVue {title="Checkbox Group Multicolumn Example" file="./docs/components/scripts/checkbox-3.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <div class="mb-3">
      <bs-checkbox-group v-model="selectedItems" :items="dummyItems" column="3">
        <label class="col-md-3 col-form-label">Multi Column</label>
      </bs-checkbox-group>
    </div>
    <div>Selected items: <b>{{ selectedItems }}</b></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selectedItems = ref<number[]>([]);
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

Use `color` property to change `<bs-checkbox>` or `<bs-checkbox-group>` color appearance.
Additionally, you can set each checkbox of `<bs-checkbox-group>` to have different color.

::: BlockVue {title="Checkbox Color Style Example" file="./docs/components/scripts/checkbox-4.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4">
    <div class="mb-3">
      <bs-checkbox-group
        v-model="selectedFruits"
        :items="favoriteFruits"
        color="primary"
        column="2"
      >
        <label class="col-md-3 col-form-label">Single color</label>
      </bs-checkbox-group>
    </div>
    <hr />
    <div>
      <bs-checkbox-group v-model="selectedColors" :items="colorsItems" column="2">
        <label class="col-md-3 col-form-label">Different Color</label>
      </bs-checkbox-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selectedColors = ref<string[]>([]);
const selectedFruits = ref<string[]>([]);

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


## Custom Checkbox

The following is an example that demonstrate how to customize checkbox appearance via css variables.

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.7</SmallNote>

::: BlockVue {title="Custom Checkbox Example" file="./docs/components/scripts/checkbox-1.js"}

```vue
<template>
  <div class="w-100 bg-white rounded-3 p-4 rounded-checkboxes">
    <div class="mb-3">
      <bs-checkbox value="accepted" v-model="checkbox1" color="deep-purple">
        Accept the terms and use
      </bs-checkbox>
    </div>
    <div>Value: <b>{{ checkbox1 }}</b></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const checkbox1 = ref<string>();
</script>

<style>
.rounded-checkboxes .md-checkbox {
  --md-checkbox-border-radius: 50%;
  --md-checkbox-size: 24px;
  --md-checkbox-checkmark-height: 12px; 
  --md-checkbox-checkmark-width: 6px; 
  --md-checkbox-checkmark-pos-x: 7px; 
  --md-checkbox-checkmark-pos-y: 3px;
}
.rounded-checkboxes .md-checkbox:not(.checked) {
  --md-checkbox-state-bg: #d0d0d0;
  --md-checkbox-state-color: #808080;
}
</style>
```
:::


## CSS Variables

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.0</SmallNote>

```scss
--md-checkbox-disabled-bg: transparent;
--md-checkbox-disabled-opacity: calc(var(--md-field-disabled-opacity) - .2);
--md-checkbox-border-radius: .25rem;
--md-checkbox-margin: .5rem 1rem .5rem 0;
--md-checkbox-size: 20px;
--md-checkbox-stroke: 2px;
--md-checkbox-touch-size: 40px;
--md-checkbox-indeterminate-width: 12px;
--md-checkbox-checkmark-height: 13px; 
--md-checkbox-checkmark-width: 7px; 
--md-checkbox-checkmark-pos-x: 4px; 
--md-checkbox-checkmark-pos-y: 0;

--md-checkbox-bg: #{$color};             // background color when checked
--md-checkbox-color: #{$checked-color};  // border color when checked
--md-checkbox-state-bg: transparent;     // background color when checked or un-checked
--md-checkbox-state-color: currentColor; // border color when checked or un-checked

```

## API Reference

### BsCheckbox {#api-checkbox}

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-checkbox">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| color       | `String`  | `'default'` | The component's color appearance. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used. |
| disabled    | `Boolean` | `false`     | Enable/disable the component and the `<input>` element. |
| id          | `String`  |  | Sets the `<input>` element `ID` attribute. This property value is auto generates. |
| indeterminate | `Boolean`  | `false` | Sets an indeterminate state for the checkbox. |
| model-value <Badge type="tip">v-model</Badge> | `String`/`Number`/`Boolean` |  | The checkbox value monitored by `v-model` to maintain checked state. <BsBadge color="info">v2.0.0</BsBadge> |
| name        | `String`  |  | Sets the `<input>` element `name` attribute. |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| value <Badge type="danger">required</Badge> | `String`/`Number`/`Boolean` |  | The `<input>` element `value` attribute. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-checkbox">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| checked | ( state:`Boolean`) | Triggers after the checkbox state changed. <BsBadge color="info">v2.0.0</BsBadge> |
| update:model-value | ( value:`String`/`Number`/`Boolean`) | Used to update the `model-value` property. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-checkbox">
    <div class="doc-table-responsive doc-table-2cols">

| Name        | Description  |
|-------------|--------------|
| default     | The outlet slot used to place the field label. |

</div>
  </BsTab>
</BsTabs>


### BsCheckboxGroup {#api-checkbox-group class="mt-lg-5"}

<BsTabs v-model="tabs2active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-checkbox-group">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| color       | `String`  | `'default'` | The component's color appearance. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used. |
| column      | `Number`  |  | Sets the maximum number of columns to display the checkbox.<BsBadge color="info">v2.0.0</BsBadge> <p>When the number of items exceed the number of columns, then the remaining items will be displayed on the next row.</p>  |
| disabled    | `Boolean` | `false`     | Enable/disable the component. |
| external-validator <Badge type="warning">deprecated</Badge> | `TValidator` |    | Use `validator` instead. |
| help-text   | `String`  |          | The help text to display below the component. |
| indeterminate | `Boolean` | `false` | Sets default indeterminate state for the checkbox. |
| items <Badge type="danger">required</Badge> | `TCheckboxProps[]` |  | The configuration option to construct the `<bs-checkbox>`. |
| model-value <Badge type="tip">v-model</Badge> | `String[]`/`Number[]` |  | The component value monitored by `v-model` to maintain checked state. <BsBadge color="info">v2.0.0</BsBadge> |
| name        | `String`  |  | Sets default `<input>` element `name` attribute. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| validator   | `TValidator` |   | The configuration options to integrate external validator plugin to validate this field value. <BsBadge color="info">v2.0.0</BsBadge> <p>More details, see [Text Field - TValidator](/components/inputs/textfield#api-validator)</p> |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-checkbox-group">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| update:model-value | ( value:`String[]`/`Number[]`) | Used to update the `model-value` property. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-checkbox-group">
    <div class="doc-table-responsive doc-table-2cols">

| Name        | Description  |
|-------------|--------------|
| default     | The outlet slot used to place the component label. |

</div>
  </BsTab>
</BsTabs>


### TCheckboxProps {#api-tcheckbox-props class="mt-lg-5"}

The _TCheckboxProps_ has properties as described below:

<div class="doc-api-reference mt-0">
<div class="doc-table-responsive doc-table-3cols">

| Property | Type      | Description |
|----------|-----------|-------------|
| value <Badge type="danger">required</Badge> | `String`/`Number` | The `<bs-checkbox>` value. |
| label <Badge type="danger">required</Badge> | `String` | The `<bs-checkbox>` label. |
| color    | `String`  | The `<bs-checkbox>` color appearance. |
| disabled | `Boolean` | Create `<bs-checkbox>` in disabled state. |
| readonly | `Boolean` | Create `<bs-checkbox>` in readonly state. |
| id       | `String`  | Sets the `<bs-checkbox>` element `ID` attribute. This property value is auto generates. |
| name     | `Boolean` | Sets the `<bs-checkbox>` element `name` attribute. |
| indeterminate | `Boolean` | Sets an indeterminate state for the `<bs-checkbox>`. |

</div>
</div>


<script lang="ts" setup>
import { ref } from "vue";

const tabs1active = ref(0);
const tabs2active = ref(0);
const checkbox1 = ref<string>();
const selectedColors = ref<string[]>([]);
const selectedFruits = ref<string[]>([]);
const selectedItems = ref<number[]>([]);
const selectedFavoriteColors = ref<string[]>([]);
const selectedFavoriteFruits = ref<string[]>([]);

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

<style lang="scss">
.rounded-checkboxes {
  .md-checkbox {
    --md-checkbox-border-radius: 50%;
    --md-checkbox-size: 24px;
    --md-checkbox-checkmark-height: 12px; 
    --md-checkbox-checkmark-width: 6px; 
    --md-checkbox-checkmark-pos-x: 7px; 
    --md-checkbox-checkmark-pos-y: 3px;

    &:not(.checked) {
      --md-checkbox-state-bg: #d0d0d0;
      --md-checkbox-state-color: #808080;
    }
  }
}
</style>