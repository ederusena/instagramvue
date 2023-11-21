<template>
  <a-card hoverable style="width: 240px" class="card">
    <template #cover>
      <img alt="example" :src="image" />
    </template>
    <a-card-meta :title="username">
      <template #description>{{ caption }}</template>
    </a-card-meta>
  </a-card>
</template>

<script setup>

const {id, image, username, caption} = defineProps(["id", "image", "username", "caption"	]);
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>

