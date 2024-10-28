<script setup lang="ts">
const props = defineProps(['isOpen'])
</script>

<template>
  <template v-if="isOpen">
    <div class="modal-background" />

    <div class="modal rounded bg-white">
      <slot />
    </div>
  </template>
</template>

<style scoped>
.modal-background {
  background: black;
  opacity: 65%;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}

.modal {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
}
</style>
