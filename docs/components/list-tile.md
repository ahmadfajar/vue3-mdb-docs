---
outline: [2, 3]
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

::: BlockVue {title="ListTile Example"}

```html
<bs-card border-off>
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
```
:::


## Images

The `<bs-list-tile-leading>` has built-in support for displaying _image_, and additionally
we can use `<bs-icon>` inside the `<bs-list-tile-action>` to display an _icon_. And place
`<bs-list-tile-title>` inside `<bs-list-tile-content>` to display the _title_. See example
below, to learn how to display image with title and icon correctly.

::: BlockVue {title="ListTile with Image Example" file="./docs/components/scripts/list-tile-1.js"}

```vue
<template>
  <bs-app-container class="mobi-card mx-auto p-3 p-md-0">
    <bs-card shadow>
      <bs-appbar class="bg-purple darken-3 rounded-3 rounded-bottom-0">
        <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
        <bs-appbar-title title="Chats" class="text-white"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey" mode="icon" icon="search" flat></bs-button>
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
  </bs-app-container>
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

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVue {title="ListTile MultiLine Content Example" file="./docs/components/scripts/list-tile-2.js"}

```vue
<template>
  <bs-card class="mobi-card" border-off>
    <bs-list-view>
      <bs-subheader>Today</bs-subheader>
      <bs-list-tile v-for="item in listItems1">
        <bs-list-tile-leading :img-src="item.avatar" size="36" circle></bs-list-tile-leading>
        <bs-list-tile-content multi-line>
          <bs-list-tile-title class="fw-semibold">{{ item.title }}</bs-list-tile-title>
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

::: warning <BsIcon icon="report_problem_outlined" class="text-warning" /> <span class="ms-2 h6 mb-0">Security Warning</span>
Dynamically rendering arbitrary HTML on your website can be very dangerous because
it can easily lead to XSS vulnerabilities. Only use `raw-html` property on trusted
content and never on user-provided content.
:::


## Color

We can also make `<bs-list-tile>` to have a background color other than _white_. To achieve this,
we need to set the `color` property of `<bs-list-view>` component to the desired _color name_.

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVue {title="ListTile Color Example" file="./docs/components/scripts/list-tile-2.js"}

```vue
<template>
  <bs-card class="mobi-card bg-stylish-color text-white m-3 m-md-0" shadow>
    <bs-list-view color="stylish-color">
      <bs-subheader dark>Today</bs-subheader>
      <bs-list-tile v-for="item in listItems1">
        <bs-list-tile-leading :img-src="item.avatar" size="36" circle></bs-list-tile-leading>
        <bs-list-tile-content multi-line>
          <bs-list-tile-title class="fw-semibold">{{ item.title }}</bs-list-tile-title>
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

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
Any [MDBootstrap Color](/reference/color-variants#mdbootstrap-colors)
and [Material Color](/reference/color-variants#material-colors) variants can be
applied to the `color` property.
:::


## Manageable State

### Manage by ListView

If property `url="#input-control"`, `url` or `path` of `<bs-list-tile>` is defined explicitly,
then the active state of `<bs-list-tile>` can be manage automatically by
`<bs-list-view>` component when `<bs-list-tile>` is clicked.

<SmallNote color="teal">Added since v2.0.0</SmallNote>

::: BlockVue {title="ListTile State Example" file="./docs/components/scripts/list-tile-3.js"}

```vue
<template>
  <bs-app-container class="mx-auto p-3 p-md-0" style="max-width: 450px">
    <bs-card shadow>
      <bs-appbar class="bg-default-color-dark rounded-3 rounded-bottom-0">
        <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
        <bs-appbar-title title="My Recipes" class="text-white"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey" mode="icon" icon="search" flat></bs-button>
      </bs-appbar>
      <bs-list-view>
        <bs-subheader>Summer Recipes</bs-subheader>
        <template v-for="(item, index) in listItems2" :key="item.title">
          <bs-list-tile :disabled="item.disabled" url="#manage-by-list-view">
            <bs-list-tile-leading
              :img-src="item.photo"
              :size="{ height: 56, width: 85 }"
            ></bs-list-tile-leading>
            <bs-list-tile-content multi-line>
              <bs-list-tile-title class="fw-semibold">{{ item.title }}</bs-list-tile-title>
              <bs-list-tile-subtitle>{{ item.text }}</bs-list-tile-subtitle>
            </bs-list-tile-content>
            <bs-list-tile-action class="rating">0{{ index + 1 }} </bs-list-tile-action>
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
  </bs-app-container>
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
.md-list-tile-action.rating {
  --md-tile-action-color: rgba(0, 0, 0, 0.4);
  font-size: 120%;
  font-weight: 300;
}
</style>
```
:::


### Manage manually {class="mt-lg-5"}

If you wish to manage the `<bs-list-tile>` state manually, define the `individual-state`
property of the `<bs-list-view>` component explicitly.

<SmallNote color="teal">Added since v2.0.0</SmallNote>

::: BlockVue {title="ListTile State Example" file="./docs/components/scripts/list-tile-3.js"}

```vue
<template>
  <bs-app-container class="mx-auto p-3 p-md-0" style="max-width: 450px">
    <bs-card shadow>
      <bs-appbar class="bg-default-color-dark rounded-3 rounded-bottom-0">
        <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
        <bs-appbar-title title="My Recipes" class="text-white"></bs-appbar-title>
        <bs-spacer></bs-spacer>
        <bs-button color="light-grey" mode="icon" icon="search" flat></bs-button>
      </bs-appbar>
      <bs-list-view individual-state>
        <bs-subheader>Summer Recipes</bs-subheader>
        <template v-for="(item, index) in listItems2" :key="item.title">
          <bs-list-tile
            v-model:active="item.active"
            :disabled="item.disabled"
            url="#individual-state"
          >
            <bs-list-tile-leading
              :img-src="item.photo"
              :size="{ height: 56, width: 85 }"
            ></bs-list-tile-leading>
            <bs-list-tile-content multi-line>
              <bs-list-tile-title class="fw-semibold">{{ item.title }}</bs-list-tile-title>
              <bs-list-tile-subtitle>{{ item.text }}</bs-list-tile-subtitle>
            </bs-list-tile-content>
            <bs-list-tile-action class="rating">0{{ index + 1 }} </bs-list-tile-action>
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
  </bs-app-container>
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
.md-list-tile-action.rating {
  --md-tile-action-color: rgba(0, 0, 0, 0.4);
  font-size: 120%;
  font-weight: 300;
}
</style>
```
:::


## Navigation

Additionaly `<bs-list-tile>` can also be used to create navigation menus. Below is the
built-in styles to decorate the navigation menus created with `<bs-list-tile>` component.

### Item Padding

Item padding can be create using the `space-around` property of the `<bs-list-view>` component.
Valid values for the `space-around` property are: `left`, `right` or `both`.

::: BlockVue {title="ListTile Navigation Example"}

```html
<bs-app-container class="mobi-card mx-auto p-3 p-md-0">
  <bs-card class="bg-special-color" shadow>
    <bs-appbar class="bg-orange darken-1 rounded-3 rounded-bottom-0">
      <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
      <bs-appbar-title title="Menus" class="text-white"></bs-appbar-title>
    </bs-appbar>
    <bs-list-view space-around="both">
      <bs-list-tile url="#item-padding">
        <bs-list-tile-leading icon="folder"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>My Files</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#item-padding">
        <bs-list-tile-leading icon="folder_shared"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Shared with me</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#item-padding">
        <bs-list-tile-leading icon="star"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Starred</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#item-padding">
        <bs-list-tile-leading icon="upload"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Upload</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#item-padding">
        <bs-list-tile-leading icon="cloud_upload"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Backup</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#item-padding">
        <bs-list-tile-leading icon="delete"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Trash</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
    </bs-list-view>
  </bs-card>
</bs-app-container>
```
:::


### Item border {class="mt-lg-5"}

We can also give a border to the active navigation's menu. To achieve this, sets the
`item-border-variant` property of `<bs-list-view>` component with value: `left`, `right`,
`left-right`, `top`, `bottom`, or `top-bottom`.

<SmallNote color="teal">Added since v2.0.0</SmallNote>

::: BlockVue {title="ListTile Navigation Example"}

```html
<bs-app-container class="mobi-card mx-auto p-3 p-md-0">
  <bs-card class="bg-special-color" shadow>
    <bs-appbar class="bg-orange darken-1 rounded-3 rounded-bottom-0">
      <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
      <bs-appbar-title title="Menus" class="text-white"></bs-appbar-title>
    </bs-appbar>
    <bs-list-view space-around="both" item-border-variant="left">
      <bs-list-tile url="#item-border">
        <bs-list-tile-leading icon="folder"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>My Files</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#item-border">
        <bs-list-tile-leading icon="folder_shared"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Shared with me</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#item-border">
        <bs-list-tile-leading icon="star"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Starred</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#item-border">
        <bs-list-tile-leading icon="upload"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Upload</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#item-border">
        <bs-list-tile-leading icon="cloud_upload"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Backup</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#item-border">
        <bs-list-tile-leading icon="delete"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Trash</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
    </bs-list-view>
  </bs-card>
</bs-app-container>
```
:::


### Rounded style {class="mt-lg-5"}

Additionaly, we can also add additional style appearance to the navigation's menu.
There are two built-in style appearance, which are: **Rounded** and **Rounded Pill**.
To achieve this, sets the `item-rounded` property of `<bs-list-view>` explicitly to
create _rounded style_, or `item-rounded-pill` to create _rounded pill style_ to an
active navigation menu.

<SmallNote color="teal">Added since v2.0.0</SmallNote>

::: BlockVue {title="ListTile Navigation Example"}

```html
<bs-app-container class="mobi-card mx-auto p-3 p-md-0">
  <bs-card class="bg-special-color" shadow>
    <bs-appbar class="bg-orange darken-1 rounded-3 rounded-bottom-0">
      <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
      <bs-appbar-title title="Menus" class="text-white"></bs-appbar-title>
    </bs-appbar>
    <bs-list-view space-around="both" item-border-variant="left" item-rounded>
      <bs-list-tile url="#rounded-style">
        <bs-list-tile-leading icon="folder"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>My Files</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#rounded-style">
        <bs-list-tile-leading icon="folder_shared"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Shared with me</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#rounded-style">
        <bs-list-tile-leading icon="star"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Starred</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#rounded-style">
        <bs-list-tile-leading icon="upload"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Upload</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#rounded-style">
        <bs-list-tile-leading icon="cloud_upload"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Backup</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
      <bs-list-tile url="#rounded-style">
        <bs-list-tile-leading icon="delete"></bs-list-tile-leading>
        <bs-list-tile-content>
          <bs-list-tile-title>Trash</bs-list-tile-title>
        </bs-list-tile-content>
      </bs-list-tile>
    </bs-list-view>
  </bs-card>
</bs-app-container>
```
:::


## Usage Example

The following are a collection of examples that demonstrate more advanced use of the `<bs-list-tile>`.

### Contact Details

::: BlockVue {title="ListTile Advanced Example"}

```html
<bs-card class="mobi-card mx-md-auto m-3 m-md-0" shadow>
  <bs-card-media title="Jonathan Smith">
    <img src="https://picsum.photos/id/91/600/350.jpg?blur=2" alt="image" />
  </bs-card-media>
  <bs-list-view>
    <bs-list-tile>
      <bs-list-tile-leading class="text-info" icon="phone"> </bs-list-tile-leading>
      <bs-list-tile-content>
        <bs-list-tile-title class="fw-semibold">0821-5555-1234</bs-list-tile-title>
        <bs-list-tile-subtitle class="text-muted"> Mobile | Indonesia </bs-list-tile-subtitle>
      </bs-list-tile-content>
    </bs-list-tile>
    <bs-list-tile>
      <bs-list-tile-leading class="md-has-icon" size="24"></bs-list-tile-leading>
      <bs-list-tile-content>
        <bs-list-tile-title class="fw-semibold"> +6221-4444-6789</bs-list-tile-title>
        <bs-list-tile-subtitle class="text-muted">Work | Indonesia</bs-list-tile-subtitle>
      </bs-list-tile-content>
    </bs-list-tile>
    <bs-divider left-indent="60"></bs-divider>
    <bs-list-tile>
      <bs-list-tile-leading class="text-info" icon="email"></bs-list-tile-leading>
      <bs-list-tile-content>
        <bs-list-tile-title class="fw-semibold"> jonathan.smith@company.com </bs-list-tile-title>
        <bs-list-tile-subtitle class="text-muted">Work</bs-list-tile-subtitle>
      </bs-list-tile-content>
    </bs-list-tile>
    <bs-list-tile>
      <bs-list-tile-leading class="md-has-icon" size="24"></bs-list-tile-leading>
      <bs-list-tile-content>
        <bs-list-tile-title class="fw-semibold"> jonathan.smith212@example.com </bs-list-tile-title>
        <bs-list-tile-subtitle class="text-muted">Personal</bs-list-tile-subtitle>
      </bs-list-tile-content>
    </bs-list-tile>
    <bs-divider left-indent="60"></bs-divider>
    <bs-list-tile>
      <bs-list-tile-leading class="text-info" icon="place"> </bs-list-tile-leading>
      <bs-list-tile-content>
        <bs-list-tile-title class="fw-semibold">1400 Main Street</bs-list-tile-title>
        <bs-list-tile-subtitle class="text-muted">Jakarta, Indonesia</bs-list-tile-subtitle>
      </bs-list-tile-content>
    </bs-list-tile>
  </bs-list-view>
</bs-card>
```
:::


### Used with Input Controls {class="mt-lg-5"}

Sometimes we want to create a complex page layout like android setting. `<bs-list-tile>`
also can be used to create this page. We can place some input controls inside the component
to enable/disable the application setting. Example below will shows you how to create application
setting page layout.

<SmallNote color="teal">Updated on v2.0.0</SmallNote>

::: BlockVue {title="ListTile Advanced Example" file="./docs/components/scripts/list-tile-4.js"}

```vue
<template>
  <bs-app-container class="mobi-card mx-auto p-3 p-md-0">
    <bs-card shadow>
      <bs-appbar class="bg-default-color rounded-top" shadow>
        <bs-button color="light-grey" icon="menu" mode="icon" flat></bs-button>
        <bs-appbar-title title="Setting" class="text-white"></bs-appbar-title>
      </bs-appbar>
      <bs-list-view class="user-setting" individual-state>
        <bs-subheader>User Controls</bs-subheader>
        <bs-list-tile>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="md-fw-semibold">Content Filtering</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">
              Set the content filtering level to restrict appts that can be downloaded
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
          <bs-list-tile-action center>
            <bs-switch v-model="enableFiltering" :value="true" color="default-color"></bs-switch>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="md-fw-semibold">Password</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">
              Require password for purchase or use password to restrict purchase
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
          <bs-list-tile-action center>
            <bs-switch v-model="enablePassword" :value="true" color="default-color"></bs-switch>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-divider></bs-divider>
        <bs-subheader>General</bs-subheader>
        <bs-list-tile url="#input-control" @click.stop="toggleEnableNotification()">
          <bs-list-tile-action>
            <bs-checkbox
              :model-value="enableNotification"
              :value="true"
              color="default-color"
            ></bs-checkbox>
          </bs-list-tile-action>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="md-fw-semibold">Notifications</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">
              Notify me about updates to apps or games that I downloaded
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile url="#input-control" @click.stop="toggleEnableSound()">
          <bs-list-tile-action>
            <bs-checkbox
              :model-value="enableSound"
              :value="true"
              color="default-color"
            ></bs-checkbox>
          </bs-list-tile-action>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="md-fw-semibold">Sound</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">
              Auto-update apps at any time. Data charges may apply
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile url="#input-control" @click.stop="toggleEnableWidget()">
          <bs-list-tile-action>
            <bs-checkbox
              :model-value="enableWidget"
              :value="true"
              color="default-color"
            ></bs-checkbox>
          </bs-list-tile-action>
          <bs-list-tile-content multi-line>
            <bs-list-tile-title class="md-fw-semibold">Auto-add widgets</bs-list-tile-title>
            <bs-list-tile-subtitle class="text-muted">
              Automatically add home screen widgets when downloads complete
            </bs-list-tile-subtitle>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>
    </bs-card>
  </bs-app-container>
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

::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
Property `url="#input-controls"` can be replaced with `navigable` property.
:::


### Inside Side Drawer {class="mt-lg-5"}

`<bs-list-tile>` can also be used inside `<bs-side-drawer>` to create side navigation menus.

::: BlockVue {title="ListTile Advanced Example" clientOnly="true" file="./docs/components/scripts/side-drawer-1.js"}

```vue
<template>
  <bs-app-container class="bg-blue-grey lighten-3 rounded-md-3" style="height: 500px;">
    <bs-appbar class="bg-default-color-dark" clipped-left shadow>
      <bs-button
        color="light-grey"
        icon="menu"
        mode="icon"
        flat
        @click="toggleSideDrawer1(openSideDrawer1)"
      ></bs-button>
      <bs-appbar-title title="Page Title" class="text-white"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-appbar-items>
        <bs-button color="light-grey" icon="search" mode="icon" flat></bs-button>
        <bs-button color="light-grey" icon="notifications_outlined" mode="icon" flat></bs-button>
      </bs-appbar-items>
    </bs-appbar>
    <bs-side-drawer v-model:open="openSideDrawer1" class="border-end">
      <div class="d-flex align-items-center p-3">
        <bs-avatar img-src="/img/kitty-2.jpg" size="40" circle></bs-avatar>
        <span class="h5 ps-3 mb-0">Kitty Doe</span>
      </div>
      <bs-divider></bs-divider>
      <bs-list-view>
        <bs-list-tile url="#side-drawer">
          <bs-list-tile-leading icon="inbox"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Inbox</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile url="#side-drawer">
          <bs-list-tile-leading icon="bookmarks"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Important</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile url="#side-drawer">
          <bs-list-tile-leading icon="send"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Sent</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile url="#side-drawer">
          <bs-list-tile-leading icon="description"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Drafts</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-divider></bs-divider>
        <bs-list-tile url="#side-drawer">
          <bs-list-tile-leading icon="email"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>All Mail</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" color="grey-600">102</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile url="#side-drawer">
          <bs-list-tile-leading icon="delete"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Trash</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">12</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
        <bs-list-tile url="#side-drawer">
          <bs-list-tile-leading icon="gpp_maybe"></bs-list-tile-leading>
          <bs-list-tile-content>
            <bs-list-tile-title>Spam</bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action>
            <bs-badge type="pill" variant="secondary">8</bs-badge>
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-list-view>
    </bs-side-drawer>
    <bs-container app></bs-container>
  </bs-app-container>
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

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.0</SmallNote>

### List View {#css-list-view}

```scss
--md-listview-padding-x: 0;
--md-listview-padding-y: 0.5rem;
--md-listview-bg: #{$color};

```

### List Tile {#css-list-tile}

```scss
$padding-base: 1rem;
$padding-sm: 0.5rem;
$font-size-base: 1rem;

--md-tile-minheight: 2.5rem;
--md-tile-action-minwidth: 1.5rem;
--md-tile-spacing-x: #{$padding-base - .5};
--md-tile-spacing-y: .375rem;
--md-tile-padding-x: #{$padding-base};
--md-tile-padding-y: #{$padding-sm};
--md-tile-title-font-size: #{$font-size-base};
--md-tile-title-font-weight: 400;
--md-tile-subtitle-font-size: #{calc($font-size-base * 90/100)};

--md-tile-hover-bg: #{$tile-hover-bg};
--md-tile-action-color: #{$tile-leading-color};
--md-tile-leading-color: #{$tile-leading-color};
--md-tile-title-color: #{$tile-title-color};
--md-tile-subtitle-color: #{$tile-subtitle-color};

--md-tile-active-bg: #{$tile-active-bg};
--md-tile-active-indicator-border: 4px;
--md-tile-active-action-color: #{$tile-active-leading-icon-color};
--md-tile-active-leading-color: #{$tile-active-title-color};
--md-tile-active-leading-icon-color: #{$tile-active-leading-icon-color};
--md-tile-active-title-color: #{$tile-active-title-color};
--md-tile-active-title-font-weight: 500;
--md-tile-active-subtitle-color: #{$tile-active-subtitle-color};
--md-tile-active-indicator-border-color: #{$tile-indicator-border-color};

--md-tile-disable-action-color: #{$tile-disable-leading-color};
--md-tile-disable-leading-color: #{$tile-disable-leading-color};
--md-tile-disable-title-color: #{$tile-disable-title-color};
--md-tile-disable-subtitle-color: #{$tile-disable-subtitle-color};

```


## API Reference

### BsListView {#api-list-view}

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-list-view">
    <div class="doc-table-responsive doc-table-props">

| Property      | Type        | Default   | Description |
|---------------|-------------|-----------|-------------|
| color         | `String`    | `'white'` | ListView color appearance. |
| individual-state  | `Boolean` | `false`   | The ListView doesn't manage each ListTile's state. <bs-badge color="info">v2.0.0</bs-badge> |
| item-rounded      | `Boolean` | `false`   | Apply _rounded style_ to the _BsListNavItem_ or _BsListTile_. <bs-badge color="info">v2.0.0</bs-badge> |
| item-rounded-pill | `Boolean` | `false`   | Apply _rounded pill style_ to the _BsListNavItem_ or _BsListTile_. <bs-badge color="info">v2.0.0</bs-badge> |
| item-border-variant | `String` |  | Give border around the active item. Valid values are: `left`, `right`, `left-right`, `top`, `bottom`, `top-bottom`. <bs-badge color="info">v2.0.0</bs-badge> |
| model-value <Badge type="tip">v-model</Badge> | `IListItem` |    | Property that hold the ListView's active item object instance. <BsBadge color="info">v2.0.0</BsBadge> |
| overflow-hidden | `Boolean` | `false`   | Apply css `'overflow-hidden'` or not. |
| single-expand   | `Boolean` | `true`    | If `false` then more than one item can be expanded. Only applicable to _BsListNav_. |
| space-around    | `String`  |   | Give padding around each item. Valid values are: `both`, `left`, `right`. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-list-view">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| change  | (`value`: `IListItem`, `oldValue`: `IListItem`) | Fired immediately when this component's mutate its `model-value`. <BsBadge color="info">v2.0.0</BsBadge> |
| update:model-value | (`value`: `IListItem`) | Fired when this component's `model-value` is updated. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-list-view">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListTile {#api-list-tile class="mt-lg-5"}

<BsTabs v-model="tabs2active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-list-tile">
    <div class="doc-table-responsive doc-table-props">

| Property   | Type      | Default | Description |
|------------|-----------|---------|-------------|
| active <Badge type="tip">v-model</Badge> | `Boolean` | `false` | Component state and monitored by `v-model`. |
| active-class | `String`  | `'active'` | `<router-link>` property, configure the active CSS class applied when the link is active. Typically you will want to set this to class name `active`. |
| border-off   | `Boolean` | `false` | Remove border style that have been applied via _BsListView_ to this _BsListTile_. <BsBadge color="info">v2.0.0</BsBadge> |
| disabled     | `Boolean` | `false` | This Component state. |
| id           | `Sting`   |  | Sets the component `ID`. This property value is auto generate. <BsBadge color="info">v2.0.0</BsBadge> |
| navigable    | `Boolean` | `false` | Explicitly define this propperty when you want to use ListTile as navigation or menu item. |
| path         | `String`  |  | `<router-link>` property, the route path for the navigation target. See [vue-router](https://router.vuejs.org/) for more information. |
| pill-off     | `Boolean` | `false` | Remove _rounded pill_ style that have been applied via _BsListView_ to this _BsListTile_. <BsBadge color="info">v2.0.0</BsBadge> |
| ripple-off   | `Boolean` | `false` | Enabled or disabled ripple effect. |
| rounded-off  | `Boolean` | `false` | Remove _rounded_ style that have been applied via _BsListView_ to this _BsListTile_. <BsBadge color="info">v2.0.0</BsBadge> |
| url          | `String`  |  | Absolute or relative URL for the navigation target, when [vue-router](https://router.vuejs.org/) doesn't exists. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-list-tile">
    <div class="doc-table-responsive doc-table-3cols">

| Name   | Arguments | Description |
|--------|---------------|-------------|
| click  | (`event`: `event`, `node`: `Element`/`null`) | Fired when a non-disabled ListTile is clicked |
| update:active | (`value`: `Boolean`) | Fired when this component's `model-value` is updated. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-list-tile">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListTileAction {#api-list-tile-action class="mt-lg-5"}

A container for less important parts of item or for actionable component.

<BsTabs v-model="tabs3active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-list-tile-action">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| center   | `Boolean` | `false` | Centers item inside it vertically. |
| stack    | `Boolean` | `false` | Arrange item inside it vertically. |
| tag      | `String`  | `'div'` | The html tag used to render this component. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-list-tile-action">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListTileLeading {#api-list-tile-leading class="mt-lg-5"}

A component for important parts of item. An avatar, image, or icon is usually placed 
inside this component.

<BsTabs v-model="tabs4active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-list-tile-leading">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| center   | `Boolean` | `false` | Centers the item inside this component vertically. |
| circle   | `Boolean` | `false` | Display image with **circle** shape. |
| icon     | `String`  |         | Icon to display inside the component. Use any valid [Google Material Icon](https://fonts.google.com/icons?icon.set=Material+Icons) name. |
| icon-flip     | `String`  |  | Flip the icon, valid values are: `horizontal`, `vertical`, `both`.  |
| icon-pulse    | `Boolean` | `false` | Apply **pulse** animation to the icon. |
| icon-rotation | `Number`  |         | Rotate the icon, valid values are: `90`, `180`, `270`. |
| icon-spin     | `Boolean` | `false` | Apply **spin** animation to the icon. |
| img-src  | `String`    |            | Sets the image url. |
| rounded  | `Boolean`   | `false`    | Display image with **rounded** shape. If `circle` and `rounded` are not set, then the image shape will become `square`. |
| size     | `Number`/`String`/`Object` | `48` | Shortcut to display image with equal _width_ and _height_. Or defined as `Object` with `width` and `height` as its field, to create a fine tune image size. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-list-tile-leading">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListTileContent {#api-list-tile-content class="mt-lg-5"}

A container for item's description. Inside it, you can put component such 
as `<bs-list-tile-title>` and `<bs-list-tile-subtitle>`.

<BsTabs v-model="tabs5active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-list-tile-content">
    <div class="doc-table-responsive doc-table-props">

| Property  | Type      | Default | Description |
|-----------|-----------|---------|-------------|
| multiLine | `Boolean` | `false` | Useful when you want to display multiline text. By default the _subtitle_ will be displayed in a single line, if the text length is beyond the container width then the text will be cut and put an ellipses at the end.  |
| tag       | `String`  | `'div'` | The html tag used to render this component. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-list-tile-content">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListTileTitle {#api-list-tile-title class="mt-lg-5"}

<BsTabs v-model="tabs6active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-list-tile-title">
    <div class="doc-table-responsive doc-table-props">

| Property  | Type      | Default | Description |
|-----------|-----------|---------|-------------|
| raw-html  | `String`  |  | Useful to render arbitrary HTML. See [MultiLine Content](#multiline-content) section for more information. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-list-tile-title">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsListTileSubtitle {#api-list-tile-subtitle class="mt-lg-5"}

<BsTabs v-model="tabs7active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-list-tile-subtitle">
    <div class="doc-table-responsive doc-table-props">

| Property  | Type      | Default | Description |
|-----------|-----------|---------|-------------|
| raw-html  | `String`  |  | Useful to render arbitrary HTML. See [MultiLine Content](#multiline-content) section for more information. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-list-tile-subtitle">
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
    --md-tile-action-color: rgba(0, 0, 0, 0.4);
    font-size: 120%;
    font-weight: 200;
  }
}
</style>
