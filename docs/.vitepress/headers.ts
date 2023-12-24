import { type HeadConfig } from 'vitepress';

export const headMeta: HeadConfig[] = [
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
      href: 'https://ahmadfajar.github.io/img/favicon.png',
      type: 'image/png'
    }
  ],
  // [
  //   'script',
  //   {
  //     async: '',
  //     src: 'https://www.googletagmanager.com/gtag/js?id=G-K3RHJL1XDE',
  //   }
  // ],
  // [
  //   'script',
  //   {},
  //   `window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());
  //   gtag('config', 'G-K3RHJL1XDE');`
  // ],
  // [
  //   'link',
  //   {
  //     rel: "preload stylesheet",
  //     href: "https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/bundle.min.css",
  //     crossorigin: "anonymous"
  //   }
  // ],
  [
    'link',
    {
      rel: "preload stylesheet",
      href: "/assets/bundle.min.css"
    }
  ],
];
