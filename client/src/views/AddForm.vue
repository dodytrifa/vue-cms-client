<template>
<div>
  <div class="d-flex justify-content-center">
        <form @submit.prevent='submitAdd' id="add-form">
      <h3>Add Product Form</h3><br>
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
            <button @click='undoAdd' type="submit" class="btn btn-secondary">Back To Previous Page</button><br><br>
          </form>
      </div>
</div>
</template>

<script>
export default {
  name: 'AddForm',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    undoAdd () {
      this.$router.push('/products')
    },
    submitAdd () {
      this.$store.dispatch('addProduct', {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      })
        .then(response => {
          this.$router.push('/products')
          console.log(response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style>

</style>
