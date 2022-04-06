<template>
  <section>
    <div class="parrafo">
      <h1>¿Quienes Somos?</h1>
      <p>
        Somos una empresa mexicana fundada en el año 2022, en el área de
        pastelería y repostería artesanal, con presencia en CDMX y su
        alrededores
        <br />
        <br />
        Ofrecemos a nuestros clientes productos de la mejor calidad y frescura,
        contamos con una amplia gama de pasteles para todo tipo de gusto y
        diseños innovadores para diferentes eventos.
      </p>
    </div>

    <div class="parrafo">
      <h2>Tel: 9876543210</h2>
      <h2>Ubicación: Av. 5 de mayo, #213</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
}

.parrafo {
  width: 40%;
  height: 350px;
  margin: 50px 5%;
  /* margin: 50px 30%; */
  padding-top: 20px;
  background-color: rgba(185, 225, 216, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 30px;
  /* box-shadow: 0 5px 19px #f0a166; */
}

.parrafo h1 {
  text-align: center;
  padding-bottom: 30px;
  color: #f0a166;
  font-size: 30px;
}

.parrafo p {
  margin: 0 50px;
  text-align: justify;
  padding-bottom: 30px;
  color: #f0a166;
  font-size: 18px;
}

.parrafo h2 {
  margin: 50px 50px;
  text-align: center;
  padding-bottom: 30px;
  color: #f0a166;
  font-size: 28px;
}
</style>
