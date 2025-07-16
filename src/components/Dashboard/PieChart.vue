<template>  
<div>
  <Pie
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</div>
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { Pie } from 'vue-chartjs'
import { ref } from 'vue'
import ChartDataLabels from 'chartjs-plugin-datalabels'


ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels)

const dataset = [300, 50, 500];

// Use ref for data and options
const chartData = ref({
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: dataset,
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 0
  }]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
  cutout: 35,
  plugins: {
    datalabels: {
      color: 'black',
      font: {
        weight: 'bold'
      },
      align: 'center',
      backgroundColor: '',
      formatter: (value, ctx) => {
        const data = ctx.chart.data.datasets[0].data;
        const total = data.reduce((a, b) => a + b, 0);
        const percentage = ((value / total) * 100).toFixed(1);
        return `${value} (${percentage}%)`; // shows both value and percentage
      }
    }
  }
})
</script>