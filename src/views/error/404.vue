<template>
  <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      <n-button @click="goUrl()">找点乐子吧</n-button>
    </template>
  </n-result>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goUrl = () => {
  router.push('/')
}
</script>

<style scoped></style>
