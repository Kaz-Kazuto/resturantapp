import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import Add from '../views/Add.vue'
import Update from '../components/Update.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Sign-Up',
    name: 'SignUp',
    component: SignUpView
  },
  {
    path:'/Login',
    name: 'login',
    component: LoginView
  },
  {
    path:'/add',
    name: 'add',
    component: Add
  },
  {
    path:'/update/id',
    name: 'update',
    component: Update
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
