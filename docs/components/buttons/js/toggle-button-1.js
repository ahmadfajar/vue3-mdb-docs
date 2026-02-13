const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const drinkTypes = [
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

    const selectedDrink = ref();

    return {
      drinkTypes,
      selectedDrink
    };
  }
});

app.mount('#app');
