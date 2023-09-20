<script setup>
import {computed, defineProps} from 'vue';

const props = defineProps({
  formData: {
    type: Object,
    default: () => {
      return {}
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
        emit('update:formData', {
          ...target,
          [key]: value,
        })
        return true
      }
    })
  },
  set(value) {
    console.log(value);
  }
})
</script>

<template>
<div>
  name:
  <input v-model="localFormData['name']" />
</div>

</template>

<style scoped>

</style>
