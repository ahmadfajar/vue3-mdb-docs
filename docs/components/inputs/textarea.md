---
outline: [2, 3] 
description: TextArea is a component that let users enter a large amounts of text into an UI. 
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


::: BlockVue {title="TextArea Overview" file="./docs/components/inputs/js/textarea-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
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

<script setup lang="ts">
import { ref } from 'vue';

const myText = ref<string>('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
</script>
```
:::

<!-- @include: @/components/model-value-important.md -->


## Style Variants

You can style `<bs-text-area>` to your own preference or use a style variant 
based on Google **Material Design 2** or **Material Design 3** specifications. 

### Default

You can style `<bs-text-area>` that follows Google **Material Design 2** specifications
by using `floating-label` property explicitly.

::: BlockVue {title="TextArea Style Variants - Default"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-text-area>
      <label class="col-sm-3 col-form-label">Classic Field</label>
    </bs-text-area>
    <bs-text-area floating-label>
      <label>Floating Label</label>
    </bs-text-area>
    <bs-text-area placeholder="Placeholder" floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</template>

```
:::


### Filled {class="mt-lg-5"}

Use `filled` property explicitly to enable `<bs-text-area>` with **solid fill style**.
And when combined with `floating-label` property, `<bs-text-area>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="TextArea Style Variants - Filled"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-text-area filled>
      <label class="col-sm-3 col-form-label">Classic Field</label>
    </bs-text-area>
    <bs-divider></bs-divider>
    <bs-text-area filled floating-label>
      <label>Floating Label</label>
    </bs-text-area>
    <bs-text-area placeholder="Placeholder" filled floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</template>

```
::: 


### Outlined {class="mt-lg-5"}

Use `outlined` property explicitly to enable `<bs-text-area>` with **outline style**.
And when combined with `floating-label` property, `<bs-text-area>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="TextArea Style Variants - Outlined"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-text-area outlined>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-text-area>
    <bs-divider></bs-divider>
    <bs-text-area outlined floating-label>
      <label>Floating Label</label>
    </bs-text-area>
    <bs-text-area placeholder="Placeholder" outlined floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</template>

```
::: 


## Browser Autocomplete

The `autocomplete` property gives you the option to enable browser to predict the user input.

::: BlockVue {title="TextArea Browser Autocomplete"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <bs-text-area autocomplete="address" filled floating-label>
      <label>Address</label>
    </bs-text-area>
  </div>
</template>

```
::: 


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily. 

::: BlockVue {title="Clearable TextArea"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <bs-text-area clear-button filled floating-label>
      <label>Address</label>
    </bs-text-area>
  </div>
</template>

```
::: 


## Adjusting Height

### Auto Grow {#adjusting-height-auto-grow}

`<bs-text-area>` can be set to automatically adjust its height to fit the content, even as 
the user enters or deletes text. The height of the `<textarea>` element will either grow 
or shrink to fit the content.

::: BlockVue {title="TextArea Adjusting Height - Auto Grow" file="./docs/components/inputs/js/textarea-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <bs-text-area v-model="textArea1" auto-grow filled floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textArea1 = ref<string>();
</script>

```
::: 


### Fixed Height {#adjusting-height-fixed-height class="mt-lg-5"}

`<bs-text-area>` can also have a fixed height. Sets the `row-height` property to the desired number 
of pixels, and the component will have a fixed height.

::: BlockVue {title="TextArea Adjusting Height - Fixed Height"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <bs-text-area row-height="70" filled floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</template>

```
::: 


### Displayed Rows {#adjusting-height-displayed-rows class="mt-lg-5"}

The height of `<bs-text-area>` can also be set using the `rows` property to the desired 
number of rows. If no value is provided then it will default to `2`.

::: BlockVue {title="TextArea Adjusting Height - Displayed Rows"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <bs-text-area rows="4" filled floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</template>

```
::: 


## Disabling Resize Handle

Some web browsers will allow the user to re-size the height of the `<textarea>` element. 
To disable this feature, explicitly define the `no-resize` property.

::: BlockVue {title="TextArea Disabling Resize Handle"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <bs-text-area rows="3" no-resize filled floating-label>
      <label>Field Label</label>
    </bs-text-area>
  </div>
</template>

```
::: 


## Help Text

The `help-text` property on `<bs-text-area>` adds an help text beneath the TextArea field.
And define the `persistent-help-off` property explicitly to make the help text 
visible only when the TextArea field is focused.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {title="TextArea with Help Text"}

```vue
<template>
  <div class="demo-wrapper w-full p-2">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <div class="mb-3">
          <bs-text-area help-text="Enter your profile information" floating-label>
            <label>Your Profile</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-area model-value="Grocery delivery" persistent-help-off
            help-text="For example, flowers or used cars" floating-label>
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
        <div class="mb-3">
          <bs-text-area model-value="Grocery delivery" persistent-help-off
            help-text="For example, flowers or used cars" floating-label filled>
            <label>Product or Service</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col">
        <div class="mb-3 mb-md-0">
          <bs-text-area help-text="Enter your profile information" floating-label outlined>
            <label>Your Profile</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col">
        <div class="mb-0">
          <bs-text-area model-value="Grocery delivery" persistent-help-off
            help-text="For example, flowers or used cars" floating-label outlined>
            <label>Product or Service</label>
          </bs-text-area>
        </div>
      </div>
    </div>
  </div> 
</template>
``` 
::: 


## Icons

The properties `prepend-icon`, `prepend-icon-outer`, `append-icon` and `append-icon-outer` 
provides the ability to add icon to `<bs-text-area>`.

Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon style variant. 

<SmallNote color="teal">Updated in v2.1.0</SmallNote>

::: BlockVue {title="TextArea with Icon"}

```vue
<template>
  <div class="demo-wrapper w-full p-2">
    <div class="row row-cols-1 row-cols-md-2">
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
        <div class="mb-3 mb-md-0">
          <bs-text-area prepend-icon-outer="location_on_outlined" floating-label outlined no-resize>
            <label>Prepend Outer</label>
          </bs-text-area>
        </div>
      </div>
      <div class="col">
        <div class="mb-0">
          <bs-text-area append-icon-outer="location_on_outlined" floating-label outlined no-resize>
            <label>Append Outer</label>
          </bs-text-area>
        </div>
      </div>
    </div>
  </div>
</template>

``` 
::: 

<!-- @include: @/components/icon-migration-info.md -->


## Usage Example

The following is an example that demonstrate more advanced use of the `<bs-text-area>` 
with form validation.

::: BlockVuelidate {clientOnly="true" title="Text Area advanced example" file="./docs/components/inputs/js/textarea-3.js"}

```vue
<template>
  <bs-app class="p-2">
    <bs-card class="mobi-card w-full mx-auto" shadow>
      <bs-appbar class="bg-default-color">
        <bs-button color="light" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-white" title="Edit Contact"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light" icon="more_vert" mode="icon" flat></bs-button>
      </bs-appbar>
      <bs-card-body class="border-b">
        <form novalidate>
          <div class="mb-3 mt-3">
            <bs-text-field
              v-model="contact.fullName"
              :validator="fullnameValidator"
              action-icon-variant="filled"
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
              action-icon-variant="filled"
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
              action-icon-variant="filled"
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
              action-icon-variant="filled"
              filled
              floating-label
              required
              validation-icon
            >
              <label>City</label>
            </bs-text-field>
          </div>
        </form>
      </bs-card-body>
      <bs-card-body class="flex justify-between">
        <bs-button style="width: 110px" @click="submit($notification)">
          <bs-spin-loader
            v-if="loading"
            role="status"
            size="24"
            thickness="3">
          </bs-spin-loader>
          <span v-else>Submit</span>
        </bs-button>
        <bs-button style="width: 110px" tonal @click="cancel()">Clear</bs-button>
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
--md-field-disabled-opacity: 0.4;
--md-field-readonly-opacity: 0.55;

```

## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| action-icon-variant  | `String` | `'outlined'` | Sets the action icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <MdBadge color="info">Updated in v2.1.0</MdBadge> |
| append-icon          | `String` |  | <div style="min-width:400px">Sets icon to display at the inner right side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| append-icon-outer    | `String` |  | <div style="min-width:400px">Sets icon to display at the outer right side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> | 
| auto-grow    | `Boolean` | `false` | Enable/disable `<textarea>` element to auto grow. |
| autocomplete | `Boolean`/`String`  | `false` | Sets browsers **_autocomplete_** predictions on/off. |
| autofocus    | `Boolean` | `false` | Autofocus field when this component is mounted. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<textarea>` element. |
| filled       | `Boolean` | `false` | Create the component with **_solid fill style_** appearance. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| help-text   | `String`  |          | The help text to display below the field component. |
| id          | `String`  |          | Sets `<textarea>` element `ID` attribute. This property value is auto generates. |
| model-value <Badge type="tip">v-model</Badge> | `String` |  | Monitored by `v-model` to maintain this field value. <MdBadge color="info">v2.0.0</MdBadge> |
| name        | `String`  |  | Sets `<textarea>` element `name` attribute. |
| no-resize   | `Boolean` | `false`  | Disable resizing the `<textarea>` element. When set, the browser's resize handle will be disabled which prevents the user from changing the height of the `<textarea>` element. |
| outlined    | `Boolean` | `false`  | Create the component with **_outline style_** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| persistent-help-text <Badge type="warning">deprecated</Badge> | `Boolean` | `true` | Use `persistent-help-off` instead. |
| persistent-help-off | `Boolean` | `false` | Prevents help text from being visible when the component is not focused. <MdBadge color="info">v2.2.0</MdBadge> |
| placeholder  | `String` |        | Sets the field placeholder. |
| prepend-icon | `String` |        | <div style="min-width:400px">Sets icon to display at the inner left side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| prepend-icon-outer | `String` |  | <div style="min-width:400px">Sets icon to display at the outer left side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<textarea>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets `<textarea>` element `required` attribute. |
| row-height  | `Number`  |         | Sets `<textarea>` height in pixel. |
| rows        | `Number`  | `2`     | The number of rows to display within `<textarea>` element. Value must be greater than 1. |
| validation-icon | `Boolean`  | `false`| Display validation icon or not, when this field has been validated. <MdBadge color="info">v2.0.0</MdBadge> |
| validator | `TValidator` |   | The configuration options to integrate external validator plugin to validate this field value. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| blur    | ( evt:`FocusEvent`)    | Triggers when cursor leave the `<textarea>` element. |
| clear   |   | Fired after this field value is cleared. |
| focus   | ( evt:`FocusEvent`)    | Triggers when cursor entered the `<textarea>` element. |
| keydown | ( evt:`KeyboardEvent`) | Triggers when cursor is still in the `<textarea>` element and keyboard key is pressed. |
| update:model-value | ( value:`String`) | Used to update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

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
import type { Validation } from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import type { Ref, ComputedRef } from 'vue';
import { computed, reactive, ref, unref } from 'vue';
import { Helper, type INotificationProvider } from 'vue-mdbootstrap';

const tabs1active = ref(0);
const myText = ref<string>('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
const textArea1 = ref<string>();
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
