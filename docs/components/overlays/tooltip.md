# Tooltip

::: lead
**BsTooltip** is a component which is useful for conveying information when user
hovers over an element.
:::


## Overview

**BsTooltip** component can be wrapped on almost any component or html element.

::: BlockVue {title="Tooltip Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-auto align-items-center">
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
```
:::


## Display Placement

A tooltip can be aligned to any of the four sides of the activator element.

::: BlockVue {title="Tooltip Display Placement Example"}

```html
<div class="w-100 p-4 bg-white rounded-3">
  <div class="row row-cols-auto">
    <div class="col pt-3">
      <bs-tooltip content="Tooltip on top side" placement="top">
        <bs-button color="primary">TOP</bs-button>
      </bs-tooltip>
    </div>
    <div class="col pt-3">
      <bs-tooltip content="Tooltip on bottom side" placement="bottom">
        <bs-button color="primary">BOTTOM</bs-button>
      </bs-tooltip>
    </div>
    <div class="col pt-3">
      <bs-tooltip content="Tooltip on left side" placement="left">
        <bs-button color="primary">LEFT</bs-button>
      </bs-tooltip>
    </div>
    <div class="col pt-3">
      <bs-tooltip content="Tooltip on right side" placement="right">
        <bs-button color="primary">RIGHT</bs-button>
      </bs-tooltip>
    </div>
  </div>
</div>
```
:::


## CSS Variables

<SmallNote color="teal" class="mt-3">Added since v2.0.0</SmallNote>

```scss
--md-tooltip-arrow-width: 0.8rem;
--md-tooltip-arrow-height: 0.4rem;
--md-tooltip-border-radius: 0.375rem;
--md-tooltip-bg: #000;
--md-tooltip-color: #fff;
--md-tooltip-opacity: 0.9;
--md-tooltip-font-size: 13px;

```


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property  | Type     | Default | Description |
|-----------|----------|---------|-------------|
| activator | `String`/`Element` |  | Html element `ID` or `Element` instance that can trigger the appearance of this tooltip. <BsBadge color="info">v2.0.15</BsBadge> |
| arrow-off | `Boolean` | `false`  | Hide this tooltip arrow. <BsBadge color="info">v2.0.15</BsBadge> |
| content <Badge type="danger">required</Badge> | `string` | | The tooltip content. |
| disabled  | `Boolean` | `false`  | Disable this tooltip and prevent it from appearing. |
| max-width | `Number`  |  | This tooltip maximum display width in pixel. |
| placement | `String`  | `'bottom'` | This tooltip display placement. Valid values are: `left`, `right`, `top`, `bottom`. |
| show      | `Boolean` | `false` | Value monitored by `v-model` to show or hide this tooltip programmatically. <BsBadge color="info">v2.0.0</BsBadge> |
| width     | `Number`  |  | This tooltip display width in pixel. |
| z-index   | `Number`  | `2000` | Inline-css `z-index` positioning. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
