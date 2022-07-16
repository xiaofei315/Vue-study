<template>
  <div class="wrapper">
    <div class="item" @click="setCurrentComp(item)" v-for="item in list" :key="item.name">{{ item.name }}</div>
  </div>
  <component :is="current.comName"></component>
</template>

<script setup lang="ts">
import A from './A/index.vue'
import B from './B/index.vue'
import C from './C/index.vue'
import {markRaw, reactive} from "vue";

type Tabs = {
  name: string,
  comName: any
}
type Com = Pick<Tabs, 'comName'>

const list = reactive<Tabs[]>([
  {
    name: '我是A组件',
    comName: markRaw(A)
  },
  {
    name: '我是B组件',
    comName: markRaw(B)
  },
  {
    name: '我是C组件',
    comName: markRaw(C)
  }
])

let current = reactive<Com>({
  comName: list[0].comName
})
const setCurrentComp = (item: Tabs) => {
  console.log(item)
  current.comName = item.comName
}
</script>

<style scoped lang="less">
.wrapper {
  display: flex;
  margin-top: 30px;

  .item {
    width: 100px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #ccc;
    margin-left: 30px;
  }
}

</style>