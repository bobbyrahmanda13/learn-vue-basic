<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the content of post with ID of {{ $route.params.id }} here!</p>
    <div><button @click="showPostId">Show Post ID</button></div>
    <div class="">
      <button @click="goHomeIn3Seconds">Go Home in 3 seconds</button>
    </div>
    <div class="">
      <button @click="goToFirstPost">Go to first post</button>
    </div>
    <p>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </p>
  </div>
</template>
<!-- pada composition api tidak membutuhkan "this.$route" tapi di option api membutuhkannya dan digunakan pada methods, computed properties or lifecycle hooks -->
<!-- untuk router jika menggunakan option api maka" this.$router.push('/') " akan digunakan tapi jika menggunakan composition api maka tidak menggunakan ini tapi menggunakan useRouter -->
<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const showPostId = () => {
  // console.log("showPostId");
  alert(`The ID of this post is :${route.params.id}`);
};

const router = useRouter();
const goHomeIn3Seconds = () => {
  setTimeout(() => {
    // router.push("/");
    router.push({ name: "home" });
  }, 3000);
};

const goToFirstPost = () => {
  router.push({ name: "postDetail", params: { id: "id1" } });
};
</script>
