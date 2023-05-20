<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  mounted() {
    if(!localStorage.getItem('token')){
        this.$router.push('/')
        return; 
    }
    this.$store.dispatch('users/show')
  },
};
</script>
