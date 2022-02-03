<template>
  <v-container class="mt-12">
    <v-row justify="center"  align="center" style="height: 90vh">
      <v-col cols="12" lg="10" md="12" sm="16">
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
