---
outline: [2, 3] 
description: Text Field is a component that let users enter text into an UI. 
---

# Text Field


::: lead
**BsTextField** is a component that let users enter text into an UI.
:::


## Overview

**BsTextField** component mimics the HTML5 `<input type="text">` element. This means 
that you can add attributes like `required`, `readonly`, or `disabled` and it will 
react to them to give the best experience. You can also use `v-model` directive to 
create two-way data bindings on the `model-value` property.

::: BlockVue {title="Text Field Overview"}

```vue
<template>
  <div class="w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-text-field>
      <label class="col-md-3 col-form-label">Text Field</label>
    </bs-text-field>
    <bs-text-field type="password">
      <label class="col-md-3 col-form-label">Password Field</label>
    </bs-text-field>
    <bs-text-field model-value="Sandra Adams" readonly>
      <label class="col-md-3 col-form-label">State Readonly</label>
    </bs-text-field>
    <bs-text-field model-value="Sandra Adams" disabled>
      <label class="col-md-3 col-form-label">State Disabled</label>
    </bs-text-field>
  </div>
</template>

```
:::

<!-- @include: @/components/model-value-important.md -->


## Style Variants

You can style `<bs-text-field>` to your own preference or use a style variant 
based on Google **Material Design 2** or **Material Design 3** specifications. 

### Default {#style-variants-default}

You can style `<bs-text-field>` that follows Google **Material Design 2** specifications
by using `floating-label` property explicitly.

::: BlockVue {title="Text Field Style Variants - Default"}

```vue
<template>
  <div class="w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-text-field>
      <label class="col-sm-3 col-form-label">Classic Field</label>
    </bs-text-field>
    <bs-text-field floating-label>
      <label>Floating Label</label>
    </bs-text-field>
    <bs-text-field placeholder="Placeholder" floating-label>
      <label>Field Label</label>
    </bs-text-field>
  </div>
</template>

```
:::


### Filled {#style-variants-filled class="mt-lg-5"}

Use `filled` property explicitly to enable `<bs-text-field>` with **solid fill style**.
And when combined with `floating-label` property, `<bs-text-field>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="Text Field Style Variants - Filled"}

```vue
<template>
  <div class="w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-text-field filled>
      <label class="col-sm-3 col-form-label">Classic Field</label>
    </bs-text-field>
    <bs-divider></bs-divider>
    <bs-text-field filled floating-label>
      <label>Floating Label</label>
    </bs-text-field>
    <bs-text-field placeholder="Placeholder" filled floating-label>
      <label>Field Label</label>
    </bs-text-field>
  </div>
</template>

```
::: 


### Outlined {#style-variants-outlined class="mt-lg-5"}

Use `outlined` property explicitly to enable `<bs-text-field>` with **outline style**.
And when combined with `floating-label` property, `<bs-text-field>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="Text Field Style Variants - Outlined"}

```vue
<template>
  <div class="w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-text-field outlined>
      <label class="col-sm-3 col-form-label">Classic Field</label>
    </bs-text-field>
    <bs-divider></bs-divider>
    <bs-text-field outlined floating-label>
      <label>Floating Label</label>
    </bs-text-field>
    <bs-text-field placeholder="Placeholder" outlined floating-label>
      <label>Field Label</label>
    </bs-text-field>
  </div>
</template>

```
::: 


### Filled Rounded {#style-variants-filled-rounded class="mt-lg-5"}

Combine `filled` property and `rounded` property explicitly to enable `<bs-text-field>` with 
**rounded pill solid style**.

<SmallNote color="teal">Added in v2.0.5</SmallNote>

::: BlockVue {title="Text Field Style Variants - Filled Rounded"}

```vue
<template>
  <div class="w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-text-field filled rounded>
      <label class="col-sm-3 col-form-label">Classic Field</label>
    </bs-text-field>
    <bs-divider></bs-divider>
    <bs-text-field filled floating-label rounded>
      <label>Floating Label</label>
    </bs-text-field>
    <bs-text-field placeholder="Placeholder" filled floating-label rounded>
      <label>Field Label</label>
    </bs-text-field>
  </div>
</template>

```
::: 


### Outlined Rounded {#style-variants-outlined-rounded class="mt-lg-5"}

Combine `outlined` property and `rounded` property explicitly to enable `<bs-text-field>` with 
**outlined rounded pill** style.

<SmallNote color="teal">Added in v2.0.5</SmallNote>

::: BlockVue {title="Text Field Style Variants - Outlined Rounded"}

```vue
<template>
  <div class="w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-text-field outlined rounded>
      <label class="col-sm-3 col-form-label">Classic Field</label>
    </bs-text-field>
    <bs-divider></bs-divider>
    <bs-text-field outlined floating-label rounded>
      <label>Floating Label</label>
    </bs-text-field>
    <bs-text-field placeholder="Placeholder" outlined floating-label rounded>
      <label>Field Label</label>
    </bs-text-field>
  </div>
</template>

```
::: 


## Browser Autocomplete

The `autocomplete` property gives you the option to enable browser to predict the user input.

::: BlockVue {title="Text Field Browser Autocomplete"}

```vue
<template>
  <div class="w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-text-field autocomplete="name" filled floating-label>
      <label>Full Name</label>
    </bs-text-field>
    <bs-text-field autocomplete="email" type="email" filled floating-label>
      <label>Email</label>
    </bs-text-field>
  </div>
</template>

```
::: 


## Datalist Support

Datalist is a native HTML tag of `<datalist>` that contains a list of `<option>` tags. By assigning 
an **ID** to the datalist tag, the list can be references from a text field by defining the 
`datalist` property explicitly. This give the text field the behavior of a combobox or 
auto-complete, allowing existing values to be chosen, or new values to be entered.

::: BlockVue {title="Text Field Datalist Support"}

```vue
<template>
  <div class="w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-text-field datalist="my-datalist" filled floating-label>
      <label>Sizes</label>
    </bs-text-field>
    <datalist id="my-datalist">
      <option>Small</option>
      <option>Medium</option>
      <option>Large</option>
      <option>Extra Large</option>
    </datalist>
  </div>
</template>

```
::: 

::: info <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">INFO</span>
* Datalists work in conjunction with the browser's built in auto-complete, displaying datalist 
  options first, followed by auto-complete options.
* Datalists cannot be applied to input field with type `password` or `range`.
* Not all browsers fully support `<datalist>` and implementations can be buggy. It is recommended 
  that datalists be treated as an enhancement and not be relied upon at this time. Check 
  [Can I Use](https://caniuse.com/#feat=datalist) for full support details on all browsers.
:::


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily. 

::: BlockVue {title="Text Field Clearable" file="./docs/components/inputs/js/textfield-1.js"}

```vue
<template>
  <div class="w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-text-field v-model="fieldValue1" clear-button filled floating-label>
      <label>Text Field</label>
    </bs-text-field>
    <bs-text-field v-model="fieldValue2" type="password" clear-button filled floating-label>
      <label>Password Field</label>
    </bs-text-field>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fieldValue1 = ref<string>();
const fieldValue2 = ref<string>();
</script>
```
:::


## Help Text

The `help-text` property on `<bs-text-field>` adds an help text beneath the text field.
And define the `persistent-help-off` property explicitly to make the help text 
visible only when the text field is focused.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {title="Text Field with Help Text"}

```vue
<template>
  <div class="w-full p-2">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <div class="mb-3">
          <bs-text-field model-value="Grocery delivery" persistent-help-off
            help-text="For example, flowers or used cars" floating-label>
            <label>Product or Service</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field help-text="www.example.com/page" floating-label>
            <label>Your landing page</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field model-value="Grocery delivery" persistent-help-off
            help-text="For example, flowers or used cars" floating-label filled>
            <label>Product or Service</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field help-text="www.example.com/page" floating-label filled>
            <label>Your landing page</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-2">
          <bs-text-field model-value="Grocery delivery" persistent-help-off
            help-text="For example, flowers or used cars" floating-label outlined>
            <label>Product or Service</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-2">
          <bs-text-field help-text="www.example.com/page" floating-label outlined>
            <label>Your landing page</label>
          </bs-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

``` 
::: 


## Icons

The properties `prepend-icon`, `prepend-icon-outer`, `append-icon` and `append-icon-outer` 
provides the ability to add icon to `<bs-text-field>`. 

Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon style variant. 

<SmallNote color="teal">Updated in v2.1.0</SmallNote>

::: BlockVue {title="Text Field with Icon"}

```vue
<template>
  <div class="w-full p-2">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <div class="mb-3">
          <bs-text-field prepend-icon="person_filled" floating-label>
            <label>Prepend</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field append-icon="person_filled" floating-label>
            <label>Append</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field prepend-icon-outer="person" floating-label>
            <label>Prepend Outer</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field append-icon-outer="person" floating-label>
            <label>Append Outer</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field prepend-icon="person_filled" floating-label filled>
            <label>Prepend</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field append-icon="person_filled" floating-label filled>
            <label>Append</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field prepend-icon-outer="person" floating-label filled>
            <label>Prepend Outer</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field append-icon-outer="person" floating-label filled>
            <label>Append Outer</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field prepend-icon="person_filled" floating-label outlined>
            <label>Prepend</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field append-icon="person_filled" floating-label outlined>
            <label>Append</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3 mb-md-0">
          <bs-text-field prepend-icon-outer="person" floating-label outlined>
            <label>Prepend Outer</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-0">
          <bs-text-field append-icon-outer="person" floating-label outlined>
            <label>Append Outer</label>
          </bs-text-field>
        </div>
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

::: BlockVue {title="Text Field with prefixes and suffixes"}

```vue
<template>
  <div class="w-full p-2">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <div class="mb-3">
          <bs-text-field prefix="www." prepend-icon="public" floating-label>
            <label>Website</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field suffix="@example.com" prepend-icon="email" floating-label>
            <label>Email Address</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field prefix="www." prepend-icon="public" floating-label filled>
            <label>Website</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-text-field suffix="@example.com" prepend-icon="email" floating-label filled>
            <label>Email Address</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3 mb-md-0">
          <bs-text-field prefix="www." prepend-icon="public" floating-label outlined>
            <label>Website</label>
          </bs-text-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-0">
          <bs-text-field suffix="@example.com" prepend-icon="email" floating-label outlined>
            <label>Email Address</label>
          </bs-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

``` 
::: 


## Usage Example

The following is an example that demonstrate more advanced use of the `<bs-text-field>` 
with form validation.

::: BlockVuelidate {clientOnly="true" title="Text Field Usage" file="./docs/components/inputs/js/textfield-2.js"}

```vue
<template>
  <bs-app class="p-2">
    <bs-card class="mobi-card mx-auto" shadow>
      <bs-appbar class="bg-indigo">
        <bs-button color="light" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-white" title="Sign Up"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light" icon="more_vert" mode="icon" flat></bs-button>
      </bs-appbar>
      <bs-card-body>
        <form novalidate>
          <div class="mb-3 mt-3">
            <bs-text-field
              v-model="member.fullName"
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
              v-model="member.emailAddress"
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
          <div class="mb-3">
            <bs-text-field
              v-model="member.password"
              :validator="passwordValidator"
              action-icon-variant="filled"
              prepend-icon="key"
              type="password"
              outlined
              floating-label
              required
              validation-icon
            >
              <label>Password</label>
            </bs-text-field>
          </div>
          <div class="mb-4">
            <bs-text-field
              v-model="member.confirm"
              :validator="confirmValidator"
              action-icon-variant="filled"
              prepend-icon="key"
              type="password"
              outlined
              floating-label
              required
              validation-icon
            >
              <label>Confirm Password</label>
            </bs-text-field>
          </div>
          <div class="d-grid gap-3">
            <bs-button @click="submit($notification)">
              <bs-spin-loader 
                v-if="loading" 
                size="24" 
                thickness="3" 
                role="status">
              </bs-spin-loader>
              <span v-else>Create account</span>
            </bs-button>
            <bs-button class="ms-0" tonal>
              <img src="/img/google-logo.svg" style="width: 22px; height:22px" />
              <span class="ps-2">Sign up with Google</span>
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

<script lang="ts" setup>
import type { Validation } from "@vuelidate/core";
import { email, required, sameAs } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import type { Ref, ComputedRef } from "vue";
import { computed, reactive, ref, unref } from "vue";
import { Helper, type INotificationProvider } from "vue-mdbootstrap";

const loading = ref(false);
const member = reactive({
  fullName: null,
  emailAddress: null,
  password: null,
  confirm: null,
});
const password = computed(() => member.password);
const memberRules = {
  fullName: { required },
  emailAddress: { required, email },
  password: { required },
  confirm: { required, equalTo: sameAs(password) },
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

function confirmPasswordValidator(validator: Ref<Validation>): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; equalTo: boolean };
  messages: { required: string; equalTo: string };
  hasError: boolean;
}> {
  const obj = unref(validator)['confirm'];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: {
      required: obj.required.$message,
      equalTo: "Password doesn't match.",
    },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      equalTo: unref(obj.equalTo.$invalid),
    },
  }));
}

const v$ = useVuelidate(memberRules, member);
const fullnameValidator = requiredFieldValidator(v$, "fullName");
const passwordValidator = requiredFieldValidator(v$, "password");
const confirmValidator = confirmPasswordValidator(v$);
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
| autocomplete | `Boolean`&#124;`String`  | `false` | Sets browsers **_autocomplete_** predictions on/off. |
| autofocus    | `Boolean` | `false` | Autofocus field when this component is mounted. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| datalist     | `String`  |         | Target `<datalist>` element **ID**. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| filled       | `Boolean` | `false` | Create the component with **_solid fill style_** appearance. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| help-text   | `String`  |          | The help text to display below the field component. |
| id          | `String`  |          | Sets `<input>` element `ID` attribute. This property value is auto generates. |
| maxlength   | `Number`  |  | Sets `<input>` element maximum characters allowed. |
| minlength   | `Number`  |  | Sets `<input>` element minimum characters allowed. |
| model-value <Badge type="tip">v-model</Badge> | `String`&#124;`Number` |  | Monitored by `v-model` to maintain this field value. <MdBadge color="info">v2.0.0</MdBadge> |
| name        | `String`  |  | Sets `<input>` element `name` attribute. |
| outlined    | `Boolean` | `false`  | Create the component with **_outline style_** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| password-toggle      | `Boolean` | `true` | Enable toggle password field. |
| persistent-help-text <Badge type="warning">deprecated</Badge> | `Boolean` | `true` | Use `persistent-help-off` instead. |
| persistent-help-off | `Boolean` | `false` | Prevents help text from being visible when the component is not focused. <MdBadge color="info">v2.2.0</MdBadge> |
| placeholder  | `String` |        | Sets the field placeholder. |
| prefix       | `String` |        | Prepend inline non-modifiable text before the input field. <MdBadge color="info">v2.0.10</MdBadge> |
| prepend-icon | `String` |        | <div style="min-width:400px">Sets icon to display at the inner left side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| prepend-icon-outer | `String` |  | <div style="min-width:400px">Sets icon to display at the outer left side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets `<input>` element `required` attribute. |
| rounded     | `Boolean` | `false` | Create the component with **_rounded-pill style_** appearance. <MdBadge color="info">v2.0.5</MdBadge> |
| suffix      | `String`  |         | Append inline non-modifiable text after the input field. <MdBadge color="info">v2.0.10</MdBadge> |
| type        | `String`  | `'text'`| Sets `<input>` element `type` attribute. Valid values are: `text`, `password`, `email`, `url`, `tel`. |
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
| update:model-value | ( value:`String`&#124;`Number`) | Used to update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

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
import { email, required, sameAs } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import type { Ref, ComputedRef } from "vue";
import { computed, reactive, ref, unref } from "vue";
import { Helper, type INotificationProvider } from "vue-mdbootstrap";

const tabs1active = ref(0);
const fieldValue1 = ref<string>();
const fieldValue2 = ref<string>();

const loading = ref(false);
const member = reactive({
  fullName: null,
  emailAddress: null,
  password: null,
  confirm: null,
});
const password = computed(() => member.password);
const memberRules = {
  fullName: { required },
  emailAddress: { required, email },
  password: { required },
  confirm: { required, equalTo: sameAs(password) },
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

function confirmPasswordValidator(validator: Ref<Validation>): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; equalTo: boolean };
  messages: { required: string; equalTo: string };
  hasError: boolean;
}> {
  const obj = unref(validator)['confirm'];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: {
      required: obj.required.$message,
      equalTo: "Password doesn't match.",
    },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      equalTo: unref(obj.equalTo.$invalid),
    },
  }));
}

const v$ = useVuelidate(memberRules, member);
const fullnameValidator = requiredFieldValidator(v$, "fullName");
const passwordValidator = requiredFieldValidator(v$, "password");
const confirmValidator = confirmPasswordValidator(v$);
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
