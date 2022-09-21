<template>
  <div class="background">
    <section
      class="flex flex-wrap pt-24 justify-center items-center h-138 w-full bg-white bg-opacity-50"
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
  <section class="flex flex-wrap justify-center items-center w-full h-128">
    <div class="block w-3/5 slide-in-left">
      <h2 class="m-7 text-5xl text-black font-bold">Qui suis-je ?</h2>
      <h3 class="m-7 text-3xl text-black font-bold italic">
        Un étudiant passionné de développement
      </h3>
      <p class="m-7 text-base text-black italic">
        Je m'appelle Rémi, j'ai 25 ans, je suis actuellement en formation de
        développeur web chez Open Classrooms et je recherche une alternance pour
        commnencer ma prochaine formation : Developpeur front-end JavaScript et
        React.
      </p>
    </div>
    <div class="w-2/5">mettre un image illustrative ici</div>
  </section>
  <section
    class="flex flex-wrap justify-center items-center w-full h-128 bg-newGray"
  >
    <h2 class="my-12 w-1/2 text-5xl">Mes compétences</h2>
    <div class="grid grid-cols-3 justify-center items-center w-128 h-full">
      <div class="w-26 h-26 m-2.5">
        <img
          src="../assets/html.webp"
          alt="logo html"
          class="w-full h-full object-contain"
        />
      </div>
      <div class="w-26 h-26 m-2.5">
        <img
          src="../assets/CSS.webp"
          alt="logo css"
          class="w-full h-full object-contain"
        />
      </div>
      <div class="w-26 h-26 m-2.5">
        <img
          src="../assets/JavaScript-Logo.webp"
          alt="logo js"
          class="w-full h-full object-contain"
        />
      </div>
      <div class="w-26 h-26 m-2.5">
        <img
          src="../assets/sass.webp"
          alt="logo sass"
          class="w-full h-full object-contain"
        />
      </div>
      <div class="w-26 h-26 m-2.5">
        <img
          src="../assets/Node.js.webp"
          alt="logo react"
          class="w-full h-full object-contain"
        />
      </div>

      <div class="w-26 h-26 m-2.5">
        <img
          src="../assets/mongodb-logo.webp"
          alt="logo mongo"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </section>
  <section
    class="w-full h-full flex flex-col flex-wrap items-center justify-center"
  >
    <h2 class="m-7 text-5xl">Mes derniers projets</h2>
    <vueper-slides :dragging-distance="50">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :link="slide.link"
      />
    </vueper-slides>
    <p class="m-7 text-base text-black italic w-1/2">
      Pour avoir accès aux projets, à leur explications ainsi qu'à leur code
      source, n'hésitez pas à cliquer sur les images ou alors sur l'onglet
      "Projets" dans le menu.
    </p>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "HelloWorld",
  components: {
    VueperSlides,
    VueperSlide,
  },
  props: {
    msg: String,
  },
  data: () => ({
    slides: [
      {
        image: require("@/images/icon-left-font.png"),
        link: "https://portfolio-remi.fr/projects",
      },
      {
        image: require("@/images/piiquante logo.webp"),
        link: "https://portfolio-remi.fr/projects",
      },
      {
        image: require("@/images/logo kanap.webp"),
        link: "https://portfolio-remi.fr/projects",
      },
    ],
  }),
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
  background-image: url("../assets/4.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}

.vueperslides {
  width: 75%;
  height: 100%;
  margin: 50px auto;
}
</style>
