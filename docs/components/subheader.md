# Subheader

:::lead
**BsSubheader** is small and lightweight component which is used as lists title.
:::


## Usage Examples

The following is an example that demonstrate how to use the `<bs-subheader>`.

::: BlockVue {title="Subheader Example"}

```html
<div class="w-100 p-3 p-md-0">
  <div class="col-md-8 mx-auto">
    <bs-card shadow>
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
</div>
```
:::


## CSS Variables

<SmallNote color="teal" class="mt-4">Added since v2.0.0</SmallNote>

```scss
--md-subheader-font-size: 1rem;
--md-subheader-font-weight: 500;
--md-subheader-padding-x: 1rem;
--md-subheader-padding-y: 0;
```


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description                                                           |
| -------- | --------- | ------- | --------------------------------------------------------------------- |
| dark     | `Boolean` | `false` | Define explicitly when is placed inside element with dark background. |

</div>
  </BsTab>
</BsTabs>

<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
