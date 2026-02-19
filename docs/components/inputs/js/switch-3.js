const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const switch4 = ref();

    return { switch4 };
  }
});

app.mount('#app');
