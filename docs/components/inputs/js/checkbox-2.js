const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const selectedFavoriteColors = ref([]);
    const selectedFavoriteFruits = ref([]);

    const favoriteColors = [
      { value: 'red', label: 'Red' },
      { value: 'green', label: 'Green' },
      { value: 'blue', label: 'Blue' },
      { value: 'purple', label: 'Purple' },
    ];
    const favoriteFruits = [
      { value: 'Orange', label: 'Orange' },
      { value: 'Apple', label: 'Apple' },
      { value: 'Pineapple', label: 'Pineapple' },
      { value: 'Grape', label: 'Grape' },
    ];

    return { selectedFavoriteColors, selectedFavoriteFruits, favoriteColors, favoriteFruits };
  },
});

app.mount('#app');
