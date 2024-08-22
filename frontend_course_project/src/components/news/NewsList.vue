<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import ModalView from '@/components/news/ModalView.vue'
const router = useRouter()
const isModalShow = ref(false)
const currentDeleteItem = ref({})
const deleteActionListener = function (flag) {
  if (flag) {
    const index = newsList.value.findIndex((obj) => obj.id === currentDeleteItem.value.id)
    if (index !== -1) {
      newsList.value.splice(index, 1)
      console.log(index, newsList)
    }
  }
  isModalShow.value = false
}
const deleteModalHandler = function (item) {
  isModalShow.value = true
  currentDeleteItem.value = item
}
const updateHandler = function (item) {
  router.push({ name: 'UpdateNews', params: { id: item.id } })
}
const newsList = ref([
  {
    id: '00001',
    createTime: '2024/08/13',
    creator: '王大明',
    topic: '嚇死你不償命',
    status: 1
  },
  {
    id: '00002',
    createTime: '2024/08/14',
    creator: '王小明',
    topic: '嚇死你不一定償命',
    status: 1
  }
])
const transToReadableTxt = function (status) {
  return status === 1 ? '隱藏' : '顯示'
}
</script>

<template>
  <div class="news">
    <div class="mb-10 ml-5 font-bold">最新消息管理/查詢</div>
    <div class="bt-group">
      <button @click="router.push({ name: 'AddNews' })">新增</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>發佈日期</th>
          <th>發佈者</th>
          <th>主題</th>
          <th>狀態</th>
          <th>動作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="newsList.length === 0">
          <td colspan="5">目前暫無資料</td>
        </tr>
        <tr v-for="item in newsList" :key="item.id">
          <td>{{ item.createTime }}</td>
          <td>{{ item.creator }}</td>
          <td>{{ item.topic }}</td>
          <td class="underline mx-2 underline-offset-2">
            {{ transToReadableTxt(item.status) }}
          </td>
          <td>
            <button @click="updateHandler(item)">修改</button>
            <button @click="deleteModalHandler(item)">刪除</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5">
            <div>
              <button>{{ '<' }}</button>
              <input type="text" value="1" readonly />
              <button>{{ '>' }}</button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  <ModalView
    v-if="isModalShow"
    :item="currentDeleteItem"
    @delete-confirm="deleteActionListener"
  ></ModalView>
</template>

<style scoped>
.news {
  .bt-group {
    @apply w-full mb-5 flex justify-end;
    button {
      @apply bg-orange-400 border-2 border-orange-200 w-16 h-7;
    }
  }

  table {
    @apply table-auto w-full border-collapse border-orange-400 border-x-2 border-y-2;
  }

  thead {
    @apply bg-orange-100;
  }

  tbody {
    @apply text-center;
    td {
      @apply border-b border-t border-x-2 border-y-2 border-orange-400;
      button {
        @apply underline mx-2 underline-offset-2;
      }
    }
  }

  tfoot {
    @apply text-center mt-5 mb-5 h-10 bg-orange-100;

    button {
      @apply bg-orange-200 w-10;
    }

    input {
      @apply text-center w-10 mx-2;
      outline: none;
    }
  }
}

.model-view-hidden {
  display: none;
}
</style>
