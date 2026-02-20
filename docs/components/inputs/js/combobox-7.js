const { onUnmounted, ref } = Vue;
const { BsStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const state4 = ref();
    const statesUS4 = {
      proxy: new BsStore({
        idProperty: 'value',
        dataProperty: 'data',
        totalProperty: 'total',
        remoteSort: false,
        remoteFilter: false,
        filters: [{ property: 'country', value: 'US', operator: 'eq' }],
        restProxy: {
          browse: 'https://ahmadfajar.github.io/data/states.json',
        },
      }),
    };

    onUnmounted(() => {
      statesUS4.proxy.destroy();
    });

    return { state4, statesUS4 };
  },
});

app.mount('#app');
