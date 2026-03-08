---
description: Subheader is small and lightweight component which is used as lists title. 
--- 

# Subheader

:::lead
**BsSubheader** is small and lightweight component which is used as lists title.
:::


## Usage Examples

The following is an example that demonstrate how to use the `<bs-subheader>`.

::: BlockVue {title="Subheader Usage"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <bs-card class="mobi-card w-full mx-auto" shadow>
      <bs-list-view>
        <bs-subheader>Today</bs-subheader>
        <bs-list-tile>
          <bs-list-tile-leading img-src="/img/1.jpg" circle></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Jason Oner</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action center>
            <bs-icon class="text-secondary" icon="chat" />
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile>
          <bs-list-tile-leading img-src="/img/2.jpg" circle></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Ranee Carlson</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action center>
            <bs-icon class="text-secondary" icon="chat" />
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile>
          <bs-list-tile-leading img-src="/img/3.jpg" circle></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Cindy Baker</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action center>
            <bs-icon class="text-secondary" icon="chat" />
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
      <bs-divider></bs-divider>
      <bs-list-view>
        <bs-subheader>History</bs-subheader>
        <bs-list-tile>
          <bs-list-tile-leading img-src="/img/4.jpg" circle></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Ali Connors</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action center>
            <bs-icon class="text-secondary" icon="chat" />
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile>
          <bs-list-tile-leading img-src="/img/5.jpg" circle></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Travis Howard</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action center>
            <bs-icon class="text-secondary" icon="chat" />
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </div>
</template>

```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-subheader` for better customization.

<SmallNote color="teal">Added in v2.0.0</SmallNote>

```scss
.md-subheader {
  --md-subheader-font-size: var(--font-size-default);
  --md-subheader-font-weight: var(--font-weight-semibold);
  --md-subheader-padding-x: #{vars.$padding-md};
  --md-subheader-padding-y: 0;
}

```


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description    |
| -------- | --------- | ------- | ---------------|
| dark     | `Boolean` | `false` | Define explicitly when is placed inside element with dark background. |

</div>
  </BsTab>
</BsTabs>

<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
