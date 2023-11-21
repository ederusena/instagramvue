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
        <div class="left-content" v-if="!isAuthenicated">
          <AuthModal title="Signup" btnTitle="Signup">
              <div class="container-modal">
                <a-input v-model:value="username" placeholder="Username" />
                <a-input v-model:value="email" placeholder="Email" />
                <a-input v-model:value="password" type="password" placeholder="Password" />
              </div>
          </AuthModal>
          <AuthModal title="Login" btnTitle="Login">
              <div class="container-modal">
                <a-input v-model:value="username" placeholder="Username" />
                <a-input v-model:value="password" placeholder="Password" />
              </div>
          </AuthModal>
        </div>

         <div class="left-content" v-else>
          <AuthModal title="Logout" btnTitle="Logout">
              <div class="container-modal">
                Are you sure you want to logout?
              </div>
          </AuthModal>
          <a-button type="primary" @click="handleOk">Profile</a-button>

        </div>
      </div>
    </Container>
  </a-layout-header>
</template>

<script setup>
import AuthModal from "./AuthModal.vue";
import { RouterLink } from "vue-router";
import Container from "./Container.vue";
import { ref } from "vue";


const username = ref("");
const email = ref("");
const password = ref("");
const searchUsername = ref("");
const isAuthenicated = ref(true);

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
  align-items: center;
  gap: 10px;
}

.right-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.container-modal {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>