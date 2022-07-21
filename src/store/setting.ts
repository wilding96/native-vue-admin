import { defineStore } from 'pinia'

export const settingStore = defineStore({
  id: 'setting',
  state: () => {
    return {
      isShowTag: true,
      mode: 'vertical',
    }
  },
  actions: {
    setTag(value: boolean) {
      this.isShowTag = value
    },
    setMode(value: string) {
      this.mode = value
    },
  },
})
