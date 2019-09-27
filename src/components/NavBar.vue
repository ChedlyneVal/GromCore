<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><img class="logo" src="../assets/NeonGreenOutline.png" alt=""></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto float-right">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-primary my-2 my-sm-0">
          Login
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.bg-dark {
  background-color: #222 !important;
}
@media (min-width: 980px) {
  body {
    padding-top: 56px;
  }
}
.logo {
  height: 50px;
}
</style>