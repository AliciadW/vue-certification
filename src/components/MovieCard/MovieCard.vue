<script setup lang="ts">
import MovieCardImage from '@/components/MovieCard/MovieCardImage.vue'
import MovieCardDetail from '@/components/MovieCard/MovieCardDetail.vue'

const props = defineProps(['item'])
</script>

<template>
  <div class="flex flex-col">
    <MovieCardImage :image="item.image" />

    <MovieCardDetail :item />
  </div>
</template>
