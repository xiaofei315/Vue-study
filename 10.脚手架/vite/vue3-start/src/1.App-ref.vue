<script setup lang="ts">
import {ref, Ref, ShallowRef, shallowRef} from 'vue'

const msg: Ref<string> = ref('abc')

const changeMsg = () => {
  msg.value = '123'
}

const shallowMsg: ShallowRef = shallowRef({
  name: '大飞'
})
const changeShallowMsg = () => {
  shallowMsg.value = {
    name: '小飞'
  }
}
</script>

<template>
  <div>{{ msg }}</div>
  <button @click="changeMsg">ref</button>
  <div>{{ shallowMsg.name }}</div>
  <button @click="changeShallowMsg">shallowRef</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
