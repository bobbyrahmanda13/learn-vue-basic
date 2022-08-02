<template>
  <Teleport to=".modals-containers">
    <div class="modal-dark" v-if="modelValue">
      <h1>{{ title }}</h1>
      <slot></slot>
      <button @click="$emit('update:modelValue', false)">Hide Modal</button>
    </div>
  </Teleport>
</template>
<script setup>
// props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No title specified",
  },
});
</script>

<style scoped>
.modal-dark {
  background: #333;
  color: white;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
