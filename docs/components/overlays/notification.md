---
description: A lightweight push notification component that display a notification message to user.
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

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVueToast {title="Notification Example"}

```html
<div class="my-demo-wrapper text-center">
  <bs-button color="indigo" @click="$notification.add('Hello, this is a notification message.')">
    Show notification
  </bs-button>
  <bs-notification></bs-notification>
</div>
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

::: BlockVueToast {title="Notification Variants"}

```html
<div class="my-demo-wrapper">
  <div class="row row-cols-auto">
    <div class="col pt-2 pb-1">
      <bs-button 
        color="indigo" 
        @click="$notification.add({title: 'Default', message: 'Hello, this is a notification message.'})">
        Default
      </bs-button>
    </div>
    <div class="col pt-2 pb-1">
      <bs-button 
        color="success" 
        @click="$notification.success('Hello, this is a notification message.', 'Success')">
        Success
      </bs-button>
    </div>
    <div class="col pt-2 pb-1">
      <bs-button 
        color="info" 
        @click="$notification.info('Hello, this is a notification message.', 'Info')">
        Info
      </bs-button>
    </div>
    <div class="col pt-2 pb-1">
      <bs-button 
        color="warning" 
        @click="$notification.warning('Hello, this is a notification message.', 'Warning')">
        Warning
      </bs-button>
    </div>
    <div class="col pt-2 pb-1">
      <bs-button 
        color="danger" 
        @click="$notification.error('Hello, this is a notification message.', 'Error')">
        Error
      </bs-button>
    </div>
  </div>  
  <bs-notification></bs-notification>
</div>
```
:::


## Display Placement

The notifications can be displayed on four sides of the page.

::: BlockVueToast {title="Notification display placement example" file="./docs/components/scripts/notification-1.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <div class="row row-cols-auto">
      <div class="col pt-2 pb-1">
        <bs-button color="indigo" @click="showAtPosition($notification, 'top-left')">
          Top Left
        </bs-button>
      </div>
      <div class="col pt-2 pb-1">
        <bs-button color="indigo" @click="showAtPosition($notification, 'top-center')">
          Top Center
        </bs-button>
      </div>
      <div class="col pt-2 pb-1">
        <bs-button color="indigo" @click="showAtPosition($notification, 'top-right')">
          Top Right
        </bs-button>
      </div>
      <div class="col pt-2 pb-1">
        <bs-button color="indigo" @click="showAtPosition($notification, 'top-full-width')">
          Top Full Width
        </bs-button>
      </div>
      <div class="col pt-2 pb-1">
        <bs-button color="indigo" @click="showAtPosition($notification, 'bottom-left')">
          Bottom Left
        </bs-button>
      </div>
      <div class="col pt-2 pb-1">
        <bs-button color="indigo" @click="showAtPosition($notification, 'bottom-center')">
          Bottom Center
        </bs-button>
      </div>
      <div class="col pt-2 pb-1">
        <bs-button color="indigo" @click="showAtPosition($notification, 'bottom-right')">
          Bottom Right
        </bs-button>
      </div>
      <div class="col pt-2 pb-1">
        <bs-button color="indigo" @click="showAtPosition($notification, 'bottom-full-width')">
          Bottom Full Width
        </bs-button>
      </div>
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

::: BlockVueToast {title="Notification with progress bar example" file="./docs/components/scripts/notification-2.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <div class="row row-cols-auto">
      <div class="col pt-2 pb-1">
        <bs-button color="indigo"
          @click="showWithProgressBar($notification, 'Information', 'default')">
          Default
        </bs-button>
      </div>
      <div class="col pt-2 pb-1">
        <bs-button color="success"
          @click="showWithProgressBar($notification, 'Success', 'success')">
          Success
        </bs-button>
      </div>
      <div class="col pt-2 pb-1">
        <bs-button color="info" @click="showWithProgressBar($notification, 'Information', 'info')">
          Info
        </bs-button>
      </div>
      <div class="col pt-2 pb-1">
        <bs-button color="warning"
          @click="showWithProgressBar($notification, 'Warning', 'warning')">
          Warning
        </bs-button>
      </div>
      <div class="col pt-2 pb-1">
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

<SmallNote color="teal">Added since v2.1.3</SmallNote>

::: BlockVueToast {title="Notification without icon example"}

```html
<div class="my-demo-wrapper">
  <div class="row row-cols-auto">
    <div class="col pt-2 pb-1">
      <bs-button 
        color="indigo" 
        @click="$notification.add({title: 'Default', message: 'Hello, this is a notification message.', iconOff: true})">
        Default
      </bs-button>
    </div>
    <div class="col pt-2 pb-1">
      <bs-button 
        color="success" 
        @click="$notification.success({title: 'Success', message: 'Hello, this is a notification message.', iconOff: true})">
        Success
      </bs-button>
    </div>
    <div class="col pt-2 pb-1">
      <bs-button 
        color="info" 
        @click="$notification.info({title: 'Info', message: 'Hello, this is a notification message.', iconOff: true})">
        Info
      </bs-button>
    </div>
    <div class="col pt-2 pb-1">
      <bs-button 
        color="warning" 
        @click="$notification.warning({title: 'Warning', message: 'Hello, this is a notification message.', iconOff: true})">
        Warning
      </bs-button>
    </div>
    <div class="col pt-2 pb-1">
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

<SmallNote color="teal" class="mt-3">Updated on v2.1.3</SmallNote>

```scss
--md-notification-background-color: #16181b;
--md-notification-border-radius: 0.375rem;
--md-notification-box-shadow-color: rgba(0, 0, 0, 0.2);
--md-notification-box-shadow-hover-color: rgba(0, 0, 0, 0.45);
--md-notification-color: #fff;
--md-notification-font-size: .9rem;
--md-notification-hover-color: #dee2e6;
--md-notification-opacity: 0.9;
--md-notification-title-weight: 500;
--md-notification-title-size: 110%;
--md-notification-padding-x: 1rem;
--md-notification-padding-y: 0.75rem;
--md-notification-progressbar-color: #ffbb33;
--md-notification-spacing: 0.75rem;
--md-notification-width: 350px;

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Methods" url="#api-reference">
    <div class="doc-table-responsive doc-table-2cols">

The `$notification` instance has methods as described below:

| Method    | Description  |
|-----------|--------------|
| add( data:`String`/`TNotificationOption`):`TNotificationOption` | Create and display new notification. *Parameters*: <ul><li>`data`, The notification message or configuration option. </li></ul> |
| error( data:`String`/`TNotificationOption`, title?:`String`):`TNotificationOption`   | <div style="min-width: 400px">Shortcut method to create and display **ERROR** notification. *Parameters*: <ul><li>`data`, The notification message or configuration option. </li><li>`title`, The notification title (*optional*). </li></ul></div> |
| info( data:`String`/`TNotificationOption`, title?:`String`):`TNotificationOption`    | Shortcut method to create and display **INFO** notification. *Parameters*: <ul><li>`data`, The notification message or configuration option. </li><li>`title`, The notification title (*optional*). </li></ul> |
| success( data:`String`/`TNotificationOption`, title?:`String`):`TNotificationOption` | Shortcut method to create and display **SUCCESS** notification. *Parameters*: <ul><li>`data`, The notification message or configuration option. </li><li>`title`, The notification title (*optional*). </li></ul> |
| warning( data:`String`/`TNotificationOption`, title?:`String`):`TNotificationOption` | Shortcut method to create and display **WARNING** notification. *Parameters*: <ul><li>`data`, The notification message or configuration option. </li><li>`title`, The notification title (*optional*). </li></ul> |
| clearAll():`void`                                    | Close all notifications and remove from the DOM. |
| close( item:`TNotificationOption`):`void`            | Alias for `remove` method. |
| remove( item:`TNotificationOption`):`void`           | Close and remove a notification from the DOM. |
| removeByType( variant:`TNotificationVariant`):`void` | Close and remove notification by its variant. Valid variants are: `default`, `success`, `info`, `warning`, `danger`, `custom`. |

</div>
  </BsTab>
  <BsTab label="TNotificationOption" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

The `TNotificationOption` data object has properties as described below:

| Property          | Type      | Description |
|-------------------|-----------|-------------|
| clickClose        | `Boolean` | Enable closing the notification when clicked. |
| closeButton       | `Boolean` | Display close button. |
| iconOff           | `Boolean` | Enable hiding the notification icon. <BsBadge color="info">v2.1.3</BsBadge> |
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
