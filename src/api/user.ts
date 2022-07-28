import request from '@/utils/axios'

// 登录
export function login(username: string, password: string) {
  return request.post('/user/login', { username, password })
}

// 获取用户信息
export function getUserInfo() {
  return request.get('/user/getUserInfo')
}

// 登出
export function logOut() {
  return request.post('/user/logOut')
}
