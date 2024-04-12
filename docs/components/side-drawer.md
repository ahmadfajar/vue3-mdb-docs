---
outline: [2, 3]
---

# Side Drawer


::: lead
**BsSideDrawer** is a lightweight component's container which may contains 
application navigation, logo and others.
:::


## Overview

**BsSideDrawer** is usually used to house your application navigation. It works
well with [BsAppbar](/components/appbar) and can automatically adapt to the screen size. 
You also can change the component's color using the `color` property and use any 
[color variants](/reference/color-variants) as you like.


::: BlockVue {title="Side Drawer Example" clientOnly="true" file="./docs/components/scripts/side-drawer-1.js"}

```vue
<template>
  <bs-app-container class="rounded-3" style="height: 350px;">
    <bs-side-drawer v-model:open="openSideDrawer1" shadow>
      <div class="d-flex align-items-center p-3">
        <img
          class="d-inline rounded-circle"
          src="/img/kitty-2.jpg"
          alt="image"
          style="width: 64px"
        />
        <span class="h4 ps-3 mb-0">Kitty Doe</span>
      </div>
      <bs-divider></bs-divider>
      <div class="p-2">
        <div class="nav nav-pills flex-column">
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
    <bs-container class="bg-blue-grey darken-3" app>
      <bs-content class="justify-content-center align-items-center">
        <bs-button @click="toggleSideDrawer1(openSideDrawer1)">TOGGLE</bs-button>
      </bs-content>
    </bs-container>
  </bs-app-container>
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

<SmallNote color="teal">Added since v2.0.0</SmallNote>

::: BlockVue {title="Side Drawer Location Example" clientOnly="true" file="./docs/components/scripts/side-drawer-2.js"}

```vue
<template>
  <bs-app-container class="rounded-3" style="height: 350px;">
    <bs-side-drawer v-model:open="openSideDrawer2" position="right" shadow>
      <div class="d-flex align-items-center p-3">
        <img
          class="d-inline rounded-circle"
          src="/img/kitty-2.jpg"
          alt="image"
          style="width: 64px"
        />
        <span class="h4 ps-3 mb-0">Kitty Doe</span>
      </div>
      <bs-divider></bs-divider>
      <div class="p-2">
        <div class="nav nav-pills flex-column">
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
    <bs-container class="bg-blue-grey darken-3" app>
      <bs-content class="justify-content-center align-items-center">
        <bs-button @click="toggleSideDrawer2(openSideDrawer2)">TOGGLE</bs-button>
      </bs-content>
    </bs-container>
  </bs-app-container>
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
minimize Side Drawer. You can adjust the width of `<bs-side-drawer>` on minimize 
state using the `mini-width` property.

::: BlockVue {title="Mini Side Drawer Example" clientOnly="true" file="./docs/components/scripts/side-drawer-5.js"}

```vue
<template>
  <bs-app-container class="rounded-3" style="height: 350px;">
    <bs-side-drawer :mini="miniSideDrawer1">
      <div class="d-flex flex-row align-items-center p-2" style="width: 250px">
        <img
          class="rounded-circle md-link"
          src="/img/kitty-2.jpg"
          alt="image"
          style="width: 40px; height: 40px"
          @click="miniSideDrawer1 = false"
        />
        <transition name="fade">
          <div v-if="!miniSideDrawer1" class="h4 mb-0 ps-3 d-flex flex-fill">
            Kitty Doe
          </div>
        </transition>
        <bs-button
          color="stylish-color-dark"
          icon="chevron_left"
          mode="icon"
          flat
          @click="miniSideDrawer1 = true"
        />
      </div>
      <bs-divider/></bs-divider>
      <div class="p-2">
        <div class="nav nav-pills flex-column">
          <div class="nav-item">
            <a href="#mini-side-drawer" class="nav-link d-flex active">
              <bs-icon icon="home_outlined"></bs-icon>
              <transition name="fade">
                <span v-if="!miniSideDrawer1" class="ps-3">Home</span>
              </transition>
            </a>
          </div>
          <div class="nav-item">
            <a href="#mini-side-drawer" class="nav-link d-flex">
              <bs-icon icon="view_list_outlined"></bs-icon>
              <transition name="fade">
                <span v-if="!miniSideDrawer1" class="ps-3">Orders</span>
              </transition>
            </a>
          </div>
          <div class="nav-item">
            <a href="#mini-side-drawer" class="nav-link d-flex">
              <bs-icon icon="redeem_outlined"></bs-icon>
              <transition name="fade">
                <span v-if="!miniSideDrawer1" class="ps-3">Rewards</span>
              </transition>
            </a>
          </div>
          <div class="nav-item">
            <a href="#mini-side-drawer" class="nav-link d-flex">
              <bs-icon icon="account_circle_outlined"></bs-icon>
              <transition name="fade">
                <span v-if="!miniSideDrawer1" class="ps-3">Profile</span>
              </transition>
            </a>
          </div>
        </div>
      </div>
    </bs-side-drawer>
    <bs-container class="bg-blue-grey darken-3" app></bs-container>
  </bs-app-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const miniSideDrawer1 = ref(true);
</script>
```
:::


## Usage Example

The following are a collection of examples that demonstrate more advanced use of the `<bs-side-drawer>`.

### Use With Appbar

::: BlockVue {title="Side Drawer with Appbar Example" clientOnly="true" file="./docs/components/scripts/side-drawer-3.js"}

```vue
<template>
  <bs-app-container class="bg-blue-grey lighten-3 rounded-3" style="height: 400px;">
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
    <bs-side-drawer v-model:open="openSideDrawer3" class="border-end">
      <div class="d-flex align-items-center p-3">
        <bs-avatar img-src="/img/kitty-2.jpg" size="64" circle></bs-avatar>
        <span class="h4 ps-3 mb-0">Kitty Doe</span>
      </div>
      <bs-divider></bs-divider>
      <bs-list-view>
        <bs-list-nav>
          <bs-list-nav-item icon="inbox" label="Inbox" url="#use-with-appbar"></bs-list-nav-item>
          <bs-list-nav-item icon="bookmarks" label="Important" url="#use-with-appbar"></bs-list-nav-item>
          <bs-list-nav-item icon="send" label="Sent" url="#use-with-appbar"></bs-list-nav-item>
          <bs-list-nav-item icon="description" label="Drafts" url="#use-with-appbar"></bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-side-drawer>
    <bs-container app></bs-container>
  </bs-app-container>
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


### Clipped Side Drawer {class="mt-lg-5"}

::: BlockVue {title="Clipped Side Drawer Example" clientOnly="true" file="./docs/components/scripts/side-drawer-4.js"}

```vue
<template>
  <bs-app-container class="bg-blue-grey lighten-3 rounded-3" style="height: 400px;">
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
    <bs-side-drawer v-model:open="openSideDrawer4" class="border-end" clipped>
      <div class="d-flex d-lg-none align-items-center p-3 border-bottom">
        <bs-avatar img-src="/img/kitty-2.jpg" size="64" circle></bs-avatar>
        <span class="h4 ps-3 mb-0">Kitty Doe</span>
      </div>
      <bs-list-view>
        <bs-list-nav>
          <bs-list-nav-item icon="inbox" label="Inbox" url="#clipped-side-drawer"></bs-list-nav-item>
          <bs-list-nav-item icon="bookmarks" label="Important" url="#clipped-side-drawer"></bs-list-nav-item>
          <bs-list-nav-item icon="send" label="Sent" url="#clipped-side-drawer"></bs-list-nav-item>
          <bs-list-nav-item icon="description" label="Drafts" url="#clipped-side-drawer"></bs-list-nav-item>
        </bs-list-nav>
      </bs-list-view>
    </bs-side-drawer>
    <bs-container app></bs-container>
  </bs-app-container>
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


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type      | Default     | Description |
|-------------|-----------|-------------|-------------|
| color       | `String`  | `'white'`   | Sets the component colors. Any [color variants](/reference/color-variants) can be used. |
| clipped     | `Boolean` | `false`     | Cut off the top edge of the component. |
| fixed-layout | `Boolean` | `false`    | Sets the component position fixed on the left or right side even when scrolling the page. <BsBadge color="info">v2.0.0</BsBadge> |
| mini        | `Boolean` | `false`     | The component minimize state. |
| mini-width  | `Number`  | `56` | The component width in pixel when on minimize state. |
| modal-width | `Number`  | `300` | The component width in pixel when display as modal on small screen. |
| open <Badge type="tip">v-model</Badge> | `Boolean` | `true` | The component state, show or hide. |
| overlay-color | `String`  | `'#000'` | The backdrop overlay color when the component is displayed as modal. The value must be in hexa-decimal color format. <BsBadge color="info">v2.0.0</BsBadge> |
| position    | `String` | `'left'` | The component position location. Valid values are: `left`, `right`. <BsBadge color="info">v2.0.0</BsBadge> |
| shadow      | `Boolean`  | `false` | Add shadow effect to the component. |
| tag         | `String`  | `'aside'`  | Html tag used to render the component. |
| width       | `Number` | `250` | The component width in pixel. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| resize  | ( target:`HTMLElement`) | Triggers when the component is resized. <BsBadge color="info">v2.0.0</BsBadge> |
| update:open | ( state:`Boolean`) | Triggers when the component becomes visible or invisible. Use this event to update the `open` property or just use the shortcut `v-model:open`. |

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

const openSideDrawer1 = ref(true);
const openSideDrawer2 = ref(true);
const openSideDrawer3 = ref(true);
const openSideDrawer4 = ref(true);
const miniSideDrawer1 = ref(true);
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