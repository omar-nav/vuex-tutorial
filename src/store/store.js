import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  count: 0
}

export const store = new Vuex.Store({
  state
})
