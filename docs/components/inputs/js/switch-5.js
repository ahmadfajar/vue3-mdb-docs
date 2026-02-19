const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const switch6 = ref();

    return { switch6 };
  }
});

app.mount('#app');
