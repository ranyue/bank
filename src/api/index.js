import Axios from 'axios'
// import MD5 from 'js-md5'
function FoamatParams(params) {
  let str = ''
  if (!params) {
    return str
  }
  Object.keys(params).map(key => {
    str += `${key}=${params[key]}&`
  })
  str = str.substring(0, str.length - 1)
  str = '?' + str
  return str
}
let paramsObj = {
  secretKey: 2222, // 密钥
  original: '送车保', // 业务来源
  sno: `CB${new Date().getTime()}`   // 流水号
}
function Service() {
  let axios = Axios.create({
    timeout: 4000,
    baseURL: 'http://api01.tlcb.com/sdk/h5/'
  })

  // 拉去客户信息
  this.getClientInfo = (params) => {
    return axios.post('getClientInfo', params)
  }
  this.instlPeriods = (params) => {
    return axios.post('instlPeriods', params)
  }
  this.addClientSubInfo = (params) => {
    Object.assign(params, { sno: paramsObj.sno, original: paramsObj.original })
    return axios.post('/api/sence/custom/addtion/modify', params)
  }
  this.addImageInfo = (params) => {
    return axios.post('/api/sence/uploadPic', params)
  }

  this.updateClientInfo = (params) => {
    return axios.post('/api/sence/custom/identity/storage', params)
  }


  this.getBankInfo = (params) => {
    Object.assign(params, { sno: paramsObj.sno })
    let str = FoamatParams(params)
    return axios.get('/api/sence/getBankInfo' + params)
  }
  this.sendMessage = (params) => {
    let str = FoamatParams(params)
    return axios.get('/api/sence/sendMessage' + params)
  }
  this.validateMessgae = (params) => {
    let str = FoamatParams(params)
    return axios.post('/api/sence/validateMessgae', params)
  }
  this.getTemplateInfo = (params) => {
    let str = FoamatParams(params)
    return axios.get('/api/sence/getTemplateInfo' + str)

  }
  this.getContractInfo = (params) => {
    Object.assign(params, { sno: paramsObj.sno })
    let str = FoamatParams(params)
    return axios.get('/api/sence/getTemplateInfo' + str)
  }
  this.sendAxsMsg = (params) => {
    Object.assign(params, { sno: paramsObj.sno })
    return axios.post('/api/sence/sendAxsMsg',params)
  }
  this.validateAxsMsg = (params) => {
    Object.assign(params, { sno: paramsObj.sno })
    return axios.post('/api/sence/validateAxsMsg',params)
  }
  this.signContract = (params) => {
    Object.assign(params, { sno: paramsObj.sno })
    return axios.post('/api/sence/validateAxsMsg',params)
  } 
  // 还款计划
  this.queryRepayPlan = (params) => {
    Object.assign(params, { sno: paramsObj.sno })
    return axios.post('/api/sence/queryRepayPlan',params)
  } 
  // 还款信息
  this.queryRepayInfo = (params) => {
    Object.assign(params, { sno: paramsObj.sno })
    return axios.post('/api/sence/queryRepayInfo',params)
  } 
  
}
export default new Service()
