<template>
  <Negivation></Negivation>
<h1>Add a Resturant Here</h1>
<form @submit.prevent="addresturant" class="register">
  <input type="text" name="name" v-model="resturant.name" placeholder="Enter Resturant Name">
  <input type="text" name="address" v-model="resturant.address" placeholder="Enter Resurant Address">
  <input type="text" name="contact" v-model="resturant.contact" placeholder="Enter Resturant phone Number">
  <button>Add Resturant</button>
</form>
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
      resturant:{
        name:'',
      address:'',
      contact:''
      }
    }
  },

  methods:{
     addresturant(){
   fetch("http://localhost:3000/resturant",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(
        {
          name:this.resturant.name,
          address:this.resturant.address,
          contact:this.resturant.contact
        }
      )
     })
     .then(()=>{
     this.$router.push('/')
     }).catch((err)=>{
      console.log(err)
     })
     
    }
  },
  mounted(){
    let user = localStorage.getItem('user-info')
    if(!user){
      this.$router.push({name:"SignUp"})
    }
  }
}
</script>
