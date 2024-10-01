<script setup lang="ts">
import { ref } from 'vue'

import MovieCardGenre from '@/components/MovieCard/MovieCardGenre.vue'
import MovieRating from '@/components/MovieRating/MovieRating.vue'

const props = defineProps(['item'])
const emit = defineEmits(['updateRating'])

const genres = ref<string[]>(props.item.genres)
const rating = ref<number>(props.item.rating)

const setRating = (n: number): void => {
  // do not update the rating if the user selects the current rating
  if (n === rating.value) {
    return
  }

  rating.value = n

  emit('updateRating', n)
}
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

    <movie-rating :rating="rating" class="mt-4" @select-rating="setRating" />
  </div>
</template>
