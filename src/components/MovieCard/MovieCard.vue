<script setup lang="ts">
import MovieCardImage from '@/components/MovieCard/MovieCardImage.vue'
import MovieCardDetail from '@/components/MovieCard/MovieCardDetail.vue'

const props = defineProps(['item'])

/*
 This is an Icon that you can use to represent the stars if you like
 otherwise you could just use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="flex flex-col">
    <MovieCardImage :image="item.image" />

    <MovieCardDetail :item />
  </div>
</template>
