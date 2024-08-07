<script setup lang="ts">
import { hello } from '@kuinne/shared';
import { ref } from 'vue';
import {
  defaultInputProps, InputProps, InputEmits, InputExpose,
} from './props';

withDefaults(
  defineProps<InputProps>(),
  defaultInputProps(),
);

const emit = defineEmits<InputEmits>();

function inputHandler(e: any) {
  const { value } = e.target;
  emit('update:modelValue', value);
  hello(value);
}

function clear() {
  emit('update:modelValue', '');
}

const a = ref(0);

defineExpose<InputExpose>({
  clear,
  a,
});
</script>

<template>
  <input
    class="kuinne-input"
    type="text"
    :value="modelValue"
    @input="inputHandler"
  >
</template>
