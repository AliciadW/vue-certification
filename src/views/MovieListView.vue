<script setup lang="ts">
import MovieCardList from '@/components/MovieCard/MovieCardList.vue'

import { items } from '@/assets/movies.json'
</script>

<template>
  <MovieCardList :items />
</template>

<style scoped></style>
