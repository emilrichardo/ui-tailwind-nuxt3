<template>
  <NuxtImg
    class="w-full"
    v-if="darkModeUrl || lightModeUrl"
    :alt="name"
    :src="isDarkMode && darkModeUrl ? darkModeUrl : lightModeUrl"
  />
  <h1 v-else-if="name" class="text-xl">{{ name }}</h1>
</template>
<script setup>
const { name, isDarkMode, darkModeUrl, lightModeUrl } = defineProps([
  "name",
  "isDarkMode",
  "darkModeUrl",
  "lightModeUrl",
]);
</script>
