<script setup>
import { ref } from 'vue'
const memberState = ref(0)
const newsList = ref([
  {
    id: '00001',
    createTime: '2024/08/13',
    name: '王大明',
    age: 30,
    email: 'example@google.com',
    mobile: '09xxxxxxxx',
    status: 1
  },
  {
    id: '00001',
    createTime: '2024/08/13',
    name: '王大明',
    age: 30,
    email: 'example@google.com',
    mobile: '09xxxxxxxx',
    status: 1
  }
])
const transToReadableTxt = function (status) {
  return status === 1 ? '正常' : '異常'
}
</script>

<template>
  <div class="grid">
    <div class="mb-10 ml-5 font-bold">會員資料管理</div>
    <div class="input-group">
      <input type="text" class="border-2 border-black h-8" placeholder="關鍵字查詢" />
      <select
        v-model="memberState"
        class="border-2 border-black ml-5 w-32 h-8"
        placeholder="狀態篩選"
      >
        <option :value="0" disabled selected>狀態篩選</option>
        <option :value="1">正常</option>
        <option :value="2">異常</option>
      </select>
    </div>
    <div class="flex justify-center">
      <button class="bt-custom">查詢</button>
    </div>
    <div class="members">
      <table>
        <thead>
          <tr>
            <th>註冊日期</th>
            <th>姓名</th>
            <th>年齡</th>
            <th>E-Mail</th>
            <th>電話</th>
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
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.mobile }}</td>
            <td class="my-custom-underline mx-2">
              {{ transToReadableTxt(item.status) }}
            </td>
            <td>
              <button>檢視訂單</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="7">
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
.my-custom-underline {
  @apply underline underline-offset-2;
}

.bt-custom {
  @apply bg-yellow-400 w-24 h-8 border-2 border-black font-mono font-medium;
  font-size: large;
  font-weight: 700;
}

.members {
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
