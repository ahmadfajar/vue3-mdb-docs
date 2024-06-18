const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const picker4 = ref();

    return { picker4 };
  },
});

app.mount('#app');
