<template>
  <v-app>
    <SideBar />
    <AppBar />
    <v-main class="bg">
      <v-container class="mx-12 mx-lg-8 mx-xl-8 mt-4">
        <h2 class="accent--text mb-6">Dashboard</h2>
        <UsageClaims />
        <v-row>
          <v-col>
            <ClaimsVehicle />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <PercentageClaims />
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <NumberClaims />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="5" lg="5" xl="5">
            <div>
              <v-card elevation="3" class="pb-4 mx-6 mx-sm-4 mx-md-0 mx-lg-0 mx-xl-0">
                <v-card-title>
                  <h5 class="primary--text mb-n3">Customers List</h5>
                </v-card-title>
                <v-list>
                  <v-list-item two-line>
                    <v-list-item-avatar>
                      <v-avatar color="primary">
                        <img
                          src="https://cdn.vuetifyjs.com/images/john.jpg"
                          alt="John"
                        />
                      </v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold"
                        ><h5>John Doe</h5></v-list-item-title
                      >
                      <v-list-item-subtitle
                        >johndoe@gmail.com</v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-chip color="success" small class="px-4"> Active </v-chip>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-avatar>
                      <v-avatar color="primary">
                        <img
                          src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                          alt="John"
                        />
                      </v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold"
                        ><h5>Charles Mc</h5></v-list-item-title
                      >
                      <v-list-item-subtitle
                        >mccharles20@gmail.com</v-list-item-subtitle
                      >
                    </v-list-item-content>
                    <v-chip color="success" small class="px-4"> Active </v-chip>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-avatar>
                      <v-avatar color="primary">
                        <img
                          src="
                        https://randomuser.me/api/portraits/women/85.jpg"
                          alt="John"
                        />
                      </v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold"
                        ><h5>Selena Main</h5></v-list-item-title
                      >
                      <v-list-item-subtitle
                        >seleena.main092@gmail.com</v-list-item-subtitle
                      >
                    </v-list-item-content>
                    <v-chip color="warning" small class="px-4">
                      Pending
                    </v-chip>
                  </v-list-item>
                </v-list>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="7" lg="7" xl="7">
            <v-card class="pb-4 mx-6 mx-sm-4 mx-md-0 mx-lg-0 mx-xl-0">
              <v-card-title>
                <h5 class="primary--text">Upcoming Meetings</h5></v-card-title
              >
              <v-simple-table>
                <thead>
                  <tr class="">
                    <th class="text-left">Customer</th>
                    <th class="text-left">Agenda</th>
                    <th>Date Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="font-weight-bold">John Doe</span>
                      <span class="d-block accent--text"
                        >johndoe@gmail.com</span
                      >
                    </td>
                    <td>Truck Company Insurance</td>
                    <td>
                      {{ dateFormat }}
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import AppBar from "@/components/AppBar.vue";
import moment from "moment";

// Charts
import NumberClaims from "../../../components/charts/NumberClaims.vue";
import PercentageClaims from "../../../components/charts/PercentageClaims.vue";
import UsageClaims from "../../../components/charts/UsageClaims.vue";
import ClaimsVehicle from "@/components/charts/ClaimsVehicle.vue";

export default {
  components: {
    SideBar,
    AppBar,
    NumberClaims,
    PercentageClaims,
    UsageClaims,
    ClaimsVehicle,
  },
  name: "DashboardView",
  computed: {
    dateFormat() {
      return moment().format("MMM DD, YYYY").toString();
    },
  },
  filters: {},
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
  methods: {
    allowedDates: (val) => parseInt(val.split("-")[2], 10) % 2 === 0,
  },
};
</script>

<style>
.bg {
  background-color: #f8f8f8;
}
</style>
