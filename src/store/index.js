import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connected: false,
    userInfo: []
  },
  getters:{
    connected: state => state.connected
  },
  mutations: {
    setConnected(state, bool) {
      state.connected = bool
    }
  },
  actions: {
    async connect(state) {
      state.commit('setConnected', true)
    }
  },
  modules: {
  },
})
