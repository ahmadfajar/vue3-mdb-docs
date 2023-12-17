---
outline: [2, 3]
---


# Toggle Button

::: lead
**BsToggleButton** is a group of buttons with toggle capability. It is primarily 
used to visualize options with different approaches, such as selecting options, 
switching views, or sorting elements.
:::


## Overview 

**BsToggleButton** component shares the same style variants as 
[BsButton](/components/button#style-variants). And if you like Google Material 
Design 3 - [Segmented Button](https://m3.material.io/components/segmented-buttons/overview)
style, you can choose a style variant that meet the ***Material Design 3 - 
Segmented Button*** specifications. 

**BsToggleButton** component is like HTML5 `<input>` element. This means that you 
can add attributes like `readonly`, or `disabled` and it will react to them to give the 
best experience. You can also use `v-model` directive to create two-way data bindings 
on the `model-value` property. This is useful to control or maintain the `model-value` property.

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVue {title="Toggle Buttons Example" file="./docs/components/scripts/toggle-button-1.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 p-3 bg-white rounded-3">
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

const selectedDrink = ref();
const drinks: TInputOptionItem[] = [
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

::: warning <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
The `<bs-button-toggle>` tag still works, but has been deprecated since v2.0.0.
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants 
and [Material Color](/reference/color-variants#material-colors) variants can be
applied to the `color` property.
:::


## Checked Icon

With the help of slot `icon` you can add dynamic checked icon.

<SmallNote color="teal">Added since v2.0.1</SmallNote>

::: BlockVue {title="Toggle Button with checked icon example" file="./docs/components/scripts/toggle-button-2.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 p-3 bg-white rounded-3">
    <div class="row">
      <label class="col-md-3 col-form-label">Favorite Drink</label>
      <div class="col-md">
        <bs-toggle-button v-model="favoriteDrink" :items="favoriteDrinks">
          <template #icon="item">
            <bs-icon-svg v-if="item?.value === favoriteDrink" icon="check" />
          </template>
        </bs-toggle-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const favoriteDrink = ref();
const favoriteDrinks: Ref<TInputOptionItem[]> = ref([
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
]);
</script>
```
:::


## Multiple Selection

**BsToggleButton** also support multiple selection mode. Use and define the 
`multiple` property explicitly to enable multiple selection mode. 

::: BlockVue {title="Toggle Buttons with multiple selection example" file="./docs/components/scripts/toggle-button-3.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 p-3 bg-white rounded-3">
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Favorite Drink</label>
      <div class="col-md">
        <bs-toggle-button v-model="favoriteDrink1" :items="favoriteDrinks" color="default-color" multiple />
      </div>
    </div>
    <div class="row">
      <label class="col-md-3 col-form-label">Favorite Coffee</label>
      <div class="col-md">
        <bs-toggle-button v-model="favoriteDrink2" :items="favoriteCoffees" color="default-color" multiple>
          <template #icon="item">
            <bs-icon-svg v-if="favoriteDrink2.includes(item?.value)" icon="check" />
          </template>
        </bs-toggle-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const favoriteDrink1 = ref([]);
const favoriteDrink2 = ref([]);
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
origin style variants and demonstrate how to put an icon inside the `<bs-toggle-button>`
and change the icon dynamically like segmented buttons behavior.

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVue {title="Toggle Buttons Style Variants" file="./docs/components/scripts/toggle-button-4.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 p-3 bg-white rounded-3">
    <h5 class="mb-4">How is the weather today?</h5>
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Filled</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedWeather1" :items="weathers" color="deep-purple">
          <template #icon="item">
            <bs-icon-svg :icon="item?.value === selectedWeather1 ? 'check' : item.icon" />
          </template>
        </bs-toggle-button>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Filled Rounded</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedWeather2" :items="weathers" color="deep-purple" :pill="false" rounded>
          <template #icon="item">
            <bs-icon-svg :icon="item?.value === selectedWeather2 ? 'check' : item.icon" />
          </template>
        </bs-toggle-button>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Filled Rectangle</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedWeather3" :items="weathers" color="deep-purple" :pill="false">
          <template #icon="item">
            <bs-icon-svg :icon="item?.value === selectedWeather3 ? 'check' : item.icon" />
          </template>
        </bs-toggle-button>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Filled Elevated</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedWeather4" :items="weathers" color="deep-purple" raised>
          <template #icon="item">
            <bs-icon-svg :icon="item?.value === selectedWeather4 ? 'check' : item.icon" />
          </template>
        </bs-toggle-button>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Filled Tonal</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedWeather5" :items="weathers" color="deep-purple" tonal>
          <template #icon="item">
            <bs-icon-svg :icon="item?.value === selectedWeather5 ? 'check' : item.icon" />
          </template>
        </bs-toggle-button>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Outlined</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedWeather6" :items="weathers" color="deep-purple" outlined>
          <template #icon="item">
            <bs-icon-svg :icon="item?.value === selectedWeather6 ? 'check' : item.icon" />
          </template>
        </bs-toggle-button>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-md-3 col-form-label">Flat</label>
      <div class="col-md">
        <bs-toggle-button v-model="selectedWeather7" :items="weathers" color="deep-purple" flat>
          <template #icon="item">
            <bs-icon-svg :icon="item?.value === selectedWeather7 ? 'check' : item.icon" />
          </template>
        </bs-toggle-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const selectedWeather1 = ref();
const selectedWeather2 = ref();
const selectedWeather3 = ref();
const selectedWeather4 = ref();
const selectedWeather5 = ref();
const selectedWeather6 = ref();
const selectedWeather7 = ref();

const weathers: TInputOptionItem[] = [
  {
    value: "sunny",
    label: "Sunny",
    icon: "wb_sunny",
  },
  {
    value: "rain",
    label: "Rain",
    icon: "wb_cloudy",
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


## Usage Example

The following is an example that demonstrate more advanced use of the `<bs-toggle-button>`.

::: BlockVue {title="Toggle Buttons Advanced Example" file="./docs/components/scripts/toggle-button-5.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <bs-app-container class="rounded-3" style="max-width: 450px">
      <bs-appbar class="bg-default-color">
        <bs-button color="light-grey" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-white" title="Your Downloads"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey" mode="icon" icon="search" flat></bs-button>
      </bs-appbar>
      <bs-container>
        <bs-card class="rounded-top-0">
          <bs-card-body class="d-flex flex-column pb-1">
            <bs-toggle-button
              v-model="selectedCategory"
              :items="categories"
              color="deep-purple"
              outlined
            >
            <template #icon="item">
              <bs-icon-svg v-if="item.value === selectedCategory" icon="check" />
            </template>
            </bs-toggle-button>
            <bs-list-view 
              class="mt-3" 
              style="--md-tile-padding-x: .5rem"
            > 
              <bs-list-tile 
                v-for="item in albums" 
                :key="item.title" 
                class="bg-purple lighten-5 rounded-3 mb-2 my-album-tile"
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
      </bs-container>
    </bs-app-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TInputOptionItem } from "vue-mdbootstrap";

const selectedCategory = ref("Songs");
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
.my-demo-wrapper {
  padding: 24px;
}
.md-list-tile.my-album-tile {
  --md-tile-subtitle-color: #6c757d; 
  --md-tile-subtitle-font-size: .8rem; 
  --md-tile-title-font-weight: 500;
}
</style>

```
:::


## CSS Variables

The component css variables inherited from [BsButton](/components/button#css-variables) css variables.

<SmallNote color="teal">Added since v2.0.0</SmallNote>


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| disabled | `Boolean` | `false`  | The component state. |
| color    | `String`  | `'default'` | The component color appearance. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used. |
| flat     | `Boolean` | `false`  | Enable ***flat*** toggle button style. |
| icon-position | `String` | `'left'` | The icon placement. Valid values are: `left` (before text), `right` (after text). |
| id       | `String`  |   | Sets the component `ID`. This property value is auto generate. |
| items    | `TInputOptionItem[]` |   | Collection of input item properties. |
| model-value <Badge type="tip">v-model</Badge>  | `String`/`Number`/`Boolean`/`Array` | | Value monitored by `v-model` that represents the selected value. <BsBadge color="info">v2.0.0</BsBadge> |
| multiple | `Boolean` | `false` | Enable multiple selection mode. The default is single selection mode. |
| name     | `String`  |   | The `<input>` element name. |
| outlined | `Boolean` | `false` | Enable ***outlined*** toggle button style. |
| pill     | `Boolean` | `true`  | Enable ***rounded-pill*** toggle button style. |
| raised   | `Boolean` | `false` | Enable ***elevated*** toggle button style. |
| readonly | `Boolean` | `false` | The component state. |
| rounded  | `Boolean` | `false` | Enable ***rounded*** toggle button style. |
| size     | `String`  |   | Create the component with predefined size. Valid values are: `xs`, `sm`, `lg`. |
| toggle-color | `String`  |   | The selected button color (optional). Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used. |
| tonal    | `Boolean` | `false` | Enable ***filled tonal*** toggle button style. <BsBadge color="info">v2.0.4</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| update:model-value | (`value`: `String`/`Number`/`Boolean`/`Array`) | Used to update the `model-value` property. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments | Description |
|---------|-----------|-------------|
| icon    | (`item: TInputOptionItem`) | The outlet slot used to place custom icon. <BsBadge color="info">v2.0.1</BsBadge> |
| label   | (`item: TInputOptionItem`) | The outlet slot used to place custom label. <BsBadge color="info">v2.0.1</BsBadge> |

</div>
  </BsTab>
</BsTabs>


### TInputOptionItem {class="mt-lg-5"}

The Input item has properties as described below:

<div class="doc-api-reference mt-0">
<div class="doc-table-responsive doc-table-3cols">

| Property | Type      | Description |
|----------|-----------|-------------|
| value <Badge type="danger">required</Badge> | `String`/`Number`/`Boolean` | The item value. |
| label <Badge type="danger">required</Badge> | `String` | The item label. |
| icon      | `String`  | The icon to display inside the button. Use any valid [Google Material Icon](https://fonts.google.com/icons?icon.set=Material+Icons) name. |
| iconFlip  | `String`  | Flip the icon. Valid values are: `horizontal`, `vertical`, `both`. |
| iconPulse | `Boolean` | Apply ***pulse*** animation to the icon. |
| iconSize  | `Number`  | Render the icon at predefined size in pixel. |
| iconSpin  | `Boolean` | Apply ***spin*** animation to the icon. |
| iconRotation | `Number` | Rotate the icon. Valid values are: `90`, `180`, `270`. |
| id       | `String`   | Html `<input>` element ID. |
| name     | `String`   | Html `<input>` element name. It is used when `multiple` is `true`. |
| disabled | `Boolean`  | Html `<input>` element state. |
| readonly | `Boolean`  | Html `<input>` element state. |

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

const favoriteDrink = ref();
const favoriteDrink1 = ref([]);
const favoriteDrink2 = ref([]);
const selectedDrink = ref();
const selectedWeather1 = ref();
const selectedWeather2 = ref();
const selectedWeather3 = ref();
const selectedWeather4 = ref();
const selectedWeather5 = ref();
const selectedWeather6 = ref();
const selectedWeather7 = ref();
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
];
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
];
const favoriteCoffees: Ref<TInputOptionItem[]> = ref([
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
]);
const weathers: TInputOptionItem[] = [
  {
    value: "sunny",
    label: "Sunny",
    icon: "wb_sunny",
  },
  {
    value: "rain",
    label: "Rain",
    icon: "wb_cloudy",
  },
  {
    value: "heavy-rain",
    label: "Heavy Rain",
    icon: "thunderstorm",
  },
];
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
