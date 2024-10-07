<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid'

const props = defineProps(['rating'])
</script>

<template>
  <div class="flex">
    <p class="text-xs mr-1">Rating: ({{ !!rating ? rating : '-' }}/5)</p>
    <div class="flex items-center">
      <button @click.prevent="$emit('selectRating', n)" v-for="n in 5" :key="n">
        <StarIcon
          class="size-4 text-gray-500 hover:text-yellow-500"
          :class="{ 'text-yellow-500': rating >= n }"
        />
      </button>
    </div>
  </div>
</template>
