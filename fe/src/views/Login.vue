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
            <div class="text-center mb-12">
              <h2 class="primary--text font-weight-bold">ACECIC</h2>
            </div>

            <h4 class="mb-4 font-weight-bold">
              Login <span class="primary--text font-weight-bold">Account</span>
            </h4>
            <v-text-field
              label="Email Address"
              outlined
              filled
              v-model="form.email"
              :error-messages="error.email"
            ></v-text-field>
            <v-text-field
              label="Password"
              outlined
              filled
              type="password"
              v-model="form.password"
              :error-messages="error.password"
            ></v-text-field>

            <v-btn
              class="text-capitalize py-6 font-weight-bold"
              block
              color="primary"
              :loading="loading"
              @click="login"
              >Login</v-btn
            >
            <v-btn
              class="text-capitalize py-6 font-weight-bold mt-2"
              text
              block
              plain
              @click="$router.push('/create-account')"
              >Create Account</v-btn
            >
          </v-card>
          <v-snackbar v-model="success" color="success" right top>
            <v-icon left>check</v-icon>
            Successfully Login
          </v-snackbar>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LoginView",
  computed: {
    ...mapState({
      loading: (state) => state.users.show.loading,
      error: (state) => state.users.show.error,
    }),
  },
  data: () => ({
    success: false,
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    async login() {
      const res = await this.$store.dispatch("users/setLogin", this.form);

      if (res) {
        this.success = true;
        this.$router.push("/user/dashboard");
        this.form.email = "";
        this.form.password = "";
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
