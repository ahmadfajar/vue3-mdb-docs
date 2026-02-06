---
outline: [2, 3] 
description: A component that let users enter arbitrary items, like categories or tags into an UI to convey a small pieces of information. 
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

::: BlockVue {title="Basic Chip Field Example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-3">
    <bs-chip-field placeholder="Add tags...">
      <label class="col-md-3 col-form-label">Field Label</label>
    </bs-chip-field>
  </div>
  <div class="mb-3">
    <bs-chip-field :model-value="['Sandra', 'Adams']" readonly>
      <label class="col-md-3 col-form-label">State Readonly</label>
    </bs-chip-field>
  </div>
  <div class="mb-1">
    <bs-chip-field :model-value="['Sandra', 'Adams']" disabled>
      <label class="col-md-3 col-form-label">State Disabled</label>
    </bs-chip-field>
  </div>
</div>
```
:::

::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
Do not use the `model-value` property when using `v-model`.
:::


## Style Variants

You can style `<bs-chip-field>` to your own preference or use a style variant 
based on Google **Material Design 2** or **Material Design 3** specifications. 

### Default

You can style `<bs-chip-field>` that follows Google **Material Design 2** specifications
by using `floating-label` property explicitly.

::: BlockVue {title="Classic Chip Field Style Variant"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-4">
    <bs-chip-field placeholder="Add tags...">
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-chip-field>
  </div>
  <div class="mb-4">
    <bs-chip-field placeholder="Add tags..." floating-label>
      <label>Field Label</label>
    </bs-chip-field>
  </div>
  <div class="mb-2">
    <bs-chip-field floating-label>
      <label>Floating Label</label>
    </bs-chip-field>
  </div>
</div>
```
:::


### Filled {class="mt-lg-5"}

Use `filled` property explicitly to enable `<bs-chip-field>` with **solid fill style**.
And when combined with `floating-label` property, `<bs-chip-field>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="Filled Chip Field Style Variant"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-4">
    <bs-chip-field placeholder="Add tags..." filled>
      <label class="col-md-3 col-form-label pt-md-2">Classic Field</label>
    </bs-chip-field>
  </div>
  <hr />
  <div class="mb-3">
    <bs-chip-field placeholder="Add tags..." filled floating-label>
      <label>Field Label</label>
    </bs-chip-field>
  </div>
  <div class="mb-2">
    <bs-chip-field filled floating-label>
      <label>Floating Label</label>
    </bs-chip-field>
  </div>
</div>

```
::: 


### Outlined {class="mt-lg-5"}

Use `outlined` property explicitly to enable `<bs-chip-field>` with **outline style**.
And when combined with `floating-label` property, `<bs-chip-field>` will have a style 
that follows the Google **Material Design 3** specifications.

::: BlockVue {title="Outline Chip Field Style Variant"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="mb-3">
    <bs-chip-field placeholder="Add tags..." outlined>
      <label class="col-md-3 col-form-label pt-md-3">Classic Field</label>
    </bs-chip-field>
  </div>
  <hr />
  <div class="mb-4">
    <bs-chip-field placeholder="Add tags..." outlined floating-label>
      <label>Field Label</label>
    </bs-chip-field>
  </div>
  <div class="mb-2">
    <bs-chip-field outlined floating-label>
      <label>Floating Label</label>
    </bs-chip-field>
  </div>
</div>

```
::: 


## Chip Styles

The chip items can also be styled. The guide below shows you how to style the chip items.


### Chips Color {class="mt-lg-5"}

The chip's color can be set using the `chip-color` property. Any color variant from 
[MDBootstrap colors](/reference/colors#mdbootstrap-colors) and 
[Material colors](/reference/colors#material-colors) can be applied 
to the `<bs-chip-field>`.

::: BlockVue {title="Chip Field color style"}

```html
<div class="bg-white rounded-3 px-4 py-5 w-100">
  <bs-chip-field 
    placeholder="Add tags..." 
    chip-color="deep-purple" 
    outlined 
    floating-label
  >
    <label>Field Label</label>
  </bs-chip-field>
</div>

```
::: 


### Outlined Chips {class="mt-lg-5"}

Use `chip-outlined` property explicitly to create chip items with **_outlined_** shape style.

::: BlockVue {title="Chip Field with outlined chips style"}

```html
<div class="bg-white rounded-3 px-4 py-5 w-100">
  <bs-chip-field 
    placeholder="Add tags..." 
    chip-color="danger"
    chip-outlined 
    outlined 
    floating-label
  >
    <label>Field Label</label>
  </bs-chip-field>
</div>

```
::: 


### Rounded Pill Chips {class="mt-lg-5"}

Use `chip-pill` property explicitly to create chip items with **_rounded-pill_** shape style.

::: BlockVue {title="Chip Field with rounded-pill chips style"}

```html
<div class="bg-white rounded-3 px-4 py-5 w-100">
  <bs-chip-field 
    placeholder="Add tags..." 
    chip-color="stylish-color"
    chip-pill 
    outlined 
    floating-label
  >
    <label>Field Label</label>
  </bs-chip-field>
</div>

```
::: 


### Outlined Rounded Pill Chips {class="mt-lg-5"}

Use both `chip-outlined` and `chip-pill` property explicitly to create chip items with 
**_outlined rounded-pill_** shape style.

::: BlockVue {title="Chip Field with outlined rounded-pill chips style"}

```html
<div class="bg-white rounded-3 px-4 py-5 w-100">
  <bs-chip-field 
    placeholder="Add tags..." 
    chip-color="danger"
    chip-outlined 
    chip-pill 
    outlined 
    floating-label
  >
    <label>Field Label</label>
  </bs-chip-field>
</div>

```
::: 


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily. 

::: BlockVue {title="Chip Field clearable feature example" file="./docs/components/scripts/chipfield-1.js"}

```vue
<template>
  <div class="bg-white rounded-3 px-4 py-5 w-100">
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

::: BlockVue {title="Chips Field deletable feature example" file="./docs/components/scripts/chipfield-2.js"}

```vue
<template>
  <div class="bg-white rounded-3 px-4 py-5 w-100">
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

The `help-text` property on `<bs-chip-field>` adds an help text beneath the Field.
And sets the `persistent-help-text` property to `false` will make the help text 
visible only when the Field is focused.

::: BlockVue {title="Chip Field with help text example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="col">
      <div class="mb-4">
        <bs-chip-field 
          :persistent-help-text="false" 
          help-text="Enter product tags" 
          placeholder="Add tag..."
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
        >
          <label>Website keywords</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-4">
        <bs-chip-field :persistent-help-text="false" 
          help-text="Enter product tags" 
          placeholder="Add tag..."
          floating-label 
          filled
        >
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
      <div class="mb-4 mb-lg-2">
        <bs-chip-field 
          :persistent-help-text="false" 
          help-text="Enter product tags" 
          placeholder="Add tag..."
          floating-label 
          outlined
        >
          <label>Product Tags</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-4 mb-lg-2">
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
  </div>
</div>  
``` 
::: 


## Icons

The properties `prepend-icon`, `prepend-icon-outer`, `append-icon` and `append-icon-outer` 
provides the ability to add icon to `<bs-chip-field>`.

Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon style variant. 

<SmallNote color="teal">Updated on v2.1.0</SmallNote>

::: BlockVue {title="Chip Field with icons example"}

```html
<div class="bg-white rounded-3 p-4 w-100">
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="col">
      <div class="mb-3">
        <bs-chip-field prepend-icon="person_filled" floating-label>
          <label>Prepend</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-chip-field append-icon="person_filled" floating-label>
          <label>Append</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-chip-field prepend-icon-outer="person" floating-label>
          <label>Prepend Outer</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-chip-field append-icon-outer="person" floating-label>
          <label>Append Outer</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-chip-field prepend-icon="person_filled" floating-label filled>
          <label>Prepend</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-chip-field append-icon="person_filled" floating-label filled>
          <label>Append</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-chip-field prepend-icon-outer="person" floating-label filled>
          <label>Prepend Outer</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-chip-field append-icon-outer="person" floating-label filled>
          <label>Append Outer</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-chip-field prepend-icon="person_filled" floating-label outlined>
          <label>Prepend</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-chip-field append-icon="person_filled" floating-label outlined>
          <label>Append</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-chip-field prepend-icon-outer="person" floating-label outlined>
          <label>Prepend Outer</label>
        </bs-chip-field>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <bs-chip-field append-icon-outer="person" floating-label outlined>
          <label>Append Outer</label>
        </bs-chip-field>
      </div>
    </div>
  </div>
</div>
``` 
::: 

<!-- @include: @/components/icon-migration-info.md -->


## CSS Variables

<SmallNote color="teal">Added since v2.0.0</SmallNote>

```scss
--md-field-active-border-color: rgb(var(--md-field-active-indicator));
--md-field-active-border-width: 2px;
--md-field-color-bg: currentColor;
--md-field-border-color: currentColor;
--md-field-border-width: 1px;
--md-field-floating-label-color: var(--md-field-label-color);
--md-field-label-color: currentColor;

// global css variables
--md-field-primary-indicator-rgb: 98, 0, 238;
--md-field-primary-indicator: rgb(var(--md-field-primary-indicator-rgb));
--md-field-accent-indicator-rgb: 185,156,225;
--md-field-accent-indicator: rgb(var(--md-field-accent-indicator-rgb));
--md-field-active-indicator: var(--md-field-primary-indicator-rgb);

```


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| action-icon-variant  | `String` | `'outlined'` | Sets the action icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <BsBadge color="info">Updated on v2.1.0</BsBadge> |
| append-icon          | `String` |  | <div style="min-width:375px">Sets icon to display at the inner right side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| append-icon-outer    | `String` |  | <div style="min-width:375px">Sets icon to display at the outer right side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| autocomplete | `Boolean`/`String`  | `false` | Sets browsers **_autocomplete_** predictions on/off. |
| autofocus    | `Boolean` | `false` | Autofocus field when this component is mounted. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| chip-color   | `String` | `'light-grey'` | The default chips color to apply. |
| chip-deletable | `Boolean` | `false` | Display the close button on each chip items to delete a chip. |
| chip-outlined  | `Boolean` | `false` | Create chip items with **_outline_** shape style. |
| chip-pill      | `Boolean` | `false` | Create chip items with **_rounded-pill_** shape style. |
| disabled       | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| external-validator <Badge type="warning">deprecated</Badge> | `TValidator` |    | Use `validator` instead. |
| filled       | `Boolean` | `false` | Create the component with **_solid fill style_** appearance. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| help-text   | `String`  |          | The help text to display below the field component. |
| id          | `String`  |          | Sets `<input>` element `ID` attribute. This property value is auto generates. |
| model-value <Badge type="tip">v-model</Badge> | `String`/`String[]` |  | Monitored by `v-model` to maintain this field value. <BsBadge color="info">v2.0.0</BsBadge> |
| name        | `String`  |  | Sets `<input>` element `name` attribute. |
| outlined    | `Boolean` | `false`  | Create the component with **_outline style_** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| placeholder  | `String` |        | Sets the field placeholder. |
| prepend-icon | `String` |        | <div style="min-width:375px">Sets icon to display at the inner left side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| prepend-icon-outer | `String` |  | <div style="min-width:375px">Sets icon to display at the outer left side. <BsBadge color="info">Updated on v2.1.0</BsBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| readonly    | `Boolean` | `false` | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |
| required    | `Boolean` | `false` | Sets `<input>` element `required` attribute. |
| validation-icon | `Boolean`  | `false`| Display validation icon or not, when this field has been validated. <BsBadge color="info">v2.0.0</BsBadge> |
| validator | `TValidator` |   | The configuration options to integrate external validator plugin to validate this field value. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| blur    | ( evt:`FocusEvent`)    | Triggers when this ChipField lost focus. |
| clear   |   | Triggers after this field value is cleared. |
| delete-item | ( item:`String`) | Triggers when a chip is deleted from this ChipField. <BsBadge color="info">v2.0.0</BsBadge> |
| focus   | ( evt:`FocusEvent`)    | Triggers when this ChipField got focused. |
| keydown | ( evt:`KeyboardEvent`) | Triggers when cursor is still in the `<input>` element and keyboard key is pressed. |
| update:model-value | ( value:`String`/`String[]`) | Triggers when this ChipField's `model-value` property is updated. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-2cols">

| Name        | Description  |
|-------------|--------------|
| default       | The outlet slot used to place the field label. |
| append-inner  | The outlet slot used to place custom icon or component at the inner right side. <BsBadge color="info">v2.0.0</BsBadge> |
| append-outer  | The outlet slot used to place custom icon or component at the outer right side. <BsBadge color="info">v2.0.0</BsBadge> |
| help-text     | The outlet slot used for custom help text. <BsBadge color="info">v2.0.0</BsBadge> |
| prepend-inner | The outlet slot used to place custom icon or component at the inner left side. <BsBadge color="info">v2.0.0</BsBadge> |
| prepend-outer | The outlet slot used to place custom icon or component at the outer left side. <BsBadge color="info">v2.0.0</BsBadge>|

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
