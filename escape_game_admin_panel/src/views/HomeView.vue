<script setup>
import { ref } from 'vue'
import { Pie, Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

// Register the necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale)

const pieData = ref({
  labels: ['台北館', '台中館'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [60, 40]
    }
  ]
})

const pieOptions = ref({
  responsive: true,
  maintainAspectRatio: false
})

const chartData = ref({
  labels: ['武石監', '時空迷宮', '逃出虛空', '末日庇護所', '恐怖密室', '成都醫院'],
  datasets: [
    {
      label: '遊玩次數',
      backgroundColor: '#42A5F5',
      data: [170000, 180000, 50000, 160000, 230000, 170000]
    }
  ]
})

const chartOptions = ref({
  indexAxis: 'y', // This makes the bar chart horizontal
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      beginAtZero: true
    }
  },
  width: '400px'
})

const tickets = [
  {
    gameName: '成都醫院',
    '10-12': 'ABC1122335',
    '13-15': 'SFW1235239',
    '15-17': '',
    '18-20': 'AQS1295674'
  },
  {
    gameName: '恐怖密室',
    '10-12': '',
    '13-15': 'SFW1235239',
    '15-17': 'ABC1122335',
    '18-20': 'AQS1295674'
  },
  {
    gameName: '末日庇護所',
    '10-12': 'ABC1122335',
    '13-15': '',
    '15-17': 'SFW1235239',
    '18-20': ''
  },
  {
    gameName: '逃出虛空',
    '10-12': '',
    '13-15': '',
    '15-17': '',
    '18-20': ''
  },
  {
    gameName: '時空迷宮',
    '10-12': '',
    '13-15': 'SFW1235239',
    '15-17': 'ABC1122335',
    '18-20': 'AQS1295674'
  },
  {
    gameName: '武石藍',
    '10-12': 'ABC1122335',
    '13-15': '',
    '15-17': '',
    '18-20': 'AQS1295674'
  }
]
</script>

<template>
  <div class="dashboard">
    <div class="calendar">
      <VCalendar borderless expanded />
    </div>
    <div class="schedule">
      <table>
        <thead>
          <tr>
            <th class="w-30 h-14"></th>
            <th class="w-auto">10:00 ~ 12:00</th>
            <th class="w-auto">13:00 ~ 15:00</th>
            <th class="w-auto">15:00 ~ 17:00</th>
            <th class="w-auto">18:00 ~ 20:00</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tickets" :key="item">
            <td class="w-30 bg-yellow-300">
              {{ item.gameName }}
            </td>
            <td class="w-auto">{{ item['10-12'] }}</td>
            <td class="w-auto">{{ item['13-15'] }}</td>
            <td class="w-auto">{{ item['15-17'] }}</td>
            <td class="w-auto">{{ item['18-20'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="barChart">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
    <div class="pieChart">
      <Pie :data="pieData" :options="pieOptions" />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  @apply grid grid-cols-12 border-2 border-gray-500;
  .calendar {
    @apply col-span-5 border-2 border-gray-500;
  }
  .schedule {
    @apply col-span-7 border-2 border-gray-500;

    table {
      @apply w-full h-full;
    }
    thead {
      @apply bg-yellow-300;
      th {
        @apply border-2 border-yellow-600;
      }
    }
    tbody {
      tr {
        @apply h-auto text-center;
        td {
          @apply border-2 border-yellow-600;
        }
      }
    }
  }
  .barChart {
    @apply h-64 col-span-7 border-2 border-gray-500;
  }
  .pieChart {
    @apply h-64 col-span-5 border-2 border-gray-500;
  }
}
</style>
