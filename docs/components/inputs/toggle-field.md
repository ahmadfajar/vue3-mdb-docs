---
outline: [2, 3] 
description: A form field component with a group of buttons with toggle capabilities and validation. It is primarily used to visualize choices with different approach. 
---


# Toggle Field


::: lead
**BsToggleField** is a form field component with a group of buttons with toggle capabilities, 
and validation. It is primarily used to visualize choices with different approach.
:::


## Overview

**BsToggleField** component internally uses [BsToggleButton](/components/buttons/toggle-button)
but with validation capabilities. This means the component shares the same style variants as 
[BsToggleButton](/components/buttons/toggle-button). 

**BsToggleField** component mimics the HTML5 `<input>` element. This means that you 
can add attributes like `required`, `readonly`, or `disabled` and it will react to them to 
give the best experience. You can also use `v-model` directive to create two-way data bindings 
on the `model-value` property. This is useful to control or maintain the `model-value` property.

<SmallNote color="teal">Updated on v2.0.0</SmallNote> 

::: BlockVue {title="Toggle Field Example" file="./docs/components/scripts/toggle-button-1.js"}

```vue
<template>
  <div class="w-100 p-3 bg-white rounded-3">
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

<script lang="ts" setup>
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

<!-- @include: @/components/colors-tip.md -->


## Checked Icon

With the help of slot `icon` you can add dynamic checked icon.

<SmallNote color="teal">Added since v2.0.1</SmallNote>

::: BlockVue {title="Toggle Field with checked icon example" file="./docs/components/scripts/toggle-button-2.js"}

```vue
<template>
  <div class="w-100 p-3 bg-white rounded-3">
    <bs-toggle-field v-model="favoriteDrink" :items="favoriteDrinks">
      <label class="col-md-3 col-form-label">Favorite Drink</label>
      <template #icon="item">
        <bs-icon-svg v-if="item?.value === favoriteDrink" icon="check"></bs-icon-svg>
      </template>
    </bs-toggle-field>
  </div>
</template>

<script lang="ts" setup>
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

::: BlockVue {title="Toggle Field with multiple selection example" file="./docs/components/scripts/toggle-button-3.js"}

```vue
<template>
  <div class="w-100 p-3 bg-white rounded-3">
    <div class="mb-3">
      <bs-toggle-field 
        v-model="favoriteDrink1" 
        :items="favoriteDrinks" 
        color="default-color" 
        multiple>
        <label class="col-md-3 col-form-label">Favorite Drink</label>
      </bs-toggle-field>  
    </div>
    <div class="mb-2">
      <bs-toggle-field 
        v-model="favoriteDrink2" 
        :items="favoriteCoffees" 
        color="default-color" 
        multiple>
        <label class="col-md-3 col-form-label">Favorite Coffee</label>
        <template #icon="item">
          <bs-icon-svg v-if="favoriteDrink2.includes(item?.value)" icon="check"></bs-icon-svg>
        </template>
      </bs-toggle-field>
    </div>
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

<SmallNote color="teal">Updated on v2.0.1</SmallNote>

::: BlockVue {title="Toggle Field Style Variants" file="./docs/components/scripts/toggle-button-4.js"}

```vue
<template>
  <div class="w-100 p-3 bg-white rounded-3">
    <h5 class="mb-4">How is the weather today?</h5>
    <div class="mb-3">
      <bs-toggle-field v-model="selectedWeather1" :items="weathers" color="deep-purple">
        <label class="col-md-3 col-form-label">Filled</label>  
        <template #icon="item">
          <bs-icon-svg :icon="item?.value === selectedWeather1 ? 'check' : item.icon"></bs-icon-svg>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field v-model="selectedWeather2" :items="weathers" color="deep-purple" raised>
        <label class="col-md-3 col-form-label">Filled Elevated</label>  
        <template #icon="item">
          <bs-icon-svg :icon="item?.value === selectedWeather2 ? 'check' : item.icon"></bs-icon-svg>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field v-model="selectedWeather3" :items="weathers" color="deep-purple" tonal>
        <label class="col-md-3 col-form-label">Filled Tonal</label>
        <template #icon="item">
          <bs-icon-svg :icon="item?.value === selectedWeather3 ? 'check' : item.icon"></bs-icon-svg>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field v-model="selectedWeather4" :items="weathers" color="deep-purple" outlined>
        <label class="col-md-3 col-form-label">Outlined</label>  
        <template #icon="item">
          <bs-icon-svg :icon="item?.value === selectedWeather4 ? 'check' : item.icon"></bs-icon-svg>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field v-model="selectedWeather5" :items="weathers" color="deep-purple" flat>
        <label class="col-md-3 col-form-label">Flat</label>  
        <template #icon="item">
          <bs-icon-svg :icon="item?.value === selectedWeather5 ? 'check' : item.icon"></bs-icon-svg>
        </template>
      </bs-toggle-field>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

### Combination {class="mt-lg-5"}

::: BlockVue {title="Toggle Field Style Variants" file="./docs/components/scripts/toggle-button-6.js"}

```vue
<template>
  <div class="w-100 p-3 bg-white rounded-3">
    <h5 class="mb-4">How is the weather today?</h5>
    <div class="mb-3">
      <bs-toggle-field 
        v-model="selectedWeather6" 
        :items="weathers" 
        :pill="false" 
        color="deep-purple" 
        rounded
      >
        <label class="col-md-3 col-form-label">Filled Round</label>
        <template #icon="item">
          <bs-icon-svg :icon="item?.value === selectedWeather6 ? 'check' : item.icon"></bs-icon-svg>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field 
        v-model="selectedWeather7" 
        :items="weathers" 
        :pill="false"
        color="deep-purple" 
      >
        <label class="col-md-3 col-form-label">Filled Rectangle</label>
        <template #icon="item">
          <bs-icon-svg :icon="item?.value === selectedWeather7 ? 'check' : item.icon"></bs-icon-svg>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field 
        v-model="selectedWeather8" 
        :items="weathers" 
        :pill="false" 
        color="deep-purple" 
        rounded 
        tonal
      >
        <label class="col-md-3 col-form-label">Filled Round Tonal</label>
        <template #icon="item">
          <bs-icon-svg :icon="item?.value === selectedWeather8 ? 'check' : item.icon"></bs-icon-svg>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field 
        v-model="selectedWeather9" 
        :items="weathers" 
        :pill="false" 
        color="deep-purple" 
        outlined 
        rounded
      >
        <label class="col-md-3 col-form-label">Outlined Round</label>
        <template #icon="item">
          <bs-icon-svg :icon="item?.value === selectedWeather9 ? 'check' : item.icon"></bs-icon-svg>
        </template>
      </bs-toggle-field>
    </div>
    <div class="mb-3">
      <bs-toggle-field 
        v-model="selectedWeather10" 
        :items="weathers" 
        :pill="false" 
        color="deep-purple" 
        flat 
        rounded
      >
        <label class="col-md-3 col-form-label">Flat Round</label>
        <template #icon="item">
          <bs-icon-svg :icon="item?.value === selectedWeather10 ? 'check' : item.icon"></bs-icon-svg>
        </template>
      </bs-toggle-field>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
*Toggle Field*. And sets the `persistent-help-text` property to `false` to make the 
help text visible when the *Toggle Field* is focused or hovered.

::: BlockVue {title="Toggle Field Help Text" file="./docs/components/scripts/toggle-field-1.js"}

```vue
<template>
  <div class="w-100 p-3 bg-white rounded-3">
    <h5 class="mb-4">Persistent help text</h5>
    <div class="mb-4">
      <bs-toggle-field 
        v-model="todayWheather" 
        :items="weathers" 
        color="blue"
        help-text="Select a wheather for today">
        <label class="col-md-3 col-form-label">
          Wheather Today
        </label>
      </bs-toggle-field>
    </div>
    <h5 class="mb-4">Non-persistent help text</h5>
    <div class="mb-3">
      <bs-toggle-field 
        v-model="selectedCoffee" 
        :items="favoriteCoffees" 
        :persistent-help-text="false" 
        color="deep-purple"
        help-text="Select one of the options above as your favorite coffee">
        <label class="col-md-3 col-form-label">
          Favorite Coffee
        </label>
      </bs-toggle-field>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

::: BlockVuelidate {title="Toggle Field advanced example" file="./docs/components/scripts/toggle-field-2.js"}

```vue
<template>
  <bs-app class="my-demo-wrapper mx-auto" style="max-width:460px">
    <bs-card shadow>
      <bs-appbar class="bg-indigo">
        <bs-button color="light-grey" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-white" title="Survey Form"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey" icon="more_vert" mode="icon" flat></bs-button>
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
              color="deep-purple" 
              required>
              <label class="col-form-label">Favorite Drink:</label>
              <template #icon="item">
                <bs-icon-svg 
                  v-if="item?.value === surveyForm.favoriteDrink" icon="check">
                </bs-icon-svg>
              </template>
            </bs-toggle-field>
          </div>
          <div class="mb-3">
            <bs-radio-group 
              v-model="surveyForm.occupation" 
              :items="occupations" 
              :validator="occupationValidator"
              color="deep-purple" 
              column="1" 
              required>
              <label class="col-form-label">Occupation:</label>
            </bs-radio-group>
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
              <span v-else>Submit Survey</span>
            </bs-button>
            <div class="text-grey-600 mb-2" style="font-size: 12px">
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

<script lang="ts" setup>
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

<SmallNote color="teal">Added since v2.0.0</SmallNote>

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| color    | `String`  | `'default'`  | The component color appearance. Any [MDBootstrap Color](/reference/colors#mdbootstrap-colors) variants and [Material Color](/reference/colors#material-colors) variants can be used. |
| disabled | `Boolean` | `false`      | The component state. |
| external-validator <Badge type="warning">deprecated</Badge> | `TValidator` |    | Use `validator` instead. |
| flat          | `Boolean` | `false` | Enable ***flat*** toggle button style. |
| help-textc    | `String` |          | The help text to display below the field component. |
| icon-position | `String` | `'left'` | <div style="min-width:325px"> The icon placement. Valid values are: `left` (before text), `right` (after text). </div> |
| id       | `String`  |              | Sets the component `ID`. This property value is auto generate. |
| items    | `TInputOptionItem[]` |   | Collection of input item properties. |
| model-value <Badge type="tip">v-model</Badge>  | `String`/`Number`/`Array` | | Value monitored by `v-model` that represents the selected value. <BsBadge color="info">v2.0.0</BsBadge> |
| multiple | `Boolean` | `false` | Enable multiple selection mode. The default is single selection mode. |
| name     | `String`  |         | The `<input>` element name. |
| outlined | `Boolean` | `false` | Enable ***outlined*** toggle button style. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| pill     | `Boolean` | `true`  | Enable ***rounded-pill*** toggle button style. <BsBadge color="info">v2.0.0</BsBadge> |
| raised   | `Boolean` | `false` | Enable ***elevated*** toggle button style. |
| readonly | `Boolean` | `false` | The component state. |
| rounded  | `Boolean` | `false` | Enable ***rounded*** toggle button style. <BsBadge color="info">v2.0.0</BsBadge> |
| size     | `String`  |         | Create the component with predefined size. Valid values are: `xs`, `sm`, `lg`. |
| toggle-color | `String`  |     | The selected button color (optional). Any [MDBootstrap Color](/reference/colors#mdbootstrap-colors) variants and [Material Color](/reference/colors#material-colors) variants can be used. |
| tonal    | `Boolean` | `false` | Enable ***filled tonal*** toggle button style. <BsBadge color="info">v2.0.4</BsBadge> |
| validator | `TValidator` |     | The configuration options to integrate external validator plugin to validate this field value. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| update:model-value | ( value:`String`/`Number`/`Boolean`/`Array`) | Used to update the `model-value` property. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments | Description |
|---------|-----------|-------------|
| icon    | ( item:`TInputOptionItem`) | The outlet slot used to place custom icon. <BsBadge color="info">v2.0.1</BsBadge> |
| label   | ( item:`TInputOptionItem`) | The outlet slot used to place custom label. <BsBadge color="info">v2.0.1</BsBadge> |

</div>
  </BsTab>
</BsTabs>


### TInputOptionItem {#api-tinput-option-item class="mt-lg-5"}

The Input item has properties as described below:

<div class="doc-api-reference mt-0">
<div class="doc-table-responsive doc-table-3cols">

| Property | Type      | Description |
|----------|-----------|-------------|
| value <Badge type="danger">required</Badge> | `String`/`Number`/`Boolean` | The item value. |
| label <Badge type="danger">required</Badge> | `String` | The item label. |
| id       | `String`   | Html `<input>` element ID. |
| name     | `String`   | Html `<input>` element name. It is used when `multiple` is `true`. |
| disabled | `Boolean`  | Html `<input>` element state. |
| readonly | `Boolean`  | Html `<input>` element state. |
| icon      | `String`  | <div style="min-width:425px"> The icon to display inside the button. <BsBadge color="info">Updated on v2.1.0</BsBadge> <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `iconVariant` property. </div> |
| iconFlip  | `String`  | Flip the icon. Valid values are: `horizontal`, `vertical`, `both`. |
| iconPulse | `Boolean` | Apply ***pulse*** animation to the icon. |
| iconSize  | `Number`  | Render the icon at predefined size in pixel. |
| iconSpin  | `Boolean` | Apply ***spin*** animation to the icon. |
| iconRotation | `Number` | Rotate the icon. Valid values are: `90`, `180`, `270`. |
| iconVariant | `String` | Use predefined icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <BsBadge color="info">v2.1.0</BsBadge> |

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
