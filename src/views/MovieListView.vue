<script setup lang="ts">
// TODO: Create types directory and move out
interface MovieObject {
  description: string
  genres: string[]
  id: number
  image: string
  inTheaters: boolean
  name: string
  rating: number | null
}

import { ref } from 'vue'

import MovieCardList from '@/components/MovieCard/MovieCardList.vue'
import ModalBasic from '@/components/Modal/ModalBasic.vue'
import AddMovieForm from '@/components/Form/AddMovieForm.vue'

import { items } from '@/assets/movies.json'

const allItems = ref<MovieObject[]>(items)
const openModal = ref<boolean>(false)

const addMovie = (movieData: MovieObject): void => {
  allItems.value.push(movieData)
}
</script>

<template>
  <div class="flex flex-col">
    <button
      class="self-end rounded bg-yellow-500 hover:bg-yellow-600 py-1 px-2 mb-8 cursor-pointer font-medium"
      @click="openModal = true"
    >
      Add movie
    </button>
    <MovieCardList :items="allItems" />
    <ModalBasic :is-open="openModal">
      <AddMovieForm @close-modal="openModal = false" @add-movie="addMovie" />
    </ModalBasic>
  </div>
</template>
