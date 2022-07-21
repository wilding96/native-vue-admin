<template>
  <template v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item)">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <n-menu-item :index="resolvePath(onlyOneChild.path)">
          <n-icon :size="20">
            <component :is="onlyOneChild?.meta.icon"></component>
          </n-icon>
          <template #title>{{
            onlyOneChild.meta && onlyOneChild.meta.title
          }}</template>
        </n-menu-item>
      </app-link>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <el-icon :size="20">
          <component :is="item.meta?.icon"></component
        ></el-icon>
        <span>{{ item.meta && item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import { isExternal } from '@/utils/validate'
import AppLink from './Link.vue'
import path from 'path'
import { ref, computed } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  basePath: {
    type: String,
    default: '',
  },
})

const onlyOneChild = ref(null) as any
const hasOneShowingChild = (children = [], parent: any) => {
  const showingChildren = children.filter((item: any) => {
    // 过滤掉需要隐藏的菜单
    if (item.hidden) {
      return false
    } else {
      // 临时设置（如果只有一个显示子项，则将使用）
      onlyOneChild.value = item
      return true
    }
  })
  // 当只有一个子路由器时，默认情况下会显示该子路由器
  if (showingChildren.length === 1) {
    return true
  }
  // 如果没有要显示的子路由器，则显示父路由器
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}

const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  return path.resolve(props.basePath, routePath)
}
</script>
