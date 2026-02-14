const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const selectedAmenities2 = ref();
    const selectedNeighborhoods2 = ref();

    const amenities2 = [
        { text: 'Elevator', imgSrc: 'https://ahmadfajar.github.io/img/1.jpg' },
        { text: 'Washer / Dryer', imgSrc: 'https://ahmadfajar.github.io/img/2.jpg' },
        { text: 'Fireplace', imgSrc: 'https://ahmadfajar.github.io/img/3.jpg' },
        { text: 'Wheelchair access', imgSrc: 'https://ahmadfajar.github.io/img/4.jpg' },
        { text: 'Dogs ok', imgSrc: 'https://ahmadfajar.github.io/img/5.jpg' },
        { text: 'Cats ok', imgSrc: 'https://ahmadfajar.github.io/img/kitty-1.jpg' }
      ];
      const neighborhoods2 = [
        { text: 'Snowy Rock Place', imgSrc: 'https://ahmadfajar.github.io/img/1.jpg' },
        { text: 'Honey Lane Circle', imgSrc: 'https://ahmadfajar.github.io/img/2.jpg' },
        { text: 'Donna Drive', imgSrc: 'https://ahmadfajar.github.io/img/3.jpg' },
        { text: 'Elaine Street', imgSrc: 'https://ahmadfajar.github.io/img/4.jpg' },
        { text: 'Court Street', imgSrc: 'https://ahmadfajar.github.io/img/5.jpg' },
        { text: 'Kennedy Park', imgSrc: 'https://ahmadfajar.github.io/img/kitty-1.jpg' }
      ];
      
    return {
      selectedAmenities2,
      selectedNeighborhoods2,
      amenities2,
      neighborhoods2
    };
  }
});

app.mount('#app');
