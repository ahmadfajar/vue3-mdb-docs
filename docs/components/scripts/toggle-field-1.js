const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const todayWheather = ref();
    const selectedCoffee = ref();

    const weathers = [
      {
        value: 'sunny',
        label: 'Sunny',
        icon: 'wb_sunny',
      },
      {
        value: 'rain',
        label: 'Rain',
        icon: 'rainy',
      },
      {
        value: 'heavy-rain',
        label: 'Heavy Rain',
        icon: 'thunderstorm',
      },
    ];

    const favoriteCoffees = [
      {
        value: 'Americano',
        label: 'Americano',
      },
      {
        value: 'Espresso',
        label: 'Espresso',
      },
      {
        value: 'Cappuccino',
        label: 'Cappuccino',
      },
    ];

    return { selectedCoffee, todayWheather, favoriteCoffees, weathers };
  },
});

app.mount('#app');
