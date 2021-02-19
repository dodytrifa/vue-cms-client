import Vue from 'vue'
import Vuex from 'vuex'
import axiosInit from '../api/axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    products: [],
    isLogin: false,
    product: {}
  },
  mutations: {
    CHANGEISLOGIN (state, payload) {
      state.isLogin = payload
    },
    CHANGEPRODUCTS (state, payload) {
      state.products = payload
    },
    EDITONEPRODUCT (state, payload) {
      state.product = payload
    }
  },
  actions: {
    login (context, payload) {
      return axiosInit({
        url: 'users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    getProducts (context, payload) {
      axiosInit({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('CHANGEPRODUCTS', response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    updateProduct (context, payload) {
      axiosInit({
        url: '/products/' + payload.id,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(response => {
          context.dispatch('getProducts')
          console.log(response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addProduct (context, payload) {
      return axiosInit({
        url: '/products',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    getOneProduct (context, payload) {
      return axiosInit({
        url: '/products/' + payload,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    destroyProduct (context, payload) {
      axiosInit({
        url: '/products/' + payload,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data)
          console.log(response.data.message)
          context.dispatch('getProducts')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
