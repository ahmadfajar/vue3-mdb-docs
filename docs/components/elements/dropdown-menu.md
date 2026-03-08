---
description: DropdownMenu is a popup container which are typically used for displaying lists of links and actions in a dropdown menu style. 
--- 

# Dropdown Menu

:::lead
**BsDropdownMenu** is a popup container which are typically used for displaying
lists of links and actions in a dropdown menu style.  
:::


## Overview

`<bs-dropdown-menu>` uses [BsPopover](/components/overlays/popover) internally. Because its
unique concept as popup container, `<bs-dropdown-menu>` can also be used to display
other components.

::: BlockVue {title="DropdownMenu Overview"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col flex justify-center mb-3 mb-md-0">
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
      <div class="col flex justify-center">
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

::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>

- The contents for the `<bs-dropdown-menu>` needs to be placed inside the `content` slot.
- The `<bs-menu>` tag still works, but has been deprecated since v2.0.0.

:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
`<bs-list-nav-item>` or `<bs-list-tile>` can also be used as the menu item, see 
[Display Placement](#display-placement) example.
:::


## Color

`<bs-dropdown-menu>` background color can be set using the `color` property and
the menu items color can be set via local CSS variables. Or use global CSS variables 
for consistent application UI color.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {title="DropdownMenu Color"}

```vue
<template>
  <div class="demo-wrapper px-2">
    <bs-dropdown-menu color="default-color-dark" space="2">
      <bs-button color="primary" dropdown-toggle>Dropdown</bs-button>
      <template #content>
        <bs-list-view>
          <div class="dropdown-menu custom-menu">
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

<style>
.demo-wrapper {
  padding: 1rem;
  width: 100%;
}

.md-popover .custom-menu {
  --md-dropdown-link-color: oklch(100 0 0 / 0.75);
  --md-dropdown-link-hover-bg: oklch(100 0 0 / 0.075);
  --md-dropdown-link-hover-color: oklch(100 0 0);
  --md-dropdown-link-active-bg: oklch(100 0 0 / 0.2);
  --md-dropdown-link-active-color: oklch(100 0 0);
}
</style>

```
:::


## Display on Hover

`<bs-dropdown-menu>` can be displayed on mouse hover event instead of clicking
the activator element by defining the `open-on-hover` property explicitly.

::: BlockVue {title="DropdownMenu Display on Hover"}

```vue
<template>
  <div class="demo-wrapper">
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

::: BlockVue {title="DropdownMenu Placement"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <div class="row row-cols-1 row-cols-sm-2 g-3">
      <div class="col flex justify-center">
        <bs-dropdown-menu placement="top-left" space="2">
          <bs-button color="primary" dropdown-toggle>Top Left</bs-button>
          <template #content>
            <bs-list-view>
              <bs-list-nav>
                <bs-list-nav-item label="First Action" url="#display-placement"></bs-list-nav-item>
                <bs-list-nav-item label="Second Action" url="#display-placement"></bs-list-nav-item>
                <bs-list-nav-item label="Third Action" url="#display-placement"></bs-list-nav-item>
              </bs-list-nav>
              <bs-divider></bs-divider>
              <bs-list-nav>
                <bs-list-nav-item label="Another Action" url="#display-placement"></bs-list-nav-item>
                <bs-list-nav-item label="Disabled Action" disabled></bs-list-nav-item>
              </bs-list-nav>
            </bs-list-view>
          </template>
        </bs-dropdown-menu>
      </div>
      <div class="col flex justify-center">
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
      <div class="col flex justify-center">
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
      <div class="col flex justify-center">
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

::: BlockVue {title="DropdownMenu Advance Example" file="./docs/components/overlays/js/popover-1.js"}

```vue
<template>
  <div class="demo-wrapper">
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
        <div class="p-3">
          <div class="mb-3">
            <bs-switch v-model="enableMessage" :value="true">
              Enable Messages
            </bs-switch>
          </div>
          <bs-switch v-model="enableHints" :value="true">
            Enable Hints
          </bs-switch>
        </div>
        <bs-divider></bs-divider>
        <div class="flex justify-end md-gap-2 p-2 px-3">
          <bs-button color="secondary" size="sm" flat @click="show1 = false">Cancel</bs-button>
          <bs-button color="primary" size="sm" @click="show1 = false">Save</bs-button>
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

## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.dropdown-menu` and global CSS variables for better customization.

<SmallNote color="teal">Added in v2.2.0</SmallNote>

::: code-group

```scss [Local CSS]
.md-popover {
  .dropdown-menu {
    --md-dropdown-bg: var(--md-listview-bg, inherit);
    --md-dropdown-border-color: var(--border-translucent);
    --md-dropdown-border-width: 0;
    --md-dropdown-padding-x: 0;
    --md-dropdown-padding-y: 0;
    --md-dropdown-header-color: var(--md-subheader-color);
    --md-dropdown-header-padding-x: #{vars.$padding-md};
    --md-dropdown-header-padding-y: #{vars.$padding-sm};
    --md-dropdown-item-padding-x: var(--md-tile-padding-x, #{vars.$padding-md});
    --md-dropdown-item-padding-y: var(--md-tile-padding-y, #{vars.$padding-xs});
    --md-dropdown-link-color: var(--navigation-item-foreground);
    --md-dropdown-link-active-bg: var(--navigation-item-active-background);
    --md-dropdown-link-active-color: var(--navigation-item-active-foreground);
    --md-dropdown-link-hover-bg: var(--navigation-item-hover-background);
    --md-dropdown-link-hover-color: var(--navigation-item-hover-foreground);
  }
}

```

```scss [Global CSS]
:root {
  --border-translucent: oklch(0.88 0.001 17.18 / 0.75);

  --navigation-item-foreground: var(--foreground);
  --navigation-item-active-background: #{vars.$default-active-bgcolor};
  --navigation-item-active-foreground: #{helper.to-oklch(
      color.change(color.scale(vars.$default-active-bgcolor, $lightness: -10%), $alpha: 1)
    )};
  --navigation-item-hover-background: #{vars.$default-hover-bgcolor};
  --navigation-item-hover-foreground: var(--foreground);
}

```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default   | Description |
|----------|----------|-----------|-------------|
| color <Badge type="warning">deprecated</Badge> | `String` | | The dropdown menu background color. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3">Use unified global CSS variable instead.</div>  |
| content-click-close | `Boolean` | `true` | Close or hide dropdown menu when content clicked. |
| cover       | `Boolean` | `false` | Display dropdown menu at a position that covers the activator. |
| disabled    | `Boolean` | `false` | Completely disable the dropdown menu and prevents it from displaying. |
| open <Badge type="tip">v-model</Badge> | `Boolean` | `false` | The component's state: **show** or **hide**. |
| open-on-hover | `Boolean` | `false` | Triggers the dropdown menu to display when `mouseenter` and hide when `mouseleave`. |
| placement     | `String`  | `'bottom-left'` | The dropdown menu display placement. Valid values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`. |
| space         | `Number`  |  | Number of pixel to shift the dropdown menu display position. |
| transition    | `String`  | `'scale'` | Transition animation when show the dropdown menu. This animation is effected by `placement` property. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| close  |  | Fired when **dropdown menu** is closed. |
| update:open | ( state:`Boolean`) | Used to update the `open` property. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
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
