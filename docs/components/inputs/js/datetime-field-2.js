const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField2 = ref();
    const dateField3 = ref();
    const dateField4 = ref();
    
    return { dateField2, dateField3, dateField4 };
  },
});

app.mount('#app');
