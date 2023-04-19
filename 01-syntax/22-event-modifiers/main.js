const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const name = ref('')
    const email = ref('')

    // function handleSubmit(event) {
    function handleSubmit() {
      // event.preventDefault()
      console.log(`name: ${name.value}, email: ${email.value}`)
    }

    return {
      name,
      email,
      handleSubmit
     
    }
  },
})

app.mount('#app')
