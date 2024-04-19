const { computed, reactive, ref, unref } = Vue;
const { createVueMdb, Helper } = VueMdb;
const { useVuelidate } = Vuelidate;
const { email, maxValue, required } = VuelidateValidators;

const app = createVueMdb({
  setup() {
    const loading = ref(false);
    const person = reactive({
      fullName: null,
      emailAddress: null,
      age: null,
      gender: 'male',
    });
    const personRules = {
      fullName: { required },
      emailAddress: { required, email },
      age: { required, maxAge: maxValue(50) },
    };
    const genders = [
      { value: 'male', label: 'MALE' },
      { value: 'female', label: 'FEMALE' },
    ];

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

    function ageFieldValidator(validator) {
      const obj = unref(validator)['age'];

      return computed(() => ({
        hasError: unref(obj.$error),
        messages: {
          required: obj.required.$message,
          maxAge: obj.maxAge.$message,
        },
        dirty: unref(obj.$dirty),
        validators: {
          required: unref(obj.required.$invalid),
          maxAge: unref(obj.maxAge.$invalid),
        },
      }));
    }

    const v$ = useVuelidate(personRules, person);
    const fullnameValidator = requiredFieldValidator(v$, 'fullName');
    const emailValidator = emailFieldValidator(v$);
    const ageValidator = ageFieldValidator(v$);

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

    function clear() {
      unref(v$).$reset();
      person.fullName = null;
      person.emailAddress = null;
      person.age = null;
      person.gender = 'male';
    }

    return {
      genders,
      person,
      loading,
      emailValidator,
      fullnameValidator,
      ageValidator,
      submit,
      clear,
    };
  },
});

app.mount('#app');
