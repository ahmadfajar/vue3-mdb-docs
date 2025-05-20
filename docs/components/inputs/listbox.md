---
outline: [2, 3] 
description: A component that let users select one or more items from a displayed list.
---

# Listbox


::: lead
**BsListbox** is a component that let users select one or more items from a displayed list.
:::

<SmallNote color="teal">Added since v2.0.0</SmallNote>


## Overview

**BsListbox** component mimics the HTML List Box: `<select size="number">` element. 
This means that you can add attributes like `readonly`, or `disabled` and it will 
react to them to give the best experience. You can also use `v-model` directive to 
create two-way data bindings on the `model-value` property.

::: BlockVue {title="Basic Listbox Example" file="./docs/components/scripts/listbox-1.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="mb-3">
      <bs-listbox v-model="listbox1" :data-source="peopleSrc1" max-height="200"></bs-listbox>
    </div>
    <div>Selected value: <span class="fw-semibold">{{ listbox1 }}</span></div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const listbox1 = ref<number>();
const peopleSrc1: TDataSource = {
  proxy: new BsArrayStore(
    [
      { id: 1, name: "Sandra Adams" },
      { id: 2, name: "Ali Connors" },
      { id: 3, name: "Trevor Hansen" },
      { id: 4, name: "Tucker Smith" },
      { id: 5, name: "Britta Holt" },
      { id: 6, name: "Jane Smith" },
      { id: 7, name: "John Smith" },
      { id: 8, name: "Sandra Williams" },
    ],
    {
      idProperty: "id",
    }
  ),
  schema: { displayField: "name", valueField: "id" } as TDataListSchemaProps,
};

onUnmounted(() => {
  peopleSrc1.proxy.destroy();
});
</script>
```
:::

::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
Do not use the `model-value` property when using `v-model`.
:::


## Multiple Selection

`<bs-listbox>` support multiple selection. Multiple selection mode feature can be enabled using the 
`multiple` property explicitly.

::: BlockVue {title="Listbox Multi-Select Example" file="./docs/components/scripts/listbox-2.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="mb-3">
      <bs-listbox v-model="listbox2" :data-source="peopleSrc1" max-height="200" multiple></bs-listbox>
    </div>
    <div>Selected values: <span class="fw-semibold">{{ listbox2 }}</span></div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const listbox2 = ref<number[]>();
const peopleSrc1: TDataSource = {
  proxy: new BsArrayStore(
    [
      { id: 1, name: "Sandra Adams" },
      { id: 2, name: "Ali Connors" },
      { id: 3, name: "Trevor Hansen" },
      { id: 4, name: "Tucker Smith" },
      { id: 5, name: "Britta Holt" },
      { id: 6, name: "Jane Smith" },
      { id: 7, name: "John Smith" },
      { id: 8, name: "Sandra Williams" },
    ],
    {
      idProperty: "id",
    }
  ),
  schema: { displayField: "name", valueField: "id" } as TDataListSchemaProps,
};

onUnmounted(() => {
  peopleSrc1.proxy.destroy();
});
</script>
```
:::


### Using Checkbox {class="mt-lg-5"}

In multiple selection mode, the checkbox can be enabled via `use-checkbox` property.

::: BlockVue {title="Listbox Multi-Select with checkbox example" file="./docs/components/scripts/listbox-3.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="mb-3">
      <bs-listbox 
        v-model="listbox3" 
        :data-source="statesCA1" 
        multiple 
        use-checkbox>
      </bs-listbox>
    </div>
    <div>Selected values: <span class="fw-semibold">{{ listbox3 }}</span></div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource } from "vue-mdbootstrap";
import { BsStore } from "vue-mdbootstrap";

const listbox3 = ref<string[]>();
const statesCA1: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'CA', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

onUnmounted(() => {
  statesCA1.proxy.destroy();
});
</script>
```
:::


### Checkbox Position and Color {class="mt-lg-5"}

In multiple selection mode, the checkbox color can be changed via `checkbox-color` 
property and the position can be changed via `checkbox-position` property. Valid 
values for this property are: `left` (_default_), `right`. If these property is not 
defined, then default value will be used.

::: BlockVue {title="Listbox Multi-Select with checkbox example" file="./docs/components/scripts/listbox-4.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="mb-3">
      <bs-listbox 
        v-model="listbox4" 
        :data-source="statesCA2" 
        multiple 
        use-checkbox 
        checkbox-color="purple" 
        checkbox-position="right">
      </bs-listbox>
    </div>
    <div>Selected values: <span class="fw-semibold">{{ listbox4 }}</span></div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource } from "vue-mdbootstrap";
import { BsStore } from "vue-mdbootstrap";

const listbox4 = ref<string[]>();
const statesCA2: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'CA', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

onUnmounted(() => {
  statesCA2.proxy.destroy();
});
</script>
```
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants 
and [Material Color](/reference/color-variants#material-colors) variants can be
applied to the `checkbox-color` property.
:::


## Image Support

`<bs-listbox>` component supports displaying images or avatars. This feature can be
enabled using the `show-image` property explicitly and use the `imageField` property on 
the configuration schema to point to the image field in the datasource. By default, 
the value of property `imageField` is set to `image`.

::: BlockVue {title="Listbox with image example" file="./docs/components/scripts/listbox-5.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="mb-3">
      <bs-listbox 
        v-model="listbox5" 
        :data-source="peopleSrc2" 
        circle-image 
        show-image>
      </bs-listbox>
    </div>
    <div>Selected value: <span class="fw-semibold">{{ listbox5 }}</span></div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const listbox5 = ref<number>();
const peopleSrc2: TDataSource = {
  proxy: new BsArrayStore(
    [
      {
        id: 1,
        name: "Sandra Adams",
        avatar: "https://ahmadfajar.github.io/img/1.jpg",
      },
      {
        id: 2,
        name: "Ali Connors",
        avatar: "https://ahmadfajar.github.io/img/2.jpg",
      },
      {
        id: 3,
        name: "Trevor Hansen",
        avatar: "https://ahmadfajar.github.io/img/3.jpg",
      },
      {
        id: 4,
        name: "Tucker Smith",
        avatar: "https://ahmadfajar.github.io/img/4.jpg",
      },
      {
        id: 5,
        name: "Britta Holt",
        avatar: "https://ahmadfajar.github.io/img/5.jpg",
      },
      {
        id: 6,
        name: "Jane Smith",
        avatar: "https://ahmadfajar.github.io/img/3.jpg",
      },
      {
        id: 7,
        name: "John Smith",
        avatar: "https://ahmadfajar.github.io/img/2.jpg",
      },
      {
        id: 8,
        name: "Sandra Williams",
        avatar: "https://ahmadfajar.github.io/img/4.jpg",
      },
    ],
    {
      idProperty: "id",
    }
  ),
  schema: { displayField: "name", valueField: "id", imageField: "avatar" } as TDataListSchemaProps,
};

onUnmounted(() => {
  peopleSrc2.proxy.destroy();
});
</script>
```
:::


### Image Size And Shape {class="mt-lg-5"}

The size of images can be controlled via `image-size` property. Sets this property
to the desired numbers of pixels and the image will displayed according to this value. 
And use `rounded-image` or `circle-image` property to change its shape.

::: BlockVue {title="Listbox with image example" file="./docs/components/scripts/listbox-6.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="mb-3">
      <bs-listbox 
        v-model="listbox6" 
        :data-source="peopleSrc2" 
        image-size="32"
        rounded-image 
        show-image>
      </bs-listbox>
    </div>
    <div>Selected value: <span class="fw-semibold">{{ listbox6 }}</span></div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const listbox6 = ref<number>();
const peopleSrc2: TDataSource = {
  proxy: new BsArrayStore(
    [
      {
        id: 1,
        name: "Sandra Adams",
        avatar: "https://ahmadfajar.github.io/img/1.jpg",
      },
      {
        id: 2,
        name: "Ali Connors",
        avatar: "https://ahmadfajar.github.io/img/2.jpg",
      },
      {
        id: 3,
        name: "Trevor Hansen",
        avatar: "https://ahmadfajar.github.io/img/3.jpg",
      },
      {
        id: 4,
        name: "Tucker Smith",
        avatar: "https://ahmadfajar.github.io/img/4.jpg",
      },
      {
        id: 5,
        name: "Britta Holt",
        avatar: "https://ahmadfajar.github.io/img/5.jpg",
      },
      {
        id: 6,
        name: "Jane Smith",
        avatar: "https://ahmadfajar.github.io/img/3.jpg",
      },
      {
        id: 7,
        name: "John Smith",
        avatar: "https://ahmadfajar.github.io/img/2.jpg",
      },
      {
        id: 8,
        name: "Sandra Williams",
        avatar: "https://ahmadfajar.github.io/img/4.jpg",
      },
    ],
    {
      idProperty: "id",
    }
  ),
  schema: { displayField: "name", valueField: "id", imageField: "avatar" } as TDataListSchemaProps,
};

onUnmounted(() => {
  peopleSrc2.proxy.destroy();
});
</script>
```
:::


## Custom List Items

`<bs-listbox>` list items can be organized in different ways by providing the custom 
template `option-item` slot.

::: BlockVue {title="Listbox with custom template example" file="./docs/components/scripts/listbox-7.js"}

```vue
<template>
  <div class="bg-white rounded-3 p-4 w-100">
    <div class="mb-3">
      <bs-listbox 
        v-model="listbox7" 
        :data-source="productSrc" 
        color="info-color-dark"
        item-separator>
        <template #option-item="{ item }">
          <bs-list-tile-title>
            <span>{{ item.ProductName }}</span>
            <span class="float-end fw-light small">${{ item.UnitPrice }}</span>
          </bs-list-tile-title>
          <bs-list-tile-subtitle>
            Stock : {{ item.UnitsInStock }}
          </bs-list-tile-subtitle>
        </template>
      </bs-listbox>
    </div>
    <div>Selected value: <span class="fw-semibold">{{ listbox7 }}</span></div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource } from "vue-mdbootstrap";
import { BsStore } from "vue-mdbootstrap";

const listbox7 = ref<number>();
const productSrc: TDataSource = {
  proxy: new BsStore({
    idProperty: 'ProductID',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/product.json',
    },
  }),
  schema: { displayField: 'ProductName', valueField: 'ProductID' },
};

onUnmounted(() => {
  productSrc.proxy.destroy();
});
</script>
```
:::


## CSS Variables 

```scss
--md-searchbox-padding-x: 0.75rem;
--md-searchbox-padding-y: 0.5rem;
--md-searchbox-border-color: #{$gray-500};
--md-searchbox-focused-border-color: #{$default-active-bgcolor};
--md-searchbox-font-size: 14px;
--md-searchbox-text-color: #{$gray-900};
--md-searchbox-focused-shadow-rgba: #{rgba($default-active-bgcolor, 0.2)};

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| autoload          | `Boolean` | `true`  | Autoload data from the configured `dataSource`, default is `true`. <BsBadge color="info">v2.0.5</BsBadge> |
| borderless        | `Boolean` | `false` | Hide the Listbox container borders. |
| checkbox-color    | `String`  | `'default-color'` | Sets the Listbox checkbox color. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used. |
| checkbox-position | `String`  | `'left'`  | Sets the Listbox checkbox position. Valid values are: `left`, `right`. |
| circle-image      | `Boolean` | `false`   | Display image with **_circle_** shape for each item that has image property. |
| color             | `String`  | `'white'` | Define the Listbox background color. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants and [Material Color](/reference/color-variants#material-colors) variants can be used. |
| data-source <Badge type="danger">required</Badge> | `TDataSource` | | Sets the data source configuration. |
| disabled          | `Boolean` | `false`   | Put the component in _disabled_ state and sets the `<select>` element `disabled` attribute. |
| empty-data-message | `String` | `'No data to display.'` | Sets the **_no data message_** when the Listbox is empty. |
| image-size        | `Number`  | `48`    | Define the image size for each Listbox items when `show-image` is enabled. |
| item-separator    | `Boolean` | `false` | Show or hide the Listbox item separator. |
| max-height        | `Number`  | `300`   | Sets the Listbox container maximum height. |
| min-search-chars  | `Number`  | `2`     | Minimum characters to check before start filtering the Listbox items. |
| min-search-length | `Number`  | `15`    | Minimum number of items to activate the search box. |
| model-value <Badge type="tip">v-model</Badge> | `String`/`Number`/`Array` |  | Monitored by `v-model` to maintain this field value. |
| multiple      | `Boolean` | `false` | Enable/disable multi selection mode. |
| not-found-message | `String` | `'Data not found.'` | Sets the **_not found message_** when searching returns no result. |
| readonly      | `Boolean` | `false` | Put the component in _readonly_ state and sets the `<select>` element `readonly` attribute. |
| rounded-image | `Boolean` | `false` | Display image with **_rounded_** shape for each item that has image property. |
| search-label  | `String`  | `'Search...'` | The search box text label. |
| search-text <Badge type="tip">v-model</Badge> | `String` |      | Monitored by `v-model` to maintain the search box keyword. |
| show-image   | `Boolean` | `false` | Show or hide image if Listbox item's object contains `image` property. |
| use-checkbox | `Boolean` | `false` | Use checkbox for multi selection mode. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| data-bind | ( items:`Object[]`) | Triggers after the data has been fetched. |
| data-error | ( error:`Object`) | Triggers when error loading data items. |
| data-filter | ( items:`Object[]`) | Triggers after the Listbox data items is filtered. |
| deselect | ( value:`Object`) | Triggers when an item is deselected. |
| select | ( value:`Object`) | Triggers when an item is selected. |
| update:model-value | ( value:`String`/`Number`/`Array`) | Triggers when the Listbox value is updated. |
| update:search-text | ( value:`String`) | Triggers when the Listbox search value is updated. |
| update:selected-value | ( selected:`Object[]`) | Triggers when the Listbox selected value is updated. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments | Description |
|---------|-----------|-------------|
| option-item    | ( item:`Object`, index:`Number`) | The outlet slot used to customize listbox items appearance. |
| empty-data-msg | | The outlet slot used to place custom message when listbox is empty. |
| not-found-msg  | | The outlet slot used to place custom message when filtering listbox items returns no result. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from 'vue-mdbootstrap';
import { BsArrayStore, BsStore } from 'vue-mdbootstrap';

const tabs1active = ref(0);
const listbox1 = ref<number>();
const listbox2 = ref<number[]>();
const listbox3 = ref<string[]>();
const listbox4 = ref<string[]>();
const listbox5 = ref<number>();
const listbox6 = ref<number>();
const listbox7 = ref<number>();

const peopleSrc1: TDataSource = {
  proxy: new BsArrayStore(
    [
      { id: 1, name: 'Sandra Adams' },
      { id: 2, name: 'Ali Connors' },
      { id: 3, name: 'Trevor Hansen' },
      { id: 4, name: 'Tucker Smith' },
      { id: 5, name: 'Britta Holt' },
      { id: 6, name: 'Jane Smith' },
      { id: 7, name: 'John Smith' },
      { id: 8, name: 'Sandra Williams' },
    ],
    {
      idProperty: 'id',
    }
  ),
  schema: { displayField: 'name', valueField: 'id' } as TDataListSchemaProps,
};

const peopleSrc2: TDataSource = {
  proxy: new BsArrayStore(
    [
      {
        id: 1,
        name: 'Sandra Adams',
        avatar: 'https://ahmadfajar.github.io/img/1.jpg',
      },
      {
        id: 2,
        name: 'Ali Connors',
        avatar: 'https://ahmadfajar.github.io/img/2.jpg',
      },
      {
        id: 3,
        name: 'Trevor Hansen',
        avatar: 'https://ahmadfajar.github.io/img/3.jpg',
      },
      {
        id: 4,
        name: 'Tucker Smith',
        avatar: 'https://ahmadfajar.github.io/img/4.jpg',
      },
      {
        id: 5,
        name: 'Britta Holt',
        avatar: 'https://ahmadfajar.github.io/img/5.jpg',
      },
      {
        id: 6,
        name: 'Jane Smith',
        avatar: 'https://ahmadfajar.github.io/img/3.jpg',
      },
      {
        id: 7,
        name: 'John Smith',
        avatar: 'https://ahmadfajar.github.io/img/2.jpg',
      },
      {
        id: 8,
        name: 'Sandra Williams',
        avatar: 'https://ahmadfajar.github.io/img/4.jpg',
      },
    ],
    {
      idProperty: 'id',
    }
  ),
  schema: { displayField: 'name', valueField: 'id', imageField: 'avatar' } as TDataListSchemaProps,
};

const statesCA1: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'CA', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const statesCA2: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'CA', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const productSrc: TDataSource = {
  proxy: new BsStore({
    idProperty: 'ProductID',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/product.json',
    },
  }),
  schema: { displayField: 'ProductName', valueField: 'ProductID' },
};

onUnmounted(() => {
  peopleSrc1.proxy.destroy();
  peopleSrc2.proxy.destroy();
  productSrc.proxy.destroy();
  statesCA1.proxy.destroy();
  statesCA2.proxy.destroy();
});
</script>
