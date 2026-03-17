---
description: Tooltip is a component which is useful for conveying information when user hovers over an element. 
--- 

# Tooltip

::: lead
**BsTooltip** is a component which is useful for conveying information when user
hovers over an element.
:::


## Overview

**BsTooltip** component can be wrapped on almost any component or html element.

::: BlockVue {clientOnly="true" title="Tooltip Overview"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-auto items-center">
      <div class="col">
        <bs-tooltip content="I am a tooltip">
          <bs-button color="primary">Button</bs-button>
        </bs-tooltip>
      </div>
      <div class="col">
        <bs-tooltip content="I am a tooltip">
          <bs-icon icon="folder" size="28" class="text-purple"></bs-icon>
        </bs-tooltip>
      </div>
      <div class="col">
        <bs-tooltip content="I am a tooltip">
          <span>This text has a tooltip</span>
        </bs-tooltip>
      </div>
    </div>
  </div>
</template>

```
:::


## Display Placement

A tooltip can be aligned to any of the four sides of the activator element.

::: BlockVue {clientOnly="true" title="Tooltip Display Placement"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-auto gy-4">
      <div class="col">
        <bs-tooltip content="Tooltip on top side" placement="top">
          <bs-button color="primary">TOP</bs-button>
        </bs-tooltip>
      </div>
      <div class="col">
        <bs-tooltip content="Tooltip on bottom side" placement="bottom">
          <bs-button color="primary">BOTTOM</bs-button>
        </bs-tooltip>
      </div>
      <div class="col">
        <bs-tooltip content="Tooltip on left side" placement="left">
          <bs-button color="primary">LEFT</bs-button>
        </bs-tooltip>
      </div>
      <div class="col">
        <bs-tooltip content="Tooltip on right side" placement="right">
          <bs-button color="primary">RIGHT</bs-button>
        </bs-tooltip>
      </div>
    </div>
  </div>
</template>

```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-tooltip` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-tooltip {
  --md-tooltip-arrow-size: #{vars.$tooltip-arrow-size};
  --md-tooltip-border-radius: #{vars.$tooltip-border-radius};
  --md-tooltip-bg: #{vars.$tooltip-bg};
  --md-tooltip-color: #{vars.$tooltip-color};
  --md-tooltip-opacity: #{vars.$tooltip-opacity};
  --md-tooltip-font-size: #{vars.$tooltip-font-size};
  --md-tooltip-padding-x: #{vars.$tooltip-padding-x};
  --md-tooltip-padding-y: #{vars.$tooltip-padding-y};
}

```


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property  | Type     | Default | Description |
|-----------|----------|---------|-------------|
| activator | `String`&#124;`Element` |  | Html element `ID` or `Element` instance that can trigger the appearance of this tooltip. <MdBadge color="info">v2.0.15</MdBadge> |
| arrow-off | `Boolean` | `false`  | Hide this tooltip arrow. <MdBadge color="info">v2.0.15</MdBadge> |
| content <Badge type="danger">required</Badge> | `string` | | The tooltip content. |
| disabled  | `Boolean` | `false`  | Disable this tooltip and prevent it from appearing. |
| max-width | `Number`  |  | This tooltip maximum display width in pixel. |
| placement | `String`  | `'bottom'` | This tooltip display placement. Valid values are: `left`, `right`, `top`, `bottom`. |
| show      | `Boolean` | `false` | Value monitored by `v-model` to show or hide this tooltip programmatically. <MdBadge color="info">v2.0.0</MdBadge> |
| width     | `Number`  |  | This tooltip display width in pixel. |
| z-index   | `Number`  | `2000` | Inline-css `z-index` positioning. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
