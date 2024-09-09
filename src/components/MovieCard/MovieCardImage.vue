<script setup lang="ts">
const props = defineProps(['image'])
</script>

<template>
  <img class="movie-card-image h-auto w-full rounded-t-lg" :src="image" alt="Movie image" />
</template>

<style scoped>
.movie-card-image {
  max-height: 450px;
  object-fit: cover;
}
</style>
