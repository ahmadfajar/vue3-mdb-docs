const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const picker6 = ref();

    return { picker6 };
  },
});

app.mount('#app');
