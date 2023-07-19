---
outline: [2, 3]
---

# Alert


::: lead
**BsAlert** is a component that provides contextual feedback messages for typical user actions with the
handful of available and flexible alert messages. With the right use of colors, they add some emotional
weight of information, ranging from a simple warning to critical system failure or from an operation
success to neutral information.
:::


## Overview

By default, `<bs-alert>` is set to primary color. You can use `color` property to change its color and
add some emotional weight. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants can be 
applied to the `color` property.


::: BlockVue {title="Alert Example"}

```html
<div class="w-100 pt-3 px-4 pb-1">
  <bs-alert>Simple alert with primary color</bs-alert>
</div>
```
:::


## Style Variants

**BsAlert** comes with three style variants.


### Default style

Alert with default style variant will have appearance like **Bootstrap** alert.

::: BlockVue {title="Alert Example"}

```html
<div class="w-100 pt-3 px-4 pb-1">
  <bs-alert> Simple alert with primary color</bs-alert>
  <bs-alert color="info">Simple alert with info color</bs-alert>
  <bs-alert color="success">Simple alert with success color</bs-alert>
  <bs-alert color="danger">Simple alert with danger color</bs-alert>
  <bs-alert color="warning">Simple alert with warning color</bs-alert>
</div>
```
:::

### Solid Fill style {class="pt-3"}

Use `filled` property to enable the alert variant with **solid fill style**.


::: BlockVue {title="Solid Fill Alert Example"}

```html
<div class="w-100 pt-3 px-4 pb-1">
  <bs-alert filled>Solid alert with primary color</bs-alert>
  <bs-alert color="info" filled>Solid alert with info color</bs-alert>
  <bs-alert color="success" filled>Solid alert with success color</bs-alert>
  <bs-alert color="danger" filled>Solid alert with danger color</bs-alert>
  <bs-alert color="warning" filled>Solid alert with warning color</bs-alert>
</div>
```
:::


### Outline style {class="pt-3"}

Use `outlined` property to enable the alert variant with **outline style**.

::: BlockVue {title="Outline Alert Example"}

```html
<div class="w-100 pt-3 px-4 pb-1">
  <bs-alert color="primary" outlined>Outline alert with primary color</bs-alert>
  <bs-alert color="info" outlined>Outline alert with info color</bs-alert>
  <bs-alert color="success" outlined>Outline alert with success color</bs-alert>
  <bs-alert color="danger" outlined>Outline alert with danger color</bs-alert>
  <bs-alert color="warning" outlined>Outline alert with warning color</bs-alert>
</div>
```
:::

## Contextual Alert

Use `variant` property to create contextual alert with predefined icon. Additionally, 
you can sets `icon-variant` property to `outlined`, `filled`, `round` or `sharp`. See 
[Google Material Icon's](https://fonts.google.com/icons?icon.set=Material+Icons) for details.

*Updated since Vue MDBootstrap `v2.0.0`*

::: BlockVue {title="Contextual Alert Example"}

```html
<div class="w-100 pt-3 px-4 pb-1">
  <bs-alert variant="success" filled>
    Aww yeah, you successfully read this alert message. This is an example how to 
    construct a predefined contextual <b>Success Alert</b>.
  </bs-alert>
  <bs-alert variant="info" filled>
    Aww yeah, you successfully read this alert message. This is an example how to 
    construct a predefined contextual <b>Info Alert</b>.
  </bs-alert>
  <bs-alert variant="danger" filled>
    Aww yeah, you successfully read this alert message. This is an example how to 
    construct a predefined contextual <b>Danger Alert</b>.
  </bs-alert>
  <bs-alert variant="warning" icon-variant="sharp" filled>
    Aww yeah, you successfully read this alert message. This is an example how to 
    construct a predefined contextual <b>Warning Alert</b>.
  </bs-alert>
  <bs-alert variant="help" icon-variant="outlined" filled>
    Aww yeah, you successfully read this alert message. This is an example how to 
    construct a predefined contextual <b>Help Alert</b>.
  </bs-alert>
</div>
```
:::


## Custom Icon

Custom icon can be enabled by using the `icon` property. Use any valid Google Material 
icon name, see [Google Material Icon](https://fonts.google.com/icons?icon.set=Material+Icons)
for details. The icon is loaded dynamically from Google Fonts site.

*Updated since Vue MDBootstrap `v2.0.0`*

::: BlockVue {title="Alert's Custom Icon Example"}

```html
<div class="w-100 pt-3 px-4 pb-1">
  <bs-alert color="green" icon="verified" icon-variant="outlined">
    Aww yeah, you successfully read this alert message. This is an example 
    how to construct alert with custom icon.
  </bs-alert>
  <bs-alert color="orange" icon="help_center">
    Aww yeah, you successfully read this alert message. This is an example 
    how to construct alert with custom icon.
  </bs-alert>
  <bs-alert color="unique" icon="dangerous">
    Aww yeah, you successfully read this alert message. This is an example 
    how to construct alert with custom icon.
  </bs-alert>
  <bs-alert color="blue" icon="notifications">
    Aww yeah, you successfully read this alert message. This is an example 
    how to construct alert with custom icon.
  </bs-alert>
  <bs-alert color="blue-green" icon="sync" icon-spin>
    Aww yeah, you successfully read this alert message. This is an example 
    how to construct alert with custom icon.
  </bs-alert>
</div>
```
:::


## Additional Contents

`<bs-alert>` can also contain additional HTML elements like headings and paragraphs, 
which will be styled with the appropriate color matching the variant.

::: BlockVue {title="Alert with additional contents"}

```html
<div class="w-100 pt-3 px-4 pb-1">
  <bs-alert filled variant="success">
    <h5 class="mt-2">Well done!</h5>
    <p>
      Aww yeah, you successfully read this alert message. This is an example
      how to construct <b>Contextual Alert</b> with additional contents.
    </p>
    <hr />
    <p>
      Whenever you need to, be sure to use margin utilities to keep things 
      nice and tidy.
    </p>
  </bs-alert>
</div>
```
:::


## Dismissible Alert

Use the `dismissible` property to dismiss any inline `<bs-alert>`. This will 
add a close `x` button. 

::: BlockVue {title="Dismissible Alert Example" clientOnly="true"}

```html
<div class="w-100 pt-3 px-4 pb-1">
  <bs-alert color="primary" dismissible>
    Click the close button over there. <bs-icon icon="pan_tool_alt" rotate="90" />
  </bs-alert>
  <bs-alert color="info" dismissible>
    Click the close button over there. <bs-icon icon="pan_tool_alt" rotate="90" />
  </bs-alert>
  <bs-alert color="success" dismissible>
    Click the close button over there. <bs-icon icon="pan_tool_alt" rotate="90" />
  </bs-alert>
  <bs-alert color="danger" outlined dismissible>
    Click the close button over there. <bs-icon icon="pan_tool_alt" rotate="90" />
  </bs-alert>
  <bs-alert color="warning" outlined dismissible>
    Click the close button over there. <bs-icon icon="pan_tool_alt" rotate="90" />
  </bs-alert>
</div>
```
:::


### Controlling dismissible alert {class="pt-3"}

Use the `v-model` directive to create two-way data bindings on the `model-value` 
property as in `v-model="showAlert"`. This is useful to control the dismissible, 
because when user closes the alert, your variable will be updated. 


::: BlockVue {title="Dismissible Alert Example" clientOnly="true" file="./docs/components/scripts/alert.js"}

```vue
<template>
  <div class="w-100 pt-2 px-4 pb-1">
    <bs-alert v-model="showDismissibleAlert1" color="dark-green" filled dismissible>
      This is a dismissible alert.
    </bs-alert>
    <bs-alert v-model="showDismissibleAlert2" @close="closeAlert()" dismissible>
      <div class="pb-2">This alert will dismiss after {{ dismissCountDown }} seconds...</div>
      <bs-progress v-model="percentProgress" color="pink" mode="determinate" />
    </bs-alert>
    <div class="row row-cols-auto row-cols-md-2">
      <div class="col mb-3 mb-md-0">
        <bs-button color="default-color" @click="toggleAlert()">
          {{ showDismissibleAlert1 ? 'Hide' : 'Show' }} dismissible alert
        </bs-button>
      </div>
      <div class="col">
        <bs-button color="default-color" @click="showAlert()">Show Alert</bs-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const dismissSecs = 10;
const dismissCountDown = ref(0);
const showDismissibleAlert1 = ref(false);
const showDismissibleAlert2 = ref(false);
const timerInterval = ref<number | undefined>();
const percentProgress = computed(() => (dismissCountDown.value / dismissSecs) * 100);

watch(
  () => dismissCountDown.value,
  (value: number) => {
    if (value < 1) {
      clearInterval(timerInterval.value);
      showDismissibleAlert2.value = false;
    }
  }
);

function showAlert() {
  dismissCountDown.value = dismissSecs;
  showDismissibleAlert2.value = true;
  startTimer();
}

function startTimer() {
  timerInterval.value = window.setInterval(() => (dismissCountDown.value -= 1), 1000);
}

function toggleAlert() {
  showDismissibleAlert1.value = !showDismissibleAlert1.value;
}

function closeAlert() {
  clearInterval(timerInterval.value);
}
</script>
```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type        | Default     | Description |
|-------------|-------------|-------------|-------------|
| color       | `String`    | `primary`   | Sets the component colors. Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors) variants can be used. |
| dismissible | `Boolean`   | `false`     | When set, display the close button to dismiss/hide the component |
| filled      | `Boolean`   | `false`     | Create alert variant with solid fill style. <BsBadge>v2.0.0</BsBadge> |
| icon        | `String`    |             | The icon to display inside the component. Use any valid Google Material icon name, see [Google Material Icon](https://fonts.google.com/icons?icon.set=Material+Icons) for details. |
| icon-flip     | `String`  |  | Flip the icon. Valid values are: `horizontal`, `vertical`, `both`. |
| icon-pulse    | `Boolean` | `false` | Apply **pulse** animation to the icon. |
| icon-rotation | `Number`  |         | Rotate the icon. Valid values are: `90`, `180`, `270`. |
| icon-spin     | `Boolean` | `false` | Apply **spin** animation to the icon. |
| icon-type <Badge type="warning">deprecated</Badge> | `String`  |  | Use `variant` property instead. |
| icon-variant  | `String`  |  | Use predefined icon style. Valid values are: `outlined`, `filled`, `round`, `sharp`. See [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) for details. |
| model-value <Badge type="tip">v-model</Badge>  | `Boolean` | `true` | Component state to show or hide the component. This property is monitored by `v-model`. <BsBadge>v2.0.0</BsBadge> |
| outlined    | `Boolean`   | `false`  | Create outline alert style. |
| transition  | `String`    | `'fade'` | Animation transition to use when the component becomes visible or invisible. |
| solid-fill <Badge type="warning">deprecated</Badge> | `Boolean`  |  | Use `filled` property instead. |
| variant     | `String`    |  | Create contextual alert and use predefined icon. Valid values are: `success`, `info`, `warning`, `danger`, `help`. <BsBadge>v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| close  |  | Trigger when the component becomes invisible. <BsBadge>v2.0.0</BsBadge> |
| update:model-value | (`value: boolean`) | Used to update the `model-value` property. <BsBadge>v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to render the main content. |
| icon    | The outlet slot used to render the custom icon. <BsBadge>v2.0.0</BsBadge> |

</div>
  </BsTab>
</BsTabs>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const dismissSecs = 10;
const dismissCountDown = ref(0);
const showDismissibleAlert1 = ref(false);
const showDismissibleAlert2 = ref(false);
const timerInterval = ref<number | undefined>();
const percentProgress = computed(() => (dismissCountDown.value / dismissSecs) * 100);
const tabs1active = ref(0);

watch(
  () => dismissCountDown.value,
  (value: number) => {
    if (value < 1) {
      clearInterval(timerInterval.value);
      showDismissibleAlert2.value = false;
    }
  }
);

function showAlert() {
  dismissCountDown.value = dismissSecs;
  showDismissibleAlert2.value = true;
  startTimer();
}

function startTimer() {
  timerInterval.value = window.setInterval(() => (dismissCountDown.value -= 1), 1000);
}

function toggleAlert() {
  showDismissibleAlert1.value = !showDismissibleAlert1.value;
}

function closeAlert() {
  clearInterval(timerInterval.value);
}
</script>