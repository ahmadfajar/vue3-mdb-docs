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
        icon: 'rainy'
      },
      {
        value: 'heavy-rain',
        label: 'Heavy Rain',
        icon: 'thunderstorm'
      }
    ];

    const selectedWeather1 = ref();
    const selectedWeather2 = ref();
    const selectedWeather3 = ref();
    const selectedWeather4 = ref();
    const selectedWeather5 = ref();

    return {
      selectedWeather1,
      selectedWeather2,
      selectedWeather3,
      selectedWeather4,
      selectedWeather5,
      weathers
    };
  }
});

app.mount('#app');
