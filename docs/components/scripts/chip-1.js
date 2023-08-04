const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const chip1Active = ref(false);
    const chip2Active = ref(false);
    const chip1Icon = ref();
    const chip2Icon = ref();

    function toggleChip1(value) {
      chip1Active.value = !value;
      chip1Icon.value = chip1Active.value ? 'check' : undefined;
    }

    function toggleChip2(value) {
      chip2Active.value = !value;
      chip2Icon.value = chip2Active.value ? 'check' : undefined;
    }

    return {
      chip1Active,
      chip2Active,
      chip1Icon,
      chip2Icon,
      toggleChip1,
      toggleChip2
    };
  }
});

app.mount('#app');
