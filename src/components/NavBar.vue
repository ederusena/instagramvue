<template>
  <a-layout-header>
    <Container>
      <div class="nav-container">
        <div class="right-content">
          <RouterLink to="/">Instagram</RouterLink>
          <a-input-search
            v-model:value="searchUsername"
            placeholder="Username..."
            style="width: 200px"
            @search="onSearch"
          />
        </div>
        <div class="left-content">
          <a-button type="primary">Signup</a-button>
          <a-button type="primary">Login</a-button>
        </div>
      </div>
    </Container>
  </a-layout-header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Container from "./Container.vue";
import { ref } from "vue";

const searchUsername = ref("");
const onSearch = () => {
  console.log(searchUsername.value);
};
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-content {
  display: flex;
  gap: 10px;
}

.right-content {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>