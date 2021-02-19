import Vue from 'vue'
import Vuex from 'vuex'
import axiosInit from '../api/axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    products: [],
    isLogin: false
  },
  mutations: {
    CHANGEISLOGIN (state, payload) {
      state.isLogin = payload
    },
    CHANGEPRODUCTS (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      // axiosInit({})
      return axiosInit({
        url: 'users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      // cara 1
      // .then(response => {
      //   console.log(response.data)
      //   localStorage.setItem('access_token',response.data.access_token)
      // })
      // .catch(err => {
      //   console.log(err.response)
      // })
      // console.log('trigger login')
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
          // console.log(response.data)
          context.commit('CHANGEPRODUCTS', response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
