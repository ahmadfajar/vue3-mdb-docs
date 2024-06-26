const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const picker3mode = ref('RGB');
    const picker3color = ref('#e632da');
    const picker3Activator = ref(null);
    const picker3Show = ref(false);

    return { picker3mode, picker3color, picker3Activator, picker3Show };
  },
});

app.mount('#app');
