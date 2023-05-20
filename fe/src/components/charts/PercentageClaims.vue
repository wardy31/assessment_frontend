<template>
  <v-card elevation="4"  flat class="pb-4 mx-6 mx-sm-4 mx-md-0 mx-lg-0 mx-xl-0">
    <v-card-title class="mb-4"><h4>Percentage of Claims</h4></v-card-title>
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
            label: "Claimed",
            backgroundColor: "#AF3033",
            data: [100, 80, 70, 50],
          },
          {
            label: "Not Claimed",
            backgroundColor: "#3d3f47",
            data: [0, 20, 30, 50],
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
