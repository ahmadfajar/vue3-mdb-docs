const { computed, ref, watch } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dismissSecs = 10;
    const dismissCountDown = ref(0);
    const showDismissibleAlert1 = ref(false);
    const showDismissibleAlert2 = ref(false);
    const timerInterval = ref();
    const percentProgress = computed(() => (dismissCountDown.value / dismissSecs) * 100);

    watch(
      () => dismissCountDown.value,
      (value) => {
        if (value < 1) {
          clearInterval(timerInterval.value);
          showDismissibleAlert2.value = false;
        }
      }
    );

    function showAlert() {
      dismissCountDown.value = dismissSecs;
      showDismissibleAlert2.value = true;
      startTimer();
    }

    function startTimer() {
      timerInterval.value = window.setInterval(() => (dismissCountDown.value -= 1), 1000);
    }

    function toggleAlert() {
      showDismissibleAlert1.value = !showDismissibleAlert1.value;
    }

    function closeAlert() {
      clearInterval(timerInterval.value);
    }

    return {
      dismissCountDown,
      showDismissibleAlert1,
      showDismissibleAlert2,
      percentProgress,
      closeAlert,
      showAlert,
      toggleAlert
    };
  }
});

app.mount('#app');
