<template>
  <n-space>
    <div class="login">
      <h1>登录</h1>
      <p>用户名<input type="text" /></p>
      <p>密码<input type="password" /></p>
      <n-button round secondary type="info" @click="login">登录</n-button>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import request from '@/utils/axios'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const router = useRouter()
const message = useMessage()
const useUser = useUserStore()

const login = async function () {
  const param = {
    username: 'username',
    password: 'password',
  }
  await useUser
    .login(param.username, param.password)
    .then(() => {
      console.log('login vue')
      message.success('登录成功！')
      router.push('/home')
    })
    .catch((err) => {
      console.log(err, 34)
      message.error(err.message)
    })
  await useUser.getUserInfo().then((res) => {
    console.log(res)
  })
  // await request({
  //   url: 'api/login',
  //   method: 'post',
  // }).then((res) => {
  //   const { data } = res
  //   console.log(res)
  //   message.success(data.msg)
  //   router.push('/home')
  // })
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
