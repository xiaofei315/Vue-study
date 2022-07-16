<script setup lang="ts">
import {toRef, toRefs, toRaw, reactive} from 'vue'

// const obj = {
//   a: 1,
//   b: 2
// }
// const state1 = toRef(obj, 'a')
// const change = () => {
//   state1.value++
//   console.log("原始对象", obj)
//   console.log("改变后的对象", state1)
// }

// const obj2 = reactive({
//   a: 1,
//   b: 2
// })
// const state2 = toRef(obj2, 'a')
// const change2 = () => {
//   state2.value++
//   console.log("原始对象", obj)
//   console.log("改变后的对象", state2)
// }

// const obj3 = reactive({
//   a: 1,
//   b: 2
// })
// const {a, b} = toRefs(obj3)
// const change3 = () => {
//   a.value++
//   b.value++
// }

const obj4 = reactive({
  a: 1,
  b: 2
})
const raw = toRaw(obj4)
console.log(obj4)
console.log(raw)
</script>

<template>
  <!--  <div>{{ state1 }}</div>-->
  <!--  <button @click="change">改变</button>-->

  <!--  <div>{{ state2 }}</div>-->
  <!--  <button @click="change2">改变</button>-->

  <!--  <div>{{ a }}</div>-->
  <!--  <div>{{ b }}</div>-->
  <!--  <button @click="change3">改变</button>-->
</template>

<style scoped>

</style>
