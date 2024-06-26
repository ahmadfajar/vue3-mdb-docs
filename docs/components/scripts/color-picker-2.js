const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const color2 = ref();
    const mode2 = ref();
    const swatches = [
        '#e9c46a',
        '#f4a261',
        '#e76f51',
        '#FF0000',
        '#d62828',
        '#AA0000',
        '#550000',
        '#FFFF00',
        '#AAAA00',
        '#555500',
        '#00FF00',
        '#00AA00',
        '#005500',
        '#0077b6',
        '#0096c7',
        '#00b4d8',
        '#48cae4',
      ];

    return { color2, mode2, swatches };
  },
});

app.mount('#app');
