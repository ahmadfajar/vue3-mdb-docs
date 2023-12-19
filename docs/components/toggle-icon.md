# Toggle Icon

::: lead
**BsToggleIcon** is a lightweight component which is used to toggle two different 
icon. It can be used inside almost any component or html element. **BsToggleIcon** 
load icon from [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) 
dynamically.
:::


## Overview

`<bs-toggle-icon>` use icon's name as in Google Material Icons.
`<bs-toggle-icon>` has four icon variants: `filled` (_default_), `outlined`, `rounded`,
and `sharp`. Use `size` property to sets the icon size, otherwise default size will be used.

For backward compatibility, `<bs-icon-toggle>` can still be used, but is deprecated
and will be removed in the future.

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVue {title="ToggleIcon Example" file="./docs/components/scripts/toggle-icon.js"}

```html
<template>
  <div class="w-100 p-4 bg-white rounded-3">
    <div class="input-group">
      <input
        :type="inputType"
        class="form-control"
        placeholder="Enter password"
        aria-label="password"
      />
      <div class="input-group-text">
        <bs-icon-toggle
          icon="visibility"
          toggle-icon="visibility_off"
          v-model="passwordToggled"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const passwordToggled = ref(false);
const inputType = computed(() => passwordToggled.value ? 'text' : 'password');
</script>
```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| icon <Badge type="danger">required</Badge> | `String` |  | The default icon to display. Use any valid [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) name. |
| model-value <Badge type="tip">v-model</Badge> | `Boolean` | `false`  | Value monitored by `v-model` to maintain icon state. <BsBadge color="info">v2.0.0</BsBadge> |
| size     | `Number` | `24`      | The icon's size. <BsBadge color="info">v2.0.0</BsBadge> |
| toggle-icon <Badge type="danger">required</Badge> | `String` |  | The icon to display when `model-value` property is `true`. Use any valid [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) name. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| update:model-value | (`value`: `Boolean`) | Used to update the `model-value` property. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { computed, ref } from 'vue';

const passwordToggled = ref(false);
const inputType = computed(() => passwordToggled.value ? 'text' : 'password');
const tabs1active = ref(0);
</script>
