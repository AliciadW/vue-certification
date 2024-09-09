<script setup lang="ts">
const props = defineProps(['genre'])
</script>

<template>
  <div class="text-xs bg-indigo-600 py-0.5 px-2 text-white w-fit rounded-full mr-1">
    {{ genre }}
  </div>
</template>
