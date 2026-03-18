---
description: ToggleIcon is small and lightweight component which is used to toggle two different icon. 
--- 

# Toggle Icon

::: lead
**BsToggleIcon** is a lightweight component which is used to toggle two different 
icon. It can be used inside almost any component or html element. **BsToggleIcon** 
load icon from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
dynamically.
:::

<SmallNote color="teal">Updated in v2.1.0</SmallNote>


## Overview

**BsToggleIcon** uses the android icon name as in Google Material Symbols for its icon name.
**BsToggleIcon** has six icon variants, namely: _Outlined_ (default), _Rounded_, _Sharp_,
_Outlined Filled_, _Rounded Filled_, and _Sharp Filled_. 

Use suffix `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, 
`_rounded_filled`, or `_sharp_filled` on `icon` property to use the icon variant 
mentioned above, otherwise default icon variant will be used. Suffix `_filled` 
and `_outlined_filled` will display the same icon variant. And you can either use 
suffix `*_filled` or set the `filled` property to `true` to display an icon variant 
with fill style.

The `size` property is used to set the icon size. And if not set, the default size 
will be used.

::: BlockVue {title="ToggleIcon Overview" file="./docs/components/icons/js/toggle-icon.js"}

```vue
<template>
  <div class="w-full p-4 bg-white rounded-3">
    <div class="input-group mb-3">
      <input
        :type="inputType1"
        class="form-control"
        placeholder="Enter password"
        aria-label="password"
      />
      <div class="input-group-text">
        <bs-toggle-icon
          icon="visibility"
          toggle-icon="visibility_off"
          v-model="passwordToggled1"
        />
      </div>
    </div>
    <div class="input-group">
      <input
        :type="inputType2"
        class="form-control"
        placeholder="Enter password"
        aria-label="password"
      />
      <div class="input-group-text">
        <bs-toggle-icon
          icon="visibility_filled"
          toggle-icon="visibility_off_filled"
          v-model="passwordToggled2"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const passwordToggled1 = ref(false);
const passwordToggled2 = ref(false);
const inputType1 = computed(() => passwordToggled1.value ? 'text' : 'password');
const inputType2 = computed(() => passwordToggled2.value ? 'text' : 'password');
</script>
```
:::

::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
- Since v2.1.0, [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) are replaced with [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols).
- The `<bs-icon-toggle>` tag still works, but has been deprecated since v2.0.0.
:::


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| filled   | `Boolean`| `false` | Use [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with fill style variant. <MdBadge color="info">v2.1.0</MdBadge> |
| icon <Badge type="danger">required</Badge> | `String` |  | The default icon to display when `model-value` property is `false` or `undefined`. <MdBadge color="info">Updated in v2.1.0</MdBadge> <div class="pt-3">Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, or `_sharp_filled`.</div> |
| model-value <Badge type="tip">v-model</Badge> | `Boolean` | `false`  | Value monitored by `v-model` to maintain icon state. <MdBadge color="info">v2.0.0</MdBadge> |
| size     | `Number` | `24`      | The icon's size. <MdBadge color="info">v2.0.0</MdBadge> |
| toggle-icon <Badge type="danger">required</Badge> | `String` |  | The icon to display when `model-value` property is `true`. <MdBadge color="info">Updated in v2.1.0</MdBadge> <div class="pt-3">Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, or `_sharp_filled`.</div> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols table:font-mono:col-2">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| update:model-value | (value:`Boolean`) | Used to update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { computed, ref } from 'vue';

const passwordToggled1 = ref(false);
const passwordToggled2 = ref(false);
const inputType1 = computed(() => passwordToggled1.value ? 'text' : 'password');
const inputType2 = computed(() => passwordToggled2.value ? 'text' : 'password');
const tabs1active = ref(0);
</script>
