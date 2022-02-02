<template>
  <v-container class="mt-7">
    <v-row justify="center"  align="center" style="height: 90vh">
      <v-col cols="12">
      <graphe-temperature></graphe-temperature>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import GrapheTemperature from "@/components/GrapheTemperature";
  export default {
    name: 'Home',

    components: {
      GrapheTemperature
    },
  }
</script>
