<template>
  <div class="background">
    <section class="firstSection">
      <div class="profile-image">
        <img
          src="../assets/IMG_0652.webp"
          alt="image Rémi"
          class="profile-img"
        />
      </div>
      <div class="profile-text">
        <h2>Bonjour, Je suis Rémi.P</h2>
        <h3>Etudiant en Web developpement</h3>
        <div class="links-container">
          <div class="links">
            <p>Faisons connaissance !</p>
            <router-link to="/about" class="router-link"> About</router-link>
          </div>
          <div class="links">
            <p>Découvrez tous mes projets !</p>
            <router-link to="/projects" class="router-link">
              Projects</router-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>
  <section class="aboutSection">
    <div class="about-text slide-in-left">
      <h2 id="iam">Qui suis-je ?</h2>
      <h3 id="student">Un simple étudiant passionné de développement</h3>
      <p id="content">
        Je m'appelle Rémi, j'ai 25 ans, je suis actuellement en formation de
        développeur web chez Open Classrooms et je recherche une alternance pour
        commnencer ma prochaine formation : Developpeur front-end JavaScript et
        React.
      </p>
    </div>
    <div class="about-image slide-in-right">
      mettre un image illustrative ici
    </div>
  </section>
  <section class="skillSection slide-in-left">
    <h2 class="skillTitle">Mes compétences</h2>
    <div class="skillLogos">
      <div class="logo">
        <img src="../assets/html.webp" alt="logo html" class="logoImage" />
      </div>
      <div class="logo">
        <img src="../assets/CSS.webp" alt="logo css" class="logoImage" />
      </div>
      <div class="logo">
        <img
          src="../assets/JavaScript-Logo.webp"
          alt="logo js"
          class="logoImage"
        />
      </div>
      <!-- <div class="logo">
        <img src="../assets/vue.png" alt="logo vue" />
      </div>
      <div class="logo">
        <img src="../assets/php.png" alt="logo php" />
      </div>
      <div class="logo">
        <img src="../assets/mysql.png" alt="logo mysql" />
      </div>
      <div class="logo">
        <img src="../assets/git.png" alt="logo git" />
      </div>
      <div class="logo">
        <img src="../assets/bootstrap.png" alt="logo bootstrap" />
      </div> -->
      <div class="logo">
        <img src="../assets/sass.webp" alt="logo sass" class="logoImage" />
      </div>
      <div class="logo">
        <img src="../assets/Node.js.webp" alt="logo react" class="logoImage" />
      </div>

      <div class="logo">
        <img
          src="../assets/mongodb-logo.webp"
          alt="logo mongo"
          class="logoImage"
        />
      </div>
    </div>
  </section>
  <section class="latestProjectsSection slide-in-right">
    <div class="projects">
      <div class="project-image">
        <img
          src="../assets/projectPlaceholder.webp"
          alt="project placeholder image"
        />
      </div>
      <div class="project-content">
        <h3 class="project-title">Project 1</h3>
        <p class="project-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          praesentium, eos neque et quam iusto aliquid veritatis voluptas magni
          odit, quisquam quo molestiae. Expedita labore laborum ipsa placeat
          totam facilis eaque architecto. Unde, dignissimos. Quos odit atque
          inventore explicabo impedit!
        </p>
      </div>
    </div>
    <div class="projects">
      <div class="project-content">
        <h3 class="project-title">Project 1</h3>
        <p class="project-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          praesentium, eos neque et quam iusto aliquid veritatis voluptas magni
          odit, quisquam quo molestiae. Expedita labore laborum ipsa placeat
          totam facilis eaque architecto. Unde, dignissimos. Quos odit atque
          inventore explicabo impedit!
        </p>
      </div>
      <div class="project-image">
        <img
          src="../assets/projectPlaceholder.webp"
          alt="project placeholder image"
        />
      </div>
    </div>
    <div class="projects">
      <div class="project-image">
        <img
          src="../assets/projectPlaceholder.webp"
          alt="project placeholder image"
        />
      </div>
      <div class="project-content">
        <h3 class="project-title">Project 1</h3>
        <p class="project-text">
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

.router-link {
  padding-left: 15px;
}

.firstSection {
  padding-top: 100px;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.664);
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-text {
  margin: 25px;
}

.profile-img {
  margin: 25px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.692);
}

// ABOUT SECTION

.aboutSection {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  & .about-text {
    width: 45%;
    display: block;
  }
  & .about-image {
    width: 45%;
  }
}
#iam {
  font-size: 3em;
  font-weight: bold;
  color: rgb(0, 0, 0);
}
#student {
  font-size: 2em;
  font-style: italic;
  font-weight: bold;
  color: rgb(0, 0, 0);
}
#content {
  font-size: 1em;
  font-style: italic;
  color: rgb(0, 0, 0);
}

.slide-in-left {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-right {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

// SKILLS SECTION

.skillTitle {
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 40px;
  width: 50%;
}

.skillSection {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  background-color: rgba(128, 128, 128, 0.281);
}

.skillLogos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
}

.logo {
  width: 100px;
  height: 100px;
  margin: 10px;
  & .logoImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

// LATEST PROJECTS SECTION

.latestProjectsSection {
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.projects {
  display: flex;
  margin: 10px;
  overflow: hidden;
  margin: 40px;
  & .project-image {
    width: 50%;
    height: 100%;
    align-self: center;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  & .project-content {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .project-title {
      margin: 0;
      font-size: 2em;
      font-weight: bold;
      color: rgb(0, 0, 0);
    }
    & .project-text {
      width: 70%;
      font-size: 1em;
      color: rgb(0, 0, 0);
    }
  }
}

// KEYFRAMES

@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
