import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
const store = () =>
  new Vuex.Store({
    state: {
      //
    },
    mutations: {
      //
    },
    actions: {
      //
    },
    modules: {
      user,
      app
    }
  })
Vue.use(Vuex)

export default store
