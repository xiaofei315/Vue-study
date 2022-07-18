<template>
  <div>我是Bro4</div>
  <div>{{ flag }}</div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Bus from "../Bus";

let flag = ref<boolean>(false);
Bus.on('change', () => {
  flag.value = !flag.value
})
</script>

<style scoped>
</style>