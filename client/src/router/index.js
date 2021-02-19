import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Products from '../views/Products.vue'
import EditForm from '../views/EditForm.vue'
import AddForm from '../views/AddForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    // component: 'Products'
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/products/:id',
    component: EditForm
  },
  {
    path: '/addproduct',
    component: AddForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
