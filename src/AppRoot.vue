<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMessage, useLoadingBar } from 'naive-ui'

export default defineComponent({
  name: 'AppRoot',
  setup() {
    window.$message = useMessage()
    window.$loadingBar = useLoadingBar()
  },
})
</script>

<style lang="scss" scoped></style>
