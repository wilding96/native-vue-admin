<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-loading-bar-provider>
        <n-dialog-provider>
          <AppRoot />
        </n-dialog-provider>
      </n-loading-bar-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppRoot from './AppRoot.vue'
import { NLoadingBarProvider } from 'naive-ui'
import { themeOverrides } from '@/styles/naive-ui-theme-overrides'

export default defineComponent({
  name: 'App',
  components: {
    AppRoot,
    NLoadingBarProvider,
  },
  setup() {
    return {
      themeOverrides,
    }
  },
})
</script>
