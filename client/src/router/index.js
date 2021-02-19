import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import EditForm from '../views/EditForm.vue'
import AddForm from '../views/AddForm.vue'
import LoginForm from '../views/LoginForm.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login Form',
    component: LoginForm
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
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
