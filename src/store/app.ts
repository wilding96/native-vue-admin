import { defineStore } from 'pinia'

export const appStore = defineStore({
  id: 'app',
  state: () => {
    return {
      isCollapse: true,
      withoutAnimation: false,
      device: 'desktop',
    }
  },
  actions: {
    setCollapse(value: boolean) {
      this.isCollapse = value
      this.withoutAnimation = false
    },
    // 获取设备
    toggleDevice(device: string) {
      this.device = device
    },
    // 点击遮罩层 关闭左边按钮
    closeSideBar(withoutAnimation: boolean) {
      this.isCollapse = false
      this.withoutAnimation = withoutAnimation
    },
  },
})
