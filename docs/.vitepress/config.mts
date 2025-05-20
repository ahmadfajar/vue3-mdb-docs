import { CheerioAPI, load } from 'cheerio';
import container from 'markdown-it-container';
import * as Utils from 'markdown-it/lib/common/utils.mjs';
import type Token from 'markdown-it/lib/token.mjs';
import fs from 'node:fs';
import { defineConfig } from 'vitepress';
import { headMeta } from './headers';
import { sidebar } from './sidebar';

const cdnBaseUri = 'https://cdn.jsdelivr.net/npm/';

declare type TParseResult = {
  doc: CheerioAPI;
  html: string;
  title?: string;
  description?: string;
  jscript?: string;
  styles?: string | null;
  clientOnly?: boolean;
};

function parseToken(tokens: Token[], idx: number): TParseResult {
  const token = tokens[idx];

  let title: string | undefined,
    description: string | undefined,
    clientOnly: boolean | undefined,
    jscript: string | undefined;

  const content = tokens[idx + 1].content.trim();
  const attrs = token.attrs;

  if (Array.isArray(attrs)) {
    attrs.forEach((attr) => {
      if (attr[0] === 'title') {
        title = attr[1];
        description = 'Vue MDBootstrap - ' + title;
      }
      if (attr[0] === 'clientOnly') {
        clientOnly = true;
      }
      if (attr[0] === 'file') {
        jscript = fs.readFileSync(attr[1], { encoding: 'utf8' });
      }
    });
  }

  const doc = load(content);
  const resultHtml = doc('template').html()?.trim() || content;
  const styles = doc('style').html();

  return {
    title,
    description,
    doc,
    jscript,
    html: resultHtml,
    styles,
    clientOnly,
  };
}

function makeStackblitzOpts(params: TParseResult) {
  const stackblitz = {
    html: params.html.replaceAll('="/img', '="https://ahmadfajar.github.io/img'),
    script: params.jscript,
    style: params.styles?.trim(),
    title: params.title,
    description: params.description,
  };

  return Utils.escapeHtml(JSON.stringify(stackblitz));
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue MDBootstrap',
  description: 'Bootstrap 5 Material Design Components for Vue.js 3 - Vue.js UI Component Library',
  // base: '/vuemdb-doc/',
  // appearance: false,
  cleanUrls: true,
  head: headMeta,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/components/', activeMatch: '/components/' },
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
      md.use(container, 'lead');
      md.use(container, 'BlockHtml', {
        render: (tokens: Token[], idx: number) => {
          const token = tokens[idx];

          if (token.nesting === 1) {
            const content = tokens[idx + 1].content.trim();
            const openTag = '<doc-block-example>\n';
            const template = '  <template v-slot:content>' + content + '</template>\n';

            return openTag + template;
          } else {
            return '</doc-block-example>\n';
          }
        },
      });
      md.use(container, 'BlockVue', {
        render: (tokens: Token[], idx: number) => {
          const token = tokens[idx];

          if (token.nesting === 1) {
            const result = parseToken(tokens, idx);
            const stackblitzOpts = makeStackblitzOpts(result);

            let openTag = '<doc-block-example';
            if (stackblitzOpts && stackblitzOpts !== '') {
              openTag += ' :stackblitz="' + stackblitzOpts + '"';
            }
            if (result.clientOnly) {
              openTag += ' client-only';
            }

            openTag += '>\n';
            const template = '  <template v-slot:content>' + result.html + '</template>\n';

            return openTag + template;
          } else {
            return '</doc-block-example>\n';
          }
        },
      });
      md.use(container, 'BlockVuelidate', {
        render: (tokens: Token[], idx: number) => {
          const token = tokens[idx];

          if (token.nesting === 1) {
            const result = parseToken(tokens, idx);
            const headers = [
              '<scr' +
                `ipt src="${cdnBaseUri}vue-demi"` +
                ' crossorigin="anonymous"></scr' +
                'ipt>',
              '<scr' +
                `ipt src="${cdnBaseUri}@vuelidate/core"` +
                ' crossorigin="anonymous"></scr' +
                'ipt>',
              '<scr' +
                `ipt src="${cdnBaseUri}@vuelidate/validators"` +
                ' crossorigin="anonymous"></scr' +
                'ipt>',
            ];

            const stackblitz = {
              html: result.html.replaceAll('="/img', '="https://ahmadfajar.github.io/img'),
              headers: headers,
              script: result.jscript,
              style: result.styles?.trim(),
              title: result.title,
              description: result.description,
            };
            const stackblitzOpts = Utils.escapeHtml(JSON.stringify(stackblitz));

            let openTag = '<doc-block-example';
            if (stackblitzOpts && stackblitzOpts !== '') {
              openTag += ' :stackblitz="' + stackblitzOpts + '"';
            }
            if (result.clientOnly) {
              openTag += ' client-only';
            }

            openTag += '>\n';
            const template = '  <template v-slot:content>' + result.html + '</template>\n';

            return openTag + template;
          } else {
            return '</doc-block-example>\n';
          }
        },
      });
      md.use(container, 'BlockVueToast', {
        render: (tokens: Token[], idx: number) => {
          const token = tokens[idx];

          if (token.nesting === 1) {
            const result = parseToken(tokens, idx);
            const stackblitzOpts = makeStackblitzOpts(result);

            let openTag = '<doc-block-example';
            if (stackblitzOpts && stackblitzOpts !== '') {
              openTag += ' :stackblitz="' + stackblitzOpts + '"';
            }
            if (result.clientOnly) {
              openTag += ' client-only';
            }

            openTag += '>\n';
            // result.doc('bs-notification').remove();
            // const html = result.doc('template').html()?.trim() || result.doc().toString();
            const html = result.html.replace('<bs-notification></bs-notification>', '');
            const template = '  <template v-slot:content>' + html + '</template>\n';

            return openTag + template;
          } else {
            return '</doc-block-example>\n';
          }
        },
      });
    },
  },
});
