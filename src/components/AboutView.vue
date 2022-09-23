<template>
  <section
    id="about"
    class="flex flex-wrap flex-col xl:flex-row justify-center items-center w-full h-128 relative z-10 xl:min-h-screen bg-white"
  >
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
      <article class="justify-center wrap">
        <h3 class="m-7 text-3xl text-black font-bold italic">Mon CV</h3>
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
    <div class="w-2/5">mettre un image illustrative ici</div>
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
