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

    const favoriteDrink = ref();

    return {
      favoriteDrinks,
      favoriteDrink
    };
  }
});

app.mount('#app');
