---
outline: [2, 3]
---

# List Nav

::: lead
**BsListNav** is a component used for displaying a series of item and mainly used for navigation.
It can contain an icon, nested items, and provides a consistent styling for organizing the items. But
doesn't have the flexibility like [BsListTile](/components/list-tile).
:::


## Overview

`<bs-list-nav>` is a component to create the navigation container and `<bs-list-nav-item>` is used
to create the navigation menu. `<bs-list-nav>` needs to be placed inside `<bs-list-view>`, then
use `<bs-list-nav-item>` to compose the navigation menus. The navigation menus created by
`<bs-list-nav-item>` has consistent styling and meets the _Material Design specifications_.

::: BlockVue {title="ListNav Example"}

```html
<bs-app class="mobi-card my-demo-wrapper mx-auto">
  <bs-card shadow>
    <bs-appbar class="bg-purple darken-3">
      <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
      <bs-appbar-title title="Menus" class="text-white"></bs-appbar-title>
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
```
:::

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
See [BsIcon](/components/icons/icon) to learn more about how to apply the **Google Material Icons**
to `icon` property.
:::

<!-- @include: @/components/icon-migration-info.md --> 


## Styling

### Color

We can also make `<bs-list-nav>` to have a background color other than _white_. To achieve this,
we need to set the `color` property of `<bs-list-view>` component to the desired _color name_.

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVue {title="ListNav Color Example"}

```html
<bs-app class="mobi-card my-demo-wrapper mx-auto">
  <bs-card class="bg-special-color" shadow>
    <bs-appbar class="bg-orange darken-1">
      <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
      <bs-appbar-title title="Menus" class="text-white"></bs-appbar-title>
    </bs-appbar>
    <bs-list-view color="special-color">
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
```
:::

<!-- @include: @/components/colors-tip.md -->


### Outer padding {class="mt-lg-5"}

Additionally, we can also add predefined outer padding on the left or right side of the navigation menus.
To create the padding, sets the `space-around` property of the `<bs-list-view>` component with value:
`left`, `right` or `both`.

::: BlockVue {title="ListNav Padding Example"}

```html
<bs-app class="mobi-card my-demo-wrapper mx-auto">
  <bs-card shadow>
    <bs-appbar class="bg-orange darken-1">
      <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
      <bs-appbar-title title="Menus" class="text-white"></bs-appbar-title>
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
```
:::


### Item border {class="mt-lg-5"}

We can also give a border to the active navigation's menu. To achieve this, sets the
`item-border-variant` property of `<bs-list-view>` component with value: `left`, `right`,
`left-right`, `top`, `bottom`, or `top-bottom`.

<SmallNote color="teal">Added since v2.0.0</SmallNote>

::: BlockVue {title="ListNav Padding Example"}

```html
<bs-app class="mobi-card my-demo-wrapper mx-auto">
  <bs-card shadow>
    <bs-appbar class="bg-orange darken-1">
      <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
      <bs-appbar-title title="Menus" class="text-white"></bs-appbar-title>
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
```
:::


### Rounded style {class="mt-lg-5"}

Additionaly, we can also add additional style appearance to the navigation's menu.
There are two built-in style appearance, which are: **Rounded** and **Rounded Pill**.
To achieve this, sets the `item-rounded` property of `<bs-list-view>` explicitly to
create _rounded style_, or `item-rounded-pill` to create _rounded pill style_ to an
active navigation menu.

<SmallNote color="teal">Added since v2.0.0</SmallNote>

::: BlockVue {title="ListNav Item Style Example"}

```html
<bs-app class="mobi-card my-demo-wrapper mx-auto">
  <bs-card shadow>
    <bs-appbar class="bg-orange darken-1">
      <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
      <bs-appbar-title title="Menus" class="text-white"></bs-appbar-title>
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
```
:::


## Usage Example

The following are a collection of examples that demonstrate more advanced use of the `<bs-list-nav>`.

### Nested navigation

To create nested navigation list, the child navigation list needs to be wrapped by `<bs-list-nav>` and
placed inside current `<bs-list-nav-item>`. Optionally, we can define the `depth` or `indent` property
to customize the indentation from the left side.

::: BlockVue {title="Nested Navigation Example"}

```html
<bs-app class="mobi-card my-demo-wrapper mx-auto">
  <bs-card shadow>
    <bs-appbar class="bg-purple darken-3" shadow>
      <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
      <bs-appbar-title title="Topics" class="text-white"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-button color="light-grey" icon="more_vert" mode="icon" flat></bs-button>
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
```
:::


### Mixed with List Tile {class="mt-lg-5"}

`<bs-list-nav>` can also be mixed with `<bs-list-tile>` to display custom and fine tune
navigation menus.

::: BlockVue {title="ListNav mixed with ListTile Example"}

```html
<bs-app class="mobi-card my-demo-wrapper mx-auto">
  <bs-card shadow>
    <bs-appbar class="bg-deep-purple darken-2">
      <bs-button color="light-grey" icon="menu" mode="icon" flat> </bs-button>
      <bs-appbar-title title="Mail" class="text-white"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-button color="light-grey" icon="more_vert" mode="icon" flat></bs-button>
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
          <bs-badge type="pill" variant="secondary">102</bs-badge>
        </bs-list-tile-action>
      </bs-list-tile>
      <bs-list-tile url="#mixed-with-list-tile">
        <bs-list-tile-leading icon="delete_outlined"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Trash</bs-list-tile-title>
        </bs-list-tile-content>
        <bs-list-tile-action>
          <bs-badge type="pill" variant="secondary">12</bs-badge>
        </bs-list-tile-action>
      </bs-list-tile>
      <bs-list-tile url="#mixed-with-list-tile">
        <bs-list-tile-leading icon="gpp_maybe_outlined"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Spam</bs-list-tile-title>
        </bs-list-tile-content>
        <bs-list-tile-action>
          <bs-badge type="pill" variant="secondary">8</bs-badge>
        </bs-list-tile-action>
      </bs-list-tile>
    </bs-list-view>
  </bs-card>
</bs-app>
```
:::


### Inside Side Drawer {class="mt-lg-5"}

`<bs-list-nav>` can also be used inside `<bs-side-drawer>` to create side navigation menus.

::: BlockVue {title="ListNav Inside SideDrawer Example" clientOnly="true" file="./docs/components/scripts/side-drawer-1.js"}

```vue
<template>
  <bs-app class="light-mode bg-blue-grey lighten-3 rounded-md-3" style="height: 500px;">
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
    <bs-side-drawer v-model:open="openSideDrawer1" class="border-end">
      <div class="d-flex align-items-center p-3">
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
            badge-variant="secondary"
            url="#side-drawer"
          ></bs-list-nav-item>
          <bs-list-nav-item
            icon="delete"
            label="Trash"
            badge="12" 
            badge-type="pill" 
            badge-variant="secondary"
            url="#side-drawer"
          ></bs-list-nav-item>
          <bs-list-nav-item
            icon="gpp_maybe"
            label="Spam"
            badge="8" 
            badge-type="pill" 
            badge-variant="secondary"
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

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.0</SmallNote>

### List View {#css-list-view}

```scss
--md-listview-padding-x: 0;
--md-listview-padding-y: 0.5rem;
--md-listview-bg: #{$color};

```

### List Nav {#css-list-nav}

```scss
--md-nav-item-padding-x: 1rem;
--md-nav-item-padding-y: 0.25rem;
--md-nav-item-line-height: normal;
--md-nav-item-font-size: 1rem;
--md-nav-item-font-weight: 400;
--md-nav-item-color: #{$tile-title-color};
--md-nav-item-divider-color: #{$divider-color};
--md-nav-item-icon-color: #{$tile-leading-color};
--md-nav-item-expanded-bg: #{$nav-item-expanded-bg};

--md-nav-item-active-bg: #{$tile-active-bg};
--md-nav-item-active-color: #{$tile-active-title-color};
--md-nav-item-active-icon-color: #{$tile-active-leading-icon-color};
--md-nav-item-active-font-weight: 500;

--md-nav-item-disable-color: #{$tile-disable-title-color};
--md-nav-item-disable-icon-color: #{$tile-disable-leading-color};
--md-nav-item-hover-bg: #{$tile-hover-bg};

```


## API Reference

### BsListView {#api-list-view}

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-list-view">
    <div class="doc-table-responsive doc-table-props">

| Property      | Type        | Default   | Description |
|---------------|-------------|-----------|-------------|
| color         | `String`    | `'white'` | ListView color appearance. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) or [Material Color](/reference/color-variants#material-colors) variants can be used. |
| individual-state  | `Boolean` | `false`   | The ListView doesn't manage each ListTile's state. <bs-badge color="info">v2.0.0</bs-badge> |
| item-rounded      | `Boolean` | `false`   | Apply _rounded style_ to the _BsListNavItem_ or _BsListTile_. <bs-badge color="info">v2.0.0</bs-badge> |
| item-rounded-pill | `Boolean` | `false`   | Apply _rounded pill style_ to the _BsListNavItem_ or _BsListTile_. <bs-badge color="info">v2.0.0</bs-badge> |
| item-border-variant | `String` |  | Give border around the active item. Valid values are: `left`, `right`, `left-right`, `top`, `bottom`, `top-bottom`. <bs-badge color="info">v2.0.0</bs-badge> |
| model-value <Badge type="tip">v-model</Badge> | `IListItem` |    | Property that hold the ListView's active item object instance. <BsBadge color="info">v2.0.0</BsBadge> |
| overflow-hidden | `Boolean` | `false`   | Apply css `'overflow-hidden'` or not. |
| single-expand   | `Boolean` | `true`    | If `false` then more than one item can be expanded. Only applicable to _BsListNav_. |
| space-around    | `String`  |   | Give padding around each item. Valid values are: `both`, `left`, `right`. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-list-view">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| change  | ( value:`IListItem`, oldValue: `IListItem`) | Fired immediately when this component's mutate its `model-value`. <BsBadge color="info">v2.0.0</BsBadge> |
| update:model-value | ( value:`IListItem`) | Fired when this component's `model-value` is updated. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-list-view">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListNav {#api-list-nav class="mt-lg-5"}

<BsTabs v-model="tabs2active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-list-nav">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| child    | `Boolean` | `false` | Treat the ListNav as child Navigation menus. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-list-nav">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListNavItem {#api-list-nav-item class="mt-lg-5"}

<BsTabs v-model="tabs3active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-list-nav-item">
    <div class="doc-table-responsive doc-table-props">

| Property   | Type      | Default | Description |
|------------|-----------|---------|-------------|
| active <Badge type="tip">v-model</Badge> | `Boolean` | `false` | Component state and monitored by `v-model`. |
| active-class  | `String` | `'active'` | `<router-link>` property, configure the active CSS class applied when the link is active. Typically you will want to set this to class name `active`. |
| badge         | `String` |  | The text to render as badge label. |
| badge-color   | `String` |  | The badge color appearance. <BsBadge color="info">v2.0.0</BsBadge> |
| badge-type    | `String` |  | Create Badge with `pill` or `label` style. <BsBadge color="info">v2.0.0</BsBadge> |
| badge-variant | `String` |  | The badge variant, valid values: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. |
| border-off    | `Boolean` | `false` | Remove border style that have been applied via _BsListView_ to this _BsListNavItem_. <BsBadge color="info">v2.0.0</BsBadge> |
| depth      | `Number`  |  | Item depth level in tree hierarchy (zero based level). |
| disabled   | `Boolean` | `false` | Component state. |
| icon       | `String`  |         | <div style="min-width:390px"> Icon to display inside the component. <BsBadge color="info">Updated on v2.1.0</BsBadge> <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `icon-variant` property. </div> |
| icon-flip  | `String`  |         | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| icon-pulse | `Boolean` | `false` | Apply **pulse** animation to the icon. |
| icon-rotation | `Number` |       | Rotate the icon, valid values are: `90`, `180`, `270`. |
| icon-size  | `Number`/`String` |  | Render the icon at predefined size in pixel.  |
| icon-spin  | `Boolean` | `false` | Apply **spin** animation to the icon. |
| icon-variant  | `String`  | `'outlined'` | Use predefined icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <BsBadge color="info">v2.1.0</BsBadge> |
| id         | `String`  |  | Sets the component `ID`. This property value is auto generate. <BsBadge color="info">v2.0.0</BsBadge> |
| indent     | `Number`  |  | Text indentation from left side. |
| label <Badge type="danger">required</Badge> | `String` |  | The text label to display. |
| location    | `RouteLocationAsRelativeGeneric` |  | The navigation location target. <BsBadge color="info">v2.0.11</BsBadge> <br /> <br /> The value must be an object that satisfies the `to` property of the `<RouterLink>` component. <br /> <br /> This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information. |
| path        | `String`  |  | The route path for the navigation target. <br /> <br /> This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information. |
| path-name   | `String`  |  | The path name for the navigation target. <BsBadge color="info">v2.0.11</BsBadge> <br /> <br /> This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information. |
| pill-off    | `Boolean` | `false` | Remove _rounded pill_ style that have been applied via _BsListView_ to this _BsListNavItem_. <BsBadge color="info">v2.0.0</BsBadge> |
| ripple-off  | `Boolean` | `false` | Disabled ripple effect. |
| rounded-off | `Boolean` | `false` | Remove _rounded_ style that have been applied via _BsListView_ to this _BsListNavItem_. <BsBadge color="info">v2.0.0</BsBadge> |
| url         | `String`  |  | Absolute or relative URL for the navigation target, when [vue-router](https://router.vuejs.org/) doesn't exists. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-list-nav-item">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| click  | ( evt:`Event`) | Fired when a non-disabled _ListNavItem_ is clicked.  |
| update:active | ( value:`Boolean`) | Fired when this component's state is updated. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-list-nav-item">
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
