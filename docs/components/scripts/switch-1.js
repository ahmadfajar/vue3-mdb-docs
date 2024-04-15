const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const switch1 = ref();

    return { switch1 };
  }
});

app.mount('#app');
