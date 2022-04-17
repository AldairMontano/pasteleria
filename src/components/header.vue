<template>
  <div class="home">
    <img class="logo" alt="Yimi´s logo" src="..\assets\logo.png" />
    <h1>Yimi´s Cake</h1>
    <h2>¡El hogar de la buena repostería!</h2>
    <p>Horarios de atención: L-V: 9:00 a 17:00 hrs</p>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.home {
  padding-top: 150px;
  height: 700px;
  background-image: url("../assets/fondo.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  /* background-position: center; */
}

img {
  width: 200px;
  margin: auto;
}

h1 {
  margin-top: 20px;
  font-size: 60px;
  color: #f0a166;
  margin-bottom: 50px;
  font-weight: bold;
}

h2 {
  font-size: 40px;
  color: #80c4b5;
  font-weight: bold;
  margin-top: 20px;
}

p {
  width: 21%;
  font-size: 30px;
  color: #80c4b5;
  display: flex;
  margin: auto;
  margin-top: 20px;
}
</style>
