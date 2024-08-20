<script setup lang="ts">
import MovieCardsList from '@/components/MovieCards/MovieCardsList.vue'

import { items } from '@/assets/movies.json'
</script>

<template>
  <MovieCardsList :items />
</template>

<style scoped></style>
