<template>
<div class="p-20 container">
  <div class="d-flex justify-content-center">
        <form @submit.prevent='submitEdit' id="edit-form">
      <h3>Edit Product Form</h3><br>
            <div class="mb-3 ">
              <label class="form-label">Product name</label>
              <input v-model='name' type="text" class="form-control" aria-describedby="emailHelp">
            </div>
            <div class="mb-3 ">
              <label class="form-label">Product image-url</label>
              <input v-model='image_url' type="text" class="form-control" aria-describedby="emailHelp">
            </div>
            <div class="mb-3 ">
              <label class="form-label">Product price</label>
              <input v-model='price' type="text" class="form-control" aria-describedby="emailHelp">
            </div>
            <div class="mb-3 ">
              <label class="form-label">Product stock</label>
              <input v-model='stock' type="text" class="form-control" aria-describedby="emailHelp">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button><br><br>
            <button @click='undoEdit' type="submit" class="btn btn-secondary">Back To Previous Page</button><br><br>
          </form>
      </div>
</div>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    undoEdit () {
      this.$router.push('/products')
    },
    submitEdit () {
      this.$store.dispatch('updateProduct', {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        id: this.$route.params.id
      })
      this.$router.push('/products')
    }
  },
  computed: {
    productResult () {
      return this.$store.state.product
    }
  },
  created () {
    this.$store.dispatch('getOneProduct', this.$route.params.id)
      .then(response => {
        const productResult = response.data
        this.name = productResult.name
        this.image_url = productResult.image_url
        this.price = productResult.price
        this.stock = productResult.stock
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>
