<template>
  <div class="background">
    <section
      id="home"
      class="flex flex-wrap pt-24 justify-center items-center h-screen w-full bg-white bg-opacity-50 backdrop-blur-3xl sticky top-0"
    >
      <img
        src="../assets/IMG_0652.webp"
        alt="image Rémi"
        class="m-6 w-64 h-64 rounded-full shadow-lg"
      />
      <div class="m-6">
        <h2 class="my-0 w-full text-5xl">Bonjour, Je suis Rémi.P</h2>
        <h3 class="m-7 text-2xl text-black italic">
          Etudiant en Web developpement
        </h3>
        <div>
          <div class="flex justify-center items-center">
            <p class="text-xl text-black italic">Faisons connaissance !</p>
            <router-link to="/about" class="pl-3.5 hover:text-red-500">
              About</router-link
            >
          </div>
          <div class="flex justify-center items-center">
            <p class="text-xl text-black italic">
              Découvrez tous mes projets !
            </p>
            <router-link to="/projects" class="pl-3.5 hover:text-red-500">
              Projects</router-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>

  <aboutView></aboutView>
  <skillsView></skillsView>
  <projectView></projectView>
  <contactView></contactView>
</template>

<script>
import projectView from "../components/ProjectsView.vue";
import aboutView from "../components/AboutView.vue";
import skillsView from "../components/SkillsView.vue";
import contactView from "../components/ContactView.vue";
import AboutView from "../components/AboutView.vue";

export default {
  name: "HelloWorld",
  components: {
    projectView,
    aboutView,
    skillsView,
    contactView,
    AboutView,
  },
};
</script>

<style scoped lang="scss">
a {
  color: #ffffff;
  font-style: italic;
  font-weight: bold;
  text-decoration: none;
}

.background {
  position: sticky;
  top: 0;
  background-image: url("../assets/4.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}
</style>
