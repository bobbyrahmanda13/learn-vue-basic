<template>
  <div class="posts">
    <h1>Posts</h1>
    <!-- <ul>
      <li>
        <RouterLink to="/postDetail/id1">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id2">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id3">Post 3</RouterLink>
      </li>
    </ul> -->

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus />
    <button class="counter-button" :class="{ 'yellow': oddOrEven === 'odd' }" @click="increaseCounter(1)">
      {{ counterData.count }}
    </button>
  </div>
</template>

<script setup>
/* imports */
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounter } from "@/use/useCounter";
/* post */
const posts = ref([
  {
    id: "id1",
    title: "Post 1",
  },
  {
    id: "id2",
    title: "Post 2",
  },
  {
    id: "id3",
    title: "Post 3",
  },
]);

// counter button
const { counterData, increaseCounter, oddOrEven } = useCounter();
</script>
<style scoped>
ul {
  margin-bottom: 30px;
}

.counter-button {
  font-size: 60px;
  width: 100%;
  background-color: pink;
}

.counter-button.yellow {
  background-color: yellow;
}
</style>
