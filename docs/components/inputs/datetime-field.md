---
outline: [2, 3] 
description: DateTime Field is a fully featured date selection component that let users select a date, time, month, year, or datetime. 
---

# DateTime Field

:::lead
**BsDateTimeField** is a fully featured date selection component that let users
select a date, time, month, year, or datetime.
:::


## Overview

**BsDateTimeField** uses [BsDatePicker](/components/pickers/date-picker) and 
[BsPopover](/components/overlays/popover) components internally and mimics like HTML `<input>` 
element. This means that you can add attributes like `readonly`, `disabled`, `required` and it 
will react to them to give the best experience. You can also use `v-model` directive to create 
two-way data bindings on the `model-value` property.

::: BlockVue {clientOnly="true" title="DateTime Field Overview" file="./docs/components/inputs/js/datetime-field-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-date-time-field v-model="dateField1">
      <label class="col-md-3 col-form-label">Date Field</label>
    </bs-date-time-field>
    <bs-date-time-field v-model="dateField1" readonly>
      <label class="col-md-3 col-form-label">State Readonly</label>
    </bs-date-time-field>
    <bs-date-time-field v-model="dateField1" disabled>
      <label class="col-md-3 col-form-label">State Disabled</label>
    </bs-date-time-field>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField1 = ref();
</script>

```
:::

<!-- @include: @/components/model-value-important.md -->


## Style Variants

You can style `<bs-date-time-field>` to your own preference or use a style variant 
based on Google **Material Design 2** or **Material Design 3** specifications. 

### Default {#style-variants-default}

You can style `<bs-date-time-field>` that follows **Google Material Design 2** specifications
by using `floating-label` property explicitly.

::: BlockVue {clientOnly="true" title="DateTime Field Style Variants - Default" file="./docs/components/inputs/js/datetime-field-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-date-time-field v-model="dateField2">
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-date-time-field>
    <bs-date-time-field v-model="dateField3" floating-label>
      <label>Floating Label</label>
    </bs-date-time-field>
    <bs-date-time-field v-model="dateField4" placeholder="Choose a date" floating-label>
      <label>Date Field</label>
    </bs-date-time-field>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField2 = ref();
const dateField3 = ref();
const dateField4 = ref();
</script>

```
:::


### Filled {#style-variants-filled class="mt-lg-5"}

Use `filled` property explicitly to enable `<bs-date-time-field>` with **solid fill style**.
And when combined with `floating-label` property, `<bs-date-time-field>` will have a style 
that follows the **Google Material Design 3** specifications.

::: BlockVue {clientOnly="true" title="DateTime Field Style Variants - Filled" file="./docs/components/inputs/js/datetime-field-3.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-date-time-field v-model="dateField5" filled>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-date-time-field>
    <bs-divider></bs-divider>
    <bs-date-time-field v-model="dateField6" filled floating-label>
      <label>Floating Label</label>
    </bs-date-time-field>
    <bs-date-time-field v-model="dateField7" placeholder="Choose a date" filled floating-label>
      <label>Date Field</label>
    </bs-date-time-field>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField5 = ref();
const dateField6 = ref();
const dateField7 = ref();
</script>

```
:::


### Outlined {#style-variants-outlined class="mt-lg-5"}

Use `outlined` property explicitly to enable `<bs-date-time-field>` with **outline style**.
And when combined with `floating-label` property, `<bs-date-time-field>` will have a style 
that follows the **Google Material Design 3** specifications.

::: BlockVue {clientOnly="true" title="DateTime Field Style Variants - Outlined" file="./docs/components/inputs/js/datetime-field-4.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-date-time-field v-model="dateField8" outlined>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-date-time-field>
    <bs-divider></bs-divider>
    <bs-date-time-field v-model="dateField9" outlined floating-label>
      <label>Floating Label</label>
    </bs-date-time-field>
    <bs-date-time-field v-model="dateField10" placeholder="Choose a date" outlined floating-label>
      <label>Date Field</label>
    </bs-date-time-field>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField8 = ref();
const dateField9 = ref();
const dateField10 = ref();
</script>

```
:::


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily. 

::: BlockVue {clientOnly="true" title="Clearable DateTime Field" file="./docs/components/inputs/js/datetime-field-5.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-date-time-field v-model="dateField11" clear-button filled floating-label>
      <label>Date Field</label>
    </bs-date-time-field>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField11 = ref();
</script>

```
:::


## DateTime Formatting

Use `display-format` property to customize displayed datetime and `value-format` property to customize
the output value format. If `display-format` property is not defined, then `value-format` will be used 
to format the displayed datetime.

::: BlockVue {clientOnly="true" title="DateTime Field DateTime Formatting" file="./docs/components/inputs/js/datetime-field-6.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <div class="mb-3">
      <bs-date-time-field 
        v-model="dateField12" 
        display-format="DDD"
        clear-button 
        filled 
        floating-label
      >
        <label>Date Field</label>
      </bs-date-time-field>
    </div>
    <div>
      Field Value: <strong>{{ dateField12 }}</strong>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField12 = ref();
</script>

```
:::

::: info <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">INFO</span>
See [Luxon](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for more 
information about DateTime formatting.
:::


## Picker Selection Modes

Use `picker-mode` property to change the Date Picker view mode and selection mode. _Date_ 
selection mode is the default selection. You need to adjust the `display-format` and 
`value-format` properties to match the `picker-mode`.

### Date mode {#picker-selection-modes-date-mode}

::: BlockVue {clientOnly="true" title="DateTime Field Picker Modes - Date Mode" file="./docs/components/inputs/js/datetime-field-7.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
   <div class="mb-3">
      <bs-date-time-field 
        v-model="dateField13" 
        clear-button 
        filled 
        floating-label
      >
        <label>Date Field</label>
      </bs-date-time-field>
    </div>
    <div>
      Field Value: <strong>{{ dateField13 }}</strong>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField13 = ref();
</script>

```
:::


### DateTime mode {#picker-selection-modes-datetime-mode class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DateTime Field Picker Modes - DateTime Mode" file="./docs/components/inputs/js/datetime-field-8.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
   <div class="mb-3">
      <bs-date-time-field 
        v-model="dateField14" 
        display-format="DDD HH:mm:ss"
        value-format="yyyy-MM-dd HH:mm:ss"
        picker-mode="datetime"
        clear-button 
        filled 
        floating-label
      >
        <label>DateTime Field</label>
      </bs-date-time-field>
    </div>
    <div>
      Field Value: <strong>{{ dateField14 }}</strong>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField14 = ref();
</script>

```
:::


### Month mode {#picker-selection-modes-month-mode class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DateTime Field Picker Modes - Month Mode" file="./docs/components/inputs/js/datetime-field-9.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
   <div class="mb-3">
      <bs-date-time-field 
        v-model="dateField15" 
        display-format="MMMM yyyy"
        value-format="yyyy-MM"
        picker-mode="month"
        clear-button 
        filled 
        floating-label
      >
        <label>Month Field</label>
      </bs-date-time-field>
    </div>
    <div>
      Field Value: <strong>{{ dateField15 }}</strong>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField15 = ref();
</script>

```
:::


### Year mode {#picker-selection-modes-year-mode class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DateTime Field Picker Modes - Year Mode" file="./docs/components/inputs/js/datetime-field-10.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
   <div class="mb-3">
      <bs-date-time-field 
        v-model="dateField16" 
        value-format="yyyy"
        picker-mode="year"
        clear-button 
        filled 
        floating-label
      >
        <label>Year Field</label>
      </bs-date-time-field>
    </div>
    <div>
      Field Value: <strong>{{ dateField16 }}</strong>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField16 = ref();
</script>

```
:::


### Time mode {#picker-selection-modes-time-mode class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DateTime Field Picker Modes - Time Mode" file="./docs/components/inputs/js/datetime-field-11.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
   <div class="mb-3">
      <bs-date-time-field 
        v-model="dateField17" 
        value-format="HH:mm:ss"
        picker-mode="time"
        clear-button 
        filled 
        floating-label
      >
        <label>Time Field</label>
      </bs-date-time-field>
    </div>
    <div>
      Field Value: <strong>{{ dateField17 }}</strong>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField17 = ref();
</script>

```
:::


## Picker Color Style

The Date picker colors can be customize using properties: `header-color`, `picker-button`, `picker-selected-color`, `surface-cls`.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {clientOnly="true" title="DateTime Field Custom Color" file="./docs/components/inputs/js/datetime-field-12.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-date-time-field 
      v-model="dateField18" 
      header-color="orange" 
      picker-button="light"
      picker-selected-color="warning"
      surface-cls="bg-stylish-color-dark text-light"
      clear-button 
      filled 
      floating-label
    >
      <label>Date Field</label>
    </bs-date-time-field>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField18 = ref();
</script>

```
:::


## Landscape Orientation

Define `landscape-mode` property explicitly to display the Date picker in landscape orientation.

::: BlockVue {clientOnly="true" title="DateTime Field Landscape Orientation" file="./docs/components/inputs/js/datetime-field-13.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-date-time-field 
      v-model="dateField19" 
      clear-button 
      filled 
      floating-label
      landscape-mode
    >
      <label>Date Field</label>
    </bs-date-time-field>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField19 = ref();
</script>

```
:::

::: info <BsIcon icon="info_outlined" /> <span class="ms-2 h6 mb-0">INFO</span>
Landscape orientation only works on medium screen size and above. 
:::


## Hover Display Support

The Date picker can be displayed using mouse on-hover instead of clicking with the 
`open-on-hover` property.

::: BlockVue {clientOnly="true" title="DateTime Field Hover Display Support" file="./docs/components/inputs/js/datetime-field-14.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-date-time-field 
      v-model="dateField20" 
      clear-button 
      filled 
      floating-label
      open-on-hover
    >
      <label>Date Field</label>
    </bs-date-time-field>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField20 = ref();
</script>

```
:::


## Help Text

The `help-text` property on `<bs-date-time-field>` adds an help text beneath the 
DateTime field. And define the `persistent-help-off` property explicitly to make 
the help text visible only when the DateTime field is focused.

::: BlockVue {clientOnly="true" title="DateTime Field with Help Text" file="./docs/components/inputs/js/datetime-field-15.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-3">
        <bs-date-time-field v-model="dateField22" help-text="Choose product expiry date" 
          clear-button floating-label>
          <label>Product Expiry</label>
        </bs-date-time-field>
      </div>
      <div class="col mb-3">
        <bs-date-time-field v-model="dateField21" persistent-help-off
          help-text="Choose product expiry date" clear-button floating-label>
          <label>Product Expiry</label>
        </bs-date-time-field>
      </div>
      <div class="col mb-3">
        <bs-date-time-field v-model="dateField24" help-text="Choose product expiry date" 
          clear-button floating-label filled>
          <label>Product Expiry</label>
        </bs-date-time-field>
      </div>
      <div class="col mb-3">
        <bs-date-time-field v-model="dateField23" persistent-help-off 
          help-text="Choose product expiry date" clear-button floating-label filled>
          <label>Product Expiry</label>
        </bs-date-time-field>
      </div>
      <div class="col mb-3 mb-md-0">
        <bs-date-time-field v-model="dateField26" help-text="Choose product expiry date" 
          clear-button floating-label outlined>
          <label>Product Expiry</label>
        </bs-date-time-field>
      </div>
      <div class="col">
        <bs-date-time-field v-model="dateField25" persistent-help-off 
          help-text="Choose product expiry date" clear-button floating-label outlined>
          <label>Product Expiry</label>
        </bs-date-time-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField21 = ref();
const dateField22 = ref();
const dateField23 = ref();
const dateField24 = ref();
const dateField25 = ref();
const dateField26 = ref();
</script>

```
:::


## Icons

The properties `prepend-icon`, `prepend-icon-outer`, `append-icon` and `append-icon-outer` 
provides the ability to add icon to `<bs-date-time-field>`.

Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon style variant. 

<SmallNote color="teal">Updated in v2.1.0</SmallNote>

::: BlockVue {clientOnly="true" title="DateTime Field with Icon" file="./docs/components/inputs/js/datetime-field-16.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-3">
          <bs-date-time-field v-model="dateField27" prepend-icon="person_filled" 
            clear-button floating-label>
            <label>Prepend</label>
          </bs-date-time-field>
      </div>
      <div class="col mb-3">
          <bs-date-time-field v-model="dateField27" append-icon="event" 
            clear-button floating-label>
            <label>Append</label>
          </bs-date-time-field>
      </div>
      <div class="col mb-3">
          <bs-date-time-field v-model="dateField27" prepend-icon-outer="person" 
            clear-button floating-label>
            <label>Prepend Outer</label>
          </bs-date-time-field>
      </div>
      <div class="col mb-3">
          <bs-date-time-field v-model="dateField27" append-icon-outer="person" 
            clear-button floating-label>
            <label>Append Outer</label>
          </bs-date-time-field>
      </div>
      <div class="col mb-3">
          <bs-date-time-field v-model="dateField28" prepend-icon="person_filled" 
            clear-button floating-label filled>
            <label>Prepend</label>
          </bs-date-time-field>
      </div>
      <div class="col mb-3">
          <bs-date-time-field v-model="dateField28" append-icon="event" 
            clear-button floating-label filled>
            <label>Append</label>
          </bs-date-time-field>
      </div>
      <div class="col mb-3">
          <bs-date-time-field v-model="dateField28" prepend-icon-outer="person" 
            clear-button floating-label filled>
            <label>Prepend Outer</label>
          </bs-date-time-field>
      </div>
      <div class="col mb-3">
          <bs-date-time-field v-model="dateField28" append-icon-outer="person" 
            clear-button floating-label filled>
            <label>Append Outer</label>
          </bs-date-time-field>
      </div>
      <div class="col mb-3">
          <bs-date-time-field v-model="dateField29" prepend-icon="person_filled" 
            clear-button floating-label outlined>
            <label>Prepend</label>
          </bs-date-time-field>
      </div>
      <div class="col mb-3">
          <bs-date-time-field v-model="dateField29" append-icon="event" 
            clear-button floating-label outlined>
            <label>Append</label>
          </bs-date-time-field>
      </div>
      <div class="col mb-3 mb-md-0">
          <bs-date-time-field v-model="dateField29" prepend-icon-outer="person" 
            clear-button floating-label outlined>
            <label>Prepend Outer</label>
          </bs-date-time-field>
      </div>
      <div class="col">
          <bs-date-time-field v-model="dateField29" append-icon-outer="person" 
            clear-button floating-label outlined>
            <label>Append Outer</label>
          </bs-date-time-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField27 = ref();
const dateField28 = ref();
const dateField29 = ref();
</script>

```
:::

::: tip <BsIcon icon="tips_and_updates" /><span class="ms-2 h6 mb-0">TIP</span> 
The default icon of `<bs-date-time-field>` can be change via `append-icon` property.
:::

<!-- @include: @/components/icon-migration-info.md -->


## Usage Example

The following is an example that demonstrate more advanced use of the `<bs-date-time-field>` 
with form validation.

::: BlockVuelidate {clientOnly="true" title="DateTime Field Usage" file="./docs/components/inputs/js/datetime-field-17.js"}

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
              v-model="contact.fullName"
              :validator="fullnameValidator"
              action-icon-variant="filled"
              outlined
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
              outlined
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
              outlined
              floating-label
              required
              validation-icon
            >
              <label>Address</label>
            </bs-text-area>
          </div>
          <div class="mb-2">
            <bs-date-time-field
              v-model="contact.bornDate"
              :validator="bornDateValidator"
              action-icon-variant="filled"
              outlined
              floating-label
              required
              validation-icon
            >
              <label>Born Date</label>
            </bs-date-time-field>
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
  bornDate: null,
});
const contactRules = {
  fullName: { required },
  email: { required, email },
  address: { required },
  bornDate: { required },
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
const bornDateValidator = requiredFieldValidator(v$, "bornDate");

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
  contact.bornDate = null;
}
</script>

```
:::


## CSS Variables

**BsDateTimeField** is inherited from **BsTextField**, therefore it uses **BsTextField**'s 
[CSS variables](/components/inputs/textfield#css-variables). And since **BsDateTimeField** also uses **BsDatePicker** internally, it also uses **BsDatePicker**'s [CSS variables](/components/pickers/date-picker#css-variables). 

<SmallNote color="teal">Updated in v2.2.0</SmallNote>


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| action-icon-variant  | `String` | `'outlined'` | Sets the action icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <MdBadge color="info">Updated in v2.1.0</MdBadge> |
| append-icon          | `String` |  | Sets icon to display at the inner right side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <div class="pt-3" style="min-width:400px">Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| append-icon-outer    | `String` |  | Sets icon to display at the outer right side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <div class="pt-3" style="min-width:400px">Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| autofocus      | `Boolean` | `false` | Autofocus field when this component is mounted. |
| clear-button   | `Boolean` | `false` | Sets **auto show** the clear button. |
| disabled       | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| display-format | `String`  |         | The datetime display format. If not defined then `value-format` property will be used. See [Luxon](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for valid format. |
| filled         | `Boolean` | `false` | Create the component with **_solid fill style_** appearance. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| header-color   | `String`  |         | The Date picker header panel background color. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger` and `info`.</div> |
| header-panel   | `Boolean` | `true`  | Display Date picker header panel or not. |
| help-text      | `String`  |         | The help text to display below the field component. |
| id             | `String`  |         | Sets `<input>` element `ID` attribute. This property value is auto generates. |
| landscape-mode | `Boolean` | `false` | Display Date picker in landscape orientation. |
| locale         | `String`  |         | The locale to be used, default is using browser locale. |
| model-value <Badge type="tip">v-model</Badge> | `String`&#124;`Number` |  | Monitored by `v-model` to maintain this field value. <MdBadge color="info">v2.0.0</MdBadge> |
| name          | `String`  |         | Sets `<input>` element `name` attribute. |
| open-on-hover | `Boolean` | `false` | Display the Date picker when mouse hover the component. |
| outlined      | `Boolean` | `false` | Create the component with **_outline style_** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| persistent-help-text <Badge type="warning">deprecated</Badge> | `Boolean` | `true` | Use `persistent-help-off` instead. |
| persistent-help-off | `Boolean` | `false` | Prevents help text from being visible when the component is not focused. <MdBadge color="info">v2.2.0</MdBadge> |
| picker-button      | `String` | `'dark'` | Sets calendar `date`, `month`, `year` `time` and `navigation` button color. <MdBadge color="info">v2.2.0</MdBadge> <div class="pt-3">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light` and `dark`.</div> |
| picker-cls         | `String`&#124;`String[]`  | `'rounded shadow'` | Additional Popover css classes. |
| picker-color <Badge type="warning">deprecated</Badge> | `String`  |  | Apply custom background color to the Date picker container. <div class="pt-3">Use `surface-cls` instead.</div> |
| picker-mode        | `String`  | `'date'` | The Date picker view mode, valid values are: `date`, `month`, `year` or `time`. <MdBadge color="info">v2.0.0</MdBadge> |
| picker-placement   | `String`  | `'bottom-left'` | The Date picker popup display placement. Valid values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`. |
| picker-selected-color | `String` | `'primary'` | Sets selected calendar `date`, `month`, `year` and `time` button color. <MdBadge color="info">v2.2.0</MdBadge> <div class="pt-3">Default is interpolated from `header-color`.</div> |
| picker-transition  | `String`  | `'scale'` | Transition animation when showing the Date picker. This animation is effected by `picker-placement` property. <MdBadge color="info">v2.0.0</MdBadge> |
| picker-width       | `Number`  | `300`   | The Date picker container width in pixels. <MdBadge color="info">v2.0.0</MdBadge> |
| placeholder        | `String`  |         | Sets the field placeholder. |
| prepend-icon       | `String`  |         | <div style="min-width:375px">Sets icon to display at the inner left side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| prepend-icon-outer | `String`  |         | <div style="min-width:375px">Sets icon to display at the outer left side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| readonly           | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required           | `Boolean` | `false` | Sets `<input>` element `required` attribute. |
| surface-cls     | `String`&#124;`String[]`  |  | Apply custom CSS class for the DatePicker's surface background and text. <MdBadge color="info">v2.2.0</MdBadge> |
| validation-icon | `Boolean`    | `false` | Display validation icon or not, when this field has been validated. <MdBadge color="info">v2.0.0</MdBadge> |
| validator       | `TValidator` |   | The configuration options to integrate external validator plugin to validate this field value. <MdBadge color="info">v2.0.0</MdBadge> |
| value-format    | `String`     | `'yyyy-MM-dd'` | The field value datetime format. See [Luxon](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for valid format. |
| view-mode <Badge type="warning">deprecated</Badge> | `String`  |  | Use `picker-mode` instead. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols table:font-mono:col-2">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| blur    | (evt:`FocusEvent`) | Fired when this component lost focus. |
| clear   |  | Fired after this component value is cleared. |
| close   |  | Fired when the Date picker is closed or hide. |
| focus   | (evt:`FocusEvent`) | Fired when this component got focused. |
| open    |  | Fired when the Date picker popup is open or showed. |
| update:model-value | (value:`String`) | Used to update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

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
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import type { Ref, ComputedRef } from "vue";
import { computed, reactive, ref, unref } from "vue";
import { Helper, type INotificationProvider } from "vue-mdbootstrap";

const tabs1active = ref(0);
const dateField1 = ref();
const dateField2 = ref();
const dateField3 = ref();
const dateField4 = ref();
const dateField5 = ref();
const dateField6 = ref();
const dateField7 = ref();
const dateField8 = ref();
const dateField9 = ref();
const dateField10 = ref();
const dateField11 = ref();
const dateField12 = ref();
const dateField13 = ref();
const dateField14 = ref();
const dateField15 = ref();
const dateField16 = ref();
const dateField17 = ref();
const dateField18 = ref();
const dateField19 = ref();
const dateField20 = ref();
const dateField21 = ref();
const dateField22 = ref();
const dateField23 = ref();
const dateField24 = ref();
const dateField25 = ref();
const dateField26 = ref();
const dateField27 = ref();
const dateField28 = ref();
const dateField29 = ref();

const loading = ref(false);

const contact = reactive({
  fullName: null,
  email: null,
  address: null,
  bornDate: null,
});
const contactRules = {
  fullName: { required },
  email: { required, email },
  address: { required },
  bornDate: { required },
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
const bornDateValidator = requiredFieldValidator(v$, "bornDate");

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
  contact.bornDate = null;
}
</script>