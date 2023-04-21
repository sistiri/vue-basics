<script setup>
import { ref } from 'vue'

defineEmits(['on-focus', 'on-input'])

const name = ref('')
</script>

<template>
  <div>
    <label for="name">Name:</label>
    <input type="text" placeholder="on-focus" name="name" @click="$emit('on-focus')" />
  </div>
  <div>
    <label for="email">Email:</label>
    <input
      v-model="name"
      type="text"
      placeholder="on-input"
      name="email"
      @input="$emit('on-input', name)"
    />
  </div>
</template>

<style scoped></style>
