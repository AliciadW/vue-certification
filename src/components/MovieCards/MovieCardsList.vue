<script setup lang="ts">
import MovieCard from '@/components/MovieCards/MovieCard.vue'

const props = defineProps(['items'])
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <MovieCard v-for="item in items" :key="item.id" :item />
  </div>
</template>

<style scoped></style>
