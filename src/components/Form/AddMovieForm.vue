<script setup lang="ts">
import { ref } from 'vue'

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

interface GenreObject {
  text: string
  value: string
}

const emit = defineEmits(['close-modal', 'add-movie'])

const movieData = ref<MovieObject>({
  description: '',
  genres: [],
  id: 0,
  image: '',
  inTheaters: true,
  name: '',
  rating: 0
})
// Random selection of genres
const genres = ref<GenreObject[]>([
  { text: 'Drama', value: 'drama' },
  { text: 'Action', value: 'action' },
  { text: 'Comedy', value: 'comedy' },
  { text: 'Science fiction', value: 'sci-fi' },
  { text: 'Adventure', value: 'adventure' }
])

const closeModal = () => {
  // clear form, close modal
  emit('close-modal')
}

const addMovie = () => {
  // TODO: Validation, clean up

  // validate form
  // add movie
  emit('add-movie', movieData.value)

  // clear form, close modal
  movieData.value = {
    description: '',
    genres: [],
    id: 0,
    image: '',
    inTheaters: true,
    name: '',
    rating: 0
  }

  emit('close-modal')
}
</script>

<template>
  <div class="p-4">
    <div class="flex flex-col mb-3">
      <label for="name">Name</label>
      <input
        class="border rounded-md border-stone-500"
        type="text"
        id="name"
        name="name"
        required
        size="10"
        v-model="movieData.name"
      />
    </div>

    <div class="flex flex-col mb-3">
      <label for="name">Description</label>
      <input
        class="border rounded-md border-stone-500"
        type="text"
        id="description"
        name="description"
        size="10"
        v-model="movieData.description"
      />
    </div>

    <div class="flex flex-col mb-3">
      <label for="name">Image</label>
      <input
        class="border rounded-md border-stone-500"
        type="text"
        id="image"
        name="image"
        size="10"
        v-model="movieData.image"
      />
    </div>

    <div class="flex flex-col mb-3">
      <label for="genres">Genre</label>
      <select
        class="border rounded-md border-stone-500"
        name="genres"
        id="genres"
        multiple
        v-model="movieData.genres"
      >
        <option disabled value="">Please select genres</option>
        <option v-for="(genre, i) in genres" :key="i" :value="genre.value">{{ genre.text }}</option>
      </select>
    </div>

    <div class="flex align-middle mb-3">
      <label class="mr-3" for="inTheatres">In theaters</label>
      <input type="checkbox" id="inTheatres" name="inTheatres" v-model="movieData.inTheaters" />
    </div>

    <div class="flex justify-between">
      <button
        class="rounded bg-yellow-500 hover:bg-yellow-600 py-1 px-2 cursor-pointer font-medium"
        @click="closeModal"
      >
        Cancel
      </button>

      <button
        class="rounded bg-yellow-500 hover:bg-yellow-600 py-1 px-2 cursor-pointer font-medium"
        @click="addMovie"
      >
        Save
      </button>
    </div>
  </div>
</template>
