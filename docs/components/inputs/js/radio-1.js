const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const radio1 = ref();

    return { radio1 };
  }
});

app.mount('#app');
