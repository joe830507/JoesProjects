<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goToPage = function (location: string) {
  router.push({ name: location })
}
</script>

<template>
  <nav class="top-nav">
    <div class="icon-area">
      <p @click="goToPage('Home')">Shopping Admin Panel</p>
    </div>
    <div class="links-area">
      <div @click="goToPage('Member')">Member</div>
      <div @click="goToPage('Order')">Order</div>
      <div @click="goToPage('Product')">Product</div>
      <div @click="goToPage('Report')">Report</div>
      <div @click="goToPage('Employee')">Employee</div>
      <div @click="goToPage('Authorization')">Authorization</div>
    </div>
  </nav>
</template>

<style scoped>
.top-nav {
  @apply bg-slate-800 pt-1 pb-1 fixed top-0 w-full z-10 h-16 items-center 
  grid grid-cols-6;

  .icon-area {
    @apply col-start-1 col-span-1;
    p {
      @apply ml-12 cursor-pointer;
      color: yellow;
    }
  }

  .links-area {
    @apply col-start-2 col-span-5 flex justify-end;
    div {
      @apply w-24 rounded-lg mx-4 text-center content-center cursor-pointer font-mono;
      color: azure;
    }
  }
}
</style>
