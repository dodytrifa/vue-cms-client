<template>
  <div class="d-flex justify-content-center">
    <form @submit.prevent='submitLogin' id="login-form">
      <h3>Welcome to Gadget Store</h3><br>
      <h2>Login</h2>
      <div class="mb-3 ">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
      </div>
      <div class=" mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model ="password" type="password" class="form-control" id="password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button><br><br>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitLogin () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          console.log(response.data)
          localStorage.setItem('access_token', response.data.access_token)
          this.$store.commit('CHANGEISLOGIN', true)
          this.$router.push('/products')
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
