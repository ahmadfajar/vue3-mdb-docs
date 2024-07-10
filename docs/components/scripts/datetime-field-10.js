const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField16 = ref();
    
    return { dateField16 };
  },
});

app.mount('#app');
