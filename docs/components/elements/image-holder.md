---
outline: [2, 3] 
description: ImageHolder is a lightweight component which is primarily used to create SVG shape to visualize image placeholder. 
---

# Image Placeholder

::: lead
**BsImageHolder** is a lightweight component which is primarily used to create SVG shape to visualize
image placeholder.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>


## Usage Examples

The following are examples that demonstrate how to use the `<bs-image-holder>`.

### Rectangle {#usage-examples-rectangle}

::: BlockVue {title="ImageHolder Usage - Rectangle"}

```vue
<template>
  <div class="demo-wrapper w-full row row-cols-2 gy-4">
    <div class="col">
      <bs-image-holder placeholder-text="Placeholder Text" />
    </div>
    <div class="col">
      <bs-image-holder bg-color="#1976d2" placeholder-text="BgColor: #1976d2" />
    </div>
    <div class="col">
      <bs-image-holder bg-color="#006064" placeholder-text="BgColor: #006064" rounded />
    </div>
    <div class="col">
      <bs-image-holder
        bg-color="#f57f17"
        text-color="#ffffff"
        placeholder-text="BgColor: #f57f17"
        rounded
      />
    </div>
  </div>
</template>

```
:::


### Non Rectangle {#usage-examples-non-rectangle class="mt-lg-5"}

::: BlockVue {title="ImageHolder Usage - Non-Rectangle"}

```vue
<template>
  <div class="demo-wrapper w-full row gy-3">
    <div class="col-6 col-sm-4 flex justify-center">
      <bs-image-holder
        size="200px"
        bg-color="#8e24aa"
        placeholder-text="BgColor: #8e24aa"
        circle
      />
    </div>
    <div class="col-6 col-sm-8 flex justify-center">
      <bs-image-holder
        bg-color="#1565c0"
        placeholder-text="BgColor: #1565c0"
        height="200px"
        circle
      />
    </div>
    <div class="col-6 col-sm-4 flex justify-center">
      <bs-image-holder
        bg-color="#d32f2f"
        placeholder-text="BgColor: #d32f2f"
        width="150"
        circle
      />
    </div>
    <div class="col-6 col-sm-8 flex justify-center">
      <bs-image-holder
        bg-color="#f57f17"
        text-color="#ffffff"
        placeholder-text="BgColor: #f57f17"
        circle
      />
    </div>
  </div>
</template>

```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property     | Type        | Default  | Description |
|--------------|-------------|----------|-------------|
| bg-color     | `String`    | `'#868e96'` | Component background color, must be in html hex coloring number. |
| circle       | `Boolean`   | `false`  | Create SVG with **circle** shape. |
| height       | `Number`&#124;`String` |    | The component height. Numbers get converted to pixel values. Any other value must include the units (such as `px`, `em`, `rem`, `%`). <p>If `undefined`, then will automatically adjust to container height.</p> |
| placeholder-text | `String` |         | The text to display inside created SVG. <MdBadge color="info">v2.0.0</MdBadge> |
| rounded      | `Boolean`    | `false` | Create component with **rounded** shape. <p>If `circle` and `rounded` are not set, then component shape will become _rectangle_.</p> |
| size         | `Number`&#124;`String` |    | Shortcut to create ImageHolder with equal height and width. |
| text-color   | `String`     | `'#dee2e6'` | Text color, must be in html hex coloring number. |
| width        | `Number`&#124;`String` | `'100%'` | The component width. Numbers get converted to pixel values. Any other value must include the units (such as `px`, `em`, `rem`, `%`). |
| x-pos        | `Number`&#124;`String` | `'50%'`  | `placeholder-text` placement at x-axis. |
| y-pos        | `Number`&#124;`String` | `'50%'`  | `placeholder-text` placement at y-axis. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
