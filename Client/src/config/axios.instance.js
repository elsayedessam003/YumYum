import axios from 'axios'

const axioIinstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

export default axioIinstance