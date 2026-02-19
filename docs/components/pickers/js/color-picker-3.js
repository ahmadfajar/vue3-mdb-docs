const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const pickerMode = ref('RGB');
    const pickerColor = ref('#e632da');
    const pickerActivator = ref(null);
    const pickerShow = ref(false);

    return { pickerMode, pickerColor, pickerActivator, pickerShow };
  },
});

app.mount('#app');
