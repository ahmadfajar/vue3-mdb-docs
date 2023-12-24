const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const listChat1 = [
      {
        active: true,
        fullName: 'Jason Oner',
        avatar: 'https://ahmadfajar.github.io/img/1.jpg'
      },
      {
        active: true,
        fullName: 'Ranee Carlson',
        avatar: 'https://ahmadfajar.github.io/img/2.jpg'
      },
      {
        active: false,
        fullName: 'Cindy Baker',
        avatar: 'https://ahmadfajar.github.io/img/3.jpg'
      },
      {
        active: false,
        fullName: 'Ali Connors',
        avatar: 'https://ahmadfajar.github.io/img/4.jpg'
      }
    ];
    const listChat2 = [
      { fullName: 'Travis Howard', avatar: 'https://ahmadfajar.github.io/img/5.jpg' }
    ];

    return {
      listChat1,
      listChat2
    };
  }
});

app.mount('#app');
