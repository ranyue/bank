import Axios from 'axios'

function Service () {
  let axios = Axios.create({
    timeout: 4000,
    baseURL: 'baidu.com'
  })
  this.postValue = (params) => {
    return axios.post('/pc/api/v1/listTags')
  }
}
export default new Service()
