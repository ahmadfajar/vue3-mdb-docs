---
outline: [2, 3] 
description: Checkbox is a component that let users select one or more items from a list, or turn an item on or off. 
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


::: BlockVue {title="Checkbox Overview" file="./docs/components/inputs/js/checkbox-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
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


::: BlockVue {title="Checkbox Group" file="./docs/components/inputs/js/checkbox-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-3 p-2 px-md-3">
    <bs-checkbox-group v-model="selectedFavoriteColors" :items="favoriteColors">
      <label class="col-12 col-form-label">Please select colors</label>
    </bs-checkbox-group>
    <div class="mt-3">Selected colors: <b>{{ selectedFavoriteColors }}</b></div>
    <bs-divider></bs-divider>
      <bs-checkbox-group v-model="selectedFavoriteFruits" :items="favoriteFruits">
        <label class="col-md-3 col-form-label">Select fruits</label>
      </bs-checkbox-group>
    <div>Selected fruits: <b>{{ selectedFavoriteFruits }}</b></div>
  </div>
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


### Multi Column {#checkbox-group-multi-column class="mt-lg-5"}

With `<bs-checkbox-group>`, collection of `<bs-checkbox>` can be arranged in multi-columns. 
When the number of `<bs-checkbox>` exceed the number of maximum columns, then the remaining 
`<bs-checkbox>` will be placed on the next row.

<SmallNote color="teal">Updated in v2.0.0</SmallNote>

::: BlockVue {title="Checkbox Group Multicolumn" file="./docs/components/inputs/js/checkbox-3.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
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

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {title="Checkbox Colors" file="./docs/components/inputs/js/checkbox-4.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-3 p-2 px-md-3">
    <bs-checkbox-group
      v-model="selectedFruits"
      :items="favoriteFruits"
      color="primary"
      column="2"
    >
      <label class="col-md-3 col-form-label">Single color</label>
    </bs-checkbox-group>
    <bs-divider></bs-divider>
    <bs-checkbox-group v-model="selectedColors" :items="colorsItems" column="2">
      <label class="col-md-3 col-form-label">Different Color</label>
    </bs-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selectedColors = ref<string[]>([]);
const selectedFruits = ref<string[]>([]);

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


## Custom Checkbox

The following is an example that demonstrate how to customize checkbox appearance via css variables.

<SmallNote color="teal">Added in v2.0.7</SmallNote>

::: BlockVue {title="Custom Checkbox" file="./docs/components/inputs/js/checkbox-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <div class="mb-3">
      <bs-checkbox value="accepted" v-model="checkbox1" class="rounded-checkbox">
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
.rounded-checkbox {
  --md-checkbox-border-radius: 50%;
  --md-checkbox-size: 24px;
  --md-checkbox-checkmark-height: 12px;
  --md-checkbox-checkmark-width: 6px;
  --md-checkbox-checkmark-pos-x: 7px;
  --md-checkbox-checkmark-pos-y: 3px;
}
</style>

```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-checkbox` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-checkbox {
  --md-checkbox-size: #{vars.$checkbox-size};
  --md-checkbox-touch-size: #{vars.$checkbox-touch-size};
  --md-checkbox-border-radius: #{vars.$radius};
  --md-checkbox-stroke: #{vars.$checkbox-stroke};
  --md-checkbox-margin: #{vars.$checkbox-margin};
  --md-checkbox-indeterminate-width: #{vars.$checkbox-indeterminate-width};
  --md-checkbox-disabled-opacity: var(--md-field-disabled-opacity);
  --md-checkbox-checkmark-height: #{vars.$checkbox-checkmark-height};
  --md-checkbox-checkmark-width: #{vars.$checkbox-checkmark-width};
  --md-checkbox-checkmark-pos-x: 4px;
  --md-checkbox-checkmark-pos-y: 0;

  --md-checkbox-disabled-bg: transparent;
  --md-checkbox-unchecked-bg: transparent;
  --md-checkbox-unchecked-color: currentColor;
  --md-checkbox-checked-bg: #{$color};
  --md-checkbox-checked-color: #{$checked-color};
}

```

## API Reference

### BsCheckbox {#api-reference-checkbox}

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| color       | `String`  | `'default'` | The component's color appearance. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3" style="min-width: 375px">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger` and `info`.</div> |
| disabled    | `Boolean` | `false`     | Enable/disable the component and the `<input>` element. |
| id          | `String`  |  | Sets the `<input>` element `ID` attribute. This property value is auto generates. |
| indeterminate | `Boolean`  | `false` | Sets an indeterminate state for the checkbox. |
| model-value <Badge type="tip">v-model</Badge> | `String`&#124;`Number`&#124;`Boolean` |  | The checkbox value monitored by `v-model` to maintain checked state. <MdBadge color="info">v2.0.0</MdBadge> |
| name        | `String`  |         | Sets the `<input>` element `name` attribute. |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| value <Badge type="danger">required</Badge> | `String`&#124;`Number`&#124;`Boolean` |  | The `<input>` element `value` attribute. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments          | Description |
|---------|--------------------|-------------|
| checked | ( state:`Boolean`) | Triggers after the checkbox state changed. <MdBadge color="info">v2.0.0</MdBadge> |
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


### BsCheckboxGroup {#api-reference-checkbox-group class="mt-lg-5"}

<BsTabs v-model="tabs2active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| color         | `String`  |  | The component's color appearance. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3" style="min-width: 375px">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger` and `info`.</div> |
| column        | `Number`  |  | Sets the maximum number of columns to display the checkbox.<MdBadge color="info">v2.0.0</MdBadge> <p>When the number of items exceed the number of columns, then the remaining items will be displayed on the next row.</p>  |
| disabled      | `Boolean` | `false` | Enable/disable the component. |
| help-text     | `String`  |         | The help text to display below the component. |
| indeterminate | `Boolean` | `false` | Sets default indeterminate state for the checkbox. |
| items <Badge type="danger">required</Badge> | `TCheckboxInputProps[]` |  | The configuration option to construct the `<bs-checkbox>`. |
| model-value <Badge type="tip">v-model</Badge> | `String[]`&#124;`Number[]` |  | The component value monitored by `v-model` to maintain checked state. <MdBadge color="info">v2.0.0</MdBadge> |
| name        | `String`  |  | Sets default `<input>` element `name` attribute. |
| persistent-help-text <Badge type="warning">deprecated</Badge> | `Boolean` | `true` | Use `persistent-help-off` instead. |
| persistent-help-off | `Boolean` | `false` | Prevents help text from being visible when the component is not focused. <MdBadge color="info">v2.2.0</MdBadge> |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets the `<input>` element `required` attribute. |
| validator   | `TValidator`  |     | The configuration options to integrate external validator plugin to validate this field value. <MdBadge color="info">v2.0.0</MdBadge> <div class="pt-3">See [Text Field - TValidator](/components/inputs/textfield#api-validator) for more details.</div> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| update:model-value | ( value:`String[]`&#124;`Number[]`) | Used to update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

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


### TCheckboxInputProps {#api-reference-checkbox-input-props class="mt-lg-5"}

<div class="doc-api-reference mt-2">
<div class="doc-table-responsive doc-table-3cols">

| Property | Type      | Description |
|----------|-----------|-------------|
| value <Badge type="danger">required</Badge> | `String`&#124;`Number` | The `<bs-checkbox>` value. |
| label <Badge type="danger">required</Badge> | `String` | The `<bs-checkbox>` label. |
| color    | `String`  | The `<bs-checkbox>` color appearance. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3" style="min-width: 375px">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger` and `info`.</div> |
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

<style lang="scss">
.rounded-checkbox {
  --md-checkbox-border-radius: 50%;
  --md-checkbox-size: 24px;
  --md-checkbox-checkmark-height: 12px;
  --md-checkbox-checkmark-width: 6px;
  --md-checkbox-checkmark-pos-x: 7px;
  --md-checkbox-checkmark-pos-y: 3px;
}
</style>