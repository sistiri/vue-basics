const { createApp, ref, computed } = Vue

// const app = Vue.createApp({
const app = createApp({
  setup() {
    const price = ref(0)
    
    function increasePrice() {
      price.value++
    }
    
    function decreasePrice() {
      price.value--
    }

    // function formattedPrice() {
    //   return price.value.toLocaleString('en-US', {
    //     style: 'currency',
    //     currency: 'EUR',
    //   })
    // }
    
    const formattedPrice = computed(() =>
      price.value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'EUR',
      })
    )


    return {
      price, increasePrice, decreasePrice, formattedPrice
    }
  }
})

app.mount('#app')
