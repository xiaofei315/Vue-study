<template>
  <div class="box">我是A组件
    <div>{{data}}</div>
    <B></B>
  </div>
</template>

<script setup lang="ts">
import {inject} from "vue";
import B from './B.vue'
let data = inject('flag')

</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: greenyellow;
  border: 1px solid #42b983;
  position: absolute;
  z-index: 1;
}
</style>