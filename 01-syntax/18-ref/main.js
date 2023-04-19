const { createApp, ref } = Vue

// const app = Vue.createApp({
const app = createApp({
  setup() {
    // const counter = 0
    // const counter = Vue.ref(0)
    const counter = ref(0)
    
    function increaseCounter() {
      // counter++
      counter.value++
      console.log(counter, counter.value)
    }
    
    function decreaseCounter() {
      // counter--
      counter.value--
      console.log(counter, counter.value)
    }
    return {
      counter, increaseCounter, decreaseCounter
    }
  }
})

app.mount('#app')
