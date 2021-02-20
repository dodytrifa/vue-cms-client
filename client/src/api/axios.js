import axios from 'axios'
const axiosInit = axios.create({
  baseURL: 'https://ecommerce-dody.herokuapp.com'
})

export default axiosInit
