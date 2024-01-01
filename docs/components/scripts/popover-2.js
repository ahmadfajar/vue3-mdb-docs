const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const show2 = ref(false);
    const show3 = ref(false);
    const show4 = ref(false);
    const show5 = ref(false);
    const show6 = ref(false);
    const show7 = ref(false);
    const show8 = ref(false);
    const show9 = ref(false);
    const show10 = ref(false);
    const show11 = ref(false);
    const show12 = ref(false);
    const show13 = ref(false);
    const activator2 = ref(null);
    const activator3 = ref(null);
    const activator4 = ref(null);
    const activator5 = ref(null);
    const activator6 = ref(null);
    const activator7 = ref(null);
    const activator8 = ref(null);
    const activator9 = ref(null);
    const activator10 = ref(null);
    const activator11 = ref(null);
    const activator12 = ref(null);
    const activator13 = ref(null);

    return {
      show2,
      show3,
      show4,
      show5,
      show6,
      show7,
      show8,
      show9,
      show10,
      show11,
      show12,
      show13,
      activator2,
      activator3,
      activator4,
      activator5,
      activator6,
      activator7,
      activator8,
      activator9,
      activator10,
      activator11,
      activator12,
      activator13
    };
  }
});

app.mount('#app');
