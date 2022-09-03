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
    <div class="about-text">
      <h2>QUi suis-je ?</h2>
      <h3>Un simple étudiant passionné de développement</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        excepturi quisquam id reiciendis officiis laboriosam non! Laudantium,
        sequi totam! Illum rerum corporis iste laborum, et ipsa placeat aperiam
        saepe amet.
      </p>
    </div>
    <div class="about-image">mettre un image illustrative ici</div>
  </section>
  <section class="skillSection">
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
  height: 500px;
  display: flex;
  justify-content: center;
  & .about-text {
    width: 45%;
  }
  & .about-image {
    width: 45%;
  }
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
  height: 500px;
  background-color: rgba(128, 128, 128, 0.281);
}

.skillLogos {
  display: flex;
  flex-wrap: wrap;
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
</style>
