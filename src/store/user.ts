import { defineStore } from 'pinia'
import request from '@/utils/axios'
import { login, getUserInfo } from '@/api/user'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: 'Dylan',
      token: '',
      userInfo: {
        realName: '',
      },
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
    async login(username: string, password: string) {
      try {
        const res = await login(username, password)
        if (res.data.code === '200') {
          const { data } = res
          this.token = data.data
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
  },
})
