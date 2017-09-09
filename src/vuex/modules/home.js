
// import * as types from './../mutation-types.js'

import Service from './../../api/index.js'

const state = {
  initialInfo: {
    appID: '',
    encryptMethod: '',
    returnCode: '',
    returnMsg: '',
    errorCode: '',
    errorMsg: '',
    rspData: {
      errorCode: '',
      errorMsg: '',
      cust_name: '',
      cust_card_type: '',
      cus_card_sno: '',
      mobile: '',
      sence_json: {
        vehicle_identifiy: '',
        vehicle_num: '',
        insure_fee: '',
        ratio: ''
      }
    },
    seqNO: '',
    sign: '',
    signMethod: ''
  },
  routeInfo: {
    biz_sence_sno: '', // 业务编号
    appAccessToken: '', // token
    appID: ''
  },
  paramsObj: {
    original: '送车保', // 业务来源
    sno: `CB${new Date().getTime()}`   // 流水号
  },
  step: 0
}
const actions = {
  get_client_info({ commit }, payload) {
    Service.getClientInfo(payload)
      .then(res => {
        console.log(res, res.data)
        if (res.data.returnCode === '000000') {
          commit('save_init_info', res.data)
        }
      })
      .catch(e => {
        console.log(e)
      })
  },
  instl_periods({ commit }, payload) {
    return Service.instlPeriods(payload)
      .then(res => {
        if (res.data.returnCode === '000000') {
          return { ok: true }
        } else {
          return { ok: false }
        }
      })
      .catch(e => {
        console.log(e)
      })
  },
  add_client_sub_info({ commit, state }, payload) {
    let params = Object.assign({}, payload, { biz_sence_sno: state.routeInfo.biz_sence_sno })
    return Service.addClientSubInfo(params)
      .then(res => {
        if (res.data.returnCode === '000000') {
          return { ok: true }
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

}
const mutations = {
  save_init_info(state, payload) {
    console.log(payload)
    state.initialInfo = payload
  },
  save_route_info(state, payload) {
    state.routeInfo = payload
  },
  update_initial_info(state, payload) {
    state.initialInfo = payload
  },
  to_next_step(state){
    state.step ++ 
  }
}

export default {
  state,
  mutations,
  actions
}
