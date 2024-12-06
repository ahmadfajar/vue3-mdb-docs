<script setup lang="ts">
defineProps<{ href?: string }>();
</script>

<template>
  <a v-if="href" :href="href" class="list-group-item list-group-item-action">
    <slot />
  </a>
  <div v-else class="list-group-item">
    <slot />
  </div>
</template>
