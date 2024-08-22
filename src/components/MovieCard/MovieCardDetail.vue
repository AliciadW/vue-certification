<script setup lang="ts">
import { ref } from 'vue'

import MovieCardGenre from '@/components/MovieCard/MovieCardGenre.vue'

const props = defineProps(['item'])

const genres = ref<string[]>(props.item.genres)
</script>

<template>
  <div class="flex flex-col flex-1 bg-white p-3 rounded-b-lg justify-between">
    <div class="flex flex-col">
      <h4 class="font-bold text-xl">{{ item.name }}</h4>

      <div class="flex">
        <MovieCardGenre class="flex mb-4" v-for="(genre, index) in genres" :key="index" :genre />
      </div>

      <p class="text-xs h-auto">{{ item.description }}</p>
    </div>

    <div class="mt-4">Rating component</div>
  </div>
</template>

<style scoped></style>
