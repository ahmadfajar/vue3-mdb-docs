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
            link: '/components/animations/mask-loader'
          },
          {
            text: 'Ripple',
            link: '/components/animations/ripple'
          },
          {
            text: 'Transition Effect',
            link: '/components/animations/transition-effect'
          }
        ]
      },
      { text: 'Badge', link: '/components/badge' },
      {
        text: 'Buttons',
        collapsed: true,
        items: [
          { text: 'Button', link: '/components/buttons/button' },
          { text: 'Toggle Button', link: '/components/buttons/toggle-button' }
        ]
      },
      
      {
        text: 'Chips',
        collapsed: true,
        items: [
          { text: 'Chip', link: '/components/chips/chip' },
          { text: 'Chip Group', link: '/components/chips/chip-group' }
        ]
      },
      {
        text: 'Container',
        collapsed: true,
        items: [
          { text: 'App Container', link: '/components/container/container' },
          { text: 'Appbar', link: '/components/container/appbar' },
          { text: 'Card', link: '/components/container/card' },
          { text: 'Popover', link: '/components/container/popover' },
          { text: 'Side Drawer', link: '/components/container/side-drawer' },
        ]
      },
      { text: 'Dropdown Menu', link: '/components/dropdown-menu' },
      {
        text: 'Icons',
        collapsed: true,
        items: [
          { text: 'Icon', link: '/components/icons/icon' },
          { text: 'Icon Spinner', link: '/components/icons/icon-spinner' },
          { text: 'Icon SVG', link: '/components/icons/icon-svg' },
          { text: 'Toggle Icon', link: '/components/icons/toggle-icon' }
        ]
      },
      {
        text: 'Image',
        collapsed: true,
        items: [
          { text: 'Avatar', link: '/components/image/avatar' },
          { text: 'Image Placeholder', link: '/components/image/image-holder' },
        ]
      },
      {
        text: 'Input Controls',
        collapsed: true,
        items: [
          { text: 'Checkbox', link: '/components/input/checkbox' },
          { text: 'Radio Button', link: '/components/input/radio' },
          { text: 'Switch', link: '/components/input/switch' },
          { text: 'Listbox', link: '/components/input/listbox' },
          { text: 'Combobox', link: '/components/input/combobox' },
          { text: 'Text Field', link: '/components/input/textfield' },
          { text: 'TextArea Field', link: '/components/input/textarea' },
          { text: 'Numeric Field', link: '/components/input/numeric-field' },
          { text: 'Chip Field', link: '/components/input/chipfield' },
          { text: 'DateTime Field', link: '/components/input/datetime-field' },
        ]
      },
      { text: 'List Tile', link: '/components/list-tile' },
      { text: 'Pickers', 
        collapsed: true,
        items: [
          { text: 'Color Picker', link: '/components/pickers/color-picker' },
          { text: 'Date Picker', link: '/components/pickers/date-picker' },
        ] 
      },
      {
        text: 'Navigation',
        collapsed: true,
        items: [
          { text: 'List Nav', link: '/components/navigation/list-nav' },
          { text: 'Tabs', link: '/components/navigation/tabs' },
        ]
      },
      {
        text: 'Progress Control',
        collapsed: true,
        items: [
          { text: 'Progress', link: '/components/progress-controls/progress' },
          { text: 'Progress Bar', link: '/components/progress-controls/progressbar' },
        ]
      },
      {
        text: 'Miscellaneous',
        collapsed: true,
        items: [
          { text: 'Divider', link: '/components/others/divider' },
          { text: 'Subheader', link: '/components/others/subheader' },
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
