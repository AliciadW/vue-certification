<script setup lang="ts">
import { ref } from 'vue'

import MovieCardImage from '@/components/MovieCard/MovieCardImage.vue'
import MovieCardDetail from '@/components/MovieCard/MovieCardDetail.vue'

const props = defineProps(['item'])

const rating = ref<number | null>(props.item.rating)
</script>

<template>
  <div class="flex flex-col">
    <MovieCardImage :image="item.image" :rating="rating" />

    <MovieCardDetail :item @update-rating="rating = $event" />
  </div>
</template>
