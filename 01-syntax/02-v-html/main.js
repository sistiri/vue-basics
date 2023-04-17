const app = Vue.createApp({
  setup() {
    const title = '<span style="color: #42b883">Vue.Js</span>'
    return {
      title,
    }
    }
  })

app.mount('#app')
