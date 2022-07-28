<template>
  <n-loading-bar-provider>
    <div
      class="m-layout-header"
      :style="{
        left: `${mode === 'horizontal' ? 0 : isCollapse ? '56' : '210'}px`,
      }"
    >
      <div
        class="header"
        :class="{
          transverseMenu: mode === 'horizontal',
        }"
      >
        <menu-slide v-if="mode === 'horizontal'" />
        <div v-if="mode === 'vertical'" class="left">
          <div>
            <n-icon v-if="!isCollapse" size="30" @click="handleCollapse">
              <LayoutSidebarRightExpand />
            </n-icon>
            <n-icon v-else size="30" @click="handleCollapse">
              <LayoutSidebarRightCollapse />
            </n-icon>
          </div>
          <!-- <u-hamburger /> -->
        </div>
        <div class="right">
          <el-button type="text" style="margin-right: 10px" @click="toGitHub"
            >Github地址</el-button
          >
          <!-- <u-screen-full /> -->
          <n-dropdown
            trigger="click"
            :options="dropDownOptions"
            @select="handleSelect"
          >
            <span>{{ userInfo.realName }}</span>
          </n-dropdown>
        </div>
      </div>
      <!-- <tag-views v-if="isShowTag" /> -->
      <personal ref="person" />
    </div>
  </n-loading-bar-provider>
</template>

<script lang="ts" setup>
import Personal from './Personal.vue'
// import TagViews from '../TagsView/index.vue'
// import UHamburger from '@/components/u-Hamburger/index.vue'
// import UScreenFull from '@/components/u-screenfull/index.vue'
import MenuSlide from '../Sidebar/menuSlide.vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  DropdownOption,
  useDialog,
  useMessage,
  useLoadingBar,
  NLoadingBarProvider,
} from 'naive-ui'
import { appStore } from '@/store/app'
import { settingStore } from '@/store/setting'
import { useUserStore } from '@/store/user'
import {
  LayoutSidebarRightExpand,
  LayoutSidebarRightCollapse,
} from '@vicons/tabler'

const person = ref()
const router = useRouter()
const dialog = useDialog()
const message = useMessage()

const app = appStore()
const setting = settingStore()
const useUser = useUserStore()
const loadingBar = useLoadingBar()

const isCollapse = computed(() => {
  return !app.isCollapse
})
const mode = computed(() => {
  return setting.mode
})

const isShowTag = computed(() => {
  return setting.isShowTag
})

const userInfo = computed(() => {
  return useUser.userInfo
})

const toGitHub = () => {
  // window.open('https://github.com/wilding96')
  loadingBar.start()
}
const logOut = async () => {
  dialog.warning({
    title: '确定吗',
    positiveText: '确定',
    negativeText: '取消',
    type: 'warning',
    onPositiveClick: () => {
      useUser.logOut()
      router.push('/login')
      message.success('退出登录成功！')
    },
    onNegativeClick: () => {
      message.error('不确定')
    },
  })
  // .then(async () => {
  //   try {
  //     await store.dispatch('user/logout')
  //     router.push({ path: '/login' })
  //     store.dispatch('permission/clearRoutes')
  //     store.dispatch('tagsView/clearVisitedView')
  //   } catch (e) {}
  // })
  // .catch(() => {})
}

const dropDownOptions: Array<DropdownOption> = [
  {
    label: '退出登录',
    key: 'logout',
  },
  {
    label: '修改密码',
    key: 'editPass',
  },
]

const handleSelect = (key: string) => {
  switch (key) {
    case 'logout':
      logOut()
      break
    case 'editPass':
      console.log(person.value)
      person.value.show()
      break
  }
}

const handleCollapse = () => {
  app.setCollapse(isCollapse.value)
}
</script>

<style lang="scss" scoped>
.mobile {
  .m-layout-header {
    left: 0 !important;
  }
}
.n-icon {
  cursor: pointer;
}
.header {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
  }
}
.m-layout-header {
  position: fixed;
  top: 0;
  background: white;
  left: 0;
  z-index: 99;
  right: 0;
  transition: left 0.28s;
  flex-shrink: 0;
  box-sizing: border-box;

  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.el-dropdown {
  display: flex;
  height: 100%;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
