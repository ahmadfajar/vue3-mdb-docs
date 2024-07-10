const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField14 = ref();
    
    return { dateField14 };
  },
});

app.mount('#app');
