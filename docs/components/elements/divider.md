---
description: Divider is small and lightweight component which is primarily used to separate content within lists or layouts. 
---

# Divider

:::lead
**BsDivider** is small and lightweight component which is primarily used to separate
content within lists or layouts.
:::


## Usage Examples

The following is an example that demonstrate how to use the `<bs-divider>`.

::: BlockVue {title="Divider Usage"}

```vue
<template>
  <div class="demo-wrapper w-full row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <bs-card shadow>
        <bs-list-view>
          <bs-list-tile>
            <bs-list-tile-content>
              <bs-list-tile-title>List Item 1</bs-list-tile-title>
            </bs-list-tile-content>
          </bs-list-tile>
          <bs-divider left-indent="16"></bs-divider>
          <bs-list-tile>
            <bs-list-tile-content>
              <bs-list-tile-title>List Item 2</bs-list-tile-title>
            </bs-list-tile-content>
          </bs-list-tile>
          <bs-divider left-indent="16"></bs-divider>
          <bs-list-tile>
            <bs-list-tile-content>
              <bs-list-tile-title>List Item 3</bs-list-tile-title>
            </bs-list-tile-content>
          </bs-list-tile>
        </bs-list-view>
      </bs-card>
    </div>
    <div class="col">
      <bs-card shadow>
        <bs-list-view>
          <bs-list-tile>
            <bs-list-tile-leading icon="settings"></bs-list-tile-leading>
            <bs-list-tile-content>
              <bs-list-tile-title>Setting</bs-list-tile-title>
            </bs-list-tile-content>
          </bs-list-tile>
          <bs-list-tile>
            <bs-list-tile-leading icon="help"></bs-list-tile-leading>
            <bs-list-tile-content>
              <bs-list-tile-title>Help</bs-list-tile-title>
            </bs-list-tile-content>
          </bs-list-tile>
          <bs-divider></bs-divider>
          <bs-list-tile>
            <bs-list-tile-leading icon="power_settings_new"></bs-list-tile-leading>
            <bs-list-tile-content>
              <bs-list-tile-title>Exit</bs-list-tile-title>
            </bs-list-tile-content>
          </bs-list-tile>
        </bs-list-view>
      </bs-card>
    </div>
  </div>
</template>

```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-divider` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```css
.md-divider {
  --md-divider-height: 1px;
  --md-divider-margin-y: 0.25rem;
  --md-divider-color: oklch(0 0 0 / 0.15);
}

```


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property     | Type        | Default  | Description |
|--------------|-------------|----------|-------------|
| dark         | `Boolean`   | `false`  | Define explicitly when is placed inside element with dark background. |
| left-indent  | `Number`&#124;`String` |    | Indentation from left side. Numbers get converted to pixel. Any other value must include the units (such as `px`, `em`, or `rem`). |
| right-indent | `Number`&#124;`String` |    | Indentation from right side. Numbers get converted to pixel. Any other value must include the units (such as `px`, `em`, or `rem`). |
| thickness    | `Number`&#124;`String` |    | Divider thickness. Numbers get converted to pixel. Any other value must include the units (such as `px`, `em`, or `rem`). |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
