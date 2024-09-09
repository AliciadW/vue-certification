<script setup lang="ts">
const props = defineProps(['image'])
</script>

<template>
  <img
    class="object-cover object-center h-[450px] w-full rounded-t-lg"
    :src="image"
    alt="Movie image"
  />
</template>
