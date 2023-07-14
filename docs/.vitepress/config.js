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
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/', activeMatch: '/components/' },
      { text: 'Reference', link: '/reference/', activeMatch: '/reference/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Release Notes', link: '/release-notes' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Alert', link: '/components/alert' },
          { 
            text: 'Animations', 
            items: [{
              text: 'Mask Loader',
              link: '/components/mask-loader',
            }, {
              text: 'Ripple',
              link: '/components/ripple',
            }, {
              text: 'Transition Effects',
              link: '/components/transition-effect',
            }] 
          },
          { text: 'Appbar', link: '/components/appbar' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Color Variants', link: '/reference/color-variants' },
          { text: 'Appbar', link: '/reference/appbar' },
        ]
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/ahmadfajar/vue-mdbootstrap' }],

    footer: {
      message: 'Released under the BSD-3-Clause License.',
      copyright: 'Copyright © 2020-present • Ahmad Fajar'
    }
  }
});
