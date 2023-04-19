const { createApp, ref } = Vue

const app = createApp({
  setup() {
    // const name1 = ref('')
    const name2 = ref('')

    // function handleName1Change(event) {
    //   name1.value = event.target.value
    // }

    return {
      // name1,
      name2,
      // handleName1Change,
    }
  },
})

app.mount('#app')
