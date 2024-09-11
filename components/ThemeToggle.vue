<template>
    <v-btn icon @click="toggleTheme">
      <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import { useTheme } from 'vuetify'
  
  const theme = useTheme()
  const isDark = ref(theme.global.current.value.dark)
  
  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
  
  onMounted(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.global.name.value = prefersDark ? 'dark' : 'light'
  })
  
  watch(() => theme.global.name.value, (newTheme) => {
    isDark.value = newTheme === 'dark'
  })
  </script>