const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField18 = ref();
    
    return { dateField18 };
  },
});

app.mount('#app');
