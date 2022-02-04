import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connected: false,
    userInfo: [],
    weatherJson: [],
    ListValue: []
  },
  getters:{
    connected: state => state.connected,
    weatherJson: state => state.weatherJson,
    ListValue: state => state.ListValue
  },
  mutations: {
    setConnected(state, bool) {
      state.connected = bool
    },
    setWeather(state, weatherJson) {
      state.weatherJson = weatherJson
    },
    setValue(state, ListValue){
      state.ListValue = ListValue
    }
  },
  actions: {
    async getmeteo(state, ville){
      const weather = await axios.get("http://api.openweathermap.org/data/2.5/find?q="+ville+"&appid=9def32b346e03faf0e077a943a7e8bde&lang=fr")
      console.log(weather.data)
      state.commit("setWeather",weather.data.list[0].weather[0])
    },
    async connect(state) {
      state.commit('setConnected', true)
    },
    async getValueMeteo(state){
      const ListValue = await axios.get("http://192.168.147.94:5001/releve")
      console.log(ListValue.data)
      state.commit('setValue',ListValue.data)
    }
  },
  modules: {
  },
})
