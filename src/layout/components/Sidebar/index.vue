<template>
  <div :class="{ 'has-logo': isCollapse }">
    <logo :collapse="isCollapse" />
    <n-scrollbar wrap-class="scrollbar-wrapper">
      <menu-slide />
    </n-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import MenuSlide from './menuSlide.vue'
// import SidebarItem from './SidebarItem.vue'
import logo from './Logo.vue'
// import {useRoute} from 'vue-router'
import { computed } from 'vue'
import { appStore } from '@/store/app'

const app = appStore()

// 是否折叠
const isCollapse = computed(() => {
  return !app.isCollapse
})
</script>

<style lang="scss">
.n-menu-vertical-demo:not(.n-menu--collapse) {
  //width: 200px;
  height: 100%;
}
.crollbar-wrapper {
  height: 100%;
  .n-scrollbar__view {
    height: 100%;
  }
}
</style>
