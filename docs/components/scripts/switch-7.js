const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const switch11 = ref();
    const switch12 = ref();

    return { switch11, switch12 };
  },
});

app.mount('#app');
