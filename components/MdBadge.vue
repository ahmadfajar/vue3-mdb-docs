<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{color?: string}>();

const colors = ref(props.color || 'secondary');

if (props.color === 'info') {
  colors.value = 'rgba-light-blue-light text-dark dark:text-light!';
}
</script>

<template>
  <BsBadge :color="colors"><slot /></BsBadge>
</template>
