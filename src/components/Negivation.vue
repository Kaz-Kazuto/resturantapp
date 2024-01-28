<template>
  <div class="nav">
    <router-link :to="{name:'home'}">Home</router-link>
    <router-link :to="{name:'add'}">Add Resturant</router-link>
    <router-link :to="{name:'update'}">Update Resturant</router-link>
    <a href="#" v-on:click="logout">Logout</a>
    <router-view />
  </div>
</template>

<script>
export default {
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'login'})
        }
    }
}
</script>

<style>
.nav{
    background: cyan;
    overflow: hidden;
}

.nav a{
    float: left;
    padding: 14px 14px;
    text-align: center;
    color: black;
    text-decoration: none;
    font-size: 17px;
    margin-right: 5px;
}

.nav a:hover{
    background: black;
    color: white;
}
</style>