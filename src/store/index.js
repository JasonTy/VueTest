/**
 * Created by tangyitangyi on 2018/5/15.
 */
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  count: 0,
  type: 0
}
const mutations = {
  INCREMENT (state, type) {
    state.type = type
  }
}
const actions = {
  INCREMENT ({commit}, type) {
    commit('INCREMENT', type)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
