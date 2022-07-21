<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMessage } from 'naive-ui'

export default defineComponent({
  name: 'AppRoot',
  setup() {
    window.$message = useMessage()
  },
})
</script>

<style lang="scss" scoped></style>
