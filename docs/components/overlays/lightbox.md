---
description: Lightbox is a modal image gallery component that is used to display a collection of images and videos.
--- 

# Lightbox


::: lead
**BsLightbox** is a modal image gallery component that is used to display a collection of images and videos.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

## Overview

**BsLightbox** uses `<bs-overlay>` component internally and can be closed using 
the ESC key (_enabled by default_), or clicking the backdrop (_enabled by default_).
**BsLightbox** has previous/next controls, indicator and toolbar buttons enabled 
by default. Data sources is provided via `items` property. Additionally, you can
use arrow key **left/right** as navigation.

::: BlockVue {clientOnly="true" title="Lightbox Overview" file="./docs/components/overlays/js/lightbox-1.js"}

```vue
<template>
  <div class="demo-wrapper">
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
      z-index="2000"
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
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=251',
    title: 'First image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=252',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=252',
    title: 'Second image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=253',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=253',
    title: 'Third image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=254',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=254',
    title: 'Fourth image title',
    type: 'image',
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


## Images and Videos

**BsLightbox** can also be used to display youtube, video or image. To achieve this, 
you must set the source type correctly on the Lightbox data source.

<SmallNote color="teal">Added in v2.2.0</SmallNote>

::: BlockVue {clientOnly="true" title="Lightbox Images and Videos" file="./docs/components/overlays/js/lightbox-2.js"}

```vue
<template>
  <div class="demo-wrapper">
    <div class="row row-cols-2 row-cols-sm-4">
      <div class="col">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=255"
          size="100%"
          rounded
          @click="lightbox2?.openAt(0)" />
      </div>
      <div class="col">
        <bs-avatar
          class="md-link"
          img-src="https://i.ytimg.com/vi/s8h4YNaX2aM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnDmUkPAQ_Y3qMDCMknRkTqi069Q"
          size="100%"
          rounded
          @click="lightbox2?.openAt(1)" />
      </div>
      <div class="col mt-3 mt-sm-0">
        <bs-avatar
          class="md-link"
          img-src="https://www.dragon1.com/images/Big_Buck_Bunny.jpg"
          size="100%"
          rounded
          @click="lightbox2?.openAt(2)" />
      </div>
      <div class="col mt-3 mt-sm-0">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=259"
          size="100%"
          rounded
          @click="lightbox2?.openAt(3)" />
      </div>
    </div>
    <bs-lightbox
      ref="lightbox2"
      v-model:open="showGalleryItems2"
      :items="galleryItems2"
      :show-item-title="false"
      thumbnail-height="62"
      z-index="2000"
    ></bs-lightbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { BsLightboxInstance } from 'vue-mdbootstrap';

const lightbox2 = ref<BsLightboxInstance>();
const showGalleryItems2 = ref(false);
const galleryItems2 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=255',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=255',
    title: 'First gallery item',
    type: 'image',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/s8h4YNaX2aM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnDmUkPAQ_Y3qMDCMknRkTqi069Q',
    sourceUrl: 'https://www.youtube.com/watch?v=s8h4YNaX2aM',
    title: 'Second gallery item',
    type: 'youtube',
  },
  {
    thumbnail: 'https://www.dragon1.com/images/Big_Buck_Bunny.jpg',
    sourceUrl: 'https://www.dragon1.com/video/mp4/BigBuck_Bunny_1280x720_30mb.mp4',
    title: 'Third gallery item',
    type: 'video',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=259',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=259',
    title: 'Fourth gallery item',
    type: 'image',
  },
];
</script>

```
:::


## Single Image

**BsLightbox** can also be used to display single modal image. To achieve this, you
have to sets `show-counter`, `show-nav-control`, and `show-thumbnail` property to 
`false`. Additionally, you can also sets `show-toolbar` property to `false`, if you 
don't need any toolbar buttons.

::: BlockVue {clientOnly="true" title="Lightbox Single Image" file="./docs/components/overlays/js/lightbox-3.js"}

```vue
<template>
  <div class="demo-wrapper w-full text-center">
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
      z-index="2000"
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
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=259',
    title: 'Your image title',
    type: 'image',
  },
];
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

::: BlockVue {clientOnly="true" title="Lightbox Custom Toolbar" file="./docs/components/overlays/js/lightbox-4.js"}

```vue
<template>
  <div class="demo-wrapper">
    <div class="row row-cols-2 row-cols-sm-4">
      <div class="col">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=255"
          size="100%"
          rounded
          @click="lightbox4?.openAt(0)" />
      </div>
      <div class="col">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=256"
          size="100%"
          rounded
          @click="lightbox4?.openAt(1)" />
      </div>
      <div class="col mt-3 mt-sm-0">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=257"
          size="100%"
          rounded
          @click="lightbox4?.openAt(2)" />
      </div>
      <div class="col mt-3 mt-sm-0">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/600.jpg?image=258"
          size="100%"
          rounded
          @click="lightbox4?.openAt(3)" />
      </div>
    </div>
    <bs-lightbox
      ref="lightbox4"
      v-model:open="showGalleryItems4"
      :items="galleryItems4"
      :toolbar="buttons"
      z-index="2000"
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

const lightbox4 = ref<BsLightboxInstance>();
const showGalleryItems4 = ref(false);
const buttons = { download: true, rotate: true, menubar: true, close: true };
const galleryItems4 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=255',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=255',
    title: 'First image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=256',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=256',
    title: 'Second image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=257',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=257',
    title: 'Third image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=258',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=258',
    title: 'Fourth image title',
    type: 'image',
  },
];
</script>

```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-lightbox-container` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-lightbox-container {
  --md-lightbox-element-padding-x: #{vars.$padding-sm};
  --md-lightbox-display-bg: ;
  --md-lightbox-toolbar-bg: #{color.change(colors.$black, $alpha: 0.9)};
  --md-lightbox-toolbar-color: oklch(55.6% 0 89.876);
  --md-lightbox-overlay-bg: oklch(20% 0 0);
  --md-lightbox-title-bg: #{color.change(colors.$black, $alpha: 0.7)};
  --md-lightbox-title-color: oklch(65% 0 0);
  --md-lightbox-title-size: 1.25rem;
  --md-lightbox-thumbnail-bg: #{color.change(colors.$black, $alpha: 0.95)};
  --md-lightbox-thumbnail-border: #{1px solid color.change(colors.$black, $alpha: 0.6)};
  --md-lightbox-thumbnail-opacity: 0.5;
  --md-lightbox-thumbnail-active-border-color: #{colors.$red-base};
  --md-lightbox-thumbnail-active-border-width: 2px;
}

```

## API Reference

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default   | Description |
|----------|----------|-----------|-------------|
| esc-close    | `Boolean` | `true`  | Close Lightbox when **ESC** key is pressed. |  
| items        | `TLightboxSource[]`|  | Lightbox source dataset. |
| open <Badge type="tip">v-model</Badge> | `Boolean` | `false` | Show or hide the lightbox. |
| overlay      | `Boolean` | `true`  | Show backdrop overlay or not. |
| overlay-click-close | `Boolean` | `true` | Close Lightbox when the backdrop is clicked. <MdBadge color="info">v2.0.0</MdBadge> |
| show-counter     | `Boolean` | `true` | Show or hide indicator counter. |
| show-item-title  | `Boolean` | `true` | Show or hide active item image title. |
| show-nav-control | `Boolean` | `true` | Show or hide navigation controls. |
| show-thumbnail   | `Boolean` | `true` | Show or hide image thumbnails. |
| show-toolbar     | `Boolean` | `true` | Show or hide toolbar buttons. |
| thumbnail-height | `Number`  | `72`   | Default image thumbnails height. |
| toolbar          | `TLightboxToolbarItems` |  | Configure the toolbar buttons. Defaults value: `{'download': false, 'zoom': true, 'rotate': true, 'info': true, 'delete': true, 'menubar': false, 'close': true}` |
| transition       | `String` | `'slide-top-bottom'` | Transition animation name when showing the active image. Available transitions are: `fade`, `scale`, `slide-fade`, `slide-fade-reverse`, `slide-bottom-top`, `slide-top-bottom`, `slide-left-right`, `slide-right-left`. |
| transition-mode  | `String` |  | Controls the timing sequence of leaving/entering transitions. Available modes are `out-in` and `in-out`. |
| viewer-class     | `String`&#124;`String[]` |  | Additional css class name for active image or video. <MdBadge color="info">v2.2.0</MdBadge> |
| viewer-styles    | `Object` |  | Additional css styles for active image or video. <MdBadge color="info">v2.2.0</MdBadge> |
| z-index          | `Number` |  | Insert inline css style `z-index` to control the component positioning on the html layers. <MdBadge color="info">v2.0.15</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols table:font-mono:col-2">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| change | (activeItem:`TLightboxSource`, newIndex:`Number`) | Triggers when active item is changed. |
| close         |   | Triggers when Lightbox is closed. |
| exec-delete   | (item:`TLightboxSource`) | Triggers when button *DELETE* is clicked.  |
| exec-download | (item:`TLightboxSource`) | Triggers when button *DOWNLOAD* is clicked. |
| exec-info     | (item:`TLightboxSource`) | Triggers when button *INFO* is clicked. |
| exec-rotate-left  | (item:`TLightboxSource`, rotate:`Number`) | Triggers when button *ROTATE-LEFT* is clicked. |
| exec-rotate-right | (item:`TLightboxSource`, rotate:`Number`) | Triggers when button *ROTATE-RIGHT* is clicked. |
| exec-zoomin  | (item:`TLightboxSource`, zoom:`Number`)  | Triggers when button *ZOOM-IN* is clicked. |
| exec-zoomout | (item:`TLightboxSource`, zoom:`Number`)  | Triggers when button *ZOOM-OUT* is clicked. |
| update:open | (state:`Boolean`) | Used to update the `open` property. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| menubar | The outlet slot used to place the toolbar button menus. |

</div>
  </BsTab>
  <BsTab label="Methods">
    <div class="doc-table-responsive doc-table-2cols table:font-mono:col-1">

| Method    | Description  |
|-----------|--------------|
| <span class="text-primary">setActive</span>(index:`Number`) | Change the active item. |
| <span class="text-primary">openAt</span>(index:`Number`) | Open modal lightbox at the given index. |
| <span class="text-primary">nextSlide</span>() | Navigate slide at next to the active item. |
| <span class="text-primary">prevSlide</span>() | Navigate slide at prior to the active item. |

</div>
  </BsTab>
</BsTabs>


<script setup lang="ts">
import { ref } from 'vue';
import type { BsLightboxInstance } from 'vue-mdbootstrap';

const tabs1active = ref(0);
const lightbox1 = ref<BsLightboxInstance>();
const lightbox2 = ref<BsLightboxInstance>();
const lightbox4 = ref<BsLightboxInstance>();
const showGalleryItems1 = ref(false);
const showGalleryItems2 = ref(false);
const showGalleryItems4 = ref(false);
const showSingleItem = ref(false);
const buttons = { download: true, rotate: true, menubar: true, close: true };
const galleryItems1 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=251',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=251',
    title: 'First image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=252',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=252',
    title: 'Second image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=253',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=253',
    title: 'Third image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=254',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=254',
    title: 'Fourth image title',
    type: 'image',
  },
];

const galleryItems2 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=255',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=255',
    title: 'First gallery item',
    type: 'image',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/s8h4YNaX2aM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnDmUkPAQ_Y3qMDCMknRkTqi069Q',
    sourceUrl: 'https://www.youtube.com/watch?v=s8h4YNaX2aM',
    title: 'Second gallery item',
    type: 'youtube',
  },
  {
    thumbnail: 'https://www.dragon1.com/images/Big_Buck_Bunny.jpg',
    sourceUrl: 'https://www.dragon1.com/video/mp4/BigBuck_Bunny_1280x720_30mb.mp4',
    title: 'Third gallery item',
    type: 'video',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=259',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=259',
    title: 'Fourth gallery item',
    type: 'image',
  },
];

const galleryItems3 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=259',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=259',
    title: 'Your image title',
    type: 'image',
  },
];

const galleryItems4 = [
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=255',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=255',
    title: 'First image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=256',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=256',
    title: 'Second image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=257',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=257',
    title: 'Third image title',
    type: 'image',
  },
  {
    thumbnail: 'https://unsplash.it/200.jpg?image=258',
    sourceUrl: 'https://unsplash.it/1200/768.jpg?image=258',
    title: 'Fourth image title',
    type: 'image',
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
