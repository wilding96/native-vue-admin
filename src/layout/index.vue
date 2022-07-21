<template>
  <div class="g-container-layout" :class="classObj">
    <div
      v-if="device === 'mobile' && !isCollapse"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar v-if="mode === 'vertical'" class="sidebar-container" />
    <div
      class="main-container"
      :class="{
        hideSliderLayout: mode === 'horizontal',
      }"
    >
      <u-header />
      <div
        class="m-container-content"
        :class="{ 'app-main-hide-tag': !isShowTag }"
      >
        <app-main />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { appStore } from '@/store/app'
import { settingStore } from '@/store/setting'
import { useResizeHandler } from './hooks/useResizeHandler'
import Sidebar from './components/Sidebar/index.vue'
import UHeader from './components/UHeader/index.vue'
import AppMain from './components/AppMain.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Sidebar,
    UHeader,
    AppMain,
  },
  setup() {
    const app = appStore()
    const setting = settingStore()
    // 是否折叠
    const isCollapse = computed(() => {
      return !app.isCollapse
    })
    const { device } = useResizeHandler()
    const classObj = computed(() => {
      return {
        hideSidebar: !app.isCollapse,
        openSidebar: app.isCollapse,
        withoutAnimation: app.withoutAnimation,
        mobile: device.value === 'mobile',
      }
    })

    const handleClickOutside = () => {
      app.closeSideBar(false)
    }
    const isShowTag = computed(() => {
      return setting.isShowTag
    })

    const mode = computed(() => {
      return setting.mode
    })
    console.log('mode============', mode)
    return {
      isCollapse,
      device,
      classObj,
      isShowTag,
      mode,
      handleClickOutside,
    }
  },
})
</script>

<style lang="scss" scoped>
.g-container-layout {
  //display: flex;
  height: 100%;
  width: 100%;
  .main-container {
    //overflow: auto;
    display: flex;
    flex: 1;
    box-sizing: border-box;
    flex-direction: column;
  }
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.sidebar-container {
  display: flex;
  flex-direction: column;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.m-container-content {
  padding: 20px;
  /*background: #f6f8f9;*/
  padding-top: 110px;
  position: relative;
}
.app-main-hide-tag {
  padding-top: 80px;
}
</style>
