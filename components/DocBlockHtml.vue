<script setup>
import { computed, ref } from 'vue';

const sourceVisible = ref(false);
const tooltipText = computed(() => (sourceVisible.value ? 'Hide source code' : 'Show source code'));
</script>

<template>
  <div class="doc-example-container">
    <div class="doc-toolbar">
      <div class="d-flex justify-content-end">
        <div class="toolbar-item">
          <ClientOnly>
            <BsTooltip :content="tooltipText" placement="top">
              <BsButton
                :icon="sourceVisible ? 'code_off' : 'code'"
                color="secondary"
                mode="icon"
                flat
                @click="sourceVisible = !sourceVisible"
              />
            </BsTooltip>
          </ClientOnly>
        </div>
      </div>
    </div>
    <BsExpandTransition>
      <div v-if="sourceVisible" class="doc-block-code">
        <slot />
      </div>
    </BsExpandTransition>
    <div class="doc-block-content">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --doc-example-border-color: var(--bs-gray-400); // #cbcbcb;
  --doc-example-border-radius: calc(var(--bs-border-radius) + 2px);
  --doc-example-toolbar-bg: var(--bs-gray-100);   // #f6f5f5;
  --doc-example-content-bg: var(--bs-gray-300);   // #dfdfdf;
}

.doc-example-container {
  border-top: 1px solid var(--doc-example-border-color);
  border-bottom: 1px solid var(--doc-example-border-color);
  margin: 1.75rem -1.5rem;
  position: relative;

  > .doc-toolbar {
    background-color: var(--doc-example-toolbar-bg);
    border-bottom: 1px solid var(--doc-example-border-color);
    position: relative;
    padding: 0.25rem 1rem;

    @media (min-width: 590px) {
      border-top-left-radius: var(--doc-example-border-radius);
      border-top-right-radius: var(--doc-example-border-radius);
    }
  }

  > .doc-block-code {
    background-color: var(--vp-code-block-bg);

    > div[class*='language-'] {
      border-radius: 0;
      margin: 0.25rem 0 0;
    }
  }

  > .doc-block-content {
    background-color: var(--doc-example-content-bg);
    display: flex;
    justify-content: center;
    padding: 1.5rem 1rem;

    @media (min-width: 590px) {
      border-bottom-left-radius: var(--doc-example-border-radius);
      border-bottom-right-radius: var(--doc-example-border-radius);
    }
  }

  @media (min-width: 590px) {
    border-radius: var(--doc-example-border-radius);
    border-left: 1px solid var(--doc-example-border-color);
    border-right: 1px solid var(--doc-example-border-color);
    margin: 1.75rem 0;
  }
}
</style>
