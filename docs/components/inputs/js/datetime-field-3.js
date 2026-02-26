const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField5 = ref();
    const dateField6 = ref();
    const dateField7 = ref();
    
    return { dateField5, dateField6, dateField7 };
  },
});

app.mount('#app');
