<template>
  <section
    class="app-advanced p-10 relative z-10 xl:min-h-screen bg-newGray flex flex-row items-center justify-center"
  >
    <div class="basis-full lg:self-center">
      <h2
        class="inline-block font-display font-bold text-brand lg:text-xl uppercase mb-4"
      >
        Contact
      </h2>
      <h3 class="font-display font-bold text-4xl lg:text-5xl mb-8">
        Mon portfolio vous plait ?
      </h3>
      <p class="text-neutrals-50/60 leading-relaxed max-w-prose mb-12">
        N'hesitez pas à me contacter pour plus d'informations ou pour discuter !
        Vous trouverez également mes réseaux en bas de page.
      </p>
      <a
        class="text-neutrals-50 leading-relaxed max-w-prose mb-14 hover:text-brand transition-colors cursor-pointer inline-block"
        href="mailto:remi.pince@outlook.com"
        title="Hit me up"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 inline mr-1 mb-1"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
          ></path>
        </svg>
        remi.pince@outlook.com</a
      >
    </div>
    <div class="w-1/2">
      <img class="mx-auto" alt="Vue logo" src="../assets/logo.png" />

      <form
        :action="FORM_ENDPOINT"
        @submit="handleSubmit"
        method="POST"
        target="_blank"
        class="w-1/2 mx-auto mt-5"
      >
        <label for="form-name" class="block mb-2 text-sm uppercase"
          >Nom Prénom</label
        >
        <div class="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            class="bg-neutrals-700 border-[1.5px] border-neutrals-500 rounded-md block w-full pl-10 pr-10 p-2.5 focus:ring-none focus:border-brand focus:outline-none"
            required
          />
        </div>
        <label for="form-email" class="block mb-2 text-sm uppercase"
          >Email</label
        >
        <div class="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            class="bg-neutrals-700 border-[1.5px] border-neutrals-500 rounded-md block w-full pl-10 pr-10 p-2.5 focus:ring-none focus:border-brand focus:outline-none"
            required
          />
        </div>
        <label for="form-message" class="block mb-2 text-sm uppercase"
          >Message</label
        >
        <div class="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            class="bg-neutrals-700 border-[1.5px] border-neutrals-500 rounded-md block w-full pl-10 pr-10 p-2.5 focus:ring-none focus:border-brand focus:outline-none"
            required
          />
        </div>

        <div class="mb-3 pt-0">
          <button
            class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>

      <div v-if="submitted" class="text-center mt-10">
        <h2 class="text-2xl">Thanks you!</h2>
        <div class="text-md">We'll be in touch soon.</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactView",
  data: () => ({
    submitted: false,
    FORM_ENDPOINT:
      "https://public.herotofu.com/v1/847abbd0-3a64-11ed-8ff6-d1ee553f3964",
  }),

  methods: {
    handleSubmit() {
      setTimeout(() => {
        this.submitted = true;
      }, 100);
    },
  },

  beforeCreate() {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href =
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  },
};
</script>
