<script setup lang="ts">
import {reactive,readonly,shallowReactive} from 'vue'

let abc=shallowReactive({
  name:'xiaofei' ,//第一层响应式
  sub:{     // 挂在之前改变可以生效、挂载之后更改，dom不生效
    sex:'boy'
  }
})
const changeShallow=()=>{

}

let arr = reactive<number[]>([1, 2, 3, 4, 5]) //[]、{}
let obj = reactive({
  name: '小飞'
}) //[]、{}
setTimeout(() => {
  arr.push(1);
  console.log(arr)
}, 100)
const changeName = () => {
  obj.name = '大飞'
}
</script>

<template>
  <div>{{ arr }}</div>
  <div>{{ obj.name }}</div>
  <button @click="changeName"></button>
</template>

<style scoped>

</style>
