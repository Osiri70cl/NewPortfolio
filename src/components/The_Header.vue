<template>
  <header class="fixed top-0 z-40 w-full">
    <div class="flex justify-between md:items-center flex-row relative">
      <!-- background -->
      <div
        class="w-full h-[5.1rem] -translate-y-[2.4rem] md:-translate-y-[0.9rem] absolute"
      ></div>
      <div class="right-1/2 translate-x-1/2 w-10/12 2xl:w-[80%] absolute"></div>

      <!-- link section -->
      <nav
        class="-translate-y-full w-full md:w-auto md:translate-y-0 md:ml-auto md:mr-[8.3333335%] 2xl:mr-[10%]"
      >
        <div class="mx-auto w-10/12 2xl:w-[80%] md:w-auto">
          <div class="items-center space-x-8 flex py-1 md:py-0 flex-row">
            <!-- primary navigation -->
            <div class="flex items-center space-x-8">
              <a
                class="text-m text-darkBlue focus:text-green md:text-m uppercase py-5 hover:underline focus:underline"
                href="#"
                >Rémi.P</a
              >
              <a
                class="text-m text-darkBlue active:text-green md:text-m uppercase py-5 hover:underline focus:underline"
                href="/#about"
                >About</a
              >
              <a
                class="text-m text-darkBlue focus:text-green md:text-m uppercase py-5 hover:underline focus:underline"
                href="/#skills"
                >Skills</a
              >
              <a
                class="text-m text-darkBlue focus:text-green md:text-m uppercase py-5 hover:underline focus:underline"
                href="/#projects"
                >Projects</a
              >
              <a
                class="text-m text-darkBlue focus:text-green md:text-m uppercase py-5 hover:underline focus:underline"
                href="/#contact"
                >Contact</a
              >
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script></script>

<style lang="scss">
nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
