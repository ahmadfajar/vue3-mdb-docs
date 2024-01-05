import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import * as _plugins from 'vue-mdbootstrap';
import DocBlockExample from '../../../components/DocBlockExample.vue';
import ColorPalette from '../../../components/ColorPalette.vue';
import SmallNote from '../../../components/SmallNote.vue';
import './_types.scss';
import './_style.scss';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app
      .component('DocBlockExample', DocBlockExample)
      .component('ColorPalette', ColorPalette)
      .component('SmallNote', SmallNote);

    for (const key of Object.keys(_plugins)) {
      if (key.startsWith('Bs') && key.endsWith('Plugin')) {
        app.use(_plugins[key]);
      }
    }
  }
} satisfies Theme;
