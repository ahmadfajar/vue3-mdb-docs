---
outline: [2, 3] 
description: Numeric Field is a component that let users enter numeric text into an UI.
---

# Numeric Field


::: lead
**BsNumericField** is a component that let users enter numeric text into an UI.
:::


## Overview

**BsNumericField** component mimics the HTML5 `<input type="number">` behaviour. This means 
that you can add attributes like `required`, `readonly`, or `disabled` and it will react 
to them to give the best experience. You can also use `v-model` directive to create two-way 
data bindings on the `model-value` property. 

Additionally, you can use keyboard **UP/DOWN** arrow to increment or decrement the value.

::: BlockVue {title="Numeric Field Overview" clientOnly="true"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-numeric-field>
      <label class="col-md-3 col-form-label">Numeric Field</label>
    </bs-numeric-field>
    <bs-numeric-field :model-value="123456.789" readonly>
      <label class="col-md-3 col-form-label">State Readonly</label>
    </bs-numeric-field>
    <bs-numeric-field :model-value="123456.789" disabled>
      <label class="col-md-3 col-form-label">State Disabled</label>
    </bs-numeric-field>
  </div>
</template>

```
:::

<!-- @include: @/components/model-value-important.md -->


## Style Variants

You can style `<bs-numeric-field>` to your own preference or use a style variant 
based on Google **Material Design 2** or **Material Design 3** specifications. 

### Default {#style-variants-default}

You can style `<bs-numeric-field>` that follows Google **Material Design 2** specifications
by using `floating-label` property explicitly.

::: BlockVue {title="Numeric Field Style Variants - Default" clientOnly="true"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-numeric-field>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
    <bs-numeric-field floating-label>
      <label>Floating Label</label>
    </bs-numeric-field>
    <bs-numeric-field placeholder="Enter number" floating-label>
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</template>

```
:::


### Filled {#style-variants-filled class="mt-lg-5"}

Use `filled` property explicitly to enable `<bs-numeric-field>` with **solid fill style**.
And when combined with `floating-label` property, `<bs-numeric-field>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="Numeric Field Style Variants - Filled" clientOnly="true"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-numeric-field filled>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
    <bs-divider></bs-divider>
    <bs-numeric-field filled floating-label>
      <label>Floating Label</label>
    </bs-numeric-field>
    <bs-numeric-field placeholder="Enter number" filled floating-label>
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</template>

```
::: 

### Outlined {#style-variants-outlined class="mt-lg-5"}

Use `outlined` property explicitly to enable `<bs-numeric-field>` with **outline style**.
And when combined with `floating-label` property, `<bs-numeric-field>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="Numeric Field Style Variants - Outlined" clientOnly="true"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-numeric-field outlined>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
    <bs-divider></bs-divider>
    <bs-numeric-field outlined floating-label>
      <label>Floating Label</label>
    </bs-numeric-field>
    <bs-numeric-field placeholder="Enter number" outlined floating-label>
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</template>

```
::: 


### Filled Rounded {#style-variants-filled-rounded class="mt-lg-5"}

Combine `filled` property and `rounded` property explicitly to enable `<bs-numeric-field>` with 
**rounded pill solid style**.

<SmallNote color="teal">Added in v2.0.5</SmallNote>

::: BlockVue {title="Numeric Field Style Variants - Filled Rounded" clientOnly="true"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-numeric-field filled rounded>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
    <bs-divider></bs-divider>
    <bs-numeric-field filled floating-label rounded>
      <label>Floating Label</label>
    </bs-numeric-field>
    <bs-numeric-field placeholder="Enter number" filled floating-label rounded>
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</template>

```
::: 


### Outlined Rounded {#style-variants-outlined-rounded class="mt-lg-5"}

Combine `outlined` property and `rounded` property explicitly to enable `<bs-numeric-field>` with 
**rounded pill outline style**.

<SmallNote color="teal">Added in v2.0.5</SmallNote>

::: BlockVue {title="Numeric Field Style Variants - Outlined Rounded" clientOnly="true"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-numeric-field outlined rounded>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
    <bs-divider></bs-divider>
    <bs-numeric-field outlined floating-label rounded>
      <label>Floating Label</label>
    </bs-numeric-field>
    <bs-numeric-field placeholder="Enter number" outlined floating-label rounded>
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</template>

```
::: 


## Action Buttons

The **BsNumericField** has two variants of action buttons to *increment/decrement* the numeric value.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

### Spin Buttons {#action-buttons-spin-buttons class="mt-lg-5"}

The *Spin* action buttons is the default action buttons. They can be placed on the
**left** or **right** side (*default*).

::: BlockVue {title="Numeric Field Action Buttons - Spin Buttons" clientOnly="true"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-numeric-field action-button-placement="left" filled>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
    <bs-divider></bs-divider>
    <bs-numeric-field action-button-placement="left" filled floating-label>
      <label>Floating Label</label>
    </bs-numeric-field>
    <bs-numeric-field 
      action-button-placement="right" 
      placeholder="Enter number" 
      filled 
      floating-label
    >
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</template>

```
:::


### Plus-Minus Buttons {#action-buttons-plus-minus-buttons class="mt-lg-5"}

The *Plus-Minus* action buttons can be enabled by setting the value of `action-button` property 
to `plus-minus`. They can be placed on the **left**, **right** (*default*) or **both** side.

::: BlockVue {title="Numeric Field Action Buttons - Plus-Minus Buttons" clientOnly="true"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-numeric-field 
      action-button="plus-minus" 
      action-button-placement="right" 
      outlined
    >
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
    <bs-divider></bs-divider>
    <bs-numeric-field
      action-button="plus-minus"
      action-button-placement="left"
      outlined
      floating-label
    >
      <label>Floating Label</label>
    </bs-numeric-field>
    <bs-numeric-field
      action-button="plus-minus"
      action-button-placement="both"
      placeholder="Enter number"
      outlined
      floating-label
    >
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</template>

```
:::


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily. 

::: BlockVue {title="Clearable Numeric Field" clientOnly="true" file="./docs/components/inputs/js/textfield-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-numeric-field v-model="fieldValue1" clear-button filled floating-label>
      <label>Numeric Field</label>
    </bs-numeric-field>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fieldValue1 = ref<number>();
</script>
```
:::


## Help Text

The `help-text` property on `<bs-numeric-field>` adds an help text beneath the numeric field.
And define the `persistent-help-off` property explicitly to make the help text 
visible only when the numeric field is focused.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {title="Numeric Field with Help Text"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-3">
        <bs-numeric-field help-text="Type the product price per-unit" floating-label>
          <label>Unit Price</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field :model-value="123456.789" persistent-help-off
          help-text="Type the product price per-unit" floating-label>
          <label>Unit Price</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field help-text="Type the product price per-unit" floating-label filled>
          <label>Unit Price</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field :model-value="123456.789" persistent-help-off
          help-text="Type the product price per-unit" floating-label filled>
          <label>Unit Price</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3 mb-md-0">
        <bs-numeric-field help-text="Type the product price per-unit" floating-label outlined>
          <label>Unit Price</label>
        </bs-numeric-field>
      </div>
      <div class="col">
        <bs-numeric-field :model-value="123456.789" persistent-help-off
          help-text="Type the product price per-unit" floating-label outlined>
          <label>Unit Price</label>
        </bs-numeric-field>
      </div>
    </div>
  </div> 
</template>

``` 
::: 


## Icons

The properties `prepend-icon`, `prepend-icon-outer`, `append-icon` and `append-icon-outer` 
provides the ability to add icon to `<bs-numeric-field>`.

Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon style variant. 

<SmallNote color="teal">Updated in v2.1.0</SmallNote>


::: BlockVue {clientOnly="true" title="Numeric Field with Icon"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-3">
        <bs-numeric-field prepend-icon="bug_report_filled" floating-label>
          <label>Prepend</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field append-icon="bug_report_filled" floating-label>
          <label>Append</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field prepend-icon-outer="bug_report" floating-label>
          <label>Prepend Outer</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field append-icon-outer="bug_report" floating-label>
          <label>Append Outer</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field prepend-icon="bug_report_filled" floating-label filled>
          <label>Prepend</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field append-icon="bug_report_filled" floating-label filled>
          <label>Append</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field prepend-icon-outer="bug_report" floating-label filled>
          <label>Prepend Outer</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field append-icon-outer="bug_report" floating-label filled>
          <label>Append Outer</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field prepend-icon="bug_report_filled" floating-label outlined>
          <label>Prepend</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field append-icon="bug_report_filled" floating-label outlined>
          <label>Append</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3 mb-md-0">
        <bs-numeric-field prepend-icon-outer="bug_report" floating-label outlined>
          <label>Prepend Outer</label>
        </bs-numeric-field>
      </div>
      <div class="col">
        <bs-numeric-field append-icon-outer="bug_report" floating-label outlined>
          <label>Append Outer</label>
        </bs-numeric-field>
      </div>
    </div>
  </div>
</template>

``` 
::: 

<!-- @include: @/components/icon-migration-info.md -->


## Prefixes and Suffixes

The **prefix** and **suffix** properties allows you to prepend and append inline non-modifiable 
text _before_ or _after_ the input field.

<SmallNote color="teal">Added in v2.0.10</SmallNote>

::: BlockVue {title="Numeric Field with prefixes and suffixes"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-3">
        <bs-numeric-field prefix="$" prepend-icon="payments" floating-label>
          <label>Unit price</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field suffix="Kg" prepend-icon="person_filled" floating-label>
          <label>Weight</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field prefix="$" prepend-icon="payments" floating-label filled>
          <label>Unit price</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3">
        <bs-numeric-field suffix="Kg" prepend-icon="person_filled" floating-label filled>
          <label>Weight</label>
        </bs-numeric-field>
      </div>
      <div class="col mb-3 mb-md-0">
        <bs-numeric-field prefix="$" prepend-icon="payments" floating-label outlined>
          <label>Unit price</label>
        </bs-numeric-field>
      </div>
      <div class="col">
        <bs-numeric-field suffix="Kg" prepend-icon="person_filled" floating-label outlined>
          <label>Weight</label>
        </bs-numeric-field>
      </div>
    </div>
  </div>
</template>

``` 
::: 


## Usage Example

The following is an example that demonstrate more advanced use of the `<bs-numeric-field>` 
with form validation.

::: BlockVuelidate {clientOnly="true" title="Numeric Field Usage" file="./docs/components/inputs/js/numeric-field-1.js"}

```vue
<template>
  <bs-app class="p-2">
    <bs-card class="mobi-card w-full mx-auto" shadow>
      <bs-appbar class="bg-default-color">
        <bs-button color="light" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-light" title="Contact Details"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light" icon="more_vert" mode="icon" flat></bs-button>
      </bs-appbar>
      <bs-card-body class="border-b">
        <form novalidate>
          <div class="mb-3 mt-3">
            <bs-text-field
              v-model="person.fullName"
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
              v-model="person.emailAddress"
              :validator="emailValidator"
              action-icon-variant="filled"
              prepend-icon="email"
              type="email"
              outlined
              floating-label
              required
              validation-icon
            >
              <label>Your Email</label>
            </bs-text-field>
          </div>
          <div class="mb-4">
            <bs-numeric-field
              v-model="person.age"
              :validator="ageValidator"
              action-icon-variant="filled"
              prepend-icon="manage_accounts"
              min-value="10"
              outlined
              floating-label
              required
              validation-icon
            >
              <label>Your Age</label>
            </bs-numeric-field>
          </div>
          <div class="mb-3">
            <bs-toggle-button 
              v-model="person.gender" 
              :items="genders" 
              color="primary" 
              tonal
            >
              <template #icon="item">
                <bs-svg-icon v-if="item?.value === person.gender" icon="check" />
              </template>
            </bs-toggle-button>
          </div>
        </form>
      </bs-card-body>
      <bs-card-body class="flex justify-between">
        <bs-button @click="submit($notification)" style="width: 110px">
          <bs-spin-loader
            v-if="loading"
            role="status"
            size="24"
            thickness="3">
          </bs-spin-loader>
          <span v-else>Save</span>
        </bs-button>
        <bs-button style="width: 110px" tonal @click="clear()">
          Clear
        </bs-button>
      </bs-card-body>
    </bs-card>
    <bs-notification></bs-notification>
  </bs-app>
</template>

<script setup lang="ts">
import type { Validation } from "@vuelidate/core";
import { email, maxValue, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import type { Ref, ComputedRef } from "vue";
import { computed, reactive, ref, unref } from "vue";
import { Helper, type INotificationProvider } from "vue-mdbootstrap";

const loading = ref(false);
const person = reactive({
  fullName: null,
  emailAddress: null,
  age: null,
  gender: "male",
});
const personRules = {
  fullName: { required },
  emailAddress: { required, email },
  age: { required, maxAge: maxValue(50) },
};
const genders = [
  { value: "male", label: "MALE" },
  { value: "female", label: "FEMALE" },
];

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
  const obj = unref(validator)["emailAddress"];

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

function ageFieldValidator(validator: Ref<Validation>): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; maxAge: boolean };
  messages: { required: string; maxAge: string };
  hasError: boolean;
}> {
  const obj = unref(validator)["age"];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: {
      required: obj.required.$message,
      maxAge: obj.maxAge.$message,
    },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      maxAge: unref(obj.maxAge.$invalid),
    },
  }));
}

const v$ = useVuelidate(personRules, person);
const fullnameValidator = requiredFieldValidator(v$, "fullName");
const emailValidator = emailFieldValidator(v$);
const ageValidator = ageFieldValidator(v$);

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

function clear() {
  unref(v$).$reset();
  person.fullName = null;
  person.emailAddress = null;
  person.age = null;
  person.gender = "male";
}
</script>

```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-field` and global CSS variables for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-field {
  --md-field-border-width: 1px;
  --md-field-border-color: #{colors.$gray-400};
  --md-field-border-radius: #{vars.$text-field-border-radius};
  --md-field-hover-border-color: currentColor;
  --md-field-active-border-width: 2px;
  --md-field-active-border-color: var(--md-field-active-indicator);
  --md-field-color-bg: currentColor;

  --md-field-outline-bg: transparent;
  --md-field-outline-hover-bg: transparent;
  --md-field-outline-focus-bg: transparent;
  --md-field-outline-border-radius: var(--md-field-border-radius);

  --md-field-control-height: #{vars.$text-field-height};
  --md-field-label-color: currentColor;
  --md-field-label-font-weight: var(--font-weight-medium);
  --md-field-inline-text-font-weight: var(--font-weight-medium);
  --md-field-floating-label-color: var(--md-field-label-color);

  --md-field-padding-start: #{vars.$text-field-padding-start};
  --md-field-padding-end: #{vars.$text-field-padding-end};
  --md-field-padding-top: #{vars.$text-field-padding-top};
  --md-field-padding-bottom: #{vars.$text-field-padding-bottom};
  --md-field-classic-padding-top: #{vars.$text-field-classic-padding-top};
  --md-field-classic-padding-bottom: #{vars.$text-field-classic-padding-bottom};
}

// global css variables
--md-field-primary-indicator: oklch(0.458 0.23 304.441);
--md-field-accent-indicator: oklch(0.743 0.102 303.276);
--md-field-active-indicator: var(--md-field-primary-indicator);
--md-field-button-active-bg: oklch(0.154 0 89.876 / 0.25);
--md-field-button-hover-bg: oklch(0.431 0 89.876 / 0.2);
--md-field-button-hover-color: oklch(0.209 0 89.876);
--md-field-button-color: currentColor;
--md-field-disabled-opacity: 0.4;
--md-field-readonly-opacity: 0.55;
--md-caret-size: 5px;

```

## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| action-button        | `String`   | `'up-down'` | Shows **Up-Down** or **Plus-Minus** action buttons which is used to increment/decrement the numeric value. Valid values are: `up-down`, `plus-minus`. <MdBadge color="info">Updated in v2.2.0</MdBadge> |
| action-button-placement | `String` | `'right'` | Sets the **Up-Down** or **Plus-Minus** action buttons placement, valid values: `left`, `right` and `both`. |
| action-icon-variant  | `String` | `'outlined'` | Sets the action icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <MdBadge color="info">Updated in v2.1.0</MdBadge> |
| append-icon          | `String` |  | <div style="min-width:400px">Sets icon to display at the inner right side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| append-icon-outer    | `String` |  | <div style="min-width:400px">Sets icon to display at the outer right side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| autocomplete | `Boolean`&#124;`String`  | `false` | Sets browsers **_autocomplete_** predictions on/off. |
| autofocus    | `Boolean` | `false` | Autofocus field when this component is mounted. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| filled       | `Boolean` | `false` | Create the component with **_solid fill style_** appearance. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| help-text   | `String`  |          | The help text to display below the field component. |
| id          | `String`  |          | Sets `<input>` element `ID` attribute. This property value is auto generates. |
| locale      | `String`  |     | Defaults locale to be used to format the displayed numeric value. Default is using browser locale. |
| max-fraction | `Number` | `3` | Sets the maximum allowed fraction or decimal digits for the displayed value. |
| max-value   | `Number`  |  | Sets the maximum allowed value. |
| min-value   | `Number`  |  | Sets the minimum allowed value. |
| model-value <Badge type="tip">v-model</Badge> | `Number` |  | Monitored by `v-model` to maintain this field value. <MdBadge color="info">v2.0.0</MdBadge> |
| name        | `String`  |  | Sets `<input>` element `name` attribute. |
| outlined    | `Boolean` | `false`  | Create the component with **_outline style_** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| persistent-help-text <Badge type="warning">deprecated</Badge> | `Boolean` | `true` | Use `persistent-help-off` instead. |
| persistent-help-off | `Boolean` | `false` | Prevents help text from being visible when the component is not focused. <MdBadge color="info">v2.2.0</MdBadge> |
| placeholder  | `String` |        | Sets the field placeholder. |
| prefix       | `String` |        | Prepend inline non-modifiable text before the input field. <MdBadge color="info">v2.0.10</MdBadge> |
| prepend-icon | `String` |        | <div style="min-width:375px">Sets icon to display at the inner left side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| prepend-icon-outer | `String` |  | <div style="min-width:375px">Sets icon to display at the outer left side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets `<input>` element `required` attribute. |
| rounded     | `Boolean` | `false` | Create the component with **_rounded-pill style_** appearance. <MdBadge color="info">v2.0.5</MdBadge> |
| step        | `Number`  | `1.0`   | Sets the **_increment/decrement_** steps value. |
| suffix      | `String`  |         | Append inline non-modifiable text after the input field. <MdBadge color="info">v2.0.10</MdBadge> |
| use-grouping | `Boolean` | `true` | Format the displayed numeric value with digit grouping. |
| validation-icon | `Boolean`  | `false`| Display validation icon or not, when this field has been validated. <MdBadge color="info">v2.0.0</MdBadge> |
| validator | `TValidator` |   | The configuration options to integrate external validator plugin to validate this field value. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| blur    | ( evt:`FocusEvent`)    | Triggers when cursor leave the `<input>` element. |
| clear   |   | Fired after this field value is cleared. |
| focus   | ( evt:`FocusEvent`)    | Triggers when cursor entered the `<input>` element. |
| keydown | ( evt:`KeyboardEvent`) | Triggers when cursor is still in the `<input>` element and keyboard key is pressed. |
| update:model-value | ( value:`Number`) | Used to update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name        | Description  |
|-------------|--------------|
| default       | The outlet slot used to place the field label. |
| append-inner  | The outlet slot used to place custom icon or component at the inner right side. <MdBadge color="info">v2.0.0</MdBadge> |
| append-outer  | The outlet slot used to place custom icon or component at the outer right side. <MdBadge color="info">v2.0.0</MdBadge> |
| help-text     | The outlet slot used for custom help text. <MdBadge color="info">v2.0.0</MdBadge> |
| prepend-inner | The outlet slot used to place custom icon or component at the inner left side. <MdBadge color="info">v2.0.0</MdBadge> |
| prepend-outer | The outlet slot used to place custom icon or component at the outer left side. <MdBadge color="info">v2.0.0</MdBadge>|

</div>
  </BsTab>
</BsTabs>


<!-- @include: @/components/inputs/validator.md -->


<script lang="ts" setup>
import type { Validation } from "@vuelidate/core";
import { email, maxValue, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import type { Ref, ComputedRef } from "vue";
import { computed, reactive, ref, unref } from "vue";
import { Helper, type INotificationProvider } from "vue-mdbootstrap";


const tabs1active = ref(0);
const fieldValue1 = ref<number>();
const loading = ref(false);
const person = reactive({
  fullName: null,
  emailAddress: null,
  age: null,
  gender: 'male'
});
const personRules = {
  fullName: { required },
  emailAddress: { required, email },
  age: { required, maxAge: maxValue(50) },
};
const genders = [
  {value: 'male', label: 'MALE'},
  {value: 'female', label: 'FEMALE'},
];

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

function ageFieldValidator(validator: Ref<Validation>): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; maxAge: boolean };
  messages: { required: string; maxAge: string };
  hasError: boolean;
}> {
  const obj = unref(validator)['age'];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: {
      required: obj.required.$message,
      maxAge: obj.maxAge.$message,
    },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      maxAge: unref(obj.maxAge.$invalid),
    },
  }));
}

const v$ = useVuelidate(personRules, person);
const fullnameValidator = requiredFieldValidator(v$, "fullName");
const emailValidator = emailFieldValidator(v$);
const ageValidator = ageFieldValidator(v$);

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

function clear() {
  unref(v$).$reset();
  person.fullName = null;
  person.emailAddress = null;
  person.age = null;
  person.gender = 'male';
}
</script>
