const { computed, reactive, ref, unref } = Vue;
const { createVueMdb, Helper } = VueMdb;
const { useVuelidate } = Vuelidate;
const { email, required, sameAs } = VuelidateValidators;

const app = createVueMdb({
  setup() {
    const loading = ref(false);
    const member = reactive({
      fullName: null,
      emailAddress: null,
      password: null,
      confirm: null
    });
    const password = computed(() => member.password);
    const memberRules = {
      fullName: { required },
      emailAddress: { required, email },
      password: { required },
      confirm: { required, equalTo: sameAs(password) }
    };

    function requiredFieldValidator(validator, field) {
      const obj = unref(validator)[field];

      return computed(() => ({
        hasError: unref(obj.$error),
        messages: { required: obj.required.$message },
        dirty: unref(obj.$dirty),
        validators: {
          required: unref(obj.required.$invalid)
        }
      }));
    }

    function emailFieldValidator(validator) {
      const obj = unref(validator)['emailAddress'];

      return computed(() => ({
        hasError: unref(obj.$error),
        messages: {
          required: obj.required.$message,
          email: 'Email address format is invalid.'
        },
        dirty: unref(obj.$dirty),
        validators: {
          required: unref(obj.required.$invalid),
          email: unref(obj.email.$invalid)
        }
      }));
    }

    function confirmPasswordValidator(validator) {
      const obj = unref(validator)['confirm'];

      return computed(() => ({
        hasError: unref(obj.$error),
        messages: {
          required: obj.required.$message,
          equalTo: "Password doesn't match."
        },
        dirty: unref(obj.$dirty),
        validators: {
          required: unref(obj.required.$invalid),
          equalTo: unref(obj.equalTo.$invalid)
        }
      }));
    }

    const v$ = useVuelidate(memberRules, member);
    const fullnameValidator = requiredFieldValidator(v$, 'fullName');
    const passwordValidator = requiredFieldValidator(v$, 'password');
    const confirmValidator = confirmPasswordValidator(v$);
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
      member,
      loading,
      emailValidator,
      fullnameValidator,
      passwordValidator,
      confirmValidator,
      submit
    };
  }
});

app.mount('#app');
