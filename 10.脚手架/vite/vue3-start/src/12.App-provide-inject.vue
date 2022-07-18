<template>
  <div class="box">
    我是根组件
    <A></A>
  </div>

</template>
<script setup lang="ts">
import {provide} from "vue";
import A from './components/A.vue'

provide("flag", true)
</script>
<style scoped>
html, body {
  height: 100%;
  overflow: hidden;
}

.box {
  width: 300px;
  height: 300px;
  background: #2c3e50;
  border: 1px solid #42b983;
  position: relative;
}
</style>
