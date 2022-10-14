<template>
  <section
    id="contact"
    class="app-advanced p-10 relative z-10 md:min-h-screen bg-newGray flex flex-col xl:flex-row items-center justify-center"
  >
    <div class="basis-full md:self-center mt-16">
      <h2
        class="inline-block font-display text-brand border-b-4 p-1 font-bold text-3xl md:text-5xl uppercase mb-4 md:border-b-0"
      >
        Contact
      </h2>
      <h3 class="font-display text-2xl md:text-4xl mb-8">
        Mon portfolio vous plait ?
      </h3>
      <p class="text-neutrals-50/60 leading-relaxed max-w-prose mb-12">
        N'hesitez pas à me contacter pour plus d'informations ou pour me
        proposer une alternance ! Vous trouverez également mes réseaux en bas de
        page.
      </p>
      <a
        class="text-neutrals-50 leading-relaxed max-w-prose mb-14 hover:text-brand transition-colors cursor-pointer inline-block"
        href="mailto:remi.pince@outlook.com"
        title="envoyer un mail"
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
    <div
      class="w-full md:w-2/5 2xl:ml-20 flex flex-col justify-center items-center"
    >
      <svg
        style="color: white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-28 h-28"
      >
        <path
          d="M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z"
          fill="white"
        ></path>
      </svg>

      <form
        :action="FORM_ENDPOINT"
        @submit="handleSubmit"
        method="POST"
        target="_blank"
        class="w-full mx-auto mt-5"
      >
        <label for="form-name" class="block mb-2 text-sm uppercase"
          >Nom Prénom</label
        >
        <div class="mb-3 pt-0">
          <input
            type="text"
            placeholder="Nom Prénom"
            name="name"
            class="bg-neutrals-700 border-[1.5px] border-neutrals-500 rounded-md block w-full pr-10 p-2.5 focus:ring-none focus:border-brand focus:outline-none"
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
            class="bg-neutrals-700 border-[1.5px] border-neutrals-500 rounded-md block w-full pr-10 p-2.5 focus:ring-none focus:border-brand focus:outline-none"
            required
          />
        </div>
        <label for="form-message" class="block mb-2 text-sm uppercase"
          >Message</label
        >
        <div class="mb-3 pt-0">
          <textarea
            placeholder="Votre message"
            name="message"
            class="bg-neutrals-700 border-[1.5px] border-neutrals-500 rounded-md block w-full pr-10 p-2.5 focus:ring-none focus:border-brand focus:outline-none"
            required
          />
        </div>

        <div class="mb-3 pt-0">
          <button
            class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Envoyer
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
