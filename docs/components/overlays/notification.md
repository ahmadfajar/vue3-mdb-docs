---
description: Notification is a lightweight push notification component that display a notification message to user.
--- 

# Notification


::: lead
**BsNotification** is a lightweight push notification component that display a 
notification message to user.
::: 


## Overview

**BsNotification** is designed to mimic the push notifications that have been 
popularized by mobile and desktop operating systems. **BsNotification** are 
intended to be small interruptions to visitors or users, and therefore should 
contain minimal, to-the-point, non-interactive content.

::: BlockVueToast {clientOnly="true" title="Notification Overview"}

```vue
<template>
  <div class="demo-wrapper text-center">
    <bs-button @click="$notification.add('Hello, this is a notification message.')">
      Show notification
    </bs-button>
    <bs-notification></bs-notification>
  </div>
</template>

```
:::

::: info <BsIcon icon="info" /> <span class="ms-2 h6 mb-0">INFO</span>
- The component is opt-in for performance reasons and must be initialized first. 
- The component is a singleton instance and therefore only one `<bs-notification>` tag is
  allowed on a page. The `$notification` instance can then be called within the page scope.
- To enable a `$notification` instance at application scope, place `<bs-notification>` 
  tag in the main **Vue** file, e.g.: `App.vue`.
:::


## Variants

**BsNotification** provides five variants and can be easily called using `$notification` instance.

::: BlockVueToast {clientOnly="true" title="Notification Variants"}

```vue
<template>
  <div class="demo-wrapper py-md-3">
    <div class="row row-cols-auto gy-4">
      <div class="col">
        <bs-button 
          @click="$notification.add({title: 'Default', message: 'Hello, this is a notification message.'})">
          Default
        </bs-button>
      </div>
      <div class="col">
        <bs-button 
          color="success" 
          @click="$notification.success('Hello, this is a notification message.', 'Success')">
          Success
        </bs-button>
      </div>
      <div class="col">
        <bs-button 
          color="info" 
          @click="$notification.info('Hello, this is a notification message.', 'Info')">
          Info
        </bs-button>
      </div>
      <div class="col">
        <bs-button 
          color="warning" 
          @click="$notification.warning('Hello, this is a notification message.', 'Warning')">
          Warning
        </bs-button>
      </div>
      <div class="col">
        <bs-button 
          color="danger" 
          @click="$notification.error('Hello, this is a notification message.', 'Error')">
          Error
        </bs-button>
      </div>
    </div>  
    <bs-notification></bs-notification>
  </div>
</template>

```
:::


## Display Placement

The notifications can be displayed on four sides of the page.

::: BlockVueToast {clientOnly="true" title="Notification display placement" file="./docs/components/overlays/js/notification-1.js"}

```vue
<template>
  <div class="demo-wrapper py-md-2">
    <div class="flex flex-wrap md-gap-4">
      <bs-button color="primary" @click="showAtPosition($notification, 'top-left')">
        Top Left
      </bs-button>
      <bs-button color="primary" @click="showAtPosition($notification, 'top-center')">
        Top Center
      </bs-button>
      <bs-button color="primary" @click="showAtPosition($notification, 'top-right')">
        Top Right
      </bs-button>
      <bs-button color="primary" @click="showAtPosition($notification, 'top-full-width')">
        Top Full Width
      </bs-button>
      <bs-button color="primary" @click="showAtPosition($notification, 'bottom-left')">
        Bottom Left
      </bs-button>
      <bs-button color="primary" @click="showAtPosition($notification, 'bottom-center')">
        Bottom Center
      </bs-button>
      <bs-button color="primary" @click="showAtPosition($notification, 'bottom-right')">
        Bottom Right
      </bs-button>
      <bs-button color="primary" @click="showAtPosition($notification, 'bottom-full-width')">
        Bottom Full Width
      </bs-button>
    </div>
    <bs-notification></bs-notification>
  </div>
</template>

<script setup lang="ts">
import type { INotificationProvider } from 'vue-mdbootstrap';

function showAtPosition(notification: INotificationProvider, position: string) {
  notification.info({
    message: 'Hello, this is a notification message.',
    position: position
  }, 'Information');
}
</script>

```
:::


## With ProgressBar

The notifications also has progress bar that can be displayed when needed.

::: BlockVueToast {clientOnly="true" title="Notification with progress bar" file="./docs/components/overlays/js/notification-2.js"}

```vue
<template>
  <div class="demo-wrapper py-md-3">
    <div class="row row-cols-auto gy-4">
      <div class="col">
        <bs-button
          @click="showWithProgressBar($notification, 'Information', 'default')">
          Default
        </bs-button>
      </div>
      <div class="col">
        <bs-button color="success"
          @click="showWithProgressBar($notification, 'Success', 'success')">
          Success
        </bs-button>
      </div>
      <div class="col">
        <bs-button color="info" @click="showWithProgressBar($notification, 'Information', 'info')">
          Info
        </bs-button>
      </div>
      <div class="col">
        <bs-button color="warning"
          @click="showWithProgressBar($notification, 'Warning', 'warning')">
          Warning
        </bs-button>
      </div>
      <div class="col">
        <bs-button color="danger" @click="showWithProgressBar($notification, 'Error', 'error')">
          Error
        </bs-button>
      </div>
    </div>
    <bs-notification></bs-notification>
  </div>
</template>

<script setup lang="ts">
import type { INotificationProvider } from 'vue-mdbootstrap';

function showWithProgressBar(notification: INotificationProvider, title: string, variant: string) {
  let options = {
    message: 'Hello, this is a notification message.',
    title: title,
    variant: variant,
    progressBar: true,
  };

  notification.add(options);
}
</script>

```
:::


## Hiding Icons

There are cases when the notification icon is not needed. You can hide the icon
using the `iconOff` property via its configuration option when creating new notification.

<SmallNote color="teal">Added in v2.1.3</SmallNote>

::: BlockVueToast {clientOnly="true" title="Notification without icon"}

```html
<div class="demo-wrapper py-md-3">
  <div class="row row-cols-auto gy-4">
    <div class="col">
      <bs-button 
        @click="$notification.add({title: 'Default', message: 'Hello, this is a notification message.', iconOff: true})">
        Default
      </bs-button>
    </div>
    <div class="col">
      <bs-button 
        color="success" 
        @click="$notification.success({title: 'Success', message: 'Hello, this is a notification message.', iconOff: true})">
        Success
      </bs-button>
    </div>
    <div class="col">
      <bs-button 
        color="info" 
        @click="$notification.info({title: 'Info', message: 'Hello, this is a notification message.', iconOff: true})">
        Info
      </bs-button>
    </div>
    <div class="col">
      <bs-button 
        color="warning" 
        @click="$notification.warning({title: 'Warning', message: 'Hello, this is a notification message.', iconOff: true})">
        Warning
      </bs-button>
    </div>
    <div class="col">
      <bs-button 
        color="danger" 
        @click="$notification.error({title: 'Error', message: 'Hello, this is a notification message.', iconOff: true})">
        Error
      </bs-button>
    </div>
  </div>  
  <bs-notification></bs-notification>
</div>
```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-notification` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-notification {
  --md-notification-background-color: #{helper.to-oklch(color.adjust(colors.$gray-900, $lightness: -5%))};
  --md-notification-border-radius: var(--md-radius);
  --md-notification-box-shadow-color: oklch(0 0 0 / 0.2);
  --md-notification-box-shadow-hover-color: oklch(0 0 0 / 0.45);
  --md-notification-color: #{colors.$white};
  --md-notification-hover-color: #{colors.$gray-300};
  --md-notification-font-size: 0.9rem;
  --md-notification-opacity: 0.9;
  --md-notification-title-font-weight: var(--font-weight-medium);
  --md-notification-title-font-size: 110%;
  --md-notification-margin-x: #{vars.$padding-md};
  --md-notification-margin-y: #{vars.$padding-md - vars.$padding-xs};
  --md-notification-progressbar-color: #{colors.$warning-color};
  --md-notification-spacing: #{vars.$padding-md - vars.$padding-xs};
  --md-notification-width: 350px;
}

```

## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Methods">
    <div class="doc-table-responsive doc-table-2cols table:font-mono:col-1">

The `$notification` instance has methods as described below:

| Method    | Description  |
|-----------|--------------|
| <span class="text-primary">add</span>(data:`String`&#124;`TNotificationOption`):`TNotificationOption` | Create and display new notification. *Parameters*: <ul><li>`data`, The notification message or configuration option. </li></ul> |
| <span class="text-primary">error</span>(data:`String`&#124;`TNotificationOption`, title?:`String`):`TNotificationOption`   | <div style="min-width: 400px">Shortcut method to create and display **ERROR** notification. *Parameters*: <ul><li>`data`, The notification message or configuration option. </li><li>`title`, The notification title (*optional*). </li></ul></div> |
| <span class="text-primary">info</span>(data:`String`&#124;`TNotificationOption`, title?:`String`):`TNotificationOption`    | Shortcut method to create and display **INFO** notification. *Parameters*: <ul><li>`data`, The notification message or configuration option. </li><li>`title`, The notification title (*optional*). </li></ul> |
| <span class="text-primary">success</span>(data:`String`&#124;`TNotificationOption`, title?:`String`):`TNotificationOption` | Shortcut method to create and display **SUCCESS** notification. *Parameters*: <ul><li>`data`, The notification message or configuration option. </li><li>`title`, The notification title (*optional*). </li></ul> |
| <span class="text-primary">warning</span>(data:`String`&#124;`TNotificationOption`, title?:`String`):`TNotificationOption` | Shortcut method to create and display **WARNING** notification. *Parameters*: <ul><li>`data`, The notification message or configuration option. </li><li>`title`, The notification title (*optional*). </li></ul> |
| <span class="text-primary">clearAll</span>():`void`                                   | Close all notifications and remove from the DOM. |
| <span class="text-primary">close</span>(item:`TNotificationOption`):`void`            | Alias for `remove` method. |
| <span class="text-primary">remove</span>(item:`TNotificationOption`):`void`           | Close and remove a notification from the DOM. |
| <span class="text-primary">removeByType</span>(variant:`TNotificationVariant`):`void` | Close and remove notification by its variant. Valid variants are: `default`, `success`, `info`, `warning`, `danger`, `custom`. |

</div>
  </BsTab>
  <BsTab label="TNotificationOption">
    <div class="doc-table-responsive doc-table-3cols">

The `TNotificationOption` data object has properties as described below:

| Property          | Type      | Description |
|-------------------|-----------|-------------|
| clickClose        | `Boolean` | Enable closing the notification when clicked. |
| closeButton       | `Boolean` | Display close button. |
| iconOff           | `Boolean` | Enable hiding the notification icon. <MdBadge color="info">v2.1.3</MdBadge> |
| message <Badge type="danger">required</Badge> | `String` | The notification message. |
| position          | `TNotificationPosition` | Set the notification display placement. Valid values are: `top-right`,`top-left`,`top-center`,`top-full-width`,`bottom-right`,`bottom-left`,`bottom-center`,`bottom-full-width`. |
| preventDuplicates | `Boolean` | Prevent duplicate notifications. |
| progressBar       | `Boolean` | Display progress bar or not. |
| timeout           | `Number`  | Notification display duration, in milliseconds. |
| title             | `String`  | The notification title. |
| variant           | `TNotificationVariant` | The notification variant. Valid values are: `default`, `success`, `info`, `warning`, `danger`, `custom`. |

</div>
  </BsTab>
</BsTabs>


<BsNotification />

<script setup lang="ts">
import { ref } from 'vue';
import type { INotificationProvider } from 'vue-mdbootstrap';

const tabs1active = ref(0);

function showAtPosition(notification: INotificationProvider, position: string) {
  notification.info(
    {
      message: 'Hello, this is a notification message.',
      position: position,
    },
    'Information'
  );
}

function showWithProgressBar(notification: INotificationProvider, title: string, variant: string) {
  let options = {
    message: 'Hello, this is a notification message.',
    title: title,
    variant: variant,
    progressBar: true,
  };

  notification.add(options);
}
</script>
