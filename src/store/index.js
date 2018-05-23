/**
 * Created by tangyitangyi on 2018/5/15.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import fetch from 'node-fetch'

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
    fetch('http://127.0.0.1:8008/v1/api/blogDetail', {method: 'POST', body: {id: 1}, mode: 'no-cors'})
      .then(res => res)
      .then(json => console.log(json.data))
    commit('INCREMENT', type)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
