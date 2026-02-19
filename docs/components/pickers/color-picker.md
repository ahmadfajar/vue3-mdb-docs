---
description: ColorPicker is a component that allow users to select a color using a variety of input methods. 
---

# Color Picker

::: lead
**BsColorPicker** is a component that allow users to select a color using a variety 
of input methods.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>


## Usage 

::: BlockVue {clientOnly="true" title="ColorPicker Usage" file="./docs/components/pickers/js/color-picker-1.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-color-picker 
      v-model="color1" 
      v-model:mode="mode1" 
      class="shadow">
    </bs-color-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TColorPickerMode } from 'vue-mdbootstrap';

const color1 = ref<string>('#1669de');
const mode1 = ref<TColorPickerMode>();
</script>
```
:::


## Swatches

Use the `swatches` property to display an array of color swatches that users can pick from.

::: BlockVue {clientOnly="true" title="ColorPicker Swatches" file="./docs/components/pickers/js/color-picker-2.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-color-picker 
      v-model="color2" 
      v-model:mode="mode2" 
      :swatches="swatches" 
      class="shadow" 
      mode-button-toggle-color="default active"
      mode-button-outlined>
    </bs-color-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TColorPickerMode } from 'vue-mdbootstrap';

const color2 = ref<string>();
const mode2 = ref<TColorPickerMode>();
const swatches = [
  '#e9c46a',
  '#f4a261',
  '#e76f51',
  '#FF0000',
  '#d62828',
  '#AA0000',
  '#550000',
  '#FFFF00',
  '#AAAA00',
  '#555500',
  '#00FF00',
  '#00AA00',
  '#005500',
  '#0077b6',
  '#0096c7',
  '#00b4d8',
  '#48cae4',
];
</script>
```
:::


## Popup Dialog

`<bs-color-picker>` can be displayed as a popup dialog and use [BsPopover](/components/overlays/popover) internally.

::: BlockVue {clientOnly="true" title="Popup ColorPicker" file="./docs/components/pickers/js/color-picker-3.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-button
      ref="pickerActivator"
      title="Click to display color picker"
      dropdown-toggle
      @click="pickerShow = !pickerShow"
    >
      <span 
        class="picked-color rounded-circle" :style="{ color: pickerColor }"></span>
    </bs-button>
    <bs-color-picker 
      v-model="pickerColor" 
      v-model:mode="pickerMode" 
      v-model:open="pickerShow"
      :activator="pickerActivator?.$el"
      class="shadow">
    </bs-color-picker>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentPublicInstance } from 'vue';
import { ref } from 'vue';
import type { TColorPickerMode } from 'vue-mdbootstrap';

const pickerMode = ref<TColorPickerMode>('RGB');
const pickerColor = ref<string>('#e632da');
const pickerActivator = ref<ComponentPublicInstance | null>(null);
const pickerShow = ref<boolean>(false);
</script>

<style>
.demo-wrapper { 
  width: 100%; 
  padding: 1rem; 
}

.picked-color {
  border-radius: 50%;
  background-image: repeating-linear-gradient(
      45deg,
      #aaa 25%,
      transparent 25%,
      transparent 75%,
      #aaa 75%,
      #aaa
    ),
    repeating-linear-gradient(45deg, #aaa 25%, #fff 25%, #fff 75%, #aaa 75%, #aaa);
  background-position: 0 0, 4px 4px;
  background-size: 8px 8px;
  border: 0;
  padding: 0;
  height: 26px;
  width: 26px;
  display: inline-block;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}

.picked-color:after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  background-color: currentColor;
  border-radius: inherit;
  content: '';
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: block;
  position: absolute;
  pointer-events: none;
}
</style>
```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-color-picker` for better customization.

<SmallNote color="teal">Added in v2.2.0</SmallNote>

```scss
.md-color-picker {
  --md-color-picker-bg: var(--background-tertiary);
  --md-color-picker-border-radius: var(--md-radius);
  --md-color-picker-input-bg: #{colors.$gray-100};
  --md-color-picker-input-border: 1px solid oklch(0.867 0.011 247.949);
  --md-color-picker-input-color: inherit;
  --md-color-picker-input-focus-bg: var(--background-secondary, #{colors.$white});
  --md-color-picker-input-focus-color: inherit;
  --md-color-picker-input-focus-outline: 2px solid var(--md-field-active-indicator);
  --md-color-picker-input-focus-shadow: oklch(0.578 0.228 260.025 / 0.25);
  --md-color-picker-slider-thumb-color: #{color.scale(colors.$neutral-base, $lightness: -40%)};
}

```


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property     | Type      | Default | Description |
|--------------|-----------|---------|-------------|
| activator       | `Element`&#124;`String` |  | Display this ColorPicker as a popup dialog and calculate its display position from the activator element. <div class="pt-3">Leave it `undefined` to display persistent/inline ColorPicker.</div> |
| container-color <Badge type="warning">deprecated</Badge> | `String`  |  | This ColorPicker container background color. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3">Since v2.2.0 the container background color is integrated with global CSS variables.</div> |
| cover           | `Boolean` | `false`   | Display ColorPicker at a position that covers the activator element. |
| hide-alpha      | `Boolean` | `false`   | Hide alpha slider and alpha input field. |
| hide-inputs       | `Boolean` | `false` | Hide the input fields. |
| hide-mode-button  | `Boolean` | `false` | Hide toggle mode buttons. |
| input-label-class | `String`&#124;`String[]` |  | Optional css classname to apply to the input field label. |
| mode <Badge type="tip">v-model</Badge> | `String` |  | This ColorPicker mode. Valid values: `HEX`, `RGB`, `HSL`, `OKLCH`. <MdBadge color="info">Updated in v2.2.0</MdBadge> |
| mode-button-color | `String` | `'secondary'` | Apply custom color to the toggle button. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light` and `dark`.</div> |
| mode-button-outlined   | `Boolean`  | `false` | Render the toggle mode buttons with outlined style. |
| mode-button-toggle-color | `String` |  | Color to apply to the active button. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light` and `dark`.</div> |
| model-value <Badge type="tip">v-model</Badge> | `String` |  | Monitored by `v-model` to maintain the component's value. |
| open <Badge type="tip">v-model</Badge> | `Boolean`  | `false` | This ColorPicker popup state: `show` or `hide`. Only works if activator element is defined. |
| placement           | `String`   | `'bottom-left'` | This ColorPicker display placement when property `activator` is defined. |
| space               | `Number`   | | Number of pixel to shift the ColorPicker display position from the activator element. |
| swatches            | `String[]` | | Custom color swatches to display at the bottom ColorPicker. |
| swatches-max-height | `Number`   | `80`       | Sets the maximum height of the swatches section. |
| transition          | `String`   | `'scale'`  | Transition animation when displaying the ColorPicker. This animation is effected by `placement` property. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments     | Description |
|---------|---------------|-------------|
| update:model-value | ( value:`String`) | Fired when this component's `model-value` is updated. |
| update:mode | ( value:`String`) | Fired when the `mode` property is updated. |
| update:open | ( value:`Boolean`) | Fired when the `open` property is updated. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import type { ComponentPublicInstance } from 'vue';  
import { ref } from 'vue';
import type { TColorPickerMode } from 'vue-mdbootstrap';

const tabs1active = ref(0);
const color1 = ref<string>('#1669de');
const color2 = ref<string>();
const mode1 = ref<TColorPickerMode>();
const mode2 = ref<TColorPickerMode>();
const pickerMode = ref<TColorPickerMode>('RGB');
const pickerColor = ref<string>('#e632da');
const pickerActivator = ref<ComponentPublicInstance | null>(null);
const pickerShow = ref<boolean>(false);

const swatches = [
  '#e9c46a',
  '#f4a261',
  '#e76f51',
  '#FF0000',
  '#d62828',
  '#AA0000',
  '#550000',
  '#FFFF00',
  '#AAAA00',
  '#555500',
  '#00FF00',
  '#00AA00',
  '#005500',
  '#0077b6',
  '#0096c7',
  '#00b4d8',
  '#48cae4',
];
</script>