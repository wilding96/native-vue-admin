import request from '@/utils/axios'

// 登陆
export function login(username: string, password: string) {
  return request.post('/user/login', { username, password })
}

export function getUserInfo() {
  return request.get('/user/getUserInfo')
}
