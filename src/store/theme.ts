import { defineStore } from 'pinia'
import type { GlobalTheme } from 'naive-ui'

export const themeStore = defineStore({
  id: 'theme', // id必填，且需要唯一
  state: () => {
    return {
      theme: null,
    }
  },
  actions: {
    updateThemes(theme: any) {
      this.theme = theme
    },
  },
})
