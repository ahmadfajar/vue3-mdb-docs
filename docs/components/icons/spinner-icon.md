---
description: Spinner icon is component that is normally used for displaying loading indicator. 
--- 

# Spinner Icon

::: lead
**BsSpinnerIcon** is an icon component that is normally used for displaying loading indicator.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>


## Overview

`<bs-spinner-icon>` is typically used for displaying loading or refresh indicator. 
It can be used inside almost any component or html element. `<bs-spinner-icon>` has
two built-in animations, which are: _Spin_ and _Pulse_. These animation can be enabled via 
property `spin` or `pulse`, but do not use both property together.

::: BlockVue {title="Spinner Icon Overview"}

```vue
<template>
  <div class="demo-wrapper flex md-gap-4 px-2">
    <div class="bg-indigo p-3 rounded-4">
      <bs-spinner-icon color="light" size="32" pulse />
    </div>  
    <div class="bg-indigo p-3 rounded-4">
      <bs-spinner-icon color="light" size="32" spin />
    </div>  
  </div>
</template>

```
:::

::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
The `<bs-icon-spinner>` tag still works, but has been deprecated since v2.2.0.
:::


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| color    | `String` |         | The component color appearance. Any [Contextual Color](/reference/colors#contextual-colors) variants, [Main Color](/reference/colors#main-colors) variants and [Material Color](/reference/colors#material-colors) variants can be used. |
| pulse    | `Boolean`| `false` | Apply **pulse** animation. |
| spin     | `Boolean`| `false` | Apply **spin** animation. |
| size     | `Number` | `24`    | The icon size. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
