
import HTTPREQUEST from '../utils/request'

export const getAsyncData = () =>
  HTTPREQUEST.get('https://jsonplaceholder.typicode.com/users')
