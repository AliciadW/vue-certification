<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid'

const props = defineProps(['rating'])
</script>

<template>
  <div class="flex">
    <p class="mr-1">Rating: ({{ rating }})</p>
    <div class="flex items-center">
      <span v-for="n in rating" :key="n"> <StarIcon class="size-4 text-yellow-500" /> </span>
    </div>
  </div>
</template>
