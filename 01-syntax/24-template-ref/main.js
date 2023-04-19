const { createApp, ref, reactive } = Vue

const app = createApp({
  setup() {

    const userForm = ref()
    const formData = reactive({
      name: '',
      email: '',
    })

    function handleSubmit() {
      console.log(formData)
      // document.querySelector('#userForm').reset()
      userForm.value.reset()
    }

    return {
      userForm,
      formData,
      handleSubmit,
    }
  },
})

app.mount('#app')
