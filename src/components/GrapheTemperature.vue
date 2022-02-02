<template>
  <div>
    <canvas id="temp-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import TempChartData from "@/assets/GrapheTemperature";

export default {
  name: "GrapheTemperature",
  data() {
    return {
      TempChartData: TempChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('temp-chart');
    new Chart(ctx, this.TempChartData);
  }
}
</script>

<style scoped>

</style>