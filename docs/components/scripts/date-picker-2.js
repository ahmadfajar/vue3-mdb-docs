const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const picker2 = ref();

    return { picker2 };
  },
});

app.mount('#app');
