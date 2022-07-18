<template>
  <div>我是Bro1组件</div>
  <button @click="changeBro2">改变Bro2组件</button>
</template>


<script setup lang="ts">
const emit = defineEmits(['changeBro2'])
const changeBro2 = () => {
  emit('changeBro2')

}
</script>

<style scoped>
</style>