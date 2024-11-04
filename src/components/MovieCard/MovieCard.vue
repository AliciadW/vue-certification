<script setup lang="ts">
import { ref, watch } from 'vue'

import MovieCardImage from '@/components/MovieCard/MovieCardImage.vue'
import MovieCardDetail from '@/components/MovieCard/MovieCardDetail.vue'

const props = defineProps(['item'])

const rating = ref<number | null>(props.item.rating)

watch(
  props.item,
  () => {
    rating.value = props.item.rating
  },
  { immediate: true }
)
</script>

<template>
  <div class="flex flex-col">
    <MovieCardImage :image="item.image" :rating />

    <MovieCardDetail :item @update-rating="rating = $event" />
  </div>
</template>
