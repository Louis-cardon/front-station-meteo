<template>
  <v-container class="mt-12">
    <v-row justify="center"  align="center" style="height: 90vh">
      <v-col>
        <v-row class="mt-5">
          <v-card
              class="mx-auto"
              outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  {{ville}}
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  Meteo
                </v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
              <v-col>
                <v-row justify="center"  align="center">
                  <v-text-field v-model="ville" outlined rounded text></v-text-field>
                  <v-btn
                      outlined
                      rounded
                      text
                  >
                    Recherche
                  </v-btn>
                </v-row>
              </v-col>
            </v-card-actions>
          </v-card>
        </v-row>
        <v-row justify="center"  align="center" class="mt-10">
          <v-col cols="12" lg="10" md="12" sm="16">
            <graphe-temperature></graphe-temperature>
          </v-col>
        </v-row>
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
    data() {
      return {
        ville: 'Paris',
        apimeteoville = "http://api.openweathermap.org/data/2.5/weather? q=" + str(this.ville) + " &appid=9def32b346e03faf0e077a943a7e8bde&lang=fr",
    }
  }
  }

</script>
