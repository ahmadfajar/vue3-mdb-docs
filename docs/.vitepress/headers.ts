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
];
