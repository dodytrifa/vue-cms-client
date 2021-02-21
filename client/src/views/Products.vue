<template>
<div>
    <nav class="navbar navbar-light bg-info">
      <div class="container">
        <h1 class="navbar-brand">Gadget Store</h1>
        <button
        @click='toAdd'
          class="btn btn-success rounded-pill"
          type="button"
        >
          Add Product
        </button>
        <button
          @click.prevent="logout"
          class="margin-right-20 btn btn-danger rounded-pill"
          type="button"
        >
          Logout
        </button>
      </div>
    </nav>
  <div class="column container">
    <div class="row">
    <product-card v-for='product in products' :key='product.id' :product='product'/>
    </div>
  </div>
</div>
</template>
<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Products',
  components: {
    ProductCard
  },
  methods: {
    toAdd () {
      this.$router.push('/addproduct')
    },
    logout () {
      localStorage.clear()
      this.$store.commit('CHANGEISLOGIN', false)
      this.$router.push('/')
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style scoped>

</style>
