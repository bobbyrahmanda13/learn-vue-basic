<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <Modal v-model="showModal" title="My new Title (via props)">
      <!-- <template v-slot:title>My new Title </template> -->
      <!-- <template #title>My new Title </template>  learn slots-->
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        optio, dolores laudantium quidem in aliquid itaque earum nostrum, ipsa
        beatae quis tenetur natus quos corporis, hic commodi dolor veniam non!
      </p>
    </Modal>
  </div>
</template>

<script setup>
// import
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
// modals
const showModal = ref(false);
</script>
<!-- option api -->
<!-- <script>
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal,
  },
};
</script> -->
