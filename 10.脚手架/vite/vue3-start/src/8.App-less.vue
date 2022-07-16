<script setup lang="ts">
import {reactive, computed, ref, watch, watchEffect} from 'vue'
import layout from './layout/index.vue'

let show = ref<boolean>(true)
</script>

<template>
  <layout></layout>
</template>

<style scoped>

</style>
