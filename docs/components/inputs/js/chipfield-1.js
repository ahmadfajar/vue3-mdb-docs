const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const fieldValue1 = ref([]);

    return { fieldValue1 };
  }
});

app.mount('#app');
