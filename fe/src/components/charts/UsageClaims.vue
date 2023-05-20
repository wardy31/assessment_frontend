<template>
  <v-card flat elevation="0" class="transparent">
    <v-card-title class="">Claims by usage</v-card-title>
    <v-row>
      <v-col cols="12" sm="12" md="4">
        <v-card
          elevation="5 rounded-lg"
          class="mx-6 mx-sm-4 mx-md-0 mx-lg-0 mx-xl-0"
        >
          <div class="py-7">
            <h4 class="text-center mb-2">Private</h4>
            <Doughnut
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
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-card
          elevation="5 rounded-lg"
          class="mx-6 mx-sm-4 mx-md-0 mx-lg-0 mx-xl-0"
        >
          <div class="py-7">
            <h4 class="text-center mb-2">Commercial</h4>
            <Doughnut
              :chart-options="chartOptions"
              :chart-data="chartData2"
              :chart-id="chartId"
              :dataset-id-key="datasetIdKey"
              :plugins="plugins"
              :css-classes="cssClasses"
              :styles="styles"
              :width="width"
              :height="height"
            />
          </div>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
      >
        <v-card
          elevation="5 rounded-lg"
          class="mx-6 mx-sm-4 mx-md-0 mx-lg-0 mx-xl-0"
        >
          <v-date-picker
            v-model="date"
            class="elevation-4"
            width="auto"
          ></v-date-picker>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";
import moment from "moment";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "DoughnutChart",
  computed: {
    dateFormat() {
      return moment().format("MMM DD, YYYY").toString();
    },
  },
  components: {
    Doughnut,
  },
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
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
      default: 260,
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
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      chartData: {
        labels: ["Total Claim", "Average Claim"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#AF3033"],
            data: [240, 180],
          },
        ],
      },
      chartData2: {
        labels: ["Total Claim", "Average Claim"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#AF3033"],
            data: [450, 280],
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
