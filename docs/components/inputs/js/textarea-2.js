const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const textArea1 = ref();

    return { textArea1 };
  }
});

app.mount('#app');
