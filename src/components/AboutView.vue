<template>
  <section
    id="about"
    class="flex flex-wrap flex-col xl:flex-row justify-center items-center w-full h-128 relative z-10 min-h-screen bg-white"
  >
    <div class="block md:w-3/5 w-full mt-5">
      <h2 class="m-7 text-4xl md:text-5xl border-b-4 p-1 font-bold">
        Qui suis-je ?
      </h2>
      <h3 class="m-7 text-2xl md:text-4xl italic">
        Un étudiant passionné de développement
      </h3>
      <p class="m-7 text-base italic">
        Je m'appelle Rémi, j'ai 25 ans, titulaire d'un bachelor d'école de
        commerce, je suis actuellement en formation de développeur web che
        OpenClassrooms. Je recherche une alternance pour commencer ma prochaine
        formation : Developpeur frontend JavaScript et React.
      </p>
      <p class="m-7 text-base italic">
        Ayant toujours été passionné par l'informatique, j'ai décidé de me
        lancer dans cette formation afin de me spécialiser dans le développement
        web, et de pouvoir exercer un métier qui me passionne.
      </p>
      <article class="justify-center wrap">
        <h3 class="m-7 text-2xl md:text-3xl font-bold italic">Mon CV</h3>
        <div
          v-for="(filesrc, index) in filesrcs"
          :key="index"
          class="cursor-pointer"
        >
          <div @click="downloadWithAxios(filesrc.src, filesrc.title)">
            <p>{{ filesrc.title }}</p>
          </div>
        </div>
      </article>
    </div>
    <div class="sm:w-2/5 sm:visible invisible">
      <img
        src="../images/paupy.jpg"
        alt="photo des pyrénées"
        class="w-3/4 h-full object-contain border-2 border-black"
      />
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "AboutView",
  data() {
    return {
      filesrcs: [
        {
          title: "cv rémi.P",
          src: require("../images/cvplaceholder.png"),
        },
      ],
    };
  },
  methods: {
    forceFileDownload(response, title) {
      console.log(title);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", title);
      document.body.appendChild(link);
      link.click();
    },
    downloadWithAxios(url, title) {
      axios({
        method: "get",
        url,
        responseType: "arraybuffer",
      })
        .then((response) => {
          this.forceFileDownload(response, title);
        })
        .catch(() => console.log("error occured"));
    },
  },
};
</script>
