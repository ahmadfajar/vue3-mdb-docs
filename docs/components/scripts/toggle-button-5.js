const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const selectedCategory = ref('Songs');
    const categories = [
      {
        value: 'Songs',
        label: 'Songs'
      },
      {
        value: 'Albums',
        label: 'Albums'
      },
      {
        value: 'Podcasts',
        label: 'Podcasts'
      }
    ];
    const albums = [
      {
        cover: 'https://i.pinimg.com/736x/1b/fb/1b/1bfb1b68d38b4f6833188c7bc4d99d4d.jpg',
        title: '21st Century Strangers',
        size: '68 MB'
      },
      {
        cover: 'https://i.pinimg.com/originals/70/59/f9/7059f9d0b79c34d77b1448a25c542171.jpg',
        title: 'New Name',
        size: '72 MB'
      },
      {
        cover: 'https://i.pinimg.com/originals/33/6d/ed/336ded540abb8c797125bfcb6491f5fd.jpg',
        title: 'Not Me',
        size: '58 MB'
      },
      {
        cover: 'https://i.pinimg.com/originals/8b/4f/7c/8b4f7cba6c4e6852857ae311b2aa01e3.jpg',
        title: 'Mutter',
        size: '68 MB'
      },
      {
        cover: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/fe529a64193929.5aca8500ba9ab.jpg',
        title: 'True Love',
        size: '68 MB'
      }
    ];

    return {
      selectedCategory,
      categories
    };
  }
});

app.mount('#app');
