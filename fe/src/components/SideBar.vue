<template>
  <v-navigation-drawer color="primary" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h5 font-weight-bold white--text"
          >ACECIC
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list nav flat class="mt-8">
      <v-list-item-group mandatory active-class="border" dark color="white">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.border {
  background-color: white;
  color: #af3033;
  font-weight: bold;
}
</style>
