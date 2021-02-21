import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import EditForm from '../views/EditForm.vue'
import AddForm from '../views/AddForm.vue'
import LoginForm from '../views/LoginForm.vue'
Vue.use(VueRouter)

const navGuard = (to, from, next) => {
  const accessToken = localStorage.getItem('access_token')
  if (to.name === 'Login Form' && accessToken) {
    next({ name: 'Products' })
  } else if (to.name !== 'Login Form' && !accessToken) {
    next({ name: 'Login Form' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Login Form',
    component: LoginForm,
    beforeEnter: navGuard
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    beforeEnter: navGuard
  },
  {
    path: '/products/:id',
    component: EditForm,
    beforeEnter: navGuard
  },
  {
    path: '/addproduct',
    component: AddForm,
    beforeEnter: navGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
