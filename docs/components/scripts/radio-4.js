const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const selectedColor = ref([]);
    const selectedFruit = ref([]);
    const colorsItems = [
      { value: 'red', label: 'Red', color: 'red' },
      { value: 'green', label: 'Green', color: 'green' },
      { value: 'blue', label: 'Blue', color: 'blue' },
      { value: 'purple', label: 'Purple', color: 'purple' },
    ];

    const favoriteFruits = [
      { value: 'Orange', label: 'Orange' },
      { value: 'Apple', label: 'Apple' },
      { value: 'Pineapple', label: 'Pineapple' },
      { value: 'Grape', label: 'Grape' },
    ];

    return { selectedColor, selectedFruit, colorsItems, favoriteFruits };
  },
});

app.mount('#app');
