const app = Vue.createApp({
  setup() {
    const message = 'Vue is sooo coool!'
    return {
      message, 
    }
  }
})

app.mount('#app')