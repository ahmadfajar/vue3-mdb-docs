const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const picker3 = ref();

    return { picker3 };
  },
});

app.mount('#app');
