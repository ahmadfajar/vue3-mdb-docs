<script setup lang="ts">
import sdk from '@stackblitz/sdk';
import { computed, ref, type Prop } from 'vue';
import { Helper } from 'vue-mdbootstrap';

declare type TStackBlitzProps = {
  html: string;
  headers?: string[];
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

const stackblitzOpts = props.stackblitz;
const sourceVisible = ref(false);
const tooltipText = computed(() => (sourceVisible.value ? 'Hide code' : 'View code'));
const cdnBaseUri = 'https://cdn.jsdelivr.net/npm/';
const unPkgcom = 'https://unpkg.com/';

function openStackBlitz() {
  if (!stackblitzOpts) {
    return;
  }

  let headers = [
    `<link href="${cdnBaseUri}bootstrap@5.2.3/dist/css/bootstrap.min.css"` +
      ' rel="stylesheet" crossorigin="anonymous"/>',
    `<link href="${unPkgcom}vue-mdbootstrap@2/dist/bundle.min.css"` +
      ' rel="stylesheet" crossorigin="anonymous">',
    `<link href="${unPkgcom}vue-mdbootstrap@2/dist/bundle-color.min.css"` +
      ' rel="stylesheet" crossorigin="anonymous">',
    '<scr' +
      `ipt src="${cdnBaseUri}vue@3/dist/vue.global.prod.js"` +
      ' crossorigin="anonymous"></scr' +
      'ipt>',
    '<scr' +
      `ipt src="${unPkgcom}vue-mdbootstrap@2/dist/vue-mdb.umd.min.js"` +
      ' crossorigin="anonymous"></scr' +
      'ipt>'
  ];

  if (stackblitzOpts.headers) {
    headers = headers.concat(stackblitzOpts.headers);
  }

  let jscript: string | undefined;
  // const importVue = 'const { computed, onMounted, ref, shallowRef, watch } = Vue;\n';
  const importVMdb = 'const { createVueMdb } = VueMdb;\n';
  const createVApp = 'const app = createVueMdb();\n';
  const mountVApp = 'app.mount("#app");\n';

  if (Helper.isEmpty(stackblitzOpts.script)) {
    jscript = importVMdb + createVApp + mountVApp;
  } else {
    jscript = stackblitzOpts.script;
  }

  const content = stackblitzOpts.html ?? '';
  const defStyles = '.my-demo-wrapper { width: 100%; padding: 1rem; }\n' + 
  '.mobi-card { max-width: 400px; }\n' +
  '.mobi-card > .card > .md-appbar {\n' + 
  '  border-top-left-radius: var(--bs-card-inner-border-radius);\n' + 
  '  border-top-right-radius: var(--bs-card-inner-border-radius);\n}';

  sdk.openProject(
    {
      title: stackblitzOpts.title || 'Vue MDBootstrap example',
      description: stackblitzOpts.description || 'Vue MDBootstrap example project',
      template: 'html',
      files: {
        'index.html':
          headers.join('\n') +
          '\n<style>\n' +
          (stackblitzOpts.style || defStyles) +
          '\n</style>\n\n' +
          '<div id="app">\n' +
          content +
          '\n</div>\n\n<scr' +
          'ipt>\n' +
          jscript +
          '</scr' +
          'ipt>\n'
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
}
</script>

<template>
  <div class="doc-example-container">
    <div class="doc-toolbar">
      <div class="d-flex justify-content-end">
        <div class="toolbar-item">
          <ClientOnly>
            <BsTooltip v-if="stackblitz" content="Run on StackBlitz" placement="top">
              <BsButton icon="electric_bolt" color="secondary" mode="icon" flat @click="openStackBlitz()" />
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
    <div class="doc-block-content">
      <ClientOnly v-if="clientOnly">
        <slot name="content" />
      </ClientOnly>
      <slot v-else name="content" />
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --doc-example-border-color: var(--bs-gray-400); // #cbcbcb;
  --doc-example-border-radius: calc(var(--bs-border-radius) + 2px);
  --doc-example-toolbar-bg: var(--bs-gray-100);   // #f6f5f5;
  --doc-example-content-bg: var(--bs-gray-200);   // #dfdfdf;
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
    padding: 0.375rem 1rem;

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
    padding: 1.5rem;

    .md-side-drawer {
      .nav {
        a {
          text-decoration: none;
        }
      }
    }

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

.dark {
  .doc-example-container {
    > .doc-toolbar {
      .btn-flat-secondary {
        --bs-btn-hover-color: #a5a7a9;
      }
    }
  }
}
</style>
