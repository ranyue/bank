
// import * as types from './../mutation-types.js'

import Service from './../../api/index.js'

const state = {
    fontState: 0,
    backSuc: 0,
    fontInfo: {
        name: '',
        address: '',
        citizen_id: '',
        gender: '',
        nation: '',
        birthday: '',
        idcard_type: '',
        error_info: '',
        error_no: ''
    },
    backInfo: {
        agency: '',
        idcard_type: '',
        valid_date_begin: '',
        valid_date_end: '',
        error_info: '',
        error_no: ''
    }

}
const actions = {
    addImageInfo({ commit }, payload) {
        Promise.all([Service.addImageInfo(payload.font), Service.addImageInfo(payload.back)])
            .then(res => {
                if (res[0].data.error_no == 0) {
                    commit('saveFontInfo', res[0].data)
                }
                if (res[1].data.error_no == 0) {
                    commit('saveBackInfo', res[1].data)
                }
            })
            .catch(e => {
                console.log(e)
            })
    },
    updateClientInfo({commit}, payload) {
       return Service.updateClientInfo(params)
        .then(res => {
            if(res.data.errorCode == 0){
                return {
                    ok : true
                }
            }else{ 
                return {
                    ok: false,
                    msg: res.data.errorMsg                    
                }
            }
        })
        .catch(e => {
            console.log(e)
            return {
                ok: false,
                msg: e                 
            }
        })
    }
}
const mutations = {
    saveFontInfo(state,payload){
        state.fontInfo = payload
    },
    saveBackInfo(state,payload){
        state.backInfo = payload
    }
}

export default {
    state,
    mutations,
    actions
}
