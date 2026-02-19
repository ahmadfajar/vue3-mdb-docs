const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const fieldValue2 = ref([]);

    return { fieldValue2 };
  }
});

app.mount('#app');
