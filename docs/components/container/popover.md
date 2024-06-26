# Popover

:::lead
**BsPopover** is a lightweight component which is used as a popup container.
:::


## Overview

Some components use `<bs-popover>` internally, such as [BsDropdownMenu](/components/dropdown-menu),
[BsCombobox](/components/input/combobox), [BsDateTimeField](/components/input/datetime-field),
[BsSearchField](/components/input/search-field). Example below, shows you basic usage of `<bs-popover>`.

::: BlockVue {title="Popover Example" file="./docs/components/scripts/popover-1.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 text-center">
    <bs-button ref="activator1" color="primary" dropdown-toggle @click="show1 = !show1">
      Button Dropdown
    </bs-button>
    <bs-popover
      v-model:open="show1"
      :trigger="activator1?.$el"
      class="md-shadow-1 rounded"
      space="3"
    >
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
      <div class="p-3 text-dark">
        <div class="mb-3">
          <bs-switch v-model="enableMessage" :value="true" color="purple">
            Enable Messages
          </bs-switch>
        </div>
        <bs-switch v-model="enableHints" :value="true" color="purple">Enable Hints</bs-switch>
      </div>
      <bs-divider></bs-divider>
      <div class="p-2 ox-3 text-end">
        <bs-button color="primary" size="sm" @click="show1 = false">Save</bs-button>
        <bs-button color="secondary" size="sm" flat @click="show1 = false">Cancel</bs-button>
      </div>
    </bs-popover>
  </div>
</template>

<script setup lang="ts">
import { ref, type ComponentPublicInstance } from 'vue';

const enableMessage = ref(false);
const enableHints = ref(true);
const show1 = ref(false);
const activator1 = ref<ComponentPublicInstance | null>(null);
</script>
```
:::


## Display Placement

Use `placement` property to change default `<bs-popover>` display placement. Valid 
placement values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, 
`bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`.

::: BlockVue {title="Popover Placement Example" file="./docs/components/scripts/popover-2.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100">
    <div class="row row-cols-1 row-cols-md-2 text-center">
      <div class="col mb-3">
        <bs-button ref="activator2" color="primary" dropdown-toggle @click="show2 = !show2">
          Bottom Left
        </bs-button>
        <bs-popover
          v-model:open="show2"
          :trigger="activator2?.$el"
          placement="bottom-left"
          class="md-shadow-1 rounded"
          space="3"
        >
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
          <div class="p-2 ox-3 text-end">
            <bs-button color="primary" size="sm" @click="show2 = false">Save</bs-button>
            <bs-button color="secondary" size="sm" flat @click="show2 = false">Cancel</bs-button>
          </div>
        </bs-popover>
      </div>
      <div class="col mb-3">
        <bs-button ref="activator4" color="primary" dropdown-toggle @click="show4 = !show4">
          Bottom Right
        </bs-button>
        <bs-popover
          v-model:open="show4"
          :trigger="activator4?.$el"
          placement="bottom-right"
          class="md-shadow-1 rounded"
          space="3"
        >
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
          <div class="p-2 ox-3 text-end">
            <bs-button color="primary" size="sm" @click="show4 = false">Save</bs-button>
            <bs-button color="secondary" size="sm" flat @click="show4 = false">Cancel</bs-button>
          </div>
        </bs-popover>
      </div>
      <div class="col mb-3">
        <bs-button ref="activator5" color="primary" dropdown-toggle @click="show5 = !show5">
          Top Left
        </bs-button>
        <bs-popover
          v-model:open="show5"
          :trigger="activator5?.$el"
          placement="top-left"
          class="md-shadow-1 rounded"
          space="3"
        >
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
          <div class="p-2 ox-3 text-end">
            <bs-button color="primary" size="sm" @click="show5 = false">Save</bs-button>
            <bs-button color="secondary" size="sm" flat @click="show5 = false">Cancel</bs-button>
          </div>
        </bs-popover>
      </div>
      <div class="col mb-3">
        <bs-button ref="activator7" color="primary" dropdown-toggle @click="show7 = !show7">
          Top Right
        </bs-button>
        <bs-popover
          v-model:open="show7"
          :trigger="activator7?.$el"
          placement="top-right"
          class="md-shadow-1 rounded"
          space="3"
        >
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
          <div class="p-2 ox-3 text-end">
            <bs-button color="primary" size="sm" @click="show7 = false">Save</bs-button>
            <bs-button color="secondary" size="sm" flat @click="show7 = false">Cancel</bs-button>
          </div>
        </bs-popover>
      </div>
      <div class="col mb-3">
        <bs-button ref="activator8" color="primary" dropdown-toggle @click="show8 = !show8">
          Left Top
        </bs-button>
        <bs-popover
          v-model:open="show8"
          :trigger="activator8?.$el"
          placement="left-top"
          class="md-shadow-1 rounded"
          space="3"
        >
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
          <div class="p-2 ox-3 text-end">
            <bs-button color="primary" size="sm" @click="show8 = false">Save</bs-button>
            <bs-button color="secondary" size="sm" flat @click="show8 = false">Cancel</bs-button>
          </div>
        </bs-popover>
      </div>
      <div class="col mb-3">
        <bs-button ref="activator9" color="primary" dropdown-toggle @click="show9 = !show9">
          Right Top
        </bs-button>
        <bs-popover
          v-model:open="show9"
          :trigger="activator9?.$el"
          placement="right-top"
          class="md-shadow-1 rounded"
          space="3"
        >
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
          <div class="p-2 ox-3 text-end">
            <bs-button color="primary" size="sm" @click="show9 = false">Save</bs-button>
            <bs-button color="secondary" size="sm" flat @click="show9 = false">Cancel</bs-button>
          </div>
        </bs-popover>
      </div>
      <div class="col mb-3">
        <bs-button ref="activator12" color="primary" dropdown-toggle @click="show12 = !show12">
          Left Bottom
        </bs-button>
        <bs-popover
          v-model:open="show12"
          :trigger="activator12?.$el"
          placement="left-bottom"
          class="md-shadow-1 rounded"
          space="3"
        >
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
          <div class="p-2 ox-3 text-end">
            <bs-button color="primary" size="sm" @click="show12 = false">Save</bs-button>
            <bs-button color="secondary" size="sm" flat @click="show12 = false">Cancel</bs-button>
          </div>
        </bs-popover>
      </div>
      <div class="col mb-3">
        <bs-button ref="activator13" color="primary" dropdown-toggle @click="show13 = !show13">
          Right Bottom
        </bs-button>
        <bs-popover
          v-model:open="show13"
          :trigger="activator13?.$el"
          placement="right-bottom"
          class="md-shadow-1 rounded"
          space="3"
        >
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
          <div class="p-2 ox-3 text-end">
            <bs-button color="primary" size="sm" @click="show13 = false">Save</bs-button>
            <bs-button color="secondary" size="sm" flat @click="show13 = false">Cancel</bs-button>
          </div>
        </bs-popover>
      </div>
      <div class="col mb-3">
        <bs-button ref="activator6" color="primary" dropdown-toggle @click="show6 = !show6">
          Top
        </bs-button>
        <bs-popover
          v-model:open="show6"
          :trigger="activator6?.$el"
          placement="top"
          class="md-shadow-1 rounded"
          space="3"
        >
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
          <div class="p-2 ox-3 text-end">
            <bs-button color="primary" size="sm" @click="show6 = false">Save</bs-button>
            <bs-button color="secondary" size="sm" flat @click="show6 = false">Cancel</bs-button>
          </div>
        </bs-popover>
      </div>
      <div class="col mb-3">
        <bs-button ref="activator3" color="primary" dropdown-toggle @click="show3 = !show3">
          Bottom
        </bs-button>
        <bs-popover
          v-model:open="show3"
          :trigger="activator3?.$el"
          placement="bottom"
          class="md-shadow-1 rounded"
          space="3"
        >
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
          <div class="p-2 ox-3 text-end">
            <bs-button color="primary" size="sm" @click="show3 = false">Save</bs-button>
            <bs-button color="secondary" size="sm" flat @click="show3 = false">Cancel</bs-button>
          </div>
        </bs-popover>
      </div>
      <div class="col mb-3">
        <bs-button ref="activator10" color="primary" dropdown-toggle @click="show10 = !show10">
          Left
        </bs-button>
        <bs-popover
          v-model:open="show10"
          :trigger="activator10?.$el"
          placement="left"
          class="md-shadow-1 rounded"
          space="3"
        >
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
          <div class="p-2 ox-3 text-end">
            <bs-button color="primary" size="sm" @click="show10 = false">Save</bs-button>
            <bs-button color="secondary" size="sm" flat @click="show10 = false">Cancel</bs-button>
          </div>
        </bs-popover>
      </div>
      <div class="col mb-3">
        <bs-button ref="activator11" color="primary" dropdown-toggle @click="show11 = !show11">
          Right
        </bs-button>
        <bs-popover
          v-model:open="show11"
          :trigger="activator11?.$el"
          placement="right"
          class="md-shadow-1 rounded"
          space="3"
        >
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
          <div class="p-2 ox-3 text-end">
            <bs-button color="primary" size="sm" @click="show11 = false">Save</bs-button>
            <bs-button color="secondary" size="sm" flat @click="show11 = false">Cancel</bs-button>
          </div>
        </bs-popover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type ComponentPublicInstance } from 'vue';

const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);
const show5 = ref(false);
const show6 = ref(false);
const show7 = ref(false);
const show8 = ref(false);
const show9 = ref(false);
const show10 = ref(false);
const show11 = ref(false);
const show12 = ref(false);
const show13 = ref(false);
const activator1 = ref<ComponentPublicInstance | null>(null);
const activator2 = ref<ComponentPublicInstance | null>(null);
const activator3 = ref<ComponentPublicInstance | null>(null);
const activator4 = ref<ComponentPublicInstance | null>(null);
const activator5 = ref<ComponentPublicInstance | null>(null);
const activator6 = ref<ComponentPublicInstance | null>(null);
const activator7 = ref<ComponentPublicInstance | null>(null);
const activator8 = ref<ComponentPublicInstance | null>(null);
const activator9 = ref<ComponentPublicInstance | null>(null);
const activator10 = ref<ComponentPublicInstance | null>(null);
const activator11 = ref<ComponentPublicInstance | null>(null);
const activator12 = ref<ComponentPublicInstance | null>(null);
const activator13 = ref<ComponentPublicInstance | null>(null);
</script>
```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default   | Description |
|----------|----------|-----------|-------------|
| color       | `String` | `'white'` | **Popover** background color. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) or [Material Color](/reference/color-variants#material-colors) variants can be used. <BsBadge color="info">v2.0.0</BsBadge> |
| cover       | `Boolean` | `false` | Display **Popover** at a position that covers the activator. |
| esc-close   | `Boolean` | `true`  | Close the **Popover** when **ESC** key is pressed. |
| open <Badge type="tip">v-model</Badge> | `Boolean` | `false` | **Popover** state: **show** or **hide**. |
| overlay       | `Boolean` | `false` | Show backdrop overlay or not. |
| overlay-click-close | `Boolean` | `true`  | Close the **Popover** when the backdrop overlay is clicked. <BsBadge color="info">v2.0.0</BsBadge> |
| overlay-color | `String`  | `'#000'`| The backdrop overlay color. |
| overlay-opacity | `Number` | `0.4` | The backdrop overlay opacity. |
| placement   | `String`  | `'bottom-left'` | **Popover** display placement. Valid values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`. |
| space       | `Number` |  | Number of pixel to shift the **Popover** display position. |
| transition  | `String`  | `'scale'` | Transition animation when show the Popover. This animation is effected by `placement` property. |
| trigger <Badge type="danger">required</Badge> | `HTMLElement`/`String`  |  | HTML element or element ID which is used to activate and calculate this **Popover** display position. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| close  |  | Fired when **Popover** is closed. |
| update:open | ( state:`Boolean`) | Used to update the `open` property. <BsBadge color="info">v2.0.0</BsBadge> |

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
import { ref, type ComponentPublicInstance } from 'vue';

const enableMessage = ref(false);
const enableHints = ref(true);
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);
const show5 = ref(false);
const show6 = ref(false);
const show7 = ref(false);
const show8 = ref(false);
const show9 = ref(false);
const show10 = ref(false);
const show11 = ref(false);
const show12 = ref(false);
const show13 = ref(false);
const activator1 = ref<ComponentPublicInstance | null>(null);
const activator2 = ref<ComponentPublicInstance | null>(null);
const activator3 = ref<ComponentPublicInstance | null>(null);
const activator4 = ref<ComponentPublicInstance | null>(null);
const activator5 = ref<ComponentPublicInstance | null>(null);
const activator6 = ref<ComponentPublicInstance | null>(null);
const activator7 = ref<ComponentPublicInstance | null>(null);
const activator8 = ref<ComponentPublicInstance | null>(null);
const activator9 = ref<ComponentPublicInstance | null>(null);
const activator10 = ref<ComponentPublicInstance | null>(null);
const activator11 = ref<ComponentPublicInstance | null>(null);
const activator12 = ref<ComponentPublicInstance | null>(null);
const activator13 = ref<ComponentPublicInstance | null>(null);
const tabs1active = ref(0);
</script>
