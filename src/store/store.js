import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  fetchCount: state => state.count
}

export const store = new Vuex.Store({
  state,
  getters
})
