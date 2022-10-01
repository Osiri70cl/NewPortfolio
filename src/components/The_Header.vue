<template>
  <header>
    <div class="md:bg-transparent bg-white fixed top-0 z-40 w-full">
      <nav
        class="container px-6 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <a
            class="text-m text-gray-800 font-bold md:text-m uppercase py-5 hover:underline focus:underline"
            href="#"
            >Rémi.P</a
          >
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 md:mb-0 mb-3"
        >
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <a
              class="text-m text-darkBlue md:text-m uppercase py-5 hover:underline focus:underline"
              href="/#about"
              >About</a
            >
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <a
              class="text-m text-darkBlue md:text-m uppercase py-5 hover:underline focus:underline"
              href="/#skills"
              >Skills</a
            >
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <a
              class="text-m text-darkBlue md:text-m uppercase py-5 hover:underline focus:underline"
              href="/#projects"
              >Projects</a
            >
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <a
              class="text-m text-darkBlue md:text-m uppercase py-5 hover:underline focus:underline"
              href="/#contact"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style lang="scss"></style>
