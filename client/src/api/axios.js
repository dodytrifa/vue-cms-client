import axios from 'axios'
const axiosInit = axios.create({
  baseURL: 'http://localhost:3000'
})

export default axiosInit
