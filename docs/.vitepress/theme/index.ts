import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import * as _plugins from 'vue-mdbootstrap';
import DocBlockExample from '../../../components/DocBlockExample.vue';
import ColorPalette from '../../../components/ColorPalette.vue';
import SmallNote from '../../../components/SmallNote.vue';
import CatalogComponents from '../../../components/CatalogComponents.vue';
import CatalogReferences from '../../../components/CatalogReferences.vue';

import './bootstrap.css';
import './main.scss';
import './styles-block.scss';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app
      .component('DocBlockExample', DocBlockExample)
      .component('ColorPalette', ColorPalette)
      .component('SmallNote', SmallNote)
      .component('CatalogComponents', CatalogComponents)
      .component('CatalogReferences', CatalogReferences);

    for (const key of Object.keys(_plugins)) {
      if (key.startsWith('Bs') && key.endsWith('Plugin')) {
        // @ts-ignore
        app.use(_plugins[key]);
      }
    }
  }
} satisfies Theme;
