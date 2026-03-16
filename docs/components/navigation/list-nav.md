---
outline: [2, 3] 
description: ListNav is a component used for displaying a series of item and mainly used for navigation. It can contain an icon, nested items, and provides a consistent styling for organizing the items. 
---

# List Nav

::: lead
**BsListNav** is a component used for displaying a series of item and mainly used for navigation.
It can contain an icon, nested items, and provides a consistent styling for organizing the items. But
doesn't have the flexibility like [BsListTile](/components/elements/list-tile).
:::


## Overview

`<bs-list-nav>` is a component to create the navigation container and `<bs-list-nav-item>` is used
to create the navigation menu. `<bs-list-nav>` needs to be placed inside `<bs-list-view>`, then
use `<bs-list-nav-item>` to compose the navigation menus. The navigation menus created by
`<bs-list-nav-item>` has consistent styling and meets the _Material Design specifications_.

::: BlockVue {title="ListNav Overview"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700">
        <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
        <bs-appbar-title title="Menus" class="text-light"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view>
        <bs-list-nav>
          <bs-list-nav-item icon="folder" label="My Files" url="#overview"></bs-list-nav-item>
          <bs-list-nav-item
            icon="folder-shared"
            label="Shared with me"
            url="#overview"
          ></bs-list-nav-item>
          <bs-list-nav-item icon="star" label="Starred" url="#overview"></bs-list-nav-item>
          <bs-list-nav-item icon="upload" label="Upload" url="#overview"></bs-list-nav-item>
          <bs-list-nav-item icon="cloud_upload" label="Backup" url="#overview"></bs-list-nav-item>
          <bs-list-nav-item icon="delete" label="Trash" url="#overview"></bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

```
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
See [BsIcon](/components/icons/icon) to learn more about how to apply **Google Material Icons**
to the `icon` property.
:::

<!-- @include: @/components/icon-migration-info.md --> 


## Styling

### Color {#styling-color}

We can also make `<bs-list-nav>` to have a background color other than _white_. To achieve this,
we need to set the `color` property of `<bs-list-view>` component to the desired _color name_.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {title="ListNav Styles - Color"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto bg-stylish-color">
      <bs-appbar class="bg-deep-purple-700">
        <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
        <bs-appbar-title title="Menus" class="text-light"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view class="listview-custom">
        <bs-list-nav>
          <bs-list-nav-item icon="folder" label="My Files" url="#color"></bs-list-nav-item>
          <bs-list-nav-item
            icon="folder-shared"
            label="Shared with me"
            url="#color"
          ></bs-list-nav-item>
          <bs-list-nav-item icon="star" label="Starred" url="#color"></bs-list-nav-item>
          <bs-list-nav-item icon="upload" label="Upload" url="#color"></bs-list-nav-item>
          <bs-list-nav-item icon="cloud_upload" label="Backup" url="#color"></bs-list-nav-item>
          <bs-list-nav-item icon="delete" label="Trash" url="#color"></bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

<style>
.demo-wrapper {
  padding: 1rem;
}

.mobi-card { max-width: 420px; }

.md-card > .md-appbar {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.listview-custom .md-list-nav {
  --md-nav-item-color: oklch(98.894% 0.00531 16.082);
  --md-nav-item-icon-color: oklch(78.261% 0.00009 271.152);
  --md-nav-item-active-bg: oklch(30.919% 0.00004 271.152 / 0.5);
  --md-nav-item-active-color: oklch(93.957% 0.08188 102.597);
  --md-nav-item-active-icon-color: oklch(98.894% 0.00531 16.082);
  --md-nav-item-hover-bg: oklch(30.919% 0.00004 271.152 / 0.25);
}
</style>

```
:::


### Outer padding {#styling-outer-padding class="mt-lg-5"}

Additionally, we can also add predefined outer padding on the left or right side of the navigation menus.
To create the padding, sets the `space-around` property of the `<bs-list-view>` component with value:
`left`, `right` or `both`.

::: BlockVue {title="ListNav Styles - Outer Padding"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700">
        <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
        <bs-appbar-title title="Menus" class="text-light"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view space-around="both">
        <bs-list-nav>
          <bs-list-nav-item icon="folder" label="My Files" url="#outer-padding"></bs-list-nav-item>
          <bs-list-nav-item
            icon="folder-shared"
            label="Shared with me"
            url="#outer-padding"
          ></bs-list-nav-item>
          <bs-list-nav-item icon="star" label="Starred" url="#outer-padding"></bs-list-nav-item>
          <bs-list-nav-item icon="upload" label="Upload" url="#outer-padding"></bs-list-nav-item>
          <bs-list-nav-item
            icon="cloud_upload"
            label="Backup"
            url="#outer-padding"
          ></bs-list-nav-item>
          <bs-list-nav-item icon="delete" label="Trash" url="#outer-padding"></bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

```
:::


### Item border {#styling-item-border class="mt-lg-5"}

We can also give a border to the active navigation's menu. To achieve this, sets the
`item-border-variant` property of `<bs-list-view>` component with value: `left`, `right`,
`left-right`, `top`, `bottom`, or `top-bottom`.

<SmallNote color="teal">Added in v2.0.0</SmallNote>

::: BlockVue {title="ListNav Styles - Item Border"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700">
        <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
        <bs-appbar-title title="Menus" class="text-light"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view space-around="both" item-border-variant="left">
        <bs-list-nav>
          <bs-list-nav-item icon="folder" label="My Files" url="#item-border"></bs-list-nav-item>
          <bs-list-nav-item
            icon="folder-shared"
            label="Shared with me"
            url="#item-border"
          ></bs-list-nav-item>
          <bs-list-nav-item icon="star" label="Starred" url="#item-border"></bs-list-nav-item>
          <bs-list-nav-item icon="upload" label="Upload" url="#item-border"></bs-list-nav-item>
          <bs-list-nav-item icon="cloud_upload" label="Backup" url="#item-border"></bs-list-nav-item>
          <bs-list-nav-item icon="delete" label="Trash" url="#item-border"></bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

```
:::


### Rounded style {#styling-rounded-style class="mt-lg-5"}

Additionaly, we can also add additional style appearance to the navigation's menu.
There are two built-in style appearance, which are: **Rounded** and **Rounded Pill**.
To achieve this, sets the `item-rounded` property of `<bs-list-view>` explicitly to
create _rounded style_, or `item-rounded-pill` to create _rounded pill style_ to an
active navigation menu.

<SmallNote color="teal">Added in v2.0.0</SmallNote>

::: BlockVue {title="ListNav Styles - Item Rounded Style"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700">
        <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
        <bs-appbar-title title="Menus" class="text-light"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view space-around="both" item-border-variant="left" item-rounded-pill>
        <bs-list-nav>
          <bs-list-nav-item icon="folder" label="My Files" url="#item-style"></bs-list-nav-item>
          <bs-list-nav-item
            icon="folder-shared"
            label="Shared with me"
            url="#item-style"
          ></bs-list-nav-item>
          <bs-list-nav-item icon="star" label="Starred" url="#item-style"></bs-list-nav-item>
          <bs-list-nav-item icon="upload" label="Upload" url="#item-style"></bs-list-nav-item>
          <bs-list-nav-item icon="cloud_upload" label="Backup" url="#item-style"></bs-list-nav-item>
          <bs-list-nav-item icon="delete" label="Trash" url="#item-style"></bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

```
:::


## Usage Example

The following are a collection of examples that demonstrate more advanced use of the `<bs-list-nav>`.

### Nested navigation {#usage-example-nested-navigation}

To create nested navigation list, the child navigation list needs to be wrapped by `<bs-list-nav>` and
placed inside current `<bs-list-nav-item>`. Optionally, we can define the `depth` or `indent` property
to customize the indentation from the left side.

::: BlockVue {title="ListNav Nested Navigation"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700" shadow>
        <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
        <bs-appbar-title title="Topics" class="text-light"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light" icon="more_vert" mode="icon" flat></bs-button>
      </bs-appbar>
      <bs-list-view>
        <bs-list-nav>
          <bs-list-nav-item icon="widgets" label="Attractions" url="#nested-navigation-1">
            <bs-list-nav child>
              <bs-list-nav-item label="Topic 1" url="#nested-navigation-1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 2" disabled></bs-list-nav-item>
              <bs-list-nav-item label="Topic 3" url="#nested-navigation-1"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="restaurant" label="Dining" url="#nested-navigation-1">
            <bs-list-nav child>
              <bs-list-nav-item label="Breakfast" disabled></bs-list-nav-item>
              <bs-list-nav-item label="Sushi" url="#nested-navigation-1"></bs-list-nav-item>
              <bs-list-nav-item label="Pizza" url="#nested-navigation-1"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="school" label="Education" url="#nested-navigation-1">
            <bs-list-nav child>
              <bs-list-nav-item label="Topic 1" url="#nested-navigation-1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 2" url="#nested-navigation-1">
                <bs-list-nav child>
                  <bs-list-nav-item label="Topic 2.1" url="#nested-navigation-1"></bs-list-nav-item>
                  <bs-list-nav-item label="Topic 2.2" url="#nested-navigation-1"></bs-list-nav-item>
                  <bs-list-nav-item label="Topic 2.3" url="#nested-navigation-1"></bs-list-nav-item>
                </bs-list-nav>
              </bs-list-nav-item>
              <bs-list-nav-item label="Topic 3" url="#nested-navigation-1"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="people" label="Family" url="#nested-navigation-1">
            <bs-list-nav child>
              <bs-list-nav-item label="Topic 1" url="#nested-navigation-1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 2" url="#nested-navigation-1"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="medication" label="Health" url="#nested-navigation-1">
            <bs-list-nav child>
              <bs-list-nav-item label="Topic 1" url="#nested-navigation-1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 2" url="#nested-navigation-1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 3" url="#nested-navigation-1"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="warehouse" label="Office" url="#nested-navigation-1">
            <bs-list-nav child>
              <bs-list-nav-item label="Topic 1" url="#nested-navigation-1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 2" url="#nested-navigation-1"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item icon="redeem" label="Promotions" url="#nested-navigation-1">
            <bs-list-nav child>
              <bs-list-nav-item label="Topic 1" url="#nested-navigation-1"></bs-list-nav-item>
              <bs-list-nav-item label="Topic 2" url="#nested-navigation-1">
                <bs-list-nav child>
                  <bs-list-nav-item label="Topic 2.1" url="#nested-navigation-1"></bs-list-nav-item>
                  <bs-list-nav-item label="Topic 2.2" url="#nested-navigation-1"></bs-list-nav-item>
                  <bs-list-nav-item label="Topic 2.3" url="#nested-navigation-1"></bs-list-nav-item>
                </bs-list-nav>
              </bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

```
:::


### Mixed with List Tile {#usage-example-mixed-with-list-tile class="mt-lg-5"}

`<bs-list-nav>` can also be mixed with `<bs-list-tile>` to display custom and fine tune
navigation menus.

::: BlockVue {title="ListNav mixed with ListTile"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700">
        <bs-button color="light" icon="menu" mode="icon" flat> </bs-button>
        <bs-appbar-title title="Mail" class="text-light"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light" icon="more_vert" mode="icon" flat></bs-button>
      </bs-appbar>
      <bs-list-view>
        <bs-list-nav>
          <bs-list-nav-item icon="inbox" label="Inbox" url="#mixed-with-list-tile">
            <bs-list-nav child>
              <bs-list-nav-item label="Social" url="#mixed-with-list-tile"></bs-list-nav-item>
              <bs-list-nav-item label="Promotions" url="#mixed-with-list-tile"></bs-list-nav-item>
              <bs-list-nav-item label="Updates" url="#mixed-with-list-tile"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item
            icon="bookmarks_outlined"
            label="Important"
            url="#mixed-with-list-tile"
          ></bs-list-nav-item>
          <bs-list-nav-item icon="send" label="Sent" url="#mixed-with-list-tile"></bs-list-nav-item>
          <bs-list-nav-item
            icon="description_outlined"
            label="Drafts"
            url="#mixed-with-list-tile"
          ></bs-list-nav-item>
        </bs-list-nav>
        <bs-divider></bs-divider>
        <bs-list-tile url="#mixed-with-list-tile">
          <bs-list-tile-leading icon="email_outlined"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>All Mail</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" color="secondary" class="dark:bg-secondary!">102</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile url="#mixed-with-list-tile">
          <bs-list-tile-leading icon="delete_outlined"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Trash</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" color="secondary" class="dark:bg-secondary!">12</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile url="#mixed-with-list-tile">
          <bs-list-tile-leading icon="gpp_maybe_outlined"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Spam</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" color="secondary" class="dark:bg-secondary!">8</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>
```
:::


### Inside Side Drawer {#usage-example-inside-side-drawer class="mt-lg-5"}

`<bs-list-nav>` can also be used inside `<bs-side-drawer>` to create side navigation menus.

::: BlockVue {title="ListNav Inside SideDrawer Example" clientOnly="true" file="./docs/components/container/js/side-drawer-1.js"}

```vue
<template>
  <bs-app class="app-vh bg-gray-500 dark:bg-gray-900/70 rounded-3 md-shadow-1" style="height: 500px;">
    <bs-appbar clipped-left shadow>
      <bs-button
        color="secondary"
        icon="menu"
        mode="icon"
        flat
        @click="toggleSideDrawer1(openSideDrawer1)"
      ></bs-button>
      <bs-appbar-title title="Page Title"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-appbar-items>
        <bs-button color="secondary" icon="search" mode="icon" flat></bs-button>
        <bs-button color="secondary" icon="notifications_outlined" mode="icon" flat></bs-button>
      </bs-appbar-items>
    </bs-appbar>
    <bs-side-drawer v-model:open="openSideDrawer1" class="border-e">
      <div class="flex items-center p-3">
        <bs-avatar img-src="/img/kitty-2.jpg" size="40" circle></bs-avatar>
        <span class="h5 ps-3 mb-0">Kitty Doe</span>
      </div>
      <bs-divider></bs-divider>
      <bs-list-view>
        <bs-list-nav>
          <bs-list-nav-item icon="inbox" label="Inbox" url="#side-drawer">
            <bs-list-nav child>
              <bs-list-nav-item label="Primary" url="#side-drawer"></bs-list-nav-item>
              <bs-list-nav-item label="Social" url="#side-drawer"></bs-list-nav-item>
              <bs-list-nav-item label="Promotions" url="#side-drawer"></bs-list-nav-item>
              <bs-list-nav-item label="Updates" url="#side-drawer"></bs-list-nav-item>
            </bs-list-nav>
          </bs-list-nav-item>
          <bs-list-nav-item
            icon="bookmarks"
            label="Important"
            url="#side-drawer"
          ></bs-list-nav-item>
          <bs-list-nav-item icon="send" label="Sent" url="#side-drawer"></bs-list-nav-item>
          <bs-list-nav-item
            icon="description"
            label="Drafts"
            url="#side-drawer"
          ></bs-list-nav-item>
        </bs-list-nav>
        <bs-divider></bs-divider>
        <bs-list-nav>
          <bs-list-nav-item 
            icon="email" 
            label="All Mail" 
            badge="102" 
            badge-type="pill" 
            badge-color="secondary dark:bg-secondary!"
            url="#side-drawer"
          ></bs-list-nav-item>
          <bs-list-nav-item
            icon="delete"
            label="Trash"
            badge="12" 
            badge-type="pill" 
            badge-color="secondary dark:bg-secondary!"
            url="#side-drawer"
          ></bs-list-nav-item>
          <bs-list-nav-item
            icon="gpp_maybe"
            label="Spam"
            badge="8" 
            badge-type="pill" 
            badge-color="secondary dark:bg-secondary!"
            url="#side-drawer"
          ></bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-side-drawer>
    <bs-container app></bs-container>
  </bs-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const openSideDrawer1 = ref(true);

function toggleSideDrawer1(value: boolean) {
  openSideDrawer1.value = !value;
}
</script>

```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables and 
global CSS variables for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

### List View {#css-variables-list-view}

```scss
.md-list {
  --md-listview-bg: inherit;
  --md-listview-color: var(--navigation-item-foreground);
  --md-listview-item-gap: 0;
  --md-listview-padding-x: 0;
  --md-listview-padding-y: #{vars.$padding-sm};

  --md-tile-minheight: 2.5rem;
  --md-tile-action-minwidth: 1.5rem;
  --md-tile-spacing-x: #{vars.$padding-sm};
  --md-tile-spacing-y: 0.375rem;
  --md-tile-padding-x: #{vars.$padding-md};
  --md-tile-padding-y: #{vars.$padding-sm};
  --md-tile-subtitle-font-size: #{math.div((vars.$font-size-base * 90), 100)};
  --md-tile-title-font-size: var(--font-size-default);
  --md-tile-title-font-weight: var(--font-weight-normal);
  --md-tile-active-title-font-weight: var(--font-weight-medium);
  --md-tile-disabled-opacity: var(--md-field-readonly-opacity);
  --md-tile-indicator-border-color: var(--navigation-item-border-indicator);
  --md-tile-indicator-border-width: 4px;

  --md-nav-item-padding-x: #{vars.$padding-md};
  --md-nav-item-padding-y: #{vars.$padding-xs};
  --md-nav-item-line-height: normal;
  --md-nav-item-font-size: var(--font-size-default);
  --md-nav-item-font-weight: var(--font-weight-normal);
  --md-nav-item-active-font-weight: var(--font-weight-medium);
  --md-nav-item-disabled-opacity: var(--md-field-readonly-opacity);
}

```

### List Nav {#css-variables-list-nav} 

::: code-group

```css [Local CSS]
.md-list-nav {
  --md-nav-item-color: var(--navigation-item-foreground);
  --md-nav-item-icon-color: var(--navigation-item-foreground-subtle);
  --md-nav-item-divider-color: var(--border-translucent);
  --md-nav-item-active-bg: var(--navigation-item-active-background);
  --md-nav-item-active-color: var(--navigation-item-active-foreground);
  --md-nav-item-active-icon-color: var(--navigation-item-active-foreground-secondary);
  --md-nav-item-expanded-bg: var(--navigation-item-expanded-background);
  --md-nav-item-hover-bg: var(--navigation-item-hover-background);
}

```

```scss [Global CSS]
:root {
  --navigation-background: var(--background-secondary);
  --navigation-item-foreground: var(--foreground);
  --navigation-item-foreground-secondary: var(--foreground-subtle);
  --navigation-item-foreground-subtle: var(--foreground-subtle-secondary);
  --navigation-item-active-background: #{vars.$default-active-bgcolor};
  --navigation-item-active-foreground: #{helper.to-oklch(
      color.change(color.scale(vars.$default-active-bgcolor, $lightness: -10%), $alpha: 1)
    )};
  --navigation-item-active-foreground-secondary: #{helper.to-oklch(
      color.change(color.scale(vars.$default-active-bgcolor, $lightness: -10%), $alpha: 0.75)
    )};
  --navigation-item-hover-background: #{vars.$default-hover-bgcolor};
  --navigation-item-hover-foreground: var(--foreground);
  --navigation-item-hover-foreground-secondary: #{colors.$gray-600};
  --navigation-item-expanded-background: oklch(0 0 0 / 0.025);
  --navigation-item-border-indicator: var(--md-field-active-indicator);
}

```
:::

### SASS mixins

Sometimes, simply creating a new **ListNav** color variant can be overwhelming, 
as there are too many CSS variables to modify. For cases like this, Vue MDBootstrap 
provides SASS mixins to help you create new **ListNav** color variants.

```scss
use 'vue-mdbootstrap/scss/mixins/listview';

@include listview.make-listview-variant($name, $color);

```


## API Reference

### BsListView {#api-reference-list-view}

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property      | Type        | Default   | Description |
|---------------|-------------|-----------|-------------|
| color <Badge type="warning">deprecated</Badge> | `String` | | ListView background color. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3">Use unified global CSS variables instead.</div> |
| individual-state  | `Boolean` | `false`   | The ListView doesn't manage each ListTile's state. <MdBadge color="info">v2.0.0</MdBadge> |
| item-rounded      | `Boolean` | `false`   | Apply _rounded style_ to the _BsListNavItem_ or _BsListTile_. <MdBadge color="info">v2.0.0</MdBadge> |
| item-rounded-pill | `Boolean` | `false`   | Apply _rounded pill style_ to the _BsListNavItem_ or _BsListTile_. <MdBadge color="info">v2.0.0</MdBadge> |
| item-border-variant | `String` |  | Give border around the active item. Valid values are: `left`, `right`, `left-right`, `top`, `bottom`, `top-bottom`. <MdBadge color="info">v2.0.0</MdBadge> |
| model-value <Badge type="tip">v-model</Badge> | `IListItem` |  | Property that hold the ListView's active item object instance. <MdBadge color="info">v2.0.0</MdBadge> |
| overflow-hidden | `Boolean` | `false`   | Apply css `'overflow-hidden'` or not. |
| single-expand   | `Boolean` | `true`    | If `false` then more than one item can be expanded. Only applicable to _BsListNav_. |
| space-around    | `String`  |  | Give padding around each item. Valid values are: `both`, `left`, `right`. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols table:font-mono:col-2">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| change  | (value:`IListItem`, oldValue: `IListItem`) | Fired immediately when this component's mutate its `model-value`. <MdBadge color="info">v2.0.0</MdBadge> |
| update:model-value | (value:`IListItem`) | Fired when this component's `model-value` is updated. <MdBadge color="info">v2.0.0</MdBadge> |

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


### BsListNav {#api-reference-list-nav class="mt-lg-5"}

<BsTabs v-model="tabs2active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| child    | `Boolean` | `false` | Treat the ListNav as child Navigation menus. |

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


### BsListNavItem {#api-reference-list-nav-item class="mt-lg-5"}

<BsTabs v-model="tabs3active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property   | Type      | Default | Description |
|------------|-----------|---------|-------------|
| active <Badge type="tip">v-model</Badge> | `Boolean` | `false` | Component state and monitored by `v-model`. |
| active-class  | `String` | `'active'` | `<router-link>` property, configure the active CSS class applied when the link is active. Typically you will want to set this to class name `active`. |
| badge         | `String` |  | The text to render as badge label. |
| badge-color   | `String` |  | The badge color appearance. <MdBadge color="info">v2.0.0</MdBadge> |
| badge-type    | `String` |  | Create Badge with `pill` or `label` style. <MdBadge color="info">v2.0.0</MdBadge> |
| badge-variant | `String` |  | The badge variant, valid values: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. |
| border-off    | `Boolean` | `false` | Remove border style that have been applied via _BsListView_ to this _BsListNavItem_. <MdBadge color="info">v2.0.0</MdBadge> |
| depth      | `Number`  |  | Item depth level in tree hierarchy (zero based level). |
| disabled   | `Boolean` | `false` | Component state. |
| icon       | `String`  |         | <div style="min-width:390px"> Icon to display inside the component. <MdBadge color="info">Updated in v2.1.0</MdBadge> <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `icon-variant` property. </div> |
| icon-flip  | `String`  |         | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| icon-pulse | `Boolean` | `false` | Apply **pulse** animation to the icon. |
| icon-rotation | `Number` |       | Rotate the icon, valid values are: `90`, `180`, `270`. |
| icon-size  | `Number`&#124;`String` |  | Render the icon at predefined size in pixel.  |
| icon-spin  | `Boolean` | `false` | Apply **spin** animation to the icon. |
| icon-variant  | `String`  | `'outlined'` | Use predefined icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <MdBadge color="info">v2.1.0</MdBadge> |
| id         | `String`  |  | Sets the component `ID`. This property value is auto generate. <MdBadge color="info">v2.0.0</MdBadge> |
| indent     | `Number`  |  | Text indentation from left side. |
| label <Badge type="danger">required</Badge> | `String` |  | The text label to display. |
| location    | `RouteLocationAsRelativeGeneric` |  | The navigation location target. <MdBadge color="info">v2.0.11</MdBadge> <div class="pt-3">The value must be an object that satisfies the `to` property of the `<RouterLink>` component.</div><div class="pt-3">This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information.</div> |
| path        | `String`  |  | The route path for the navigation target. <div class="pt-3">This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information. </div> |
| path-name   | `String`  |  | The path name for the navigation target. <MdBadge color="info">v2.0.11</MdBadge> <div class="pt-3">This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information. </div> |
| pill-off    | `Boolean` | `false` | Remove _rounded pill_ style that have been applied via _BsListView_ to this _BsListNavItem_. <MdBadge color="info">v2.0.0</MdBadge> |
| ripple-off  | `Boolean` | `false` | Disabled ripple effect. |
| rounded-off | `Boolean` | `false` | Remove _rounded_ style that have been applied via _BsListView_ to this _BsListNavItem_. <MdBadge color="info">v2.0.0</MdBadge> |
| url         | `String`  |  | Absolute or relative URL for the navigation target, when [vue-router](https://router.vuejs.org/) doesn't exists. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols table:font-mono:col-2">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| click  | (evt:`Event`) | Fired when a non-disabled _ListNavItem_ is clicked.  |
| update:active | (value:`Boolean`) | Fired when this component's state is updated. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the child navigation. |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { ref } from 'vue';

const openSideDrawer1 = ref(true);
const tabs1active = ref(0);
const tabs2active = ref(0);
const tabs3active = ref(0);

function toggleSideDrawer1(value: boolean) {
  openSideDrawer1.value = !value;
}
</script>
