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
        <div class="content" v-if="!loadingUser">
          <div class="left-content" v-if="!user">
            <AuthModal :isLogin="true" />
            <AuthModal :isLogin="false" />
          </div>

          <div class="left-content" v-else>
            <a-button type="primary" @click="userStore.handleLogout">Logout</a-button>
            <a-button type="primary" @click="handleOk">Profile</a-button>
          </div>
        </div>
      </div>
    </Container>
  </a-layout-header>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useUsersStore } from "@/stores/users";
import AuthModal from "./AuthModal.vue";
import Container from "./Container.vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const userStore = useUsersStore();
const { user, loadingUser } = storeToRefs(userStore);

const searchUsername = ref("");
const isAuthenticated = ref(false);

const router = useRouter();
const onSearch = () => {
  if (searchUsername.value) {
    router.push({
      name: "profile",
      params: { username: searchUsername.value },
    });
    searchUsername.value = "";
  }
};
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;

}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.right-content {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>