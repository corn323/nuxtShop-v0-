import { defineStore } from 'pinia'

interface Product {
  id: number;
  name: string;
  price: number;
}

export const useMainStore = defineStore('main', {
  state: () => ({
    cart: [] as Product[],
    token: null as string | null,
  }),
  actions: {
    addToCart(product: Product) {
      this.cart.push(product)
    },
    removeFromCart(productId: number) {
      this.cart = this.cart.filter(item => item.id !== productId)
    },
    setToken(token: string) {
      this.token = token
    },
    clearToken() {
      this.token = null
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    cartTotal: (state) => state.cart.reduce((total, item) => total + item.price, 0),
  },
})

