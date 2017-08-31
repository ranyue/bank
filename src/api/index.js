import Axios from 'axios'
// import MD5 from 'js-md5'
function FoamatParams (params) {
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
  secretKey: 2222,
  original: '送车保',
  sno: `CB${new Date().getTime()}`
}
function Service () {
  let axios = Axios.create({
    timeout: 4000,
    baseURL: 'http://10.4.146.4/sdk/open/'
  })

  // 拉去客户信息
  this.getClientInfo = (params) => {
    Object.assign(params, {sno: paramsObj.sno, original: paramsObj.original})
    let str = FoamatParams(params)
    return axios.get('/api/sence/custom/baseinfo/query' + str)
  }
  this.instlPeriods = (params) => {
    Object.assign(params, {sno: paramsObj.sno, original: paramsObj.original})
    return axios.post('/api/sence/bussiness/periodsnum/modify',params)
  }  
  this.addClientSubInfo = (params) => {
    Object.assign(params, {sno: paramsObj.sno, original: paramsObj.original})
    return axios.post('/api/sence/custom/addtion/modify',params)
  }
}
export default new Service()
