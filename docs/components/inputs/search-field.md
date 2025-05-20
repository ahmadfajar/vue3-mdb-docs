---
outline: [2, 3] 
description: A component that let users enter search keyword into an UI.
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

::: BlockVue {title="Search Field Example" file="./docs/components/scripts/search-field-1.js"}

```vue
<template>
  <div class="bg-white rounded-md-3 p-4 w-100">
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

::: warning <BsIcon icon="report_sharp" /><span class="ms-2 h6 mb-0">IMPORTANT</span>
Do not use the `model-value` property when using `v-model`.
:::


## Dark Mode

You can configure `<bs-search-field>` to adapts to the container background color by explicitly 
define the `dark-mode` property.

::: BlockVue {title="Search Field dark mode example"}

```html
<div class="bg-indigo rounded-md-3 p-4 w-100">
  <bs-search-field dark-mode></bs-search-field>
</div>

```
:::


## Custom Search

`<bs-search-field>` component can also be used to build custom search by explicitly define
the `advance-search` property. Then use the `popover` slot to build a custom form elements 
for the custom search. `<bs-search-field>` uses [BsPopover](/components/overlays/popover) 
internally to handle the custom form elements.

::: BlockVue {title="Search Field with custom search example" file="./docs/components/scripts/search-field-2.js"}

```vue
<template>
  <div class="bg-white rounded-md-3 p-4 w-100">
    <bs-search-field 
      v-model="fullname" 
      popover-cls="bg-white text-body rounded shadow" 
      advance-search>
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
              active
              color="primary" 
              @click="doCustomSearch">
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
  // do something here...
}
</script>

```
:::


## CSS Variables

<SmallNote color="teal">Added since v2.0.0</SmallNote>

```scss
--bs-searchbox-bg: #{rgba($black, .015)};
--bs-searchbox-active-bg: #fff;
--bs-searchbox-border-color: #{rgba($black, .07)};
--bs-searchbox-border-width: thin;
--bs-searchbox-active-border-color: rgb(var(--md-field-primary-indicator-rgb));
--bs-searchbox-focused-shadow-rgba: rgba(var(--md-field-primary-indicator-rgb), 0.25);
--bs-searchbox-padding-x: .375rem;
--bs-searchbox-padding-y: .375rem;
--bs-searchbox-text-color: currentColor;

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default   | Description |
|----------|----------|-----------|-------------|
| advance-search | `Boolean` | `false` | Enable custom search. If `true` then *Popover* container will be enabled. <BsBadge color="info">v2.0.0</BsBadge> |
| autofocus    | `Boolean` | `false` | Autofocus this field when the page is loaded. |
| dark-mode    | `Boolean` | `false` | Adapts search field to the container background color. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<input>` element. |
| id           | `String`  |         | Sets `<input>` element `ID` attribute. This property value is auto generated. |
| minlength    | `Number`/`String`   | `4` | Minimum characters to check before triggers the `search` event. |
| model-value <Badge type="tip">v-model</Badge> | `String` |  | Monitored by `v-model` to maintain the field value. <BsBadge color="info">v2.0.0</BsBadge> |
| name         | `String`  |  | Sets `<input>` element `name` attribute. |
| placeholder  | `String`  | `'Search...'` | Sets the field placeholder. |
| popover-cls  | `String`  | `'bg-white rounded shadow'` | Custom CSS class for the *Popover* container. |
| popover-min-width  | `String`/`Number`      | `480` | Sets minimum width for the *Popover* container. |
| popover-placement  | `String`  | `'bottom-left'` | Sets the *Popover* display placement. Valid values are: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`. |
| popover-transition | `String`  | `'scale'`  | Sets animation transition when displaying the *Popover* container. <BsBadge color="info">v2.0.0</BsBadge> |
| readonly           | `Boolean` | `false`    | Put the component in readonly state and sets the `<input>` element `readonly` attribute. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments     | Description |
|---------|---------------|-------------|
| blur    | `FocusEvent`  | Triggers when cursor leave the `<input>` element. |
| focus   | `FocusEvent`  | Triggers when cursor entered the `<input>` element. |
| close   |          | Fired when the *Popover* container is hiding. <BsBadge color="info">v2.0.0</BsBadge> |
| open    |          | Fired when the *Popover* container is show. <BsBadge color="info">Updated on v2.0.0</BsBadge> |
| search  | `String` | Asks handler to start searching for the given keyword. |
| update:model-value | `String` | Used to update the `model-value` property. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
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
  // do something here...
}
</script>