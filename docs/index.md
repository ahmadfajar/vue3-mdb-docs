---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
titleTemplate: Vue.js UI Component Library
hero:
  name: Vue MDBootstrap
  text: Vue.js UI Component Library
  tagline: Build beautiful apps with well-crafted UI components and no design skills required.
  image:
    src: /img/logo.png
    alt: Vue MDBootstrap
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/ahmadfajar/vue-mdbootstrap

features:
  - title: Reusable
    details: Use any component with few lines of code and with great customization and very easy to use and understand.
  - title: Responsive
    details: 'Vue MDBootstrap makes use of the <a href="https://getbootstrap.com/" target="_blank">Bootstrap 5</a> css framework to support responsive pages.'
  - title: Material Design
    details: 'Well-crafted UI components and built according to the <a href="https://m3.material.io/" target="_blank">Google Material Design 3</a> specifications.'
---


<div class="sponsors d-flex justify-content-center">
<div class="sponsor-button">
<BsButton color="orange" size="lg" href="https://github.com/sponsors/ahmadfajar" target="__blank" outlined>
Become Our Sponsor
</BsButton>
</div>
</div>

<script setup lang="ts">
import { onBeforeMount, onUnmounted } from 'vue';
import { useData } from 'vitepress'

const { site, isDark } = useData();
site.value.appearance = false;
isDark.value = true;

onBeforeMount(() => {
  // localStorage.setItem('vitepress-theme-appearance', 'dark');
  document.documentElement.classList.add('dark', 'vpdoc-home');
});
onUnmounted(() => {
  document.documentElement.classList.remove('vpdoc-home');
});
</script>
