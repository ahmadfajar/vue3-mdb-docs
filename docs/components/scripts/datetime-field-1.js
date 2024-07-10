const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField1 = ref();

    return { dateField1 };
  },
});

app.mount('#app');
