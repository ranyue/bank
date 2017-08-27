import Axios from 'axios'

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

function Service () {
  let axios = Axios.create({
    timeout: 4000,
    baseURL: 'baidu.com'
  })
  this.postValue = (params) => {
    return axios.post('/pc/api/v1/listTags')
  }
  // 拉去客户信息
  this.getClientInfo = (params) => {
    let str = FoamatParams(params)
    return axios.get('/api/sence/custom/baseinfo/query' + str)
  }
  this.instlPeriods = (params) => {
    let str = FoamatParams(params)
    return axios.get('/api/sence/bussiness/periodsnum/modify' + str)
  }
  this.addClientSubInfo = (params) => {
    let str = FoamatParams(params)
    return axios.get('/api/sence/custom/addtion/modify' + str)
  }
}
export default new Service()
