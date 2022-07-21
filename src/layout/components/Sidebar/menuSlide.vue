<template>
  <n-menu
    :default-active="activeMenu"
    active-text-color="#ffd04b"
    background-color="#304156"
    text-color="#fff"
    :mode="mode"
    :collapse-transition="false"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <sidebar-item
      v-for="route in permission_routes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </n-menu>
</template>

<script lang="ts" setup>
import SidebarItem from './SidebarItem.vue'
import logo from './Logo.vue'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { permissionStore } from '@/store/permission'
import { appStore } from '@/store/app'
import { settingStore } from '@/store/setting'

// 在setup中获取store
const route = useRoute()
const permission = permissionStore()
const app = appStore()
const setting = settingStore()

// 获取路由
const permission_routes = computed(() => {
  return permission.routes
})

// console.log('permission_routes',permission_routes)

const activeMenu = computed(() => {
  const { meta, path } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})

// 是否折叠
const isCollapse = computed(() => {
  return !app.isCollapse
})

// 横向
const mode = computed(() => {
  return setting.mode
})
</script>
