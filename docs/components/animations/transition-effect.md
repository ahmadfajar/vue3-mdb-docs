---
description: A Transition animations effect that will make an UI feel great. 
--- 

# Transition Effects


::: lead
Smooth animations make an UI feel great. Using Vue’s transition system and 
re-usable functional animation, you can easily control the motion of your application. 
**Vue MDBootstrap** has built-in animation transitions that can be applied to 
numerous components and elements.
:::


## Fade

::: BlockVue {title="Transition Effects - Fade" file="./docs/components/animations/js/fade-animation.js"}

```vue
<template>
  <div class="demo-wrapper w-full max-w-full" style="min-height: 200px">
    <bs-button class="mb-3" @click="fadeShow = !fadeShow">
      Click Me
    </bs-button>
    <transition name="fade">
      <bs-card v-if="fadeShow" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <div>{{ loremIpsum }}</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const fadeShow = ref(true);
</script>
```
:::


## Scale

::: BlockVue {title="Transition Effects - Scale" file="./docs/components/animations/js/scale-animation.js"}

```vue
<template>
  <div class="demo-wrapper w-full max-w-full" style="min-height: 200px">
    <bs-button class="mb-3" @click="scaleShow = !scaleShow">
      Click Me
    </bs-button>
    <transition name="scale">
      <bs-card v-if="scaleShow" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <div>{{ loremIpsum }}</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const scaleShow = ref(true);
</script>
```
:::


## Slide Fade

::: BlockVue {title="Transition Effects - Slide Fade" file="./docs/components/animations/js/slide-animation.js"}

```vue
<template>
  <div class="demo-wrapper w-full relative overflow-hidden" style="min-height: 200px">
    <bs-button class="mb-3" @click="slideFade = !slideFade">
      Click Me
    </bs-button>
    <transition name="slide-fade">
      <bs-card v-if="slideFade" class="mx-1" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <div>{{ loremIpsum }}</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const slideFade = ref(true);
</script>
```
:::


## Slide Fade Reverse

::: BlockVue {title="Transition Effects - Slide Fade Reverse" file="./docs/components/animations/js/slide-reverse-animation.js"}

```vue
<template>
  <div class="demo-wrapper w-full relative overflow-hidden" style="min-height: 200px">
    <bs-button class="mb-3" @click="slideFadeReverse = !slideFadeReverse">
      Click Me
    </bs-button>
    <transition name="slide-fade-reverse">
      <bs-card v-if="slideFadeReverse" class="mx-1" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <div>{{ loremIpsum }}</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const slideFadeReverse = ref(true);
</script>
```
:::


## Slide Left-Right

::: BlockVue {title="Transition Effects - Slide Left-Right" file="./docs/components/animations/js/slide-ltr-animation.js"}

```vue
<template>
  <div class="demo-wrapper w-full relative overflow-hidden" style="min-height: 200px">
    <bs-button class="mb-3" @click="slideLeftRight = !slideLeftRight">
      Click Me
    </bs-button>
    <transition name="slide-left-right">
      <bs-card v-if="slideLeftRight" class="mx-1" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <div>{{ loremIpsum }}</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const slideLeftRight = ref(false);
</script>
```
:::


## Slide Right-Left

::: BlockVue {title="Transition Effects - Slide Right-Left" file="./docs/components/animations/js/slide-rtl-animation.js"}

```vue
<template>
  <div class="demo-wrapper w-full relative overflow-hidden" style="min-height: 200px">
    <bs-button class="mb-3" @click="slideRightLeft = !slideRightLeft">
      Click Me
    </bs-button>
    <transition name="slide-right-left">
      <bs-card v-if="slideRightLeft" class="mx-1" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <div>{{ loremIpsum }}</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const slideRightLeft = ref(false);
</script>
```
:::


## Slide Top-Bottom

::: BlockVue {title="Transition Effects - Slide Top-Bottom" file="./docs/components/animations/js/slide-ttb-animation.js"}

```vue
<template>
  <div class="demo-wrapper w-full" style="min-height: 200px">
    <bs-button class="mb-3" @click="slideTopBottom = !slideTopBottom">
      Click Me
    </bs-button>
    <transition name="slide-top-bottom">
      <bs-card v-if="slideTopBottom" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <div>{{ loremIpsum }}</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const slideTopBottom = ref(false);
</script>
```
:::


## Slide Bottom-Top

::: BlockVue {title="Transition Effects - Slide Bottom-Top" file="./docs/components/animations/js/slide-btt-animation.js"}

```vue
<template>
  <div class="demo-wrapper w-full" style="min-height: 200px">
    <bs-button class="mb-3" @click="slideBottomTop = !slideBottomTop">
      Click Me
    </bs-button>
    <transition name="slide-bottom-top">
      <bs-card v-if="slideBottomTop" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <div>{{ loremIpsum }}</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const slideBottomTop = ref(false);
</script>
```
:::


## Expand Transition

::: BlockVue {title="Transition Effects - Expand" file="./docs/components/animations/js/expand-animation.js"}

```vue
<template>
  <div class="demo-wrapper w-full" style="min-height: 200px">
    <bs-button class="mb-3" @click="expandTransition = !expandTransition">
      Click Me
    </bs-button>
    <bs-expand-transition>
      <bs-card v-if="expandTransition" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <div>{{ loremIpsum }}</div>
        </bs-card-body>
      </bs-card>
    </bs-expand-transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const expandTransition = ref(false);
</script>
```
:::


## Rotate Clock Wise

<SmallNote color="teal">Added since v2.0.0</SmallNote>

::: BlockVue {title="Transition Effects - Rotate Clock Wise" file="./docs/components/animations/js/rotate-clock-animation.js"}

```vue
<template>
  <div class="demo-wrapper w-full" style="min-height: 200px">
    <bs-button class="mb-3" @click="rotateClockWise = !rotateClockWise">
      Click Me
    </bs-button>
    <transition name="rotate-clock-wise">
      <bs-card v-if="rotateClockWise" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <div>{{ loremIpsum }}</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const rotateClockWise = ref(false);
</script>
```
:::


## Rotate Clock Reverse

<SmallNote color="teal">Added since v2.0.0</SmallNote>

::: BlockVue {title="Transition Effects - Rotate Clock Reverse Example" file="./docs/components/animations/js/rotate-reverse-animation.js"}

```vue
<template>
  <div class="demo-wrapper w-full" style="min-height: 200px">
    <bs-button class="mb-3" @click="rotateClockReverse = !rotateClockReverse">
      Click Me
    </bs-button>
    <transition name="rotate-clock-reverse">
      <bs-card v-if="rotateClockReverse" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <div>{{ loremIpsum }}</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const rotateClockReverse = ref(false);
</script>
```
:::


## Roll In-Out

<SmallNote color="teal">Added since v2.0.0</SmallNote>

::: BlockVue {title="Transition Effects - Roll In-Out" file="./docs/components/animations/js/roll-in-out-animation.js"}
```vue
<template>
  <div class="demo-wrapper w-full" style="min-height: 200px">
    <bs-button class="mb-3" @click="rollInOut = !rollInOut">
      Click Me
    </bs-button>
    <transition name="roll-in-out">
      <bs-card v-if="rollInOut" shadow>
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <div>{{ loremIpsum }}</div>
        </bs-card-body>
      </bs-card>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const rollInOut = ref(false);
</script>
```
:::


<script setup lang="ts">
import { ref } from 'vue';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';

const fadeShow = ref(true);
const scaleShow = ref(true);
const slideFade = ref(true);
const slideFadeReverse = ref(true);
const slideLeftRight = ref(false);
const slideRightLeft = ref(false);
const slideTopBottom = ref(false);
const slideBottomTop = ref(false);
const expandTransition = ref(false);
const rotateClockWise = ref(false);
const rotateClockReverse = ref(false);
const rollInOut = ref(false);
</script>
