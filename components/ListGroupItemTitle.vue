<script setup lang="ts">
defineProps<{ title: string; tag?: string; badge?: string; badgeColor?: string }>();
</script>

<template>
  <component :is="tag ?? 'h5'">
    <span>{{ title }}</span>
    <BsBadge
      v-if="badge"
      :color="badgeColor ?? 'info'"
      class="ms-2"
      style="--bs-badge-font-size: 0.7rem"
    >
      {{ badge }}
    </BsBadge>
  </component>
</template>
