---
description: An icon component that is normally used for displaying loading indicator. 
--- 

# Icon Spinner

::: lead
**BsIconSpinner** is an icon component that is normally used for displaying loading indicator.
:::

<SmallNote color="teal">Added since v2.0.0</SmallNote>


## Overview

`<bs-icon-spinner>` is typically used for displaying loading or refresh indicator. 
It can be used inside almost any component or html element. `<bs-icon-spinner>` has
two built-in animations, which are: _Spin_ and _Pulse_. These animation can be enabled via 
property `spin` or `pulse`, but do not use both property together.

::: BlockVue {title="Icon Spinner Example"}

```html
<div class="w-100 p-3 d-flex justify-content-center">
  <div class="bg-indigo d-inline p-3 rounded-4">
    <bs-icon-spinner color="light" size="32" pulse />
  </div>  
  <div class="bg-indigo d-inline p-3 ms-3 rounded-4">
    <bs-icon-spinner color="light" size="32" spin />
  </div>  
</div>

```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| color    | `String` |         | The component color appearance. Any [MDBootstrap Color](/reference/colors#mdbootstrap-colors) variants and [Material Color](/reference/colors#material-colors) variants can be used. |
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
