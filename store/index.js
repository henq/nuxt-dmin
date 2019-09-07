import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'

import i18n from '@/locale'
import config from '@/config'
Vue.use(Vuex)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
const store=()=> new Vuex.Store({
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
export default store