import request from '../utils/request'
export const getAccess = (type) => request.get(`/data/access/${type}`)
export const getChart = () => request.get('/data/chart')
export const getRegister = () => request.get('/data/register')
export const getSearch = () => request.get('/data/search/top10')
export const getSearchNum = (type) => request.get(`/data/search/${type}`)
export const loginRequest = params => request.post('/user/login',params)