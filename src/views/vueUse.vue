<template>
  <h1>测试鼠标坐标</h1>
  <h3><span>Mouse:</span> {{ x }} x {{ y }}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMouse } from '@vueuse/core'

export default defineComponent({
  name: 'VueUse',
  setup() {
    const { x, y } = useMouse()
    return {
      x,
      y,
    }
  },
})
</script>

<style scoped lang="scss">
h1 {
  color: yellowgreen;
}
h3 {
  color: red;
  span {
    color: #000;
  }
}
</style>
