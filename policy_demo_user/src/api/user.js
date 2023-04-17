import request from '../utils/request'
export const loginRequest = params => request.post('/user/login',params)
export const registerRequest = params => request.post('/user/register',params)
export const messageRequest = (userId, params) =>
  request.post(`/user/userInfo/${userId}`, params
  )
export const getIndustry = () => request.get('/common/industry')
export const getDistrict = () => request.get('/common/district')
//给用户发送验证码
export const sendEmail = (email) => request.post(`/email/vercode/send/${email}`)
//验证验证码是否正确
export const vetifyCode = (data) => request.get(`/email/vercode/verify/${data.email}/${data.code}`)
export const getInfo = (userId) => request.get(`/user/userInfo/${userId}`)
export const getStore = (userId) => request.get(`/collect/policy/${userId}`)
export const getPolicy = (content,data) => request.get(`/policy/search/${content}?grade=${data.grade}&start=${data.start}&end=${data.end}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`)
export const getPolicyDetail = (id) => request.get(`/policy/detail/${id}`)
export const getWordList = () => request.get('data/search/word/frequency')
export const cancleStore = (userId,policyId) => request.delete(`/collect/policy/${userId}/${policyId}`)
export const storePolicy = (userId,policyId) => request.post(`/collect/policy/${userId}/${policyId}`)
export const modifyPassword = (userId, params) =>
  request.post(`/user/password/${userId}`, params
  )
export const getToken = (token) => request.get(`/token/refresh/${token}`)