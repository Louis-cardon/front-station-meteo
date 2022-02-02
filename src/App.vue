<template id="Template">
  <v-app>
   <nav-bar></nav-bar>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: 'App',
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
@import "assets/CSS/scrollbar.css";
</style>