<template>
  <img src="../assets/rest-logo.jpg" alt="logo" class="logo-img ">
  <h1>Sign Up</h1>
  <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name ">
        <input type="email" v-model="email" placeholder="Enter Email ">
        <input type="password" v-model="password" placeholder="Enter Password ">
        <button class="btn" v-on:click="SignUp" >Sign Up</button>

        <p>
          <router-link :to="{name:'login'}">Login</router-link>
        </p>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      name:'',
      email:'',
      password:'',
    }
  },
  methods:{
    async SignUp(){
      let result = await axios.post("http://localhost:3000/user",{
        name:this.name,
        email:this.email,
        password:this.password
      })
      // console.log(result)
      if(result.status==201){
        alert("Sign Up complete")
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push('/')
      }else{
        alert("Something Went Wrong")
      }
    }
  }
 
  
}
</script>

<style>

.logo-img{
  width: 100px;
}

.register input{
 width: 250px;
 padding: 10px;
 margin: 10px auto;
 display: block;
 border: 1px solid skyblue;
}

.register button{
  width: 250px;
  padding: 10px;
  background: black;
  color: white;
  font-size: 14px;
  border: 0px;
}

.register button:hover{
  background: skyblue;
  color: white;
}

</style>