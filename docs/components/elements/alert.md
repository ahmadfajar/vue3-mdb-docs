---
outline: [2, 3] 
description: Alert is a component that provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages. 
---

# Alert


::: lead
**BsAlert** is a component that provides contextual feedback messages for typical 
user actions with the handful of available and flexible alert messages. With the 
right use of colors, they add some emotional weight of information, ranging from 
a simple warning to critical system failure or from an operation success to 
neutral information.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

## Overview

By default, `<bs-alert>` is set to default color. You can use `color` property to 
change its color and add some emotional weight.

::: BlockVue {title="Alert Overview"}

```vue
<template>
  <div class="demo-wrapper w-full pt-3 px-2">
    <bs-alert>Simple alert with default color</bs-alert>
  </div>
</template>

```
:::

::: info <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">INFO</span>
- **BsAlert** originally used [Bootstrap CSS](https://getbootstrap.com/docs/5.2/components/alerts/) 
  classes. However, since v2.2.0, **BsAlert** no longer uses Bootstrap CSS. This improvement 
  allows **BsAlert** to work seamlessly with the TailwindCSS and Bootstrap CSS frameworks.
- The bundle only provide contextual color variants. It is located
  at `dist/theme-light.css` and `dist/theme-dark.css` files. If the component style
  and color doesn't suit to your needs, you can customize it using the component's 
  CSS variables or use the provided SASS mixins. 
:::


## Style Variants

### Default {#style-variants-default}

Alert with default style variant will have appearance like **Bootstrap** alert.

::: BlockVue {title="Alert Style Variants - Default"}

```vue
<template>
  <div class="demo-wrapper w-full pt-3 px-2">
    <bs-alert> Simple alert with default color</bs-alert>
    <bs-alert color="primary">Simple alert with primary color</bs-alert>
    <bs-alert color="secondary">Simple alert with secondary color</bs-alert>
    <bs-alert color="success">Simple alert with success color</bs-alert>
    <bs-alert color="info">Simple alert with info color</bs-alert>
    <bs-alert color="danger">Simple alert with danger color</bs-alert>
    <bs-alert color="warning">Simple alert with warning color</bs-alert>
    <bs-alert color="light">Simple alert with light color</bs-alert>
  </div>
</template>

```
:::

### Solid {#style-variants-solid class="mt-lg-5"}

Use `filled` property to enable the alert variant with **solid fill style**.


::: BlockVue {title="lert Style Variants - Solid"}

```vue
<template>
  <div class="demo-wrapper w-full pt-3 px-2">
    <bs-alert filled> Simple alert with default color</bs-alert>
    <bs-alert color="primary" filled>Simple alert with primary color</bs-alert>
    <bs-alert color="secondary" filled>Simple alert with secondary color</bs-alert>
    <bs-alert color="success" filled>Simple alert with success color</bs-alert>
    <bs-alert color="info" filled>Simple alert with info color</bs-alert>
    <bs-alert color="danger" filled>Simple alert with danger color</bs-alert>
    <bs-alert color="warning" filled>Simple alert with warning color</bs-alert>
    <bs-alert color="light" filled>Simple alert with light color</bs-alert>
  </div>
</template>

```
:::


### Outlined {#style-variants-outlined class="mt-lg-5"}

Use `outlined` property to enable the alert variant with **outline style**.

::: BlockVue {title="lert Style Variants - Outlined"}

```vue
<template>
  <div class="demo-wrapper w-full pt-3 px-2">
    <bs-alert outlined> Simple alert with default color</bs-alert>
    <bs-alert color="primary" outlined>Simple alert with primary color</bs-alert>
    <bs-alert color="secondary" outlined>Simple alert with secondary color</bs-alert>
    <bs-alert color="success" outlined>Simple alert with success color</bs-alert>
    <bs-alert color="info" outlined>Simple alert with info color</bs-alert>
    <bs-alert color="danger" outlined>Simple alert with danger color</bs-alert>
    <bs-alert color="warning" outlined>Simple alert with warning color</bs-alert>
    <bs-alert color="light" outlined>Simple alert with light color</bs-alert>
  </div>
</template>

```
:::

## Contextual Alert

Use `variant` property to create contextual alert with predefined icon. Additionally, 
you can sets `icon-variant` property to `outlined` (_default_), `rounded`, `sharp`, 
`filled`, `outlined_filled`, `rounded_filled`, or `sharp_filled` to set the icon 
style variant. See [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) for details.

::: BlockVue {title="Contextual Alert"}

```html
<template>
  <div class="demo-wrapper w-full pt-3 px-2">
    <bs-alert variant="success" icon-variant="filled" filled>
      Aww yeah, you successfully read this alert message. This is an example how to 
      construct a predefined contextual <b>Success Alert</b>.
    </bs-alert>
    <bs-alert variant="warning" icon-variant="sharp_filled" filled>
      Aww yeah, you successfully read this alert message. This is an example how to 
      construct a predefined contextual <b>Warning Alert</b>.
    </bs-alert>
    <bs-alert variant="danger" icon-variant="sharp" filled>
      Aww yeah, you successfully read this alert message. This is an example how to 
      construct a predefined contextual <b>Danger Alert</b>.
    </bs-alert>
    <bs-alert variant="info" icon-variant="filled" filled>
      Aww yeah, you successfully read this alert message. This is an example how to 
      construct a predefined contextual <b>Info Alert</b>.
    </bs-alert>
    <bs-alert variant="help" filled>
      Aww yeah, you successfully read this alert message. This is an example how to 
      construct a predefined contextual <b>Help Alert</b>.
    </bs-alert>
  </div>
</template>

```
:::


## Custom Icon

Custom icon can be enabled by using the `icon` property and is loaded dynamically 
from Google Fonts site. Use any valid android icon name from 
[Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) 
with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, 
`_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`. Suffix 
`_filled` and `_outlined_filled` will display the same icon style variant. Suffix 
will take precedence over `icon-variant` property.

<SmallNote color="teal">Updated in v2.1.0</SmallNote>

::: BlockVue {title="Alert with Custom Icon"}

```vue
<template>
  <div class="demo-wrapper w-full pt-3 px-2">
    <bs-alert color="success" icon="verified" icon-variant="outlined">
      Aww yeah, you successfully read this alert message. This is an example 
      how to construct alert with custom icon.
    </bs-alert>
    <bs-alert color="secondary" icon="help_center_filled">
      Aww yeah, you successfully read this alert message. This is an example 
      how to construct alert with custom icon.
    </bs-alert>
    <bs-alert color="danger" icon="dangerous">
      Aww yeah, you successfully read this alert message. This is an example 
      how to construct alert with custom icon.
    </bs-alert>
    <bs-alert color="info" icon="notifications_rounded_filled">
      Aww yeah, you successfully read this alert message. This is an example 
      how to construct alert with custom icon.
    </bs-alert>
    <bs-alert icon="sync" icon-spin>
      Aww yeah, you successfully read this alert message. This is an example 
      how to construct alert with custom icon.
    </bs-alert>
  </div>
</template>

```
:::

<!-- @include: @/components/icon-migration-info.md -->


## Additional Contents

`<bs-alert>` can also contain additional HTML elements like headings and paragraphs, 
which will be styled with the appropriate color matching the variant.

::: BlockVue {title="Alert with additional contents"}

```vue
<template>
  <div class="demo-wrapper w-full pt-3 px-2">
    <bs-alert filled variant="success" icon-variant="filled">
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
</template>

```
:::


## Dismissible Alert

Use the `dismissible` property to dismiss any inline `<bs-alert>`. This will 
add a close `x` button. 

::: BlockVue {title="Dismissible Alert" clientOnly="true"}

```vue
<template>
  <div class="demo-wrapper w-full pt-3 px-2">
    <bs-alert color="primary" dismissible>
      Click the close button over there. 
      <bs-fontawesome-icon icon="hand-pointer" size="20" rotate="90" />
    </bs-alert>
    <bs-alert color="info" dismissible>
      Click the close button over there. 
      <bs-fontawesome-icon icon="hand-pointer" size="20" rotate="90" />
    </bs-alert>
    <bs-alert color="success" dismissible>
      Click the close button over there. 
      <bs-fontawesome-icon icon="hand-pointer" size="20" rotate="90" />
    </bs-alert>
    <bs-alert color="danger" outlined dismissible>
      Click the close button over there. 
      <bs-fontawesome-icon icon="hand-pointer" size="20" rotate="90" />
    </bs-alert>
    <bs-alert color="warning" outlined dismissible>
      Click the close button over there. 
      <bs-fontawesome-icon icon="hand-pointer" size="20" rotate="90" />
    </bs-alert>
  </div>
</template>

```
:::


### Controlling dismissible alert {class="mt-lg-5"}

Use the `v-model` directive to create two-way data bindings on the `model-value` 
property as in `v-model="showAlert"`. This is useful to control the dismissible
alert, because when the alert is closed, the variable will be updated. 


::: BlockVue {title="Controlling Dismissible Alert" clientOnly="true" file="./docs/components/elements/js/alert.js"}

```vue
<template>
  <div class="demo-wrapper w-full pt-3 px-2">
    <div style="height: 150px">
      <bs-alert v-model="showDismissibleAlert1" color="info" filled dismissible>
        This is a dismissible alert.
      </bs-alert>
      <bs-alert v-model="showDismissibleAlert2" @close="closeAlert()" dismissible>
        <div class="pb-2">This alert will dismiss after {{ dismissCountDown }} seconds...</div>
        <bs-progress v-model="percentProgress" color="warning" mode="determinate" />
      </bs-alert>
    </div>
    <div class="row row-cols-auto">
      <div class="col mb-3 mb-md-0">
        <bs-button @click="toggleAlert()">
          {{ showDismissibleAlert1 ? 'Hide' : 'Show' }} dismissible alert
        </bs-button>
      </div>
      <div class="col">
        <bs-button @click="showAlert()">Show Alert</bs-button>
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


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-alert` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-alert {
  --md-alert-bg: #{$background-color};
  --md-alert-border-color: #{$border-color};
  --md-alert-color: #{$color};
  --md-alert-link-color: #{$link-color};

  --md-alert-padding-x: #{vars.$alert-padding-x};
  --md-alert-padding-y: #{vars.$alert-padding-y};
  --md-alert-margin-bottom: #{vars.$alert-margin-bottom};
  --md-alert-border: 1px solid var(--md-alert-border-color);
  --md-alert-border-radius: var(--md-radius);
  --md-alert-icon-spacing: #{vars.$alert-icon-spacing};
}

```

### SASS mixins

Sometimes, simply creating a new alert color can be overwhelming, as there are 
too many CSS variables to modify. For cases like this, Vue MDBootstrap provides 
several SASS mixins to help you create new alert style variants.

::: code-group

```scss [Light Theme]
use 'vue-mdbootstrap/scss/mixins/alert';

@include alert.make-default-variant-light($name, $color);
@include alert.make-outline-variant-light($name, $color);
@include alert.make-solid-variant($name, $color);

```

```scss [Dark Theme]
use 'vue-mdbootstrap/scss/mixins/alert';

@include alert.make-default-variant-dark($name, $color);
@include alert.make-outline-variant-dark($name, $color);
@include alert.make-solid-variant($name, $color);

```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type        | Default     | Description |
|-------------|-------------|-------------|-------------|
| color       | `String`    | `'default'` | Sets the component colors. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, and `light`.</div> |
| close-button-color | `String` | | Sets the close button color. <MdBadge color="info">v2.2.0</MdBadge> <div class="pt-3">Default is taken from the value of `color` property.</div><div class="pt-3">Built-in color variants are: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light` and `dark`.</div> |
| dismissible | `Boolean`   | `false` | When set, display the close button to dismiss/hide the component. |
| filled      | `Boolean`   | `false` | Create alert variant with solid fill style. <MdBadge color="info">v2.0.0</MdBadge> |
| icon        | `String`    |         | <div style="min-width:425px"> The icon to display inside the component. <MdBadge color="info">Updated in v2.1.0</MdBadge> <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `icon-variant` property. </div> |
| icon-flip     | `String`  |         | Flip the icon. Valid values are: `horizontal`, `vertical`, `both`. |
| icon-pulse    | `Boolean` | `false` | Apply **pulse** animation to the icon. |
| icon-rotation | `Number`  |         | Rotate the icon. Valid values are: `90`, `180`, `270`. |
| icon-spin     | `Boolean` | `false` | Apply **spin** animation to the icon. |
| icon-variant  | `String`  | `'outlined'` | Use predefined icon style. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <MdBadge color="info">Updated in v2.1.0</MdBadge> <br /><br />See [Contextual Alert](#contextual-alert) section for details.  |
| model-value <Badge type="tip">v-model</Badge>  | `Boolean` | `true` | Component state to show or hide the component. This property is monitored by `v-model`. <MdBadge color="info">v2.0.0</MdBadge> |
| outlined    | `Boolean`   | `false`  | Create outline alert style. |
| transition  | `String`    | `'fade'` | Animation transition to use when the component becomes visible or invisible. |
| variant     | `String`    |  | Create contextual alert and use predefined icon. Valid values are: `success`, `info`, `warning`, `danger`, `help`. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols table:font-mono:col-2">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| close  |  | Trigger when the component becomes invisible. <MdBadge color="info">v2.0.0</MdBadge> |
| update:model-value | (value:`Boolean`) | Used to update the `model-value` property. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |
| icon    | The outlet slot used to place the custom icon. <MdBadge color="info">v2.0.0</MdBadge> |

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