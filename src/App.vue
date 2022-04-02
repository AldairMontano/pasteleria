<template>
  <nav>
    <div>
      <img class="logo" alt="yimi´s logo" src="..\src\assets\logo.png" />
    </div>

    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/Pasteles">Pasteles</router-link>
      <router-link to="/Decoracion">Decoración</router-link>
      <router-link to="/Pedido">Pedido</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  /* text-align: center; */
  /* color: #2c3e50; */
}

/* body {
  height: 700px;
  background-image: url("../src/assets/fondo.jpg");
  background-size: cover;
  background-repeat: no-repeat;
} */

nav {
  width: 100vw;
  height: 70px;
  padding: 30px;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  background-color: rgba(185, 225, 216, 0.75);
  backdrop-filter: blur(3px);
  align-items: center;
  box-shadow: 0 5px 19px #f0a166;
  position: fixed;
  z-index: 100;
}

.logo {
  margin-right: 40px;
  width: 70px;
}

nav a {
  margin: 0px 30px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: #f6bf96;
}

nav a.router-link-exact-active {
  color: #f0a166;
}
</style>
