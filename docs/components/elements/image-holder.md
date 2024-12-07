---
outline: [2, 3]
---

# Image Placeholder

::: lead
**BsImageHolder** is a lightweight component which is primarily used to create SVG shape to visualize
image placeholder.
:::

<SmallNote color="teal">Updated on v2.0.0</SmallNote>


## Usage Examples

The following are examples that demonstrate how to use the `<bs-image-holder>`.

### Rectangle

::: BlockVue {title="ImageHolder Example"}

```html
<div class="card p-3 border-0">
  <div class="row row-cols-2">
    <div class="col mb-3">
      <bs-image-holder placeholder-text="Placeholder Text" />
    </div>
    <div class="col mb-3">
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
</div>
```
:::


### Non Rectangle {class="mt-lg-5"}

::: BlockVue {title="Non-Rectangle ImageHolder Example"}

```html
<div class="card p-3 border-0">
  <div class="row row-cols-2">
    <div class="col mb-3">
      <bs-image-holder
        size="200px"
        bg-color="#8e24aa"
        placeholder-text="BgColor: #8e24aa"
        circle
      />
    </div>
    <div class="col mb-3">
      <bs-image-holder
        bg-color="#1565c0"
        placeholder-text="BgColor: #1565c0"
        height="200px"
        circle
      />
    </div>
    <div class="col">
      <bs-image-holder
        bg-color="#d32f2f"
        placeholder-text="BgColor: #d32f2f"
        width="150"
        circle
      />
    </div>
    <div class="col">
      <bs-image-holder
        bg-color="#f57f17"
        text-color="#ffffff"
        placeholder-text="BgColor: #f57f17"
        circle
      />
    </div>
  </div>
</div>
```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property     | Type        | Default  | Description |
|--------------|-------------|----------|-------------|
| bg-color     | `String`    | `'#868e96'` | Component background color, must be in html hex coloring number. |
| circle       | `Boolean`   | `false`  | Create SVG with **circle** shape. |
| height       | `Number`/`String` |    | The component height. Numbers get converted to pixel values. Any other value must include the units (such as `px`, `em`, `rem`, `%`). <p>If `undefined`, then will automatically adjust to container height.</p> |
| place-holder <Badge type="warning">deprecated</Badge> | `String` |  | Use `placeholder-text` property instead. |
| placeholder-text | `String` |         | The text to display inside created SVG. <BsBadge color="info">v2.0.0</BsBadge> |
| rounded      | `Boolean`    | `false` | Create component with **rounded** shape. <p>If `circle` and `rounded` are not set, then component shape will become _rectangle_.</p> |
| size         | `Number`/`String` |    | Shortcut to create ImageHolder with equal height and width. |
| text-color   | `String`     | `'#dee2e6'` | Text color, must be in html hex coloring number. |
| width        | `Number`/`String` | `'100%'` | The component width. Numbers get converted to pixel values. Any other value must include the units (such as `px`, `em`, `rem`, `%`). |
| x-pos        | `Number`/`String` | `'50%'`  | `placeholder-text` placement at x-axis. |
| y-pos        | `Number`/`String` | `'50%'`  | `placeholder-text` placement at y-axis. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
