<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-dialog-provider>
        <AppRoot />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppRoot from './AppRoot.vue'
import { themeOverrides } from '@/styles/naive-ui-theme-overrides'

export default defineComponent({
  name: 'App',
  components: {
    AppRoot,
  },
  setup() {
    return {
      themeOverrides,
    }
  },
})
</script>
