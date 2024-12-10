---
description: A popup dialog component that brings information to the user. It also provides actions through the action buttons to prompt the user for input or to ask for a decision. 
--- 

# Modal


::: lead
**BsModal** is a popup dialog component that brings information to the user. It also 
provides actions through the action buttons to prompt the user for input or to ask
for a decision. The component can also contain more complex UI elements that require 
the focus of the user. 
:::


## Overview

**BsModal** uses `<bs-overlay>` component internally and can be closed using 
the ESC key (_enabled by default_), or clicking the backdrop (_enabled by default_).
**BsModal** doesn't have any button, to achieve this you can add the appropriate 
action buttons on the `footer` slot. 

When a dialog contains complex UI or you want to have appropriate dialog size, it is good
to define the `width` property and `max-width` property to a desire value.

::: BlockVue {clientOnly="true" title="Modal Example" file="./docs/components/scripts/modal-1.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 text-center">
    <bs-button color="primary" @click="autoCloseModalVisible = true">
      Open Dialog
    </bs-button>
    <bs-modal 
      v-model:open="autoCloseModalVisible"
      title="Dialog Title"
      max-width="85%">
      <b>Hello, I am a modal.</b><br>
      You can click outside area or press ESC to close me.

      <template #footer>
        <bs-button 
          color="primary"
          active 
          @click="autoCloseModalVisible = false">
          OK
        </bs-button>
        <bs-button 
          color="primary" 
          outlined 
          @click="autoCloseModalVisible = false">
          Cancel
        </bs-button>
      </template>
    </bs-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const autoCloseModalVisible = ref(false);
</script>
```
:::


## Hiding The Overlay

Overlay or backdrop is enabled by default. To hide the overlay, sets `overlay` property 
to `false`.

::: BlockVue {clientOnly="true" title="Modal without backdrop example" file="./docs/components/scripts/modal-2.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 text-center">
    <bs-button color="primary" @click="noOverlayVisible = true">
      Open Dialog
    </bs-button>
    <bs-modal 
      v-model:open="noOverlayVisible"
      :overlay="false"
      title="Without Overlay"
      max-width="85%">
      <b>Hello, I am a modal.</b><br>
      You can click outside area or press ESC to close me.

      <template #footer>
        <bs-button 
          color="primary"
          active 
          @click="noOverlayVisible = false">
          OK
        </bs-button>
        <bs-button 
          color="primary" 
          outlined 
          @click="noOverlayVisible = false">
          Cancel
        </bs-button>
      </template>
    </bs-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const noOverlayVisible = ref(false);
</script>
```
:::


## True Modal Dialog

You can show a modal dialog by setting the `overlay-click-close` property to `false`.

::: BlockVue {clientOnly="true" title="True Modal Dialog Example" file="./docs/components/scripts/modal-3.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 text-center">
    <bs-button color="primary" @click="trueModalVisible = true">
      Open Dialog
    </bs-button>
    <bs-modal 
      v-model:open="trueModalVisible"
      :overlay-click-close="false"
      title="Modal Dialog"
      max-width="85%">
      <b>Hello, I am a modal.</b><br>
      You can only close me by clicking the button below or press ESC.

      <template #footer>
        <bs-button 
          color="primary"
          active 
          @click="trueModalVisible = false">
          OK
        </bs-button>
        <bs-button 
          color="primary" 
          outlined 
          @click="trueModalVisible = false">
          Cancel
        </bs-button>
      </template>
    </bs-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const trueModalVisible = ref(false);
</script>
```
:::


## Scrolling Long Content

When dialog content become too long, you can make the dialog content scrollable.

::: BlockVue {clientOnly="true" title="Modal Dialog with long content" file="./docs/components/scripts/modal-4.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 text-center">
    <bs-button color="primary" @click="scrollableModalVisible = true">
      Open Dialog
    </bs-button>
    <bs-modal 
      v-model:open="scrollableModalVisible"
      title="Long Content Dialog"
      width="600"
      max-width="90%"
      scrollable
    >
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>

      <template #footer>
        <bs-button 
          color="primary"
          active 
          @click="scrollableModalVisible = false">
          OK
        </bs-button>
        <bs-button 
          color="primary" 
          outlined 
          @click="scrollableModalVisible = false">
          Cancel
        </bs-button>
      </template>
    </bs-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const scrollableModalVisible = ref(false);
</script>
```
:::


## CSS Variables

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.0</SmallNote>

```scss
--md-modal-background: #fff;
--md-modal-border-radius: 1rem;
--md-modal-header-padding: 1.5rem 1.5rem 1.25rem;
--md-modal-body-padding: 1.5rem 1.5rem 1.25rem;
--md-modal-footer-padding: 0.5rem 1rem 1rem 1rem;
--md-modal-max-width: 80%;

```


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default   | Description |
|----------|----------|-----------|-------------|
| body-class   | `String`/`String[]` |  | Additional CSS class name for dialog body container. |
| esc-close    | `Boolean`        | `true`  | Close the modal dialog when **ESC** key is pressed. |
| footer-class | `String`/`String[]` |  | Additional CSS class name for dialog footer container. |
| full-page    | `Boolean`        | `false` | Show modal dialog in full page mode. |
| header-class | `String`/`String[]` |  | Additional CSS class name for dialog header container. |
| max-width    | `Number`         |  | Modal dialog maximum width. |  
| open <Badge type="tip">v-model</Badge> | `Boolean` | `false` | Component state, show or hide modal dialog. |
| overlay             | `Boolean` | `true` | Show backdrop overlay or not. |
| overlay-click-close | `Boolean` | `true` | Enable or disable closing the modal dialog when the backdrop is clicked. <BsBadge color="info">v2.0.0</BsBadge> |
| overlay-color   | `String`  | `'#000'`| The backdrop overlay color. |
| overlay-opacity | `Number`  | `0.4`   | The backdrop overlay opacity. |
| scrollable      | `Boolean` | `false` | Enable or disable scrollable body capability. |
| title           | `String`  |  | Modal dialog title. |
| transition      | `String`  | `'scale'` | Transition animation name when showing the dialog. Valid values are: `scale`, `slide-top`, `slide-bottom`, `slide-left`, `slide-right`, `fade`. |
| width           | `Number`  |  | Modal dialog width. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| close  |  | Fired when the modal dialog is closed. |
| update:open | ( state:`Boolean`) | Used to update the `open` property. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |
| header  | The outlet slot used to place the custom header content. |
| footer  | The outlet slot used to place the footer content. |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { ref } from 'vue';

const tabs1active = ref(0);
const autoCloseModalVisible = ref(false);
const noOverlayVisible = ref(false);
const trueModalVisible = ref(false);
const scrollableModalVisible = ref(false);
</script>
