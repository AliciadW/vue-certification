<script setup lang="ts">
import type { MovieObject } from '@/types/movieTypes'

import { ref, computed } from 'vue'
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'

import MovieCardList from '@/components/MovieCard/MovieCardList.vue'
import ModalBasic from '@/components/Modal/ModalBasic.vue'
import AddMovieForm from '@/components/Form/AddMovieForm.vue'

const movieStore = useMoviesStore()

const { movies } = storeToRefs(movieStore)

const openModal = ref<boolean>(false)
const numberOfMovies = computed<number>(() => {
  return movies?.value?.length
})

const averageRating = computed<number>(() => {
  let ratings: number[] = [0]

  movies?.value?.forEach((item) => {
    if (item.rating !== null) {
      ratings.push(item.rating)
    }
  })

  return Math.round(ratings.reduce((a, v) => a + v) / numberOfMovies.value)
})

const addMovie = (movieData: MovieObject): void => {
  movies?.value?.push(movieData)
}

const clearRatings = (): void => {
  movies?.value?.forEach((item) => {
    item.rating = 0
  })
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-between">
      <div class="flex text-yellow-50">
        <p>Total movies: {{ numberOfMovies }}</p>
        <p class="mx-4">|</p>
        <p>Average rating: {{ averageRating }} / 5</p>
      </div>
      <div>
        <button
          class="rounded bg-orange-400 hover:bg-orange-500 py-1 px-2 mb-8 mr-4 cursor-pointer font-medium"
          @click="clearRatings"
        >
          Reset ratings
        </button>
        <button
          class="rounded bg-yellow-500 hover:bg-yellow-600 py-1 px-2 mb-8 cursor-pointer font-medium"
          @click="openModal = true"
        >
          Add movie
        </button>
      </div>
    </div>

    <MovieCardList :items="movies" />
    <ModalBasic :is-open="openModal">
      <AddMovieForm @close-modal="openModal = false" @add-movie="addMovie" />
    </ModalBasic>
  </div>
</template>
