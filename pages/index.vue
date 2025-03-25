<template>
    <div class="container mx-auto px-6 py-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="relative bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <!-- ปุ่มหัวใจ -->
          <button
  @click="toggleFavorite(product.id)"
  class="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition"
  :class="isFavorite(product.id) ? 'bg-pink-500' : 'bg-black/40 hover:bg-pink-500'"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    :fill="isFavorite(product.id) ? 'white' : 'none'"
    stroke="white"
    stroke-width="2"
    class="w-5 h-5">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
  </svg>
</button>
  
          <!-- เนื้อหา -->
          <nuxt-link :to="`/products/${product.id}`">
            <img :src="product.thumbnail" class="w-full h-48 object-contain mb-3 rounded"  alt="product"/>
            <h3 class="text-lg font-semibold">{{ product.title }}</h3>
            <p class="text-pink-600 font-bold">${{ product.price }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </template>
  

<script setup>
useHead({
    title: "Shop | สินค้าทั้งหหมด",
    meta: [{
        name: "decription",
        content: "รายละเอียดสินค้าทั้งหมด"
    }]
})

const { data } = await useFetch('https://dummyjson.com/products?limit=40')
const filteredProducts = data.value.products.filter(product => product.id !== 6 && product.id !== 9 && product.id !== 19)


const favorites = ref([])

function toggleFavorite(id) {
  if (favorites.value.includes(id)) {
    favorites.value = favorites.value.filter(item => item !== id)
  } else {
    favorites.value.push(id)
  }
}

function isFavorite(id) {
  return favorites.value.includes(id)
}


</script>
