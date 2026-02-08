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
      link: /getting-started/installation
    - theme: alt
      text: Why Vue MDBootstrap?
      link: /about
    - theme: alt
      text: View on GitHub
      link: https://github.com/ahmadfajar/vue-mdbootstrap

features:
  - title: Reusable
    details: Use any component with few lines of code and with great customization and very easy to use and understand.
  - title: Responsive
    details: 'Supports <span class="font-weight-bold">Bootstrap</span> and <span class="font-weight-bold">TailwindCSS</span>, which can help build responsive and mobile-friendly apps faster.'
  - title: Material Design
    details: 'Well-crafted UI components and built according to the <a href="https://m3.material.io/" target="_blank">Google Material Design 3</a> specifications.'
  - title: Ton of Components
    details: 'It has more than 80 components that can be used to meet your needs and have consistent styles.'
  - title: Dark Mode
    details: 'Components are designed to support both light and dark version. Also comes with a tool that can help generate new theme easily.'
  - title: Fully Typed
    details: 'Provided components are all typed to help developers with auto-completion and potential errors.'
---


<div class="sponsors flex justify-center">
<div class="sponsor-button">
<BsButton color="warning" size="lg" href="https://github.com/sponsors/ahmadfajar" target="__blank" outlined>
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
