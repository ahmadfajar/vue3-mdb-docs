---
outline: [2, 3] 
description: Toggle Button is a group of buttons with toggle capabilities. It is primarily used to visualize choices with different approaches. 
---


# Toggle Button

::: lead
**BsToggleButton** is a group of buttons with toggle capability. It is primarily 
used to visualize options with different approaches, such as selecting options, 
switching views, or sorting elements.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

## Overview 

**BsToggleButton** component shares the same style variants as 
[BsButton](/components/buttons/button#style-variants) and use **BsButton** internally. 
And if you like Google Material Design 3 - [Segmented Button](https://m3.material.io/components/segmented-buttons/overview)
style, you can choose a style variant that meet the ***Material Design 3 - 
Segmented Button*** specifications. 

**BsToggleButton** component is like HTML5 `<input>` element. This means that you 
can add attributes like `readonly`, or `disabled` and it will react to them to give the 
best experience. You can also use `v-model` directive to create two-way data bindings 
on the `model-value` property. This is useful to control or maintain the `model-value` property.


::: BlockVue {title="Toggle Buttons Overview" file="./docs/components/buttons/js/toggle-button-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-sm-2">
    <h5 class="mb-4">What are you drinking?</h5>
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Normal state</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedDrink" :items="drinkTypes" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Readonly state</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedDrink" :items="drinkTypes" readonly />
      </div>
    </div>
    <div class="row">
      <label class="col-md-3 col-form-label">Disabled state</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedDrink" :items="drinkTypes" disabled />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const selectedDrink = ref<string>();
// Never assign single datasource to multiple <bs-toggle-button>
const drinks = [
  {
    value: "tea",
    label: "Tea",
  },
  {
    value: "coffee",
    label: "Coffee",
  },
  {
    value: "beer",
    label: "Beer",
  },
] satisfies TInputOptionItem[];
</script>
```
:::

::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
- The `<bs-button-toggle>` tag still works, but has been deprecated since v2.0.0.
- Never assign a single datasource to multiple `<bs-toggle-button>`. It may cause 
  unwanted bug or duplicate ID attribute.
:::

<!-- @include: @/components/contextual-color-info.md -->

## Checked Icon

With the help of slot `icon` you can add dynamic checked icon.

<SmallNote color="teal">Added in v2.0.1</SmallNote>

::: BlockVue {title="Toggle Button Checked Icon" file="./docs/components/buttons/js/toggle-button-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-sm-2">
    <div class="row">
      <label class="col-md-3 col-form-label">Favorite Drink</label>
      <div class="col-md">
        <bs-toggle-button v-model="favoriteDrink" :items="favoriteDrinks">
          <template #icon="item">
            <bs-svg-icon v-if="item?.value === favoriteDrink" icon="check" />
          </template>
        </bs-toggle-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const favoriteDrink = ref<string>();
const favoriteDrinks: TInputOptionItem[] = [
  {
    value: "tea",
    label: "Tea",
  },
  {
    value: "coffee",
    label: "Coffee",
  },
  {
    value: "beer",
    label: "Beer",
  },
];
</script>
```
:::


## Multiple Selection

**BsToggleButton** also support multiple selection mode. Use and define the 
`multiple` property explicitly to enable multiple selection mode. 

::: BlockVue {title="Toggle Button Multiple Selection" file="./docs/components/buttons/js/toggle-button-3.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-sm-2">
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Favorite Drink</label>
      <div class="col-md">
        <bs-toggle-button 
          v-model="favoriteDrink1" 
          :items="favoriteDrinks" 
          multiple></bs-toggle-button>
      </div>
    </div>
    <div class="row">
      <label class="col-md-3 col-form-label">Favorite Coffee</label>
      <div class="col-md">
        <bs-toggle-button 
          v-model="favoriteDrink2" 
          :items="favoriteCoffees" 
          multiple>
          <template #icon="item">
            <bs-svg-icon v-if="favoriteDrink2.includes(item?.value)" icon="check"></bs-svg-icon>
          </template>
        </bs-toggle-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const favoriteDrink1 = ref<string[]>([]);
const favoriteDrink2 = ref<string[]>([]);
const favoriteDrinks: TInputOptionItem[] = [
  {
    value: "tea",
    label: "Tea",
  },
  {
    value: "coffee",
    label: "Coffee",
  },
  {
    value: "beer",
    label: "Beer",
  },
];
const favoriteCoffees: TInputOptionItem[] = [
  {
    value: "Americano",
    label: "Americano",
  },
  {
    value: "Espresso",
    label: "Espresso",
  },
  {
    value: "Cappuccino",
    label: "Cappuccino",
  },
];
</script>
```
:::


## Style Variants

You can style the `<bs-toggle-button>` component to your own preference or use a style variant 
based on Google **Material Design 3** specifications. Example below show various 
built-in style variants and demonstrate how to put an icon inside the `<bs-toggle-button>`
and change the icon dynamically like a segmented buttons behaves.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {title="Toggle Buttons Style Variants" file="./docs/components/buttons/js/toggle-button-4.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-sm-2">
    <h5 class="mb-4">How is the weather today?</h5>
    <div class="row mb-4">
      <label class="col-md-3 col-form-label">Filled</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedWeather1" :items="weathers" color="primary">
          <template #icon="item">
            <bs-svg-icon :icon="item?.value === selectedWeather1 ? 'check' : item?.icon"></bs-svg-icon>
          </template>
        </bs-toggle-button>
      </div>
    </div>
    <div class="row mb-4">
      <label class="col-md-3 col-form-label">Filled Elevated</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedWeather2" :items="weathers" color="primary" raised>
          <template #icon="item">
            <bs-svg-icon :icon="item?.value === selectedWeather2 ? 'check' : item?.icon"></bs-svg-icon>
          </template>
        </bs-toggle-button>
      </div>
    </div>
    <div class="row mb-4">
      <label class="col-md-3 col-form-label">Filled Tonal</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedWeather3" :items="weathers" color="primary" tonal>
          <template #icon="item">
            <bs-svg-icon :icon="item?.value === selectedWeather3 ? 'check' : item?.icon"></bs-svg-icon>
          </template>
        </bs-toggle-button>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Outlined</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedWeather4" :items="weathers" color="primary" outlined>
          <template #icon="item">
            <bs-svg-icon :icon="item?.value === selectedWeather4 ? 'check' : item?.icon"></bs-svg-icon>
          </template>
        </bs-toggle-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const selectedWeather1 = ref<string>();
const selectedWeather2 = ref<string>();
const selectedWeather3 = ref<string>();
const selectedWeather4 = ref<string>();

// Never assign single datasource to multiple <bs-toggle-button>
const weathers: TInputOptionItem[] = [
  {
    value: "sunny",
    label: "Sunny",
    icon: "wb_sunny",
  },
  {
    value: "rain",
    label: "Rain",
    icon: "rainy",
  },
  {
    value: "heavy-rain",
    label: "Heavy Rain",
    icon: "thunderstorm",
  },
];
</script>
```
:::


### Combination {#style-variants-combination class="mt-lg-5"}

::: BlockVue {title="Toggle Buttons Style Variants - Combination" file="./docs/components/buttons/js/toggle-button-6.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-sm-2">
    <h5 class="mb-4">How is the weather today?</h5>
    <div class="row mb-4">
      <label class="col-md-3 col-form-label">Filled Round</label>
      <div class="col-md">
        <bs-toggle-button 
          v-model="selectedWeather6" 
          :items="weathers" 
          rounded
        >
          <template #icon="item">
            <bs-svg-icon :icon="item?.value === selectedWeather6 ? 'check' : item?.icon"></bs-svg-icon>
          </template>
        </bs-toggle-button>
      </div>
    </div>
    <div class="row mb-4">
      <label class="col-md-3 col-form-label">Filled Rectangle</label>
      <div class="col-md">
        <bs-toggle-button 
          v-model="selectedWeather7" 
          :items="weathers" 
          pill-off
        >
          <template #icon="item">
            <bs-svg-icon :icon="item?.value === selectedWeather7 ? 'check' : item?.icon"></bs-svg-icon>
          </template>
        </bs-toggle-button>
      </div>
    </div>
    <div class="row mb-4">
      <label class="col-md-3 col-form-label">Filled Round Tonal</label>
      <div class="col-md">
        <bs-toggle-button 
          v-model="selectedWeather8" 
          :items="weathers" 
          rounded 
          tonal
        >
          <template #icon="item">
            <bs-svg-icon :icon="item?.value === selectedWeather8 ? 'check' : item?.icon"></bs-svg-icon>
          </template>
        </bs-toggle-button>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Outlined Rounded</label>
      <div class="col-md">
        <bs-toggle-button 
          v-model="selectedWeather9" 
          :items="weathers" 
          outlined 
          rounded
        >
          <template #icon="item">
            <bs-svg-icon :icon="item?.value === selectedWeather9 ? 'check' : item?.icon"></bs-svg-icon>
          </template>
        </bs-toggle-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const selectedWeather6 = ref<string>();
const selectedWeather7 = ref<string>();
const selectedWeather8 = ref<string>();
const selectedWeather9 = ref<string>();

// Never assign single datasource to multiple <bs-toggle-button>
const weathers: TInputOptionItem[] = [
  {
    value: "sunny",
    label: "Sunny",
    icon: "wb_sunny",
  },
  {
    value: "rain",
    label: "Rain",
    icon: "rainy",
  },
  {
    value: "heavy-rain",
    label: "Heavy Rain",
    icon: "thunderstorm",
  },
];
</script>
```
:::

<!-- @include: @/components/icon-migration-info.md -->


## Usage Example

The following is an example that demonstrate more advanced use of the `<bs-toggle-button>`.

::: BlockVue {title="Toggle Button Usage - Advanced" file="./docs/components/buttons/js/toggle-button-5.js"}

```vue
<template>
  <bs-app class="p-2">
    <bs-card class="mobi-card mx-auto" border-off shadow>
      <bs-appbar class="bg-default-color">
        <bs-button color="light" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-light" title="Your Downloads"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light" mode="icon" icon="search" flat></bs-button>
      </bs-appbar>
      <bs-card-body class="flex flex-col pb-1">
        <bs-toggle-button
          v-model="selectedCategory"
          :items="categories"
          class="mt-3"
          outlined
        >
        <template #icon="item">
          <bs-svg-icon v-if="item?.value === selectedCategory" icon="check" />
        </template>
        </bs-toggle-button>
        <bs-list-view 
          class="mt-3" 
          style="--md-tile-padding-x: .5rem"
        > 
          <bs-list-tile 
            v-for="item in albums" 
            :key="item.title" 
            class="bg-purple-50 dark:bg-indigo/15 rounded-3 mb-2 my-album-tile"
          >
            <bs-list-tile-leading :img-src="item.cover" rounded></bs-list-tile-leading>
            <bs-list-tile-content>
              <bs-list-tile-title>
                {{ item.title }}
              </bs-list-tile-title>
              <bs-list-tile-subtitle>
                {{ item.size }}
              </bs-list-tile-subtitle>
            </bs-list-tile-content>
            <bs-list-tile-action center>
              <bs-button color="secondary" icon="play_circle" mode="icon" flat />
            </bs-list-tile-action>
          </bs-list-tile>
        </bs-list-view>
      </bs-card-body>
    </bs-card>
  </bs-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const selectedCategory = ref<string>("Songs");
const categories: TInputOptionItem[] = [
  {
    value: "Songs",
    label: "Songs",
  },
  {
    value: "Albums",
    label: "Albums",
  },
  {
    value: "Podcasts",
    label: "Podcasts",
  },
];
const albums = [
  {
    cover: "https://i.pinimg.com/736x/1b/fb/1b/1bfb1b68d38b4f6833188c7bc4d99d4d.jpg",
    title: "21st Century Strangers",
    size: "68 MB",
  },
  {
    cover: "https://i.pinimg.com/originals/70/59/f9/7059f9d0b79c34d77b1448a25c542171.jpg",
    title: "New Name",
    size: "72 MB",
  },
  {
    cover: "https://i.pinimg.com/originals/33/6d/ed/336ded540abb8c797125bfcb6491f5fd.jpg",
    title: "Not Me",
    size: "58 MB",
  },
  {
    cover: "https://i.pinimg.com/originals/8b/4f/7c/8b4f7cba6c4e6852857ae311b2aa01e3.jpg",
    title: "Mutter",
    size: "68 MB",
  },
  {
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fe529a64193929.5aca8500ba9ab.jpg",
    title: "True Love",
    size: "68 MB",
  },
];
</script>

<style>
.demo-wrapper {
  max-width: 100%;
  padding: 1rem;
}
.mobi-card { 
  max-width: 400px; 
}
.md-card > .md-appbar {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.my-album-tile {
  --md-tile-subtitle-color: #6c757d; 
  --md-tile-subtitle-font-size: .8rem; 
  --md-tile-title-font-weight: 500;
}
</style>

```
:::


## CSS Variables

The component css variables inherited from [BsButton](/components/buttons/button#css-variables) css variables.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| disabled | `Boolean` | `false`      | The component state. |
| color    | `String`  | `'default'`  | The component color appearance. <MdBadge color="info">Updated in v2.2.0</MdBadge> <br/><br/> Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light` and `dark`. |
| icon-position | `String` | `'left'` | <div style="min-width:370px"> The icon placement. Valid values are: `left` (before text), `right` (after text). </div> |
| icon-size     | `Number` |   | Render the icon at predefined size in pixel. <MdBadge color="info">v2.2.0</MdBadge> |
| id       | `String`  |              | Sets the component `ID`. This property value is auto generate. |
| items    | `TInputOptionItem[]` |   | Collection of input item properties. |
| model-value <Badge type="tip">v-model</Badge>  | `String`&#124;`Number`&#124;`Array` | | Value monitored by `v-model` that represents the selected value. <MdBadge color="info">v2.0.0</MdBadge> |
| multiple | `Boolean` | `false` | Enable multiple selection mode. The default is single selection mode. |
| name     | `String`  |         | The `<input>` element name. |
| outlined | `Boolean` | `false` | Enable ***outlined*** toggle button style. |
| pill <Badge type="warning">deprecated</Badge> | `Boolean` | `true`  | Enable ***rounded-pill*** toggle button style. |
| pill-off | `Boolean` | `false`  | Disable ***rounded-pill*** button style. <MdBadge color="info">v2.2.0</MdBadge> |
| raised   | `Boolean` | `false` | Enable ***elevated*** toggle button style. |
| readonly | `Boolean` | `false` | The component state. |
| rounded  | `Boolean` | `false` | Enable ***rounded*** toggle button style. <MdBadge color="info">v2.0.0</MdBadge> |
| size     | `String`  |         | Create the component with predefined size. Valid values are: `xs`, `sm`, `lg`. |
| toggle-color | `String`  |     | The selected button color (optional). <MdBadge color="info">Updated in v2.2.0</MdBadge> <br/><br/> Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light` and `dark`. |
| tonal    | `Boolean` | `false` | Enable ***filled tonal*** toggle button style. <MdBadge color="info">v2.0.4</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| update:model-value | ( value:`String`&#124;`Number`&#124;`String[]`&#124;`Number[]`) | Used to update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments | Description |
|---------|-----------|-------------|
| icon    | ( item:`TInputOptionItem`) | The outlet slot used to place custom icon. <MdBadge color="info">v2.0.1</MdBadge> |
| label   | ( item:`TInputOptionItem`) | The outlet slot used to place custom label. <MdBadge color="info">v2.0.1</MdBadge> |

</div>
  </BsTab>
</BsTabs>


### TInputOptionItem {#api-reference-input-option-item class="mt-lg-5"}

<div class="doc-api-reference mt-2">
<div class="doc-table-responsive doc-table-3cols">

| Property | Type      | Description |
|----------|-----------|-------------|
| value <Badge type="danger">required</Badge> | `String`&#124;`Number` | The item value. |
| label <Badge type="danger">required</Badge> | `String` | The item label. |
| id       | `String`   | Html `<input>` element ID. |
| name     | `String`   | Html `<input>` element name. It is used when `multiple` is `true`. |
| disabled | `Boolean`  | Html `<input>` element state. |
| readonly | `Boolean`  | Html `<input>` element state. |
| icon      | `String`  | <div style="min-width:425px"> The icon to display inside the button. <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `iconVariant` property. </div> |
| iconFlip  | `String`  | Flip the icon. Valid values are: `horizontal`, `vertical`, `both`. |
| iconPulse | `Boolean` | Apply ***pulse*** animation to the icon. |
| iconSize  | `Number`  | Render the icon at predefined size in pixel. |
| iconSpin  | `Boolean` | Apply ***spin*** animation to the icon. |
| iconRotation | `Number` | Rotate the icon. Valid values are: `90`, `180`, `270`. |
| iconVariant  | `String` | Use predefined icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <MdBadge color="info">v2.1.0</MdBadge> |

</div>
</div>

<style>
.md-list-tile.my-album-tile {
  --md-tile-subtitle-color: #6c757d; 
  --md-tile-subtitle-font-size: .8rem; 
  --md-tile-title-font-weight: 500;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TInputOptionItem } from "vue-mdbootstrap";

const favoriteDrink = ref<string>();
const favoriteDrink1 = ref<string[]>([]);
const favoriteDrink2 = ref<string[]>([]);
const selectedDrink = ref<string>();
const selectedWeather1 = ref<string>();
const selectedWeather2 = ref<string>();
const selectedWeather3 = ref<string>();
const selectedWeather4 = ref<string>();
const selectedWeather5 = ref<string>();
const selectedWeather6 = ref<string>();
const selectedWeather7 = ref<string>();
const selectedWeather8 = ref<string>();
const selectedWeather9 = ref<string>();
const selectedWeather10 = ref<string>();

const selectedCategory = ref("Songs");
const tabs1active = ref(0);

const drinkTypes = [
  {
    value: "tea",
    label: "Tea",
  },
  {
    value: "coffee",
    label: "Coffee",
  },
  {
    value: "beer",
    label: "Beer",
  },
] satisfies TInputOptionItem[];
const favoriteDrinks = [
  {
    value: "tea",
    label: "Tea",
  },
  {
    value: "coffee",
    label: "Coffee",
  },
  {
    value: "beer",
    label: "Beer",
  },
] satisfies TInputOptionItem[];
const favoriteCoffees = [
  {
    value: "Americano",
    label: "Americano",
  },
  {
    value: "Espresso",
    label: "Espresso",
  },
  {
    value: "Cappuccino",
    label: "Cappuccino",
  },
] satisfies TInputOptionItem[];
const weathers = [
  {
    value: "sunny",
    label: "Sunny",
    icon: "wb_sunny",
  },
  {
    value: "rain",
    label: "Rain",
    icon: "rainy",
  },
  {
    value: "heavy-rain",
    label: "Heavy Rain",
    icon: "thunderstorm",
  },
] satisfies TInputOptionItem[];
const categories = [
  {
    value: "Songs",
    label: "Songs",
  },
  {
    value: "Albums",
    label: "Albums",
  },
  {
    value: "Podcasts",
    label: "Podcasts",
  },
] satisfies TInputOptionItem[];
const albums = [
  {
    cover: "https://i.pinimg.com/736x/1b/fb/1b/1bfb1b68d38b4f6833188c7bc4d99d4d.jpg",
    title: "21st Century Strangers",
    size: "68 MB",
  },
  {
    cover: "https://i.pinimg.com/originals/70/59/f9/7059f9d0b79c34d77b1448a25c542171.jpg",
    title: "New Name",
    size: "72 MB",
  },
  {
    cover: "https://i.pinimg.com/originals/33/6d/ed/336ded540abb8c797125bfcb6491f5fd.jpg",
    title: "Not Me",
    size: "58 MB",
  },
  {
    cover: "https://i.pinimg.com/originals/8b/4f/7c/8b4f7cba6c4e6852857ae311b2aa01e3.jpg",
    title: "Mutter",
    size: "68 MB",
  },
  {
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fe529a64193929.5aca8500ba9ab.jpg",
    title: "True Love",
    size: "68 MB",
  },
];
</script>
