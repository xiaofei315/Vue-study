<script setup lang="ts">
import {reactive, computed, ref, watch, watchEffect} from 'vue'
import hello from './components/Hello.vue'

let show = ref<boolean>(true)
</script>

<template>
  <div>
    <hello v-if="show"></hello>
    <button @click="show = !show">卸载</button>
  </div>
</template>

<style scoped>

</style>
