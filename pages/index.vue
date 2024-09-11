<template>
  <div>
    <h1 class="text-h4 mb-4">產品列表</h1>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="3">
        <v-card>
          <v-img :src="product.imageUrl" height="200px" cover></v-img>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-text>
            <p>{{ product.description }}</p>
            <p>價格: ${{ product.price }}</p>
            <p>庫存: {{ product.stock }}</p>
            <v-text-field v-model="product.quantity" type="number" label="購買數量" min="1" :max="product.stock"
              @input="updateQuantity(product)" :class="textFieldClass"></v-text-field>

          </v-card-text>
          <v-card-actions>
            <v-btn color="white" @click="addToCart(product)" :disabled="product.quantity < 1"
              style="background-color: #969696;">
              加入購物車
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.custom-text-field input {
  color: black;
}

.custom-text-field .v-label {
  color: rgba(0, 0, 0, 0.6);
}

.custom-text-field input:focus {
  border-color: #969696;
}

.dark-text-field input {
  color: white;
}

.light-text-field input {
  color: black;
}
</style>


<script setup>
import { ref } from 'vue'
import { useMainStore } from '~/stores/main'

const store = useMainStore()

const isDarkTheme = ref(false) 

const textFieldClass = computed(() => {
  return isDarkTheme.value ? 'dark-text-field' : 'light-text-field'
})


const products = ref([
  {
    id: 1,
    name: '產品 1',
    description: '這是產品 1 的描述',
    price: 19.99,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  }, {
    id: 1,
    name: '產品 1',
    description: '這是產品 1 的描述',
    price: 19.99,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  }, {
    id: 1,
    name: '產品 1',
    description: '這是產品 1 的描述',
    price: 19.99,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  }, {
    id: 1,
    name: '產品 1',
    description: '這是產品 1 的描述',
    price: 19.99,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  }, {
    id: 1,
    name: '產品 1',
    description: '這是產品 1 的描述',
    price: 19.99,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  }, {
    id: 1,
    name: '產品 1',
    description: '這是產品 1 的描述',
    price: 19.99,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  }, {
    id: 1,
    name: '產品 1',
    description: '這是產品 1 的描述',
    price: 19.99,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  }, {
    id: 1,
    name: '產品 1',
    description: '這是產品 1 的描述',
    price: 19.99,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  }, {
    id: 1,
    name: '產品 1',
    description: '這是產品 1 的描述',
    price: 19.99,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  }, {
    id: 1,
    name: '產品 1',
    description: '這是產品 1 的描述',
    price: 19.99,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  }, {
    id: 1,
    name: '產品 1',
    description: '這是產品 1 的描述',
    price: 19.99,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  }, {
    id: 1,
    name: '產品 1',
    description: '這是產品 1 的描述',
    price: 19.99,
    stock: 10,
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  },
])

const updateQuantity = (product) => {
  product.quantity = Math.max(1, Math.min(product.quantity, product.stock))
}

const addToCart = (product) => {
  store.addToCart({
    ...product,
    quantity: product.quantity,
  })
}
</script>