<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="content-area">
    <RouterView />
  </div>
</template>

<style scoped>
.content-area {
  @apply flex-grow 
  pt-36 
  container 
  mx-auto 
  px-[10%];
}
</style>