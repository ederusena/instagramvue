<template>
  <Container>
    <div class="profile-container">
      <a-typography-title :level="2"> Profile {{ route.params.username }}</a-typography-title>
      <a-typography-title :level="3"> Image Galery</a-typography-title>
    </div>
  </Container>
</template>

<script setup>
import { useRoute } from "vue-router";
import Container from "./Container.vue";

const route = useRoute();

</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}
</style>