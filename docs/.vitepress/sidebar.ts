export const sidebar = [
  {
    text: 'Introduction',
    collapsed: true,
    items: [
      { text: 'About', link: '/about' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Sponsor', link: '/sponsor' },
      { text: 'Release Notes', link: '/release-notes' }
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
        collapsed: true,
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
            text: 'Transition Effect',
            link: '/components/transition-effect'
          }
        ]
      },
      { text: 'Badge', link: '/components/badge' },
      {
        text: 'Buttons',
        collapsed: true,
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Toggle Button', link: '/components/toggle-button' }
        ]
      },
      { text: 'Card', link: '/components/card' },
      {
        text: 'Chips',
        collapsed: true,
        items: [
          { text: 'Chip', link: '/components/chip' },
          { text: 'Chip Group', link: '/components/chip-group' }
        ]
      },
      {
        text: 'Container & Navigation',
        collapsed: true,
        items: [
          { text: 'App Container', link: '/components/container' },
          { text: 'Appbar', link: '/components/appbar' },
          { text: 'List Nav', link: '/components/list-nav' },
          { text: 'Side Drawer', link: '/components/side-drawer' }
        ]
      },
      { text: 'Dropdown Menu', link: '/components/dropdown-menu' },
      {
        text: 'Icons',
        collapsed: true,
        items: [
          { text: 'Icon', link: '/components/icon' },
          { text: 'Icon Spinner', link: '/components/icon-spinner' },
          { text: 'Icon SVG', link: '/components/icon-svg' },
          { text: 'Toggle Icon', link: '/components/toggle-icon' }
        ]
      },
      {
        text: 'Image',
        collapsed: true,
        items: [
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'Image Placeholder', link: '/components/image-holder' },
        ]
      },
      {
        text: 'Input Controls',
        collapsed: true,
        items: [
          { text: 'Text Area', link: '/components/textarea' },
          { text: 'Text Field', link: '/components/textfield' },
        ]
      },
      { text: 'List Tile', link: '/components/list-tile' },
      { text: 'Popover', link: '/components/popover' },
      {
        text: 'Progress Control',
        collapsed: true,
        items: [
          { text: 'Progress', link: '/components/progress' },
          { text: 'Progress Bar', link: '/components/progressbar' },
        ]
      },
      {
        text: 'Miscellaneous',
        collapsed: true,
        items: [
          { text: 'Divider', link: '/components/divider' },
          { text: 'Subheader', link: '/components/subheader' },
        ]
      },
    ]
  },
  {
    text: 'Reference',
    collapsed: true,
    items: [{ text: 'Color Variants', link: '/reference/color-variants' }]
  }
];
