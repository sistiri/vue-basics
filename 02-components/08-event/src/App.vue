<script setup>
import InputField from './components/InputField.vue';

function alertMessage() {
  alert('Input 1 is focused')
}

function logMessage(name) {
  console.log(name)
}

</script>

<template>
 <InputField @on-focus="alertMessage" @on-input="logMessage"/>
</template>

<style scoped>

</style>
