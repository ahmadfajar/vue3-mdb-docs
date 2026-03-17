---
description: Popover is a lightweight component which is used as a popup container. 
--- 

# Popover

:::lead
**bs-popover** is a lightweight component which is used as a popup container.
:::


## Overview

Some components use `<bs-popover>` internally, such as 
[BsDropdownMenu](/components/elements/dropdown-menu),
[BsCombobox](/components/inputs/combobox), [BsDateTimeField](/components/inputs/datetime-field),
[BsSearchField](/components/inputs/search-field). Example below, shows you basic usage of `<bs-popover>`.

::: BlockVue {clientOnly="true" title="Popover Overview" file="./docs/components/overlays/js/popover-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full text-center">
    <bs-button ref="activator1" dropdown-toggle @click="show1 = !show1">
      Button Dropdown
    </bs-button>
    <bs-popover
      v-model:open="show1"
      :trigger="activator1?.$el"
      class="md-shadow-1"
      space="3"
    >
      <bs-list-view>
        <bs-list-tile>
          <bs-list-tile-leading
            img-src="https://ahmadfajar.github.io/img/2.jpg"
            rounded
          ></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>
              <b>John Doe</b>
            </bs-list-tile-title>
            <bs-list-tile-subtitle>Going further more...</bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
      <bs-divider></bs-divider>
      <div class="p-3">
        <div class="mb-3">
          <bs-switch v-model="enableMessage" :value="true">
            Enable Messages
          </bs-switch>
        </div>
        <bs-switch v-model="enableHints" :value="true">Enable Hints</bs-switch>
      </div>
      <bs-divider></bs-divider>
      <div class="flex justify-end md-gap-2 py-2 px-3">
        <bs-button color="secondary" size="sm" flat @click="show1 = false">Cancel</bs-button>
        <bs-button color="primary" size="sm" @click="show1 = false">Save</bs-button>
      </div>
    </bs-popover>
  </div>
</template>

<script setup lang="ts">
import { ref, type ComponentPublicInstance } from 'vue';

const enableMessage = ref(false);
const enableHints = ref(true);
const show1 = ref(false);
const activator1 = ref<ComponentPublicInstance | null>(null);
</script>
```
:::


## Display Placement

Use `placement` property to change default `<bs-popover>` display placement. Valid 
placement values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, 
`bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`.

::: BlockVue {clientOnly="true" title="Popover Display Placement" file="./docs/components/overlays/js/popover-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-1 row-cols-sm-2 gy-3">
      <div
        v-for="item in placementSrc.dataItems"
        :key="item.value"
        class="col flex justify-center"
      >
        <bs-button :id="item.id" dropdown-toggle @click="toggleShow(item, item.show)">
          {{ item.label }}
        </bs-button>
        <bs-popover
          v-model:open="item.show"
          :placement="item.value"
          :trigger="`#${item.id}`"
          class="md-shadow-1"
          space="3"
        >
          <bs-list-view>
            <bs-list-tile>
              <bs-list-tile-leading img-src="https://ahmadfajar.github.io/img/3.jpg" rounded></bs-list-tile-leading>
              <bs-list-tile-content>
                <bs-list-tile-title class="font-weight-bold"> Catherine </bs-list-tile-title>
                <bs-list-tile-subtitle>Going further more...</bs-list-tile-subtitle>
              </bs-list-tile-content>
            </bs-list-tile>
          </bs-list-view>
          <bs-divider></bs-divider>
          <div class="p-3">
            <bs-switch
              v-model="item.enableMessage"
              :value="true"
              inset-outlined
              label-class="w-full"
              label-position="left"
            >
              Enable Messages
            </bs-switch>
            <bs-switch
              v-model="item.enableHint"
              :value="true"
              inset-outlined
              label-class="w-full"
              label-position="left"
            >
              Enable Hints
            </bs-switch>
          </div>
          <bs-divider></bs-divider>
          <div class="flex justify-end md-gap-1 p-3">
            <bs-button color="primary" flat size="sm" @click="item.show = false">Cancel</bs-button>
            <bs-button color="primary" size="sm" @click="item.show = false">Save</bs-button>
          </div>
        </bs-popover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { BsArrayStore, type IBsModel, type TPopoverPosition, useGenerateId } from 'vue-mdbootstrap';

function toggleShow(item: IBsModel, state: boolean): void {
  item.show = !state;
}

const placementSrc = new BsArrayStore([
  {
    id: useGenerateId(),
    value: 'bottom-left',
    label: 'Bottom Left',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'bottom-right',
    label: 'Bottom Right',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'bottom',
    label: 'Bottom',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'left',
    label: 'Left',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'left-top',
    label: 'Left Top',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'left-bottom',
    label: 'Left Bottom',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'right',
    label: 'Right',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'right-top',
    label: 'Right Top',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'right-bottom',
    label: 'Right Bottom',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'top',
    label: 'Top',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'top-left',
    label: 'Top Left',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'top-right',
    label: 'Top Right',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
]);

onBeforeUnmount(() => {
  placementSrc.destroy();
});
</script>

```
:::

## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-popover` and global CSS variables for better customization.

<SmallNote color="teal">Added in v2.2.0</SmallNote>

::: code-group 

```css [Local CSS]
.md-popover {
  --md-popover-bg: var(--background-tertiary);
  --md-popover-color: var(--foreground-tertiary);
  --md-popover-border-radius: var(--md-radius);
}

```

```scss [Global CSS]
:root {
  --background-tertiary: #{colors.$white};
  --foreground-tertiary: #{colors.$neutral-darken-4};
  --md-radius: #{vars.$radius-md};
}

```


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default   | Description |
|----------|----------|-----------|-------------|
| color <Badge type="warning">deprecated</Badge> | `String` | | **Popover** background color. Use unified global CSS variable instead. <MdBadge color="info">Updated in v2.2.0</MdBadge> |
| cover       | `Boolean` | `false` | Display **Popover** at a position that covers the activator. |
| esc-close   | `Boolean` | `true`  | Close the **Popover** when **ESC** key is pressed. |
| open <Badge type="tip">v-model</Badge> | `Boolean` | `false` | **Popover** state: **show** or **hide**. |
| overlay       | `Boolean` | `false` | Show backdrop overlay or not. |
| overlay-click-close | `Boolean` | `true`  | Close the **Popover** when the backdrop overlay is clicked. <MdBadge color="info">v2.0.0</MdBadge> |
| overlay-color | `String`  | `'#000'`| The backdrop overlay color. |
| overlay-opacity | `Number` | `0.4` | The backdrop overlay opacity. |
| placement   | `String`  | `'bottom-left'` | **Popover** display placement. Valid values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`. |
| space       | `Number` |  | Number of pixel to shift the **Popover** display position. |
| transition  | `String`  | `'scale'` | Transition animation when show the Popover. This animation is effected by `placement` property. |
| trigger <Badge type="danger">required</Badge> | `HTMLElement`&#124;`String`  |  | HTML element or element ID which is used to activate and calculate this **Popover** display position. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols table:font-mono:col-2">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| close  |  | Fired when **Popover** is closed. |
| update:open | (state:`Boolean`) | Used to update the `open` property. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { onBeforeUnmount, ref, type ComponentPublicInstance } from 'vue';
import { BsArrayStore, type IBsModel, type TPopoverPosition, useGenerateId } from 'vue-mdbootstrap';

const tabs1active = ref(0);
const enableMessage = ref(false);
const enableHints = ref(true);
const show1 = ref(false);
const activator1 = ref<ComponentPublicInstance | null>(null);

function toggleShow(item: IBsModel, state: boolean): void {
  item.show = !state;
}

const placementSrc = new BsArrayStore([
  {
    id: useGenerateId(),
    value: 'bottom-left',
    label: 'Bottom Left',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'bottom-right',
    label: 'Bottom Right',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'bottom',
    label: 'Bottom',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'left',
    label: 'Left',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'left-top',
    label: 'Left Top',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'left-bottom',
    label: 'Left Bottom',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'right',
    label: 'Right',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'right-top',
    label: 'Right Top',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'right-bottom',
    label: 'Right Bottom',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'top',
    label: 'Top',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'top-left',
    label: 'Top Left',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
  {
    id: useGenerateId(),
    value: 'top-right',
    label: 'Top Right',
    show: false,
    enableHint: false,
    enableMessage: false,
  },
]);

onBeforeUnmount(() => {
  placementSrc.destroy();
});
</script>
