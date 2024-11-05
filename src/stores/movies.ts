import type { MovieObject } from '@/types/movieTypes'

import { ref } from 'vue'
import { defineStore } from 'pinia'

import { items } from '@/assets/movies.json'

export const useMoviesStore = defineStore('movies', () => {
  // refs - state
  const movies = ref<MovieObject[]>(items)

  // computed - getters

  // functions - actions
  const deleteMovieFromList = (name: string): void => {
    movies.value = movies.value.filter((movie) => movie.name !== name)
  }

  const addMovie = (movieData: MovieObject): void => {
    movies.value.push(movieData)
  }

  const updateRating = (rating: number, name: string): void => {
    const movieIndex = movies.value.findIndex((movie) => movie.name === name)

    movies.value[movieIndex].rating = rating
  }

  return { movies, deleteMovieFromList, addMovie, updateRating }
})
