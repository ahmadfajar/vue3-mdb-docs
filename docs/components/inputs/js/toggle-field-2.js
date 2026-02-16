const { computed, reactive, ref, unref } = Vue;
const { createVueMdb, Helper } = VueMdb;
const { useVuelidate } = Vuelidate;
const { email, required, sameAs } = VuelidateValidators;

const app = createVueMdb({
  setup() {
    const favoriteDrinks = [
      { value: 'tea', label: 'Tea' },
      { value: 'coffee', label: 'Coffee' },
      { value: 'beer', label: 'Beer' },
    ];
    const occupations = [
      { value: 1, label: 'Computer and IT' },
      { value: 2, label: 'Scientists and Research' },
      { value: 3, label: 'Consultant' },
      { value: 4, label: 'Other' },
    ];

    const loading = ref(false);
    const surveyForm = reactive({
      fullName: null,
      emailAddress: null,
      favoriteDrink: null,
      occupation: null,
    });
    const surveyFormRules = {
      fullName: { required },
      emailAddress: { required, email },
      favoriteDrink: { required },
      occupation: { required },
    };

    function requiredFieldValidator(validator, field) {
      const obj = unref(validator)[field];

      return computed(() => ({
        hasError: unref(obj.$error),
        messages: { required: obj.required.$message },
        dirty: unref(obj.$dirty),
        validators: {
          required: unref(obj.required.$invalid),
        },
      }));
    }

    function emailFieldValidator(validator) {
      const obj = unref(validator)['emailAddress'];

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

    const v$ = useVuelidate(surveyFormRules, surveyForm);
    const fullnameValidator = requiredFieldValidator(v$, 'fullName');
    const favoriteValidator = requiredFieldValidator(v$, 'favoriteDrink');
    const occupationValidator = requiredFieldValidator(v$, 'occupation');
    const emailValidator = emailFieldValidator(v$);

    function submit(notification) {
      const validator = unref(v$);
      validator.$touch();

      if (!validator.$invalid) {
        loading.value = true;
        Helper.defer(() => {
          loading.value = false;
          notification.success('Data has been submitted.');
        }, 1000);
      }
    }

    return {
      favoriteDrinks,
      occupations,
      loading,
      surveyForm,
      fullnameValidator,
      favoriteValidator,
      occupationValidator,
      emailValidator,
      submit,
    };
  },
});

app.mount('#app');
