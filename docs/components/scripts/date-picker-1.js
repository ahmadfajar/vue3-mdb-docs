const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const picker1 = ref();

    return { picker1 };
  },
});

app.mount('#app');
