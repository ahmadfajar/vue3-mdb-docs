---
outline: [2, 3] 
description: ListTile is a component used to display information. It can contain an image, content, actions, subheaders and much more. ListTile represents content in such a way which makes it easy to identify a specific item in a collection. 
---

# List Tile

::: lead
**BsListTile** is a component used to display information. It can contain an image,
content, actions, subheaders and much more. BsListTile represents content in such 
a way which makes it easy to identify a specific item in a collection. They provide 
a consistent styling for organizing groups of text and images.
:::


## Overview

For the `<bs-list-tile>` to work properly, it needs to be placed inside the `<bs-list-view>`.
After that, you can arrange the list items to display the information in an organized way.

::: BlockVue {title="ListTile Overview"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card>
      <bs-list-view>
        <bs-list-tile v-for="idx in 4">
          <bs-list-tile-content>
            <bs-list-tile-title>Item #{{ idx }}</bs-list-tile-title>
            <bs-list-tile-subtitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </div>
</template>

```
:::


## Images

The `<bs-list-tile-leading>` has built-in support for displaying _image_, and additionally
we can use `<bs-icon>` inside the `<bs-list-tile-action>` to display an _icon_. And place
`<bs-list-tile-title>` inside `<bs-list-tile-content>` to display the _title_. See example
below, to learn how to display image with title and icon correctly.

::: BlockVue {title="ListTile with Image" file="./docs/components/elements/js/list-tile-1.js"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700">
        <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
        <bs-appbar-title title="Chats" class="text-light"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light" mode="icon" icon="search" flat></bs-button>
      </bs-appbar>
      <bs-list-view>
        <bs-subheader>Recent Chats</bs-subheader>
        <bs-list-tile v-for="item in listChat1" :key="item.fullName">
          <bs-list-tile-leading :img-src="item.avatar" size="36" circle> </bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>
              {{ item.fullName }}
            </bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action center>
            <bs-icon :class="{ 'text-info': item.active }" icon="chat_bubble"></bs-icon>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-divider></bs-divider>
        <bs-subheader>Previous Chats</bs-subheader>
        <bs-list-tile v-for="item in listChat2" :key="item.fullName">
          <bs-list-tile-leading :img-src="item.avatar" size="36" circle> </bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>
              {{ item.fullName }}
            </bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action center>
            <bs-icon :class="{ 'text-info': item.active }" icon="chat_bubble"></bs-icon>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

<script lang="ts" setup>
const listChat1 = [
  {
    active: true,
    fullName: 'Jason Oner',
    avatar: 'https://ahmadfajar.github.io/img/1.jpg'
  },
  {
    active: true,
    fullName: 'Ranee Carlson',
    avatar: 'https://ahmadfajar.github.io/img/2.jpg'
  },
  {
    active: false,
    fullName: 'Cindy Baker',
    avatar: 'https://ahmadfajar.github.io/img/3.jpg'
  },
  {
    active: false,
    fullName: 'Ali Connors',
    avatar: 'https://ahmadfajar.github.io/img/4.jpg'
  }
];
const listChat2 = [{ fullName: 'Travis Howard', avatar: 'https://ahmadfajar.github.io/img/5.jpg' }];
</script>

```
:::


## Multiline Content

Sometimes our page may contains **_data list_** with complex structures. For example,
we want to display a list of data which contains _image_, _title_, _description_ and
another content. Example below will shows you how to create this complex data list structures.

<SmallNote color="teal">Updated in v2.0.0</SmallNote>

::: BlockVue {title="ListTile MultiLine Content" file="./docs/components/elements/js/list-tile-2.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card class="mobi-card">
      <bs-list-view>
        <bs-subheader>Today</bs-subheader>
        <bs-list-tile v-for="item in listItems1">
          <bs-list-tile-leading :img-src="item.avatar" size="36" circle></bs-list-tile-leading>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="font-weight-semibold">{{ item.title }}</bs-list-tile-title>
            <bs-list-tile-subtitle :raw-html="item.subtitle"></bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
      <bs-divider></bs-divider>
      <bs-card-body>
        <bs-card-content type="subtitle">Another Content Title</bs-card-content>
        <bs-card-content>{{ content }}</bs-card-content>
      </bs-card-body>
    </bs-card>
  </div>
</template>

<script lang="ts" setup>
const listItems1 = [
  {
    avatar: 'https://ahmadfajar.github.io/img/1.jpg',
    title: 'Brunch this weekend?',
    subtitle:
      "<b>Ali Connors</b> &#8212; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/2.jpg',
    title: 'Summer BBQ',
    subtitle:
      "<b>to Alex, Scott, Jennifer</b> &mdash; Wish I could come, but I'm out of town this weekend."
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/3.jpg',
    title: 'Oui oui',
    subtitle: '<b>Sandra Adams</b> &mdash; Do you have Paris recommendations? Have you ever been?'
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/4.jpg',
    title: 'Birthday gift',
    subtitle:
      '<b>Trevor Hansen</b> &mdash; Have any ideas about what we should get Heidi for her birthday?'
  }
];
const content =
  'Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua.';
</script>
```
:::

::: warning <BsIcon icon="warning" class="text-warning" /> <span class="ms-2 h6 mb-0">Security Warning</span>
Dynamically rendering arbitrary HTML on your website can be very dangerous because
it can easily lead to XSS vulnerabilities. Only use `raw-html` property on trusted
content and never on user-provided content.
:::


## Custom Color

We can also make `<bs-list-tile>` to have different background color. To achieve this,
just style the parent container with the desired background color then use local CSS 
variables to set the text color or use global CSS variables for consistent application UI color.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

::: BlockVue {title="ListTile Custom Color" file="./docs/components/elements/js/list-tile-2.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card class="mobi-card bg-stylish-color text-light mx-auto" shadow>
      <bs-list-view class="listview-custom">
        <bs-subheader dark>Today</bs-subheader>
        <bs-list-tile v-for="item in listItems1">
          <bs-list-tile-leading :img-src="item.avatar" size="36" circle></bs-list-tile-leading>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="font-weight-semibold">
              {{ item.title }}
            </bs-list-tile-title>
            <bs-list-tile-subtitle :raw-html="item.subtitle"></bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
      <bs-divider dark></bs-divider>
      <bs-card-body>
        <bs-card-content type="subtitle">Another Content Title</bs-card-content>
        <bs-card-content>{{ content }}</bs-card-content>
      </bs-card-body>
    </bs-card>
  </div>
</template>

<script lang="ts" setup>
const listItems1 = [
  {
    avatar: 'https://ahmadfajar.github.io/img/1.jpg',
    title: 'Brunch this weekend?',
    subtitle:
      "<b>Ali Connors</b> &#8212; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/2.jpg',
    title: 'Summer BBQ',
    subtitle:
      "<b>to Alex, Scott, Jennifer</b> &mdash; Wish I could come, but I'm out of town this weekend."
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/3.jpg',
    title: 'Oui oui',
    subtitle: '<b>Sandra Adams</b> &mdash; Do you have Paris recommendations? Have you ever been?'
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/4.jpg',
    title: 'Birthday gift',
    subtitle:
      '<b>Trevor Hansen</b> &mdash; Have any ideas about what we should get Heidi for her birthday?'
  }
];
const content =
  'Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua.';
</script>

<style>
.demo-wrapper {
  padding: 1rem;
}

.listview-custom .md-list-tile {
  --md-tile-title-color: oklch(98.894% 0.00531 16.082);
  --md-tile-subtitle-color: oklch(86.378% 0.0001 271.152);
}
</style>

```
:::


## Manageable State

### Manage by ListView {#manageable-state-by-listview}

If property `navigable`, `url` or `path` of `<bs-list-tile>` is defined explicitly,
then the active state of `<bs-list-tile>` can be manage automatically by
`<bs-list-view>` component when `<bs-list-tile>` is clicked.

<SmallNote color="teal">Added in v2.0.0</SmallNote>

::: BlockVue {title="ListTile Manageable State - Automatic" file="./docs/components/elements/js/list-tile-3.js"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700">
        <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
        <bs-appbar-title title="My Recipes" class="text-light"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light" mode="icon" icon="search" flat></bs-button>
      </bs-appbar>
      <bs-list-view>
        <bs-subheader>Summer Recipes</bs-subheader>
        <template v-for="(item, index) in listItems2" :key="item.title">
          <bs-list-tile :disabled="item.disabled" navigable>
            <bs-list-tile-leading
              :img-src="item.photo"
              :size="{ height: 56, width: 85 }"
            ></bs-list-tile-leading>
            <bs-list-tile-content multi-line>
              <bs-list-tile-title class="font-weight-semibold">
                {{ item.title }}
              </bs-list-tile-title>
              <bs-list-tile-subtitle>{{ item.text }}</bs-list-tile-subtitle>
            </bs-list-tile-content>
            <bs-list-tile-action class="rating">
              0{{ index + 1 }}
            </bs-list-tile-action>
          </bs-list-tile>
          <bs-divider
            v-if="index + 1 < listItems2.length"
            :key="item.title + index"
            class="my-0"
            left-indent="118"
          ></bs-divider>
        </template>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const listItems2 = ref([
  {
    photo: 'https://ahmadfajar.github.io/img/crunchy-croissants.jpg',
    title: 'Crunchy Croissants',
    text: 'Buttery, flaky pastry named for its crescent shaped.',
    active: true
  },
  {
    photo: 'https://ahmadfajar.github.io/img/grilled-eggplant-1.jpg',
    title: 'Grilled Eggplant',
    text: 'Tender with a rich, complex flavor when cooked.',
    active: true
  },
  {
    photo: 'https://ahmadfajar.github.io/img/tangerine-salad.jpg',
    title: 'Tangerine Salad',
    text: 'Peak tangerine season lasts from autumn to spring.',
    active: false,
    disabled: true
  },
  {
    photo: 'https://ahmadfajar.github.io/img/pomegranate-juice.jpg',
    title: 'Pomegranate Juice',
    text: 'A superfood for good skin, hair and health.',
    active: false
  },
  {
    photo: 'https://ahmadfajar.github.io/img/simple-salsa.jpg',
    title: 'Chili Salsa',
    text: 'Heat up any taco night with minimal preparation.',
    active: false
  },
  {
    photo: 'https://ahmadfajar.github.io/img/flour-scratch.jpg',
    title: 'Flour from scratch',
    text: 'Grind grains, nuts, or beans in your coffee grinder.',
    active: false
  }
]);
</script>

<style>
.demo-wrapper {
  max-width: 100%;
  padding: 1rem;
}

.mobi-card { max-width: 420px; }

.md-card > .md-appbar {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.md-list-tile-action.rating {
  font-size: 120%;
  font-weight: 300;
}
</style>

```
:::


### Manage manually {#manageable-state-manual class="mt-lg-5"}

If you wish to manage the `<bs-list-tile>` state manually, define the `individual-state`
property of the `<bs-list-view>` component explicitly.

<SmallNote color="teal">Added in v2.0.0</SmallNote>

::: BlockVue {title="ListTile Manageable State - Manual" file="./docs/components/elements/js/list-tile-3.js"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700">
        <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
        <bs-appbar-title title="My Recipes" class="text-light"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light" mode="icon" icon="search" flat></bs-button>
      </bs-appbar>
      <bs-list-view individual-state>
        <bs-subheader>Summer Recipes</bs-subheader>
        <template v-for="(item, index) in listItems2" :key="item.title">
          <bs-list-tile
            v-model:active="item.active"
            :disabled="item.disabled"
            navigable
          >
            <bs-list-tile-leading
              :img-src="item.photo"
              :size="{ height: 56, width: 85 }"
            ></bs-list-tile-leading>
            <bs-list-tile-content multi-line>
              <bs-list-tile-title class="font-weight-semibold">
                {{ item.title }}
              </bs-list-tile-title>
              <bs-list-tile-subtitle>{{ item.text }}</bs-list-tile-subtitle>
            </bs-list-tile-content>
            <bs-list-tile-action class="rating">
              0{{ index + 1 }}
            </bs-list-tile-action>
          </bs-list-tile>
          <bs-divider
            v-if="index + 1 < listItems2.length"
            :key="item.title + index"
            class="my-0"
            left-indent="118"
          ></bs-divider>
        </template>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const listItems2 = ref([
  {
    photo: 'https://ahmadfajar.github.io/img/crunchy-croissants.jpg',
    title: 'Crunchy Croissants',
    text: 'Buttery, flaky pastry named for its crescent shaped.',
    active: true
  },
  {
    photo: 'https://ahmadfajar.github.io/img/grilled-eggplant-1.jpg',
    title: 'Grilled Eggplant',
    text: 'Tender with a rich, complex flavor when cooked.',
    active: true
  },
  {
    photo: 'https://ahmadfajar.github.io/img/tangerine-salad.jpg',
    title: 'Tangerine Salad',
    text: 'Peak tangerine season lasts from autumn to spring.',
    active: false,
    disabled: true
  },
  {
    photo: 'https://ahmadfajar.github.io/img/pomegranate-juice.jpg',
    title: 'Pomegranate Juice',
    text: 'A superfood for good skin, hair and health.',
    active: false
  },
  {
    photo: 'https://ahmadfajar.github.io/img/simple-salsa.jpg',
    title: 'Chili Salsa',
    text: 'Heat up any taco night with minimal preparation.',
    active: false
  },
  {
    photo: 'https://ahmadfajar.github.io/img/flour-scratch.jpg',
    title: 'Flour from scratch',
    text: 'Grind grains, nuts, or beans in your coffee grinder.',
    active: false
  }
]);
</script>

<style>
.demo-wrapper {
  max-width: 100%;
  padding: 1rem;
}

.mobi-card { max-width: 420px; }

.md-card > .md-appbar {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.md-list-tile-action.rating {
  font-size: 120%;
  font-weight: 300;
}
</style>

```
:::


## Navigation

Additionaly `<bs-list-tile>` can also be used to create navigation menus. Below is the
built-in styles to decorate the navigation menus created with `<bs-list-tile>` component.

### Item Padding {#navigation-item-padding}

Item padding can be create using the `space-around` property of the `<bs-list-view>` component.
Valid values for the `space-around` property are: `left`, `right` or `both`.

::: BlockVue {title="ListTile Navigation - Item Padding"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700">
        <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
        <bs-appbar-title title="Menus" class="text-light"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view space-around="both">
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="folder"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>My Files</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="folder_shared"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Shared with me</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="star"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Starred</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="upload"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Upload</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="cloud_upload"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Backup</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="delete"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Trash</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

```
:::


### Item border {#navigation-item-border class="mt-lg-5"}

We can also give a border to the active navigation's menu. To achieve this, sets the
`item-border-variant` property of `<bs-list-view>` component with value: `left`, `right`,
`left-right`, `top`, `bottom`, or `top-bottom`.

<SmallNote color="teal">Added in v2.0.0</SmallNote>

::: BlockVue {title="ListTile Navigation - Item Border"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700">
        <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
        <bs-appbar-title title="Menus" class="text-light"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view space-around="both" item-border-variant="left">
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="folder"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>My Files</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="folder_shared"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Shared with me</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="star"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Starred</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="upload"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Upload</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="cloud_upload"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Backup</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="delete"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Trash</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

```
:::


### Rounded style {#navigation-rounded-style class="mt-lg-5"}

Additionaly, we can also add additional style appearance to the navigation's menu.
There are two built-in style appearance, which are: **Rounded** and **Rounded Pill**.
To achieve this, sets the `item-rounded` property of `<bs-list-view>` explicitly to
create _rounded style_, or `item-rounded-pill` to create _rounded pill style_ to an
active navigation menu.

<SmallNote color="teal">Added in v2.0.0</SmallNote>

::: BlockVue {title="ListTile Navigation - Rounded Style"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700">
        <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
        <bs-appbar-title title="Menus" class="text-light"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view space-around="both" item-border-variant="left" item-rounded>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="folder"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>My Files</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="folder_shared"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Shared with me</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="star"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Starred</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="upload"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Upload</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="cloud_upload"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Backup</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-leading icon="delete"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Trash</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

```
:::


## Usage Example

The following are a collection of examples that demonstrate more advanced use of the `<bs-list-tile>`.

### Contact Details

::: BlockVue {title="ListTile Advanced Usage - Contact Details"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-card-media title="Jonathan Smith">
        <img src="https://picsum.photos/id/91/600/350.jpg?blur=2" alt="image" />
      </bs-card-media>
      <bs-list-view>
        <bs-list-tile>
          <bs-list-tile-leading class="text-primary" icon="phone"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title class="font-weight-semibold">
              0821-5555-1234
            </bs-list-tile-title>
            <bs-list-tile-subtitle class="text-subtle">
              Mobile | Indonesia
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile>
          <bs-list-tile-leading class="md-has-icon" size="24"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title class="font-weight-semibold">
              +6221-4444-6789
            </bs-list-tile-title>
            <bs-list-tile-subtitle class="text-subtle">
              Work | Indonesia
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-divider left-indent="60"></bs-divider>
        <bs-list-tile>
          <bs-list-tile-leading class="text-primary" icon="email"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title class="font-weight-semibold">
              jonathan.smith@company.com
            </bs-list-tile-title>
            <bs-list-tile-subtitle class="text-subtle">Work</bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile>
          <bs-list-tile-leading class="md-has-icon" size="24"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title class="font-weight-semibold">
              jonathan.smith212@example.com
            </bs-list-tile-title>
            <bs-list-tile-subtitle class="text-subtle">Personal</bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-divider left-indent="60"></bs-divider>
        <bs-list-tile>
          <bs-list-tile-leading class="text-danger" icon="place"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title class="font-weight-semibold">
              1400 Main Street
            </bs-list-tile-title>
            <bs-list-tile-subtitle class="text-subtle">
              Jakarta, Indonesia
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </div>
</template>

```
:::


### Used with Input Controls {class="mt-lg-5"}

Sometimes we want to create a complex page layout like android setting. `<bs-list-tile>`
also can be used to create this page. We can place some input controls inside the component
to enable/disable the application setting. Example below will shows you how to create application
setting page layout.

<SmallNote color="teal">Updated in v2.0.0</SmallNote>

::: BlockVue {title="ListTile Advanced Usage - Input Controls" file="./docs/components/elements/js/list-tile-4.js"}

```vue
<template>
  <bs-app class="demo-wrapper">
    <bs-card class="mobi-card w-full mx-auto">
      <bs-appbar class="bg-deep-purple-700" shadow>
        <bs-button color="light" icon="menu" mode="icon" flat></bs-button>
        <bs-appbar-title title="Setting" class="text-light"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view class="user-setting" individual-state>
        <bs-subheader>User Controls</bs-subheader>
        <bs-list-tile>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="font-weight-semibold">Content Filtering</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-subtle">
              Set the content filtering level to restrict appts that can be downloaded
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
          <bs-list-tile-action center>
            <bs-switch v-model="enableFiltering" :value="true"></bs-switch>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="font-weight-semibold">Password</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-subtle">
              Require password for purchase or use password to restrict purchase
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
          <bs-list-tile-action center>
            <bs-switch v-model="enablePassword" :value="true"></bs-switch>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-divider></bs-divider>
        <bs-subheader>General</bs-subheader>
        <bs-list-tile navigable @click.stop="toggleEnableNotification()">
          <bs-list-tile-action>
            <bs-checkbox
              :model-value="enableNotification"
              :value="true"
            ></bs-checkbox>
          </bs-list-tile-action>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="font-weight-semibold">Notifications</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-subtle">
              Notify me about updates to apps or games that I downloaded
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable @click.stop="toggleEnableSound()">
          <bs-list-tile-action>
            <bs-checkbox
              :model-value="enableSound"
              :value="true"
            ></bs-checkbox>
          </bs-list-tile-action>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="font-weight-semibold">Sound</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-subtle">
              Auto-update apps at any time. Data charges may apply
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile navigable @click.stop="toggleEnableWidget()">
          <bs-list-tile-action>
            <bs-checkbox
              :model-value="enableWidget"
              :value="true"
            ></bs-checkbox>
          </bs-list-tile-action>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="font-weight-semibold">Auto-add widgets</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-subtle">
              Automatically add home screen widgets when downloads complete
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </bs-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const enableFiltering = ref(false);
const enablePassword = ref(false);
const enableNotification = ref(false);
const enableSound = ref(false);
const enableWidget = ref(false);

function toggleEnableNotification() {
  enableNotification.value = !enableNotification.value;
}

function toggleEnableSound() {
  enableSound.value = !enableSound.value;
}

function toggleEnableWidget() {
  enableWidget.value = !enableWidget.value;
}
</script>

```
:::


### Inside Side Drawer {class="mt-lg-5"}

`<bs-list-tile>` can also be used inside `<bs-side-drawer>` to create side navigation menus.

::: BlockVue {title="ListTile Advanced Usage - Inside SideDrawer" clientOnly="true" file="./docs/components/container/js/side-drawer-1.js"}

```vue
<template>
  <bs-app class="app-vh bg-gray-500 dark:bg-gray-900/70 rounded-3 md-shadow-1" style="height: 500px;">
    <bs-appbar clipped-left shadow>
      <bs-button
        color="secondary"
        icon="menu"
        mode="icon"
        flat
        @click="toggleSideDrawer1(openSideDrawer1)"
      ></bs-button>
      <bs-appbar-title title="Page Title"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-appbar-items>
        <bs-button color="secondary" icon="search" mode="icon" flat></bs-button>
        <bs-button color="secondary" icon="notifications_outlined" mode="icon" flat></bs-button>
      </bs-appbar-items>
    </bs-appbar>
    <bs-side-drawer v-model:open="openSideDrawer1" class="border-e">
      <div class="flex items-center p-3">
        <bs-avatar img-src="/img/kitty-2.jpg" size="40" circle></bs-avatar>
        <span class="h5 ps-3 mb-0">Kitty Doe</span>
      </div>
      <bs-divider></bs-divider>
      <bs-list-view>
        <bs-list-tile url="#inside-side-drawer">
          <bs-list-tile-leading icon="inbox"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Inbox</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile url="#inside-side-drawer">
          <bs-list-tile-leading icon="bookmarks"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Important</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile url="#inside-side-drawer">
          <bs-list-tile-leading icon="send"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Sent</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile url="#inside-side-drawer">
          <bs-list-tile-leading icon="description"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Drafts</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-divider></bs-divider>
        <bs-list-tile url="#inside-side-drawer">
          <bs-list-tile-leading icon="email"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>All Mail</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" color="secondary" class="dark:bg-secondary!">102</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile url="#inside-side-drawer">
          <bs-list-tile-leading icon="delete"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Trash</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary" class="dark:bg-secondary!">12</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile url="#inside-side-drawer">
          <bs-list-tile-leading icon="gpp_maybe"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Spam</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary" class="dark:bg-secondary!">8</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
    </bs-side-drawer>
    <bs-container app></bs-container>
  </bs-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const openSideDrawer1 = ref(true);

function toggleSideDrawer1(value: boolean) {
  openSideDrawer1.value = !value;
}
</script>

```
:::



## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables and 
global CSS variables for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

### List View {#css-variables-list-view}

```scss
.md-list {
  --md-listview-bg: inherit;
  --md-listview-color: var(--navigation-item-foreground);
  --md-listview-item-gap: 0;
  --md-listview-padding-x: 0;
  --md-listview-padding-y: #{vars.$padding-sm};

  --md-tile-minheight: 2.5rem;
  --md-tile-action-minwidth: 1.5rem;
  --md-tile-spacing-x: #{vars.$padding-sm};
  --md-tile-spacing-y: 0.375rem;
  --md-tile-padding-x: #{vars.$padding-md};
  --md-tile-padding-y: #{vars.$padding-sm};
  --md-tile-subtitle-font-size: #{math.div((vars.$font-size-base * 90), 100)};
  --md-tile-title-font-size: var(--font-size-default);
  --md-tile-title-font-weight: var(--font-weight-normal);
  --md-tile-active-title-font-weight: var(--font-weight-medium);
  --md-tile-disabled-opacity: var(--md-field-readonly-opacity);
  --md-tile-indicator-border-color: var(--navigation-item-border-indicator);
  --md-tile-indicator-border-width: 4px;

  --md-nav-item-padding-x: #{vars.$padding-md};
  --md-nav-item-padding-y: #{vars.$padding-xs};
  --md-nav-item-line-height: normal;
  --md-nav-item-font-size: var(--font-size-default);
  --md-nav-item-font-weight: var(--font-weight-normal);
  --md-nav-item-active-font-weight: var(--font-weight-medium);
  --md-nav-item-disabled-opacity: var(--md-field-readonly-opacity);
}

```

### List Tile {#css-variables-list-tile}

::: code-group

```css [Local CSS]
.md-list-tile {
  --md-tile-action-color: var(--navigation-item-foreground-secondary);
  --md-tile-leading-color: var(--navigation-item-foreground);
  --md-tile-leading-icon-color: var(--navigation-item-foreground-subtle);
  --md-tile-subtitle-color: var(--navigation-item-foreground-secondary);
  --md-tile-title-color: var(--navigation-item-foreground);

  --md-tile-active-bg: var(--navigation-item-active-background);
  --md-tile-active-action-color: var(--navigation-item-active-foreground-secondary);
  --md-tile-active-leading-color: var(--navigation-item-active-foreground);
  --md-tile-active-leading-icon-color: var(--navigation-item-active-foreground-secondary);
  --md-tile-active-subtitle-color: var(--navigation-item-active-foreground-secondary);
  --md-tile-active-title-color: var(--navigation-item-active-foreground);
  --md-tile-hover-bg: var(--navigation-item-hover-background);
}

```

```scss [Global CSS]
:root {
  --navigation-background: var(--background-secondary);
  --navigation-item-foreground: var(--foreground);
  --navigation-item-foreground-secondary: var(--foreground-subtle);
  --navigation-item-foreground-subtle: var(--foreground-subtle-secondary);
  --navigation-item-active-background: #{vars.$default-active-bgcolor};
  --navigation-item-active-foreground: #{helper.to-oklch(
      color.change(color.scale(vars.$default-active-bgcolor, $lightness: -10%), $alpha: 1)
    )};
  --navigation-item-active-foreground-secondary: #{helper.to-oklch(
      color.change(color.scale(vars.$default-active-bgcolor, $lightness: -10%), $alpha: 0.75)
    )};
  --navigation-item-hover-background: #{vars.$default-hover-bgcolor};
  --navigation-item-hover-foreground: var(--foreground);
  --navigation-item-hover-foreground-secondary: #{colors.$gray-600};
  --navigation-item-expanded-background: oklch(0 0 0 / 0.025);
  --navigation-item-border-indicator: var(--md-field-active-indicator);
}

```
:::

### SASS mixins

Sometimes, simply creating a new **ListTile** color variant can be overwhelming, 
as there are too many CSS variables to modify. For cases like this, Vue MDBootstrap 
provides SASS mixins to help you create new **ListTile** color variants.

```scss
use 'vue-mdbootstrap/scss/mixins/listview';

@include listview.make-listview-variant($name, $color);

```

## API Reference

### BsListView {#api-reference-list-view}

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property      | Type        | Default   | Description |
|---------------|-------------|-----------|-------------|
| color <Badge type="warning">deprecated</Badge> | `String` | | ListView background color. <MdBadge color="info">Updated in v2.2.0</MdBadge> <div class="pt-3">Use unified global CSS variables instead.</div> |
| individual-state  | `Boolean` | `false`   | The ListView doesn't manage each ListTile's state. <MdBadge color="info">v2.0.0</MdBadge> |
| item-rounded      | `Boolean` | `false`   | Apply _rounded style_ to the _BsListNavItem_ or _BsListTile_. <MdBadge color="info">v2.0.0</MdBadge> |
| item-rounded-pill | `Boolean` | `false`   | Apply _rounded pill style_ to the _BsListNavItem_ or _BsListTile_. <MdBadge color="info">v2.0.0</MdBadge> |
| item-border-variant | `String` |  | Give border around the active item. Valid values are: `left`, `right`, `left-right`, `top`, `bottom`, `top-bottom`. <MdBadge color="info">v2.0.0</MdBadge> |
| model-value <Badge type="tip">v-model</Badge> | `IListItem` |  | Property that hold the ListView's active item object instance. <MdBadge color="info">v2.0.0</MdBadge> |
| overflow-hidden | `Boolean` | `false`   | Apply css `'overflow-hidden'` or not. |
| single-expand   | `Boolean` | `true`    | If `false` then more than one item can be expanded. Only applicable to _BsListNav_. |
| space-around    | `String`  |  | Give padding around each item. Valid values are: `both`, `left`, `right`. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols table:font-mono:col-2">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| change  | (value:`IListItem`, oldValue: `IListItem`) | Fired immediately when this component's mutate its `model-value`. <MdBadge color="info">v2.0.0</MdBadge> |
| update:model-value | (value:`IListItem`) | Fired when this component's `model-value` is updated. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListTile {#api-reference-list-tile class="mt-lg-5"}

<BsTabs v-model="tabs2active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property   | Type      | Default | Description |
|------------|-----------|---------|-------------|
| active <Badge type="tip">v-model</Badge> | `Boolean` | `false` | Component state and monitored by `v-model`. |
| active-class | `String`  | `'active'` | `<router-link>` property, configure the active CSS class applied when the link is active. Typically you will want to set this to class name `active`. |
| border-off   | `Boolean` | `false` | Remove border style that have been applied via _BsListView_ to this _BsListTile_. <MdBadge color="info">v2.0.0</MdBadge> |
| disabled     | `Boolean` | `false` | This Component state. |
| id           | `Sting`   |  | Sets the component `ID`. This property value is auto generate. <MdBadge color="info">v2.0.0</MdBadge> |
| location     | `RouteLocationAsRelativeGeneric` |  | <div style="min-width:340px">The navigation location target. <MdBadge color="info">v2.0.11</MdBadge> <br /> <br /> The value must be an object that satisfies the `to` property of the `<RouterLink>` component. <br /> <br /> This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information. </div> |
| navigable    | `Boolean` | `false` | Explicitly define this propperty when you want to use ListTile as navigation or menu item. |
| path         | `String`  |  | The route path for the navigation target. <div class="pt-3"> This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information. </div> |
| path-name    | `String`  |  | The path name for the navigation target. <MdBadge color="info">v2.0.11</MdBadge> <div class="pt-3"> This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information.</div> |
| pill-off     | `Boolean` | `false` | Remove _rounded pill_ style that have been applied via _BsListView_ to this _BsListTile_. <MdBadge color="info">v2.0.0</MdBadge> |
| ripple-off   | `Boolean` | `false` | Enabled or disabled ripple effect. |
| rounded-off  | `Boolean` | `false` | Remove _rounded_ style that have been applied via _BsListView_ to this _BsListTile_. <MdBadge color="info">v2.0.0</MdBadge> |
| url          | `String`  |  | Absolute or relative URL for the navigation target, when [vue-router](https://router.vuejs.org/) doesn't exists. |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols table:font-mono:col-2">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| click  | (evt:`event`, node:`Element`&#124;`null`) | Fired when a non-disabled ListTile is clicked |
| update:active | (value:`Boolean`) | <div style="min-width: 300px">Fired when this component's `model-value` is updated. <MdBadge color="info">v2.0.0</MdBadge> </div> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListTileAction {#api-reference-list-tile-action class="mt-lg-5"}

A container for less important parts of item or for actionable component.

<BsTabs v-model="tabs3active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| center   | `Boolean` | `false` | Centers item inside it vertically. |
| stack    | `Boolean` | `false` | Arrange item inside it vertically. |
| tag      | `String`  | `'div'` | The html tag used to render this component. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListTileLeading {#api-reference-list-tile-leading class="mt-lg-5"}

A component for important parts of item. An avatar, image, or icon is usually placed 
inside this component.

<BsTabs v-model="tabs4active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| center   | `Boolean` | `false` | Centers the item inside this component vertically. |
| circle   | `Boolean` | `false` | Display image with **circle** shape. |
| icon     | `String`  |         | <div style="min-width:425px"> Icon to display inside the component. <MdBadge color="info">Updated in v2.1.0</MdBadge> <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `icon-variant` property. </div> |
| icon-flip     | `String`  |  | Flip the icon, valid values are: `horizontal`, `vertical`, `both`.  |
| icon-pulse    | `Boolean` | `false` | Apply **pulse** animation to the icon. |
| icon-rotation | `Number`  |         | Rotate the icon, valid values are: `90`, `180`, `270`. |
| icon-spin     | `Boolean` | `false` | Apply **spin** animation to the icon. |
| icon-variant  | `String`  | `'outlined'` | Use predefined icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <MdBadge color="info">v2.1.0</MdBadge> |
| img-src  | `String`    |            | Sets the source image url. |
| rounded  | `Boolean`   | `false`    | Display image with **rounded** shape. If `circle` and `rounded` are not set, then the image shape will become `square`. |
| size     | `Number`&#124;`String`&#124;`Object` | `48` | Shortcut to display image with equal _width_ and _height_. Or defined as `Object` with `width` and `height` as its field, to create a fine tune image size. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListTileContent {#api-reference-list-tile-content class="mt-lg-5"}

A container for item's description. Inside it, you can put component such 
as `<bs-list-tile-title>` and `<bs-list-tile-subtitle>`.

<BsTabs v-model="tabs5active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property  | Type      | Default | Description |
|-----------|-----------|---------|-------------|
| multiLine | `Boolean` | `false` | Useful when you want to display multiline text. By default the _subtitle_ will be displayed in a single line, if the text length is beyond the container width then the text will be cut and put an ellipses at the end.  |
| tag       | `String`  | `'div'` | The html tag used to render this component. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListTileTitle {#api-reference-list-tile-title class="mt-lg-5"}

<BsTabs v-model="tabs6active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property  | Type      | Default | Description |
|-----------|-----------|---------|-------------|
| raw-html  | `String`  |  | Useful to render arbitrary HTML. See [MultiLine Content](#multiline-content) section for more information. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListTileSubtitle {#api-reference-list-tile-subtitle class="mt-lg-5"}

<BsTabs v-model="tabs7active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property  | Type      | Default | Description |
|-----------|-----------|---------|-------------|
| raw-html  | `String`  |  | Useful to render arbitrary HTML. See [MultiLine Content](#multiline-content) section for more information. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { computed, ref } from 'vue';

const listChat1 = [
  {
    active: true,
    fullName: 'Jason Oner',
    avatar: 'https://ahmadfajar.github.io/img/1.jpg'
  },
  {
    active: true,
    fullName: 'Ranee Carlson',
    avatar: 'https://ahmadfajar.github.io/img/2.jpg'
  },
  {
    active: false,
    fullName: 'Cindy Baker',
    avatar: 'https://ahmadfajar.github.io/img/3.jpg'
  },
  {
    active: false,
    fullName: 'Ali Connors',
    avatar: 'https://ahmadfajar.github.io/img/4.jpg'
  }
];
const listChat2 = [
  { fullName: 'Travis Howard', avatar: 'https://ahmadfajar.github.io/img/5.jpg' }
];

const listItems1 = [
  {
    avatar: 'https://ahmadfajar.github.io/img/1.jpg',
    title: 'Brunch this weekend?',
    subtitle:
      "<b>Ali Connors</b> &#8212; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/2.jpg',
    title: 'Summer BBQ',
    subtitle:
      "<b>to Alex, Scott, Jennifer</b> &mdash; Wish I could come, but I'm out of town this weekend."
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/3.jpg',
    title: 'Oui oui',
    subtitle: '<b>Sandra Adams</b> &mdash; Do you have Paris recommendations? Have you ever been?'
  },
  {
    avatar: 'https://ahmadfajar.github.io/img/4.jpg',
    title: 'Birthday gift',
    subtitle:
      '<b>Trevor Hansen</b> &mdash; Have any ideas about what we should get Heidi for her birthday?'
  }
];
const listItems2 = ref([
  {
    photo: 'https://ahmadfajar.github.io/img/crunchy-croissants.jpg',
    title: 'Crunchy Croissants',
    text: 'Buttery, flaky pastry named for its crescent shaped.',
    active: true
  },
  {
    photo: 'https://ahmadfajar.github.io/img/grilled-eggplant-1.jpg',
    title: 'Grilled Eggplant',
    text: 'Tender with a rich, complex flavor when cooked.',
    active: true
  },
  {
    photo: 'https://ahmadfajar.github.io/img/tangerine-salad.jpg',
    title: 'Tangerine Salad',
    text: 'Peak tangerine season lasts from autumn to spring.',
    active: false,
    disabled: true
  },
  {
    photo: 'https://ahmadfajar.github.io/img/pomegranate-juice.jpg',
    title: 'Pomegranate Juice',
    text: 'A superfood for good skin, hair and health.',
    active: false
  },
  {
    photo: 'https://ahmadfajar.github.io/img/simple-salsa.jpg',
    title: 'Chili Salsa',
    text: 'Heat up any taco night with minimal preparation.',
    active: false
  },
  {
    photo: 'https://ahmadfajar.github.io/img/flour-scratch.jpg',
    title: 'Flour from scratch',
    text: 'Grind grains, nuts, or beans in your coffee grinder.',
    active: false
  }
]);

const content =
  'Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua.';

const openSideDrawer1 = ref(true);
const enableFiltering = ref(false);
const enablePassword = ref(false);
const enableNotification = ref(false);
const enableSound = ref(false);
const enableWidget = ref(false);
const tabs1active = ref(0);
const tabs2active = ref(0);
const tabs3active = ref(0);
const tabs4active = ref(0);
const tabs5active = ref(0);
const tabs6active = ref(0);
const tabs7active = ref(0);

function toggleEnableNotification() {
  enableNotification.value = !enableNotification.value;
}

function toggleEnableSound() {
  enableSound.value = !enableSound.value;
}

function toggleEnableWidget() {
  enableWidget.value = !enableWidget.value;
}

function toggleSideDrawer1(value: boolean) {
  openSideDrawer1.value = !value;
}
</script>

<style lang="scss">
.md-list-tile-action {
  &.rating {
    font-size: 120%;
    font-weight: 200;
    width: 25px;
  }
}
</style>
