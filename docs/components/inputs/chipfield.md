---
outline: [2, 3] 
description: Chip Field is a component that let users enter arbitrary items, like categories or tags into an UI to convey a small pieces of information. 
---

# Chip Field


::: lead
**BsChipField** is a component that let users enter arbitrary items, like _categories_ 
or _tags_ into an UI to convey a small pieces of information.
:::


## Overview

**BsChipField** uses [BsChip](/components/chips/chip) internally and mimics like
HTML5 `<input type="text">` element with tagging functionality. This means that you 
can add attributes like `required`, `readonly`, or `disabled` and it will react to 
them to give the best experience. You can also use `v-model` directive to create 
two-way data bindings on the `model-value` property.

::: BlockVue {title="Chip Field Overview"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-chip-field placeholder="Add tags...">
      <label class="col-md-3 col-form-label">Field Label</label>
    </bs-chip-field>
    <bs-chip-field :model-value="['Sandra', 'Adams']" readonly>
      <label class="col-md-3 col-form-label">State Readonly</label>
    </bs-chip-field>
    <bs-chip-field :model-value="['Sandra', 'Adams']" disabled>
      <label class="col-md-3 col-form-label">State Disabled</label>
    </bs-chip-field>
  </div>
</template>

```
:::

<!-- @include: @/components/model-value-important.md -->


## Style Variants

You can style `<bs-chip-field>` to your own preference or use a style variant 
based on Google **Material Design 2** or **Material Design 3** specifications. 

### Default {#style-variants-default}

You can style `<bs-chip-field>` that follows Google **Material Design 2** specifications
by using `floating-label` property explicitly.

::: BlockVue {title="Chip Field Style Variants - Default"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-chip-field placeholder="Add tags...">
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-chip-field>
    <bs-chip-field placeholder="Add tags..." floating-label>
      <label>Field Label</label>
    </bs-chip-field>
    <bs-chip-field floating-label>
      <label>Floating Label</label>
    </bs-chip-field>
  </div>
</template>

```
:::


### Filled {#style-variants-filled class="mt-lg-5"}

Use `filled` property explicitly to enable `<bs-chip-field>` with **solid fill style**.
And when combined with `floating-label` property, `<bs-chip-field>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="Chip Field Style Variants - Filled"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-chip-field placeholder="Add tags..." filled>
      <label class="col-md-3 col-form-label pt-md-2">Classic Field</label>
    </bs-chip-field>
    <bs-divider></bs-divider>
    <bs-chip-field placeholder="Add tags..." filled floating-label>
      <label>Field Label</label>
    </bs-chip-field>
    <bs-chip-field filled floating-label>
      <label>Floating Label</label>
    </bs-chip-field>
  </div>
</template>

```
::: 


### Outlined {#style-variants-outlined class="mt-lg-5"}

Use `outlined` property explicitly to enable `<bs-chip-field>` with **outline style**.
And when combined with `floating-label` property, `<bs-chip-field>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="Chip Field Style Variants - Outlined"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 p-md-3">
    <bs-chip-field placeholder="Add tags..." outlined>
      <label class="col-md-3 col-form-label pt-md-3">Classic Field</label>
    </bs-chip-field>
    <bs-divider></bs-divider>
    <bs-chip-field placeholder="Add tags..." outlined floating-label>
      <label>Field Label</label>
    </bs-chip-field>
    <bs-chip-field outlined floating-label>
      <label>Floating Label</label>
    </bs-chip-field>
  </div>
</template>

```
::: 


## Chip Styles

The chip items can also be styled. The guide below shows you how to style the chip items.


### Chips Color {#chip-styles-chips-color class="mt-lg-5"}

Use the `chip-color` property to change the chips color style. Built-in color variants are:
`default`, `primary`, `secondary` (_default_), `success`, `warning`, `danger`, `info` and `light`.

::: BlockVue {title="Chip Field Styles - Color"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <bs-chip-field 
      placeholder="Add tags..." 
      chip-color="default" 
      outlined 
      floating-label
    >
      <label>Field Label</label>
    </bs-chip-field>
  </div>
</template>

```
::: 


### Outlined Chips {#chip-styles-outlined-chips class="mt-lg-5"}

Use `chip-outlined` property explicitly to create chip items with **_outlined_** shape style.

::: BlockVue {title="Chip Field Styles - Outlined Chips"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <bs-chip-field 
      placeholder="Add tags..." 
      chip-color="primary"
      chip-outlined 
      outlined 
      floating-label
    >
      <label>Field Label</label>
    </bs-chip-field>
  </div>
</template>

```
::: 


### Rounded Pill Chips {#chip-styles-rounded-pill-chips class="mt-lg-5"}

Use `chip-pill` property explicitly to create chip items with **_rounded-pill_** shape style.

::: BlockVue {title="Chip Field Styles - Rounded-Pill Chips"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <bs-chip-field 
      placeholder="Add tags..." 
      chip-color="default"
      chip-pill 
      outlined 
      floating-label
    >
      <label>Field Label</label>
    </bs-chip-field>
  </div>
</template>

```
::: 


### Outlined Rounded Pill Chips {#chip-styles-outlined-rounded-pill-chips class="mt-lg-5"}

Use both `chip-outlined` and `chip-pill` property explicitly to create chip items with 
**_outlined rounded-pill_** shape style.

::: BlockVue {title="Chip Field Styles - Outlined Rounded-Pill Chips"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <bs-chip-field 
      placeholder="Add tags..." 
      chip-outlined 
      chip-pill 
      outlined 
      floating-label
    >
      <label>Field Label</label>
    </bs-chip-field>
  </div>
</template>

```
::: 


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily. 

::: BlockVue {title="Clearable Chip Field" file="./docs/components/inputs/js/chipfield-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <bs-chip-field 
      v-model="fieldValue1" 
      placeholder="Add tag..." 
      clear-button 
      filled 
      floating-label
    >
      <label>Field Label</label>
    </bs-chip-field>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fieldValue1 = ref<string[]>([]);
</script>
```
:::


## Deletable Chip

Define the `chip-deletable` property explicitly, so that existing chip items can be easily deleted.

::: BlockVue {title="Deletable Chip Field" file="./docs/components/inputs/js/chipfield-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <div class="mb-4">
      <bs-chip-field 
        v-model="fieldValue2" 
        placeholder="Add tag..." 
        chip-deletable 
        filled 
        floating-label
      >
        <label>Field Label</label>
      </bs-chip-field>
    </div>
    <div>
      Real value: <b>{{ fieldValue2 }}</b>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fieldValue2 = ref<string[]>([]);
</script>
```
:::


## Help Text

The `help-text` property on `<bs-chip-field>` adds an help text beneath the chip field.
And define the `persistent-help-off` property explicitly to make the help text 
visible only when the chip field is focused.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {title="Chip Field with Help Text"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <div class="mb-4">
          <bs-chip-field 
            help-text="Enter website keywords" 
            placeholder="Add keyword..."
            floating-label
          >
            <label>Website keywords</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-4">
          <bs-chip-field 
            help-text="Enter product tags" 
            placeholder="Add tag..."
            persistent-help-off 
            floating-label>
            <label>Product Tags</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-4">
          <bs-chip-field 
            help-text="Enter website keywords" 
            placeholder="Add keyword..."
            floating-label 
            filled
          >
            <label>Website keywords</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-4">
          <bs-chip-field 
            help-text="Enter product tags" 
            placeholder="Add tag..."
            persistent-help-off 
            floating-label 
            filled
          >
            <label>Product Tags</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-4 mb-md-0">
          <bs-chip-field 
            help-text="Enter website keywords" 
            placeholder="Add keyword..."
            floating-label 
            outlined
          >
            <label>Website keywords</label>
          </bs-chip-field>
        </div>
      </div>
      <div class="col">
        <div class="mb-0">
          <bs-chip-field 
            help-text="Enter product tags" 
            placeholder="Add tag..."
            persistent-help-off 
            floating-label 
            outlined
          >
            <label>Product Tags</label>
          </bs-chip-field>
        </div>
      </div>
    </div>
  </div> 
</template>

``` 
::: 


## Icons

The properties `prepend-icon`, `prepend-icon-outer`, `append-icon` and `append-icon-outer` 
provides the ability to add icon to `<bs-chip-field>`.

Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon style variant. 

<SmallNote color="teal">Updated in v2.1.0</SmallNote>

::: BlockVue {title="Chip Field with Icon"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 p-md-3">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-3">
        <bs-chip-field prepend-icon="person_filled" floating-label>
          <label>Prepend</label>
        </bs-chip-field>
      </div>
      <div class="col mb-3">
        <bs-chip-field append-icon="person_filled" floating-label>
          <label>Append</label>
        </bs-chip-field>
      </div>
      <div class="col mb-3">
        <bs-chip-field prepend-icon-outer="person" floating-label>
          <label>Prepend Outer</label>
        </bs-chip-field>
      </div>
      <div class="col mb-3">
        <bs-chip-field append-icon-outer="person" floating-label>
          <label>Append Outer</label>
        </bs-chip-field>
      </div>
      <div class="col mb-4">
        <bs-chip-field prepend-icon="person_filled" floating-label filled>
          <label>Prepend</label>
        </bs-chip-field>
      </div>
      <div class="col mb-4">
        <bs-chip-field append-icon="person_filled" floating-label filled>
          <label>Append</label>
        </bs-chip-field>
      </div>
      <div class="col mb-4">
        <bs-chip-field prepend-icon-outer="person" floating-label filled>
          <label>Prepend Outer</label>
        </bs-chip-field>
      </div>
      <div class="col mb-4">
        <bs-chip-field append-icon-outer="person" floating-label filled>
          <label>Append Outer</label>
        </bs-chip-field>
      </div>
      <div class="col mb-4">
        <bs-chip-field prepend-icon="person_filled" floating-label outlined>
          <label>Prepend</label>
        </bs-chip-field>
      </div>
      <div class="col mb-4">
        <bs-chip-field append-icon="person_filled" floating-label outlined>
          <label>Append</label>
        </bs-chip-field>
      </div>
      <div class="col mb-4 mb-md-0">
        <bs-chip-field prepend-icon-outer="person" floating-label outlined>
          <label>Prepend Outer</label>
        </bs-chip-field>
      </div>
      <div class="col">
        <bs-chip-field append-icon-outer="person" floating-label outlined>
          <label>Append Outer</label>
        </bs-chip-field>
      </div>
    </div>
  </div>
</template>

``` 
::: 

<!-- @include: @/components/icon-migration-info.md -->


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-field` and global CSS variables for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-field {
  --md-field-border-width: 1px;
  --md-field-border-color: #{colors.$gray-400};
  --md-field-border-radius: #{vars.$text-field-border-radius};
  --md-field-hover-border-color: currentColor;
  --md-field-active-border-width: 2px;
  --md-field-active-border-color: var(--md-field-active-indicator);
  --md-field-color-bg: currentColor;

  --md-field-outline-bg: transparent;
  --md-field-outline-hover-bg: transparent;
  --md-field-outline-focus-bg: transparent;
  --md-field-outline-border-radius: var(--md-field-border-radius);

  --md-field-control-height: #{vars.$text-field-height};
  --md-field-label-color: currentColor;
  --md-field-label-font-weight: var(--font-weight-medium);
  --md-field-inline-text-font-weight: var(--font-weight-medium);
  --md-field-floating-label-color: var(--md-field-label-color);

  --md-field-padding-start: #{vars.$text-field-padding-start};
  --md-field-padding-end: #{vars.$text-field-padding-end};
  --md-field-padding-top: #{vars.$text-field-padding-top};
  --md-field-padding-bottom: #{vars.$text-field-padding-bottom};
  --md-field-classic-padding-top: #{vars.$text-field-classic-padding-top};
  --md-field-classic-padding-bottom: #{vars.$text-field-classic-padding-bottom};
}

// global css variables
--md-field-primary-indicator: oklch(0.458 0.23 304.441);
--md-field-accent-indicator: oklch(0.743 0.102 303.276);
--md-field-active-indicator: var(--md-field-primary-indicator);
--md-field-disabled-opacity: 0.4;
--md-field-readonly-opacity: 0.55;

```


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| action-icon-variant  | `String` | `'outlined'` | Sets the action icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <MdBadge color="info">Updated in v2.1.0</MdBadge> |
| append-icon          | `String` |  | <div style="min-width:400px">Sets icon to display at the inner right side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| append-icon-outer    | `String` |  | <div style="min-width:400px">Sets icon to display at the outer right side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| autocomplete | `Boolean`&#124;`String`  | `false` | Sets browsers **_autocomplete_** predictions on/off. |
| autofocus    | `Boolean` | `false` | Autofocus field when this component is mounted. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| chip-color   | `String` | `'secondary'` | Apply custom chips color. <MdBadge color="info">Updated in v2.2.0</MdBadge> <br/><br/> Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info` and `light`. |
| chip-deletable | `Boolean` | `false` | Display the close button on each chip items to delete a chip. |
| chip-outlined  | `Boolean` | `false` | Create chip items with **_outline_** shape style. |
| chip-pill      | `Boolean` | `false` | Create chip items with **_rounded-pill_** shape style. |
| disabled       | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| filled       | `Boolean` | `false` | Create the component with **_solid fill style_** appearance. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| help-text   | `String`  |          | The help text to display below the field component. |
| id          | `String`  |          | Sets `<input>` element `ID` attribute. This property value is auto generates. |
| model-value <Badge type="tip">v-model</Badge> | `String`&#124;`String[]` |  | Monitored by `v-model` to maintain this field value. <MdBadge color="info">v2.0.0</MdBadge> |
| name        | `String`  |  | Sets `<input>` element `name` attribute. |
| outlined    | `Boolean` | `false`  | Create the component with **_outline style_** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| persistent-help-text <Badge type="warning">deprecated</Badge> | `Boolean` | `true` | Use `persistent-help-off` instead. |
| persistent-help-off | `Boolean` | `false` | Prevents help text from being visible when the component is not focused. <MdBadge color="info">v2.2.0</MdBadge> |
| placeholder  | `String` |        | Sets the field placeholder. |
| prepend-icon | `String` |        | <div style="min-width:400px">Sets icon to display at the inner left side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| prepend-icon-outer | `String` |  | <div style="min-width:400px">Sets icon to display at the outer left side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets `<input>` element `required` attribute. |
| validation-icon | `Boolean`  | `false`| Display validation icon or not, when this field has been validated. <MdBadge color="info">v2.0.0</MdBadge> |
| validator | `TValidator` |   | The configuration options to integrate external validator plugin to validate this field value. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| blur    | ( evt:`FocusEvent`)    | Triggers when this ChipField lost focus. |
| clear   |   | Triggers after this field value is cleared. |
| delete-item | ( item:`String`) | Triggers when a chip is deleted from this ChipField. <MdBadge color="info">v2.0.0</MdBadge> |
| focus   | ( evt:`FocusEvent`)    | Triggers when this ChipField got focused. |
| keydown | ( evt:`KeyboardEvent`) | Triggers when cursor is still in the `<input>` element and keyboard key is pressed. |
| update:model-value | ( value:`String`&#124;`String[]`) | Triggers when this ChipField's `model-value` property is updated. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name        | Description  |
|-------------|--------------|
| default       | The outlet slot used to place the field label. |
| append-inner  | The outlet slot used to place custom icon or component at the inner right side. <MdBadge color="info">v2.0.0</MdBadge> |
| append-outer  | The outlet slot used to place custom icon or component at the outer right side. <MdBadge color="info">v2.0.0</MdBadge> |
| help-text     | The outlet slot used for custom help text. <MdBadge color="info">v2.0.0</MdBadge> |
| prepend-inner | The outlet slot used to place custom icon or component at the inner left side. <MdBadge color="info">v2.0.0</MdBadge> |
| prepend-outer | The outlet slot used to place custom icon or component at the outer left side. <MdBadge color="info">v2.0.0</MdBadge>|

</div>
  </BsTab>
</BsTabs>

<!-- @include: @/components/inputs/validator.md -->


<script lang="ts" setup>
import { ref } from "vue";

const tabs1active = ref(0);
const fieldValue1 = ref<string[]>([]);
const fieldValue2 = ref<string[]>([]);

</script>
