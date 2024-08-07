<script setup lang="ts">
import { computed } from 'vue';
import { ButtonProps, ButtonSlots, defaultButtonProps } from './props';

const props = withDefaults(
  defineProps<ButtonProps>(),
  defaultButtonProps(),
);

defineSlots<ButtonSlots>();

const classes = computed(() => {
  const result: string[] = [];

  if (props.type) {
    result.push(`ke-button--${props.type}`);
  }

  if (props.plain) {
    result.push('ke-button--plain');
  }

  if (props.disabled) {
    result.push('ke-button--disabled');
  }

  return result;
});

</script>

<template>
  <button
    class="ke-button"
    :class="classes"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.test-class {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background-color: #e9ecef;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
</style>
