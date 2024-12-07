const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const svg = encodeURI('url("data:image/svg+xml, <svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 -60 320 512\' fill=\'#3b7cf5\' width=\'14\' height=\'16\'><path d=\'M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z\'/></svg>")');
    const items3 = [
      { label: 'Home', href: '#' },
      { label: 'Components', href: '#' },
      { label: 'Breadcrumb', href: '#' },
    ];

    return { items3, svg };
  },
});

app.mount('#app');
