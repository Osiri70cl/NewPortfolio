<template>
  <The_Header />
  <router-view />
  <The_Footer />
</template>

<script>
// Utilisaton du header et du footer pour l'ensemble de l'app
import The_Header from "./components/The_Header.vue";
import The_Footer from "./components/The_Footer.vue";

export default {
  name: "App",
  components: { The_Header, The_Footer },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
}
</style>
