<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white p-8 rounded shadow-lg w-80 text-center">
      <h2 class="text-2xl font-bold">[主題]:{{ item.topic }}</h2>
      <p class="mt-4">確認刪除嗎?</p>
      <button
        class="mt-6 bg-blue-500 text-white px-4 py-2 rounded mr-3"
        @click="$emit('delete-confirm', false)"
      >
        取消
      </button>
      <button
        class="mt-6 bg-red-500 text-white px-4 py-2 rounded"
        @click="$emit('delete-confirm', true)"
      >
        確定
      </button>
    </div>
  </div>
</template>

<style scoped>
.black-screen {
  @apply w-full h-auto bg-slate-500;
}
</style>
