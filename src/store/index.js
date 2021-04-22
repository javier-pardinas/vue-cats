import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats: [
      {"id": 1, "name": "Pepe", "description": "White"},
      {"id": 2, "name": "Paco", "description": "Black"},
      {"id": 3, "name": "María", "description": "Orange"},
      {"id": 4, "name": "Teresa", "description": "Grey"},
      {"id": 5, "name": "Luis", "description": "White"},
      {"id": 6, "name": "William", "description": "Black"},
      {"id": 7, "name": "Cecilia", "description": "Orange"},
      {"id": 8, "name": "Alba", "description": "Grey"},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
