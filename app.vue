<template>
  <v-app>
    <v-app-bar app>
      <ThemeToggle />
      <v-btn to="/" text>首頁</v-btn>
      <v-spacer />
      <v-toolbar-title>
        我的標題我的標題
      </v-toolbar-title>
      <v-btn to="/cart" text>購物車</v-btn>
      <v-btn to="/userVerify" v-if="!isLoggedIn" text>登入/註冊</v-btn>
      <v-btn to="/profile" v-if="isLoggedIn" text>個人資料</v-btn>
      <v-btn @click="logout" v-if="isLoggedIn" text>登出</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>

    <v-footer app style="justify-content: center;">
      © 2023-{{ new Date().getFullYear() }}&nbsp;
      <a href="https://web.corn323.com" class="footer-link">玉米製作</a>
    </v-footer>
  </v-app>
</template>

<style scoped>
.footer-link {
  text-decoration: none;
  color: inherit;
}

.v-footer {
  background-color: var(--v-background-base);
  color: var(--v-text-base);
}
</style>

<script setup>
import { computed } from 'vue'
import { useMainStore } from '~/stores/main'
import ThemeToggle from '~/components/ThemeToggle.vue'
import { useTheme } from 'vuetify';

const store = useMainStore()
const theme = useTheme()
const isLoggedIn = computed(() => store.isLoggedIn)

const logout = () => {
  store.clearToken()
}
</script>
