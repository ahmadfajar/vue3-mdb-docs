const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField21 = ref();
    const dateField22 = ref();
    const dateField23 = ref();
    const dateField24 = ref();
    const dateField25 = ref();
    const dateField26 = ref();

    return { dateField21, dateField22, dateField23, dateField24, dateField25, dateField26 };
  },
});

app.mount('#app');
