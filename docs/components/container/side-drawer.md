---
outline: [2, 3] 
description: SideDrawer is a lightweight component's container which is used to house application navigation, logo and others. 
---

# Side Drawer


::: lead
**BsSideDrawer** is a lightweight component's container which is used to house 
application navigation, logo and others.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

## Overview

**BsSideDrawer** is usually used to house your application navigation. It works
well with [BsAppbar](/components/container/appbar) and can automatically adapt to 
the screen size. Background color can be modified using global CSS variables.

::: BlockVue {title="Side Drawer Overview" clientOnly="true" file="./docs/components/container/js/side-drawer-1.js"}

```vue
<template>
  <bs-app class="app-vh bg-gray-500 dark:bg-gray-900/70 rounded md-shadow-1" style="height: 350px;">
    <bs-side-drawer v-model:open="openSideDrawer1" shadow>
      <div class="flex items-center p-3">
        <img
          class="inline rounded-circle"
          src="/img/kitty-2.jpg"
          alt="image"
          style="width: 42px"
        />
        <span class="h4 ps-3 mb-0">Kitty Doe</span>
      </div>
      <bs-divider></bs-divider>
      <div class="p-2">
        <div class="nav nav-pills flex-col">
          <div class="nav-item">
            <a href="#overview" class="nav-link d-flex active">
              <bs-icon icon="home_outlined"></bs-icon>
              <span class="ps-3">Home</span>
            </a>
          </div>
          <div class="nav-item">
            <a href="#overview" class="nav-link d-flex">
              <bs-icon icon="view_list_outlined"></bs-icon>
              <span class="ps-3">Orders</span>
            </a>
          </div>
          <div class="nav-item">
            <a href="#overview" class="nav-link d-flex">
              <bs-icon icon="redeem_outlined"></bs-icon>
              <span class="ps-3">Rewards</span>
            </a>
          </div>
          <div class="nav-item">
            <a href="#overview" class="nav-link d-flex">
              <bs-icon icon="account_circle_outlined"></bs-icon>
              <span class="ps-3">Profile</span>
            </a>
          </div>
        </div>
      </div>
    </bs-side-drawer>
    <bs-container app>
      <bs-content class="h-full d-flex justify-center items-center">
        <bs-button @click="toggleSideDrawer1(openSideDrawer1)">TOGGLE</bs-button>
      </bs-content>
    </bs-container>
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


## Location

**BsSideDrawer** support 2 position location: ***left*** and ***right***. Use 
`position` property with value `left` or `right` to change the position location. 

<SmallNote color="teal">Added in v2.0.0</SmallNote>

::: BlockVue {title="Side Drawer Location" clientOnly="true" file="./docs/components/container/js/side-drawer-2.js"}

```vue
<template>
  <bs-app class="app-vh bg-gray-500 dark:bg-gray-900/70 rounded md-shadow-1" style="height: 350px;">
    <bs-side-drawer v-model:open="openSideDrawer2" position="right" shadow>
      <div class="flex items-center p-3">
        <img
          class="inline rounded-circle"
          src="/img/kitty-2.jpg"
          alt="image"
          style="width: 42px"
        />
        <span class="h4 ps-3 mb-0">Kitty Doe</span>
      </div>
      <bs-divider></bs-divider>
      <div class="p-2">
        <div class="nav nav-pills flex-col">
          <div class="nav-item">
            <a href="#location" class="nav-link d-flex active">
              <bs-icon icon="home_outlined"></bs-icon>
              <span class="ps-3">Home</span>
            </a>
          </div>
          <div class="nav-item">
            <a href="#location" class="nav-link d-flex">
              <bs-icon icon="view_list_outlined"></bs-icon>
              <span class="ps-3">Orders</span>
            </a>
          </div>
          <div class="nav-item">
            <a href="#location" class="nav-link d-flex">
              <bs-icon icon="redeem_outlined"></bs-icon>
              <span class="ps-3">Rewards</span>
            </a>
          </div>
          <div class="nav-item">
            <a href="#location" class="nav-link d-flex">
              <bs-icon icon="account_circle_outlined"></bs-icon>
              <span class="ps-3">Profile</span>
            </a>
          </div>
        </div>
      </div>
    </bs-side-drawer>
    <bs-container app>
      <bs-content class="h-full d-flex justify-center items-center">
        <bs-button @click="toggleSideDrawer2(openSideDrawer2)">TOGGLE</bs-button>
      </bs-content>
    </bs-container>
  </bs-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const openSideDrawer2 = ref(true);

function toggleSideDrawer2(value: boolean) {
  openSideDrawer2.value = !value;
}
</script>

```
:::


## Mini Side Drawer

**BsSideDrawer** also support mini size. Sets the `mini` property to `true` to
enable the mini Side Drawer. You can adjust the width of `<bs-side-drawer>` on 
minimize state using the `mini-width` property.

::: BlockVue {title="Mini Side Drawer" clientOnly="true" file="./docs/components/container/js/side-drawer-5.js"}

```vue
<template>
  <bs-app class="app-vh bg-gray-500 dark:bg-gray-900/70 rounded md-shadow-1" style="height: 350px;">
    <bs-side-drawer v-model:open="miniSideDrawer1" mini>
      <div class="flex items-center p-2" style="width: 250px">
        <img
          class="rounded-circle md-link ps-1"
          src="/img/kitty-2.jpg"
          alt="image"
          style="width: 36px;"
          @click="miniSideDrawer1 = true"
        />
        <transition name="fade">
          <div v-if="miniSideDrawer1" class="h4 mb-0 ps-3 flex flex-fill">
            Kitty Doe
          </div>
        </transition>
        <bs-button
          color="secondary"
          icon="chevron_left"
          mode="icon"
          flat
          @click="miniSideDrawer1 = false"
        />
      </div>
      <bs-divider/></bs-divider>
      <div class="p-2">
        <div class="nav nav-pills flex-col" style="--bs-nav-link-padding-x: 0.5rem">
          <div class="nav-item w-full">
            <a href="#mini-side-drawer" class="nav-link d-flex active">
              <bs-icon icon="home_outlined"></bs-icon>
              <transition name="fade">
                <span v-if="miniSideDrawer1" class="ps-3">Home</span>
              </transition>
            </a>
          </div>
          <div class="nav-item">
            <a href="#mini-side-drawer" class="nav-link d-flex">
              <bs-icon icon="view_list_outlined"></bs-icon>
              <transition name="fade">
                <span v-if="miniSideDrawer1" class="ps-3">Orders</span>
              </transition>
            </a>
          </div>
          <div class="nav-item">
            <a href="#mini-side-drawer" class="nav-link d-flex">
              <bs-icon icon="redeem_outlined"></bs-icon>
              <transition name="fade">
                <span v-if="miniSideDrawer1" class="ps-3">Rewards</span>
              </transition>
            </a>
          </div>
          <div class="nav-item">
            <a href="#mini-side-drawer" class="nav-link d-flex">
              <bs-icon icon="account_circle_outlined"></bs-icon>
              <transition name="fade">
                <span v-if="miniSideDrawer1" class="ps-3">Profile</span>
              </transition>
            </a>
          </div>
        </div>
      </div>
    </bs-side-drawer>
    <bs-container app></bs-container>
  </bs-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const miniSideDrawer1 = ref(false);
</script>

```
:::


## Usage Example

The following are a collection of examples that demonstrate more advanced use of the `<bs-side-drawer>`.

### With Appbar {#usage-example-with-appbar}

::: BlockVue {title="Side Drawer with Appbar" clientOnly="true" file="./docs/components/container/js/side-drawer-3.js"}

```vue
<template>
  <bs-app class="app-vh bg-gray-500 dark:bg-gray-900/70 rounded md-shadow-1" style="height: 400px;">
    <bs-appbar clipped-left shadow>
      <bs-button
        color="secondary"
        icon="menu"
        mode="icon"
        flat
        @click="toggleSideDrawer3(openSideDrawer3)"
      ></bs-button>
      <bs-appbar-title title="Page Title"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-appbar-items>
        <bs-button color="secondary" icon="search" mode="icon" flat></bs-button>
        <bs-button color="secondary" icon="notifications_outlined" mode="icon" flat></bs-button>
      </bs-appbar-items>
    </bs-appbar>
    <bs-side-drawer v-model:open="openSideDrawer3" class="border-e">
      <div class="flex items-center p-3">
        <bs-avatar img-src="/img/kitty-2.jpg" size="42" circle></bs-avatar>
        <span class="h4 ps-3 mb-0">Kitty Doe</span>
      </div>
      <bs-divider></bs-divider>
      <bs-list-view>
        <bs-list-nav>
          <bs-list-nav-item icon="inbox" label="Inbox" url="#usage-example-with-appbar"></bs-list-nav-item>
          <bs-list-nav-item icon="bookmarks" label="Important" url="#usage-example-with-appbar"></bs-list-nav-item>
          <bs-list-nav-item icon="send" label="Sent" url="#usage-example-with-appbar"></bs-list-nav-item>
          <bs-list-nav-item icon="description" label="Drafts" url="#usage-example-with-appbar"></bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-side-drawer>
    <bs-container app></bs-container>
  </bs-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const openSideDrawer3 = ref(true);

function toggleSideDrawer3(value: boolean) {
  openSideDrawer3.value = !value;
}
</script>

```
:::


### Clipped Side Drawer {#usage-example-clipped-side-drawer class="mt-lg-5"}

::: BlockVue {title="Clipped Side Drawer" clientOnly="true" file="./docs/components/container/js/side-drawer-4.js"}

```vue
<template>
  <bs-app class="app-vh bg-gray-500 dark:bg-gray-900/70 rounded md-shadow-1" style="height: 400px;">
    <bs-appbar shadow>
      <bs-button
        color="secondary"
        icon="menu"
        mode="icon"
        flat
        @click="toggleSideDrawer4(openSideDrawer4)"
      ></bs-button>
      <bs-appbar-title title="Page Title"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-appbar-items>
        <bs-button color="secondary" icon="search" mode="icon" flat></bs-button>
        <bs-button color="secondary" icon="notifications_outlined" mode="icon" flat></bs-button>
      </bs-appbar-items>
    </bs-appbar>
    <bs-side-drawer v-model:open="openSideDrawer4" class="border-e" clipped>
      <div class="d-flex d-lg-none items-center p-3 border-b">
        <bs-avatar img-src="/img/kitty-2.jpg" size="42" circle></bs-avatar>
        <span class="h4 ps-3 mb-0">Kitty Doe</span>
      </div>
      <bs-list-view>
        <bs-list-nav>
          <bs-list-nav-item icon="inbox" label="Inbox" url="#usage-example-clipped-side-drawer"></bs-list-nav-item>
          <bs-list-nav-item icon="bookmarks" label="Important" url="#usage-example-clipped-side-drawer"></bs-list-nav-item>
          <bs-list-nav-item icon="send" label="Sent" url="#usage-example-clipped-side-drawer"></bs-list-nav-item>
          <bs-list-nav-item icon="description" label="Drafts" url="#usage-example-clipped-side-drawer"></bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-side-drawer>
    <bs-container app></bs-container>
  </bs-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const openSideDrawer4 = ref(true);

function toggleSideDrawer4(value: boolean) {
  openSideDrawer4.value = !value;
}
</script>

```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces global CSS variables for better customization.

<SmallNote color="teal">Added in v2.2.0</SmallNote>

```css
:root {
  --sidedrawer-background: oklch(0.969 0.005 247.877);
  --sidedrawer-foreground: var(--foreground);

  /* navigation */
  --sidedrawer-item-foreground: var(--foreground);
  --sidedrawer-item-foreground-secondary: var(--foreground-subtle);
  --sidedrawer-item-foreground-subtle: var(--foreground-subtle-secondary);
  --sidedrawer-item-active-background: oklch(0.65 0.13 294.86 / 0.3);
  --sidedrawer-item-active-foreground: oklch(42.17% 0.12 293.75deg);
  --sidedrawer-item-active-foreground-secondary: oklch(42.17% 0.12 293.75deg / 0.75);
  --sidedrawer-item-hover-background: oklch(46.85% 0.12 293.75deg / 0.1);
  --sidedrawer-item-hover-foreground: var(--foreground);
  --sidedrawer-item-border-indicator: var(--md-field-active-indicator);
  --sidedrawer-item-divider-color: var(--border-translucent);
  --sidedrawer-item-expanded-background: oklch(0 0 0 / 0.03);
}    

```

## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type      | Default     | Description |
|-------------|-----------|-------------|-------------|
| color <Badge type="warning">deprecated</Badge> | `String`  |  | Sets the component colors. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3">Use global CSS variables instead.</div> |
| clipped      | `Boolean` | `false` | Cut off the top edge of the component. |
| fixed-layout | `Boolean` | `false` | Sets the component position fixed on the left or right side even when scrolling the page. <MdBadge color="info">v2.0.0</MdBadge> |
| mini         | `Boolean` | `false` | The component minimize state. |
| mini-width   | `Number`  | `56`    | The component width in pixel when on minimize state. |
| modal-width  | `Number`  | `300`   | The component width in pixel when display as modal on small screen. |
| open <Badge type="tip">v-model</Badge> | `Boolean` | `true` | The component state, show or hide. |
| overlay-color | `String` | `'#000'` | The backdrop overlay color when the component is displayed as modal. The value must be in hexa-decimal color format. <MdBadge color="info">v2.0.0</MdBadge> |
| position      | `String` | `'left'`   | The component position location. Valid values are: `left`, `right`. <MdBadge color="info">v2.0.0</MdBadge> |
| shadow        | `Boolean`| `false`    | Add shadow effect to the component. |
| tag           | `String` | `'aside'`  | HTML tag used to render the component. |
| width         | `Number` | `250`      | The component width in pixel. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols table:font-mono:col-2">

| Name        | Arguments               | Description |
|-------------|-------------------------|-------------|
| resize      | (target:`HTMLElement`) | Triggers when the component is resized. <MdBadge color="info">v2.0.0</MdBadge> |
| update:open | (state:`Boolean`)      | Triggers when the component becomes visible or invisible. Use this event to update the `open` property or just use the shortcut `v-model:open`. |

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

const openSideDrawer1 = ref(true);
const openSideDrawer2 = ref(true);
const openSideDrawer3 = ref(true);
const openSideDrawer4 = ref(true);
const miniSideDrawer1 = ref(false);
const tabs1active = ref(0);

function toggleSideDrawer1(value: boolean) {
  openSideDrawer1.value = !value;
}

function toggleSideDrawer2(value: boolean) {
  openSideDrawer2.value = !value;
}

function toggleSideDrawer3(value: boolean) {
  openSideDrawer3.value = !value;
}

function toggleSideDrawer4(value: boolean) {
  openSideDrawer4.value = !value;
}
</script>