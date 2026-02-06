---
outline: [2, 3] 
description: A component which extends the BsChip's component by providing groupable functionality. It is used for creating groups of selections using chips. 
---

# Chip Group

::: lead
**BsChipGroup** extends the [BsChip](/components/chips/chip) component by providing groupable functionality.
It is used for creating groups of selections using chips.
:::


## Overview

`<bs-chip-group>` is a collection of `<bs-chip>`. Rather than create multiple `<bs-chip>`,
it’s better to create single `<bs-chip-group>`. `<bs-chip-group>` provides **select**
functionality, which will come in handy when working with more chips. The `items`
property is used as data source to create the chips.

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVue {title="ChipGroup Example" file="./docs/components/scripts/chip-group-1.js"}

```vue
<template>
  <div class="card p-3 border-0">
    <bs-chip-group v-model="selectedChips1" :items="chipItems1" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TChipOptionItem, TChipValue } from 'vue-mdbootstrap';

const selectedChips1 = ref<TChipValue>();
const chipItems1: TChipOptionItem[] = [
  { text: 'Arts' },
  { text: 'Creative Writers' },
  { text: 'Drawers' },
  { text: 'Foods' }
];
</script>
```
:::


## Multi Rows

If the total width of chip items exceeds the container's width, use `column`
property to wrap chip items.

::: BlockVue {title="ChipGroup Multi Rows Example" file="./docs/components/scripts/chip-group-2.js"}

```vue
<template>
  <div class="card p-3 border-0">
    <bs-chip-group
      v-model="selectedChips2"
      :items="chipItems2"
      active-class="md-chip-warning active"
      column
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TChipOptionItem, TChipValue } from 'vue-mdbootstrap';

const selectedChips2 = ref<TChipValue>();
const chipItems2: TChipOptionItem[] = [
  { text: 'Arts' },
  { text: 'Creative Writers' },
  { text: 'Drawers' },
  { text: 'Foods' },
  { text: 'Home' },
  { text: 'Shopping' },
  { text: 'Tech' },
  { text: 'Vacation' },
  { text: 'Work' }
];
</script>
```
:::


## Multiple Selection

By default `<bs-chip-group>` works in single selection mode. Use `multiple` property to
enable multiple selection mode.

::: BlockVue {title="ChipGroup Multiple Selection Example" file="./docs/components/scripts/chip-group-3.js"}

```vue
<template>
  <div class="card p-3 border-0">
    <bs-chip-group
      v-model="selectedMultiple1"
      :items="chipItems2"
      active-class="bg-green lighten-3 border-light-green"
      column
      multiple
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TChipOptionItem, TChipValue } from 'vue-mdbootstrap';

const selectedMultiple1 = ref<TChipValue>([]);
const chipItems2: TChipOptionItem[] = [
  { text: 'Arts' },
  { text: 'Creative Writers' },
  { text: 'Drawers' },
  { text: 'Foods' },
  { text: 'Home' },
  { text: 'Shopping' },
  { text: 'Tech' },
  { text: 'Vacation' },
  { text: 'Work' }
];
</script>
```
:::


## Filter Chips

Filter chips use tags or descriptive words to filter content. It creates an alternative
visual style that communicates to the user that the chip is selected. They are a good
alternative to toggle buttons or checkboxes. Use `checked-icon` property to enable this
feature. Additionally, you can use `active-class` property to change the appearance
of the selected chips.

::: BlockVue {title="Filter ChipGroup Example" file="./docs/components/scripts/chip-group-4.js"}

```vue
<template>
  <bs-card border-off>
    <bs-card-body>
      <div class="lead md-fw-semibold mb-2">Choose amenities</div>
      <bs-chip-group
        v-model="selectedAmenities1"
        :items="amenities1"
        active-class="md-chip-default-color"
        checked-icon
        column
      />
    </bs-card-body>
    <bs-divider></bs-divider>
    <bs-card-body>
      <div class="lead md-fw-semibold mb-2">Choose neighborhoods</div>
      <bs-chip-group
        v-model="selectedNeighborhoods1"
        :items="neighborhoods1"
        color="primary"
        checked-icon
        column
        outlined
      />
    </bs-card-body>
  </bs-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TChipOptionItem, TChipValue } from 'vue-mdbootstrap';

const selectedAmenities1 = ref<TChipValue>();
const selectedNeighborhoods1 = ref<TChipValue>();
const amenities1: TChipOptionItem[] = [
  { text: 'Elevator' },
  { text: 'Washer / Dryer' },
  { text: 'Fireplace', disabled: true },
  { text: 'Wheelchair access' },
  { text: 'Dogs ok' },
  { text: 'Cats ok' }
];
const neighborhoods1: TChipOptionItem[] = [
  { text: 'Snowy Rock Place' },
  { text: 'Honey Lane Circle' },
  { text: 'Donna Drive' },
  { text: 'Elaine Street' },
  { text: 'Court Street' },
  { text: 'Kennedy Park' }
];
</script>
```
:::


### Enabling Avatar {class="mt-lg-5"}

Additionally, each chips can also has avatar. This can be achieved by providing the
`imgSrc` on the chips data source.

::: BlockVue {title="Filter ChipGroup Example" file="./docs/components/scripts/chip-group-5.js"}

```vue
<template>
  <bs-card border-off>
    <bs-card-body>
      <div class="lead md-fw-semibold mb-2">Choose amenities</div>
      <bs-chip-group
        v-model="selectedAmenities2"
        :items="amenities2"
        active-class="md-chip-deep-purple active"
        checked-icon
        column
      />
    </bs-card-body>
    <bs-divider></bs-divider>
    <bs-card-body>
      <div class="lead md-fw-semibold mb-2">Choose neighborhoods</div>
      <bs-chip-group
        v-model="selectedNeighborhoods2"
        :items="neighborhoods2"
        color="purple"
        checked-icon
        column
        img-circle
        outlined
      />
    </bs-card-body>
  </bs-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TChipOptionItem, TChipValue } from 'vue-mdbootstrap';

const selectedAmenities2 = ref<TChipValue>();
const selectedNeighborhoods2 = ref<TChipValue>();
const amenities2: TChipOptionItem[] = [
  { text: 'Elevator', imgSrc: 'https://ahmadfajar.github.io/img/1.jpg' },
  { text: 'Washer / Dryer', imgSrc: 'https://ahmadfajar.github.io/img/2.jpg' },
  { text: 'Fireplace', imgSrc: 'https://ahmadfajar.github.io/img/3.jpg' },
  { text: 'Wheelchair access', imgSrc: 'https://ahmadfajar.github.io/img/4.jpg' },
  { text: 'Dogs ok', imgSrc: 'https://ahmadfajar.github.io/img/5.jpg' },
  { text: 'Cats ok', imgSrc: 'https://ahmadfajar.github.io/img/kitty-1.jpg' }
];
const neighborhoods2: TChipOptionItem[] = [
  { text: 'Snowy Rock Place', imgSrc: 'https://ahmadfajar.github.io/img/1.jpg' },
  { text: 'Honey Lane Circle', imgSrc: 'https://ahmadfajar.github.io/img/2.jpg' },
  { text: 'Donna Drive', imgSrc: 'https://ahmadfajar.github.io/img/3.jpg' },
  { text: 'Elaine Street', imgSrc: 'https://ahmadfajar.github.io/img/4.jpg' },
  { text: 'Court Street', imgSrc: 'https://ahmadfajar.github.io/img/5.jpg' },
  { text: 'Kennedy Park', imgSrc: 'https://ahmadfajar.github.io/img/kitty-1.jpg' }
];
</script>
```
:::


## Sliding Chips

Sliding Chips is used when the total width of chip items exceed the container's width,
but still wants to keep it within a single row. When enabled, it creates a visual style
like slide carousel. _Left and right arrows button_ is provided as a navigation functionality.
To enable this feature, use the `slider-button` property explicitly.

::: BlockVue {title="Sliding ChipGroup Example" file="./docs/components/scripts/chip-group-6.js"}

```vue
<template>
  <div class="card p-3 border-0">
    <bs-chip-group
      v-model="selectedMultiple2"
      :items="chipItems2"
      active-class="md-chip-deep-purple active"
      slider-button
      multiple
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TChipOptionItem, TChipValue } from 'vue-mdbootstrap';

const selectedMultiple2 = ref<TChipValue>([]);
const chipItems2: TChipOptionItem[] = [
  { text: 'Arts' },
  { text: 'Creative Writers' },
  { text: 'Drawers' },
  { text: 'Foods' },
  { text: 'Home' },
  { text: 'Shopping' },
  { text: 'Tech' },
  { text: 'Vacation' },
  { text: 'Work' }
];
</script>
```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| active-class  | `String`  |  | Custom css class to apply when the chip's item is in `active` state. See [Color Variants](/reference/colors) for more information. |
| color         | `String`  | `'grey'`| Default chip's item color appearance. Any [MDBootstrap Color](/reference/colors#mdbootstrap-colors) variants and [Material Color](/reference/colors#material-colors) variants can be used. |
| checked-icon  | `Boolean` | `false` | Enable filter chip mode and show checked icon on the selected chip. |
| column        | `Boolean` | `false` | Enable multi rows if total width of items beyond the container width. |
| img-circle    | `Boolean` | `false` | Create chip item's avatar with circle shape. |
| img-padding <Badge type="warning">deprecated</Badge> | `Boolean`  | `true` | Use `img-padding-off` property instead. |
| img-padding-off | `Boolean` | `false` | Adjust avatar size to match the component height by eliminating the margin around the avatar. <BsBadge color="info">v2.0.4</BsBadge> |
| items         | `TChipOptionItem[]` |  | The data source to create the collection of `<BsChip>`. |
| model-value <Badge type="tip">v-model</Badge> | `TChipValue`/`TChipValue[]`/`null` |  | The value monitored by `v-model`. <BsBadge color="info">v2.0.0</BsBadge> |
| multiple     | `Boolean`  | `false`  | Allow multiple selection or not. |
| outlined     | `Boolean`  | `false` | Enable ***outlined*** chip style. |
| pill         | `Boolean`  | `false` | Enable ***rounded-pill*** chip style. |
| size         | `String`   |   | Create chip's item with predefined size. Valid values are: `sm` (small), `lg` (large). |
| slider-button | `Boolean` | `false` | Show slider's button or not. <BsBadge color="info">v2.0.0</BsBadge> |
| slider-button-color | `String` | `'secondary'` | Slider button color appearance. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| change | ( value:`TChipValue`/`TChipValue[]`/`null`) | Triggers immediately when the `model-value` property is changed. |
| item:close         | ( value:`TChipOptionItem`) | Triggers when the chip's item close (`x`) button is clicked or chip's item has been dismissed. <BsBadge color="info">v2.0.0</BsBadge> |
| update:model-value | ( value:`TChipValue`/`TChipValue[]`/`null`) | Triggers when the `model-value` property is updated. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-2cols">

| Name  | Description  |
|-------|--------------|
| text  | The outlet slot used to place the chip's item text. <BsBadge color="info">v2.0.1</BsBadge> |
| icon  | The outlet slot used to place custom icon. <BsBadge color="info">v2.0.1</BsBadge> |

</div>
  </BsTab>
</BsTabs>


### TChipOptionItem {#api-chip-option-item class="mt-lg-5"}

The Chip's item has properties as described below:

<div class="doc-api-reference mt-0">
<div class="doc-table-responsive doc-table-3cols">

| Property | Type      | Description |
|----------|-----------|-------------|
| id       | `String`   | `<BsChip>` element ID. |
| text <Badge type="danger">required</Badge> | `String` | The item text. |
| value    | `String`/`Number`/`Boolean` | The item value. |
| disabled | `Boolean`  | `<BsChip>` element state. |
| dismissible | `Boolean`  | Enable dismissible `<BsChip>`. |
| href   | `String`  | Render `<BsChip>` as `<a>` element and define its `href` property and apply chip styles to the `<a>` element. |
| icon      | `String`  | <div style="min-width:425px"> The icon to display inside the `<BsChip>`. <BsBadge color="info">Updated on v2.1.0</BsBadge> <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `iconVariant` property. </div> |
| iconFlip  | `String`  | Flip the icon. Valid values are: `horizontal`, `vertical`, `both`. |
| iconPulse | `Boolean` | Apply ***pulse*** animation to the icon. |
| iconSpin  | `Boolean` | Apply ***spin*** animation to the icon. |
| iconRotation | `Number` | Rotate the icon. Valid values are: `90`, `180`, `270`. |
| iconVariant | `String`  | Predefined icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <BsBadge color="info">Updated on v2.1.0</BsBadge> |
| imgSrc | `String`  | `<BsChip>` avatar image source url. |

</div>
</div>


<script setup lang="ts">
import { ref } from 'vue';
import type { TChipOptionItem, TChipValue } from 'vue-mdbootstrap';

const tabs1active = ref(0);
const selectedChips1 = ref<TChipValue>();
const selectedChips2 = ref<TChipValue>();
const selectedMultiple1 = ref<TChipValue>([]);
const selectedMultiple2 = ref<TChipValue>([]);
const selectedAmenities1 = ref<TChipValue>();
const selectedAmenities2 = ref<TChipValue>();
const selectedNeighborhoods1 = ref<TChipValue>();
const selectedNeighborhoods2 = ref<TChipValue>();

const chipItems1: TChipOptionItem[] = [
  { text: 'Arts' },
  { text: 'Creative Writers' },
  { text: 'Drawers' },
  { text: 'Foods' },
];
const chipItems2: TChipOptionItem[] = [
  { text: 'Arts' },
  { text: 'Creative Writers' },
  { text: 'Drawers' },
  { text: 'Foods' },
  { text: 'Home' },
  { text: 'Shopping' },
  { text: 'Tech' },
  { text: 'Vacation' },
  { text: 'Work' }
];
const amenities1: TChipOptionItem[] = [
  { text: 'Elevator' },
  { text: 'Washer / Dryer' },
  { text: 'Fireplace', disabled: true },
  { text: 'Wheelchair access' },
  { text: 'Dogs ok' },
  { text: 'Cats ok' }
];
const neighborhoods1: TChipOptionItem[] = [
  { text: 'Snowy Rock Place' },
  { text: 'Honey Lane Circle' },
  { text: 'Donna Drive' },
  { text: 'Elaine Street' },
  { text: 'Court Street' },
  { text: 'Kennedy Park' }
];
const amenities2 = [
  { text: 'Elevator', imgSrc: 'https://ahmadfajar.github.io/img/1.jpg' },
  { text: 'Washer / Dryer', imgSrc: 'https://ahmadfajar.github.io/img/2.jpg' },
  { text: 'Fireplace', imgSrc: 'https://ahmadfajar.github.io/img/3.jpg' },
  { text: 'Wheelchair access', imgSrc: 'https://ahmadfajar.github.io/img/4.jpg' },
  { text: 'Dogs ok', imgSrc: 'https://ahmadfajar.github.io/img/5.jpg' },
  { text: 'Cats ok', imgSrc: 'https://ahmadfajar.github.io/img/kitty-1.jpg' }
];
const neighborhoods2 = [
  { text: 'Snowy Rock Place', imgSrc: 'https://ahmadfajar.github.io/img/1.jpg' },
  { text: 'Honey Lane Circle', imgSrc: 'https://ahmadfajar.github.io/img/2.jpg' },
  { text: 'Donna Drive', imgSrc: 'https://ahmadfajar.github.io/img/3.jpg' },
  { text: 'Elaine Street', imgSrc: 'https://ahmadfajar.github.io/img/4.jpg' },
  { text: 'Court Street', imgSrc: 'https://ahmadfajar.github.io/img/5.jpg' },
  { text: 'Kennedy Park', imgSrc: 'https://ahmadfajar.github.io/img/kitty-1.jpg' }
];
</script>
