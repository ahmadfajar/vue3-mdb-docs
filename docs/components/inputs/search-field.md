---
outline: [2, 3] 
description: Search Field is a component that let users enter search keyword into an UI.
---

# Search Field 


::: lead
**BsSearchField** is a component that let users enter search keyword into an UI.
:::


## Overview

**BsSearchField** is standalone input field component that let users enter search 
keywords. This component is usually placed on the *Navbar* or anywhere on a page 
that is easy to see. 

**BsSearchField** mimics the HTML5 `<input>` element. This means that you can add 
attributes like `readonly`, or `disabled` and it will react to them to give the 
best experience. You can also use `v-model` directive to create two-way data bindings 
on the `model-value` property. Additionally, you can listen to the `search` event 
to handle the *search* task based on the given *keyword*.

::: BlockVue {title="Search Field Overview" file="./docs/components/inputs/js/search-field-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-search-field @search="onSearch"></bs-search-field>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

function onSearch(term: string) {
  // do something here...
}
</script>

```
:::

<!-- @include: @/components/model-value-important.md -->


## Dark Mode

You can configure `<bs-search-field>` to adapts to the container background color by explicitly 
define the `dark-mode` property.

::: BlockVue {title="Search Field with Dark Mode"}

```html
<div class="bg-indigo rounded w-full p-4">
  <bs-search-field dark-mode></bs-search-field>
</div>

```
:::


## Custom Search

`<bs-search-field>` component can also be used to build custom search by explicitly define
the `advance-search` property. Then use the `popover` slot to build a custom form elements 
for the custom search. `<bs-search-field>` uses [BsPopover](/components/overlays/popover) 
internally to handle the custom form elements.

::: BlockVue {title="Search Field with custom search example" file="./docs/components/inputs/js/search-field-2.js"}

```vue
<template>
  <div class="demo-wrapper w-full p-2 px-md-3">
    <bs-search-field 
      v-model="fullname" 
      :popover-open="panelOpen"
      advance-search 
      @close="panelOpen = false"
      @open="panelOpen = true">

      <template v-slot:popover>
        <div class="p-3">
          <bs-text-field v-model="fullname" floating-label>
            <label>Full Name</label>
          </bs-text-field>
          <div class="row mt-3">
            <div class="col-4">
              <bs-combobox 
                v-model="dateOperator" 
                :data-source="dateOperators" 
                floating-label>
              </bs-combobox>
            </div>
            <div class="col-8">
              <bs-date-time-field 
                v-model="bornDate" 
                clear-button 
                floating-label>
                <label>Born Date</label>
              </bs-date-time-field>
            </div>
          </div>
          <div class="mt-3 text-end">
            <bs-button 
              color="primary" 
              @click="doCustomSearch()">
              Search
            </bs-button>
          </div>
        </div>
      </template>
    </bs-search-field>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { BsArrayStore } from "vue-mdbootstrap";

const panelOpen = ref(false);
const fullname = ref<string>();
const bornDate = ref<string>();
const dateOperator = ref<string>('gt');
const dateOperators = {
  proxy: new BsArrayStore([
    { id: 'gt', name: 'Greater than' },
    { id: 'lt', name: 'Less than' },
  ], {
    idProperty: 'id'
  }),
  schema: { displayField: 'name', valueField: 'id' }
};

function doCustomSearch() {
  panelOpen.value = false;
  // do something here...
}
</script>

```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-field-searchbox` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-field-searchbox {
  --md-searchbox-bg: oklch(0 0 0 / 0.025);
  --md-searchbox-color: currentColor;
  --md-searchbox-active-bg: oklch(100% 0 0);
  --md-searchbox-active-border-color: var(--md-field-active-indicator);
  --md-searchbox-border-color: oklch(0 0 0 / 0.07);
  --md-searchbox-border-width: thin;
  --md-searchbox-border-radius: var(--md-radius);
  --md-searchbox-font-size: var(--font-size-default);
  --md-searchbox-font-weight: var(--font-weight-normal);
  --md-searchbox-padding-x: 0.375rem;
  --md-searchbox-padding-y: 0.375rem;
  --md-searchbox-focused-shadow: color-mix(in oklch, var(--md-field-active-indicator), transparent 75%);
}

```

## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property       | Type      | Default | Description |
|----------------|-----------|---------|-------------|
| advance-search | `Boolean` | `false` | Enable custom search. If `true` then *Popover* container will be enabled. <MdBadge color="info">v2.0.0</MdBadge> |
| autofocus      | `Boolean` | `false` | Autofocus this field when the page is loaded. |
| dark-mode      | `Boolean` | `false` | Adapts search field to the container background color. |
| disabled       | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| id             | `String`  |         | Sets `<input>` element `ID` attribute. This property value is auto generated. |
| minlength      | `Number`&#124;`String`   | `4` | Minimum characters to check before triggers the `search` event. |
| model-value <Badge type="tip">v-model</Badge> | `String` |  | Monitored by `v-model` to maintain the field value. <MdBadge color="info">v2.0.0</MdBadge> |
| name          | `String`  |  | Sets `<input>` element `name` attribute. |
| placeholder   | `String`  | `'Search...'` | Sets the field placeholder. |
| popover-cls   | `String`  | `'md-shadow-1'` | Custom CSS class to apply to the *Popover* container. <MdBadge color="info">Updated in v2.2.0</MdBadge> |
| popover-min-width  | `String`&#124;`Number` | `480` | Sets minimum width for the *Popover* container. |
| popover-open       | `Boolean` |  | Open or close the advance search popover panel. <MdBadge color="info">v2.2.0</MdBadge> <div class="pt-3">Only works if `advance-search` is sets to `true`.</div> |
| popover-placement  | `String`  | `'bottom-left'` | Sets the *Popover* display placement. Valid values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`. |
| popover-transition | `String`  | `'scale'`  | Sets animation transition when displaying the *Popover* container. <MdBadge color="info">v2.0.0</MdBadge> |
| readonly           | `Boolean` | `false`    | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments     | Description |
|---------|---------------|-------------|
| blur    | `FocusEvent`  | Triggers when cursor leave the `<input>` element. |
| focus   | `FocusEvent`  | Triggers when cursor entered the `<input>` element. |
| close   |          | Fired when the *Popover* container is hiding. <MdBadge color="info">v2.0.0</MdBadge> |
| open    |          | Fired when the *Popover* container is show. <MdBadge color="info">Updated in v2.0.0</MdBadge> |
| search  | `String` | Asks handler to start searching for the given keyword. |
| update:model-value | `String` | Used to update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| popover | The outlet slot used to place the custom search elements. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from "vue";
import { BsArrayStore } from "vue-mdbootstrap";

const tabs1active = ref(0);
const panelOpen = ref(false);
const fullname = ref<string>();
const bornDate = ref<string>();
const dateOperator = ref<string>('gt');
const dateOperators = {
  proxy: new BsArrayStore([
    { id: 'gt', name: 'Greater than' },
    { id: 'lt', name: 'Less than' },
  ], {
    idProperty: 'id'
  }),
  schema: { displayField: 'name', valueField: 'id' }
};

function onSearch(term: string) {
  alert('Search keyword: ' + term);
}
function doCustomSearch() {
  panelOpen.value = false;
  // do something here...
}
</script>