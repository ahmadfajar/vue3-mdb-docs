const { onUnmounted, ref } = Vue;
const { BsArrayStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const employee5 = ref();
    const employee6 = ref();
    const employee7 = ref();
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

    return { employee5, employee6, employee7, peopleSrc1 };
  },
});

app.mount('#app');
