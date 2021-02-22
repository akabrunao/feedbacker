import axios from 'axios'
import FeedbacksServices from './feedbacks'

const API_ENVS = {
  production: 'https://backend-feedbacker.vercel.app/',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  // baseURL: API_ENVS[process.env.NODE_ENV] || API_ENVS.local
  baseURL: API_ENVS.local
})

httpClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  console.log(error)
  const canThrowAnError = error.request.status === 0 ||
  error.request.status === 500

  if (canThrowAnError) {
    throw new Error(error.message)
  }

  return error
})

export default {
  feedbacks: FeedbacksServices(httpClient)
}
