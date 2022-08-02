<template>
  <Teleport to=".modals-containers">
    <div class="modal" v-if="modelValue">
      <!-- <h1>
        <slot name="title" />
      </h1> -->
      <h1>{{ title }}</h1>
      <!-- <h1>{{ props.title }}</h1> -->
      <slot></slot>
      <!-- <pre>{{ $slots.title() }}</pre> options api vue -->

      <!-- <button @click="$emit('hideModal')">Hide Modal</button> -->
      <button @click="$emit('update:modelValue', false)">Hide Modal</button>
      <div>Username is: {{ userData.username }}</div>
    </div>
  </Teleport>
</template>
<script setup>
// this.$slots.title() ==> options api vue
/* import {useSlots} from 'vue';
    const slots = useSlots()
    console.log(slots.title()) */

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
  userData: {
    type: Object,
  },
}); // console.log(title);==> error
// console.log(props.title) => not error

// emits
// const emit = defineEmits(["update:modelValue"]);

// this.$emit('hideModal') ==> option api

// handle button click setup using method vuejs
/* const handleButtonClick = () => {
  emit("update:modelValue", false);
}; */
</script>

<!-- option api -->
<!-- <script>
export default {
  emits: ["hideModal"],
  props: {
    title: {
      type: String,
      default: "No title specified",
    },
  },
};
</script> -->

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
