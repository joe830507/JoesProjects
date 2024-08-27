<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goToPage = function (location) {
  router.push(location)
}
</script>

<template>
  <nav class="top-nav">
    <div class="icon-area">
      <p class="home-page" @click="goToPage('/')">迷因工作室後台管理系統</p>
    </div>
    <div class="links-area">
      <div class="nav-link-txt" @click="goToPage('/news')">最新消息管理</div>
      <div class="nav-link-txt" @click="goToPage('/members')">會員資料管理</div>
      <div class="nav-link-txt" @click="goToPage('/orders')">訂單管理</div>
    </div>
  </nav>
</template>

<style>
.top-nav {
  @apply bg-slate-800
  pt-1 
  pb-1 
  fixed 
  top-0 
  w-full 
  z-10 
  h-16 
  items-center
  grid 
  grid-cols-6;
}

.home-page {
  @apply ml-12
  cursor-pointer;
  color: yellow;
}

.icon-area {
  @apply col-start-1
  col-span-1;
}

.links-area {
  @apply col-start-2
  col-span-5
  flex
  justify-end;
}

.nav-link-txt {
  @apply w-24 
  rounded-lg 
  mx-2 
  text-center 
  content-center
  cursor-pointer 
  font-mono;
  color: azure;
}

.nav-search {
  @apply w-36 
  rounded-lg 
  mx-2 
  text-center 
  content-center
  outline-none
  border-none;
  color: black;
}
</style>
