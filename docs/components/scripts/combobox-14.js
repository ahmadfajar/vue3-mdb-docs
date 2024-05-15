const { onUnmounted, ref } = Vue;
const { BsArrayStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const employee19 = ref();
    const employee20 = ref();
    const employee21 = ref();
    const employee22 = ref();
    const employee23 = ref();
    const employee24 = ref();
    const employee25 = ref();
    const employee26 = ref();
    const employee27 = ref();
    const employee28 = ref();
    const employee29 = ref();
    const employee30 = ref();
    const peopleSrc1 = {
      proxy: new BsArrayStore(
        [
          { id: 1, name: 'Sandra Adams' },
          { id: 2, name: 'Ali Connors' },
          { id: 3, name: 'Trevor Hansen' },
          { id: 4, name: 'Tucker Smith' },
          { id: 5, name: 'Britta Holt' },
          { id: 6, name: 'Jane Smith' },
          { id: 7, name: 'John Smith' },
          { id: 8, name: 'Sandra Williams' },
        ],
        {
          idProperty: 'id',
        }
      ),
      schema: { displayField: 'name', valueField: 'id' },
    };

    onUnmounted(() => {
      peopleSrc1.proxy.destroy();
    });

    return {
      employee19,
      employee20,
      employee21,
      employee22,
      employee23,
      employee24,
      employee25,
      employee25,
      employee26,
      employee27,
      employee28,
      employee29,
      employee30,
      peopleSrc1,
    };
  },
});

app.mount('#app');
