<template>
  <div class="d-flex justify-content-center">
    <form id="login-form">
      <h3>Welcome to Gadget Store</h3><br>
      <h2>Login</h2>
      <div class="mb-3 ">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
      </div>
      <div class=" mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="password">
      </div>
      <div class="to-register-page" id="toRegister" style="cursor: pointer;">
        <a>Click here to create account</a>
      </div><br>
      <button type="submit" class="btn btn-primary">Submit</button><br><br>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </form>
  </div>
</template>
<script>
export default {
}
</script>
