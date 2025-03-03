import type { MovieObject } from '@/types/movieTypes'

import { ref } from 'vue'
import { defineStore } from 'pinia'

import { items } from '@/assets/movies.json'

export const useMoviesStore = defineStore('movies', () => {
  // refs - state
  const movies = ref<MovieObject[]>(items)
  const modalOpen = ref<boolean>(false)
  const existingMovie = ref<boolean>(false)
  const movieData = ref<MovieObject>({
    description: '',
    genres: [],
    id: 0,
    image: '',
    inTheaters: true,
    name: '',
    rating: 0
  })

  // computed - getters

  // functions - actions
  const movieIndex = (name: string): number => {
    return  movies.value.findIndex((movie) => movie.name === name)
  }

  const deleteMovieFromList = (name: string): void => {
    movies.value = movies.value.filter((movie) => movie.name !== name)
  }

  const addMovie = (movieData: MovieObject): void => {
    if (existingMovie.value) {
      modalOpen.value = false
      existingMovie.value = false
      return
    }

    movies.value.push(movieData)
  }

  const updateRating = (rating: number, name: string): void => {
    movies.value[movieIndex(name)].rating = rating
  }

  const updateMovie = (name: string): void => {
    modalOpen.value = true
    existingMovie.value = true

    movieData.value = movies.value[movieIndex(name)]
  }

  return { movies, modalOpen, existingMovie, movieData, deleteMovieFromList, addMovie, updateRating, updateMovie }
})
