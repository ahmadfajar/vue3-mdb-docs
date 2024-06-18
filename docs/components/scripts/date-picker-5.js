const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const picker5 = ref();

    return { picker5 };
  },
});

app.mount('#app');
