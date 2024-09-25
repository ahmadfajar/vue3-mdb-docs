# Overlay


::: lead
**BsOverlay** is lightweight component for displaying a backdrop overlay.
:::


## Basic Usage

::: BlockVue {title="Overlay Example" clientOnly="true" file="./docs/components/scripts/overlay.js"}

```vue
<template>
  <div class="my-demo-wrapper">  
    <bs-button color="primary" @click="showOverlay = !showOverlay">Show Overlay</bs-button>
    <Teleport to="body">
      <bs-overlay :show="showOverlay" fixed @click="hideOverlay"></bs-overlay>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showOverlay = ref(false);

function hideOverlay() {
  showOverlay.value = false;
}
</script>
```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| color    | `String`  | `#000`  | The backdrop color in hexadecimal format. |
| fixed    | `Boolean` | `false` | Fixed position. |
| opacity  | `Number`  | `0.4`   | The backdrop opacity. |
| show <Badge type="danger">required</Badge> | `Boolean` | `false`  | Show or hide the backdrop overlay. |
| z-index  | `Number`  | `1041`  | CSS z-index display position. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|-----------|-------------|
| click  | ( e:`Event`) | Fired when the backdrop overlay is clicked. |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { ref } from 'vue';

const showOverlay = ref(false);
const tabs1active = ref(0);

function hideOverlay() {
  showOverlay.value = false;
}
</script>
