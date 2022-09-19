<template>
  <Bro1 @changeBro2="changeBro2"></Bro1>
  <Bro2 :flag="flag"></Bro2>
</template>
<script setup lang="ts">
import {ref} from "vue";
import Bro1 from "@/components/Bro1.vue";
import Bro2 from "components/Bro2.vue";

let flag = ref(true)
const changeBro2 = () => {
  flag.value = !flag.value
}
</script>
<style scoped>
html, body {
  height: 100%;
  overflow: hidden;
}

</style>
