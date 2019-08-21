// 这个文件进行axios操作的封装
// 1.引入axios
import axios from 'axios'
// 设置基准路径
axios.defaults.baseURL = 'http://127.0.0.1:3001'

export const getPostById = (params) => {
//   return axios.get('/getPostById', { params: { id: 10 } })
  return axios({
    // baseURL:'http://localhost:300',
    url: '/getPostById',
    params
  })
}

export const getAllCate = () => {
//   return axios.get('/getAllCate')
  return axios({
    url: '/getAllCate'
  })
}

export const addCate = (data) => {
  return axios({
    url: '/addCate',
    method: 'post',
    data
  })
}
