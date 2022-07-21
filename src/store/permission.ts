import { asyncRoutes, constantRoutes } from '@/router/index'
import { defineStore } from 'pinia'
/**
 * 使用 meta.role 来确定当前用户是否具有权限
 * @param roles
 * @param route
 */
function hasPermission(
  roles: any[],
  route: { meta: { roles: string | any[] } },
) {
  if (route.meta && route.meta.roles) {
    return roles.some((role: any) => route.meta.roles.includes(role))
  } else {
    // return true
    return false
  }
}

/**
 * 通过递归过滤异步路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes: any[], roles: any) {
  const res: any[] = []

  routes.forEach((route: any) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

export const permissionStore = defineStore({
  id: 'permission',
  state: () => {
    return {
      routes: [] as any,
      addRoutes: [] as any,
    }
  },
  actions: {
    generateRoutes(roles: string | string[]) {
      //   return new Promise((resolve) => {
      //     // 在这判断是否有权限，哪些角色拥有哪些权限
      //     let accessedRoutes: any
      //     if (roles && roles.length && !roles.includes('admin')) {
      //       accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      //     } else {
      //       accessedRoutes = asyncRoutes || []
      //     }
      //     this.addRoutes = accessedRoutes
      //     this.routes = constantRoutes.concat(accessedRoutes)
      //     resolve(accessedRoutes)
      //   })
      return []
    },
    clearRoutes: (state: { addRoutes: any[]; routes: any[] }, routes: any) => {
      state.addRoutes = []
      state.routes = []
    },
  },
})
