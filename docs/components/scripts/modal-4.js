const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const scrollableModalVisible = ref(false);

    return { scrollableModalVisible };
  },
});

app.mount('#app');
