<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid'

const props = defineProps(['image', 'rating'])
</script>

<template>
  <div class="relative">
    <img
      class="object-cover object-center h-[450px] w-full rounded-t-lg"
      alt="Movie image"
      :src="image"
    />
    <div class="absolute top-2 right-2">
      <StarIcon class="size-8 text-gray-500 relative" :class="{ 'text-yellow-500': !!rating }" />
      <p class="absolute text-xs leading-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {{ !!rating ? rating : '-' }}
      </p>
    </div>
  </div>
</template>
