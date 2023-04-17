const app = Vue.createApp({
  setup() {
    const logo = {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      alt: 'Vue.js',
      title: 'Vue Forever',
      width: 40,
    }
    const src =
      'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
    const alt = 'Vue.js'
    const width = 60
    const title = 'Vue For President'
    return {
      src, alt, width, title, logo
    }
  },
})

app.mount('#app')
