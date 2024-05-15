const { onUnmounted, ref } = Vue;
const { BsStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const listbox7 = ref();
    const productSrc = {
      proxy: new BsStore({
        idProperty: 'ProductID',
        dataProperty: 'data',
        totalProperty: 'total',
        remoteSort: false,
        remoteFilter: false,
        restProxy: {
          browse: 'https://ahmadfajar.github.io/data/product.json',
        },
      }),
      schema: { displayField: 'ProductName', valueField: 'ProductID' },
    };

    onUnmounted(() => {
      productSrc.proxy.destroy();
    });

    return { listbox7, productSrc };
  },
});

app.mount('#app');
