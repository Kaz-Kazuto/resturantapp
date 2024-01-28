<template>
  <Negivation></Negivation>
<h1>Hello User Welcome to our home Page</h1>
 <table border="1">
  <tr>
    <td>ID</td>
    <td>Name</td>
    <td>Contact</td>
    <td>Address</td>
    <td>Action</td>
  </tr>
  <tr v-for="item in resturant" :key="item.id">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.contact }}</td>
    <td>{{ item.address }}</td>
    <td><router-link :to="'/update/'+item.id">Update</router-link></td>
  </tr>
 </table>
</template>

<script>
import Negivation from '../components/Negivation'
// @ is an alias to /src
import SignUp from '@/components/SignUp.vue';
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    Negivation,
   
  },
  data(){
    return{
      resturant:[]
    }
  },
 async mounted(){
    let user = localStorage.getItem('user-info')
    if(!user){
      this.$router.push({name:"SignUp"})
    }
    let result = await axios.get('http://localhost:3000/resturant')
    this.resturant=result.data



  }
}
</script>
<style>
td{
  width: 160px;
  height: 40px;
  padding: 10px;
}
</style>