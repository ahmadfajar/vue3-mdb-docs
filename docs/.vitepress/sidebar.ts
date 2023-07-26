export const sidebar = [
  {
    text: 'Introduction',
    collapsed: true,
    items: [
      { text: 'About', link: '/about' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Release Notes', link: '/release-notes' },
      // { text: 'Markdown Examples', link: '/markdown-examples' }
    ]
  },
  {
    text: 'Components',
    collapsed: true,
    items: [
      { text: 'Alert', link: '/components/alert' },
      {
        text: 'Animations',
        items: [
          {
            text: 'Mask Loader',
            link: '/components/mask-loader'
          },
          {
            text: 'Ripple',
            link: '/components/ripple'
          },
          {
            text: 'Transition Effects',
            link: '/components/transition-effect'
          }
        ]
      },
      { text: 'App Container', link: '/components/container' },
      { text: 'Appbar', link: '/components/appbar' },
      { text: 'Avatar', link: '/components/avatar' },
      { text: 'Badge', link: '/components/badge' },
      { text: 'Side Drawer', link: '/components/side-drawer' },
    ]
  },
  {
    text: 'Reference',
    collapsed: true,
    items: [
      { text: 'Color Variants', link: '/reference/color-variants' },
    ]
  }
];
