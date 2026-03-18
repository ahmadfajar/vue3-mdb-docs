const { ref } = Vue;
const { createVueMdb, Helper } = VueMdb;

const app = createVueMdb({
  setup() {
    const revenues = [
      { city: 'New York', revenue: '72345' },
      { city: 'San Fransisco', revenue: '39145' },
      { city: 'Sidney', revenue: '25139' },
      { city: 'Singapore', revenue: '61439' },
    ];

    return { Helper, revenues };
  },
});

app.mount('#app');
