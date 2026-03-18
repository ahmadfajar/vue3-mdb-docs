const { ref } = Vue;
const { BsArrayStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const progress2 = ref(70);
    const position1 = ref('inside');
    const position1Src = {
      proxy: new BsArrayStore(
        [
          { id: 'inside', text: 'Inside' },
          { id: 'start', text: 'Start' },
          { id: 'end', text: 'End' },
          { id: 'top', text: 'Top' },
          { id: 'bottom', text: 'Bottom' }
        ],
        {
          idProperty: 'id'
        }
      ),
      schema: { displayField: 'text', valueField: 'id' }
    };

    return {
      progress2,
      position1,
      position1Src
    };
  }
});

app.mount('#app');
