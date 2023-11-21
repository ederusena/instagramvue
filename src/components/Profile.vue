<template>
  <Container>
    <div class="profile-container">
      <UserBar username="Ederusena" :userInfo="{posts: 4, followers: 100, following: 344}"/>
    </div>
  </Container>
</template>

<script setup>
import { useRoute } from "vue-router";
import Container from "./Container.vue";
import UserBar from "./UserBar.vue";
const route = useRoute();

</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
}
</style>