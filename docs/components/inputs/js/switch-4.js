const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const switch5 = ref();

    return { switch5 };
  }
});

app.mount('#app');
