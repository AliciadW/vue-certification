import type { MovieObject } from '@/types/movieTypes'

import { ref } from 'vue'
import { defineStore } from 'pinia'

import { items } from '@/assets/movies.json'

export const useMoviesStore = defineStore('movies', () => {
  // refs - state
  const movies = ref<MovieObject[]>(items)

  // computed - getters

  // functions - actions
  return { movies }
})
