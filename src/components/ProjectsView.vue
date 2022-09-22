<template>
  <section
    id="projects"
    class="w-full h-full flex flex-col flex-wrap items-center justify-center relative z-10 xl:min-h-screen bg-white"
  >
    <h2 class="m-7 text-5xl">Mes derniers projets</h2>
    <vueper-slides :dragging-distance="50">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
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
  name: "ProjectsView",
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
      },
      {
        image: require("@/images/piiquante logo.webp"),
      },
      {
        image: require("@/images/logo kanap.webp"),
        // link: router.push("/projects"),
      },
    ],
  }),
};
</script>
<style>
.vueperslides {
  width: 75%;
  height: 100%;
  margin: 50px auto;
}
</style>
