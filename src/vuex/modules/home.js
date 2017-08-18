/**
 * author: Yank
 * date: 2017-03-06
 * usage: 购物车所需用到ACtions ,数据的计算在 view层完成
 */

import * as types from './../mutation-types.js'

import Service from './../../api/index.js'

const state = {
  list: []
}
const actions = {
  [types.GET_LIST] ({commit}, payload) {
    Service.postValue(payload)
      .then(res => {
        console.log(res)
        commit(types.SAVE_VALUE, res)
      })
      .catch(e => {
        console.log(e)
      })
  }

}
const mutation = {
  [types.SAVE_VALUE] (state, payload) {

  }
}

export default {
  state,
  mutation,
  actions
}
