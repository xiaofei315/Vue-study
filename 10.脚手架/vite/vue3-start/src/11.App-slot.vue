<template>

  <!--  <Dialog>-->
  <!--    <template v-slot>-->
  <!--      <div>匿名插槽</div>-->
  <!--    </template>-->
  <!--  </Dialog>-->
  <div>
    <Dialog>
      <template  #default="{data}">
<!--        <div>具名插槽</div>-->
        <div>{{ data }}</div>
      </template>
    </Dialog>
  </div>


</template>
<script setup lang="ts">
import Dialog from './components/Dialog/index.vue'
</script>
<style scoped>
html, body {
  height: 100%;
  overflow: hidden;
}
</style>
