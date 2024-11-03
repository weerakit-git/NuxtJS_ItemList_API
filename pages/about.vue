<template>
    <div class="container">
    <h1>เกี่ยวกับเรา</h1>
    <span>
        I'am Weerakit Form 🏫 KU.csc <br>
        🎓 Mojor computer science
    </span>
    <img src="/public/image/XL.jpeg" alt="">
    </div>
</template>

<script setup>
useHead({
    title:"Shop | เกี่ยวกับเรา",
    meta:[{
        name:"decription",
        content:"รายละเอียดของเรา"
    }]
})

</script>

<style  scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
img{
    padding: 10px;
}
h1{
    margin: 0;
}

</style>