const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const showDismissibleChip = ref(true);

    function toggleDismissibleChip(value) {
      showDismissibleChip.value = !value;
    }

    return {
      showDismissibleChip,
      toggleDismissibleChip
    };
  }
});

app.mount('#app');
