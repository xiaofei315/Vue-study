<script setup lang="ts">
import {reactive, computed, ref, watch, watchEffect} from 'vue'

let message = ref<string>("飞机");
const stop = watchEffect((onInvalidate) => {
  console.log(message.value)
  onInvalidate(() => {
    console.log("before")
  })
}, {
  flush: 'post'
})
</script>

<template>
  <div style="width: 800px;">
    <input v-model="message" type="text"/>
    <button @click="stop">停止监听</button>
  </div>
</template>

<style scoped>

</style>
