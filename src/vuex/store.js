import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import identifyInfo from './modules/identifyInfo.js'
import bindInfo from './modules/bindInfo.js'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    home,
    identifyInfo,
    bindInfo
  },
  strict: debug
})
