<template>
  <div class="menu">菜单区域
    <div>{{ title }}</div>
    <div>{{ list }}</div>
    <button @click="handleClick">派发事件</button>
    <button @click="handleClick2">派发事件</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

type Props = {
  title?: string,
  list?: number[]
}
// defineProps<Props>(); // 定义Props
withDefaults(defineProps<Props>(), { // 定义props默认值
  title: "我是一个靓仔",
  list:()=>[1,2,3,4,11111]
})

let list2 = ref<number[]>([1, 2, 3, 4, 5])
defineExpose({
  list2
})
const emit = defineEmits(['handleClick', 'handleClick2'])
const handleClick = () => {
  emit('handleClick', [1, 2, 3, 4], '我是1')
}
const handleClick2 = () => {
  emit('handleClick2', [1, 2, 3, 4], '我是2')
}
</script>

<style lang="less" scoped>
.menu {
  width: 200px;
  border-right: 1px solid #ccc;
}
</style>