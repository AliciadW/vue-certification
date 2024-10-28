<script setup lang="ts">
import { ref } from 'vue'

import MovieCardList from '@/components/MovieCard/MovieCardList.vue'
import ModalBasic from '@/components/Modal/ModalBasic.vue'
import AddMovieForm from '@/components/Form/AddMovieForm.vue'

import { items } from '@/assets/movies.json'

interface MovieObject {
  description: string
  genres: string[]
  id: number
  image: string
  inTheaters: boolean
  name: string
  rating: number | null
}

const allItems = ref<MovieObject[]>(items)
const openModal = ref<boolean>(false)

const handleModal = (value: boolean) => {
  openModal.value = value
}

const addMovie = (): void => {
  allItems.value.push({
    description: 'string',
    genres: ['12', '234'],
    id: 8,
    image: 'string',
    inTheaters: false,
    name: 'string',
    rating: 4
  })
}
</script>

<template>
  <div class="flex flex-col">
    <button
      class="self-end rounded bg-yellow-500 hover:bg-yellow-600 py-1 px-2 mb-8 cursor-pointer font-medium"
      @click="handleModal(true)"
    >
      Add movie
    </button>
    <MovieCardList :items="allItems" />
    <ModalBasic @open-modal="handleModal(true)" :is-open="openModal">
      <AddMovieForm @close-modal="handleModal(false)" />
    </ModalBasic>
  </div>
</template>
