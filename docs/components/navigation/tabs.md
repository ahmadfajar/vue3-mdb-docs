---
outline: [2, 3]
---

# Tabs

::: lead
**BsTabs** is a component used for creating a pseudo-navigation for a page.
:::


## Overview

**Tabs** navigation can be created using `<bs-tabs>` and `<bs-tab>`. `<bs-tabs>` is used to 
create the navigation container and `<bs-tab>` is used to create the tab-items and their 
contents. 


::: BlockVue {title="Tabs Example" file="./docs/components/scripts/tabs-1.js"}

```vue
<template>
  <div class="bg-white rounded-3 py-2 w-100">
    <bs-tabs v-model="demoTabs1">
      <bs-tab label="Home" icon="home" url="#overview">
        {{ homeTab }}
      </bs-tab>
      <bs-tab label="Profile" icon="person" url="#overview">
        {{ profileTab }}
      </bs-tab>
      <bs-tab label="Story" icon="text_snippet" url="#overview">
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
- The `url` property in the example above is optional and can be ignored. 
- See [BsIcon](/components/icons/icon) to learn more about how to apply the **Google Material Symbols**
to the `icon` property. 
- Since Vue MDBootstrap v2.1.0, [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) are replaced with [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols). 
:::


## Style Variants


### Bootstrap Tabs

**Bootstrap Tabs style** is default style variant when the `variant` property is not defined.
To explicitly define this style variant, sets `variant` property value of `<bs-tabs>`
to `'tabs'`. When use inside `<bs-card>` component, sets the `inner-class` property value to 
`'card-header'` to have an appropriate **_Bootstrap Tabs style_**.

::: BlockVue {title="Bootstrap Tabs Style Example" file="./docs/components/scripts/tabs-2.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <bs-card>
      <bs-tabs v-model="demoTabs2" inner-class="card-header">
        <bs-tab label="Home" icon="home" url="#bootstrap-tabs">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person" url="#bootstrap-tabs">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet" url="#bootstrap-tabs">
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


### Bootstrap Pill {class="mt-lg-5"}

**Bootstrap Pill style** is another style variant from **Bootstrap**. To use it, sets `variant` 
property value of `<bs-tabs>` to `'pills'`. When use inside `<bs-card>` component, sets the 
`inner-class` property value to `'card-header'` to have an appropriate **_Bootstrap Pill style_**. 

Additionally, use the `active-class` property on `<bs-tabs>` to customize the active Tab 
color, for example `active-class="bg-unique active"`. And use the `tab-class` property to 
customize the inactive Tab color.


::: BlockVue {title="Bootstrap Tabs Style Example" file="./docs/components/scripts/tabs-3.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <bs-card>
      <bs-tabs v-model="demoTabs3" variant="pills" inner-class="card-header">
        <bs-tab label="Home" icon="home" url="#bootstrap-pill">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person" url="#bootstrap-pill">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet" url="#bootstrap-pill">
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


### Material {class="mt-lg-5"}

**Material style** variant can be enabled, by setting `variant` property value of `<bs-tabs>` 
to `'material'` and use the `color` property to have an appropriate tabs color. 

Additionally, use the `active-class` property to customize the active Tab color and indicator, 
for example: `active-class="border-yellow active"`.

::: BlockVue {title="Material Tabs Style Example" file="./docs/components/scripts/tabs-4.js"}

```vue
<template>
  <bs-app class="rounded-md-3 bg-white">
    <bs-appbar class="bg-pink darken-3">
      <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
      <bs-appbar-title title="Page Title" class="text-white"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-button mode="icon" color="light-grey" icon="more_vert" flat></bs-button>
    </bs-appbar>
    <bs-tabs v-model="demoTabs4" variant="material" color="pink darken-3">
      <bs-tab label="Home" url="#material">
        {{ homeTab }}
      </bs-tab>
      <bs-tab label="News" url="#material">
        {{ profileTab }}
      </bs-tab>
      <bs-tab label="Videos" url="#material">
        {{ storyTab }}
      </bs-tab>
      <bs-tab label="Images" url="#material">
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
Any valid [color variants](/reference/color-variants) can be applied to the `color` property.
:::


### Modern {class="mt-lg-5"}

**Modern style** variant can be enabled, by setting `variant` property value of `<bs-tabs>` 
to `'modern'` and use the `color` property to have an appropriate tabs color. 

Additionally, use the `active-class` property to customize the active Tab color, for example: `active-class="bg-unique active"`. And use the `tab-class` property to customize the inactive 
Tab color.

::: BlockVue {title="Material Tabs Style Example" file="./docs/components/scripts/tabs-5.js"}

```vue
<template>
  <bs-app class="rounded-md-3 bg-white">
    <bs-appbar class="bg-default-color-dark">
      <bs-button mode="icon" color="light-grey" icon="menu" flat></bs-button>
      <bs-appbar-title title="Page Title" class="text-white"></bs-appbar-title>
      <bs-spacer></bs-spacer>
      <bs-button mode="icon" color="light-grey" icon="more_vert" flat></bs-button>
    </bs-appbar>
    <bs-tabs v-model="demoTabs5" variant="modern" color="default-color-dark">
      <bs-tab label="Home" icon="home_rounded" url="#modern">
        {{ homeTab }}
      </bs-tab>
      <bs-tab label="Profile" icon="person" url="#modern">
        {{ profileTab }}
      </bs-tab>
      <bs-tab label="Story" icon="text_snippet" url="#modern">
        {{ storyTab }}
      </bs-tab>
      <bs-tab label="Gallery" icon="collections" url="#modern">
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
Any valid [color variants](/reference/color-variants) can be applied to the `color` property.
:::


## Tabs Placement

The Tabs can be placed at **top**, **bottom**, **left** or **right** side.


### Top

This placement is the **default** tabs position when `tab-position` property is not 
defined. To explicitly define Tabs placement, sets `tab-position` property value of 
`<bs-tabs>` to `'top'`. Additionally, you can also set the tabs alignment by setting
the `alignment` property value.

::: BlockVue {title="Tabs Placement Example" file="./docs/components/scripts/tabs-6.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <bs-card>
      <bs-tabs 
        v-model="demoTabs6" 
        variant="pills" 
        inner-class="card-header" 
        alignment="center" 
        tab-position="top"
      >
        <bs-tab label="Home" icon="home" url="#top">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person" url="#top">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet" url="#top">
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


### Bottom {class="mt-lg-5"}

To place the tabs at bottom side, sets `tab-position` property value of `<bs-tabs>` 
to `'bottom'`. Additionally, you can also set the tabs alignment by setting the 
`alignment` property value.

::: BlockVue {title="Tabs Placement Example" file="./docs/components/scripts/tabs-7.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <bs-card>
      <bs-tabs 
        v-model="demoTabs7" 
        inner-class="card-footer" 
        alignment="center" 
        tab-position="bottom"
      >
        <bs-tab label="Home" icon="home" url="#bottom">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person" url="#bottom">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet" url="#bottom">
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


### Left {class="mt-lg-5"}

To place the tabs at left side, sets `tab-position` property value of `<bs-tabs>` 
to `'left'`. Additionally, you can also set the tabs alignment by setting the 
`alignment` property value.

::: BlockVue {title="Tabs Placement Example" file="./docs/components/scripts/tabs-8.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <bs-card border-off>
      <bs-tabs 
        v-model="demoTabs8" 
        variant="modern"
        color="unique"
        tab-position="left"
      >
        <bs-tab label="Home" icon="home" url="#left">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person" url="#left">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet" url="#left">
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


### Right {class="mt-lg-5"}

To place the tabs at left side, sets `tab-position` property value of `<bs-tabs>` 
to `'right'`. Additionally, you can also set the tabs alignment by setting the 
`alignment` property value.

::: BlockVue {title="Tabs Placement Example" file="./docs/components/scripts/tabs-9.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <bs-card border-off>
      <bs-tabs 
        v-model="demoTabs9" 
        variant="modern"
        color="default-color"
        tab-position="right"
      >
        <bs-tab label="Home" icon="home" url="#right">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person" url="#right">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet" url="#right">
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

### Position And Size

To change the icon position use `icon-position` property and use `icon-size` to change
the icon size. If you set this property, each tab item will have the same icon position and size.

Additionally, you can sets `icon-variant` property to `outlined` (_default_), `rounded`, `sharp`, 
`filled`, `outlined_filled`, `rounded_filled`, or `sharp_filled` to set the icon 
style variant. See [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) for details. 

::: BlockVue {title="Tabs Icons Example" file="./docs/components/scripts/tabs-10.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-tabs 
        v-model="demoTabs10" 
        variant="material" 
        color="default-color" 
        icon-position="top" 
        icon-size="36"
      >
        <bs-tab label="Home" icon="home_rounded" url="#position-and-size">
          {{ homeTab }}
        </bs-tab>
        <bs-tab label="Profile" icon="person" url="#position-and-size">
          {{ profileTab }}
        </bs-tab>
        <bs-tab label="Story" icon="text_snippet" url="#position-and-size">
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


### Icon Only {class="mt-lg-5"}

Do not sets the `label` property of `<bs-tab>` and sets the `icon` property value to display 
only the icon.

::: BlockVue {title="Tabs Icons Example" file="./docs/components/scripts/tabs-11.js"}

```vue
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-tabs 
        v-model="demoTabs11" 
        variant="material" 
        alignment="center"
        color="default-color" 
        icon-size="36"
      >
        <bs-tab icon="home_rounded" url="#icon-only">
          {{ homeTab }}
        </bs-tab>
        <bs-tab icon="person" url="#icon-only">
          {{ profileTab }}
        </bs-tab>
        <bs-tab icon="text_snippet" url="#icon-only">
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


## CSS Variables

<SmallNote color="teal" class="mt-lg-4">Added since v2.0.0</SmallNote>

```scss
--md-tabs-content-padding: 1.25rem;
--md-tabs-item-padding: 0.75rem 1.25rem;
--md-tabs-item-spacing: 0.375rem;
--md-tabs-item-font-weight: 500;
--md-tabs-placement-top-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15),0px 2px 2px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12);
--md-tabs-placement-bottom-shadow: 0px -1px 5px rgba(0, 0, 0, 0.2),0px -1px 2px rgba(0, 0, 0, 0.14),0px -3px 1px -2px rgba(0, 0, 0, 0.12);
--md-tabs-placement-left-shadow: 1px 0px 5px rgba(0, 0, 0, 0.2),2px 0px 2px rgba(0, 0, 0, 0.14),3px 0px 1px -2px rgba(0, 0, 0, 0.12);
--md-tabs-placement-right-shadow: -1px 0px 5px rgba(0, 0, 0, 0.2),-2px 0px 2px rgba(0, 0, 0, 0.14),-3px 0px 1px -2px rgba(0, 0, 0, 0.12);


// Bootstrap Tabs style variant
--bs-nav-tabs-border-color: #dee2e6;
--bs-nav-tabs-border-radius: 0.375rem;
--bs-nav-tabs-border-width: 1px;
--bs-nav-tabs-link-active-color: #495057;
--bs-nav-tabs-link-active-bg: #fff;
--bs-nav-tabs-link-active-border-color: #dee2e6 #dee2e6 #fff;
--bs-nav-tabs-link-hover-border-color: #e9ecef #e9ecef #dee2e6;

--md-tabs-nav-active-border-color: #dee2e6;
--md-tabs-nav-margin-x: 1rem;
--md-tabs-nav-margin-y: 0.5rem;

// Bootstrap Pill style variant
--bs-nav-pills-border-radius: 0.375rem;
--bs-nav-pills-link-active-bg: rgb(var(--md-field-primary-indicator-rgb));
--bs-nav-pills-link-active-color: #fff;

// Bootstrap Tabs and Pill style variant
--bs-nav-link-color: rgba(69, 64, 98, 0.86);
--bs-nav-link-hover-color: rgb(var(--md-field-primary-indicator-rgb))

// Material style variant
--md-tabs-material-padding: 1.125rem 1.5rem 1rem 1.5rem;
--md-tabs-material-margin-start: 1rem;
--md-tabs-material-margin-end: 1rem;
--md-tabs-material-indicator-active-color: #fff;
--md-tabs-material-indicator-border: 0.2rem;

// Modern style variant
--md-tabs-modern-border-radius: 50rem;
--md-tabs-modern-padding: 0.625rem 1.25rem;
--md-tabs-modern-active-bgcolor: rgba(0, 0, 0, 0.2);

// Material and Modern style variant
--md-tabs-item-color: rgba(255, 255, 255, 0.6);
--md-tabs-item-active-color: #fff;
--md-tabs-item-hover-color: rgba(255, 255, 255, 0.8);
--md-tabs-item-disabled-color: rgba(255, 255, 255, 0.3);

```


## API Reference

### BsTabs {#api-tabs}

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-tabs">
    <div class="doc-table-responsive doc-table-props">

| Property      | Type     | Default    | Description |
|---------------|----------|------------|-------------|
| active-class  | `String` | `'active'` | Optional css class name for active Tab item. |
| alignment     | `String` | `'left'`   | Tabs alignment. Valid values: `left` <span class="text-muted fst-italic">(deprecated)</span>, `right` <span class="text-muted fst-italic">(deprecated)</span>, `start`, `end`, `center`, `justified`. <BsBadge color="info">v2.0.0</BsBadge> |
| color         | `String` |  | The tabs color style for tabs variant: `modern` and `material`. Any [Color Variants](/reference/color-variants) can be used. |
| content-class | `String` |  | Optional css class name for Tab content. |
| content-transition | `String` | `'fade'` | Tab content display animation transition. Valid values: `fade`, `slide-fade`, `slide-fade-reverse`, `popover`. |
| flex          | `Boolean` | `false`  | Create Tabs with flex styles. Only valid for `tabs` or `pills` variant. |
| icon-position | `String`  | `'left'` | Tab item's icon position. Valid values: `left`, `right`, `top`, `bottom`. |
| icon-size     | `Number`  |  | Tab item icon size. <BsBadge color="info">v2.0.0</BsBadge> |
| inner-class   | `String`  |  | Optional css class name for tabs item's container. |
| tab-class     | `String`  |  | Optional css class name for tab items. |  
| tab-position  | `String`  | `'top'`  | Tabs position. Valid values: `left`, `right`, `top`, `bottom`. |
| model-value <Badge type="tip">v-model</Badge> | `Number` |  | Monitored by `v-model` to maintain active tab index. <BsBadge color="info">v2.0.0</BsBadge> |
| variant       | `String`  | `'tabs'` | Tabs style variant. Valid values: `tabs`, `pills`, `material`, `modern`. |

</div>
  </BsTab>
  <BsTab label="Events" url="#api-tabs">
    <div class="doc-table-responsive doc-table-3cols">

| Name    | Arguments     | Description |
|---------|---------------|-------------|
| change  | ( newTab:`ComponentInternalInstance`, oldTab:`ComponentInternalInstance`, newIndex:`Number`, oldIndex:`Number`) | Fired when active tab is changed. |
| update:model-value | ( value:`Number`) | Fired when this component's `model-value` is updated. <BsBadge color="info">v2.0.0</BsBadge> |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-tabs">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the tab item component. |

</div>
  </BsTab>
</BsTabs>


### BsTab {#api-tab-item class="mt-lg-5"}

<BsTabs v-model="tabs2active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-tab-item">
    <div class="doc-table-responsive doc-table-props">

| Property     | Type      | Default    | Description |
|--------------|-----------|------------|-------------|
| active-class | `String`  |  | Optional css class name for active Tab item which is used to overrides the `active-class` property of `<bs-tabs>`. |
| aria-label   | `String`  |  | Generate `aria-labelledby` attribute. |
| disabled     | `Boolean` | `false` | The Tab state, enabled or disabled. <BsBadge color="info">v2.0.0</BsBadge> |
| icon         | `String`  |  | <div style="min-width:425px"> The icon to display inside Tab item component. <BsBadge color="info">Updated on v2.1.0</BsBadge> <p>Use any valid android icon name from [Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) with or without a suffix. Valid suffixes are: `_outlined`, `_rounded`, `_sharp`, `_filled`, `_outlined_filled`, `_rounded_filled`, and `_sharp_filled`.</p> Suffix will take precedence over `icon-variant` property. </div> |
| icon-flip    | `String`  |  | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. <BsBadge color="info">v2.0.0</BsBadge> |
| icon-rotation | `Number` |  | Rotate the icon, valid values are: `90`, `180`, `270`. <BsBadge color="info">v2.0.0</BsBadge> |
| icon-pulse   | `Boolean` | `false` | Apply **_pulse_** animation to the icon. <BsBadge color="info">v2.0.0</BsBadge> |
| icon-spin    | `Boolean` | `false` | Apply **_spin_** animation to the icon. <BsBadge color="info">v2.0.0</BsBadge> | 
| icon-variant  | `String`  | `'outlined'` | Use predefined icon style variant. Valid values are: `outlined`, `rounded`, `sharp`, `filled`, `outlined_filled`, `rounded_filled`, and `sharp_filled`. <BsBadge color="info">v2.1.0</BsBadge> |
| id           | `String`  |  | The Tab `ID` attribute. This property value is auto generates. |
| label        | `String`  |  | The Tab label. |
| location    | `RouteLocationAsRelativeGeneric` |  | The navigation location target. <BsBadge color="info">v2.0.11</BsBadge> <br /> <br /> The value must be an object that satisfies the `to` property of the `<RouterLink>` component. <br /> <br /> This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information. |
| path        | `String`  |  | The route path for the navigation target. <br /> <br /> This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information. |
| path-name   | `String`  |  | The path name for the navigation target. <BsBadge color="info">v2.0.11</BsBadge> <br /> <br /> This is a shortcut to create a `<RouterLink>` inside the component. See [vue-router](https://router.vuejs.org/) for more information. |
| path         | `String`  |  | `<router-link>` property, the route path for the navigation target. See [vue-router](https://router.vuejs.org/) for more information. |
| url          | `String`  |  | Absolute or relative URL for the navigation target, if doesn't use [vue-router](https://router.vuejs.org/). |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-tab-item">
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
</script>