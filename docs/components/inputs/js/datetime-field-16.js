const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField27 = ref();
    const dateField28 = ref();
    const dateField29 = ref();

    return { dateField27, dateField28, dateField29 };
  },
});

app.mount('#app');
