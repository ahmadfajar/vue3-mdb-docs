const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const weathers = [
      {
        value: 'sunny',
        label: 'Sunny',
        icon: 'wb_sunny'
      },
      {
        value: 'rain',
        label: 'Rain',
        icon: 'wb_cloudy'
      },
      {
        value: 'heavy-rain',
        label: 'Heavy Rain',
        icon: 'thunderstorm'
      }
    ];

    const selectedWeather6 = ref();
    const selectedWeather7 = ref();
    const selectedWeather8 = ref();
    const selectedWeather9 = ref();
    const selectedWeather10 = ref();

    return {
      selectedWeather6,
      selectedWeather7,
      selectedWeather8,
      selectedWeather9,
      selectedWeather10,
      weathers
    };
  }
});

app.mount('#app');
