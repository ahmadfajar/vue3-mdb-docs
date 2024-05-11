const { ref } = Vue;
const { BsStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const listbox4 = ref();
    const statesCA2 = {
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

    return { listbox4, statesCA2 };
  },
});

app.mount('#app');
