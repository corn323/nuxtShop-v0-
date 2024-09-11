<template>
    <v-app>
      <v-app-bar app>
        <v-toolbar-title>My Shop</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="/cart" text>Cart</v-btn>
        <v-btn to="/login" text>Login</v-btn>
      </v-app-bar>
  
      <v-main>
        <v-container>
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  </script>