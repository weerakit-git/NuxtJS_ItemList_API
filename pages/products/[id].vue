<template>
    <div>
        <Head>
            <Title>Shop | {{product.title}}</Title>
            <Meta name="decription" :content="product.description"/>
        </Head>
         <div class="container" v-if="product">
            <img  :src=product.thumbnail> 
            <div class="detail">
            <p><b>Name :</b>{{product.title}}</p>
            <p><b>Category :</b> {{product.category}}</p>
            <p><b>Brand :</b> {{product.brand}}</p>
            <p><b>Price :</b> ${{product.price}}</p>
            <p><b>Description :</b> {{product.description}}</p>
            </div>
         </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const { id } = useRoute().params
const product = ref(null)

const { data } = await useFetch(`https://dummyjson.com/products/${id}`)
product.value= data.value
</script>

<style  scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   
}
.detail{
    background: #333;
    color: white;
    padding: 20px;
}
img{
    height: 300px;
}
</style>