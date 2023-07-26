# Ripple


::: lead
**BsRipple** is small and lightweight component which is used to show ripple animation 
when `click` or `touch` event occured.
:::


## Overview

`<bs-ripple>` can be placed inside almost any element or component. Numerous components use 
`<bs-ripple>` internally, such as **BsButton**, **BsTab**, **BsListTile**, **BsListNavItem**. 
Example below, shows you basic usage of `<bs-ripple>`.

::: BlockVue {title="Ripple Example"}

```html
<div class="my-demo-wrapper row row-cols-auto justify-content-center">
  <bs-ripple
    class="d-flex justify-content-center align-items-center text-bg-secondary border rounded me-3 mb-3"
    style="width: 150px; height: 150px"
  >
    <b>Click Me</b>
  </bs-ripple>
  <bs-ripple
    class="d-flex justify-content-center align-items-center text-bg-primary border rounded me-3 mb-3"
    style="width: 150px; height: 150px"
  >
    <b>Click Me</b>
  </bs-ripple>
  <bs-ripple
    class="d-flex justify-content-center align-items-center text-bg-success border rounded"
    style="width: 150px; height: 150px"
    centered
  >
    <b>Click Me</b>
  </bs-ripple>
</div>
```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| active <Badge type="tip">v-model</Badge> | `Boolean` |  | Ripple animation state. |
| centered | `Boolean` | `false` | Start animation from center or from mouse click position. If `true` then animation always start from center, otherwise animation will start from mouse click or touch position. |
| disabled | `Boolean` | `false` | Enable or disable ripple animation. |
| tag      | `String`  | `'div'` | Html tag used to render this component. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| update:active | (`value: boolean`) | Used to update the `active` property. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to render the main content. |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { ref } from 'vue';

const tabs1active = ref(0);
</script>