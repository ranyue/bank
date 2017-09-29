
// import * as types from './../mutation-types.js'

import Service from './../../api/index.js'

const state = {
    repayplanList: []
}
const actions = {
    getRepayInfo({ commit }, payload) {
        Service.getRepayInfo(payload)
            .then(res => {
                if (res.data.returnCode === '000000') {
                    commit('save_repay_info', res.data)
                }
            })
            .catch(e => {

            })
    }

}
const mutations = {
    save_repay_info(state, payload) {
        state.repayplanList = payload.repayplan_list
    }
}

export default {
    state,
    mutations,
    actions
}
