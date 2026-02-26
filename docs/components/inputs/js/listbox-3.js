const { onUnmounted, ref } = Vue;
const { BsStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const listbox3 = ref();
    const statesCA1 = {
      proxy: new BsStore({
        idProperty: 'value',
        dataProperty: 'data',
        totalProperty: 'total',
        remoteSort: false,
        remoteFilter: false,
        filters: [{ property: 'country', value: 'CA', operator: 'eq' }],
        restProxy: {
          browse: 'https://ahmadfajar.github.io/data/states.json',
        },
      }),
    };

    onUnmounted(() => {
      statesCA1.proxy.destroy();
    });    

    return { listbox3, statesCA1 };
  },
});

app.mount('#app');
