<template>
  <div v-for="(l, index) in a" :key="index" class="imgBox">
    <img
      v-if="index > 0 && index < 10"
      :src="`${imgLeft}${getIndex(index + 1)}.png`"
      alt=""
    />
    {{ index }}
  </div>
</template>

<script lang="ts">
import { NumOrStr } from '@/components/data-base'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    let a: any = []
    a.length = 200
    const imgLeft = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'

    const getIndex = (i: NumOrStr['type']) => {
      let ii = String(i)
      return '0'.repeat(3).concat(ii).slice(-3)
    }
    return {
      a,
      imgLeft,
      getIndex,
    }
  },
})
</script>

<style lang="scss" scoped>
.imgBox {
  width: 200px;
  height: 200px;
  margin: 10px;
  display: inline-block;
  img {
    width: 100%;
  }
}
</style>
