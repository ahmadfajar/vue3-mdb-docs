const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField13 = ref();
    
    return { dateField13 };
  },
});

app.mount('#app');
