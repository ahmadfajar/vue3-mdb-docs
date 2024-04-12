const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const fieldValue1 = ref();
    const fieldValue2 = ref();

    return { fieldValue1, fieldValue2 };
  }
});

app.mount('#app');
