<script setup>
import {computed, defineProps} from 'vue';

const props = defineProps({
  formData: {
    type: Array,
    default: () => {
      return []
    }
  }
})

const emit = defineEmits(['update:formData'])

const localFormData = computed({
  get() {
    return new Proxy(props.formData, {
      get(target, key) {
        return Reflect.get(target, key)
      },
      set(target, key, value) {
        // Reflect.set(target, key, value)
        // emit('update:formData', target)
        emit('update:formData', target.splice(key, 1, value))

        return true
      }
    })
  },
  set(value) {
    console.log(value);
  }
})

const handleChange = () => {
  const a1 = localFormData.value[1];
  const a4 = localFormData.value[4];
  localFormData.value[1] = a4;
  localFormData.value[4] = a1;
};
</script>

<template>
  <div>
    <button type="button" @click="handleChange">交换位置</button>
    <div v-for="item in localFormData" :key="item">{{ item }}</div>
  </div>
</template>

<style scoped>

</style>
