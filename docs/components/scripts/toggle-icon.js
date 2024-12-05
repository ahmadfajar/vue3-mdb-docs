const { computed, ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const passwordToggled1 = ref(false);
    const passwordToggled2 = ref(false);
    const inputType1 = computed(() => (passwordToggled1.value ? 'text' : 'password'));
    const inputType2 = computed(() => (passwordToggled2.value ? 'text' : 'password'));

    return { passwordToggled1, passwordToggled2, inputType1, inputType2 };
  }
});

app.mount('#app');
