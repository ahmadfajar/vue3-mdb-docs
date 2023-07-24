---
outline: [2, 3]
---

# App Container


::: lead
**App Container** is a lightweight components which is used as layout container for your
application. If you intend to build an app with *Vue MDBootstrap* as the main UI components, 
and the app layouts such as Navigation Bar and SideBar will use Vue MDBootstrap, 
then you need these components so that [BsAppbar](/components/appbar) and 
[BsSideDrawer](/components/side-drawer) components can work properly.
:::


## Basic Usage

::: BlockVue {title="App Container Example" clientOnly="true" file="./docs/components/scripts/container.js"}

```vue
<template>
  <bs-app-container class="bg-grey-400" style="height: 300px">
    <bs-appbar clipped-left shadow>
      <bs-button
        color="secondary"
        icon="menu"
        mode="icon"
        flat
        @click="toggleSideDrawer(openSideDrawer)"
      ></bs-button>
      <bs-appbar-title title="Page Title"></bs-appbar-title>
    </bs-appbar>
    <bs-side-drawer v-model:open="openSideDrawer" class="border-end" width="200">
      <div class="p-2">
        <div class="nav nav-pills flex-column">
          <div class="nav-item">
            <a href="#" class="nav-link d-flex active">
              <bs-icon icon="home_outlined"></bs-icon>
              <span class="ps-3">Home</span>
            </a>
          </div>
          <div class="nav-item">
            <a href="#" class="nav-link d-flex">
              <bs-icon icon="view_list_outlined"></bs-icon>
              <span class="ps-3">Orders</span>
            </a>
          </div>
          <div class="nav-item">
            <a href="#" class="nav-link d-flex">
              <bs-icon icon="redeem_outlined"></bs-icon>
              <span class="ps-3">Products</span>
            </a>
          </div>
        </div>
      </div>
    </bs-side-drawer>
    <bs-container app>
      <bs-content>
        <!-- Your content goes here -->
      </bs-content>
    </bs-container>
  </bs-app-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const openSideDrawer = ref(true);

function toggleSideDrawer(value: boolean) {
  openSideDrawer.value = !value;
}
</script>
```
:::


## API Reference

### BsAppContainer

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type        | Default     | Description |
|-------------|-------------|-------------|-------------|
| id          | `String`    |  | Sets the element `ID` attribute. This property value is auto generate. |
| viewport-height | `Boolean` | `false` | Use document viewport height or not. <BsBadge>v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to render the main content. |

</div>
  </BsTab>
</BsTabs>

### BsContainer {class="pt-3"}

<BsTabs v-model="tabs2active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type        | Default     | Description |
|-------------|-------------|-------------|-------------|
| app  | `Boolean` | `false` | Mount this component as part of application container or just ordinary container. If mounted as part of application container, then it will adapt to `BsSideDrawer` and `BsAppbar` size. |
| tag  | `String`  | `'div'`   | Html tag used to render this component. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| resize | (`target: HTMLElement`) | Triggers when this component is resized. <BsBadge>v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to render the main content. |

</div>
  </BsTab>
</BsTabs>

### BsContent {class="pt-3"}

<BsTabs v-model="tabs3active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type        | Default     | Description |
|-------------|-------------|-------------|-------------|
| app  | `Boolean` | `false` | If `true`, then this component will be wrapped by `BsContainer`. |
| tag  | `String`  | `'main'` | Html tag used to render this component. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to render the main content. |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { ref } from 'vue';

const openSideDrawer = ref(true);
const tabs1active = ref(0);
const tabs2active = ref(0);
const tabs3active = ref(0);

function toggleSideDrawer(value: boolean) {
  openSideDrawer.value = !value;
}
</script>
