<script setup lang="ts">
import {reactive, computed} from 'vue'


type Shop = {
  name: string,
  num: number,
  price: number
}
const data = reactive<Shop[]>([
  {
    name: '裤子',
    num: 1,
    price: 20
  },
  {
    name: '裤子',
    num: 1,
    price: 20
  },
  {
    name: '裤子',
    num: 1,
    price: 20
  }
])
let totalPrice = computed(() => {
  return data.reduce((pre, cur) => {
    return pre + cur.num * cur.price
  }, 0)
})
const operate = (item: Shop, type: boolean) => {
  if (item.num > 1 && !type) {
    item.num--
  }
  if (item.num < 99 && type) {
    item.num++
  }
}
</script>

<template>
  <div style="width: 800px;">
    <div class="row">
      <div class="item">名称</div>
      <div class="item">数量</div>
      <div class="item">价格</div>
    </div>
    <div class="row" :key="index" v-for="(item,index) in data">
      <div class="item">
        <div>{{ item.name }}</div>
      </div>
      <div class="item">
        <div class="operate" @click="operate(item,false)">-</div>
        <div class="num">{{ item.num }}</div>
        <div class="operate" @click="operate(item,true)">+</div>
      </div>
      <div class="item">
        <div>{{ item.price * item.num }}</div>
      </div>
    </div>
    <div class="row">
      <div class="item total">总价:{{ totalPrice }}</div>
    </div>
  </div>
</template>

<style scoped>
.row {
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.item {
  flex: 1;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #42b983;
}

.operate {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border: 1px solid #2c3e50;
  border-radius: 2px;
}

.num {
  width: 40px;
  height: 20px;
  line-height: 20px;
  text-align: center;

}

.total {
  padding-right: 100px;
  justify-content: right;
}
</style>
