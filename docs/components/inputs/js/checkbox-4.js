const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const selectedColors = ref([]);
    const selectedFruits = ref([]);

    const favoriteFruits = [
      { value: 'Orange', label: 'Orange' },
      { value: 'Apple', label: 'Apple' },
      { value: 'Pineapple', label: 'Pineapple' },
      { value: 'Grape', label: 'Grape' },
    ];
    const colorsItems = [
      { value: 'primary', label: 'Primary', color: 'primary' },
      { value: 'success', label: 'Success', color: 'success' },
      { value: 'danger', label: 'Danger', color: 'danger' },
      { value: 'warning', label: 'Warning', color: 'warning' },
    ];

    return { selectedColors, selectedFruits, colorsItems, favoriteFruits };
  },
});

app.mount('#app');
