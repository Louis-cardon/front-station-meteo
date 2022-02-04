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
                <v-list-item-subtitle>{{$store.getters.weatherJson.description}}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar width="100px" height="100px">
                  <v-img :src="'http://openweathermap.org/img/wn/' + $store.getters.weatherJson.icon + '@2x.png'"  width="100px" height="100px"></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
              <v-col>
                <v-row justify="center"  align="center">
                  <v-text-field v-model="ville" outlined rounded text></v-text-field>
                  <v-btn
                      outlined
                      rounded
                      text
                      @click="$store.dispatch('getmeteo',ville)"
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
      }
  },
    mounted() {
      this.$store.dispatch('getmeteo', this.ville)
      this.$store.dispatch('getValueMeteo')
    }
  }

</script>
