import { appStore } from '@/store/app'
import { computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const { body } = document

const WIDTH = 992 // refer to Bootstrap's responsive design

export const useResizeHandler = () => {
  const route = useRoute()
  const app = appStore()
  const device = computed(() => {
    return app.device
  })
  function $_isMobile() {
    const rect = body.getBoundingClientRect()
    return rect.width - 1 < WIDTH
  }
  function $_resizeHandler() {
    if (!document.hidden) {
      // bool型，表示页面是否处于隐藏状态。页面隐藏包括页面在后台标签页或者浏览器最小化
      const isMobile = $_isMobile()
      app.toggleDevice(isMobile ? 'mobile' : 'desktop')

      if (isMobile) {
        app.closeSideBar(true)
      }
    }
  }
  onMounted(() => {
    const isMobile = $_isMobile()
    if (isMobile) {
      app.toggleDevice('mobile')
      app.closeSideBar(true)
    }
    window.addEventListener('resize', $_resizeHandler)

    watch(route, () => {
      if (device.value === 'mobile' && app.isCollapse) {
        app.closeSideBar(false)
      }
    })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', $_resizeHandler)
  })

  return { device }
}
