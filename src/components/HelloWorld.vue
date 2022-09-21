<template>
  <div class="background">
    <section
      class="flex pt-24 justify-center items-center h-screen w-full bg-white bg-opacity-50"
    >
      <img
        src="../assets/IMG_0652.webp"
        alt="image Rémi"
        class="m-6 w-64 h-64 rounded-full shadow-lg"
      />
      <div class="m-6">
        <h2>Bonjour, Je suis Rémi.P</h2>
        <h3>Etudiant en Web developpement</h3>
        <div>
          <div class="flex justify-center items-center">
            <p>Faisons connaissance !</p>
            <router-link to="/about" class="pl-3.5"> About</router-link>
          </div>
          <div class="flex justify-center items-center">
            <p>Découvrez tous mes projets !</p>
            <router-link to="/projects" class="pl-3.5"> Projects</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
  <section class="flex justify-center items-center w-full h-128">
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
  <section class="flex justify-center items-center w-full h-128 bg-newGray">
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
  <section class="w-full h-138 flex flex-col justify-center items-center">
    <div class="flex items-center m-12 w-3/4">
      <div class="w-1/2 items-center h-full">
        <img
          src="../assets/projectPlaceholder.webp"
          alt="project placeholder image"
          class="w-full h-full object-contain"
        />
      </div>
      <div class="w-1/2 h-full flex flex-col justify-center items-center">
        <h3 class="m-0 text-lg font-bold text-black">Project 1</h3>
        <p class="w-3/4 text-sm text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          praesentium, eos neque et quam iusto aliquid veritatis voluptas magni
          odit, quisquam quo molestiae. Expedita labore laborum ipsa placeat
          totam facilis eaque architecto. Unde, dignissimos. Quos odit atque
          inventore explicabo impedit!
        </p>
      </div>
    </div>
    <div class="flex m-12 items-center w-3/4">
      <div class="w-1/2 h-full flex flex-col justify-center items-center">
        <h3 class="m-0 text-lg font-bold text-black">Project 2</h3>
        <p class="w-1/2 text-sm text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          praesentium, eos neque et quam iusto aliquid veritatis voluptas magni
          odit, quisquam quo molestiae. Expedita labore laborum ipsa placeat
          totam facilis eaque architecto. Unde, dignissimos. Quos odit atque
          inventore explicabo impedit!
        </p>
      </div>
      <div class="w-1/2 h-full items-center w-3/4">
        <img
          src="../assets/projectPlaceholder.webp"
          alt="project placeholder image"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
    <div class="flex m-12 items-center">
      <div class="w-1/2 h-full items-center">
        <img
          src="../assets/projectPlaceholder.webp"
          alt="project placeholder image"
          class="w-full h-full object-contain"
        />
      </div>
      <div class="w-1/2 h-full flex flex-col justify-center items-center">
        <h3 class="m-0 text-lg font-bold text-black">Project 3</h3>
        <p class="w-3/4 text-sm text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          praesentium, eos neque et quam iusto aliquid veritatis voluptas magni
          odit, quisquam quo molestiae. Expedita labore laborum ipsa placeat
          totam facilis eaque architecto. Unde, dignissimos. Quos odit atque
          inventore explicabo impedit!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
