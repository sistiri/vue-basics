<script setup>
import { ref, reactive } from 'vue'
import InputField1 from './components/InputField1.vue'
import InputField2 from './components/InputField2.vue'

const email1 = ref('')
const email2 = ref('example@gmail.com')
const formData = reactive({
  email: '',
  firstName: '',
  lastName: ''
})

function updateEmail(value) {
  email1.value = value
  console.log(email1.value)
}

function submitForm() {
  console.log(JSON.stringify(formData))
}
</script>

<template>
  <div>
    <h2>InputField1</h2>
    <InputField1
      id="email"
      name="email"
      type="email"
      label="E-mail address"
      @on-input="updateEmail"
    />
    <hr />
    <hr />
  </div>
  <div>
    <h2>InputField2 - - Events with Props</h2>
    <InputField2 id="email2" v-model="email2" name="email2" type="email" label="E-mail address 2" />
    {{ email2 }}
    <hr />
    <hr />
  </div>
  <div>
    <InputField2
      id="formDataEmail"
      v-model="formData.email"
      name="formDataEmail"
      type="email"
      label="E-mail:"
    />
    <InputField2
      id="formDataFirstName"
      v-model="formData.firstName"
      name="formDataFirstName"
      type="text"
      label="First Name:"
    />
    <InputField2
      id="formDataLastName"
      v-model="formData.lastName"
      name="formDataLastName"
      type="text"
      label="Last Name:"
    />
    <button @click="submitForm">Submit</button>
  </div>
</template>

<style scoped></style>
