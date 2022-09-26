<template>
  <section
    id="projects"
    class="w-full p-4 h-full flex flex-col flex-wrap items-center justify-center relative z-10 min-h-screen bg-white"
  >
    <div class="w-full">
      <div class="mx-auto flex max-w-7xl flex-col space-y-12 px-2 xl:px-12">
        <h2
          class="m-7 border-b-4 p-1 font-bold text-3xl md:text-5xl md:border-b-0"
        >
          Mes différents projets
        </h2>
        <h3 class="m-7 text-3xl font-bold md:text-4xl">Projets personnel</h3>
        <div class="">
          <div class="mb-8 flex flex-col sm:flex-row">
            <a
              href="https://github.com/Osiri70cl/appMeteo"
              target="”_blank”"
              class="mb-8 flex items-center justify-center sm:w-1/2 md:w-5/12 cursor-pointer"
            >
              <img
                src="../images/appMeteo.jpg"
                width="300"
                height="300"
                alt="meteo"
                loading="lazy"
                class="rounded-lg justify-center shadow-xl md:hover:skew-y-3 md:hover:scale-110 md:hover:shadow-2xl"
              />
            </a>
            <div
              class="mt-5 mb-8 flex flex-col justify-center sm:w-1/2 sm:pr-16 md:mt-0 md:w-7/12"
            >
              <div class="mb-2 flex justify-center md:justify-start">
                <p class="text-sm font-semibold uppercase text-secondary">
                  Fait avec
                </p>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 18l6-6l-6-6"
                  ></path>
                </svg>
                <p class="text-sm font-semibold uppercase">
                  HTML・CSS・JS・API
                </p>
              </div>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">App Météo</h3>
              <p class="text mt-5 text-lg md:text-left">
                Création d'une application de météo via appel d'API. <br />
                Elle permet de renseigner une ville pour y avoir les
                informations météo. <br />
                Le background change en fonction de la météo. <br />
                4 villes sont enregistrées pour avoir une météo par défaut.
              </p>
            </div>
          </div>
        </div>
        <div class="">
          <div class="mb-8 flex flex-col sm:flex-row">
            <a
              href="https://github.com/Osiri70cl/sitePinsou"
              target="”_blank”"
              class="mb-8 flex items-center justify-center sm:w-1/2 md:w-5/12 cursor-pointer"
            >
              <img
                src="../images/siteFamille.jpg"
                width="300"
                alt="montagnes"
                loading="lazy"
                class="rounded-lg justify-center shadow-xl md:hover:skew-y-3 md:hover:scale-110 md:hover:shadow-2xl object-contain"
              />
            </a>
            <div
              class="mt-5 mb-8 flex flex-col justify-center sm:w-1/2 sm:pr-16 md:mt-0 md:w-7/12"
            >
              <div class="mb-2 flex justify-center md:justify-start">
                <p class="text-sm font-semibold uppercase text-secondary">
                  En cours...
                </p>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 18l6-6l-6-6"
                  ></path>
                </svg>
                <p class="text-sm font-semibold uppercase">
                  Vuejs・Tailwindcss・Nodejs・MySQL
                </p>
              </div>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                Site de famille
              </h3>
              <p class="text mt-5 text-lg md:text-left">
                Commande faite par ma famille, ce site aura pour but de
                répertorier les différents évènements et savoirs de la famille.
                <br />
                Il sera possible de s'inscrire et de se connecter. <br />
                Ce site est accès sur 3 axes majeurs : <br />
                - Les balades : en montagnes, les chemins, les forêts,...<br />
                - Les recettes<br />
                - Les photos : photos de famille, de vacances...<br />
              </p>
            </div>
          </div>
        </div>
        <h3 class="m-7 font-bold text-2xl xl:text-5xl">
          Projets OpenClassrooms
        </h3>
        <div class="">
          <div class="mb-8 flex flex-col sm:flex-row">
            <a
              href="https://github.com/Osiri70cl/Groupomania-p7-OC"
              target="”_blank”"
              class="sm:order-last mb-8 flex justify-center items-center sm:w-1/2 md:w-5/12"
            >
              <img
                src="../images/icon-left-font.png"
                width="300"
                height="300"
                alt="Logo groupomania"
                loading="lazy"
                class="rounded-lg justify-center shadow-xl md:hover:skew-y-3 md:hover:scale-110 md:hover:shadow-2xl cursor-pointer"
              />
            </a>
            <div
              class="mt-5 mb-8 flex flex-col justify-center sm:w-1/2 sm:pr-16 md:mt-0 md:w-7/12"
            >
              <div class="mb-2 flex justify-center md:justify-start">
                <p class="text-sm font-semibold uppercase text-secondary">
                  Fait avec
                </p>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 18l6-6l-6-6"
                  ></path>
                </svg>
                <p class="text-sm font-semibold uppercase">
                  Vuejs・Nodejs・MySQL
                </p>
              </div>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                Groupomania
              </h3>
              <p class="text mt-5 text-lg md:text-left">
                Ce projet, Groupomania, était le dernier de la formation
                OpenClassrooms. <br />
                Il consiste à créer un réseau social d'entreprise. <br />
                Le but était de créer un réseau social d'entreprise, où les
                employés peuvent partager des articles, et des images. <br />
                Les employés peuvent également commenter les articles et les
                images. <br />
                Pour avoir plus de détails sur les contraintes et consignes du
                projet, je vous invite à consulter le github en cliquant sur
                l'image <br />
              </p>
            </div>
          </div>
        </div>
        <div class="">
          <div class="mb-8 flex flex-col sm:flex-row">
            <a
              href="https://github.com/Osiri70cl/Piiquante"
              target="”_blank”"
              class="sm:order-last mb-8 flex items-center justify-center sm:w-1/2 md:w-5/12"
            >
              <img
                src="../images/piiquantelogo.webp"
                width="300"
                height="300"
                alt="piiquante"
                loading="lazy"
                class="rounded-lg shadow-xl md:hover:skew-y-3 md:hover:scale-110 md:hover:shadow-2xl cursor-pointer"
              />
            </a>
            <div
              class="mt-5 mb-8 flex flex-col justify-center sm:w-1/2 sm:pr-16 md:mt-0 md:w-7/12"
            >
              <div class="mb-2 flex justify-center md:justify-start">
                <p class="text-sm font-semibold uppercase text-secondary">
                  Fait avec
                </p>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 18l6-6l-6-6"
                  ></path>
                </svg>
                <p class="text-sm font-semibold uppercase">Nodejs・MongoDB</p>
              </div>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                API Piiquante
              </h3>
              <p class="text mt-5 text-lg md:text-left">
                Dans ce projet, je devais créer une API sécurisée pour un site
                de vente de sauces piquantes. (le code frontend nous ayant été
                fourni) <br />
                Il fallait implementer les fonctionnalités suivantes : <br />
                - Création d'un compte utilisateur <br />
                - Connexion à un compte utilisateur <br />
                - Création, modification et suppression d'une sauce <br />
                - Liking et disliking d'une sauce <br />
                Pour avoir plus de détails sur les contraintes et consignes du
                projet, je vous invite à consulter le github en cliquant sur
                l'image <br />
              </p>
            </div>
          </div>
        </div>
        <div class="">
          <div class="mb-8 flex flex-col sm:flex-row">
            <a
              href="https://github.com/Osiri70cl/Kanap"
              target="”_blank”"
              class="sm:order-last mb-8 flex justify-center items-center sm:w-1/2 md:w-5/12"
            >
              <img
                src="../images/logokanap.webp"
                width="300"
                height="300"
                alt="kanap logo"
                loading="lazy"
                class="rounded-lg shadow-xl md:hover:skew-y-3 md:hover:scale-110 md:hover:shadow-2xl cursor-pointer"
              />
            </a>
            <div
              class="mt-5 mb-8 flex flex-col justify-center sm:w-1/2 sm:pr-16 md:mt-0 md:w-7/12"
            >
              <div class="mb-2 flex justify-center md:justify-start">
                <p class="text-sm font-semibold uppercase text-secondary">
                  Fait avec
                </p>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 18l6-6l-6-6"
                  ></path>
                </svg>
                <p class="text-sm font-semibold uppercase">HTML・CSS・JS</p>
              </div>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">KANAP</h3>
              <p class="text mt-5 text-lg md:text-left">
                Dans ce projet, je devais créer un site de e-commerce pour une
                entreprise de vente de canapés. <br />
                Le backend et l'API nous étant fournis, il fallait créer le
                frontend. <br />
                Le site devait être responsive, et fonctionner sur tous les
                navigateurs. <br />
                Pour avoir plus de détails sur les contraintes et consignes du
                projet, je vous invite à consulter le github en cliquant sur
                l'image <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsView",
};
</script>
<style></style>
