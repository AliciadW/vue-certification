<script setup lang="ts">
const props = defineProps(['item'])

/*
 This is an Icon that you can use to represent the stars if you like
 otherwise you could just use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div>
    <img :src="item.image" alt="Movie image" />
    <div>Movie details</div>
  </div>
</template>

<style scoped></style>
