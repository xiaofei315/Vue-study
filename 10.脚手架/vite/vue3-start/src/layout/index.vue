<template>
  <div class="layout">
    <Menu ref="menu" @handleClick="getList" @handleClick2="getList2"  ></Menu>
<!--    <Menu ref="menu" @handleClick="getList" @handleClick2="getList2" :list="list" title="我是谁"></Menu>-->
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
import {reactive, ref} from "vue";
let menu = ref(null)
let list = reactive<number[]>([1, 2, 3, 4, 5, 6])
const getList = (list: number[], msg: string) => {
  // console.log("list", list, msg)
  console.log(menu.value)
}

const getList2 = (list: number[], msg: string) => {
  console.log("list", list, msg)
}
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  &-right {
    flex: 1;
  }
}
</style>