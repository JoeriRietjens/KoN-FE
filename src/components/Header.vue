<template>
    <header class="header"> 
        <h1>Koffie of nie!!</h1>
        <div id="nav">
            <router-link to="/">Place order</router-link>| 
            <router-link to="/Overview">Order overview</router-link>
        </div>
    </header>
</template>


<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.header{
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
}

.header a{
    color: #fff !important;
    padding-right: 5px;
    text-decoration: none;
    font-family:Arial, Helvetica, sans-serif;
}
</style>