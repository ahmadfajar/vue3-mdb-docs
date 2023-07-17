import container from 'markdown-it-container';
import Utils from 'markdown-it/lib/common/utils';
import type Token from 'markdown-it/lib/token';
import fs from 'node:fs';
import { defineConfig } from 'vitepress';
import { headMeta } from './headers';
import { removeElement, stripTag } from './helpers';
import { sidebar } from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue MDBootstrap',
  description: 'Vue.js UI Component Library',
  // cleanUrls: true,
  // appearance: false,
  head: headMeta,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/components/', activeMatch: '/components/' },
      { text: 'Reference', link: '/reference/', activeMatch: '/reference/' }
    ],
    sidebar: sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/ahmadfajar/vue-mdbootstrap' }],
    footer: {
      message: 'Released under the BSD-3-Clause License.',
      copyright: 'Copyright © 2020-present • Ahmad Fajar'
    }
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
        }
      });
      md.use(container, 'BlockVue', {
        render: (tokens: Token[], idx: number) => {
          const token = tokens[idx];
          // console.info(token);

          if (token.nesting === 1) {
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
                  description = 'Vue MDBootstrap - ' + title + ' Project';
                }
                if (attr[0] === 'clientOnly') {
                  clientOnly = true;
                }
                if (attr[0] === 'file') {
                  jscript = fs.readFileSync(attr[1], {encoding: 'utf8'});
                }
              });
            }

            let resultHtml = removeElement(content, ['script', 'style']);
            resultHtml = stripTag(resultHtml, 'template');
            // console.info('result:', resultHtml);

            // let jscript = removeElement(content, ['template', 'style']);
            // jscript = stripTag(jscript, 'script');

            let styles = removeElement(content, ['template', 'script']);
            styles = stripTag(styles, 'style');

            const stackblitz = {
              html: resultHtml,
              script: jscript !== resultHtml ? jscript : undefined,
              style: styles !== resultHtml ? styles : undefined,
              title: title,
              description: description
            };
            // console.info('blitz:', stackblitz);
            const stackblitzOpts = Utils.escapeHtml(JSON.stringify(stackblitz));

            let openTag = '<doc-block-example';
            if (stackblitzOpts && stackblitzOpts !== '') {
              openTag += ' :stackblitz="' + stackblitzOpts + '"';
            }
            if (clientOnly) {
              openTag += ' client-only';
            }

            openTag += '>\n';
            // console.info('openTag:', openTag);
            const template = '  <template v-slot:content>' + resultHtml + '</template>\n';

            return openTag + template;
          } else {
            return '</doc-block-example>\n';
          }
        }
      });
    }
  }
});
