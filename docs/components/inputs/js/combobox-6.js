const { onUnmounted, ref } = Vue;
const { BsStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const state1 = ref();
    const state2 = ref();
    const state3 = ref();
    const statesUS1 = {
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
    const statesUS2 = {
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
    const statesUS3 = {
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
      statesUS1.proxy.destroy();
      statesUS2.proxy.destroy();
      statesUS3.proxy.destroy();
    });

    return { state1, state2, state3, statesUS1, statesUS2, statesUS3 };
  },
});

app.mount('#app');
