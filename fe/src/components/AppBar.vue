<template>
  <v-app-bar app flat color="transparent" hide-on-scroll>
    <v-app-bar-nav-icon class="" large color="primary" @click="$emit('handleDialog')"></v-app-bar-nav-icon>
    <v-toolbar-title
      ><h5>
        Welcome, <span class="primary--text ml-2">{{ user.name }}</span>
      </h5></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-btn class="text-capitalize font-weight-bold" color="primary" text @click="logout"
      ><v-icon left>logout</v-icon>Logout</v-btn
    >
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed:{
    ...mapState({
      user: state => state.users.show.data
    })
  },
  data() {
    return {};
  },
  methods: {
    async logout() {
      const res =await this.$store.dispatch('users/setLogout')
      if(res){
        this.$router.push('/')
      }
    },
  },
};
</script>
