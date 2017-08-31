
// import * as types from './../mutation-types.js'

import Service from './../../api/index.js'

const state = {
  initialInfo: {
    cust_name: '韩永',
    cust_card_type: '1',
    cus_card_sno: '31123123123123', // 身份证
    mobile: '13111111111',
    sence_json: {
      carProductNo: '12312312312312312312', // 车架号
      applyAmt: '3000.00', // 保费金额
      ratio: '0.1' // 首付比例
    }
  },
  routeInfo: {
    biz_sence_sno: '就送123456', // 业务编号
    appAccessToken: '1211212', // token
    appID: '11111'
  }

}
const actions = {
  get_client_info({ commit }, payload) {
    Service.getClientInfo(payload)
      .then(res => {
        if (res.data.error_code === '0') {
          res.data.error_code = undefined
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
        if (res.error_code === '0') {
          return { ok: true }
        } else {
          return { ok: false }
        }
      })
      .catch(e => {
        console.log(e)
      })
  },
  add_client_sub_info({commit,state}, payload) {
    let params = Object.assign({}, payload, {biz_sence_sno: state.routeInfo.biz_sence_sno})
    return Service.addClientSubInfo(params)
    .then(res => {
      if(res.data.error_code === '0'){
        return {ok: true}
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
