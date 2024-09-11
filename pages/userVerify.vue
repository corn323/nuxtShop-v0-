<template>
  <div class="auth-container" style="top:-25vh;position: relative;">
    <div class="flip-card" :class="{ flipped: !isLogin }">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h1 class="text-h4 mb-4">登入帳號</h1>
          <v-form @submit.prevent="login" v-model="isFormValid">
            <v-text-field v-model="username" label="信箱" required></v-text-field>
            <v-text-field v-model="password" label="密碼" type="password" required></v-text-field>
            <v-btn type="submit" color="primary" :disabled="!isFormValid">登入</v-btn>
          </v-form>
        </div>

        <div class="flip-card-back">
          <h1 class="text-h4 mb-4">註冊帳號</h1>
          <v-form @submit.prevent="register" v-model="isFormValid">
            <v-text-field v-model="email" label="信箱" type="email" required
              :rules="[v => !!v || '請輸入電子郵件', v => /.+@.+\..+/.test(v) || '請輸入有效的電子郵件']"></v-text-field>
            <v-text-field v-model="password" label="密碼" type="password" required
              :rules="[v => !!v || '請輸入密碼', v => v.length >= 8 || '密碼長度至少為8個字符']"></v-text-field>
            <v-text-field v-model="confirmPassword" label="確認密碼" type="password" required
              :rules="[v => !!v || '請確認密碼', v => v === password || '密碼不匹配']"></v-text-field>
            <v-btn type="submit" color="primary" :disabled="!isFormValid">註冊</v-btn>
          </v-form>
        </div>
      </div>
    </div>

    <div class="switch-btn-container" style="top:-2vh;left:3vw;position: relative;">
      <v-btn color="secondary" @click="toggleForm">
        {{ isLogin ? '切換至註冊' : '切換至登入' }}
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from '~/stores/main'

const store = useMainStore()

const isLogin = ref(true)
const isFormValid = ref(false)

const username = ref('')
const password = ref('')

const email = ref('')
const confirmPassword = ref('')

const toggleForm = () => {
  isLogin.value = !isLogin.value
}

const login = async () => {
  try {
    const response = await fetch('登入API連結', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })

    if (response.ok) {
      const data = await response.json()
      store.setToken(data.token)
      navigateTo('/')
    } else {
      console.error('Login failed')
    }
  } catch (error) {
    console.error('Login error:', error)
  }
}

const register = async () => {
  try {
    const response = await fetch('註冊API連結', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })

    if (response.ok) {
      const data = await response.json()
      store.setToken(data.token)
      navigateTo('/')
    } else {
      console.error('Login failed')
    }
  } catch (error) {
    console.error('Login error:', error)
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.flip-card {
  background-color: transparent;
  width: 100%;
  max-width: 400px;
  height: auto;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  z-index: 2;
  transform: rotateY(0deg);
}

.flip-card-back {
  transform: rotateY(180deg);
  z-index: 1;
}

.switch-btn-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
