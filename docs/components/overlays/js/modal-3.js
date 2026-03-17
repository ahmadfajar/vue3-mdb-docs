const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const trueModalVisible = ref(false);

    return { trueModalVisible };
  },
});

app.mount('#app');
