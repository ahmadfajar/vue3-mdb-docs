---
outline: [2, 3] 
description: Toggle Field is a form field component with a group of buttons with toggle capabilities and validation. It is primarily used to visualize choices with different approach. 
---


# Toggle Field


::: lead
**BsToggleField** is a form field component with a group of buttons with toggle capabilities, 
and validation. It is primarily used to visualize choices with different approach.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

## Overview

**BsToggleField** component internally uses [BsToggleButton](/components/buttons/toggle-button)
but with validation capabilities. This means the component shares the same style variants as 
[BsToggleButton](/components/buttons/toggle-button). 

**BsToggleField** component mimics the HTML5 `<input>` element. This means that you 
can add attributes like `required`, `readonly`, or `disabled` and it will react to them to 
give the best experience. You can also use `v-model` directive to create two-way data bindings 
on the `model-value` property. This is useful to control or maintain the `model-value` property.

::: BlockVue {title="Toggle Field Overview" file="./docs/components/buttons/js/toggle-button-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-sm-2">
    <h5 class="mb-4">What are you drinking?</h5>
    <div class="mb-3">
      <bs-toggle-field v-model="selectedDrink" :items="drinkTypes">
        <label class="col-md-3 col-form-label">
          Normal State
        </label>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field v-model="selectedDrink" :items="drinkTypes" readonly>
        <label class="col-md-3 col-form-label">
          Readonly State
        </label>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field v-model="selectedDrink" :items="drinkTypes" disabled>
        <label class="col-md-3 col-form-label">
          Disabled State
        </label>
      </bs-toggle-field>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const selectedDrink = ref<string>();
// Never assign single datasource to multiple <bs-toggle-field>
const drinks: TInputOptionItem[] = [
  {
    value: "tea",
    label: "Tea",
  },
  {
    value: "coffee",
    label: "Coffee",
  },
  {
    value: "beer",
    label: "Beer",
  },
];
</script> 

```
:::

::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
- The `<bs-button-toggle-field>` tag still works, but has been deprecated since v2.0.0.
- Never assign single datasource to multiple `<bs-toggle-field>`. It may cause a bug or
  duplicate ID attribute.
:::

<!-- @include: @/components/contextual-color-info.md -->


## Checked Icon

With the help of slot `icon` you can add dynamic checked icon.

<SmallNote color="teal">Added in v2.0.1</SmallNote>

::: BlockVue {title="Toggle Field Checked Icon" file="./docs/components/buttons/js/toggle-button-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-sm-2">
    <bs-toggle-field v-model="favoriteDrink" :items="favoriteDrinks">
      <label class="col-md-3 col-form-label">Favorite Drink</label>
      <template #icon="item">
        <bs-svg-icon v-if="item?.value === favoriteDrink" icon="check"></bs-svg-icon>
      </template>
    </bs-toggle-field>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const favoriteDrink = ref<string>();
const favoriteDrinks = [
  {
    value: "tea",
    label: "Tea",
  },
  {
    value: "coffee",
    label: "Coffee",
  },
  {
    value: "beer",
    label: "Beer",
  },
];
</script> 

```
:::


## Multiple Selection

**BsToggleField** also support multiple selection mode. Use and define the 
`multiple` property explicitly to enable multiple selection mode. 

::: BlockVue {title="Toggle Field with multiple selection example" file="./docs/components/buttons/js/toggle-button-3.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-sm-2">
    <bs-toggle-field 
      v-model="favoriteDrink1" 
      :items="favoriteDrinks" 
      multiple>
      <label class="col-md-3 col-form-label">Favorite Drink</label>
    </bs-toggle-field>  
    <bs-toggle-field 
      v-model="favoriteDrink2" 
      :items="favoriteCoffees" 
      multiple>
      <label class="col-md-3 col-form-label">Favorite Coffee</label>
      <template #icon="item">
        <bs-svg-icon v-if="favoriteDrink2.includes(item?.value)" icon="check"></bs-svg-icon>
      </template>
    </bs-toggle-field>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const favoriteDrink1 = ref<string[]>([]);
const favoriteDrink2 = ref<string[]>([]);
const favoriteDrinks: TInputOptionItem[] = [
  {
    value: "tea",
    label: "Tea",
  },
  {
    value: "coffee",
    label: "Coffee",
  },
  {
    value: "beer",
    label: "Beer",
  },
];
const favoriteCoffees: TInputOptionItem[] = [
  {
    value: "Americano",
    label: "Americano",
  },
  {
    value: "Espresso",
    label: "Espresso",
  },
  {
    value: "Cappuccino",
    label: "Cappuccino",
  },
];
</script>

```
:::


## Style Variants

You can style the `<bs-toggle-field>` component to your own preference or use a style variant 
based on Google **Material Design 3** specifications. Example below show various 
built-in style variants and demonstrate how to put an icon inside the `<bs-toggle-field>`
and change the icon dynamically like a segmented buttons behaves.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {title="Toggle Field Style Variants" file="./docs/components/buttons/js/toggle-button-4.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-sm-2">
    <h5 class="mb-4">How is the weather today?</h5>
    <div class="mb-3">
      <bs-toggle-field v-model="selectedWeather1" :items="weathers" color="primary">
        <label class="col-md-3 col-form-label">Filled</label>  
        <template #icon="item">
          <bs-svg-icon :icon="item?.value === selectedWeather1 ? 'check' : item?.icon"></bs-svg-icon>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field v-model="selectedWeather2" :items="weathers" color="primary" raised>
        <label class="col-md-3 col-form-label">Filled Elevated</label>  
        <template #icon="item">
          <bs-svg-icon :icon="item?.value === selectedWeather2 ? 'check' : item?.icon"></bs-svg-icon>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field v-model="selectedWeather3" :items="weathers" color="primary" tonal>
        <label class="col-md-3 col-form-label">Filled Tonal</label>
        <template #icon="item">
          <bs-svg-icon :icon="item?.value === selectedWeather3 ? 'check' : item?.icon"></bs-svg-icon>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field v-model="selectedWeather4" :items="weathers" color="primary" outlined>
        <label class="col-md-3 col-form-label">Outlined</label>  
        <template #icon="item">
          <bs-svg-icon :icon="item?.value === selectedWeather4 ? 'check' : item?.icon"></bs-svg-icon>
        </template>
      </bs-toggle-field>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const selectedWeather1 = ref<string>();
const selectedWeather2 = ref<string>();
const selectedWeather3 = ref<string>();
const selectedWeather4 = ref<string>();
const selectedWeather5 = ref<string>();

// Never assign single datasource to multiple <bs-toggle-field>
const weathers: TInputOptionItem[] = [
  {
    value: "sunny",
    label: "Sunny",
    icon: "wb_sunny",
  },
  {
    value: "rainy",
    label: "Rainy",
    icon: "rainy",
  },
  {
    value: "heavy-rain",
    label: "Heavy Rain",
    icon: "thunderstorm",
  },
];
</script>

```
:::

### Combination {#style-variants-combination class="mt-lg-5"}

::: BlockVue {title="Toggle Field Style Variants - Combination" file="./docs/components/buttons/js/toggle-button-6.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-sm-2">
    <h5 class="mb-4">How is the weather today?</h5>
    <div class="mb-3">
      <bs-toggle-field 
        v-model="selectedWeather6" 
        :items="weathers" 
        rounded
      >
        <label class="col-md-3 col-form-label">Filled Round</label>
        <template #icon="item">
          <bs-svg-icon :icon="item?.value === selectedWeather6 ? 'check' : item?.icon"></bs-svg-icon>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field 
        v-model="selectedWeather7" 
        :items="weathers" 
        pill-off
      >
        <label class="col-md-3 col-form-label">Filled Rectangle</label>
        <template #icon="item">
          <bs-svg-icon :icon="item?.value === selectedWeather7 ? 'check' : item?.icon"></bs-svg-icon>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field 
        v-model="selectedWeather8" 
        :items="weathers" 
        rounded 
        tonal
      >
        <label class="col-md-3 col-form-label">Filled Round Tonal</label>
        <template #icon="item">
          <bs-svg-icon :icon="item?.value === selectedWeather8 ? 'check' : item?.icon"></bs-svg-icon>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field 
        v-model="selectedWeather9" 
        :items="weathers" 
        outlined 
        rounded
      >
        <label class="col-md-3 col-form-label">Outlined Rounded</label>
        <template #icon="item">
          <bs-svg-icon :icon="item?.value === selectedWeather9 ? 'check' : item?.icon"></bs-svg-icon>
        </template>
      </bs-toggle-field>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const selectedWeather6 = ref<string>();
const selectedWeather7 = ref<string>();
const selectedWeather9 = ref<string>();
const selectedWeather9 = ref<string>();
const selectedWeather10 = ref<string>();

// Never assign single datasource to multiple <bs-toggle-field>
const weathers: TInputOptionItem[] = [
  {
    value: "sunny",
    label: "Sunny",
    icon: "wb_sunny",
  },
  {
    value: "rainy",
    label: "Rainy",
    icon: "rainy",
  },
  {
    value: "heavy-rain",
    label: "Heavy Rain",
    icon: "thunderstorm",
  },
];
</script>

```
:::

<!-- @include: @/components/icon-migration-info.md -->


## Help Text

The `help-text` property on `<bs-toggle-field>` adds the provided string beneath the 
*Toggle Field*. And define the `persistent-help-off` property explicitly to make the 
help text visible when the *Toggle Field* is focused or hovered.

::: BlockVue {title="Toggle Field Help Text" file="./docs/components/inputs/js/toggle-field-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-sm-2">
    <h5 class="mb-4">Persistent help text</h5>
    <div class="mb-4">
      <bs-toggle-field 
        v-model="todayWheather" 
        :items="weathers" 
        help-text="Select a wheather for today">
        <label class="col-md-3 col-form-label">
          Wheather Today
        </label>
      </bs-toggle-field>
    </div>
    <h5 class="mb-4">Non-persistent help text</h5>
    <bs-toggle-field 
      v-model="selectedCoffee" 
      :items="favoriteCoffees" 
      persistent-help-off
      help-text="Select one of the options above as your favorite coffee">
      <label class="col-md-3 col-form-label">
        Favorite Coffee
      </label>
    </bs-toggle-field>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const todayWheather = ref<string>();
const selectedCoffee = ref<string>();

const weathers: TInputOptionItem[] = [
  {
    value: "sunny",
    label: "Sunny",
    icon: "wb_sunny",
  },
  {
    value: "rainy",
    label: "Rainy",
    icon: "rainy",
  },
  {
    value: "heavy-rain",
    label: "Heavy Rain",
    icon: "thunderstorm",
  },
];
const favoriteCoffees: TInputOptionItem[] = [
  {
    value: "Americano",
    label: "Americano",
  },
  {
    value: "Espresso",
    label: "Espresso",
  },
  {
    value: "Cappuccino",
    label: "Cappuccino",
  },
];
</script>
```
:::


## Usage Example

The following is an example that demonstrate more advanced use of the `<bs-toggle-field>` 
with form validation.

::: BlockVuelidate {title="Toggle Field Usage" file="./docs/components/inputs/js/toggle-field-2.js"}

```vue
<template>
  <bs-app class="p-2">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-appbar class="bg-indigo">
        <bs-button color="light" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-light" title="Survey Form"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light" icon="more_vert" mode="icon" flat></bs-button>
      </bs-appbar>  
      <bs-card-body>
        <form novalidate>
          <div class="mb-3 mt-3">
            <bs-text-field
              v-model="surveyForm.fullName"
              :validator="fullnameValidator"
              action-icon-variant="filled"
              prepend-icon="person"
              outlined
              floating-label
              required
              validation-icon
            >
              <label>Your Name</label>
            </bs-text-field>
          </div>
          <div class="mb-3">
            <bs-text-field
              v-model="surveyForm.emailAddress"
              :validator="emailValidator"
              action-icon-variant="filled"
              prepend-icon="email"
              type="email"
              outlined
              floating-label
              required
              validation-icon
            >
              <label>Email Address</label>
            </bs-text-field>
          </div>
          <div class="mb-3">
            <bs-toggle-field 
              v-model="surveyForm.favoriteDrink" 
              :items="favoriteDrinks" 
              :validator="favoriteValidator"
              color="primary"
              tonal
              required>
              <label class="col-form-label">Favorite Drink:</label>
              <template #icon="item">
                <bs-svg-icon 
                  v-if="item?.value === surveyForm.favoriteDrink" icon="check">
                </bs-svg-icon>
              </template>
            </bs-toggle-field>
          </div>
          <div class="mb-3">
            <bs-radio-group 
              v-model="surveyForm.occupation" 
              :items="occupations" 
              :validator="occupationValidator"
              color="primary"
              column="1" 
              required>
              <label class="col-form-label">Occupation:</label>
            </bs-radio-group>
          </div>
          <div class="d-grid md-gap-3">
            <bs-button @click="submit($notification)">
              <bs-spin-loader
                v-if="loading"
                role="status"
                size="24"
                thickness="3">
              </bs-spin-loader>
              <span v-else>Submit Survey</span>
            </bs-button>
            <div class="text-subtle-secondary mb-2" style="font-size: 12px">
              By submitting your information, you agree to our 
              <a href="#usage-example">Term & Conditions</a> 
              and <a href="#usage-example">Privacy Policy</a>.
            </div>
          </div>
        </form>
      </bs-card-body>
    </bs-card>
    <bs-notification></bs-notification>
  </bs-app>
</template>

<script setup lang="ts">
import type { Validation } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import type { Ref, ComputedRef } from "vue";
import { computed, reactive, ref, unref } from "vue";
import { Helper, type INotificationProvider, type TInputOptionItem } from "vue-mdbootstrap";

const favoriteDrinks: TInputOptionItem[] = [
  { value: "tea", label: "Tea" },
  { value: "coffee", label: "Coffee" },
  { value: "beer", label: "Beer" },
];
const occupations = [
  { value: 1, label: 'Computer and IT' },
  { value: 2, label: 'Scientists and Research' },
  { value: 3, label: 'Consultant' },
  { value: 4, label: 'Other' },
];

const loading = ref(false);
const surveyForm = reactive({
  fullName: null,
  emailAddress: null,
  favoriteDrink: null,
  occupation: null,
});
const surveyFormRules = {
  fullName: { required },
  emailAddress: { required, email },
  favoriteDrink: { required },
  occupation: { required },
};

function requiredFieldValidator(
  validator: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean };
  messages: { required: string };
  hasError: boolean;
}> {
  const obj = unref(validator)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: { required: obj.required.$message },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
    },
  }));
}

function emailFieldValidator(validator: Ref<Validation>): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; email: boolean };
  messages: { required: string; email: string };
  hasError: boolean;
}> {
  const obj = unref(validator)['emailAddress'];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: {
      required: obj.required.$message,
      email: "Email address format is invalid.",
    },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      email: unref(obj.email.$invalid),
    },
  }));
}

const v$ = useVuelidate(surveyFormRules, surveyForm);
const fullnameValidator = requiredFieldValidator(v$, "fullName");
const favoriteValidator = requiredFieldValidator(v$, "favoriteDrink");
const occupationValidator = requiredFieldValidator(v$, "occupation");
const emailValidator = emailFieldValidator(v$);

function submit(notification: INotificationProvider) {
  const validator = unref(v$);
  validator.$touch();

  if (!validator.$invalid) {
    loading.value = true;
    Helper.defer(() => {
      loading.value = false;
      notification.success("Data has been submitted.");
    }, 1000);
  }
}
</script>
```
:::


## CSS Variables

The component css variables inherited from [BsButton](/components/buttons/button#css-variables) css variables.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| color    | `String`  | `'default'`  | The component color appearance. <MdBadge color="info">Updated in v2.2.0</MdBadge> <br/><br/> Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light` and `dark`. |
| disabled | `Boolean` | `false`      | The component state. |
| help-textc    | `String` |          | The help text to display below the field component. |
| icon-position | `String` | `'left'` | <div style="min-width:375px"> The icon placement. Valid values are: `left` (before text), `right` (after text). </div> |
| icon-size     | `Number` |   | Render the icon at predefined size in pixel. <MdBadge color="info">v2.2.0</MdBadge> |
| id       | `String`  |              | Sets the component `ID`. This property value is auto generate. |
| items    | `TInputOptionItem[]` |   | Collection of input item properties. |
| model-value <Badge type="tip">v-model</Badge>  | `String`&#124;`Number`&#124;`Array` | | Value monitored by `v-model` that represents the selected value. <MdBadge color="info">v2.0.0</MdBadge> |
| multiple | `Boolean` | `false` | Enable multiple selection mode. The default is single selection mode. |
| name     | `String`  |         | The `<input>` element name. |
| outlined | `Boolean` | `false` | Enable ***outlined*** toggle button style. |
| persistent-help-text <Badge type="warning">deprecated</Badge> | `Boolean` | `true` | Use `persistent-help-off` instead. |
| persistent-help-off | `Boolean` | `false` | Prevents help text from being visible when the component is not focused. <MdBadge color="info">v2.2.0</MdBadge> |
| pill <Badge type="warning">deprecated</Badge> | `Boolean` | `true`  | Enable ***rounded-pill*** toggle button style. |
| pill-off | `Boolean` | `false`  | Disable ***rounded-pill*** button style. <MdBadge color="info">v2.2.0</MdBadge> |
| raised   | `Boolean` | `false` | Enable ***elevated*** toggle button style. |
| readonly | `Boolean` | `false` | The component state. |
| rounded  | `Boolean` | `false` | Enable ***rounded*** toggle button style. <MdBadge color="info">v2.0.0</MdBadge> |
| size     | `String`  |         | Create the component with predefined size. Valid values are: `xs`, `sm`, `lg`. |
| toggle-color | `String`  |     | The selected button color (optional). <MdBadge color="info">Updated in v2.2.0</MdBadge> <br/><br/> Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light` and `dark`. |
| tonal    | `Boolean` | `false` | Enable ***filled tonal*** toggle button style. <MdBadge color="info">v2.0.4</MdBadge> |
| validator | `TValidator` |     | The configuration options to integrate external validator plugin to validate this field value. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| update:model-value | ( value:`String`&#124;`Number`&#124;`String[]`&#124;`Number[]`) | Used to update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments | Description |
|---------|-----------|-------------|
| icon    | ( item:`TInputOptionItem`) | The outlet slot used to place custom icon. <MdBadge color="info">v2.0.1</MdBadge> |
| label   | ( item:`TInputOptionItem`) | The outlet slot used to place custom label. <MdBadge color="info">v2.0.1</MdBadge> |

</div>
  </BsTab>
</BsTabs>


### TInputOptionItem {#api-reference-input-option-item class="mt-lg-5"}

<div class="doc-api-reference mt-0">
<div class="doc-table-responsive doc-table-3cols">

| Property | Type      | Description |
|----------|-----------|-------------|
| value <Badge type="danger">required</Badge> | `String`&#124;`Number` | The item value. |
| label <Badge type="danger">required</Badge> | `String` | The item label. |
| id       | `String`   | Html `<input>` element ID. |
| name     | `String`   | Html `<input>` element name. It is used when `multiple` is `true`. |
| disabled | `Boolean`  | Html `<input>` element state. |
| readonly | `Boolean`  | Html `<input>` element state. |
| icon      | `String`  | <div style="min-width:425px"> The icon to display inside the button. <MdBadge color="info">Updated on v2.1.0</MdBadge> <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `iconVariant` property. </div> |
| iconFlip  | `String`  | Flip the icon. Valid values are: `horizontal`, `vertical`, `both`. |
| iconPulse | `Boolean` | Apply ***pulse*** animation to the icon. |
| iconSize  | `Number`  | Render the icon at predefined size in pixel. |
| iconSpin  | `Boolean` | Apply ***spin*** animation to the icon. |
| iconRotation | `Number` | Rotate the icon. Valid values are: `90`, `180`, `270`. |
| iconVariant | `String` | Use predefined icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <MdBadge color="info">v2.1.0</MdBadge> |

</div>
</div>

<!-- @include: @/components/inputs/validator.md --> 


<script lang="ts" setup>
import type { Validation } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import type { Ref, ComputedRef } from "vue";
import { computed, reactive, ref, unref } from "vue";
import { Helper, type INotificationProvider, type TInputOptionItem } from "vue-mdbootstrap";

const tabs1active = ref(0);
const favoriteDrink = ref<string>();
const favoriteDrink1 = ref<string[]>([]);
const favoriteDrink2 = ref<string[]>([]);
const selectedDrink = ref<string>();
const selectedCoffee = ref<string>();
const selectedWeather1 = ref<string>();
const selectedWeather2 = ref<string>();
const selectedWeather3 = ref<string>();
const selectedWeather4 = ref<string>();
const selectedWeather5 = ref<string>();
const selectedWeather6 = ref<string>();
const selectedWeather7 = ref<string>();
const selectedWeather8 = ref<string>();
const selectedWeather9 = ref<string>();
const selectedWeather10 = ref<string>();
const todayWheather = ref<string>();

const drinkTypes: TInputOptionItem[] = [
  {
    value: "tea",
    label: "Tea",
  },
  {
    value: "coffee",
    label: "Coffee",
  },
  {
    value: "beer",
    label: "Beer",
  },
];
const favoriteDrinks: TInputOptionItem[] = [
  {
    value: "tea",
    label: "Tea",
  },
  {
    value: "coffee",
    label: "Coffee",
  },
  {
    value: "beer",
    label: "Beer",
  },
];
const favoriteCoffees: TInputOptionItem[] = [
  {
    value: "Americano",
    label: "Americano",
  },
  {
    value: "Espresso",
    label: "Espresso",
  },
  {
    value: "Cappuccino",
    label: "Cappuccino",
  },
];
const weathers: TInputOptionItem[] = [
  {
    value: "sunny",
    label: "Sunny",
    icon: "wb_sunny",
  },
  {
    value: "rainy",
    label: "Rainy",
    icon: "rainy",
  },
  {
    value: "heavy-rain",
    label: "Heavy Rain",
    icon: "thunderstorm",
  },
];

const occupations = [
  {value: 1, label: 'Computer and IT'},
  {value: 2, label: 'Scientists and Research'},
  {value: 3, label: 'Consultant'},
  {value: 4, label: 'Other'},
];

const loading = ref(false);
const surveyForm = reactive({
  fullName: null,
  emailAddress: null,
  favoriteDrink: null,
  occupation: null,
});
const surveyFormRules = {
  fullName: { required },
  emailAddress: { required, email },
  favoriteDrink: { required },
  occupation: { required },
};

function requiredFieldValidator(
  validator: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean };
  messages: { required: string };
  hasError: boolean;
}> {
  const obj = unref(validator)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: { required: obj.required.$message },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
    },
  }));
}

function emailFieldValidator(validator: Ref<Validation>): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; email: boolean };
  messages: { required: string; email: string };
  hasError: boolean;
}> {
  const obj = unref(validator)['emailAddress'];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: {
      required: obj.required.$message,
      email: "Email address format is invalid.",
    },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      email: unref(obj.email.$invalid),
    },
  }));
}

const v$ = useVuelidate(surveyFormRules, surveyForm);
const fullnameValidator = requiredFieldValidator(v$, "fullName");
const favoriteValidator = requiredFieldValidator(v$, "favoriteDrink");
const occupationValidator = requiredFieldValidator(v$, "occupation");
const emailValidator = emailFieldValidator(v$);

function submit(notification: INotificationProvider) {
  const validator = unref(v$);
  validator.$touch();

  if (!validator.$invalid) {
    loading.value = true;
    Helper.defer(() => {
      loading.value = false;
      notification.success("Data has been submitted.");
    }, 1000);
  }
}

</script>
