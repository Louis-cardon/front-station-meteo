<template>
  <v-row justify="center" align="center" style="height: 90vh">
    <v-col cols="12" lg="4" md="6" sm="8">
      <v-fade-transition>
        <v-card class="pa-10 mt-10 mb-10 " color="#DCDCDC">
          <v-text-field v-model="pseudo" outlined label="Pseudo" v-if="visibility === false"></v-text-field>
          <v-text-field v-model="email" :rules="rulesEmail" outlined label="E-mail"></v-text-field>
          <v-text-field v-model="mdp" :rules="[rulesMdp.required, rulesMdp.min]" outlined label="Mot de Passe" :type="show3 ? 'text' : 'password'" class="input-group--focused" @click:append="show3 = !show3" hint="Au minimum 8 caractères" :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
          <v-card-actions>
            <v-col>
              <v-row>
                <v-spacer></v-spacer>
                <v-btn class="ma-2" v-if="visibility === true" outlined>Connexion</v-btn>
                <v-btn class="ma-2" v-if="visibility === false" outlined>Créer un compte</v-btn>
                <v-spacer></v-spacer>
              </v-row>
              <v-row justify="center">
                <v-btn v-on:click="visibility = false" v-if="visibility === true" text>
                  <label >Vous n'avez pas de compte ? Créer en un ici</label>
                </v-btn>
                <v-btn v-on:click="visibility = true" v-if="visibility === false" text>
                  <label>Vous avez déjà un compte ? Connecter vous</label>
                </v-btn>
              </v-row>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-fade-transition>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ConnexionModule",
  data: () => ({
    rulesEmail: [
      value => !!value || 'E-mail requis.',
      value => (value || '').length <= 30 || 'Max 30 characters',
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'E-mail invalide.'
      },
    ],
    show3: false,
    visibility: true,
    rulesMdp:{
      required: value => !!value || 'Mot de passe requis.',
      min: v => v.length >= 8 || 'Minimum 8 caractères',
    },
    email: "",
    pseudo:"",
    mdp: "",
  }),
  methods: {
    clear() {
      this.mdp = ""
    },
    submit() {
    const user = {
      email: this.email,
      pseudo: this.pseudo,
      mdp: this.mdp,
      }
    this.$store.dispatch('addUser',user)
    this.clear()
    }
  }
}
</script>

<style scoped>

</style>