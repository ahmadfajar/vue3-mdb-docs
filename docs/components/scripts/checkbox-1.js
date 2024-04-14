const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const checkbox1 = ref();

    return { checkbox1 };
  }
});

app.mount('#app');
