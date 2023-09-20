<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import VModelObj from "./components/vModelObj/vModelObj.vue";
import VModelArr from "./components/vModelArr/vModelArr.vue";

export default {
  components: {VModelArr, VModelObj},
  data() {
    return {
      name: 'xiaofei',
      uname: 'dafei',
      msg: '<span>你好</span>',
      id: 'd1',
      attributeName: 'id',
      formData: {
        name: 'xiaofei',
        age: 12
      },
      formDataArr: [1, 2, 3, 4, 5]
    }
  },
  watch: {
    formData: {
      handler: function (val) {
        console.log(888, val)
      },
      deep: true
    },
    formDataArr: {
      handler: function (val) {
        console.log(999, val)
      },
      deep: true
    }
  },
  methods: {
    changeUname() {
      this.uname = '我是大飞'
    },
    changeColor: function () {
      this.id = this.id === 'd1' ? "d2" : 'd1'
    }
  },
  computed: {
    // 只要依赖值不改变，计算属性就不会改变；计算属性将基于它们的响应依赖缓存，计算属性只会在相关响应依赖发生改变时重新计算
    reverseMsg: function () {
      return this.uname.split('').reverse().join('')
    }
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>{{ name }}</p>
  <!-- v-once:当数据改变时插值处的语法不再改变 -->
  <p v-once>{{ uname }}</p>
  <!-- v-on:表示监听 -->
  <p>{{ uname }}</p>
  <button v-on:click="changeUname">改变名字</button>
  <!-- v-on的语法糖 -->
  <button @click="changeUname">改变名字</button>
  <!-- v-html: 插入html -->
  <p v-html="msg"></p>
  <!-- v-bind: 动态绑定数据内容 -->
  <!-- <p v-bind:id="id" @click="changeColor">切换颜色</p> -->
  <!-- <p :id="id" @click="changeColor">切换颜色</p> -->
  <p :id="id" @click="id = id == 'd1' ? 'd2' : 'd1'">切换颜色</p>
  <!-- 动态属性 -->
  <p v-bind:[attributeName]="id">切换属性</p>
  <button @click="attributeName = 'class'">切换属性</button>
  <!-- 计算属性 -->
  <p>{{ reverseMsg }}</p>

  <div>****************************************</div>
<!--  <v-model-obj :form-data="formData"></v-model-obj>-->
    <v-model-obj v-model:form-data="formData"></v-model-obj>
  <div>****************************************</div>
  <v-model-arr :form-data="formDataArr"></v-model-arr>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#d1 {
  color: aqua;
}

.d1 {
  /* font-size: 100; */
  color: red;
}

#d2 {
  color: blueviolet;
}
</style>
