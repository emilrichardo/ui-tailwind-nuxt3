<template>
  <nav
    class="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="#" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-6 mr-3 sm:h-10"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Flowbite</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-multi-level"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-multi-level"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Dropdown
              <svg
                class="w-4 h-4 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Dashboard</a
                  >
                </li>
                <li aria-labelledby="dropdownNavbarLink">
                  <button
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dropdown<svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="doubleDropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >Overview</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >My downloads</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >Billing</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >Rewards</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Earnings</a
                  >
                </li>
              </ul>
              <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >Sign out</a
                >
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <Header class="py-2 px-2 bg-light-100 dark:bg-dark">
    <template #left>
      <Logo
        class="max-w-[200px] mx-2 my-1"
        name="Poolex"
        :isDarkMode="false"
        :darkModeUrl="logoModeDark"
        :lightModeUrl="logoModeLight"
      />
    </template>
    <template #center>
      <nav>
        <ul>
          <li><a href="#">menu center</a></li>
        </ul>
      </nav>
    </template>
    <template #right>
      <nav>
        <ul>
          <li><a href="#">menu right</a></li>
        </ul>
      </nav>
    </template>
    <template #menuButton="{ show }">
      <Icon
        :class="` ${
          show && 'bg-primary text-light border-primary'
        } h-8 w-8 rounded-full border border-light bg-light shadow-md p-1 text-lg`"
        name="bx:menu"
      />
    </template>
  </Header>
  <div>
    <Hero>
      <template #default>
        <div>template default</div>
      </template>
      <template #secondary>
        <div>template secondary</div>
      </template>
    </Hero>
  </div>
</template>

<script setup>
const logoModeLight =
  "https://res.cloudinary.com/di4frs2px/image/upload/v1678313943/logo_90631f7391.svg";

const logoModeDark =
  "https://res.cloudinary.com/di4frs2px/image/upload/v1678313957/logo_dark_63f9cc204f.svg";
</script>
<style>
:root {
  --primary: 18, 101, 224;
  --primary: 18, 101, 224;
  --accesible-primary: var(--light);
  --light: 245, 245, 245;
  --light: 245, 245, 245;
  --accesible-light: var(--dark);
  --dark: 63, 62, 62;
  --dark: 63, 62, 62;
  --accesible-dark: var(--light);
  --text_light: 235, 235, 235;
  --text_light: 235, 235, 235;
  --accesible-text_light: var(--dark);
  --text_dark: 110, 110, 110;
  --text_dark: 110, 110, 110;
  --accesible-text_dark: var(--light);
  --white: 255, 255, 255;
  --white: 255, 255, 255;
  --accesible-white: var(--dark);
  --primary-lighten-100: 42, 116, 227;
  --primary-darken-100: 16, 91, 202;
  --accesible-primary: var(--light);
  --light-lighten-100: 246, 246, 246;
  --light-darken-100: 221, 221, 221;
  --accesible-light: var(--dark);
  --dark-lighten-100: 82, 81, 81;
  --dark-darken-100: 57, 56, 56;
  --accesible-dark: var(--light);
  --text_light-lighten-100: 237, 237, 237;
  --text_light-darken-100: 212, 212, 212;
  --accesible-text_light: var(--dark);
  --text_dark-lighten-100: 125, 125, 125;
  --text_dark-darken-100: 99, 99, 99;
  --accesible-text_dark: var(--light);
  --white-lighten-100: 255, 255, 255;
  --white-darken-100: 230, 230, 230;
  --accesible-white: var(--dark);
  --primary-lighten-200: 65, 132, 230;
  --primary-darken-200: 14, 81, 179;
  --accesible-primary: var(--light);
  --light-lighten-200: 247, 247, 247;
  --light-darken-200: 196, 196, 196;
  --accesible-light: var(--dark);
  --dark-lighten-200: 101, 101, 101;
  --dark-darken-200: 50, 50, 50;
  --accesible-dark: var(--light);
  --text_light-lighten-200: 239, 239, 239;
  --text_light-darken-200: 188, 188, 188;
  --accesible-text_light: var(--dark);
  --text_dark-lighten-200: 139, 139, 139;
  --text_dark-darken-200: 88, 88, 88;
  --accesible-text_dark: var(--light);
  --white-lighten-200: 255, 255, 255;
  --white-darken-200: 204, 204, 204;
  --accesible-white: var(--dark);
  --primary-lighten-300: 89, 147, 233;
  --primary-darken-300: 13, 71, 157;
  --accesible-primary: var(--light);
  --light-lighten-300: 248, 248, 248;
  --light-darken-300: 172, 172, 172;
  --accesible-light: var(--dark);
  --dark-lighten-300: 121, 120, 120;
  --dark-darken-300: 44, 43, 43;
  --accesible-dark: var(--light);
  --text_light-lighten-300: 241, 241, 241;
  --text_light-darken-300: 165, 165, 165;
  --accesible-text_light: var(--dark);
  --text_dark-lighten-300: 154, 154, 154;
  --text_dark-darken-300: 77, 77, 77;
  --accesible-text_dark: var(--light);
  --white-lighten-300: 255, 255, 255;
  --white-darken-300: 179, 179, 179;
  --accesible-white: var(--dark);
}
</style>
