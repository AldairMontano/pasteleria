<template>
  <nav>
    <!-- <div>
      <img class="logo" alt="yimi´s logo" src="..\src\assets\logo.png" />
    </div> -->

    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/Pasteles">Pasteles</router-link>
      <router-link to="/Decoracion">Decoración</router-link>
      <router-link to="/Pedido">Pedido</router-link>
    </div>
  </nav>
  <router-view />

  <footer>
    <h3>@AldairMontañoChavez.</h3>
  </footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: "Kaushan Script", cursive;
  /* text-align: center; */
  /* color: #2c3e50; */
}

body {
  /* height: 700px;
  background-image: url("../src/assets/fondo.jpg");
  background-size: cover;
  background-repeat: no-repeat; */
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='50' height='50' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(45)'%3E%3Crect width='100%25' height='100%25' fill='rgba(255, 255, 255,1)'/%3E%3Ccircle cx='27.07' cy='27.07' r='2' stroke-width='0' fill='rgba(128, 196, 181,1)' filter='url(%23filter-doodad-1)'/%3E%3Ccircle cx='12.93' cy='27.07' r='2' stroke-width='0' fill='rgba(128, 196, 181,1)' filter='url(%23filter-doodad-1)'/%3E%3Ccircle cx='12.93' cy='12.93' r='2' stroke-width='0' fill='rgba(128, 196, 181,1)' filter='url(%23filter-doodad-1)'/%3E%3Ccircle cx='27.07' cy='12.93' r='2' stroke-width='0' fill='rgba(128, 196, 181,1)' filter='url(%23filter-doodad-1)'/%3E%3Ccircle cx='30' cy='20' r='2' stroke-width='0' fill='rgba(128, 196, 181,1)' filter='url(%23filter-doodad-2)'/%3E%3Ccircle cx='20' cy='30' r='2' stroke-width='0' fill='rgba(128, 196, 181,1)' filter='url(%23filter-doodad-2)'/%3E%3Ccircle cx='10' cy='20' r='2' stroke-width='0' fill='rgba(128, 196, 181,1)' filter='url(%23filter-doodad-2)'/%3E%3Ccircle cx='20' cy='10' r='2' stroke-width='0' fill='rgba(128, 196, 181,1)' filter='url(%23filter-doodad-2)'/%3E%3Ccircle cx='30' cy='20' r='2' stroke-width='0' fill='rgba(128, 196, 181,1)' filter='url(%23filter-doodad-2)'/%3E%3C/pattern%3E%3Cfilter id='filter-doodad-1'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='2'/%3E%3C/filter%3E%3Cfilter id='filter-doodad-2'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='0.6'/%3E%3C/filter%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
}

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

footer {
  width: 100%;
  height: 70px;
  background-color: rgba(185, 225, 216, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
}

footer > h3 {
  align-self: flex-end;
  color: #f0a166;
}
</style>
