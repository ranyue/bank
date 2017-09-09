
// import * as types from './../mutation-types.js'

import Service from './../../api/index.js'

const state = {
    serialNo: '',
    templateNo: '',
    grantNo: '',
    repayPlan: {

    }
}
const actions = {
    getBankInfo({commit}, payload){
        Service.getBankInfo(payload)
        .then(res => {
            if(res.data.errorCode == 0){
                commit('saveBankInfo',res.data.serialNo)
            }
        })
        .catch(e => {
            console.log(e)
        })
    },
    verifyMsg({commit,dispatch}, payload){
        Service.validateMessgae(payload.code)
        .then(res => {
            if(res.data.errorCode == 0){
                dispatch('getTemplateInfo',payload.template)
            }
        })
    },
    getTemplateInfo({commit,dispatch}, payload){
        Service.getTemplateInfo(payload)
        .then(res => {
            if(res.data.errorCode == 0){
                // commit('saveTemplateNO',res.data.templateNo)
                dispatch('getContractInfo',{
                    templateNo: res.data.templateNo,
                    biz_sence_sno: payload.biz_sence_sno               
                })
            }
        })
        .catch(e => {
            console.log(e)
        })
    },
    getContractInfo({commit}, payload){
        Service.getContractInfo(payload)
        .then(res => {
            if(res.data.errorCode == 0){
                commit('saveGrantNO',res.data.grantNo)
            }
        })
        .catch(e => {
           console.log(e)
        })
    },
    validateAxsMsg({commit},payload){
        Service.validateAxsMsg(payload)
        .then(res => {
            if(res.data.errorCode == 0){
                
            }
        })
        .catch(e => {

        })
    },
    queryRepayPlan({commit}, payload){
        debugger
        Service.queryRepayPlan(payload)
        .then(res => {
            if(res.data.errorCode == 0){
                commit('saveRepayPlan',res.data)
            }
        })
        .catch(e => {
            console.log(e)
        })
    }
}
const mutations = {
    saveBankInfo(state,payload){
        state.serialNo = payload        
    },
    savesaveGrantNO(state, payload){
        state.grantNo = payload
    },
    saveRepayPlan(state, payload) {
        state.repayPlan = payload
    }
}

export default {
    state,
    mutations,
    actions
}
