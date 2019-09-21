<template>
  <div>
    <NavBar></NavBar>
    <div class="container-fluid">
      <div class="loginSection float-right">
        <h1>Login</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <!-- //TODO: ADD support for logging in with google and facebook.
        <div class="form-group">
          <div class="dropdown-divider"></div>
          <div>
            <div class="google"><p>Login with google</p></div>
            <div class="facebook"><p>Login with facebook</p></div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
.loginSection {
  position: absolute;
  top: 50%;
  left: 80%;
  margin-top: -300px;
  margin-left: -200px;
  width: 500px;
  height: 500px;
  padding: 25px 50px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  form {
    button {
      display: block;
      float: right;
    }
  }
}
</style>