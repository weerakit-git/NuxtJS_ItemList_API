<template>
    <div class="container">
        <div v-for="product in filteredProducts" :key="product.id">
            <nuxt-link :to="`/products/${product.id}`">
                <h3 class="title">{{product.title}}</h3>
                <img :src=product.thumbnail>   
            </nuxt-link>
                    
        </div>
    </div>
</template>

<script setup>
useHead({
title:"Shop | สินค้าทั้งหหมด",
meta:[{
    name:"decription",
    content:"รายละเอียดสินค้าทั้งหมด"
}]
})
// ดึงข้อมูลทั้งหมด
const { data } = await useFetch('https://dummyjson.com/products?limit=10')
const filteredProducts = data.value.products.filter(product=>product.id !==6 && product.id !==9)


</script>

<style  scoped>
.container{
    display: flex;
    flex-wrap: wrap;
   justify-content: center;
}
.container div{
 width:300px;
 height: 300px;
 background: #333;
 margin: 30px 15px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
}
.container div:hover{
    background: red;
}
.title{
    color: white;
    text-align: center;
    font-size: 1.2em;
}
a{
    text-decoration: none;
}
img{
    width: auto;
    height: 200px;

}

</style>