import router from '@/router'
import { getToken } from '@/utils/auth'

const whiteList = ['/login']

router.beforeEach(async (to, form, next) => {
  // 加载条开始
  window.$loadingBar?.start()

  // 判断是否登录
  const hasToken = getToken()
  console.log(hasToken, 12)
  if (hasToken) {
    if (to.path === '/login') {
      next()
      window.$loadingBar?.finish()
    } else {
      next()
    }
    next('/login')
    window.$loadingBar.finish()
  } else {
    console.log(whiteList.indexOf(to.path))
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      window.$loadingBar?.finish()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  window.$loadingBar?.finish()
})
