const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const enableMessage = ref(false);
    const enableHints = ref(true);
    const show1 = ref(false);
    const activator1 = ref(null);

    return {
      enableMessage,
      enableHints,
      show1,
      activator1
    };
  }
});

app.mount('#app');
