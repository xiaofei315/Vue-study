<template>
  <List @onClick="getItem" :data="list"></List>
</template>
<script setup lang="ts">
import {reactive, computed, ref, watch, watchEffect} from 'vue'
import List from './components/List.vue'

type TreeList = {
  name: string,
  children?: TreeList[] | []
}
let list = reactive<TreeList[]>([
  {
    name: 'no.1',
    children: [
      {
        name: "no.1-1",
        children: [
          {name: 'no.1-1-1'},
          {name: 'no.1-1-2'},
          {name: 'no.1-1-3'}
        ]
      },
      {
        name: "no.1-2",
        children: [
          {name: 'no.1-2-1'},
          {name: 'no.1-2-2'},
          {name: 'no.1-2-3'}
        ]
      }
    ]
  },
  {
    name: 'no.2',
    children: [
      {name: 'no.2-1'}
    ]
  },
  {
    name: 'no.3'
  }
])
const getItem = (item: TreeList) => {
  console.log(item)
}
</script>
<style scoped>
html, body, #app {
  height: 100%;
  overflow: hidden;
}
</style>
