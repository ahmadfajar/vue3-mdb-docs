const { onUnmounted, ref } = Vue;
const { BsStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const state5 = ref();
    const state6 = ref();
    const state7 = ref();
    const state8 = ref();
    const statesUS5 = {
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
    const statesUS6 = {
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
    const statesUS7 = {
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
    const statesUS8 = {
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
      statesUS5.proxy.destroy();
      statesUS6.proxy.destroy();
      statesUS7.proxy.destroy();
      statesUS8.proxy.destroy();
    });

    return { state5, state6, state7, state8, statesUS5, statesUS6, statesUS7, statesUS8 };
  },
});

app.mount('#app');
