<template>
  <header>
    <div class="container mx-auto">
      <div class="navbar flex items-center">
        <div class="brand md:mr-8 flex mr-auto">
          <slot name="left" />
        </div>

        <div
          :class="`navs ${
            toggleMenu && ' lg:flex left-[100vw] lg:left-0 '
          }  md:flex space-y-4 lg:space-y-0 lg:space-x-14 p-4 grow justify-end items-center  bg-dark md:bg-transparent fixed left-0 lg-static  top-0 h-screen md:h-auto w-screen md:w-full z-0 transition-all ease-in-out  `"
        >
          <div class="menu-center menu-right flex items-center">
            <slot name="center" />
          </div>

          <div class="menu-right flex items-center">
            <slot name="right" />
          </div>
        </div>
        <div
          :class="`lg:hidden z-10 ${toggleMenu}`"
          @click="toggleMenu = !toggleMenu"
        >
          <slot name="menuButton" :show="!toggleMenu" />
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
const toggleMenu = ref(true);
</script>
