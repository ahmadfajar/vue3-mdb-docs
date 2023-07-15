// import 'bootstrap/dist/css/bootstrap.css';
import './minBootstrap.scss';

import Theme from 'vitepress/theme';
// import { h } from 'vue';
import { App } from 'vue';
import * as _plugins from 'vue-mdbootstrap';
import 'vue-mdbootstrap/styles';
import DocBlockHtml from '../../../components/DocBlockHtml.vue';
import './style.scss';

export default {
  extends: Theme,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   });
  // },
  enhanceApp({ app, router, siteData }) {
    (app as App).component('DocBlockHtml', DocBlockHtml);
    // console.log(_plugins);
    for (const key of Object.keys(_plugins)) {
      if (key.startsWith('Bs') && key.endsWith('Plugin')) {
        app.use(_plugins[key]);
      }
    }
  }
};
