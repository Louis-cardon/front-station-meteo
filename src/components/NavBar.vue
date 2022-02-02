<template>
  <v-card class="overflow-hidden">
    <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
    >

      <router-link to="/">
        <v-img src="weatherLogo.png" width="50px" height="50px"/>
      </router-link>

      <v-toolbar-title>Station Météo</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/">
      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      </router-link>

      <router-link to="/connexion">
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      </router-link>

      <router-link to="/home">
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      </router-link>

      <router-link to="/connexion">
        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>

    </v-app-bar>
    <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        height="100vh"
    >
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
a
{
text-decoration: none;
}
</style>