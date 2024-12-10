---
outline: [2, 3] 
description: A fully featured date selection component that let users select a date, time, month, year, or datetime. 
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

::: BlockVue {clientOnly="true" title="Basic DateTime Field Example" file="./docs/components/scripts/datetime-field-1.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="mb-3">
      <bs-date-time-field v-model="dateField1">
        <label class="col-md-3 col-form-label">Date Field</label>
      </bs-date-time-field>
    </div>
    <div class="mb-3">
      <bs-date-time-field v-model="dateField1" readonly>
        <label class="col-md-3 col-form-label">State Readonly</label>
      </bs-date-time-field>
    </div>
    <div class="mb-2">
      <bs-date-time-field v-model="dateField1" disabled>
        <label class="col-md-3 col-form-label">State Disabled</label>
      </bs-date-time-field>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField1 = ref();
</script>
```
:::


::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
Do not use the `model-value` property when using `v-model`.
:::


## Style Variants

You can style `<bs-date-time-field>` to your own preference or use a style variant 
based on Google **Material Design 2** or **Material Design 3** specifications. 

### Default

You can style `<bs-date-time-field>` that follows Google **Material Design 2** specifications
by using `floating-label` property explicitly.

::: BlockVue {clientOnly="true" title="Classic DateTime Field Example" file="./docs/components/scripts/datetime-field-2.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="mb-3">
      <bs-date-time-field v-model="dateField2">
        <label class="col-md-3 col-form-label">Classic Field</label>
      </bs-date-time-field>
    </div>
    <div class="mb-3">
      <bs-date-time-field v-model="dateField3" floating-label>
        <label>Floating Label</label>
      </bs-date-time-field>
    </div>
    <div class="mb-2">
      <bs-date-time-field v-model="dateField4" placeholder="Choose a date" floating-label>
        <label>Date Field</label>
      </bs-date-time-field>
    </div>
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


### Filled {class="mt-lg-5"}

Use `filled` property explicitly to enable `<bs-date-time-field>` with **solid fill style**.
And when combined with `floating-label` property, `<bs-date-time-field>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {clientOnly="true" title="Filled DateTime Field Example" file="./docs/components/scripts/datetime-field-3.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="mb-4">
      <bs-date-time-field v-model="dateField5" filled>
        <label class="col-md-3 col-form-label">Classic Field</label>
      </bs-date-time-field>
    </div>
    <div class="mb-4">
      <bs-date-time-field v-model="dateField6" filled floating-label>
        <label>Floating Label</label>
      </bs-date-time-field>
    </div>
    <div class="mb-2">
      <bs-date-time-field v-model="dateField7" placeholder="Choose a date" filled floating-label>
        <label>Date Field</label>
      </bs-date-time-field>
    </div>
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


### Outlined {class="mt-lg-5"}

Use `outlined` property explicitly to enable `<bs-date-time-field>` with **outline style**.
And when combined with `floating-label` property, `<bs-date-time-field>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {clientOnly="true" title="Outline DateTime Field Example" file="./docs/components/scripts/datetime-field-4.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="mb-4">
      <bs-date-time-field v-model="dateField8" outlined>
        <label class="col-md-3 col-form-label">Classic Field</label>
      </bs-date-time-field>
    </div>
    <div class="mb-4">
      <bs-date-time-field v-model="dateField9" outlined floating-label>
        <label>Floating Label</label>
      </bs-date-time-field>
    </div>
    <div class="mb-2">
      <bs-date-time-field v-model="dateField10" placeholder="Choose a date" outlined floating-label>
        <label>Date Field</label>
      </bs-date-time-field>
    </div>
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

::: BlockVue {clientOnly="true" title="Clearable DateTime Field Example" file="./docs/components/scripts/datetime-field-5.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
   <div class="mb-2 pt-2">
      <bs-date-time-field v-model="dateField11" clear-button filled floating-label>
        <label>Date Field</label>
      </bs-date-time-field>
    </div>
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

::: BlockVue {clientOnly="true" title="DateTime Field formatting example" file="./docs/components/scripts/datetime-field-6.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
   <div class="mb-3 pt-2">
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

### Date mode

::: BlockVue {clientOnly="true" title="DateTime Field selection mode example" file="./docs/components/scripts/datetime-field-7.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
   <div class="mb-3 pt-2">
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


### DateTime mode {class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DateTime Field selection mode example" file="./docs/components/scripts/datetime-field-8.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
   <div class="mb-3 pt-2">
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


### Month mode {class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DateTime Field selection mode example" file="./docs/components/scripts/datetime-field-9.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
   <div class="mb-3 pt-2">
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


### Year mode {class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DateTime Field selection mode example" file="./docs/components/scripts/datetime-field-10.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
   <div class="mb-3 pt-2">
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


### Time mode {class="mt-lg-5"}

::: BlockVue {clientOnly="true" title="DateTime Field selection mode example" file="./docs/components/scripts/datetime-field-11.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
   <div class="mb-3 pt-2">
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

The Date picker colors can be customize using the `picker-color` and `header-color` property.

::: BlockVue {clientOnly="true" title="DateTime Field custom color example" file="./docs/components/scripts/datetime-field-12.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
   <div class="mb-2 pt-2">
      <bs-date-time-field 
        v-model="dateField18" 
        header-color="orange" 
        picker-color="stylish-color-dark"
        clear-button 
        filled 
        floating-label
      >
        <label>Date Field</label>
      </bs-date-time-field>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField18 = ref();
</script>
```
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants 
and [Material Color](/reference/color-variants#material-colors) variants can be
be applied to the `header-color` and `picker-color` property. 
:::


## Landscape Orientation

Define `landscape-mode` property explicitly to display the Date picker in landscape orientation.

::: BlockVue {clientOnly="true" title="DateTime Field orientation example" file="./docs/components/scripts/datetime-field-13.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
   <div class="mb-2 pt-2">
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

::: BlockVue {clientOnly="true" title="DateTime Field open on hover example" file="./docs/components/scripts/datetime-field-14.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
   <div class="mb-2 pt-2">
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dateField20 = ref();
</script>
```
:::


## Help Text

The `help-text` property on `<bs-date-time-field>` adds an help text beneath the DateTime field.
And sets the `persistent-help-text` property to `false` will make the help text visible only 
when the DateTime field is focused.

::: BlockVue {clientOnly="true" title="DateTime Field with help text example" file="./docs/components/scripts/datetime-field-15.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="row row-cols-1 row-cols-lg-2">
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField21" :persistent-help-text="false"
            help-text="Choose product expiry date" clear-button floating-label>
            <label>Product Expiry</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField22" help-text="Choose product expiry date" 
            clear-button floating-label>
            <label>Product Expiry</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField23" :persistent-help-text="false" 
            help-text="Choose product expiry date" clear-button floating-label filled>
            <label>Product Expiry</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField24" help-text="Choose product expiry date" 
            clear-button floating-label filled>
            <label>Product Expiry</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-2">
          <bs-date-time-field v-model="dateField25" :persistent-help-text="false" 
            help-text="Choose product expiry date" clear-button floating-label outlined>
            <label>Product Expiry</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-2">
          <bs-date-time-field v-model="dateField26" help-text="Choose product expiry date" 
            clear-button floating-label outlined>
            <label>Product Expiry</label>
          </bs-date-time-field>
        </div>
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

<SmallNote color="teal">Updated on v2.1.0</SmallNote>

::: BlockVue {clientOnly="true" title="DateTime Field with icons example" file="./docs/components/scripts/datetime-field-16.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="row row-cols-1 row-cols-lg-2">
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField27" prepend-icon="person_filled" 
            clear-button floating-label>
            <label>Prepend</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField27" append-icon="event" 
            clear-button floating-label>
            <label>Append</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField27" prepend-icon-outer="person" 
            clear-button floating-label>
            <label>Prepend Outer</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField27" append-icon-outer="person" 
            clear-button floating-label>
            <label>Append Outer</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField28" prepend-icon="person_filled" 
            clear-button floating-label filled>
            <label>Prepend</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField28" append-icon="event" 
            clear-button floating-label filled>
            <label>Append</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField28" prepend-icon-outer="person" 
            clear-button floating-label filled>
            <label>Prepend Outer</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField28" append-icon-outer="person" 
            clear-button floating-label filled>
            <label>Append Outer</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField29" prepend-icon="person_filled" 
            clear-button floating-label outlined>
            <label>Prepend</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField29" append-icon="event" 
            clear-button floating-label outlined>
            <label>Append</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField29" prepend-icon-outer="person" 
            clear-button floating-label outlined>
            <label>Prepend Outer</label>
          </bs-date-time-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <bs-date-time-field v-model="dateField29" append-icon-outer="person" 
            clear-button floating-label outlined>
            <label>Append Outer</label>
          </bs-date-time-field>
        </div>
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

::: BlockVuelidate {clientOnly="true" title="DateTime Field advanced example" file="./docs/components/scripts/datetime-field-17.js"}

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
              v-model="contact.fullName"
              :validator="fullnameValidator"
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

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.0</SmallNote>

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

// global css variables
--md-field-primary-indicator-rgb: 98, 0, 238;
--md-field-primary-indicator: rgb(var(--md-field-primary-indicator-rgb));
--md-field-accent-indicator-rgb: 185,156,225;
--md-field-accent-indicator: rgb(var(--md-field-accent-indicator-rgb));
--md-field-active-indicator: var(--md-field-primary-indicator-rgb);

// date picker css variables
--md-datepicker-border-radius: .375rem;
--md-datepicker-padding-x: 1rem;
--md-datepicker-padding-y: 1rem;
--md-datepicker-header-color: #fff;
--md-datepicker-table-header-color: #6c757d;
--md-datepicker-title-font-size: 1.8rem;
--md-datepicker-subtitle-font-size: 1.25rem;

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
| autofocus      | `Boolean` | `false` | Autofocus field when this component is mounted. |
| clear-button   | `Boolean` | `false` | Sets **auto show** the clear button. |
| disabled       | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| display-format | `String`  |         | The datetime display format. If not defined then `value-format` property will be used. See [Luxon](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for valid format. |
| external-validator <Badge type="warning">deprecated</Badge> | `TValidator` |    | Use `validator` instead. |
| filled         | `Boolean` | `false` | Create the component with **_solid fill style_** appearance. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| flat           | `Boolean` | `false` | Create the component with **_flat style_** appearance, and removes the borders. The component appearance will be styled like plain text. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| header-color   | `String`  |         | The Date picker header panel background color. <div class="pt-3">Any of [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used.</div> |
| header-panel   | `Boolean` | `true`  | Display Date picker header panel or not. |
| help-text      | `String`  |         | The help text to display below the field component. |
| id             | `String`  |         | Sets `<input>` element `ID` attribute. This property value is auto generates. |
| landscape-mode | `Boolean` | `false` | Display Date picker in landscape orientation. |
| locale         | `String`  |         | The locale to be used, default is using browser locale. |
| model-value <Badge type="tip">v-model</Badge> | `String`/`Number` |  | Monitored by `v-model` to maintain this field value. <BsBadge color="info">v2.0.0</BsBadge> |
| name          | `String`  |         | Sets `<input>` element `name` attribute. |
| open-on-hover | `Boolean` | `false` | Display the Date picker when mouse hover the component. |
| outlined      | `Boolean` | `false` | Create the component with **_outline style_** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| picker-cls         | `String`/`String[]`  | `'rounded shadow'` | Additional Popover css classes. |
| picker-color       | `String`  | `'bottom-left'` | The Date picker container background color. <BsBadge color="info">v2.0.0</BsBadge> <div class="pt-3">Any of [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used.</div> |
| picker-mode        | `String`  | `'date'` | The Date picker view mode, valid values are: `date`, `month`, `year` or `time`. <BsBadge color="info">v2.0.0</BsBadge> |
| picker-placement   | `String`  | `'bottom-left'` | The Date picker popup display placement. Valid values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`. |
| picker-transition  | `String`  | `'scale'` | Transition animation when showing the Date picker. This animation is effected by `picker-placement` property. <BsBadge color="info">v2.0.0</BsBadge> |
| picker-width       | `Number`  | `300`   | The Date picker container width in pixels. <BsBadge color="info">v2.0.0</BsBadge> |
| placeholder        | `String`  |         | Sets the field placeholder. |
| prepend-icon       | `String`  |         | <div style="min-width:375px">Sets icon to display at the inner left side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| prepend-icon-outer | `String`  |         | <div style="min-width:375px">Sets icon to display at the outer left side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| readonly           | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required           | `Boolean` | `false` | Sets `<input>` element `required` attribute. |
| transition <Badge type="warning">deprecated</Badge>  | `String`  |  | Use `picker-transition` instead. |
| validation-icon | `Boolean`    | `false` | Display validation icon or not, when this field has been validated. <BsBadge color="info">v2.0.0</BsBadge> |
| validator       | `TValidator` |   | The configuration options to integrate external validator plugin to validate this field value. <BsBadge color="info">v2.0.0</BsBadge> |
| value-format    | `String`     | `'yyyy-MM-dd'` | The field value datetime format. See [Luxon](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for valid format. |
| view-mode <Badge type="warning">deprecated</Badge> | `String`  |  | Use `picker-mode` instead. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| blur    | ( evt:`FocusEvent`) | Fired when this component lost focus. |
| clear   |  | Fired after this component value is cleared. |
| close   |  | Fired when the Date picker is closed or hide. |
| focus   | ( evt:`FocusEvent`) | Fired when this component got focused. |
| open    |  | Fired when the Date picker popup is open or showed. |
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