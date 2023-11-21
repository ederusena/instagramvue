<template>
  <div class="image-gallery-container">
    <img v-for="post in posts" :src="post.image" :key="post.id" alt="" />
  </div>
</template>

<script setup>
const { posts } = defineProps(["posts"]);
</script>

<style scoped>
.image-gallery-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 5px;
}
</style>