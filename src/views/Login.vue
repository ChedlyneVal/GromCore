<template>
  <div>
    <NavBar></NavBar>
    <div class="container-fluid">
      <div class="loginSection">
        <h1>Login</h1>
        <div class="clearfix">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="email"
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
              v-model="password"
            />
          </div>
          <div class="form-group clearfix">
            <button v-on:click="somelogin" class="btn btn-primary float-right">
              Submit
            </button>
          </div>
          <div class="signup">
            <p>Not a Member? <a href="">Sign Up!</a></p>
          </div>
        </div>
        <!-- <hr /> -->
        <div class="bottomLoginSection">
          <!-- //TODO: ADD support for logging in with google and facebook. -->
          <!-- <div class="form-group">
            <div class="dropdown-divider"></div>
            <div>
              <div class="google"><p>Login with google</p></div>
              <div class="facebook"><p>Login with facebook</p></div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { userService } from "../_services/user.service";

export default {
  data: () => ({
    email: null,
    password: null
  }),
  components: {
    NavBar
  },
  methods: {
    somelogin() {
      console.log("Login");
      userService.login(this.email, this.password);
    }
  }
};
</script>

<style lang="scss">
.loginSection {
  position: absolute;
  top: 50%;
  left: 80%;
  margin-top: -175px;
  margin-left: -300px;
  width: 500px;
  height: 400px;
  padding: 25px 50px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
}
.signup {
  p {
    text-align: center;
  }
}
</style>