<template>
  <Container>
    <div class="userbar-container">
      <div class="top-content">
        <a-avatar :size="54">
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <a-typography-title :level="2"> {{ username }}</a-typography-title>
      </div>
      <div class="botton-content">
        <a-typography-title :level="5"
          >Posts {{ userInfo.posts }}</a-typography-title
        >
        <a-typography-title :level="5"
          >Followers {{ userInfo.followers }}</a-typography-title
        >
        <a-typography-title :level="5"
          >Following {{ userInfo.following }}</a-typography-title
        >
      </div>
    </div>
  </Container>
</template>x

<script setup>
import Container from "./Container.vue";
import { UserOutlined } from "@ant-design/icons-vue";

const { username, userInfo } = defineProps(["username", "userInfo"]);
</script>

<style scoped>
.userbar-container {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
}

.top-content {
  display: flex;
  padding-bottom: 75px;
  gap: 10px;
}

.botton-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.botton-content h5 {
  margin: 0;
  padding: 0;
}
</style>