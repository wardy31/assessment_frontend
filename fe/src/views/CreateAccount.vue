<template>
  <v-app>
    <v-main>
      <v-row align="center">
        <v-col
          cols="12"
          sm="12"
          md="8"
          lg="8"
          xl="8"
          style="position: relative"
        >
          <div
            style="
              position: absolute;
              /* background-color: rgba(255, 0, 0, 0.4); */
              top: 0;
              left: 0;
              right: 0;
            "
            class=""
          >
            <h1
              class="text-center text-h2 font-weight-bold secondary--text mt-16 pt-4"
            >
              Ace Commercial
              <span
                class="d-block text-h2 font-weight-bold secondary--text mt-2"
                >Trucking Insurance</span
              >
            </h1>
          </div>
          <img
            :src="require('../assets/truck.jpg')"
            style="width: 100%; height: 100vh"
          /><img />
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4">
          <v-card
            tile
            elevation="0"
            class="my-auto mx-auto px-4 px-md-3 px-lg-6 px-xl-8 px-sm-16"
          >
            <!-- <div class="text-center mb-12">
              <h2 class="primary--text font-weight-bold">Logo</h2>
            </div> -->

            <h3 class="mb-4 font-weight-bold">
              Create <span class="primary--text font-weight-bold">Account</span>
            </h3>
            <h4 class="mt-n5 text--disabled font-weight-thin mb-8">
              Please Fill up the form
            </h4>
            <v-text-field
              label="Full Name"
              outlined
              filled
              :error-messages="error.name"
              v-model="form.name"
            ></v-text-field>
            <v-text-field
              label="Email Address"
              outlined
              filled
              :error-messages="error.email"
              v-model="form.email"
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              outlined
              filled
              :error-messages="error.password"
              v-model="form.password"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              type="password"
              outlined
              filled
              :error-messages="error.password"
              v-model="form.password_confirmation"
            ></v-text-field>

            <v-btn
              class="text-capitalize py-6 font-weight-bold"
              block
              :loading="loading"
              color="primary"
              @click="register"
              >Register</v-btn
            >
            <v-btn
              class="text-capitalize py-6 font-weight-bold mt-2"
              text
              block
              plain
              @click="$router.push('/')"
              >Back to login</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar v-model="success" color="success" right top>
        <v-icon left>check</v-icon>
        Successfully Registered
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CreateView",
  computed: {
    ...mapState({
      loading: (state) => state.users.create.loading,
      error: (state) => state.users.create.error,
    }),
  },
  data: () => ({
    success: false,
    form: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  }),
  methods: {
    async register() {
      const res = await this.$store.dispatch("users/createAccount", this.form);
      if (res) {
        this.success = true;
        this.form.email = "";
        this.form.name = "";
        this.form.password = "";
        this.form.password_confirmation = "";
      }
    },
  },
};
</script>

<!-- <style scoped>
  .bg {
    background-image: url(../assets/truck.jpg);
    background-position: center;
    background-size: cover;
    z-index: -1;
  }
  </style> -->
