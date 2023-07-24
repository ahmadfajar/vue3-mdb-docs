# Transition Effects


::: lead
Smooth animations make an UI feel great. Using Vue’s transition system and 
re-usable functional animation, you can easily control the motion of your application. 
**Vue MDBootstrap** has built-in animation transitions that can be applied to 
numerous components and elements.
:::


## Fade

::: BlockVue {title="Fade Transition Example" file="./docs/components/scripts/fade-animation.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100" style="min-height: 200px">
    <bs-button color="indigo" class="mb-3" @click="fadeShow = !fadeShow">
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

::: BlockVue {title="Scale Transition Example" file="./docs/components/scripts/scale-animation.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100" style="min-height: 200px">
    <bs-button color="indigo" class="mb-3" @click="scaleShow = !scaleShow">
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

::: BlockVue {title="Slide Fade Transition Example" file="./docs/components/scripts/slide-animation.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 position-relative overflow-hidden" style="min-height: 200px">
    <bs-button color="indigo" class="mb-3" @click="slideFade = !slideFade">
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

::: BlockVue {title="Slide Fade Reverse Transition Example" file="./docs/components/scripts/slide-reverse-animation.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 position-relative overflow-hidden" style="min-height: 200px">
    <bs-button color="indigo" class="mb-3" @click="slideFadeReverse = !slideFadeReverse">
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

::: BlockVue {title="Slide Left-Right Transition Example" file="./docs/components/scripts/slide-ltr-animation.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 position-relative overflow-hidden" style="min-height: 200px">
    <bs-button color="indigo" class="mb-3" @click="slideLeftRight = !slideLeftRight">
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

::: BlockVue {title="Slide Right-Left Transition Example" file="./docs/components/scripts/slide-rtl-animation.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100 position-relative overflow-hidden" style="min-height: 200px">
    <bs-button color="indigo" class="mb-3" @click="slideRightLeft = !slideRightLeft">
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

::: BlockVue {title="Slide Top-Bottom Transition Example" file="./docs/components/scripts/slide-ttb-animation.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100" style="min-height: 200px">
    <bs-button color="indigo" class="mb-3" @click="slideTopBottom = !slideTopBottom">
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

::: BlockVue {title="Slide Bottom-Top Transition Example" file="./docs/components/scripts/slide-btt-animation.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100" style="min-height: 200px">
    <bs-button color="indigo" class="mb-3" @click="slideBottomTop = !slideBottomTop">
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

::: BlockVue {title="Expand Transition Example" file="./docs/components/scripts/expand-animation.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100" style="min-height: 200px">
    <bs-button color="indigo" class="mb-3" @click="expandTransition = !expandTransition">
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

::: BlockVue {title="Rotate Clock Wise Transition Example" file="./docs/components/scripts/rotate-clock-animation.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100" style="min-height: 200px">
    <bs-button color="indigo" class="mb-3" @click="rotateClockWise = !rotateClockWise">
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

*Available in Vue MDBootstrap since `v2.0.0`*


## Rotate Clock Reverse

::: BlockVue {title="Rotate Clock Reverse Transition Example" file="./docs/components/scripts/rotate-reverse-animation.js"}

```vue
<template>
  <div class="my-demo-wrapper w-100" style="min-height: 200px">
    <bs-button color="indigo" class="mb-3" @click="rotateClockReverse = !rotateClockReverse">
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

*Available in Vue MDBootstrap since `v2.0.0`*


## Roll In-Out

::: BlockVue {title="Roll In-Out Transition Example" file="./docs/components/scripts/roll-in-out-animation.js"}
```vue
<template>
  <div class="my-demo-wrapper w-100" style="min-height: 200px">
    <bs-button color="indigo" class="mb-3" @click="rollInOut = !rollInOut">
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

*Available in Vue MDBootstrap since `v2.0.0`*


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
