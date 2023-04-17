const app = Vue.createApp({
  setup() {
    const title1 = 'Long Live Vue'
    const title2 = 'Vue For President'
    return {
      title1,
      title2,
    }
  },
})

app.mount('#app')
