<script setup lang="ts">
import { ref, watch } from 'vue'
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/solid'
import { useMoviesStore } from '@/stores/movies'

import MovieCardGenre from '@/components/MovieCard/MovieCardGenre.vue'
import MovieRating from '@/components/MovieRating/MovieRating.vue'

const movieStore = useMoviesStore()

const props = defineProps(['item'])

const genres = ref<string[]>(props.item.genres)
const rating = ref<number>(props.item.rating)

const setRating = (n: number): void => {
  // do not update the rating if the user selects the current rating
  if (n === rating.value) {
    return
  }

  rating.value = n

  movieStore.updateRating(n, props.item.name)
}

watch(
  props.item,
  () => {
    rating.value = props.item.rating
  },
  { immediate: true }
)
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

    <div class="flex justify-between align-middle mt-4">
      <movie-rating :rating @select-rating="setRating" />

      <div class="flex">
        <button @click="movieStore.updateMovie(item.name)">
          <PencilIcon class="size-4 text-gray-500 mr-2 hover:text-gray-600" />
        </button>
        <button @click="movieStore.deleteMovieFromList(item.name)">
          <TrashIcon class="size-4 text-red-500 hover:text-red-600" />
        </button>
      </div>
    </div>
  </div>
</template>
