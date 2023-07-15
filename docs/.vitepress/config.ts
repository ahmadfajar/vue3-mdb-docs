import container from 'markdown-it-container';
import { defineConfig } from 'vitepress';
import { headMeta } from './headers';
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
      { text: 'Components', link: '/components/', activeMatch: '/components/' },
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
        render: (tokens, idx) => {
          const token = tokens[idx];

          if (token.nesting === 1) {
            const content = tokens[idx + 1].content.trim();
            const openTag = '<doc-block-html>\n';
            const html = '  <template v-slot:content>' + content + '</template>\n';

            return openTag + html;
          } else {
            return '</doc-block-html>\n';
          }
        }
      });
    }
  }
});
