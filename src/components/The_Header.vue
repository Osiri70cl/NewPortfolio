<template>
  <header>
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projets</router-link> |
      <router-link to="/contact">Contact</router-link> |
    </nav>
  </header>
</template>

<script></script>

<style lang="scss">
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
</style>
