<template>
  <div>我是Bro2</div>
  <div>{{ flag }}</div>
</template>

<script setup lang="ts">
type Props = {
  flag: boolean
}
defineProps<Props>()
</script>

<style scoped>
</style>