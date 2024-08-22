<script setup>
import { ref } from 'vue'

const fileInput = ref(null)
const fileName = ref('')

// Function to trigger the hidden file input click
const triggerFileInput = () => {
  fileInput.value.click()
}

// Function to handle file selection
const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    fileName.value = file.name
  }
}
</script>

<template>
  <div class="grid">
    <div class="mb-10 ml-5 font-bold">最新消息管理/新增</div>
    <div class="w-80 grid">
      <label for="title">標題:</label>
      <input type="text" name="title" class="border-2 border-black w-96" />
    </div>
    <div class="w-80 grid mt-10">
      <label for="content">內文:</label>
      <textarea name="content" class="border-2 border-black w-96 h-48" />
    </div>
    <div class="btn-group mt-10">
      <input type="file" ref="fileInput" @change="handleFileChange" style="display: none" />
      <button @click="triggerFileInput" class="custom-file-button">選擇圖片</button>
      <button class="ml-10">預覽畫面</button>
    </div>
    <div class="mt-5">
      <p v-if="fileName">已選擇的圖片: {{ fileName }}</p>
    </div>
    <div class="flex justify-center mt-5">
      <button>儲存</button>
    </div>
  </div>
</template>

<style scoped>
button {
  @apply bg-yellow-400 w-24 h-8 border-2 border-black font-mono font-medium;
  font-size: large;
  font-weight: 700;
}
</style>
