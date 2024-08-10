const { ref } = Vue;
const { BsArrayStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const progress7 = ref(70);
    const position2 = ref('inside');
    const position2Src = {
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
      progress7,
      position2,
      position2Src
    };
  }
});

app.mount('#app');
