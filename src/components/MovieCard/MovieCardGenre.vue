<script setup lang="ts">
const props = defineProps(['genre'])
</script>

<template>
  <div class="movie-card-genre bg-indigo-600 px-1.5 text-white w-fit rounded-full mr-1">
    {{ genre }}
  </div>
</template>

<style scoped>
.movie-card-genre {
  font-size: 10px;
}
</style>
