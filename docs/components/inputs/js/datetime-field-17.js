const { computed, reactive, ref, unref } = Vue;
const { createVueMdb, Helper } = VueMdb;
const { email, required } = VuelidateValidators;
const { useVuelidate } = Vuelidate;

const app = createVueMdb({
  setup() {
    const loading = ref(false);
    const contact = reactive({
      fullName: null,
      email: null,
      address: null,
      bornDate: null,
    });
    const contactRules = {
      fullName: { required },
      email: { required, email },
      address: { required },
      bornDate: { required },
    };

    function requiredFieldValidator(v$, field) {
      const obj = unref(v$)[field];

      return computed(() => ({
        hasError: unref(obj.$error),
        messages: { required: obj.required.$message },
        dirty: unref(obj.$dirty),
        validators: {
          required: unref(obj.required.$invalid),
        },
      }));
    }

    function emailFieldValidator(v$, field) {
      const obj = unref(v$)[field];

      return computed(() => ({
        hasError: unref(obj.$error),
        messages: {
          required: obj.required.$message,
          email: 'Email address format is invalid.',
        },
        dirty: unref(obj.$dirty),
        validators: {
          required: unref(obj.required.$invalid),
          email: unref(obj.email.$invalid),
        },
      }));
    }

    const v$ = useVuelidate(contactRules, contact);
    const fullnameValidator = requiredFieldValidator(v$, 'fullName');
    const emailValidator = emailFieldValidator(v$, 'email');
    const addressValidator = requiredFieldValidator(v$, 'address');
    const bornDateValidator = requiredFieldValidator(v$, 'bornDate');

    function submit(notification) {
      const validator = unref(v$);
      validator.$touch();

      if (!validator.$invalid) {
        loading.value = true;
        Helper.defer(() => {
          loading.value = false;
          notification.success('Data has been sent.');
        }, 1000);
      }
    }

    function cancel() {
      unref(v$).$reset();
      contact.fullName = null;
      contact.email = null;
      contact.address = null;
      contact.bornDate = null;
    }

    return {
      contact,
      loading,
      fullnameValidator,
      emailValidator,
      addressValidator,
      bornDateValidator,
      submit,
      cancel,
    };
  },
});

app.mount('#app');
