---
outline: [2, 3] 
description: Tabs is a component used for creating a pseudo-navigation for a page. 
---

# Tabs

::: lead
**BsTabs** is a component used for creating a pseudo-navigation for a page.
:::


## Overview

**Tabs** navigation can be created using `<bs-tabs>` and `<bs-tab>`. `<bs-tabs>` is used to 
create the navigation container and `<bs-tab>` is used to create the tab-items and their 
contents. 


::: BlockVue {title="Tabs Overview" file="./docs/components/navigation/js/tabs-1.js"}

```vue
<template>
  <div class="demo-wrapper w-full">
    <bs-tabs v-model="demoTabs1">
      <bs-tab label="Home" icon="home">
        {{ homeTab }}
      </bs-tab>
      <bs-tab label="Profile" icon="person">
        {{ profileTab }}
      </bs-tab>
      <bs-tab label="Story" icon="text_snippet">
        {{ storyTab }}
      </bs-tab>
    </bs-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs1 = ref(0);

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
</script>

```
:::


::: info <BsIcon icon="info_outlined" /> <span class="ms-2 h6 mb-0">INFO</span>
- See [BsIcon](/components/icons/icon) to learn more about how to apply **Google Material Symbols**
to the `icon` property. 
- Since Vue MDBootstrap v2.1.0, [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) are replaced with [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols). 
:::


## Style Variants

### Bootstrap Tabs {#style-variants-bootstrap-tabs}

**Bootstrap Tabs** style is default style variant when the `variant` property is not defined.
To explicitly define this style variant, sets `variant` property value of `<bs-tabs>`
to `'tabs'`. When use inside `<bs-card>` component, sets the value of `inner-class` property to 
`'md-card-header'` to have an appropriate **_Bootstrap Tabs style_**.

::: BlockVue {title="Tabs Style Variants - Bootstrap Tabs" file="./docs/components/navigation/js/tabs-2.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card>
      <bs-tabs v-model="demoTabs2" inner-class="md-card-header">
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet">
          {{ storyTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs2 = ref(0);

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
</script>

```
:::


### Bootstrap Pill {#style-variants-bootstrap-pill class="mt-lg-5"}

**Bootstrap Pill** style is another style variant from **Bootstrap**. To use it, sets `variant` 
property value of `<bs-tabs>` to `'pills'`. When use inside `<bs-card>` component, sets the 
`inner-class` property value to `'md-card-header'` to have an appropriate **_Bootstrap Pill style_**. 

Additionally, use the `active-class` property on `<bs-tabs>` to customize the active Tab 
color, for example `active-class="bg-unique active"`. And use the `tab-class` property to 
customize the inactive Tab color.


::: BlockVue {title="Tabs Style Variants - Bootstrap Pill" file="./docs/components/navigation/js/tabs-3.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card>
      <bs-tabs v-model="demoTabs3" variant="pills" inner-class="md-card-header">
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet">
          {{ storyTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs3 = ref(0);

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
</script>

```
:::


### Material {#style-variants-material class="mt-lg-5"}

**Material style** variant can be enabled, by setting `variant` property value of `<bs-tabs>` 
to `'material'` and use the `color` property to have an appropriate tabs color. 

Additionally, use the `active-class` property to customize the active Tab color and indicator, 
for example: `active-class="border-yellow active"`.

::: BlockVue {title="Tabs Style Variants - Material" file="./docs/components/navigation/js/tabs-4.js"}

```vue
<template>
  <bs-app class="rounded-3 border">
    <bs-appbar class="bg-pink-800">
      <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
      <bs-appbar-title title="Page Title" class="text-light"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-button mode="icon" color="light" icon="more_vert" flat></bs-button>
    </bs-appbar>
    <bs-tabs v-model="demoTabs4" variant="material" color="bg-pink-800" class="rounded-0">
      <bs-tab label="Home">
        {{ homeTab }}
      </bs-tab>
      <bs-tab label="News">
        {{ profileTab }}
      </bs-tab>
      <bs-tab label="Videos">
        {{ storyTab }}
      </bs-tab>
      <bs-tab label="Images">
        {{ loremTab }}
      </bs-tab>
    </bs-tabs>
  </bs-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs4 = ref(0);

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
const loremTab = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Vulputate ut pharetra sit amet. Lobortis scelerisque fermentum dui faucibus. Arcu non odio euismod lacinia at quis risus sed. Non enim praesent elementum facilisis leo. Egestas diam in arcu cursus euismod. Netus et malesuada fames ac turpis. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Congue quisque egestas diam in arcu cursus euismod. Turpis massa tincidunt dui ut ornare. Arcu ac tortor dignissim convallis aenean et tortor at risus. Egestas purus viverra accumsan in nisl nisi scelerisque. Mi ipsum faucibus vitae aliquet nec ullamcorper.';
</script>
```
:::


::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
Any valid [color variants](/reference/colors) can be applied to the `color` property.
:::


### Modern {#style-variants-modern class="mt-lg-5"}

**Modern style** variant can be enabled, by setting `variant` property value of `<bs-tabs>` 
to `'modern'` and use the `color` property to have an appropriate tabs color. 

Additionally, use the `active-class` property to customize the active Tab color, for example: `active-class="bg-unique active"`. And use the `tab-class` property to customize the inactive 
Tab color.

::: BlockVue {title="Tabs Style Variants - Modern" file="./docs/components/navigation/js/tabs-5.js"}

```vue
<template>
  <bs-app class="rounded-3 border">
    <bs-appbar class="bg-indigo">
      <bs-button mode="icon" color="light" icon="menu" flat></bs-button>
      <bs-appbar-title title="Page Title" class="text-light"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-button mode="icon" color="light" icon="more_vert" flat></bs-button>
    </bs-appbar>
    <bs-tabs v-model="demoTabs5" variant="modern" color="bg-indigo" class="rounded-0">
      <bs-tab label="Home" icon="home_rounded">
        {{ homeTab }}
      </bs-tab>
      <bs-tab label="Profile" icon="person">
        {{ profileTab }}
      </bs-tab>
      <bs-tab label="Story" icon="text_snippet">
        {{ storyTab }}
      </bs-tab>
      <bs-tab label="Gallery" icon="collections">
        {{ loremTab }}
      </bs-tab>
    </bs-tabs>
  </bs-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs5 = ref(0);

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
const loremTab = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Vulputate ut pharetra sit amet. Lobortis scelerisque fermentum dui faucibus. Arcu non odio euismod lacinia at quis risus sed. Non enim praesent elementum facilisis leo. Egestas diam in arcu cursus euismod. Netus et malesuada fames ac turpis. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Congue quisque egestas diam in arcu cursus euismod. Turpis massa tincidunt dui ut ornare. Arcu ac tortor dignissim convallis aenean et tortor at risus. Egestas purus viverra accumsan in nisl nisi scelerisque. Mi ipsum faucibus vitae aliquet nec ullamcorper.';
</script>
```
:::


::: tip <BsIcon icon="tips_and_updates" /> <span class="ms-2 h6 mb-0">TIP</span>
Any valid [color variants](/reference/colors) can be applied to the `color` property.
:::


## Tabs Placement

The Tabs can be placed at **top**, **bottom**, **left** or **right** side.


### Top {#tabs-placement-top}

This placement is the **default** tabs position when `tab-position` property is not 
defined. To explicitly define Tabs placement, sets `tab-position` property value of 
`<bs-tabs>` to `'top'`. Additionally, you can also set the tabs alignment by setting
the `alignment` property value.

::: BlockVue {title="Tabs Placement - Top" file="./docs/components/navigation/js/tabs-6.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card>
      <bs-tabs 
        v-model="demoTabs6" 
        variant="pills" 
        inner-class="md-card-header" 
        alignment="center" 
        tab-position="top"
      >
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet">
          {{ storyTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs6 = ref(0);

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
</script>

```
:::


### Bottom {#tabs-placement-bottom class="mt-lg-5"}

To place the tabs at bottom side, sets `tab-position` property value of `<bs-tabs>` 
to `'bottom'`. Additionally, you can also set the tabs alignment by setting the 
`alignment` property value.

::: BlockVue {title="Tabs Placement - Bottom" file="./docs/components/navigation/js/tabs-7.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card>
      <bs-tabs 
        v-model="demoTabs7" 
        inner-class="md-card-footer" 
        alignment="center" 
        tab-position="bottom"
      >
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet">
          {{ storyTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs7 = ref(0);

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";

</script>
```
:::


### Left {#tabs-placement-left class="mt-lg-5"}

To place the tabs at left side, sets `tab-position` property value of `<bs-tabs>` 
to `'left'`. Additionally, you can also set the tabs alignment by setting the 
`alignment` property value.

::: BlockVue {title="Tabs Placement - Left" file="./docs/components/navigation/js/tabs-8.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card>
      <bs-tabs 
        v-model="demoTabs8" 
        variant="modern"
        color="bg-unique"
        tab-position="left"
      >
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet">
          {{ storyTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs8 = ref(0);

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
</script>

```
:::


### Right {#tabs-placement-right class="mt-lg-5"}

To place the tabs at left side, sets `tab-position` property value of `<bs-tabs>` 
to `'right'`. Additionally, you can also set the tabs alignment by setting the 
`alignment` property value.

::: BlockVue {title="Tabs Placement - Right" file="./docs/components/navigation/js/tabs-9.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card>
      <bs-tabs 
        v-model="demoTabs9" 
        variant="modern"
        color="bg-unique"
        tab-position="right"
      >
        <bs-tab label="Home" icon="home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet">
          {{ storyTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs9 = ref(0);

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
</script>

```
:::


## Icons

### Position And Size {#icons-position-and-size}

To change the icon position use `icon-position` property and use `icon-size` to change
the icon size. If you set this property, each tab item will have the same icon position and size.

Additionally, you can sets `icon-variant` property to `outlined` (_default_), `rounded`, `sharp`, 
`filled`, `outlined_filled`, `rounded_filled`, or `sharp_filled` to set the icon 
style variant. See [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) for details. 

::: BlockVue {title="Tabs Icons" file="./docs/components/navigation/js/tabs-10.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card>
      <bs-tabs 
        v-model="demoTabs10" 
        variant="material" 
        color="bg-default-color" 
        icon-position="top" 
        icon-size="36"
      >
        <bs-tab label="Home" icon="home_rounded">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet">
          {{ storyTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs10 = ref(0);

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
</script>

```
:::


### Icon Only {#icons-icon-only class="mt-lg-5"}

Do not set the `label` property of `<bs-tab>` and set the value of `icon` property 
to the desired icon name to display only the icon.

::: BlockVue {title="Tabs Icons" file="./docs/components/navigation/js/tabs-11.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card>
      <bs-tabs 
        v-model="demoTabs11" 
        variant="material" 
        alignment="center"
        color="bg-default-color" 
        icon-size="36"
      >
        <bs-tab icon="home_rounded">
          {{ homeTab }}
        </bs-tab>
        <bs-tab icon="person">
          {{ profileTab }}
        </bs-tab>
        <bs-tab icon="text_snippet">
          {{ storyTab }}
        </bs-tab>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs11 = ref(0);

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
</script>

```
:::


## Using Extra Slot

Use the `append-header` slot to add additional components to the top right side of the tab.

<SmallNote color="teal">Added in v2.2.0</SmallNote>

::: BlockVue {title="Tabs Extra Slot" file="./docs/components/navigation/js/tabs-12.js"}

```vue
<template>
  <div class="demo-wrapper">
    <bs-card>
      <bs-tabs 
        v-model="demoTabs12" 
        variant="pills" 
        inner-class="md-card-header" 
      >
        <bs-tab icon="home_rounded" label="Home">
          {{ homeTab }}
        </bs-tab>
        <bs-tab icon="person" label="Profile">
          {{ profileTab }}
        </bs-tab>
        <bs-tab icon="text_snippet" label="Story">
          {{ storyTab }}
        </bs-tab>

        <template #append-header>
          <bs-button class="self-center" color="secondary" flat icon="add" mode="icon"></bs-button>
        </template>
      </bs-tabs>
    </bs-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const demoTabs12 = ref(0);

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
</script>

```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on `.md-tabs` 
for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-tabs {
  --md-tab-content-background: inherit;
  --md-tab-content-padding: #{vars.$padding-md + 0.25};
  --md-tab-placement-top-shadow: #{vars.$tabs-placement-top-shadow};
  --md-tab-placement-bottom-shadow: #{vars.$tabs-placement-bottom-shadow};
  --md-tab-placement-left-shadow: #{vars.$tabs-placement-left-shadow};
  --md-tab-placement-right-shadow: #{vars.$tabs-placement-right-shadow};
  --md-tab-spacing: #{vars.$tabs-spacing};

  // Material and Modern style variant
  --md-tab-item-padding: #{vars.$tabs-item-padding};
  --md-tab-item-color: #{color.change(colors.$white, $alpha: 0.6)};
  --md-tab-item-active-color: #{colors.$white};
  --md-tab-item-hover-color: #{color.change(colors.$white, $alpha: 0.8)};
  --md-tab-item-disabled-color: #{color.change(colors.$white, $alpha: 0.3)};
  --md-tab-item-font-weight: var(--font-weight-medium);
  --md-tab-item-font-size: 0.95rem;

  // Bootstrap Tabs style variant
  --md-tab-tabs-background: var(--md-card-cap-bg, #{vars.$card-cap-bg});
  --md-tab-tabs-border-radius: var(--md-radius, #{vars.$radius-md});
  --md-tab-tabs-border-color: var(--md-card-border-color, #{vars.$card-border-color});
  --md-tab-tabs-border-width: var(--md-card-border-width, thin);
  --md-tab-tabs-active-bg: #{colors.$white};
  --md-tab-tabs-active-border-color: #{colors.$gray-300};
  --md-tab-tabs-hover-border-color: oklch(0.92 0 0);
  --md-tab-tabs-color: #{helper.to-oklch(color.mix(colors.$mdb-default-color, color.change(colors.$gray-800, $alpha: 0.8), 30%, oklch))};
  --md-tab-tabs-hover-color: var(--md-field-active-indicator);
  --md-tab-tabs-margin-x: var(--md-card-cap-padding-x, #{vars.$card-cap-padding-x});
  --md-tab-tabs-margin-y: var(--md-card-cap-padding-y, #{vars.$card-cap-padding-y});

  // Bootstrap Pill style variant
  --md-tab-pills-background: var(--md-card-cap-bg, #{vars.$card-cap-bg});
  --md-tab-pills-border-radius: var(--md-radius, #{vars.$radius-md});
  --md-tab-pills-border-color: var(--md-card-border-color, #{vars.$card-border-color});
  --md-tab-pills-border-width: var(--md-card-border-width, thin);
  --md-tab-pills-color: #{helper.to-oklch(color.mix(colors.$mdb-default-color, color.change(colors.$gray-800, $alpha: 0.8), 30%, oklch))};
  --md-tab-pills-active-bg: var(--md-field-active-indicator);
  --md-tab-pills-active-color: #{colors.$white};
  --md-tab-pills-hover-color: var(--md-field-active-indicator);
  --md-tab-pills-margin: #{vars.$tabs-pills-margin};

  // Material style variant
  --md-tab-material-margin-start: #{vars.$padding-md};
  --md-tab-material-margin-end: #{vars.$padding-md};
  --md-tab-material-padding: #{vars.$tabs-material-padding};
  --md-tab-material-indicator-active-color: #{colors.$white};
  --md-tab-material-indicator-border: #{vars.$tabs-material-indicator-border};

  // Modern style variant
  --md-tab-modern-border-radius: var(--md-radius-pill);
  --md-tab-modern-active-bg: #{color.change(colors.$black, $alpha: 0.2)};
  --md-tab-modern-margin-horizontal: #{vars.$tabs-modern-margin-horizontal};
  --md-tab-modern-margin-vertical: #{vars.$tabs-modern-margin-vertical};
}

```


## API Reference

### BsTabs {#api-reference-tabs}

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property      | Type     | Default    | Description |
|---------------|----------|------------|-------------|
| active-class  | `String` | `'active'` | Optional css class name for active Tab item. |
| alignment     | `String` | `'left'`   | Tabs alignment. Valid values: `left` <span class="text-muted fst-italic">(deprecated)</span>, `right` <span class="text-muted fst-italic">(deprecated)</span>, `start`, `end`, `center`, `justified`. <MdBadge color="info">v2.0.0</MdBadge> |
| color         | `String` |  | The tabs color style for tabs variant: `modern` and `material`. Any [Color Variants](/reference/colors) can be used. |
| content-class | `String` |  | Optional css class name for Tab content. |
| content-transition | `String` | `'fade'` | Tab content display animation transition. Valid values: `fade`, `slide-fade`, `slide-fade-reverse`, `popover`. |
| flex          | `Boolean` | `false`  | Create Tabs with flex styles. Only valid for `tabs` or `pills` variant. |
| icon-position | `String`  | `'left'` | Tab item's icon position. Valid values: `left`, `right`, `top`, `bottom`. |
| icon-size     | `Number`  |  | Tab item icon size. <MdBadge color="info">v2.0.0</MdBadge> |
| inner-class   | `String`  |  | Optional css class name for tabs item's container. |
| tab-class     | `String`  |  | Optional css class name for tab items. |  
| tab-position  | `String`  | `'top'`  | Tabs position. Valid values: `left`, `right`, `top`, `bottom`. |
| model-value <Badge type="tip">v-model</Badge> | `Number` |  | Monitored by `v-model` to maintain active tab index. <MdBadge color="info">v2.0.0</MdBadge> |
| variant       | `String`  | `'tabs'` | Tabs style variant. Built-in values are: `tabs`, `pills`, `material`, `modern`. <MdBadge color="info">Updated in v2.2.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Events">
    <div class="doc-table-responsive doc-table-3cols table:font-mono:col-2">

| Name    | Arguments     | Description |
|---------|---------------|-------------|
| change  | (newTab:`ComponentInternalInstance`, oldTab:`ComponentInternalInstance`, newIndex:`Number`, oldIndex:`Number`) | Fired when active tab is changed. |
| update:model-value | (value:`Number`) | Fired when this component's `model-value` is updated. <MdBadge color="info">v2.0.0</MdBadge> |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the tab item component. |
| append-header | The outlet slot used to place the additional component. <MdBadge color="info">v2.2.0</MdBadge> |

</div>
  </BsTab>
</BsTabs>


### BsTab {#api-reference-tab-item class="mt-lg-5"}

<BsTabs v-model="tabs2active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property     | Type      | Default    | Description |
|--------------|-----------|------------|-------------|
| active-class | `String`  |  | Optional css class name for active Tab item which is used to overrides the `active-class` property of `<bs-tabs>`. |
| aria-label   | `String`  |  | Generate `aria-labelledby` attribute. |
| disabled     | `Boolean` | `false` | The Tab state, enabled or disabled. <MdBadge color="info">v2.0.0</MdBadge> |
| icon         | `String`  |  | <div style="min-width:425px"> The icon to display inside Tab item component. <MdBadge color="info">Updated in v2.1.0</MdBadge> <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `icon-variant` property. </div> |
| icon-flip    | `String`  |  | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. <MdBadge color="info">v2.0.0</MdBadge> |
| icon-rotation | `Number` |  | Rotate the icon, valid values are: `90`, `180`, `270`. <MdBadge color="info">v2.0.0</MdBadge> |
| icon-pulse   | `Boolean` | `false` | Apply **_pulse_** animation to the icon. <MdBadge color="info">v2.0.0</MdBadge> |
| icon-spin    | `Boolean` | `false` | Apply **_spin_** animation to the icon. <MdBadge color="info">v2.0.0</MdBadge> | 
| icon-variant | `String`  | `'outlined'` | Use predefined icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <MdBadge color="info">v2.1.0</MdBadge> |
| id           | `String`  |  | The Tab `ID` attribute. This property value is auto generates. |
| label        | `String`  |  | The Tab label. |
| location    | `RouteLocationAsRelativeGeneric` |  | The navigation location target. <MdBadge color="info">v2.0.11</MdBadge> <div class="pt-3">The value must be an object that satisfies the `to` property of the `<RouterLink>` component.</div><div class="pt-3">This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information.</div> |
| path        | `String`  |  | The route path for the navigation target. <div class="pt-3">This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information.</div> |
| path-name   | `String`  |  | The path name for the navigation target. <MdBadge color="info">v2.0.11</MdBadge> <div class="pt-3">This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information.</div> |
| path        | `String`  |  | `<router-link>` property, the route path for the navigation target. See [vue-router](https://router.vuejs.org/) for more information. |
| url         | `String`  |  | Absolute or relative URL for the navigation target, if doesn't use [vue-router](https://router.vuejs.org/). |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the tab content. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
const loremTab = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Vulputate ut pharetra sit amet. Lobortis scelerisque fermentum dui faucibus. Arcu non odio euismod lacinia at quis risus sed. Non enim praesent elementum facilisis leo. Egestas diam in arcu cursus euismod. Netus et malesuada fames ac turpis. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Congue quisque egestas diam in arcu cursus euismod. Turpis massa tincidunt dui ut ornare. Arcu ac tortor dignissim convallis aenean et tortor at risus. Egestas purus viverra accumsan in nisl nisi scelerisque. Mi ipsum faucibus vitae aliquet nec ullamcorper.';

const tabs1active = ref(0);
const tabs2active = ref(0);
const demoTabs1 = ref(0);
const demoTabs2 = ref(0);
const demoTabs3 = ref(0);
const demoTabs4 = ref(0);
const demoTabs5 = ref(0);
const demoTabs6 = ref(0);
const demoTabs7 = ref(0);
const demoTabs8 = ref(0);
const demoTabs9 = ref(0);
const demoTabs10 = ref(0);
const demoTabs11 = ref(0);
const demoTabs12 = ref(0);
</script>