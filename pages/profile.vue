<template>
    <div>
      <h1 class="text-h4 mb-4">個人資料</h1>
      <v-form @submit.prevent="updateProfile" v-model="isFormValid">
        <v-text-field
          v-model="email"
          label="電子郵件"
          type="email"
          required
          :rules="[v => !!v || '請輸入電子郵件', v => /.+@.+\..+/.test(v) || '請輸入有效的電子郵件']"
        ></v-text-field>
        <v-text-field
          v-model="phone"
          label="連絡電話"
          type="tel"
          required
          :rules="[v => !!v || '請輸入連絡電話']"
        ></v-text-field>
        <v-textarea
          v-model="address"
          label="地址"
          required
          :rules="[v => !!v || '請輸入地址']"
        ></v-textarea>
        <v-btn type="submit" color="primary" :disabled="!isFormValid">更新資料</v-btn>
      </v-form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useMainStore } from '~/stores/main'
  
  const store = useMainStore()
  
  const email = ref('')
  const phone = ref('')
  const address = ref('')
  const isFormValid = ref(false)
  
  onMounted(async () => {
    const userData = await store.getUserProfile()
    email.value = userData.email
    phone.value = userData.phone
    address.value = userData.address
  })
  
  const updateProfile = async () => {
    try {
      await store.updateProfile({
        email: email.value,
        phone: phone.value,
        address: address.value,
      })
    } catch (error) {
      console.error('更新資料失敗:', error)
    }
  }
  </script>