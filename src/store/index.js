/**
 * Created by tangyitangyi on 2018/5/15.
 */
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
  count: 0,
  type: 0,
  itemed: [
    {date: '2018-05-15', message: 'Mac 环境下上传本地项目到gitHub', url: '20180515'},
    {date: '2018-05-12', message: '服务器如何安装jenkins', url: '20180512'}
  ]
}
const mutations = {
  INCREMENT (state, type) {
    state.type = type
  },
  INSERTDATA (state, itemed) {
    state.itemed = itemed
  }
}
const actions = {
  INCREMENT ({commit}, type) {
    commit('INCREMENT', type)
  },
  INSERTDATA ({commit}, itemed) {
    commit('INSERTDATA', itemed)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
