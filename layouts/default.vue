<template>
    <div>
        <header>
            <!-- navigation -->
            <nav>
                <h1 class="logo">Shop list item</h1>
                <nuxt-link to="/">หน้าแรก</nuxt-link>
                <nuxt-link to="/about">เกี่ยวกับเรา </nuxt-link>
                <nuxt-link to="/products">สินค้าทั้งหมด</nuxt-link>
            </nav>
        </header>

        <div>
           <!-- เนื้อหาแต่ละหน้าหน้า🌈🥰 -->
            <slot/>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
nav {
    display: flex;
    margin: 10px auto;
    padding: 10px 0;
    justify-content: center;
    align-items: center;
    background: #333;
}

nav a {
    margin-left: 10px;
    color: white;
    text-decoration: none;
    font: 20px;
    padding: 10px;
}

nav a:hover {
    color: orange;
}

.logo {
    color: white;
    margin-right: auto;
    padding-left: 10px;
}
</style>