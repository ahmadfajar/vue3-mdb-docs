<script setup lang="ts">
import { computed } from 'vue';
import { useMergeClass } from 'vue-mdbootstrap';

const props = defineProps<{color: string}>();

const classes = computed(() => ({
  [`bg-rgba-${props.color}-slight`]: props.color,
  [`border-${props.color}-10`]: props.color,
  [`text-${props.color}`]: props.color
}));
const clazz = 'inline-flex py-1 font-weight-semibold border rounded-3';
</script>

<template>
  <small
    :class="useMergeClass(clazz, classes as never)"
    style="padding-left: 0.75rem; padding-right: 0.75rem;"
  >
    <slot />
  </small>
</template>
