---
outline: [2, 3] 
description: Combobox is a form field component that let users select one or more items from a dropdown displayed list. 
---

# Combobox

::: lead
**BsCombobox** is a form field component that let users select one or more items 
from a dropdown displayed list.
:::


## Overview

**BsCombobox** uses [BsListbox](/components/inputs/listbox) and 
[BsPopover](/components/overlays/popover) components internally and mimics like 
HTML combobox: `<select>` element. This means that you can add attributes like 
`readonly`, `disabled`, `required` and it will react to them to give the best 
experience. You can also use `v-model` directive to create two-way data bindings 
on the `model-value` property.

::: BlockVue {clientOnly="true" title="Combobox Overview" file="./docs/components/inputs/js/combobox-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-combobox v-model="employee1" :data-source="peopleSrc1">
      <label class="col-md-3 col-form-label">Field Label</label>
    </bs-combobox>
    <bs-combobox v-model="employee1" :data-source="peopleSrc1" readonly>
      <label class="col-md-3 col-form-label">State Readonly</label>
    </bs-combobox>
    <bs-combobox v-model="employee1" :data-source="peopleSrc1" disabled>
      <label class="col-md-3 col-form-label">State Disabled</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const employee1 = ref<number>();
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

<!-- @include: @/components/model-value-important.md -->


## Style Variants

You can style `<bs-combobox>` to your own preference or use a style variant 
based on Google **Material Design 2** or **Material Design 3** specifications. 

### Default {#style-variants-default}

You can style `<bs-combobox>` that follows **Google Material Design 2** specifications
by using `floating-label` property explicitly.

::: BlockVue {clientOnly="true" title="Combobox Style Variants - Default" file="./docs/components/inputs/js/combobox-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-combobox v-model="employee2" :data-source="peopleSrc1">
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-combobox>
    <bs-combobox v-model="employee3" :data-source="peopleSrc1" floating-label>
      <label>Field Label</label>
    </bs-combobox>
    <bs-combobox 
      v-model="employee4" 
      :data-source="peopleSrc1" 
      placeholder="Select employee" 
      floating-label
    >
      <label>Field Label</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const employee2 = ref<number>();
const employee3 = ref<number>();
const employee4 = ref<number>();
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


### Filled {#style-variants-filled class="mt-lg-5"}

Use `filled` property explicitly to enable `<bs-combobox>` with **solid fill style**.
And when combined with `floating-label` property, `<bs-combobox>` will have a style 
that follows the **Google Material Design 3** specifications.

::: BlockVue {clientOnly="true" title="Combobox Style Variants - Filled" file="./docs/components/inputs/js/combobox-3.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-combobox v-model="employee5" :data-source="peopleSrc1" filled>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-combobox>
    <bs-divider></bs-divider>
    <bs-combobox 
      v-model="employee6" 
      :data-source="peopleSrc1" 
      filled 
      floating-label
    >
      <label>Field Label</label>
    </bs-combobox>
    <bs-combobox 
      v-model="employee7" 
      :data-source="peopleSrc1" 
      placeholder="Select employee" 
      filled
      floating-label
    >
      <label>Field Label</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const employee5 = ref<number>();
const employee6 = ref<number>();
const employee7 = ref<number>();
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


### Outlined {#style-variants-outlined class="mt-lg-5"}

Use `outlined` property explicitly to enable `<bs-combobox>` with **outline style**.
And when combined with `floating-label` property, `<bs-combobox>` will have a style 
that follows the **Google Material Design 3** specifications.

::: BlockVue {clientOnly="true" title="Combobox Style Variants - Outlined" file="./docs/components/inputs/js/combobox-4.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-combobox v-model="employee8" :data-source="peopleSrc1" outlined>
      <label class="col-md-3 col-form-label">Classic Field</label>
    </bs-combobox>
    <bs-divider></bs-divider>
    <bs-combobox 
      v-model="employee9" 
      :data-source="peopleSrc1" 
      outlined 
      floating-label
    >
      <label>Field Label</label>
    </bs-combobox>
    <bs-combobox 
      v-model="employee10" 
      :data-source="peopleSrc1" 
      placeholder="Select employee" 
      outlined
      floating-label
    >
      <label>Field Label</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const employee8 = ref<number>();
const employee9 = ref<number>();
const employee10 = ref<number>();
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


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily. 

::: BlockVue {clientOnly="true" title="Clearable Combobox" file="./docs/components/inputs/js/combobox-5.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-combobox 
      v-model="employee11" 
      :data-source="peopleSrc1" 
      floating-label 
      clear-button
    >
      <label>Employee</label>
    </bs-combobox>
    <bs-combobox 
      v-model="employee12" 
      :data-source="peopleSrc1" 
      filled 
      floating-label 
      clear-button
    >
      <label>Employee</label>
    </bs-combobox>
    <bs-combobox 
      v-model="employee13" 
      :data-source="peopleSrc1" 
      outlined
      floating-label
      clear-button
    >
      <label>Employee</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const employee11 = ref<number>();
const employee12 = ref<number>();
const employee13 = ref<number>();
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


## Multiple Selection

`<bs-combobox>` support multiple selection. Multiple selection feature can be enabled using the 
`multiple` property explicitly.

::: BlockVue {clientOnly="true" title="Combobox Multi-Selection" file="./docs/components/inputs/js/combobox-6.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-combobox 
      v-model="state1" 
      :data-source="statesUS1" 
      clear-button
      floating-label 
      multiple
    >
      <label>States</label>
    </bs-combobox>
    <bs-combobox 
      v-model="state2" 
      :data-source="statesUS2" 
      clear-button
      filled 
      floating-label 
      multiple
    >
      <label>States</label>
    </bs-combobox>
    <bs-combobox 
      v-model="state3" 
      :data-source="statesUS3" 
      clear-button
      outlined
      floating-label
      multiple
    >
      <label>States</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource } from "vue-mdbootstrap";
import { BsStore } from "vue-mdbootstrap";

const state1 = ref<string[]>();
const state2 = ref<string[]>();
const state3 = ref<string[]>();
const statesUS1: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS2: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS3: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

onUnmounted(() => {
  statesUS1.proxy.destroy();
  statesUS2.proxy.destroy();
  statesUS3.proxy.destroy();
});
</script>

```
:::


### Checkbox Position and Color {class="mt-lg-5"}

In multiple selection mode, the checkbox color can be changed via `checkbox-color` 
property and the position can be changed via `checkbox-position` property. Valid 
values for this property are: `left` (_default_), `right`. If these property is not 
defined, then default value will be used.

::: BlockVue {clientOnly="true" title="Combobox Multi-Selection - Checkbox Position and Color" file="./docs/components/inputs/js/combobox-7.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-combobox 
      v-model="state4" 
      :data-source="statesUS4" 
      checkbox-color="warning"
      checkbox-position="right"
      clear-button
      filled
      floating-label
      multiple
    >
      <label>States</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource } from "vue-mdbootstrap";
import { BsStore } from "vue-mdbootstrap";

const state4 = ref<string[]>();
const statesUS4: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

onUnmounted(() => {
  statesUS4.proxy.destroy();
});
</script>

```
:::


### Chips Mode {class="mt-lg-5"}

In multiple selection mode, the selected items can be display as chips. Use property
`chip-enabled` explicitly to display the selected items as chips. Additionally you
can use `chip-color` property to set the chips color and `chip-outlined` or `chip-pill`
to style the chips appearance.

<SmallNote color="teal">Updated in v2.0.0</SmallNote>

::: BlockVue {clientOnly="true" title="Combobox Multi-Selection - Chips Mode" file="./docs/components/inputs/js/combobox-8.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-combobox 
      v-model="state5" 
      :data-source="statesUS5" 
      chip-enabled
      filled
      floating-label
      clear-button
      multiple
    >
      <label>States</label>
    </bs-combobox>
    <bs-combobox 
      v-model="state6" 
      :data-source="statesUS6" 
      chip-color="default"
      chip-enabled
      chip-pill
      filled
      floating-label
      clear-button
      multiple
    >
      <label>States</label>
    </bs-combobox>
    <bs-combobox 
      v-model="state7" 
      :data-source="statesUS7" 
      chip-enabled
      chip-outlined
      outlined
      floating-label
      clear-button
      multiple
    >
      <label>States</label>
    </bs-combobox>
    <bs-combobox 
      v-model="state8" 
      :data-source="statesUS8" 
      chip-color="default"
      chip-enabled
      chip-outlined
      chip-pill
      outlined
      floating-label
      clear-button
      multiple
    >
      <label>States</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource } from "vue-mdbootstrap";
import { BsStore } from "vue-mdbootstrap";

const state5 = ref<string[]>();
const state6 = ref<string[]>();
const state7 = ref<string[]>();
const state8 = ref<string[]>();
const statesUS5: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS6: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS7: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};
const statesUS8: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

onUnmounted(() => {
  statesUS5.proxy.destroy();
  statesUS6.proxy.destroy();
  statesUS7.proxy.destroy();
  statesUS8.proxy.destroy();
});
</script>

```
:::


## Cascade Support

`<bs-combobox>` component supports cascade selection or parent-child relationship  
when there are two or more `<bs-combobox>` components.

To activate this feature, sets the `parent-value` property on child component 
to the parent component `model-value` and use the `cascadeField` property on 
the configuration schema to point to the field that has relation to the parent. 
By default, the value of `cascadeField` property is set to `parent`. 

::: BlockVue {clientOnly="true" title="Combobox Cascade Support" file="./docs/components/inputs/js/combobox-9.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-combobox 
      v-model="category" 
      :data-source="categorySrc" 
      filled
      floating-label
    >
      <label>Product Category</label>
    </bs-combobox>
    <bs-combobox 
      v-model="product" 
      :data-source="productSrc" 
      :parent-value="category"
      filled
      floating-label
    >
      <label>Product Name</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsStore } from "vue-mdbootstrap";

const category = ref<number>();
const product = ref<number>();

const categorySrc: TDataSource = {
  proxy: new BsStore({
    idProperty: "CategoryID",
    dataProperty: "data",
    totalProperty: "total",
    remoteSort: false,
    remoteFilter: false,
    restProxy: {
      browse: "https://ahmadfajar.github.io/data/categories.json",
    },
  }),
  schema: { displayField: "CategoryName", valueField: "CategoryID" } as TDataListSchemaProps,
};

const productSrc: TDataSource = {
  proxy: new BsStore({
    idProperty: "ProductID",
    dataProperty: "data",
    totalProperty: "total",
    remoteSort: false,
    remoteFilter: false,
    restProxy: {
      browse: "https://ahmadfajar.github.io/data/products.json",
    },
  }),
  schema: {
    displayField: "ProductName",
    valueField: "ProductID",
    cascadeField: "CategoryID",
  } as TDataListSchemaProps,
};

onUnmounted(() => {
  categorySrc.proxy.destroy();
  productSrc.proxy.destroy();
});
</script>

```
:::


## Image Support

`<bs-combobox>` component supports displaying images or avatars. This feature can be
enabled using the `show-image` property explicitly and use `imageField` property on 
the configuration schema to point to the image field in the datasource. By default, 
the value of property `imageField` is set to `image`.

::: BlockVue {clientOnly="true" title="Combobox Image Support" file="./docs/components/inputs/js/combobox-10.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-combobox 
      v-model="employee14" 
      :data-source="peopleSrc2" 
      filled
      floating-label
      circle-image 
      show-image
    >
      <label>Employee</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const employee14 = ref<number>();
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


### Image Size and Shape {class="mt-lg-5"}

The size of images can be controlled via `image-size` property. Sets this property
to the desired numbers of pixels and the image will displayed according to this value. 
And use `rounded-image` or `circle-image` property to change its shape.

::: BlockVue {clientOnly="true" title="Combobox Image Support - Image Size and Shape" file="./docs/components/inputs/js/combobox-11.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-combobox 
      v-model="employee15" 
      :data-source="peopleSrc2" 
      image-size="32"
      filled
      floating-label
      rounded-image 
      show-image
    >
      <label>Employee</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const employee15 = ref<number>();
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


## Hover Display Support

The Listbox popup can be displayed using hover instead of clicking with the `open-on-hover` property.

::: BlockVue {clientOnly="true" title="Combobox Hover Display Support" file="./docs/components/inputs/js/combobox-12.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-combobox 
      v-model="employee16" 
      :data-source="peopleSrc1" 
      filled
      floating-label
      open-on-hover
    >
      <label>Employee</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const employee16 = ref<number>();
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

onUnmounted(() => {
  peopleSrc1.proxy.destroy();
});
</script>

```
:::


## Help Text

The `help-text` property on `<bs-combobox>` adds an help text beneath the combobox.
And sets the `persistent-help-text` property to `false` will make the help text 
visible only when the combobox is focused.

::: BlockVue {clientOnly="true" title="Combobox with Help Text" file="./docs/components/inputs/js/combobox-13.js"}

```vue
<template>
  <div class="demo-wrapper w-full flex flex-col md-gap-5 p-2 px-md-3">
    <bs-combobox 
      v-model="employee17" 
      :data-source="peopleSrc1" 
      help-text="Select employee of the month"
      filled
      floating-label
    >
      <label>Employee</label>
    </bs-combobox>
    <bs-combobox 
      v-model="employee18" 
      :data-source="peopleSrc1" 
      :persistent-help-text="false"
      help-text="Select employee of the month"
      filled
      floating-label
    >
      <label>Employee</label>
    </bs-combobox>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const employee17 = ref<number>();
const employee18 = ref<number>();
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

onUnmounted(() => {
  peopleSrc1.proxy.destroy();
});
</script>

```
:::


## Icons

The properties `prepend-icon`, `prepend-icon-outer`, `append-icon` and `append-icon-outer` 
provides the ability to add icon to `<bs-combobox>`.

Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon style variant. 

<SmallNote color="teal">Updated in v2.1.0</SmallNote>

::: BlockVue {clientOnly="true" title="Combobox with Icon" file="./docs/components/inputs/js/combobox-14.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-3">
        <bs-combobox
          v-model="employee19"
          :data-source="peopleSrc1"
          prepend-icon="person_filled"
          floating-label
        >
          <label>Prepend</label>
        </bs-combobox>
      </div>
      <div class="col mb-3">
        <bs-combobox
          v-model="employee20"
          :data-source="peopleSrc1"
          append-icon="person_filled"
          floating-label
        >
          <label>Append</label>
        </bs-combobox>
      </div>
      <div class="col mb-3">
        <bs-combobox
          v-model="employee21"
          :data-source="peopleSrc1"
          prepend-icon-outer="person"
          floating-label
        >
          <label>Prepend Outer</label>
        </bs-combobox>
      </div>
      <div class="col mb-3">
        <bs-combobox
          v-model="employee22"
          :data-source="peopleSrc1"
          append-icon-outer="person"
          floating-label
        >
          <label>Append Outer</label>
        </bs-combobox>
      </div>
      <div class="col mb-3">
        <bs-combobox
          v-model="employee23"
          :data-source="peopleSrc1"
          prepend-icon="person_filled"
          floating-label
          filled
        >
          <label>Prepend</label>
        </bs-combobox>
      </div>
      <div class="col mb-3">
        <bs-combobox
          v-model="employee24"
          :data-source="peopleSrc1"
          append-icon="person_filled"
          floating-label
          filled
        >
          <label>Append</label>
        </bs-combobox>
      </div>
      <div class="col mb-3">
        <bs-combobox
          v-model="employee25"
          :data-source="peopleSrc1"
          prepend-icon-outer="person"
          floating-label
          filled
        >
          <label>Prepend Outer</label>
        </bs-combobox>
      </div>
      <div class="col mb-3">
        <bs-combobox
          v-model="employee26"
          :data-source="peopleSrc1"
          append-icon-outer="person"
          floating-label
          filled
        >
          <label>Append Outer</label>
        </bs-combobox>
      </div>
      <div class="col mb-3">
        <bs-combobox
          v-model="employee27"
          :data-source="peopleSrc1"
          prepend-icon="person_filled"
          floating-label
          outlined
        >
          <label>Prepend</label>
        </bs-combobox>
      </div>
      <div class="col mb-3">
        <bs-combobox
          v-model="employee28"
          :data-source="peopleSrc1"
          append-icon="person_filled"
          floating-label
          outlined
        >
          <label>Append</label>
        </bs-combobox>
      </div>
      <div class="col mb-3 mb-md-0">
        <bs-combobox
          v-model="employee29"
          :data-source="peopleSrc1"
          prepend-icon-outer="person"
          floating-label
          outlined
        >
          <label>Prepend Outer</label>
        </bs-combobox>
      </div>
      <div class="col">
        <bs-combobox
          v-model="employee30"
          :data-source="peopleSrc1"
          append-icon-outer="person"
          floating-label
          outlined
        >
          <label>Append Outer</label>
        </bs-combobox>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import type { TDataSource, TDataListSchemaProps } from "vue-mdbootstrap";
import { BsArrayStore } from "vue-mdbootstrap";

const employee19 = ref<number>();
const employee20 = ref<number>();
const employee21 = ref<number>();
const employee22 = ref<number>();
const employee23 = ref<number>();
const employee24 = ref<number>();
const employee25 = ref<number>();
const employee26 = ref<number>();
const employee27 = ref<number>();
const employee28 = ref<number>();
const employee29 = ref<number>();
const employee30 = ref<number>();
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

<!-- @include: @/components/icon-migration-info.md -->


## Usage Example

The following is an example that demonstrate more advanced use of the `<bs-combobox>` 
with form validation.

::: BlockVuelidate {clientOnly="true" title="Combobox Usage" file="./docs/components/inputs/js/combobox-15.js"}

```vue
<template>
  <bs-app class="p-2">
    <bs-card class="mobi-card w-full mx-auto" shadow>
      <bs-appbar class="bg-default-color">
        <bs-button color="light" icon="arrow_back" mode="icon" flat></bs-button>
        <bs-appbar-title class="text-light" title="Edit Contact"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light" icon="more_vert" mode="icon" flat></bs-button>
      </bs-appbar>
      <form novalidate>
        <bs-card-body class="border-b">
          <div class="my-3">
            <bs-text-field
              v-model="contact.fullName"
              :validator="fullnameValidator"
              outlined
              floating-label
              required
              validation-icon
            >
              <label>Full Name</label>
            </bs-text-field>
          </div>
          <div class="mb-3">
            <bs-text-field
              v-model="contact.email"
              :validator="emailValidator"
              type="email"
              outlined
              floating-label
              required
              validation-icon
            >
              <label>Email</label>
            </bs-text-field>
          </div>
          <div class="mb-3">
            <bs-text-area
              v-model="contact.address"
              :validator="addressValidator"
              auto-grow
              outlined
              floating-label
              required
              validation-icon
            >
              <label>Address</label>
            </bs-text-area>
          </div>
          <div class="mb-2">
            <bs-combobox
              v-model="contact.state"
              :data-source="statesSrc"
              :validator="stateValidator"
              outlined
              floating-label
              required
              validation-icon
            >
              <label>State</label>
            </bs-combobox>
          </div>
        </bs-card-body>
        <bs-card-body class="flex justify-between">
          <bs-button style="width: 110px" @click="submit($notification)">
            <bs-spin-loader
              v-if="loading"
              role="status"
              size="24"
              thickness="3">
            </bs-spin-loader>
            <span v-else>Submit</span>
          </bs-button>
          <bs-button style="width: 110px" tonal @click="cancel()">Clear</bs-button>
        </bs-card-body>
      </form>
    </bs-card>
    <bs-notification></bs-notification>
  </bs-app>
</template>

<script lang="ts" setup>
import type { Validation } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import type { Ref, ComputedRef } from "vue";
import { computed, onUnmounted, reactive, ref, unref } from "vue";
import { BsStore, Helper, type INotificationProvider } from "vue-mdbootstrap";

const loading = ref(false);

const statesSrc: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const contact = reactive({
  fullName: null,
  email: null,
  address: null,
  state: null,
});
const contactRules = {
  fullName: { required },
  email: { required, email },
  address: { required },
  state: { required },
};

function requiredFieldValidator(
  v$: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean };
  messages: { required: string };
  hasError: boolean;
}> {
  const obj = unref(v$)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: { required: obj.required.$message },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
    },
  }));
}

function emailFieldValidator(
  v$: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; email: boolean };
  messages: { required: string; email: string };
  hasError: boolean;
}> {
  const obj = unref(v$)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: {
      required: obj.required.$message,
      email: "Email address format is invalid.",
    },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      email: unref(obj.email.$invalid),
    },
  }));
}

const v$ = useVuelidate(contactRules, contact);
const fullnameValidator = requiredFieldValidator(v$, "fullName");
const emailValidator = emailFieldValidator(v$, "email");
const addressValidator = requiredFieldValidator(v$, "address");
const stateValidator = requiredFieldValidator(v$, "state");

function submit(notification: INotificationProvider) {
  const validator = unref(v$);
  validator.$touch();

  if (!validator.$invalid) {
    loading.value = true;
    Helper.defer(() => {
      loading.value = false;
      notification.success("Data has been sent.");
    }, 1000);
  }
}

function cancel() {
  unref(v$).$reset();
  contact.fullName = null;
  contact.email = null;
  contact.address = null;
  contact.state = null;
}

onUnmounted(() => {
  statesSrc.proxy.destroy();
});
</script>

```
:::


## CSS Variables

**BsCombobox** is inherited from **BsTextField**, therefore it uses **BsTextField**'s 
[CSS variables](/components/inputs/textfield#css-variables). And since **BsCombobox** also uses **BsListbox** internally, it also uses **BsListbox**'s [CSS variables](/components/inputs/listbox#css-variables).  

<SmallNote color="teal" class="mt-lg-3">Updated in v2.2.0</SmallNote>


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default  | Description |
|----------|-----------|----------|-------------|
| action-icon-variant  | `String` | `'outlined'` | Sets the action icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <MdBadge color="info">Updated in v2.1.0</MdBadge> |
| append-icon          | `String` |  | Sets icon to display at the inner right side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <div class="pt-3" style="min-width: 400px">Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| append-icon-outer    | `String` |  | Sets icon to display at the outer right side. <MdBadge color="info">Updated in v2.1.0</MdBadge> <div class="pt-3" style="min-width: 400px">Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| autofocus            | `Boolean` | `false` | Autofocus field when this component is mounted. |
| checkbox-color    | `String`  | `'default'` | Sets the Listbox checkbox color. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3" style="min-width: 375px">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger` and `info`.</div> |
| checkbox-position | `String`  | `'left'`  | Sets the Listbox checkbox position. Valid values are: `left`, `right`. <MdBadge color="info">v2.0.0</MdBadge> |
| chip-color        | `String`  | `'secondary'` | Apply custom color to the Chips. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3" style="min-width: 375px">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info` and `light`.</div> |
| chip-enabled      | `Boolean` | `false`   | Enable/disable **Chip** selection mode for the selected items. |
| chip-outlined     | `Boolean` | `false`   | Render the Chips with **_outlined_** style. |
| chip-pill         | `Boolean` | `false`   | Render the Chips with **_rounded-pill_** style. <MdBadge color="info">v2.0.0</MdBadge> |
| circle-image      | `Boolean` | `false`   | Display image with **_circle_** shape for each item that has image property. |
| clear-button      | `Boolean` | `false`   | Sets **auto show** the clear button. |
| data-source <Badge type="danger">required</Badge> | `TDataSource` | | Sets the data source configuration. |
| disabled            | `Boolean` | `false` | Put the component in _disabled_ state and sets the `<select>` element `disabled` attribute. |
| empty-data-message  | `String`  | `'No data to display.'` | Sets the **_no data message_** when the Listbox is empty. |
| filled              | `Boolean` | `false` | Create the component with **_solid fill style_** appearance. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| floating-label      | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://m3.material.io/components/text-fields/overview) for details. |
| help-text           | `String`  |         | The help text to display below the field component. |
| id                  | `String`  |         | Sets `<select>` element `ID` attribute. This property value is auto generates. |
| image-size          | `Number`  | `48`    | Define the image size for each Listbox items when `show-image` is enabled. |
| item-separator      | `Boolean` | `false` | Show or hide the Listbox item separator. |
| item-separator-dark | `Boolean` | `false` | Set to `TRUE` when Listbox has dark background color (custom background color) and not in dark theme. <MdBadge color="info">v2.2.0</MdBadge> |
| listbox-color <Badge type="warning">deprecated</Badge> | `String`  |  | Apply custom background color to the Listbox. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3">Since v2.2.0, now is integrated with global CSS variables. And is recommended to use the global CSS variables to have consistent UI colors.</div> |
| listbox-max-height   | `Number`  | `300`  | Sets the Listbox container maximum height. <MdBadge color="info">v2.0.0</MdBadge> |
| listbox-min-width    | `Number`  | | Sets the Listbox container minimum width. <MdBadge color="info">v2.0.0</MdBadge> |
| listbox-search-label | `String`  | `'Search...'` | The search box text label. <MdBadge color="info">v2.0.0</MdBadge> |
| min-search-chars  | `Number`  | `2`  | Minimum characters to check before start filtering the Listbox items. <MdBadge color="info">v2.0.0</MdBadge> |
| min-search-length | `Number`  | `15` | Minimum number of items to activate the search box. <MdBadge color="info">v2.0.0</MdBadge> |
| model-value <Badge type="tip">v-model</Badge> | `String`&#124;`Number`&#124;`Array` |  | Monitored by `v-model` to maintain this field value. <MdBadge color="info">v2.0.0</MdBadge> |
| multiple          | `Boolean` | `false` | Enable/disable multiple selection mode. |
| name              | `String`  |  | Sets `<select>` element `name` attribute. |
| not-found-message | `String`  | `'Data not found.'` | Sets the **_not found message_** when searching returns no result. |
| open-on-hover | `Boolean` | `false` | Display the Listbox when mouse hover the component. |
| outlined      | `Boolean` | `false` | Create the component with **_outline style_** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| parent-value  | `String`&#124;`Number`   |  | Sets the cascading combobox parent value. |
| persistent-help-text <Badge type="warning">deprecated</Badge> | `Boolean` | `true` | Use `persistent-help-off` instead. |
| persistent-help-off | `Boolean` | `false` | Prevents help text from being visible when the component is not focused. <MdBadge color="info">v2.2.0</MdBadge> |
| placeholder         | `String`  |         | Sets the field placeholder. |
| prepend-icon       | `String`     |           | <div style="min-width:375px">Sets icon to display at the inner left side. <MdBadge color="info">Updated on v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| prepend-icon-outer | `String`     |           | <div style="min-width:375px">Sets icon to display at the outer left side. <MdBadge color="info">Updated on v2.1.0</MdBadge> <br /> <br />Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</div> |
| readonly           | `Boolean`    | `false`   | Put the component in _readonly_ state and sets the `<select>` element `readonly` attribute. |
| required           | `Boolean`    | `false`   | Sets `<select>` element `required` attribute. |
| rounded-image      | `Boolean`    | `false`   | Display image with **_rounded_** shape for each item that has image property. |
| show-image         | `Boolean`    | `false`   | Show or hide image if Listbox item's object contains `image` property. |
| transition         | `string`     | `'scale'` | Transition animation when showing the Listbox. |
| validation-icon    | `Boolean`    | `false`   | Display validation icon or not, when this field has been validated. <MdBadge color="info">v2.0.0</MdBadge> |
| validator          | `TValidator` |           | The configuration options to integrate external validator plugin to validate this field value. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments         | Description |
|---------|-------------------|-------------|
| clear   |   | Triggers after this field value is cleared. <MdBadge color="info">v2.0.0</MdBadge> |
| close   |   | Triggers when the Popover is hiding. |
| open    |   | Triggers when the Popover is show. |
| data-bind   | ( items:`Object[]`) | Triggers after the data has been fetched. |
| data-error  | ( error:`Object`)   | Triggers when error loading data items. |
| data-filter | ( items:`Object[]`) | Triggers after the listbox data items is filtered. |
| deselect    | ( value:`Object`)   | Triggers when an item is deselected. |
| select      | ( value:`Object`)   | Triggers when an item is selected. |
| update:model-value    | ( value:`String`&#124;`Number`&#124;`String[]`&#124;`Number[]`) | Triggers when the combobox value is updated. <MdBadge color="info">v2.0.0</MdBadge> |
| update:selected-value | ( selected:`Object[]`)             | Triggers when the combobox selected value is updated. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments | Description |
|---------|-----------|-------------|
| default        | | The outlet slot used to place the field label. |
| append-inner   | | The outlet slot used to place custom icon or component at the inner right side. <MdBadge color="info">v2.0.0</MdBadge> |
| append-outer   | | The outlet slot used to place custom icon or component at the outer right side. <MdBadge color="info">v2.0.0</MdBadge> |
| empty-data-msg | | The outlet slot used to place custom message when listbox is empty. <MdBadge color="info">v2.0.1</MdBadge> |
| not-found-msg  | | The outlet slot used to place custom message when filtering listbox items returns no result. <MdBadge color="info">v2.0.1</MdBadge> |
| help-text      | | The outlet slot used for custom help text. <MdBadge color="info">v2.0.0</MdBadge> |
| prepend-inner  | | The outlet slot used to place custom icon or component at the inner left side. <MdBadge color="info">v2.0.0</MdBadge> |
| prepend-outer  | | The outlet slot used to place custom icon or component at the outer left side. <MdBadge color="info">v2.0.0</MdBadge>|
| option-item    | ( item:`Object`, index:`Number`) | The outlet slot used to customize listbox items appearance. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
</BsTabs>

<!-- @include: @/components/inputs/validator.md -->


<script lang="ts" setup>
import type { Validation } from "@vuelidate/core";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import type { Ref, ComputedRef } from "vue";
import { computed, onUnmounted, reactive, ref, unref } from "vue";
import type { TDataSource, TDataListSchemaProps } from 'vue-mdbootstrap';
import { BsArrayStore, BsStore, Helper } from 'vue-mdbootstrap';
import type { INotificationProvider } from "vue-mdbootstrap";

const tabs1active = ref(0);
const loading = ref(false);
const employee1 = ref<number>();
const employee2 = ref<number>();
const employee3 = ref<number>();
const employee4 = ref<number>();
const employee5 = ref<number>();
const employee6 = ref<number>();
const employee7 = ref<number>();
const employee8 = ref<number>();
const employee9 = ref<number>();
const employee10 = ref<number>();
const employee11 = ref<number>();
const employee12 = ref<number>();
const employee13 = ref<number>();
const employee14 = ref<number>();
const employee15 = ref<number>();
const employee16 = ref<number>();
const employee17 = ref<number>();
const employee18 = ref<number>();
const employee19 = ref<number>();
const employee20 = ref<number>();
const employee21 = ref<number>();
const employee22 = ref<number>();
const employee23 = ref<number>();
const employee24 = ref<number>();
const employee25 = ref<number>();
const employee26 = ref<number>();
const employee27 = ref<number>();
const employee28 = ref<number>();
const employee29 = ref<number>();
const employee30 = ref<number>();
const category = ref<number>();
const product = ref<number>();
const state1 = ref<string[]>();
const state2 = ref<string[]>();
const state3 = ref<string[]>();
const state4 = ref<string[]>();
const state5 = ref<string[]>();
const state6 = ref<string[]>();
const state7 = ref<string[]>();
const state8 = ref<string[]>();

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

const categorySrc: TDataSource = {
  proxy: new BsStore({
    idProperty: 'CategoryID',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/categories.json',
    },
  }),
  schema: { displayField: 'CategoryName', valueField: 'CategoryID' } as TDataListSchemaProps,
};

const productSrc: TDataSource = {
  proxy: new BsStore({
    idProperty: 'ProductID',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/products.json',
    },
  }),
  schema: { displayField: 'ProductName', valueField: 'ProductID', cascadeField: 'CategoryID' } as TDataListSchemaProps,
};

const statesSrc: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const statesUS1: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const statesUS2: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const statesUS3: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const statesUS4: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const statesUS5: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const statesUS6: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const statesUS7: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const statesUS8: TDataSource = {
  proxy: new BsStore({
    idProperty: 'value',
    dataProperty: 'data',
    totalProperty: 'total',
    remoteSort: false,
    remoteFilter: false,
    filters: [{ property: 'country', value: 'US', operator: 'eq' }],
    restProxy: {
      browse: 'https://ahmadfajar.github.io/data/states.json',
    },
  }),
};

const contact = reactive({
  fullName: null,
  email: null,
  address: null,
  state: null,
});
const contactRules = {
  fullName: { required },
  email: { required, email },
  address: { required },
  state: { required },
};

function requiredFieldValidator(
  v$: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean };
  messages: { required: string };
  hasError: boolean;
}> {
  const obj = unref(v$)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: { required: obj.required.$message },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
    },
  }));
}

function emailFieldValidator(
  v$: Ref<Validation>,
  field: string
): ComputedRef<{
  dirty: boolean;
  validators: { required: boolean; email: boolean };
  messages: { required: string; email: string };
  hasError: boolean;
}> {
  const obj = unref(v$)[field];

  return computed(() => ({
    hasError: unref(obj.$error),
    messages: {
      required: obj.required.$message,
      email: "Email address format is invalid.",
    },
    dirty: unref(obj.$dirty),
    validators: {
      required: unref(obj.required.$invalid),
      email: unref(obj.email.$invalid),
    },
  }));
}

const v$ = useVuelidate(contactRules, contact);
const fullnameValidator = requiredFieldValidator(v$, "fullName");
const emailValidator = emailFieldValidator(v$, "email");
const addressValidator = requiredFieldValidator(v$, "address");
const stateValidator = requiredFieldValidator(v$, "state");

function submit(notification: INotificationProvider) {
  const validator = unref(v$);
  validator.$touch();

  if (!validator.$invalid) {
    loading.value = true;
    Helper.defer(() => {
      loading.value = false;
      notification.success("Data has been sent.");
    }, 1000);
  }
}

function cancel() {
  unref(v$).$reset();
  contact.fullName = null;
  contact.email = null;
  contact.address = null;
  contact.state = null;
}

onUnmounted(() => {
  peopleSrc1.proxy.destroy();
  peopleSrc2.proxy.destroy();
  categorySrc.proxy.destroy();
  productSrc.proxy.destroy();
  statesSrc.proxy.destroy();
  statesUS1.proxy.destroy();
  statesUS2.proxy.destroy();
  statesUS3.proxy.destroy();
  statesUS4.proxy.destroy();
  statesUS5.proxy.destroy();
  statesUS6.proxy.destroy();
  statesUS7.proxy.destroy();
  statesUS8.proxy.destroy();
});
</script>
