<template>
  <div>hello world</div>
  <div>{{count}}</div>
  <button @click="count++">点我</button>
</template>

<script setup lang="ts">
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref} from "vue";
let count =ref<number>(0)
onBeforeMount(() => {
  console.log("创建之前")
})
onMounted(() => {
  console.log("创建完成")
})
onBeforeUpdate(() => {
  console.log("修改之前")
})
onUpdated(() => {
  console.log("修改完成")
})
onBeforeUnmount(() => {
  console.log("卸载之前")
})
onUnmounted(() => {
  console.log("卸载完毕")
})
</script>

<style scoped>

</style>