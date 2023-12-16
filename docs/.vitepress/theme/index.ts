import 'bootstrap/dist/css/bootstrap.css';
// import './myBootstrap.scss';

import Theme from 'vitepress/theme';
// import { h } from 'vue';
import { type App } from 'vue';
import * as _plugins from 'vue-mdbootstrap';
import 'vue-mdbootstrap/styles';
import DocBlockExample from '../../../components/DocBlockExample.vue';
import ColorPalette from '../../../components/ColorPalette.vue';
import SmallNote from '../../../components/SmallNote.vue';
import './style.scss';

export default {
  extends: Theme,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   });
  // },
  enhanceApp({ app, router, siteData }) {
    (app as App)
      .component('DocBlockExample', DocBlockExample)
      .component('ColorPalette', ColorPalette)
      .component('SmallNote', SmallNote);
    
    for (const key of Object.keys(_plugins)) {
      if (key.startsWith('Bs') && key.endsWith('Plugin')) {
        app.use(_plugins[key]);
      }
    }
  }
};
