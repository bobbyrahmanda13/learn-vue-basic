<template>
  <Teleport to=".modals-containers">
    <div class="modal">
      <h1>
        <slot name="title" />
      </h1>
      <slot></slot>
      <!-- <pre>{{ $slots.title() }}</pre> options api vue -->
      <button>Hide Modal</button>
    </div>
  </Teleport>
</template>
<script setup>
// this.$slots.title() ==> options api vue
/* import { useSlots } from 'vue';
const slots = useSlots()
console.log(slots.title()) */
</script>

<style scoped>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
