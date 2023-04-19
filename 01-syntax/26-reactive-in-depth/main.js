const { createApp, reactive, ref, toRef, toRefs } = Vue

const app = createApp({
  setup() {
    const userForm = ref()
    const formData = reactive({
      name: '',
      email: '',
    })

    // NOT VALID
    // formData = { name: 'Max Ractive', email: 'max@reactive.com' }
    
    // VALID
    formData.name = 'Maximus Reactive'

    // VALID BUT NOT REACTIVE
    // const name = formData.name
    // const email = formData.email

    // VAILD, REACTIVE, UGLY
    // const name = ref(formData.name)
    // const email = ref(formData.email)

    // NOT VALID
    // const name = reactive(formData.name)
    // const email = reactive(formData.email)

    // VALID, REACTIVE, UGLY, UPDATED
    // const name = toRef(formData, 'name')
    // const email = toRef(formData, 'email')


     const { name, email } = toRefs(formData)

    function handleSubmit() {
      console.log(formData)
      userForm.value.reset()
    }

    return {
      name,
      email,
      userForm,
      handleSubmit,
    }
  },
})

app.mount('#app')
