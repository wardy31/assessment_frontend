import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import CreateAccount from '../views/CreateAccount.vue'
import User from '../views/user/IndexView.vue'
import Dashboard from '../views/user/components/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/create-account',
    name: 'CreateAccount',
    component:CreateAccount 
  },
  {
    path:'/user',
    name:"User",
    component:User,
    children:[
      {
        path:'',
        component:Dashboard
      },
      {
        path:'dashboard',
        component:Dashboard
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
