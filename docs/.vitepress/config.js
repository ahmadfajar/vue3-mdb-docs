import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue MDBootstrap',
  description: 'Vue.js UI Component Library',
  // cleanUrls: true,
  // appearance: false,
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content:
          'Vue MDBootstrap, MDBootstrap, Vue Component, Bootstrap Component, Vue, Bootstrap, Material Design'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/img/favicon.png',
        type: 'image/png'
      }
    ]
    // [
    //   'link',
    //   {
    //     rel: "stylesheet",
    //     href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
    //     crossorigin: "anonymous"
    //   }
    // ],
  ],
  themeConfig: {
    logo: '/img/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/', activeMatch: '/components/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About', link: '/markdown-examples' },
          { text: 'Getting Started', link: '/api-examples' },
          { text: 'Release Notes', link: '/release-notes' }
        ]
      },
      {
        text: 'Components',
        items: [{ text: 'Alert', link: '/components/alert' }]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/ahmadfajar/vue-mdbootstrap' }],

    footer: {
      message: 'Released under the BSD-3-Clause License.',
      copyright: 'Copyright © 2020-present • Ahmad Fajar'
    }
  }
});
