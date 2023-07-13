---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

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

<script setup>
import { onBeforeMount } from 'vue';
import { useData } from 'vitepress'

onBeforeMount(() => {
  const { site, isDark } = useData();
  site.value.appearance = false;
  isDark.value = true;
  // localStorage.setItem('vitepress-theme-appearance', 'dark');
  document.documentElement.classList.add('dark');
});
</script>
