<script lang="ts">
import { defineComponent, type Prop } from 'vue';
import { fullColors, useFullColorClasses, useFullColorName } from './fullColors';
import {
  grayColors,
  materialColors,
  themeColors,
  useBootstrapColorClasses,
  useGrayColorClasses,
  useMaterialColorInfo
} from './themeColors';

declare type TPalette = 'bootstrap' | 'material' | 'grays' | 'fullColor';

export default defineComponent({
  name: 'ColorPalette',
  props: {
    palette: {
      type: String,
      default: undefined
    } as Prop<TPalette>
  },
  setup() {
    return {
      materialColors,
      themeColors,
      grayColors,
      fullColors,
      useBootstrapColorClasses,
      useGrayColorClasses,
      useMaterialColorInfo,
      useFullColorClasses,
      useFullColorName
    };
  }
});
</script>

<template>
  <div class="docs-color-table">
    <div v-if="palette === 'bootstrap'" class="row row-cols-1 row-cols-sm-2">
      <div v-for="(value, key) in themeColors" :key="key" class="col mb-4">
        <div :class="useBootstrapColorClasses(key)" class="d-flex p-3 md-shadow-1">
          <span class="flex-grow-1">{{ key }}</span>
          <span class="opacity-50 small">{{ value.toUpperCase() }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="palette === 'grays'" class="row row-cols-1 row-cols-sm-2">
      <div class="col">
        <div class="md-shadow">
          <div
            v-for="(value, key) in grayColors"
            :key="key"
            :class="useGrayColorClasses(key)"
            class="p-3 d-flex"
          >
            <span class="flex-grow-1">grey-{{ key }}</span>
            <span class="opacity-50 small">{{ value.toUpperCase() }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="palette === 'fullColor'" class="row row-cols-1 row-cols-sm-2">
      <div v-for="(items, key) in fullColors" :key="key" class="col mb-4">
        <div class="md-shadow">
          <div
            v-for="(value, prop) in items"
            :key="key + prop"
            :class="useFullColorClasses(key, prop)"
            class="p-3 d-flex"
          >
            <span class="flex-grow-1">{{ useFullColorName(key, prop) }}</span>
            <span class="opacity-50 small">{{ value.toUpperCase() }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="palette === 'material'" class="row row-cols-1 row-cols-sm-2">
      <div v-for="(item, key) in materialColors" :key="key" class="col mb-4">
        <div class="md-shadow-1">
          <div :class="['bg-' + useMaterialColorInfo(item)[0].color, 'doc-color-item text-white']">
            <div>{{ useMaterialColorInfo(item)[0].color }}</div>
            <div class="opacity-50 small">
              {{ useMaterialColorInfo(item)[0].value.toUpperCase() }}
            </div>
          </div>
          <div :class="['bg-' + useMaterialColorInfo(item)[1].color, 'doc-color-item text-white']">
            <div>{{ useMaterialColorInfo(item)[1].color }}</div>
            <div class="opacity-50 small">
              {{ useMaterialColorInfo(item)[1].value.toUpperCase() }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.doc-color-item {
  padding: 1.5rem;
  text-align: center;
}
</style>
