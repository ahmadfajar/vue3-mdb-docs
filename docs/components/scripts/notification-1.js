const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    function showAtPosition(notification, position) {
      notification.info(
        {
          message: 'Hello, this is a notification message.',
          position: position,
        },
        'Information'
      );
    }

    return { showAtPosition };
  },
});

app.mount('#app');
