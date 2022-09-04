<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/projects">Projets</router-link> |
    <router-link to="/contact">Contact</router-link> |
  </nav>
  <router-view />
  <footer>testing footer</footer>
</template>

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
}

nav {
  padding: 10px;
  background-color: rgba(21, 21, 41, 0.555);

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 0;
  padding: 0;
}

footer {
  color: white;
  background-color: rgba(21, 21, 41, 0.555);
  position: fixed;
}
</style>
