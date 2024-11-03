<template>
    <div class="container">
        <h1>หน้าแรกข้อเว็บไซต์</h1>
        <img src="/public/image/woman-shoping-with-credit-card-cart_71003-126.avif" alt="">
    </div>
</template>

<script setup>
useHead({
    title:"Shop | หน้าแรกเว็บไซต์",
    meta:[{ name:"decription",content:"ร้านขายของทั่วไป" }]
})
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>