---
outline: [2, 3] 
description: A component that let users enter a large amounts of text into an UI. 
---

# TextArea Field

::: lead
**BsTextArea** is a component that let users enter a large amounts of text into an UI.
:::


## Overview

**BsTextArea** component mimics the HTML5 `<textarea>` element. This means that you can add 
attributes like `required`, `readonly`, or `disabled` and it will react to them to give 
the best experience. You can also use `v-model` directive to create two-way data bindings 
on the `model-value` property as in `v-model="myText"`.


::: BlockVue {title="Basic Text Area Example" file="./docs/components/scripts/textarea-1.js"}

```vue
<template>
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-3">
    <bs-text-area v-model="myText">
      <label class="col-md-3 col-form-label">Text Area</label>
    </bs-text-area>
  </div>
  <div class="mb-3">
    <bs-text-area :model-value="myText" readonly>
      <label class="col-md-3 col-form-label">State Readonly</label>
    </bs-text-area>
  </div>
  <div class="mb-1">
    <bs-text-area :model-value="myText" disabled>
      <label class="col-md-3 col-form-label">State Disabled</label>
    </bs-text-area>
  </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const myText = ref<string>('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
</script>
```
:::

::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
Do not use the `model-value` property when using `v-model`.
:::


## Style Variants

You can style `<bs-text-area>` to your own preference or use a style variant 
based on Google **Material Design 2** or **Material Design 3** specifications. 

### Default

You can style `<bs-text-area>` that follows Google **Material Design 2** specifications
by using `floating-label` property explicitly.

::: BlockVue {title="Basic Text Area Example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-4">
    <bs-text-area>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-text-area>
  </div>
  <div class="mb-3">
    <bs-text-area floating-label>
      <label>Floating Label</label>
    </bs-text-area>
  </div>
  <div class="mb-2">
    <bs-text-area placeholder="Placeholder" floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</div>
```
:::


### Filled {class="mt-lg-5"}

Use `filled` property explicitly to enable `<bs-text-area>` with **solid fill style**.
And when combined with `floating-label` property, `<bs-text-area>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="Filled Text Area Example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-4">
    <bs-text-area filled>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-text-area>
  </div>
  <hr />
  <div class="mb-3">
    <bs-text-area filled floating-label>
      <label>Floating Label</label>
    </bs-text-area>
  </div>
  <div class="mb-2">
    <bs-text-area placeholder="Placeholder" filled floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</div>

```
::: 


### Outlined {class="mt-lg-5"}

Use `outlined` property explicitly to enable `<bs-text-area>` with **outline style**.
And when combined with `floating-label` property, `<bs-text-area>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="Outline Text Area Example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-3">
    <bs-text-area outlined>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-text-area>
  </div>
  <hr />
  <div class="mb-4">
    <bs-text-area outlined floating-label>
      <label>Floating Label</label>
    </bs-text-area>
  </div>
  <div class="mb-2">
    <bs-text-area placeholder="Placeholder" outlined floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</div>

```
::: 


## Browser Autocomplete

The `autocomplete` property gives you the option to enable browser to predict the user input.

::: BlockVue {title="Text Area with browser autocomplete"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-2">
    <bs-text-area autocomplete="address" filled floating-label>
      <label>Address</label>
    </bs-text-area>
  </div>
</div>

```
::: 


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily. 

::: BlockVue {title="Clearable Text Area Example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-2">
    <bs-text-area clear-button filled floating-label>
      <label>Address</label>
    </bs-text-area>
  </div>
</div>

```
::: 


## Adjusting Height

### Auto Grow

`<bs-text-area>` can be set to automatically adjust its height to fit the content, even as 
the user enters or deletes text. The height of the `<textarea>` element will either grow 
or shrink to fit the content.

::: BlockVue {title="Text Area autogrow example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-2">
    <bs-text-area auto-grow filled floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</div>

```
::: 


### Fixed Height {class="mt-lg-5"}

`<bs-text-area>` can also have a fixed height. Sets the `row-height` property to the desired number 
of pixels, and the component will have a fixed height.

::: BlockVue {title="Text Area height example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-2">
    <bs-text-area row-height="70" filled floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</div>

```
::: 


### Displayed Rows {class="mt-lg-5"}

The height of `<bs-text-area>` can also be set using the `rows` property to the desired 
number of rows. If no value is provided then it will default to `2`.

::: BlockVue {title="Text Area height example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-2">
    <bs-text-area rows="4" filled floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</div>

```
::: 


## Disable Resize Handle

Some web browsers will allow the user to re-size the height of the `<textarea>` element. 
To disable this feature, explicitly define the `no-resize` property.

::: BlockVue {title="Text Area height example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-2">
    <bs-text-area rows="3" no-resize filled floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</div>

```
::: 


## Help Text

The `help-text` property on `<bs-text-area>` adds an help text beneath the TextArea field.
And sets the `persistent-help-text` property to `false` will make the help text 
visible only when the TextArea field is focused.

::: BlockVue {title="Text Area with help text example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="col">
      <div class="mb-3">
        <bs-text-area :persistent-help-text="false" model-value="Grocery delivery"
          help-text="For example, flowers or used cars" floating-label>
          <label>Product or Service</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area help-text="Enter your profile information" floating-label>
          <label>Your Profile</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area :persistent-help-text="false" model-value="Grocery delivery"
          help-text="For example, flowers or used cars" floating-label filled>
          <label>Product or Service</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area help-text="Enter your profile information" floating-label filled>
          <label>Your Profile</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-2">
        <bs-text-area :persistent-help-text="false" model-value="Grocery delivery"
          help-text="For example, flowers or used cars" floating-label outlined>
          <label>Product or Service</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-2">
        <bs-text-area help-text="Enter your profile information" floating-label outlined>
          <label>Your Profile</label>
        </bs-text-area>
      </div>
    </div>
  </div>
</div>  
``` 
::: 


## Icons

The properties `prepend-icon`, `prepend-icon-outer`, `append-icon` and `append-icon-outer` 
provides the ability to add icon to `<bs-text-area>`.

Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon style variant. 

<SmallNote color="teal">Updated on v2.1.0</SmallNote>

::: BlockVue {title="Text Area with icons example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="col">
      <div class="mb-3">
        <bs-text-area prepend-icon="place" floating-label no-resize>
          <label>Prepend</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area append-icon="place" floating-label no-resize>
          <label>Append</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area prepend-icon-outer="place" floating-label no-resize>
          <label>Prepend Outer</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area append-icon-outer="place" floating-label no-resize>
          <label>Append Outer</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area prepend-icon="place" floating-label filled no-resize>
          <label>Prepend</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area append-icon="place" floating-label filled no-resize>
          <label>Append</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area prepend-icon-outer="place" floating-label filled no-resize>
          <label>Prepend Outer</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area append-icon-outer="place" floating-label filled no-resize>
          <label>Append Outer</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area prepend-icon="location_on_outlined" floating-label outlined no-resize>
          <label>Prepend</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area append-icon="location_on_outlined" floating-label outlined no-resize>
          <label>Append</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area prepend-icon-outer="location_on_outlined" floating-label outlined no-resize>
          <label>Prepend Outer</label>
        </bs-text-area>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-text-area append-icon-outer="location_on_outlined" floating-label outlined no-resize>
          <label>Append Outer</label>
        </bs-text-area>
      </div>
    </div>
  </div>
</div>
``` 
::: 

<!-- @include: @/components/icon-migration-info.md -->


## Usage Example

The following is an example that demonstrate more advanced use of the `<bs-text-area>` 
with form validation.

::: BlockVuelidate {clientOnly="true" title="Text Area advanced example" file="./docs/components/scripts/textarea-2.js"}

```vue
<template>
  <bs-app class="my-demo-wrapper mobi-card mx-auto">
    <bs-card class="rounded-3" shadow>
      <bs-appbar class="bg-default-color rounded-3 rounded-bottom-0">
        <bs-button color="light-grey" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-white" title="Edit Contact"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey" icon="more_vert" mode="icon" flat></bs-button>
      </bs-appbar>
      <bs-card-body class="border-bottom">
        <div class="mb-3 mt-3">
          <bs-text-field
            v-model="contact.fullName"
            :validator="fullnameValidator"
            filled
            floating-label
            required
            validation-icon
          >
            <label>Full Name</label>
          </bs-text-field>
        </div>
        <div class="mb-3">
          <bs-text-field
            v-model="contact.email"
            :validator="emailValidator"
            type="email"
            filled
            floating-label
            required
            validation-icon
          >
            <label>Email</label>
          </bs-text-field>
        </div>
        <div class="mb-3">
          <bs-text-area
            v-model="contact.address"
            :validator="addressValidator"
            auto-grow
            filled
            floating-label
            required
            validation-icon
          >
            <label>Address</label>
          </bs-text-area>
        </div>
        <div class="mb-2">
          <bs-text-field
            v-model="contact.city"
            :validator="cityValidator"
            filled
            floating-label
            required
            validation-icon
          >
            <label>City</label>
          </bs-text-field>
        </div>
      </bs-card-body>
      <bs-card-body class="d-flex justify-content-between">
        <bs-button color="default-color" style="width: 106px" @click="submit($notification)">
          <div
            v-if="loading"
            class="spinner-border"
            role="status"
            style="width: 24px; height: 24px; border-width: 3px"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else>Submit</span>
        </bs-button>
        <bs-button color="default-color" tonal @click="cancel()">Clear</bs-button>
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
import { Helper, type INotificationProvider } from "vue-mdbootstrap";

const loading = ref(false);
const contact = reactive({
  fullName: null,
  email: null,
  address: null,
  city: null,
});
const contactRules = {
  fullName: { required },
  email: { required, email },
  address: { required },
  city: { required },
};

function requiredFieldValidator(
  v$: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean };
  messages: { required: string };
  hasError: boolean;
}> {
  const obj = unref(v$)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: { required: obj.required.$message },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
    },
  }));
}

function emailFieldValidator(
  v$: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; email: boolean };
  messages: { required: string; email: string };
  hasError: boolean;
}> {
  const obj = unref(v$)[field];

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

const v$ = useVuelidate(contactRules, contact);
const fullnameValidator = requiredFieldValidator(v$, "fullName");
const emailValidator = emailFieldValidator(v$, "email");
const addressValidator = requiredFieldValidator(v$, "address");
const cityValidator = requiredFieldValidator(v$, "city");

function submit(notification: INotificationProvider) {
  const validator = unref(v$);
  validator.$touch();

  if (!validator.$invalid) {
    loading.value = true;
    Helper.defer(() => {
      loading.value = false;
      notification.success("Data has been sent.");
    }, 1000);
  }
}

function cancel() {
  unref(v$).$reset();
  contact.fullName = null;
  contact.email = null;
  contact.address = null;
  contact.city = null;
}
</script>

```
:::


## CSS Variables

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.0</SmallNote>

```scss
--md-field-active-border-color: rgb(var(--md-field-active-indicator));
--md-field-active-border-width: 2px;
--md-field-color-bg: currentColor;
--md-field-border-color: currentColor;
--md-field-border-width: 1px;
--md-field-control-height: 3rem;
--md-field-floating-label-color: var(--md-field-label-color);
--md-field-label-color: currentColor;
--md-field-padding-start: 1rem;
--md-field-padding-end: 1rem;
--md-field-padding-top: 1.875rem;
--md-field-padding-bottom: 0.375rem;

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
| action-icon-variant  | `String` | `'outlined'` | Sets the action icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <BsBadge color="info">Updated on v2.1.0</BsBadge> |
| append-icon          | `String` |  | <div style="min-width:375px">Sets icon to display at the inner right side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| append-icon-outer    | `String` |  | <div style="min-width:375px">Sets icon to display at the outer right side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> | 
| auto-grow    | `Boolean` | `false` | Enable/disable `<textarea>` element to auto grow. |
| autocomplete | `Boolean`/`String`  | `false` | Sets browsers **_autocomplete_** predictions on/off. |
| autofocus    | `Boolean` | `false` | Autofocus field when this component is mounted. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<textarea>` element. |
| external-validator <Badge type="warning">deprecated</Badge> | `TValidator` |    | Use `validator` instead. |
| filled       | `Boolean` | `false` | Create the component with **_solid fill style_** appearance. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| flat         | `Boolean` | `false` | Create the component with **_flat style_** appearance, and removes the borders. The component appearance will be styled like plain text. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| help-text   | `String`  |          | The help text to display below the field component. |
| id          | `String`  |          | Sets `<textarea>` element `ID` attribute. This property value is auto generates. |
| model-value <Badge type="tip">v-model</Badge> | `String` |  | Monitored by `v-model` to maintain this field value. <BsBadge color="info">v2.0.0</BsBadge> |
| name        | `String`  |  | Sets `<textarea>` element `name` attribute. |
| no-resize   | `Boolean` | `false`  | Disable resizing the `<textarea>` element. When set, the browser's resize handle will be disabled which prevents the user from changing the height of the `<textarea>` element. |
| outlined    | `Boolean` | `false`  | Create the component with **_outline style_** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| persistent-help-text | `Boolean`   | `true` | Keeps help text visible when the component is not focused. |
| placeholder  | `String` |        | Sets the field placeholder. |
| prepend-icon | `String` |        | <div style="min-width:375px">Sets icon to display at the inner left side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| prepend-icon-outer | `String` |  | <div style="min-width:375px">Sets icon to display at the outer left side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<textarea>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets `<textarea>` element `required` attribute. |
| row-height  | `Number`  |         | Sets `<textarea>` height in pixel. |
| rows        | `Number`  | `2`     | The number of rows to display within `<textarea>` element. Value must be greater than 1. |
| validation-icon | `Boolean`  | `false`| Display validation icon or not, when this field has been validated. <BsBadge color="info">v2.0.0</BsBadge> |
| validator | `TValidator` |   | The configuration options to integrate external validator plugin to validate this field value. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| blur    | ( evt:`FocusEvent`)    | Triggers when cursor leave the `<textarea>` element. |
| clear   |   | Fired after this field value is cleared. |
| focus   | ( evt:`FocusEvent`)    | Triggers when cursor entered the `<textarea>` element. |
| keydown | ( evt:`KeyboardEvent`) | Triggers when cursor is still in the `<textarea>` element and keyboard key is pressed. |
| update:model-value | ( value:`String`) | Used to update the `model-value` property. <BsBadge color="info">v2.0.0</BsBadge> |

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

<!-- @include: @/components/inputs/validator.md -->


<script lang="ts" setup>
import type { Validation } from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import type { Ref, ComputedRef } from 'vue';
import { computed, reactive, ref, unref } from 'vue';
import { Helper, type INotificationProvider } from 'vue-mdbootstrap';

const tabs1active = ref(0);
const myText = ref<string>('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
const loading = ref(false);
const contact = reactive({
  fullName: null,
  email: null,
  address: null,
  city: null,
});
const contactRules = {
  fullName: { required },
  email: { required, email },
  address: { required },
  city: { required },
};

function requiredFieldValidator(
  v$: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean };
  messages: { required: string };
  hasError: boolean;
}> {
  const obj = unref(v$)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: { required: obj.required.$message },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
    },
  }));
}

function emailFieldValidator(
  v$: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean, email: boolean };
  messages: { required: string, email: string };
  hasError: boolean;
}> {
  const obj = unref(v$)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: { required: obj.required.$message, email: 'Email address format is invalid.' },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      email: unref(obj.email.$invalid),
    },
  }));
}

const v$ = useVuelidate(contactRules, contact);
const fullnameValidator = requiredFieldValidator(v$, 'fullName');
const emailValidator = emailFieldValidator(v$, 'email');
const addressValidator = requiredFieldValidator(v$, 'address');
const cityValidator = requiredFieldValidator(v$, 'city');

function submit(notification: INotificationProvider) {
  const validator = unref(v$);
  validator.$touch();

  if (!validator.$invalid) {
    loading.value = true;
    Helper.defer(() => {
      loading.value = false;
      notification.success('Data has been sent.');
    }, 1000);
  }
}

function cancel() {
  unref(v$).$reset();
  contact.fullName = null;
  contact.email = null;
  contact.address = null;
  contact.city = null;
}
</script>
