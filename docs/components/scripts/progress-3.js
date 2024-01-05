const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const progress3 = ref(25);
    const thickness1 = ref(5);

    return {
      progress3,
      thickness1
    };
  }
});

app.mount('#app');
