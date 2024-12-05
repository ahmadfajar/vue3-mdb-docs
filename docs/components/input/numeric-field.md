---
outline: [2, 3]
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

::: BlockVue {title="Basic Numeric Field Example" clientOnly="true"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-3">
    <bs-numeric-field>
      <label class="col-md-3 col-form-label">Numeric Field</label>
    </bs-numeric-field>
  </div>
  <div class="mb-3">
    <bs-numeric-field :model-value="123456.789" readonly>
      <label class="col-md-3 col-form-label">State Readonly</label>
    </bs-numeric-field>
  </div>
  <div class="mb-1">
    <bs-numeric-field :model-value="123456.789" disabled>
      <label class="col-md-3 col-form-label">State Disabled</label>
    </bs-numeric-field>
  </div>
</div>
```
:::

::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
Do not use the `model-value` property when using `v-model`.
:::


## Style Variants

You can style `<bs-numeric-field>` to your own preference or use a style variant 
based on Google **Material Design 2** or **Material Design 3** specifications. 

### Default

You can style `<bs-numeric-field>` that follows Google **Material Design 2** specifications
by using `floating-label` property explicitly.

::: BlockVue {title="Classic Numeric Field Style Variant" clientOnly="true"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-4">
    <bs-numeric-field>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
  </div>
  <div class="mb-3">
    <bs-numeric-field floating-label>
      <label>Floating Label</label>
    </bs-numeric-field>
  </div>
  <div class="mb-2">
    <bs-numeric-field placeholder="Enter number" floating-label>
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</div>
```
:::


### Filled {class="mt-lg-5"}

Use `filled` property explicitly to enable `<bs-numeric-field>` with **solid fill style**.
And when combined with `floating-label` property, `<bs-numeric-field>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="Filled Numeric Field Style Variant" clientOnly="true"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-4">
    <bs-numeric-field filled>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
  </div>
  <hr />
  <div class="mb-3">
    <bs-numeric-field filled floating-label>
      <label>Floating Label</label>
    </bs-numeric-field>
  </div>
  <div class="mb-2">
    <bs-numeric-field placeholder="Enter number" filled floating-label>
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</div>

```
::: 

### Outlined {class="mt-lg-5"}

Use `outlined` property explicitly to enable `<bs-numeric-field>` with **outline style**.
And when combined with `floating-label` property, `<bs-numeric-field>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="Outline Numeric Field Style Variant" clientOnly="true"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-3">
    <bs-numeric-field outlined>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
  </div>
  <hr />
  <div class="mb-4">
    <bs-numeric-field outlined floating-label>
      <label>Floating Label</label>
    </bs-numeric-field>
  </div>
  <div class="mb-2">
    <bs-numeric-field placeholder="Enter number" outlined floating-label>
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</div>

```
::: 


### Rounded Filled {class="mt-lg-5"}

Combine `filled` property and `rounded` property explicitly to enable `<bs-numeric-field>` with 
**rounded pill solid style**.

<SmallNote color="teal">Added since v2.0.5</SmallNote>

::: BlockVue {title="Rounded Filled Numeric Field Style Variant" clientOnly="true"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-4">
    <bs-numeric-field filled rounded>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
  </div>
  <hr />
  <div class="mb-3">
    <bs-numeric-field filled floating-label rounded>
      <label>Floating Label</label>
    </bs-numeric-field>
  </div>
  <div class="mb-2">
    <bs-numeric-field placeholder="Enter number" filled floating-label rounded>
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</div>

```
::: 


### Rounded Outlined {class="mt-lg-5"}

Combine `outlined` property and `rounded` property explicitly to enable `<bs-numeric-field>` with 
**rounded pill outline style**.

<SmallNote color="teal">Added since v2.0.5</SmallNote>

::: BlockVue {title="Rounded Outline Numeric Field Example" clientOnly="true"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-3">
    <bs-numeric-field outlined rounded>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
  </div>
  <hr />
  <div class="mb-4">
    <bs-numeric-field outlined floating-label rounded>
      <label>Floating Label</label>
    </bs-numeric-field>
  </div>
  <div class="mb-2">
    <bs-numeric-field placeholder="Enter number" outlined floating-label rounded>
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</div>

```
::: 


## Action Buttons

The **BsNumericField** has two variants of action buttons to *increment/decrement* the numeric value.


### Spin Buttons {class="mt-lg-5"}

The *Spin* action buttons is the default action buttons. They can be placed on the
**left** or **right** side (*default*).

::: BlockVue {title="Numeric Field Action Buttons Example" clientOnly="true"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-3">
    <bs-numeric-field spin-button-placement="left" filled>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
  </div>
  <hr />
  <div class="mb-4">
    <bs-numeric-field spin-button-placement="left" filled floating-label>
      <label>Floating Label</label>
    </bs-numeric-field>
  </div>
  <div class="mb-2">
    <bs-numeric-field spin-button-placement="left" placeholder="Enter number" filled floating-label>
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</div>
```
:::


### Plus-Minus Buttons {class="mt-lg-5"}

The *Plus-Minus* action buttons can be enabled by defining the `action-button` property 
explicitly and sets the `spin-button` property to `false`. They can be placed on the
**left**, **right** (*default*) or **both** side.

::: BlockVue {title="Numeric Field Action Buttons Example" clientOnly="true"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-3">
    <bs-numeric-field :spin-button="false" action-button outlined>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-numeric-field>
  </div>
  <hr />
  <div class="mb-4">
    <bs-numeric-field
      :spin-button="false"
      action-button
      action-button-placement="left"
      outlined
      floating-label
    >
      <label>Floating Label</label>
    </bs-numeric-field>
  </div>
  <div class="mb-2">
    <bs-numeric-field
      :spin-button="false"
      action-button
      action-button-placement="both"
      placeholder="Enter number"
      outlined
      floating-label
    >
      <label>Field Label</label>
    </bs-numeric-field>
  </div>
</div>
```
:::


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily. 

::: BlockVue {title="Clearable Numeric Field Example" clientOnly="true" file="./docs/components/scripts/textfield-1.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="mb-1">
      <bs-numeric-field v-model="fieldValue1" clear-button filled floating-label>
        <label>Numeric Field</label>
      </bs-numeric-field>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fieldValue1 = ref<number>();
</script>
```
:::


## Help Text

The `help-text` property on `<bs-numeric-field>` adds an help text beneath the numeric field.
And sets the `persistent-help-text` property to `false` will make the help text 
visible only when the numeric field is focused.

::: BlockVue {title="Numeric Field with help text example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field :persistent-help-text="false" :model-value="123456.789"
          help-text="Type the product price per-unit" floating-label>
          <label>Unit Price</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field help-text="Type the product price per-unit" floating-label>
          <label>Unit Price</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field :persistent-help-text="false" :model-value="123456.789"
          help-text="Type the product price per-unit" floating-label filled>
          <label>Unit Price</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field help-text="Type the product price per-unit" floating-label filled>
          <label>Unit Price</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-2">
        <bs-numeric-field :persistent-help-text="false" :model-value="123456.789"
          help-text="Type the product price per-unit" floating-label outlined>
          <label>Unit Price</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-2">
        <bs-numeric-field help-text="Type the product price per-unit" floating-label outlined>
          <label>Unit Price</label>
        </bs-numeric-field>
      </div>
    </div>
  </div>
</div>  
``` 
::: 


## Icons

The properties `prepend-icon`, `prepend-icon-outer`, `append-icon` and `append-icon-outer` 
provides the ability to add icon to `<bs-numeric-field>`.

Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon style variant. 

<SmallNote color="teal">Updated on v2.1.0</SmallNote>


::: BlockVue {clientOnly="true" title="Numeric Field with icons example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field prepend-icon="bug_report_filled" floating-label>
          <label>Prepend</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field append-icon="bug_report_filled" floating-label>
          <label>Append</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field prepend-icon-outer="bug_report" floating-label>
          <label>Prepend Outer</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field append-icon-outer="bug_report" floating-label>
          <label>Append Outer</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field prepend-icon="bug_report_filled" floating-label filled>
          <label>Prepend</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field append-icon="bug_report_filled" floating-label filled>
          <label>Append</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field prepend-icon-outer="bug_report" floating-label filled>
          <label>Prepend Outer</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field append-icon-outer="bug_report" floating-label filled>
          <label>Append Outer</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field prepend-icon="bug_report_filled" floating-label outlined>
          <label>Prepend</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field append-icon="bug_report_filled" floating-label outlined>
          <label>Append</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field prepend-icon-outer="bug_report" floating-label outlined>
          <label>Prepend Outer</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field append-icon-outer="bug_report" floating-label outlined>
          <label>Append Outer</label>
        </bs-numeric-field>
      </div>
    </div>
  </div>
</div>
``` 
::: 

<!-- @include: @/components/icon-migration-info.md -->


## Prefixes and Suffixes

The **prefix** and **suffix** properties allows you to prepend and append inline non-modifiable 
text _before_ or _after_ the input field.

<SmallNote color="teal">Added since v2.0.10</SmallNote>

::: BlockVue {title="Text Field with prefixes and suffixes example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field prefix="$" prepend-icon="smartphone" floating-label>
          <label>Unit price</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field suffix="Kg" prepend-icon="person_filled" floating-label>
          <label>Weight</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field prefix="$" prepend-icon="smartphone" floating-label filled>
          <label>Unit price</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field suffix="Kg" prepend-icon="person_filled" floating-label filled>
          <label>Weight</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field prefix="$" prepend-icon="smartphone" floating-label outlined>
          <label>Unit price</label>
        </bs-numeric-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-numeric-field suffix="Kg" prepend-icon="person_filled" floating-label outlined>
          <label>Weight</label>
        </bs-numeric-field>
      </div>
    </div>
  </div>
</div>
``` 
::: 


## Usage Example

The following is an example that demonstrate more advanced use of the `<bs-numeric-field>` 
with form validation.

::: BlockVuelidate {clientOnly="true" title="Numeric Field advanced example" file="./docs/components/scripts/numeric-field-1.js"}

```vue
<template>
  <bs-app class="my-demo-wrapper mobi-card mx-auto">
    <bs-card shadow>
      <bs-appbar class="bg-default-color">
        <bs-button color="light-grey" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-white" title="Contact Details"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey" icon="more_vert" mode="icon" flat></bs-button>
      </bs-appbar>
      <bs-card-body class="border-bottom">
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
              color="deep-purple" 
              tonal
            >
              <template #icon="item">
                <bs-icon-svg v-if="item?.value === person.gender" icon="check" />
              </template>
            </bs-toggle-button>
          </div>
        </form>
      </bs-card-body>
      <bs-card-body class="d-flex justify-content-between">
        <bs-button color="default-color" @click="submit($notification)" style="width: 100px">
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
        <bs-button class="ms-0" color="default-color" tonal @click="clear()">
          Clear
        </bs-button>
      </bs-card-body>
    </bs-card>
    <bs-notification></bs-notification>
  </bs-app>
</template>

<script lang="ts" setup>
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

<SmallNote color="teal" class="mt-lg-4">Updated on v2.0.10</SmallNote>

```scss
--md-field-active-border-color: rgb(var(--md-field-active-indicator));
--md-field-active-border-width: 2px;
--md-field-color-bg: currentColor;
--md-field-border-color: currentColor;
--md-field-border-width: 1px;
--md-field-control-height: 3.5rem;
--md-field-floating-label-color: var(--md-field-label-color);
--md-field-label-color: currentColor;
--md-field-padding-start: 1rem;
--md-field-padding-end: 1rem;
--md-field-padding-top: 1.625rem;
--md-field-padding-bottom: 0.375rem;
--md-field-inline-text-font-weight: 500;

// global css variables
--md-field-primary-indicator-rgb: 98, 0, 238;
--md-field-primary-indicator: rgb(var(--md-field-primary-indicator-rgb));
--md-field-accent-indicator-rgb: 185,156,225;
--md-field-accent-indicator: rgb(var(--md-field-accent-indicator-rgb));
--md-field-active-indicator: var(--md-field-primary-indicator-rgb);

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| action-button        | `Boolean`   | `false`   | Enable and shows the *Plus-Minus* action buttons which is used to increment/decrement the numeric value. |
| action-button-placement | `String` | `'right'` | Sets the *Plus-Minus* action buttons placement, valid values: `left`, `right` and `both`. |
| action-icon-variant  | `String` | `'outlined'` | Sets the action icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <BsBadge color="info">Updated on v2.1.0</BsBadge> |
| append-icon          | `String` |  | <div style="min-width:375px">Sets icon to display at the inner right side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| append-icon-outer    | `String` |  | <div style="min-width:375px">Sets icon to display at the outer right side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| autocomplete | `Boolean`/`String`  | `false` | Sets browsers **_autocomplete_** predictions on/off. |
| autofocus    | `Boolean` | `false` | Autofocus field when this component is mounted. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| external-validator <Badge type="warning">deprecated</Badge> | `TValidator` |    | Use `validator` instead. |
| filled       | `Boolean` | `false` | Create the component with **_solid fill style_** appearance. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| flat         | `Boolean` | `false` | Create the component with **_flat style_** appearance, and removes the borders. The component appearance will be styled like plain text. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| help-text   | `String`  |          | The help text to display below the field component. |
| id          | `String`  |          | Sets `<input>` element `ID` attribute. This property value is auto generates. |
| locale      | `String`  |     | Defaults locale to be used to format the displayed numeric value. Default is using browser locale. |
| max-fraction | `Number` | `3` | Sets the maximum allowed fraction or decimal digits for the displayed value. |
| max-value   | `Number`  |  | Sets the maximum allowed value. |
| min-value   | `Number`  |  | Sets the minimum allowed value. |
| model-value <Badge type="tip">v-model</Badge> | `Number` |  | Monitored by `v-model` to maintain this field value. <BsBadge color="info">v2.0.0</BsBadge> |
| name        | `String`  |  | Sets `<input>` element `name` attribute. |
| outlined    | `Boolean` | `false`  | Create the component with **_outline style_** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| placeholder  | `String` |        | Sets the field placeholder. |
| prefix       | `String` |        | Prepend inline non-modifiable text before the input field. <BsBadge color="info">v2.0.10</BsBadge> |
| prepend-icon | `String` |        | <div style="min-width:375px">Sets icon to display at the inner left side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| prepend-icon-outer | `String` |  | <div style="min-width:375px">Sets icon to display at the outer left side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets `<input>` element `required` attribute. |
| rounded     | `Boolean` | `false` | Create the component with **_rounded-pill style_** appearance. <BsBadge color="info">v2.0.5</BsBadge> |
| spin-button | `Boolean` | `true`  | Enable and shows the *Spin Buttons* which is used to **_increment/decrement_** the numeric value. |
| spin-button-placement | `String`  | `'right'` | Sets the *Spin Buttons* placement, valid values: `left` and `right`. |
| step        | `Number`  | `1.0`   | Sets the **_increment/decrement_** steps value. |
| suffix      | `String`  |         | Append inline non-modifiable text after the input field. <BsBadge color="info">v2.0.10</BsBadge> |
| use-grouping | `Boolean` | `true` | Format the displayed numeric value with digit grouping. |
| validation-icon | `Boolean`  | `false`| Display validation icon or not, when this field has been validated. <BsBadge color="info">v2.0.0</BsBadge> |
| validator | `TValidator` |   | The configuration options to integrate external validator plugin to validate this field value. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| blur    | ( evt:`FocusEvent`)    | Triggers when cursor leave the `<input>` element. |
| clear   |   | Fired after this field value is cleared. |
| focus   | ( evt:`FocusEvent`)    | Triggers when cursor entered the `<input>` element. |
| keydown | ( evt:`KeyboardEvent`) | Triggers when cursor is still in the `<input>` element and keyboard key is pressed. |
| update:model-value | ( value:`Number`) | Used to update the `model-value` property. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-2cols">

| Name        | Description  |
|-------------|--------------|
| default       | The outlet slot used to place the field label. |
| append-inner  | The outlet slot used to place custom icon or component at the inner right side. <BsBadge color="info">v2.0.0</BsBadge> |
| append-outer  | The outlet slot used to place custom icon or component at the outer right side. <BsBadge color="info">v2.0.0</BsBadge> |
| help-text     | The outlet slot used for custom help text. <BsBadge color="info">v2.0.0</BsBadge> |
| prepend-inner | The outlet slot used to place custom icon or component at the inner left side. <BsBadge color="info">v2.0.0</BsBadge> |
| prepend-outer | The outlet slot used to place custom icon or component at the outer left side. <BsBadge color="info">v2.0.0</BsBadge>|

</div>
  </BsTab>
</BsTabs>


<!-- @include: @/components/input/validator.md -->


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
