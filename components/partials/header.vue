<template>
    <div class="flex justify-between items-center py-4 px-6 bg-black text-white">
      <div class="text-xl font-bold tracking-widest hover:text-pink-400 transition">
        <a href="/">
           SHOP
        </a>
      </div>
   

      <button @click="isMenuOpen = !isMenuOpen" class="xl:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div v-if="isMenuOpen"
      class="fixed top-0 left-0 w-full h-full z-50 bg-black/90 backdrop-blur-sm p-6 text-white uppercase flex flex-col gap-6">
      <div class="flex justify-between items-center">
        <span class="text-xl font-bold">
            <a href="/">
                SHOP
            </a>
      
        </span>
        <button @click="isMenuOpen = false" class="text-3xl hover:text-red-400 transition">&times;</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const isMenuOpen = ref(false)

  </script>
  