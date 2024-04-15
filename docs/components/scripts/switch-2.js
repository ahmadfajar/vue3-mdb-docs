const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const switch2 = ref('on');
    const switch3 = ref('on');

    return { switch2, switch3 };
  }
});

app.mount('#app');
