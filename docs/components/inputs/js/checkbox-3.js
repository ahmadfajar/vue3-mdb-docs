const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const selectedItems = ref([]);
    const dummyItems = [
      { value: 1, label: 'Item 1' },
      { value: 2, label: 'Item 2' },
      { value: 3, label: 'Item 3' },
      { value: 4, label: 'Item 4' },
      { value: 5, label: 'Item 5', disabled: true },
      { value: 6, label: 'Item 6' },
    ];

    return { selectedItems, dummyItems };
  },
});

app.mount('#app');
