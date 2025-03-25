<template>
 
     <div class="bg-gradient-to-b from-white to-pink-50"> 
  <div class="min-h-screen  py-10 px-6">
    <div v-if="product" class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white shadow-md rounded-xl p-8">
      <img :src="product.thumbnail" alt="Product" class="w-80 h-auto object-contain rounded-lg shadow" />
      <div class="text-gray-800 space-y-4 text-base md:text-lg">
        <p><span class="font-semibold">Name:</span> {{ product.title }}</p>
        <p><span class="font-semibold">Category:</span> {{ product.category }}</p>
        <p><span class="font-semibold">Brand:</span> {{ product.brand }}</p>
        <p><span class="font-semibold text-pink-600 text-xl">Price:</span> ${{ product.price }}</p>
        <p>
          <span class="font-semibold">Description:</span>
          <span class="block mt-1 text-gray-600 leading-relaxed">{{ product.description }}</span>
        </p>
        <button class="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
          Add to Cart 🛒
        </button>
      </div>
    </div>
  </div>


</div>
</template>

<script setup>
import { ref } from 'vue'

const { id } = useRoute().params
const product = ref(null)

const { data } = await useFetch(`https://dummyjson.com/products/${id}`)
product.value = data.value
</script>
