<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  color: String
});
const classes = computed(() => ({
  [`bg-rgba-${props.color}-slight`]: props.color,
  [`border-${props.color}`]: props.color,
  [`text-${props.color}`]: props.color
}));
</script>

<template>
  <small
    :class="classes"
    class="d-inline-flex py-1 md-fw-semibold border border-opacity-10 rounded-3"
    style="padding-left: 0.75rem; padding-right: 0.75rem;"
  >
    <slot />
  </small>
</template>
