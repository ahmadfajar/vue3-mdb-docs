# Lightbox


::: lead
**BsLightbox** is a modal image gallery component that is used to display a collection of images.
:::


## Overview

**BsLightbox** uses `<bs-overlay>` component internally and can be closed using 
the ESC key (_enabled by default_), or clicking the backdrop (_enabled by default_).
**BsLightbox** has previous/next controls, indicator and toolbar buttons enabled 
by default. Data sources is provided via `items` property. Additionally, you can
use arrow key **left/right** as navigation.

::: BlockVue {clientOnly="true" title="Lightbox Example" file="./docs/components/scripts/lightbox-1.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <div class="row row-cols-2 row-cols-sm-4">
      <div class="col">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=251"
          size="100%"
          rounded
          @click="openGallery1At(0)" />
      </div>
      <div class="col">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=252"
          size="100%"
          rounded
          @click="openGallery1At(1)" />
      </div>
      <div class="col mt-3 mt-sm-0">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=253"
          size="100%"
          rounded
          @click="openGallery1At(2)" />
      </div>
      <div class="col mt-3 mt-sm-0">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=254"
          size="100%"
          rounded
          @click="openGallery1At(3)" />
      </div>
    </div>
    <bs-lightbox
      ref="lightbox1"
      v-model:open="showGalleryItems1"
      :items="galleryItems1"
    ></bs-lightbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { BsLightboxInstance } from 'vue-mdbootstrap';

const lightbox1 = ref<BsLightboxInstance>();
const showGalleryItems1 = ref(false);
const galleryItems1 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=251',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=251',
    title: 'First image title',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=252',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=252',
    title: 'Second image title',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=253',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=253',
    title: 'Third image title',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=254',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=254',
    title: 'Fourth image title',
  },
];

const openGallery1At = (index: number) => {
  if (index != null && index > -1) {
    lightbox1.value?.openAt(index);
  } else {
    showGalleryItems1.value = true;
  }
}
</script>
```
:::


## Custom Toolbar

**BsLightbox** toolbar buttons can be customized to some extent. Additionally, you can
add custom menus to your needs via `menubar` slot and enable the `menubar` button via 
`toolbar` property to make the custom menus work correctly. Some buttons do not perform 
any action, only trigger an event. You must provide your own method for these 
buttons. The buttons that don't provide any actions are: **download**, 
**delete** and **info** buttons.

::: BlockVue {clientOnly="true" title="Lightbox Custom Toolbar Example" file="./docs/components/scripts/lightbox-2.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <div class="row row-cols-2 row-cols-sm-4">
      <div class="col">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=255"
          size="100%"
          rounded
          @click="openGallery2At(0)" />
      </div>
      <div class="col">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=256"
          size="100%"
          rounded
          @click="openGallery2At(1)" />
      </div>
      <div class="col mt-3 mt-sm-0">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=257"
          size="100%"
          rounded
          @click="openGallery2At(2)" />
      </div>
      <div class="col mt-3 mt-sm-0">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=258"
          size="100%"
          rounded
          @click="openGallery2At(3)" />
      </div>
    </div>
    <bs-lightbox
      ref="lightbox2"
      v-model:open="showGalleryItems2"
      :items="galleryItems2"
      :toolbar="buttons"
    >
      <template #menubar>
        <bs-list-view>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#custom-toolbar">Add to album</a>
            <a class="dropdown-item" href="#custom-toolbar">Shared picture</a>
            <bs-divider></bs-divider>
            <a class="dropdown-item" href="#custom-toolbar">Send Feedback</a>
          </div>
        </bs-list-view>
      </template>
    </bs-lightbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { BsLightboxInstance } from 'vue-mdbootstrap';

const lightbox2 = ref<BsLightboxInstance>();
const showGalleryItems2 = ref(false);
const buttons = { download: true, rotate: true, menubar: true, close: true };
const galleryItems2 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=255',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=255',
    title: 'First image title',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=256',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=256',
    title: 'Second image title',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=257',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=257',
    title: 'Third image title',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=258',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=258',
    title: 'Fourth image title',
  },
];

const openGallery2At = (index: number) => {
  if (index != null && index > -1) {
    lightbox2.value?.openAt(index);
  } else {
    showGalleryItems2.value = true;
  }
}
</script>
```
:::


## Single Image

**BsLightbox** can also be used to display single modal image. To achieve this, you
have to sets `show-counter`, `show-nav-control`, and `show-thumbnail` property to 
`false`. Additionally, you can also sets `show-toolbar` property to `false`, if you 
don't need any toolbar buttons.

::: BlockVue {clientOnly="true" title="Lightbox Single Image Example" file="./docs/components/scripts/lightbox-3.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 text-center">
    <bs-avatar
      class="md-link"
      img-src="https://unsplash.it/600.jpg?image=259"
      size="200"
      rounded
      @click="showSingleItem = true"
    ></bs-avatar>
    <bs-lightbox
      v-model:open="showSingleItem"
      :items="galleryItems3"
      :show-counter="false"
      :show-nav-control="false"
      :show-thumbnail="false"
      :show-toolbar="false"
    ></bs-lightbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { BsLightboxInstance } from 'vue-mdbootstrap';

const showSingleItem = ref(false);
const galleryItems3 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=259',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=259',
    title: 'Your image title',
  },
];
</script>
```
:::


## CSS Variables

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.0</SmallNote>

```scss
--md-lightbox-element-padding-x: 0.5rem;
--md-lightbox-display-bg: rgba(0,0,0, .3);
--md-lightbox-toolbar-bg: (0,0,0, .9);
--md-lightbox-toolbar-color: #ced4da;
--md-lightbox-overlay-bg: #151515;
--md-lightbox-title-bg: rgba(0,0,0, .7);
--md-lightbox-title-color: #ced4da;
--md-lightbox-title-size: 1.25rem;
--md-lightbox-thumbnail-bg: rgba(0,0,0, .95);
--md-lightbox-thumbnail-border: 1px solid rgba(0,0,0, .6);
--md-lightbox-thumbnail-opacity: 0.5;
--md-lightbox-thumbnail-active-border-color: #f44336;
--md-lightbox-thumbnail-active-border-width: 2px;

```

## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default   | Description |
|----------|----------|-----------|-------------|
| esc-close    | `Boolean` | `true`  | Close Lightbox when **ESC** key is pressed. |  
| image-class  | `String`/`String[]` |  | Additional css class name for active image. |
| image-styles | `Object`  |  | Additional css styles for active image. |
| items        | `TImageDataset[]`|  | Lightbox source dataset. |
| open <Badge type="tip">v-model</Badge> | `Boolean` | `false` | Show or hide the lightbox. |
| overlay      | `Boolean` | `true`  | Show backdrop overlay or not. |
| overlay-click-close | `Boolean` | `true` | Close Lightbox when the backdrop is clicked. <BsBadge color="info">v2.0.0</BsBadge> |
| overlay-color    | `String`  | `'#000'`| The backdrop overlay color. |
| overlay-opacity  | `Number`  | `0.9`  | The backdrop overlay opacity. |
| show-counter     | `Boolean` | `true` | Show or hide indicator counter. |
| show-item-title  | `Boolean` | `true` | Show or hide active item image title. |
| show-nav-control | `Boolean` | `true` | Show or hide navigation controls. |
| show-thumbnail   | `Boolean` | `true` | Show or hide image thumbnails. |
| show-toolbar     | `Boolean` | `true` | Show or hide toolbar buttons. |
| thumbnail-height | `Number`  | `72`   | Default image thumbnails height. |
| toolbar          | `TLightboxToolbarItems` |  | Configure the toolbar buttons. Defaults value: `{'download': false, 'zoom': true, 'rotate': true, 'info': true, 'delete': true, 'menubar': false, 'close': true}` |
| transition       | `String` | `'slide-top-bottom'` | Transition animation name when showing the active image. Available transitions are: `fade`, `scale`, `slide-fade`, `slide-fade-reverse`, `slide-bottom-top`, `slide-top-bottom`, `slide-left-right`, `slide-right-left`. |
| transition-mode  | `String` |  | Controls the timing sequence of leaving/entering transitions. Available modes are `out-in` and `in-out`. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-reference">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| change | ( activeItem:`TImageDataset`, newIndex:`Number`) | Triggers when active item is changed. |
| close         |   | Triggers when Lightbox is closed. |
| exec-delete   | ( item:`TImageDataset`) | Triggers when button *DELETE* is clicked.  |
| exec-download | ( item:`TImageDataset`) | Triggers when button *DOWNLOAD* is clicked. |
| exec-info     | ( item:`TImageDataset`) | Triggers when button *INFO* is clicked. |
| exec-rotate-left  | ( item:`TImageDataset`, rotate:`Number`) | Triggers when button *ROTATE-LEFT* is clicked. |
| exec-rotate-right | ( item:`TImageDataset`, rotate:`Number`) | Triggers when button *ROTATE-RIGHT* is clicked. |
| exec-zoomin  | ( item:`TImageDataset`, zoom:`Number`)  | Triggers when button *ZOOM-IN* is clicked. |
| exec-zoomout | ( item:`TImageDataset`, zoom:`Number`)  | Triggers when button *ZOOM-OUT* is clicked. |
| update:open | ( state:`Boolean`) | Used to update the `open` property. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| menubar | The outlet slot used to place the toolbar button menus. |

</div>
  </BsTab>
  <BsTab label="Methods" url="#api-reference">
    <div class="doc-table-responsive doc-table-2cols">

| Method    | Description  |
|-----------|--------------|
| setActive( index:`Number`) | Change the active item. |
| openAt( index:`Number`)  | Open modal lightbox at the given index. |
| nextSlide()  | Navigate slide at next to the active item. |
| prevSlide()  | Navigate slide at prior to the active item. |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { ref } from 'vue';
import type { BsLightboxInstance } from 'vue-mdbootstrap';

const tabs1active = ref(0);
const lightbox1 = ref<BsLightboxInstance>();
const lightbox2 = ref<BsLightboxInstance>();
const showGalleryItems1 = ref(false);
const showGalleryItems2 = ref(false);
const showSingleItem = ref(false);
const buttons = { download: true, rotate: true, menubar: true, close: true };
const galleryItems1 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=251',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=251',
    title: 'First image title',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=252',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=252',
    title: 'Second image title',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=253',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=253',
    title: 'Third image title',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=254',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=254',
    title: 'Fourth image title',
  },
];

const galleryItems2 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=255',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=255',
    title: 'First image title',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=256',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=256',
    title: 'Second image title',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=257',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=257',
    title: 'Third image title',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=258',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=258',
    title: 'Fourth image title',
  },
];

const galleryItems3 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=259',
    imageSrc: 'https://unsplash.it/1200/768.jpg?image=259',
    title: 'Your image title',
  },
];

const openGallery1At = (index: number) => {
  if (index != null && index > -1) {
    lightbox1.value?.openAt(index);
  } else {
    showGalleryItems1.value = true;
  }
}

const openGallery2At = (index: number) => {
  if (index != null && index > -1) {
    lightbox2.value?.openAt(index);
  } else {
    showGalleryItems2.value = true;
  }
}

</script>
