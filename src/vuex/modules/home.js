
// import * as types from './../mutation-types.js'

import Service from './../../api/index.js'

const state = {
  initalInfo: {
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
  get_client_info({commit}, payload) {
    Service.getClientInfo(payload)
    .then(res => {
     if (res.data.error_code === '0') {
      res.data.error_code = undefined
        commit('save_init_info', res.data)
     }
    })
}

}
const mutations = {
  save_init_info(state, payload) {
    state.initalInfo = payload
  },
  save_route_info(state, payload) {
    state.routeInfo = payload
  }
}

export default {
  state,
  mutations,
  actions
}
