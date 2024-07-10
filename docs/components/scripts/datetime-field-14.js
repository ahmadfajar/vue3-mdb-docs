const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField20 = ref();
    
    return { dateField20 };
  },
});

app.mount('#app');
