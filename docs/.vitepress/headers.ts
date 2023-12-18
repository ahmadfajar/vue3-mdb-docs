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
  //   'link',
  //   {
  //     rel: "preload stylesheet",
  //     href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
  //     crossorigin: "anonymous"
  //   }
  // ],
  [
    'link',
    {
      rel: "preload stylesheet",
      href: "https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/bundle.min.css",
      crossorigin: "anonymous"
    }
  ],
];
