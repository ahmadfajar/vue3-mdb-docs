import CatalogComponents from '@cmp/CatalogComponents.vue';
import CatalogReferences from '@cmp/CatalogReferences.vue';
import ColorPalette from '@cmp/ColorPalette.vue';
import MdBadge from '@cmp/MdBadge.vue';
import ShoutBox from '@cmp/ShoutBox.vue';
import SmallNote from '@cmp/SmallNote.vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import * as _plugins from 'vue-mdbootstrap';

import './bootstrap.css';
import './decorators.scss';
import './main.scss';
import './doc-api.scss';
import './shoutbox.scss';
// import './styles-block.scss';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app
      .component('ShoutBox', ShoutBox)
      .component('SmallNote', SmallNote)
      .component('MdBadge', MdBadge)
      .component('ColorPalette', ColorPalette)
      .component('CatalogComponents', CatalogComponents)
      .component('CatalogReferences', CatalogReferences);

    for (const key of Object.keys(_plugins)) {
      if (key.startsWith('Bs') && key.endsWith('Plugin')) {
        // @ts-ignore
        app.use(_plugins[key]);
      }
    }
  },
} satisfies Theme;
