const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const fullname = ref();
    const bornDate = ref();
    const dateOperator = ref('gt');
    const dateOperators = {
      proxy: new BsArrayStore(
        [
          { id: 'gt', name: 'Greater than' },
          { id: 'lt', name: 'Less than' },
        ],
        {
          idProperty: 'id',
        }
      ),
      schema: { displayField: 'name', valueField: 'id' },
    };

    function doCustomSearch() {
      // do something here...
    }

    return { fullname, bornDate, dateOperator, dateOperators, doCustomSearch };
  },
});

app.mount('#app');
