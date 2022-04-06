<template>
  <Header />
  <About />
</template>

<script>
import Header from "../components/header.vue";
import About from "../components/about.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    About,
  },
};
</script>
