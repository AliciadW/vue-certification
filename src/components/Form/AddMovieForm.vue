<script setup lang="ts">
const emit = defineEmits(['close-modal'])

// Random selection of genres
const genres: string[] = ['Drama', 'Action', 'Comedy', 'Science fiction', 'Adventure']

const closeModal = () => {
  // clear form, close modal
  emit('close-modal')
}

const addMovie = () => {
  // validate form
  // add movie
  // clear form, close modal
  console.log('add movie')
}
</script>

<template>
  <div class="p-3">
    <div class="flex flex-col mb-3">
      <label for="name">Name</label>
      <input
        class="border rounded-md border-stone-500"
        type="text"
        id="name"
        name="name"
        required
        size="10"
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
      />
    </div>

    <div class="flex flex-col mb-3">
      <label for="genres">Genre</label>
      <select class="border rounded-md border-stone-500" name="genres" id="genres" multiple>
        <option value="">Select a genre</option>
        <option v-for="(genre, i) in genres" :key="i" value="genre">{{ genre }}</option>
      </select>
    </div>

    <div class="flex align-middle mb-3">
      <label class="mr-3" for="inTheatres">In theaters</label>
      <input type="checkbox" id="inTheatres" name="inTheatres" checked />
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
