import container from 'markdown-it-container';
import type Token from 'markdown-it/lib/token.mjs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';
import { headMeta } from './headers';
import { makeStackblitzOpts, parseToken } from './parser';
import { sidebar } from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue MDBootstrap',
  description: 'Material Design UI Component Library for Vue.js 3',
  // base: '/vuemdb-doc/',
  // appearance: false,
  cleanUrls: true,
  head: headMeta,
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/', activeMatch: '/components/' },
      { text: 'Reference', link: '/reference/', activeMatch: '/reference/' },
    ],
    sidebar: sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/ahmadfajar/vue-mdbootstrap' }],
    footer: {
      message: 'Released under the BSD-3-Clause License.',
      copyright: 'Copyright © 2020-present • Ahmad Fajar',
    },
  },
  markdown: {
    config: (md) => {
      const cdnBaseUri = 'https://cdn.jsdelivr.net/npm/';
      const componentTag = 'shout-box';
      const jsTag = 'script';

      md.use(container, 'lead');
      md.use(container, 'BlockHtml', {
        render: (tokens: Token[], idx: number) => {
          const token = tokens[idx]!;

          if (token.nesting === 1) {
            const content = tokens[idx + 1]?.content.trim() || '';
            const openTag = `<${componentTag}>\n`;
            const template = '  <template v-slot:content>' + content + '</template>\n';

            return openTag + template;
          } else {
            return `</${componentTag}>\n`;
          }
        },
      });
      md.use(container, 'BlockVue', {
        render: (tokens: Token[], idx: number) => {
          const token = tokens[idx]!;

          if (token.nesting === 1) {
            const result = parseToken(tokens, idx);
            const stackblitzOpts = makeStackblitzOpts(result);

            let openTag = `<${componentTag}`;
            if (stackblitzOpts && stackblitzOpts !== '') {
              openTag += ' :stackblitz="' + stackblitzOpts + '"';
            }
            if (result.clientOnly) {
              openTag += ' client-only';
            }

            openTag += '>\n';
            const template = '  <template v-slot:content>' + result.content + '</template>\n';

            return openTag + template;
          } else {
            return `</${componentTag}>\n`;
          }
        },
      });
      md.use(container, 'BlockVuelidate', {
        render: (tokens: Token[], idx: number) => {
          const token = tokens[idx]!;

          if (token.nesting === 1) {
            const result = parseToken(tokens, idx);
            const headers = [
              `<${jsTag} src="${cdnBaseUri}vue-demi" crossorigin="anonymous"></${jsTag}>`,
              `<${jsTag} src="${cdnBaseUri}@vuelidate/core" crossorigin="anonymous"></${jsTag}>`,
              `<${jsTag} src="${cdnBaseUri}@vuelidate/validators" crossorigin="anonymous"></${jsTag}>`,
            ];

            result.headers = headers;
            const stackblitzOpts = makeStackblitzOpts(result);

            let openTag = `<${componentTag}`;
            if (stackblitzOpts && stackblitzOpts !== '') {
              openTag += ' :stackblitz="' + stackblitzOpts + '"';
            }
            if (result.clientOnly) {
              openTag += ' client-only';
            }

            openTag += '>\n';
            const template = '  <template v-slot:content>' + result.content + '</template>\n';

            return openTag + template;
          } else {
            return `</${componentTag}>\n`;
          }
        },
      });
      md.use(container, 'BlockVueToast', {
        render: (tokens: Token[], idx: number) => {
          const token = tokens[idx]!;

          if (token.nesting === 1) {
            const result = parseToken(tokens, idx);
            const stackblitzOpts = makeStackblitzOpts(result);

            let openTag = `<${componentTag}`;
            if (stackblitzOpts && stackblitzOpts !== '') {
              openTag += ' :stackblitz="' + stackblitzOpts + '"';
            }
            if (result.clientOnly) {
              openTag += ' client-only';
            }

            openTag += '>\n';
            const html = result.content.replace('<bs-notification></bs-notification>', '');
            const template = '  <template v-slot:content>' + html + '</template>\n';

            return openTag + template;
          } else {
            return `</${componentTag}>\n`;
          }
        },
      });
    },
  },
  vite: {
    resolve: {
      alias: {
        '@cmp': fileURLToPath(new URL('../../components', import.meta.url)),
        '@doc': fileURLToPath(new URL('../../docs', import.meta.url)),
      },
    },
  },
});
