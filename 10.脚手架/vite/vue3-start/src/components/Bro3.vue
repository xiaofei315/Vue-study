<template>
  <div>我是Bro3</div>
  <button @click="changeBro4">改变</button>
</template>

<script setup lang="ts">
import Bus from '../Bus'

const changeBro4 = () => {
  Bus.emit('change')
}
</script>

<style scoped>
</style>