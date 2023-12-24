const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const listItems2 = ref([
      {
        photo: 'https://ahmadfajar.github.io/img/crunchy-croissants.jpg',
        title: 'Crunchy Croissants',
        text: 'Buttery, flaky pastry named for its crescent shaped.',
        active: true
      },
      {
        photo: 'https://ahmadfajar.github.io/img/grilled-eggplant-1.jpg',
        title: 'Grilled Eggplant',
        text: 'Tender with a rich, complex flavor when cooked.',
        active: true
      },
      {
        photo: 'https://ahmadfajar.github.io/img/tangerine-salad.jpg',
        title: 'Tangerine Salad',
        text: 'Peak tangerine season lasts from autumn to spring.',
        active: false,
        disabled: true
      },
      {
        photo: 'https://ahmadfajar.github.io/img/pomegranate-juice.jpg',
        title: 'Pomegranate Juice',
        text: 'A superfood for good skin, hair and health.',
        active: false
      },
      {
        photo: 'https://ahmadfajar.github.io/img/simple-salsa.jpg',
        title: 'Chili Salsa',
        text: 'Heat up any taco night with minimal preparation.',
        active: false
      },
      {
        photo: 'https://ahmadfajar.github.io/img/flour-scratch.jpg',
        title: 'Flour from scratch',
        text: 'Grind grains, nuts, or beans in your coffee grinder.',
        active: false
      }
    ]);

    return {
      listItems2
    };
  }
});

app.mount('#app');
