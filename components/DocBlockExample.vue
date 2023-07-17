<script setup lang="ts">
import sdk from '@stackblitz/sdk';
import { computed, ref, type Prop } from 'vue';
import { Helper } from 'vue-mdbootstrap';

declare type TStackBlitzProps = {
  html: string;
  script?: string;
  style?: string;
  title: string;
  description?: string;
};

const props = defineProps({
  clientOnly: Boolean,
  stackblitz: {
    type: Object,
    default: undefined
  } as Prop<TStackBlitzProps>
});

const stackblitzOpts = ref(props.stackblitz);
const sourceVisible = ref(false);
const tooltipText = computed(() => (sourceVisible.value ? 'Hide code' : 'View code'));
const cdnBaseUri = 'https://cdn.jsdelivr.net/npm/';

const openStackBlitz = () => {
  if (!stackblitzOpts) {
    return;
  }

  const headers = [
    `<link href="${cdnBaseUri}bootstrap@5.2.3/dist/css/bootstrap.min.css"` +
      'rel="stylesheet" crossorigin="anonymous"/>',
    `<link href="${cdnBaseUri}vue-mdbootstrap@2/dist/bundle.min.css"` +
      ' rel="stylesheet" crossorigin="anonymous">',
    '<scr' +
      `ipt src="${cdnBaseUri}vue@3/dist/vue.global.prod.js"` +
      ' crossorigin="anonymous"></scr' +
      'ipt>',
    '<scr' +
      `ipt src="${cdnBaseUri}vue-mdbootstrap@2/dist/vue-mdb.umd.min.js"` +
      ' crossorigin="anonymous"></scr' +
      'ipt>\n'
  ];

  let jscript: string | undefined;
  // const importVue = 'const { computed, onMounted, ref, shallowRef, watch } = Vue;\n';
  const importVMdb = 'const { createVueMdb } = VueMdb;\n';
  const createVApp = 'const app = createVueMdb();\n';
  const mountVApp = 'app.mount("#app");\n';

  if (Helper.isEmpty(stackblitzOpts.value?.script)) {
    jscript = importVMdb + createVApp + mountVApp;
  } else {
    jscript = stackblitzOpts.value?.script;
  }

  const content = stackblitzOpts.value?.html ?? '';

  sdk.openProject(
    {
      title: stackblitzOpts.value?.title ?? 'Vue MDBootstrap example',
      description: stackblitzOpts.value?.description ?? 'Vue MDBootstrap example project',
      template: 'html',
      files: {
        'index.html':
          headers.join('\n') +
          '<div id="app">\n' +
          content +
          '\n</div>\n<scr' +
          'ipt>\n' +
          jscript +
          '</scr' +
          'ipt>\n',
        'style.css':
          stackblitzOpts.value?.style ?? '.my-demo-wrapper { width: 100%; padding: 1rem; }'
      },
      settings: {
        compile: {
          trigger: 'auto',
          clearConsole: false
        }
      }
    },
    {
      newWindow: true,
      openFile: 'index.html'
    }
  );
};
</script>

<template>
  <div class="doc-example-container">
    <div class="doc-toolbar">
      <div class="d-flex justify-content-end">
        <div class="toolbar-item">
          <ClientOnly>
            <BsTooltip v-if="stackblitz" content="Run on StackBlitz" placement="top">
              <BsButton icon="bolt" color="secondary" mode="icon" flat @click="openStackBlitz()" />
            </BsTooltip>
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
    <div v-if="clientOnly" class="doc-block-content">
      <slot name="content" />
    </div>
    <div v-else class="doc-block-content">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --doc-example-border-color: var(--bs-gray-400); // #cbcbcb;
  --doc-example-border-radius: calc(var(--bs-border-radius) + 2px);
  --doc-example-toolbar-bg: var(--bs-gray-100); // #f6f5f5;
  --doc-example-content-bg: var(--bs-gray-200); // #dfdfdf;
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
