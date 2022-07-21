<template>
  <n-space>
    <div class="login">
      <h1>登录</h1>
      <p>用户名<input type="text" /></p>
      <n-button round secondary type="info" @click="login">登录</n-button>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import request from '@/utils/axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const login = function () {
  // let result = await request({
  //   url: 'xxxx/xxx',
  //   method: 'get',
  // })
  // console.log(result)
  router.push('/homeBoard')
}
</script>

<style lang="scss" scoped>
.login {
  p {
    font-size: 20px;
    color: #f4f14f;
  }
}
</style>
