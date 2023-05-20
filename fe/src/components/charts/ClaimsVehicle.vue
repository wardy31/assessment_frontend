<template>
    <v-card elevation="4" flat class="pb-4 mx-6 mx-sm-4 mx-md-0 mx-lg-0 mx-xl-0">
      <v-card-title class="mb-2">Claims by type of vehicles</v-card-title>
      <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
      />
    </v-card>
  </template>
  
  <script>
  import { Bar } from "vue-chartjs/legacy";
  
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
  
  export default {
    name: "BarChart",
    components: {
      Bar,
    },
    props: {
      chartId: {
        type: String,
        default: "bar-chart",
      },
      datasetIdKey: {
        type: String,
        default: "label",
      },
      width: {
        type: Number,
        default: 400,
      },
      height: {
        type: Number,
        default: 280,
      },
      cssClasses: {
        default: "",
        type: String,
      },
      styles: {
        type: Object,
        default: () => {},
      },
      plugins: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        chartData: {
          labels: [
          "Minivan",
          "Panel Truck",
          "Pickup",
          "SUV"
          ],
          datasets: [
            {
              label: "Total Claims",
              backgroundColor: "#41B883",
              data: [40, 20, 12, 28],
            },
            {
              label: "Average Claims",
              backgroundColor: "#AF3033",
              data: [29, 16, 4, 39],
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
        },
      };
    },
  };
  </script>
  