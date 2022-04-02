<template>
  <nav>
    <img alt="Vue logo" src="..\src\assets\logo.png" />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-image: url("../src/assets/fondo.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: center; */
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  height: 70px;
  background-color: rgba(185, 225, 216, 0.4);
  backdrop-filter: blur(3px);
  align-items: center;
  box-shadow: 0 5px 19px #f0a166;
}

nav > img {
  margin-right: 40px;
  width: 70px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #f6bf96;
}

nav a.router-link-exact-active {
  color: #f0a166;
}
</style>
