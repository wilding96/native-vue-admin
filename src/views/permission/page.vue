<template>
  <div class="m-permission-page">
    <div style="margin-bottom: 20px">权限列表</div>
    <n-radio-group v-model="switchRoles">
      <n-radio-button label="other" />
      <n-radio-button label="admin" />
    </n-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const switchRoles = computed({
  get() {
    return []
  },
  set(val) {
    alert(val)
  },
})
</script>

<style></style>
