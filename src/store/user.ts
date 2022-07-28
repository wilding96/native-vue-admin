import { defineStore } from 'pinia'
import { login, getUserInfo, logOut } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      token: '',
      userInfo: {
        realName: '',
      },
    }
  },
  actions: {
    async login(username: string, password: string) {
      try {
        const res = await login(username, password)
        if (res.data.code === '200') {
          const { data } = res
          this.token = data.data
          setToken(data.data)
        } else {
          throw Error(res.data.message)
        }
      } catch (error) {
        throw error
      }
    },
    async getUserInfo() {
      try {
        const res = await getUserInfo()
        console.log(res, 36)
        if (res.data.code === '200') {
          const { data } = res
          this.userInfo = data.data
        } else {
          throw Error(res.data.message)
        }
      } catch (error) {
        throw error
      }
    },
    async logOut() {
      return new Promise<void>((resolve, reject) => {
        logOut()
          .then(() => {
            removeToken()
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
  persist: true,
})
