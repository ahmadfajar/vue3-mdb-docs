const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const selectedAmenities1 = ref();
    const selectedNeighborhoods1 = ref();

    const amenities1 = [
      { text: 'Elevator' },
      { text: 'Washer / Dryer' },
      { text: 'Fireplace', disabled: true },
      { text: 'Wheelchair access' },
      { text: 'Dogs ok' },
      { text: 'Cats ok' }
    ];
    const neighborhoods1 = [
      { text: 'Snowy Rock Place' },
      { text: 'Honey Lane Circle' },
      { text: 'Donna Drive' },
      { text: 'Elaine Street' },
      { text: 'Court Street' },
      { text: 'Kennedy Park' }
    ];

    return {
      selectedAmenities1,
      selectedNeighborhoods1,
      amenities1,
      neighborhoods1
    };
  }
});

app.mount('#app');
