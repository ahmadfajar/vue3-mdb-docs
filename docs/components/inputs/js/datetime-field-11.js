const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField17 = ref();
    
    return { dateField17 };
  },
});

app.mount('#app');
