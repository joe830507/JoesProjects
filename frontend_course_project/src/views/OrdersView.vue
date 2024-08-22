<script setup>
import { ref } from 'vue'
const item = ref({
  createTime: null,
  branch: null,
  topic: null,
  status: null,
  orderId: null
})
const newsList = ref([
  {
    id: '00001',
    createDate: '2024/08/13',
    createTime: '13:27:30',
    branch: '台北',
    topic: '成都醫院',
    name: '王大明',
    mobile: '09xxxxxxxx',
    email: 'example@google.com',
    status: 1,
    quantity: 8,
    total: 8000
  },
  {
    id: '00001',
    createDate: '2024/08/14',
    createTime: '20:13:03',
    branch: '台中',
    topic: '成都醫院',
    name: '王小明',
    mobile: '09xxxxxxxx',
    email: 'example2@google.com',
    status: 1,
    quantity: 11,
    total: 9000
  }
])
const transToReadableTxt = function (status) {
  return status === 1 ? '正常' : '異常'
}
</script>

<template>
  <div class="grid">
    <div class="mb-10 ml-5 font-bold">訂單管理</div>
    <div class="input-group">
      <input
        type="text"
        class="border-2 border-black h-8"
        v-model="item.createTime"
        placeholder="時間選擇"
      />
      <input
        type="text"
        class="border-2 border-black h-8 ml-20"
        v-model="item.branch"
        placeholder="分店選擇"
      />
      <input
        type="text"
        class="border-2 border-black h-8 ml-20"
        v-model="item.topic"
        placeholder="主題選擇"
      />
      <input
        type="text"
        class="border-2 border-black h-8 ml-20"
        v-model="item.status"
        placeholder="狀態篩選"
      />
      <input
        type="text"
        class="border-2 border-black h-8 ml-20"
        v-model="item.orderId"
        placeholder="訂單編號查詢"
      />
    </div>
    <div class="flex justify-center mt-5">
      <button class="bt-custom">查詢</button>
    </div>
    <div class="orders">
      <table>
        <thead>
          <tr>
            <th>日期</th>
            <th>時間</th>
            <th>訂單編號</th>
            <th>分店</th>
            <th>主題</th>
            <th>姓名</th>
            <th>電話</th>
            <th>E-Mail</th>
            <th>狀態</th>
            <th>人數</th>
            <th>總額</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="newsList.length === 0">
            <td colspan="5">目前暫無資料</td>
          </tr>
          <tr v-for="item in newsList" :key="item.id">
            <td>{{ item.createDate }}</td>
            <td>{{ item.createTime }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.branch }}</td>
            <td>{{ item.topic }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.mobile }}</td>
            <td>{{ item.email }}</td>
            <td class="underline mx-2 underline-offset-2">
              {{ transToReadableTxt(item.status) }}
            </td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="11">
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
  </div>
</template>

<style scoped>
.bt-custom {
  @apply bg-yellow-400 w-24 h-8 border-2 border-black font-mono font-medium;
  font-size: large;
  font-weight: 700;
}

.orders {
  @apply mt-5;

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
</style>
