const { computed, ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const passwordToggled = ref(false);
    const inputType = computed(() => (passwordToggled.value ? 'text' : 'password'));

    return { passwordToggled, inputType };
  }
});

app.mount('#app');
