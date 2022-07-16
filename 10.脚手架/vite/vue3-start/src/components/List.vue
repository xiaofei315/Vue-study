<template>
  <div style="margin-left: 20px;" @click.stop="getItem(item)" v-for="(item,index) in data" :key="index">
    {{ item.name }}
    <TreeItem v-if="item?.children?.length" @onClick="getItem" :data="item.children"></TreeItem>
  </div>
</template>

<script setup lang="ts">

type TreeList = {
  name: string,
  children?: TreeList[] | []
}
type props = {
  data?: TreeList[]
}
defineProps<props>()
const emit = defineEmits(['onClick'])
const getItem = (item: TreeList) => {
  emit('onClick', item)
}

</script>
<script lang="ts">
export default {name: 'TreeItem'}
</script>

<style scoped>

</style>