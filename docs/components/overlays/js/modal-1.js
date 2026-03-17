const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const autoCloseModalVisible = ref(false);

    return { autoCloseModalVisible };
  },
});

app.mount('#app');
