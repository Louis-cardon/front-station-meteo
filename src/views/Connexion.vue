<template>
    <v-container class="mt-5">
        <connexion-module v-if="UserConnecte === 'False'"></connexion-module>
    </v-container>
</template>

<script>
import ConnexionModule from "@/components/ConnexionModule";
export default {
  name: "Connexion",
  components: {ConnexionModule},
}
</script>

<style scoped>

</style>