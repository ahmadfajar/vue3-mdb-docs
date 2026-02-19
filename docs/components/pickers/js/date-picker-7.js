const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const picker7 = ref();

    return { picker7 };
  },
});

app.mount('#app');
