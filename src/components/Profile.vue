<template>
  <Container>
    <div class="profile-container">
      <UserBar
        username="Ederusena"
        :userInfo="{ posts: 4, followers: 100, following: 344 }"
      />
      <ImageGallery
        :posts="[
          {
            id: 1,
            image:
              'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600',
          },
          {
            id: 2,
            image:
              'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1600',
          },
          {
            id: 3,
            image:
              'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1600',
          },
        ]"
      />
    </div>
  </Container>
</template>

<script setup>
import { useRoute } from "vue-router";
import Container from "./Container.vue";
import ImageGallery from "./ImageGallery.vue";
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