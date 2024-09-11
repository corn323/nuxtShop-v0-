<template>
  <div>
    <h1 class="text-h4 mb-4">購物車</h1>
    <v-list v-if="cart.length > 0">
      <v-list-item v-for="item in cart" :key="item.id">
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>
            價格: ${{ item.price }} | 數量: {{ item.quantity }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="removeFromCart(item.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-alert v-else type="info">購物車是空的</v-alert>
    <v-divider class="my-4"></v-divider>
    <p class="text-h6">總計: ${{ cartTotal }}</p>
    <v-btn color="primary" @click="checkout" :disabled="!isLoggedIn || cart.length === 0" style="background-color: #969696;">
      確定購買
    </v-btn>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMainStore } from '~/stores/main'

const store = useMainStore()

const cart = computed(() => store.cart)
const cartTotal = computed(() => store.cartTotal)
const isLoggedIn = computed(() => store.isLoggedIn)

const removeFromCart = (productId) => {
  store.removeFromCart(productId)
}

const checkout = () => {
  console.log('Checkout with token:', store.token)
  store.clearCart()

  navigateTo('/order-confirmation')
}
</script>