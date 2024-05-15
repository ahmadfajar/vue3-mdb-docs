const { onUnmounted, ref } = Vue;
const { BsStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const category = ref();
    const product = ref();
    const categorySrc = {
      proxy: new BsStore({
        idProperty: 'CategoryID',
        dataProperty: 'data',
        totalProperty: 'total',
        remoteSort: false,
        remoteFilter: false,
        restProxy: {
          browse: 'https://ahmadfajar.github.io/data/categories.json',
        },
      }),
      schema: { displayField: 'CategoryName', valueField: 'CategoryID' },
    };

    const productSrc = {
      proxy: new BsStore({
        idProperty: 'ProductID',
        dataProperty: 'data',
        totalProperty: 'total',
        remoteSort: false,
        remoteFilter: false,
        restProxy: {
          browse: 'https://ahmadfajar.github.io/data/products.json',
        },
      }),
      schema: {
        displayField: 'ProductName',
        valueField: 'ProductID',
        cascadeField: 'CategoryID',
      },
    };

    onUnmounted(() => {
      categorySrc.proxy.destroy();
      productSrc.proxy.destroy();
    });

    return { category, categorySrc, product, productSrc };
  },
});

app.mount('#app');
