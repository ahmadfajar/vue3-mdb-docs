const { onBeforeUnmount } = Vue;
const { createVueMdb, BsArrayStore, useGenerateId } = VueMdb;

const app = createVueMdb({
  setup() {
    function toggleShow(item, state) {
      item.show = !state;
    }
    const placementSrc = new BsArrayStore([
      {
        id: useGenerateId(),
        value: 'bottom-left',
        label: 'Bottom Left',
        show: false,
        enableHint: false,
        enableMessage: false,
      },
      {
        id: useGenerateId(),
        value: 'bottom-right',
        label: 'Bottom Right',
        show: false,
        enableHint: false,
        enableMessage: false,
      },
      {
        id: useGenerateId(),
        value: 'bottom',
        label: 'Bottom',
        show: false,
        enableHint: false,
        enableMessage: false,
      },
      {
        id: useGenerateId(),
        value: 'left',
        label: 'Left',
        show: false,
        enableHint: false,
        enableMessage: false,
      },
      {
        id: useGenerateId(),
        value: 'left-top',
        label: 'Left Top',
        show: false,
        enableHint: false,
        enableMessage: false,
      },
      {
        id: useGenerateId(),
        value: 'left-bottom',
        label: 'Left Bottom',
        show: false,
        enableHint: false,
        enableMessage: false,
      },
      {
        id: useGenerateId(),
        value: 'right',
        label: 'Right',
        show: false,
        enableHint: false,
        enableMessage: false,
      },
      {
        id: useGenerateId(),
        value: 'right-top',
        label: 'Right Top',
        show: false,
        enableHint: false,
        enableMessage: false,
      },
      {
        id: useGenerateId(),
        value: 'right-bottom',
        label: 'Right Bottom',
        show: false,
        enableHint: false,
        enableMessage: false,
      },
      {
        id: useGenerateId(),
        value: 'top',
        label: 'Top',
        show: false,
        enableHint: false,
        enableMessage: false,
      },
      {
        id: useGenerateId(),
        value: 'top-left',
        label: 'Top Left',
        show: false,
        enableHint: false,
        enableMessage: false,
      },
      {
        id: useGenerateId(),
        value: 'top-right',
        label: 'Top Right',
        show: false,
        enableHint: false,
        enableMessage: false,
      },
    ]);

    onBeforeUnmount(() => {
      placementSrc.destroy();
    });

    return { toggleShow, placementSrc };
  },
});

app.mount('#app');
