# Dropdown Menu

:::lead
**BsDropdownMenu** is a popup container which are typically used for displaying
lists of links and actions in a dropdown menu style.  
:::


## Overview

`<bs-dropdown-menu>` uses [BsPopover](/components/container/popover) internally. Because its
unique concept as popup container, `<bs-dropdown-menu>` can also be used to display
other components.

::: BlockVue {title="DropdownMenu Example"}

```vue
<template>
  <div class="my-demo-wrapper w-100">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col d-flex justify-content-center mb-3 mb-md-0">
        <bs-dropdown-menu space="2">
          <bs-button color="primary" dropdown-toggle>Dropdown</bs-button>
          <template #content>
            <bs-list-view>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#overview">First Action</a>
                <a class="dropdown-item" href="#overview">Second Action</a>
                <a class="dropdown-item" href="#overview">Third Action</a>
              </div>
            </bs-list-view>
          </template>
        </bs-dropdown-menu>
      </div>
      <div class="col d-flex justify-content-center">
        <bs-dropdown-menu space="2" cover>
          <bs-button color="primary" dropdown-toggle>Cover Dropdown</bs-button>
          <template #content>
            <bs-list-view>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#overview">First Action</a>
                <a class="dropdown-item" href="#overview">Second Action</a>
                <a class="dropdown-item" href="#overview">Third Action</a>
              </div>
            </bs-list-view>
          </template>
        </bs-dropdown-menu>
      </div>
    </div>
  </div>
</template>
```
:::

::: warning <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">IMPORTANT</span>

- The contents for the `<bs-dropdown-menu>` needs to be placed inside the `content` slot.
- The `<bs-menu>` tag still works, but has been deprecated since v2.0.0.

:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
`<bs-list-nav-item>` or `<bs-list-tile>` can also be used as the menu item, see 
[Display Placement](#display-placement) example.
:::


## Color

`<bs-dropdown-menu>` background color can be set using the `color` property.

::: BlockVue {title="DropdownMenu Color Example"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <bs-dropdown-menu color="default-color" space="2">
      <bs-button color="primary" dropdown-toggle>Dropdown</bs-button>
      <template #content>
        <bs-list-view color="default-color">
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#color">First Action</a>
            <a class="dropdown-item" href="#color">Second Action</a>
            <a class="dropdown-item" href="#color">Third Action</a>
            <bs-divider></bs-divider>
            <a class="dropdown-item" href="#color">Other Action</a>
            <a class="dropdown-item disabled" href="#color">Another Action</a>
          </div>
        </bs-list-view>
      </template>
    </bs-dropdown-menu>
  </div>
</template>
```
:::

<!-- @include: @/components/colors-tip.md -->


## Display on Hover

`<bs-dropdown-menu>` can be displayed on mouse hover event instead of clicking
the activator element by defining the `open-on-hover` property explicitly.

::: BlockVue {title="DropdownMenu Display on Hover Example"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <bs-dropdown-menu space="2" open-on-hover>
      <bs-button color="primary" dropdown-toggle>Dropdown</bs-button>
      <template #content>
        <bs-list-view>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#display-on-hover">First Action</a>
            <a class="dropdown-item" href="#display-on-hover">Second Action</a>
            <a class="dropdown-item" href="#display-on-hover">Third Action</a>
            <bs-divider></bs-divider>
            <a class="dropdown-item" href="#display-on-hover">Other Action</a>
            <a class="dropdown-item disabled" href="#display-on-hover">Another Action</a>
          </div>
        </bs-list-view>
      </template>
    </bs-dropdown-menu>
  </div>
</template>
```
:::


## Display Placement

`<bs-dropdown-menu>` supports various positioning such as `top`, `top-left`,
`top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`,
`left-bottom`, `right`, `right-top`, `right-bottom`. It can be done
by explicitly define the `placement` property.

::: BlockVue {title="DropdownMenu Placement Example"}

```vue
<template>
  <div class="my-demo-wrapper w-100">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col d-flex justify-content-center mb-3">
        <bs-dropdown-menu placement="top-left" space="2">
          <bs-button color="primary" dropdown-toggle>Top Left</bs-button>
          <template #content>
            <bs-list-view>
              <bs-list-nav>
                <bs-list-nav-item label="First Action" url="#placement"></bs-list-nav-item>
                <bs-list-nav-item label="Second Action" url="#placement"></bs-list-nav-item>
                <bs-list-nav-item label="Third Action" url="#placement"></bs-list-nav-item>
              </bs-list-nav>
              <bs-divider></bs-divider>
              <bs-list-nav>
                <bs-list-nav-item label="Another Action" url="#placement"></bs-list-nav-item>
                <bs-list-nav-item label="Disabled Action" disabled></bs-list-nav-item>
              </bs-list-nav>
            </bs-list-view>
          </template>
        </bs-dropdown-menu>
      </div>
      <div class="col d-flex justify-content-center mb-3">
        <bs-dropdown-menu placement="top-right" space="2">
          <bs-button color="primary" dropdown-toggle>Top Right</bs-button>
          <template #content>
            <bs-list-view>
              <bs-list-tile url="#display-placement">
                <bs-list-tile-title>First Action</bs-list-tile-title>
              </bs-list-tile>  
              <bs-list-tile url="#display-placement">
                <bs-list-tile-title>Second Action</bs-list-tile-title>
              </bs-list-tile>  
              <bs-list-tile url="#display-placement">
                <bs-list-tile-title>Third Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-divider></bs-divider>
              <bs-list-tile url="#display-placement">
                <bs-list-tile-title>Other Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-list-tile disabled>
                <bs-list-tile-title>Another Action</bs-list-tile-title>
              </bs-list-tile>
            </bs-list-view>
          </template>
        </bs-dropdown-menu>
      </div>
      <div class="col d-flex justify-content-center mb-3 mb-md-0">
        <bs-dropdown-menu placement="top" space="2">
          <bs-button color="primary" dropdown-toggle>Top</bs-button>
          <template #content>
            <bs-list-view>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#display-placement">First Action</a>
                <a class="dropdown-item" href="#display-placement">Second Action</a>
                <a class="dropdown-item" href="#display-placement">Third Action</a>
                <bs-divider></bs-divider>
                <a class="dropdown-item" href="#display-placement">Other Action</a>
                <a class="dropdown-item disabled" href="#display-placement">Another Action</a>
              </div>
            </bs-list-view>
          </template>
        </bs-dropdown-menu>
      </div>
      <div class="col d-flex justify-content-center mb-3 mb-md-0">
        <bs-dropdown-menu placement="bottom" space="2">
          <bs-button color="primary" dropdown-toggle>Bottom</bs-button>
          <template #content>
            <bs-list-view>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#display-placement">First Action</a>
                <a class="dropdown-item" href="#display-placement">Second Action</a>
                <a class="dropdown-item" href="#display-placement">Third Action</a>
                <bs-divider></bs-divider>
                <a class="dropdown-item" href="#display-placement">Other Action</a>
                <a class="dropdown-item disabled" href="#display-placement">Another Action</a>
              </div>
            </bs-list-view>
          </template>
        </bs-dropdown-menu>
      </div>
    </div>
  </div>
</template>
```
:::


## Popup Container

You can configure `<bs-dropdown-menu>` to be static when opened, allowing it to
function as a popup container. This can be useful when there are multiple interactive
items within the `<bs-dropdown-menu>` contents.

::: BlockVue {title="DropdownMenu Advance Example" file="./docs/components/scripts/popover-1.js"}

```vue
<template>
  <div class="my-demo-wrapper d-flex justify-content-center">
    <bs-dropdown-menu v-model:open="show1" :content-click-close="false" space="2">
      <bs-button color="primary" dropdown-toggle>Dropdown</bs-button>
      <template #content>
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
        <div class="p-3 text-dark">
          <div class="mb-3">
            <bs-switch v-model="enableMessage" :value="true" color="purple">
              Enable Messages
            </bs-switch>
          </div>
          <bs-switch v-model="enableHints" :value="true" color="purple">Enable Hints</bs-switch>
        </div>
        <bs-divider></bs-divider>
        <div class="p-2 ox-3 text-end">
          <bs-button color="primary" size="sm" @click="show1 = false">Save</bs-button>
          <bs-button color="secondary" size="sm" flat @click="show1 = false">Cancel</bs-button>
        </div>
      </template>
    </bs-dropdown-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const enableMessage = ref(false);
const enableHints = ref(true);
const show1 = ref(false);
</script>
```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default   | Description |
|----------|----------|-----------|-------------|
| color       | `String` | `'white'` | The dropdown menu background color. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) or [Material Color](/reference/color-variants#material-colors) variants can be used. |
| content-click-close | `Boolean` | `true` | Close or hide dropdown menu when content clicked. |
| cover       | `Boolean` | `false` | Display dropdown menu at a position that covers the activator. |
| disabled    | `Boolean` | `false` | Completely disable the dropdown menu and prevents it from displaying. |
| open <Badge type="tip">v-model</Badge> | `Boolean` | `false` | **BsDropdownMenu** state: **show** or **hide**. |
| open-on-hover | `Boolean` | `false` | Triggers the dropdown menu to display when `mouseenter` and hide when `mouseleave`. |
| placement   | `String`  | `'bottom-left'` | The dropdown menu display placement. Valid values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`. |
| space       | `Number` |  | Number of pixel to shift the dropdown menu display position. |
| transition  | `String`  | `'scale'` | Transition animation when show the dropdown menu. This animation is effected by `placement` property. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| close  |  | Fired when **dropdown menu** is closed. |
| update:open | ( state:`Boolean`) | Used to update the `open` property. <BsBadge color="info">v2.0.0</BsBadge> |

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
import { ref } from 'vue';

const tabs1active = ref(0);
const enableMessage = ref(false);
const enableHints = ref(true);
const show1 = ref(false);
</script>
