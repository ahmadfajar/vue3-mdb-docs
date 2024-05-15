const { onUnmounted, ref } = Vue;
const { BsArrayStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const employee2 = ref();
    const employee3 = ref();
    const employee4 = ref();
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

    return { employee2, employee3, employee4, peopleSrc1 };
  },
});

app.mount('#app');
