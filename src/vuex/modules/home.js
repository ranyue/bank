
// import * as types from './../mutation-types.js'

import Service from './../../api/index.js'

const state = {
  initialInfo: {
    appID: '98436bfb-5e56-4b8e-98df-d8a07c0ac152',
    encryptMethod: 'NONE',
    returnCode: '000000',
    returnMsg: '交易成功',
    errorCode: '000000',
    errorMsg: '交易成功',
    rspData: {
      errorCode: '000000',
      errorMsg: '交易成功',
      cust_name: '张三',
      cust_card_type: '1',
      cus_card_sno: '365894196602281234',
      mobile: '18612345678',
      sence_json: {
        vehicle_identifiy: 'BMWde12346',
        vehicle_num: '沪A8888',
        insure_fee: '3000',
        ratio: '0.0001%'
      }
    },
    seqNO: 'CB201709041552456',
    sign: 'E2016F64FDBC86D1E947E3225B50A8C9',
    signMethod: 'MD5'
  },
  routeInfo: {
    biz_sence_sno: 'CBZC000001', // 业务编号
    appAccessToken: '635de484e327800c94ee06034e72b44b', // token
    appID: '98436bfb-5e56-4b8e-98df-d8a07c0ac152'
  },
  paramsObj: {
    original: '送车保', // 业务来源
    sno: `CB${new Date().getTime()}`   // 流水号
  }

}
const actions = {
  get_client_info({ commit }, payload) {
    Service.getClientInfo(payload)
      .then(res => {
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
    state.initalInfo = payload
  },
  save_route_info(state, payload) {
    state.routeInfo = payload
  },
  update_initial_info(state, payload) {
    state.initialInfo = payload
  }
}

export default {
  state,
  mutations,
  actions
}
