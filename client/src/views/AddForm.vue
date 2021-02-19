<template>
<div class="p-20">
  <div class="d-flex justify-content-center">
        <form id="add-form">
      <h3>Add Product Form</h3><br>
            <div class="mb-3 ">
              <label class="form-label">Product name</label>
              <input type="text" class="form-control" aria-describedby="emailHelp">
            </div>
            <div class="mb-3 ">
              <label class="form-label">Product image-url</label>
              <input type="text" class="form-control" aria-describedby="emailHelp">
            </div>
            <div class="mb-3 ">
              <label class="form-label">Product stock</label>
              <input type="text" class="form-control" aria-describedby="emailHelp">
            </div>
            <div class="mb-3 ">
              <label class="form-label">Product Price</label>
              <input type="text" class="form-control" aria-describedby="emailHelp">
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
  methods: {
    undoAdd () {
      this.$router.push('/products')
    }
  }
}
</script>

<style>

</style>
