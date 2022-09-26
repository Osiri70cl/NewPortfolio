<template>
  <div class="background md:sticky md:w-full">
    <section
      id="home"
      class="flex flex-wrap flex-col pt-24 justify-center items-center h-screen w-full bg-white bg-opacity-50 md:sticky md:top-0"
    >
      <img
        src="../assets/IMG_0652.webp"
        alt="image Rémi"
        class="m-6 md:w-64 w-20 md:h-64 h-20 rounded-full shadow-lg"
      />
      <div class="m-6">
        <h2 class="my-0 w-full text-5xl">Bonjour, Je suis Rémi.P</h2>
        <h3 class="m-7 text-2xl text-black italic">
          Etudiant en Web developpement
        </h3>
        <div class="flex justify-center items-center">
          <a
            href="#projects"
            class="px-4 py-3 lg:px-5 lg:py-4 border-2 border-red bg-[length:140%] bg-red bg-[position:400%] hover:bg-[position:50%] hover:text-red hover:bg-white transition-all duration-500 lg:text-lg mt-16 left-1/2 -translate-x-1/2 rounded-3xl"
          >
            Mes réalisations
          </a>
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
  top: 0;
  background-image: url("../assets/4.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}
</style>
