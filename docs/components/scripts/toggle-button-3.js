const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const favoriteDrinks = [
      {
        value: 'tea',
        label: 'Tea'
      },
      {
        value: 'coffee',
        label: 'Coffee'
      },
      {
        value: 'beer',
        label: 'Beer'
      }
    ];
    const favoriteCoffees = [
      {
        value: 'Americano',
        label: 'Americano'
      },
      {
        value: 'Espresso',
        label: 'Espresso'
      },
      {
        value: 'Cappuccino',
        label: 'Cappuccino'
      }
    ];

    const favoriteDrink1 = ref([]);
    const favoriteDrink2 = ref([]);

    return {
      favoriteDrinks,
      favoriteCoffees,
      favoriteDrink1,
      favoriteDrink2
    };
  }
});

app.mount('#app');
