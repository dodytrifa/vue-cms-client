<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div> -->
    <router-view />
    <Products v-if='showModal' @showModal='isShowModal'></Products>
  </div>
</template>
<script>
import Products from './views/Products.vue'
export default {
  data () {
    return {
      showModal: false
    }
  },
  components: {
    Products
  },
  computed: {
  },
  methods: {
    isShowModal (value) {
      this.showModal = value
    }
  },
  created () {
    // console.log(this.$store.state)
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
