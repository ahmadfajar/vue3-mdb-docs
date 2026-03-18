const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const progress5 = ref(50);
    const progress6 = ref(65);
    const progress7 = ref(80);

    return {
      progress5,
      progress6,
      progress7,
    };
  },
});

app.mount('#app');
