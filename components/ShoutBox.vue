<script setup lang="ts">
import sdk from '@stackblitz/sdk';
import { computed, ref } from 'vue';
import { Helper } from 'vue-mdbootstrap';

declare type TStackBlitzProps = {
  title: string;
  description?: string;
  content?: string;
  headers?: string[];
  script?: string;
  style?: string;
};

const props = defineProps<{
  clientOnly?: boolean;
  stackblitz?: TStackBlitzProps;
}>();

const sourceVisible = ref(false);
const sourceTooltip = computed(() =>
  sourceVisible.value ? 'Hide source code' : 'View source code'
);
const cdnBaseUri = 'https://cdn.jsdelivr.net/npm/';
const unpkgBaseUri = 'https://unpkg.com/';
const jsTag = 'script';

const tplStyles = [
  '.demo-wrapper { padding: 1rem; }',
  '.mobi-card { max-width: 420px; }',
  '.md-card > .md-appbar {\n' +
    '  border-top-left-radius: inherit;\n' +
    '  border-top-right-radius: inherit;\n}',
];
const tplHeaders = [
  `<link href="${cdnBaseUri}bootstrap@5/dist/css/bootstrap.min.css"` +
    ' rel="stylesheet" crossorigin="anonymous" />',
  `<link href="${unpkgBaseUri}vue-mdbootstrap@2/dist/bundle-core.min.css"` +
    ' rel="stylesheet" crossorigin="anonymous" />',
  `<link href="${unpkgBaseUri}vue-mdbootstrap@2/dist/theme-light.min.css"` +
    ' rel="stylesheet" crossorigin="anonymous" />',
  `<link href="${unpkgBaseUri}vue-mdbootstrap@2/dist/decorator-colors.min.css"` +
    ' rel="stylesheet" crossorigin="anonymous" />',
  `<${jsTag} src="${cdnBaseUri}vue@3/dist/vue.global.prod.js" crossorigin="anonymous"></${jsTag}>`,
  `<${jsTag} src="${unpkgBaseUri}vue-mdbootstrap@2/dist/vue-mdb.umd.min.js" crossorigin="anonymous"></${jsTag}>`,
];

function openStackBlitz() {
  if (!props.stackblitz) {
    return;
  }

  let headers = tplHeaders;
  if (props.stackblitz.headers) {
    headers = headers.concat(props.stackblitz.headers);
  }

  let jscript: string | undefined;
  const importVMdb = 'const { createVueMdb } = VueMdb;\n';
  const createVApp = 'const app = createVueMdb();\n';
  const mountVApp = 'app.mount("#app");';

  if (Helper.isEmpty(props.stackblitz.script)) {
    jscript = importVMdb + createVApp + mountVApp;
  } else {
    jscript = props.stackblitz.script;
  }

  const content = props.stackblitz.content ?? '';
  const contentHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${headers.join('\n    ')}
    <title>${props.stackblitz.title}</title>
    <style>
${props.stackblitz.style || tplStyles.join('\n')}
    </style>
  </head>
  <body>
    <div id="app">\n  ${content}\n    </div>
    <${jsTag}>\n${jscript}\n    </${jsTag}>
  </body>
</html>`;

  sdk.openProject(
    {
      title: props.stackblitz.title,
      description:
        props.stackblitz.description ||
        `${props.stackblitz.title} example from Vue MDBootstrap documentation`,
      template: 'html',
      files: {
        'index.html': contentHtml,
      },
      settings: {
        compile: {
          trigger: 'auto',
          clearConsole: false,
        },
      },
    },
    {
      newWindow: true,
      openFile: 'index.html',
    }
  );
}
</script>

<template>
  <div class="shoutbox-container relative">
    <div class="shoutbox-toolbar relative">
      <div class="flex justify-end md-gap-1">
        <ClientOnly>
          <BsTooltip v-if="stackblitz" content="Run on StackBlitz" placement="top">
            <BsButton
              icon="electric_bolt_filled"
              color="secondary"
              mode="icon"
              flat
              @click="openStackBlitz()"
            />
          </BsTooltip>
          <BsTooltip :content="sourceTooltip" placement="top">
            <BsButton
              :active="sourceVisible"
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
    <BsExpandTransition>
      <div v-if="sourceVisible" class="shoutbox-source">
        <slot />
      </div>
    </BsExpandTransition>
    <ClientOnly v-if="clientOnly">
      <div class="shoutbox-content flex justify-center">
        <slot name="content" />
      </div>
    </ClientOnly>
    <div v-else class="shoutbox-content flex justify-center">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
.shoutbox-container {
  border-top: 1px solid var(--shoutbox-border-color);
  border-bottom: 1px solid var(--shoutbox-border-color);
  margin: 1.75rem -1.5rem;

  @media (min-width: 590px) {
    border-radius: var(--shoutbox-border-radius);
    border-left: 1px solid var(--shoutbox-border-color);
    border-right: 1px solid var(--shoutbox-border-color);
    margin: 1.75rem 0;
  }
}

.shoutbox-toolbar {
  background-color: var(--shoutbox-toolbar-bg);
  border-bottom: 1px solid var(--shoutbox-border-color);
  padding: 0.375rem 1rem;

  @media (min-width: 590px) {
    border-top-left-radius: var(--shoutbox-border-radius);
    border-top-right-radius: var(--shoutbox-border-radius);
  }
}

.shoutbox-content {
  background-color: var(--shoutbox-content-bg);
  padding: 1.5rem 1rem;

  .md-side-drawer {
    .nav {
      a {
        text-decoration: none;
      }
    }
  }

  @media (min-width: 590px) {
    border-bottom-left-radius: var(--shoutbox-border-radius);
    border-bottom-right-radius: var(--shoutbox-border-radius);
  }
}
</style>
