const app = Vue.createApp({
  setup() {
    const frameworks = [
      ['Vue', 'React', 'Angular'],
      ['Laravel', 'Symfony', 'Yill'],
      ['Flask', 'Django', 'FastAPI'],
    ]
    return {
      frameworks,
    }
  },
})

app.mount('#app')
