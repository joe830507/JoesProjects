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
</script>

<template>
  <div class="flex">
    <div class="w-96 h-64">
      <Pie :data="pieData" :options="pieOptions" class="w-full h-96" />
    </div>
    <div class="w-96 h-64">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
    <div>
      <VCalendar borderless />
    </div>
  </div>
</template>
