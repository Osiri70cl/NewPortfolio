<template>
  <section
    id="skills"
    class="flex flex-col lg:flex-row justify-center items-center w-full bg-newGray relative z-10 min-h-screen"
  >
    <h2
      class="my-12 border-b-4 font-bold md:p-0 md:w-1/2 w-3/4 text-3xl md:border-b-0 md:text-5xl p-1"
    >
      Mes compétences
    </h2>
    <div
      class="grid md:grid-cols-3 md:gap-10 grid-cols-2 justify-center items-center md:w-128 h-screen"
    >
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        target="_blank"
        class="w-26 h-26 m-2.5 hover:cursor-pointer"
      >
        <img
          src="../assets/html.webp"
          alt="logo html"
          class="w-full h-full object-contain"
        />
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
        class="w-26 h-26 m-2.5 hover:cursor-pointer"
      >
        <img
          src="../assets/CSS.webp"
          alt="logo css"
          class="w-full h-full object-contain"
        />
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        class="w-26 h-26 m-2.5 hover:cursor-pointer"
      >
        <img
          src="../assets/JavaScript-Logo.webp"
          alt="logo js"
          class="w-full h-full object-contain"
        />
      </a>
      <a
        href="https://sass-lang.com/"
        target="_blank"
        class="w-26 h-26 m-2.5 hover:cursor-pointer"
      >
        <img
          src="../assets/sass.webp"
          alt="logo sass"
          class="w-full h-full object-contain"
        />
      </a>
      <a
        href="https://nodejs.org/en/"
        target="_blank"
        class="w-26 h-26 m-2.5 hover:cursor-pointer"
      >
        <img
          src="../assets/Node.js.webp"
          alt="logo nodejs"
          class="w-full h-full object-contain"
        />
      </a>

      <a
        href="https://www.mongodb.com/cloud/atlas/lp/try2-hterms?utm_content=rlsapostreg&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_retarget-brand-postreg_gic-null_emea-all_ps-all_desktop_eng_lead&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14412646473&adgroup=131761130532&gclid=Cj0KCQjwj7CZBhDHARIsAPPWv3cZuzMKPkOiIx2DZTi0BbLp9aOpk9B5bB47yZGLseSQmSq5MIFN0zcaAjgYEALw_wcB"
        target="_blank"
        class="w-26 h-26 m-2.5 hover:cursor-pointer"
      >
        <img
          src="../assets/mongodb-logo.webp"
          alt="logo mongo"
          class="w-full h-full object-contain"
        />
      </a>
      <a
        href="https://vuejs.org/guide/introduction.html#what-is-vue"
        target="_blank"
        class="w-26 h-26 m-2.5 hover:cursor-pointer"
      >
        <img
          src="../assets/logo.png"
          alt="logo vue"
          class="w-full h-full object-contain"
        />
      </a>
      <a
        href="https://reactjs.org/"
        target="_blank"
        class="w-26 h-26 m-2.5 hover:cursor-pointer"
      >
        <img
          src="../assets/React.png"
          alt="logo React"
          class="w-full h-full object-contain"
        />
      </a>
      <a
        href="https://www.mysql.com/"
        target="_blank"
        class="w-26 h-26 m-2.5 hover:cursor-pointer"
      >
        <img
          src="../assets/mysql.png"
          alt="logo mysql"
          class="w-full h-full object-contain"
        />
      </a>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        class="w-26 h-26 m-2.5 hover:cursor-pointer"
      >
        <img
          src="../assets/tailwind.png"
          alt="logo tailwind"
          class="w-full h-full object-contain"
        />
      </a>
    </div>
  </section>
</template>
<script>
export default {
  name: "SkillsView",
};
</script>
