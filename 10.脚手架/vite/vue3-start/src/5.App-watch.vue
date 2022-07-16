<script setup lang="ts">
import {reactive, computed, ref, watch} from 'vue'

let msg1 = ref<string>('')
let msg2 = ref<string>('')

// 监听一个
// watch(msg1, (newVal, oldVal) => {
//   console.log('新的', newVal)
//   console.log('旧的', oldVal)
// })

// 监听多个
// watch([msg1, msg2], (newVal, oldVal) => {
//   console.log('新的', newVal)
//   console.log('旧的', oldVal)
// })

// let obj = reactive({
//   name: {
//     val: '小飞'
//   }
// })
// // 深层监听
// watch(obj, (newVal, oldVal) => {
//   console.log('新的', newVal)
//   console.log('旧的', oldVal)
// }, {
//   deep: true, // 深度监听
//   immediate: true //开始的时候执行监听
// })

// 监听单一项
let obj4 = reactive({
  name: 'xaiofei',
  name2: 'dafei'
})
watch(() => obj4.name, (newVal, oldVal) => {
  console.log(newVal)
  console.log(oldVal)
})
</script>

<template>
  <div style="width: 800px;">
    <!--    <input v-model="msg1" type="text"/>-->
    <!--    <input v-model="msg2" type="text"/>-->
    <!--    <input v-model="obj.name.val" type="text"/>-->

    <!--    监听单一项   -->
    <input v-model="obj4.name" type="text"/>
    <input v-model="obj4.name2" type="text"/>

  </div>
</template>

<style scoped>

</style>
