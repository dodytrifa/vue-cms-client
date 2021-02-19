<template>
<div class='m-3 col-3 p-2 border-0'>
  <div class="m-3 card" style="width: 18rem;">
  <img :src="product.image_url" class="card-img-top" alt="image">
  <!-- {{product.name}} -->
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">Rp. {{product.price}}</p>
    <p class="card-text">Stock: {{product.stock}}</p>
    <div>
    <button @click='toEdit' type='button' class="m-2 btn btn-sm btn-outline-primary rounded-pill">Edit</button>
    <button type='button' class="m-2 btn btn-sm btn-outline-danger rounded-pill">Delete</button>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    toEdit () {
      this.$router.push('/products/' + this.product.id)
    }
  }
}
</script>

<style>

</style>
