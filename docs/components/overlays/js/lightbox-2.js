const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const lightbox2 = ref();
    const showGalleryItems2 = ref(false);
    const galleryItems2 = [
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=255',
        sourceUrl: 'https://unsplash.it/1200/768.jpg?image=255',
        title: 'First gallery item',
        type: 'image',
      },
      {
        thumbnail:
          'https://i.ytimg.com/vi/s8h4YNaX2aM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnDmUkPAQ_Y3qMDCMknRkTqi069Q',
        sourceUrl: 'https://www.youtube.com/watch?v=s8h4YNaX2aM',
        title: 'Second gallery item',
        type: 'youtube',
      },
      {
        thumbnail: 'https://www.dragon1.com/images/Big_Buck_Bunny.jpg',
        sourceUrl: 'https://www.dragon1.com/video/mp4/BigBuck_Bunny_1280x720_30mb.mp4',
        title: 'Third gallery item',
        type: 'video',
      },
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=259',
        sourceUrl: 'https://unsplash.it/1200/768.jpg?image=259',
        title: 'Fourth gallery item',
        type: 'image',
      },
    ];

    return { lightbox2, showGalleryItems2, galleryItems2 };
  },
});

app.mount('#app');
