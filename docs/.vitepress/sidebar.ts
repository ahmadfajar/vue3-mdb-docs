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
      {
        text: 'Animations',
        collapsed: true,
        items: [
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
          { text: 'App', link: '/components/container/container' },
          { text: 'Appbar', link: '/components/container/appbar' },
          { text: 'Card', link: '/components/container/card' },
          { text: 'Side Drawer', link: '/components/container/side-drawer' },
        ]
      },
      {
        text: 'Elements',
        collapsed: true,
        items: [
          { text: 'Alert', link: '/components/elements/alert' },
          { text: 'Avatar', link: '/components/elements/avatar' },
          { text: 'Badge', link: '/components/elements/badge' },
          { text: 'Breadcrumb', link: '/components/elements/breadcrumb' },
          { text: 'Divider', link: '/components/elements/divider' },
          { text: 'Dropdown Menu', link: '/components/elements/dropdown-menu' },
          { text: 'Image Placeholder', link: '/components/elements/image-holder' },
          { text: 'List Tile', link: '/components/elements/list-tile' },
          { text: 'Subheader', link: '/components/elements/subheader' },
        ]
      },
      {
        text: 'Icons',
        collapsed: true,
        items: [
          { text: 'Icon', link: '/components/icons/icon' },
          { text: 'Icon Font Awesome', link: '/components/icons/icon-fontawesome' },
          { text: 'Icon Spinner', link: '/components/icons/icon-spinner' },
          { text: 'Icon SVG', link: '/components/icons/icon-svg' },
          { text: 'Toggle Icon', link: '/components/icons/toggle-icon' }
        ]
      },
      {
        text: 'Input Controls',
        collapsed: true,
        items: [
          { text: 'Checkbox', link: '/components/inputs/checkbox' },
          { text: 'Radio Button', link: '/components/inputs/radio' },
          { text: 'Switch', link: '/components/inputs/switch' },
          { text: 'Text Field', link: '/components/inputs/textfield' },
          { text: 'TextArea Field', link: '/components/inputs/textarea' },
          { text: 'Numeric Field', link: '/components/inputs/numeric-field' },
          { text: 'Chip Field', link: '/components/inputs/chipfield' },
          { text: 'Combobox', link: '/components/inputs/combobox' },
          { text: 'Listbox', link: '/components/inputs/listbox' },
          { text: 'DateTime Field', link: '/components/inputs/datetime-field' },
          { text: 'Toggle Field', link: '/components/inputs/toggle-field' },
          { text: 'Search Field', link: '/components/inputs/search-field' },
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
        text: 'Overlays',
        collapsed: true,
        items: [
          { text: 'Lightbox', link: '/components/overlays/lightbox' },
          { text: 'Mask Loader', link: '/components/overlays/mask-loader' },
          { text: 'Modal', link: '/components/overlays/modal' },
          { text: 'Notification', link: '/components/overlays/notification' },
          { text: 'Overlay', link: '/components/overlays/overlay' },
          { text: 'Popover', link: '/components/overlays/popover' },
          { text: 'Tooltip', link: '/components/overlays/tooltip' },
        ]
      },
      { text: 'Pickers', 
        collapsed: true,
        items: [
          { text: 'Color Picker', link: '/components/pickers/color-picker' },
          { text: 'Date Picker', link: '/components/pickers/date-picker' },
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
    ]
  },
  {
    text: 'Reference',
    collapsed: true,
    items: [
      { text: 'Global API', link: '/reference/global-api' },
      { 
        text: 'Utility Classes', 
        collapsed: true,
        items: [
          { text: 'Color', link: '/reference/color-class' },
          { text: 'Helper', link: '/reference/helper-class' },
          { text: 'StringHelper', link: '/reference/stringhelper-class' },
          { text: 'PopupManager', link: '/reference/popupmanager-class' },
        ]
      },
      { text: 'Color Variants', link: '/reference/color-variants' },
      { text: 'Shadows', link: '/reference/shadows' }
    ]
  }
];
