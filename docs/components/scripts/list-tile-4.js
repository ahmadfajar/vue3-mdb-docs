const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const enableFiltering = ref(false);
    const enablePassword = ref(false);
    const enableNotification = ref(false);
    const enableSound = ref(false);
    const enableWidget = ref(false);

    function toggleEnableNotification() {
      enableNotification.value = !enableNotification.value;
    }

    function toggleEnableSound() {
      enableSound.value = !enableSound.value;
    }

    function toggleEnableWidget() {
      enableWidget.value = !enableWidget.value;
    }

    return {
      enableFiltering,
      enablePassword,
      enableNotification,
      enableSound,
      enableWidget,
      toggleEnableNotification,
      toggleEnableSound,
      toggleEnableWidget
    };
  }
});

app.mount('#app');
