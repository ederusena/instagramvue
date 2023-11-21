<template>
  <div>
    <a-button type="primary" @click="showModal">{{ title }}</a-button>
    <a-modal v-model:open="open" @ok="handleOk" :title="title">
      <template #footer>
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button
          key="submit"
          type="primary"
          :disabled="loading"
          :loading="loading"
          @click="handleOk"
          >Submit</a-button
        >
      </template>
      <div v-if="!loading" class="input-container">
          <a-input
          v-if="!isLogin"
          v-model:value="userCredentials.username"
          placeholder="Username"
          class="input"
        />
        <a-input
          v-model:value="userCredentials.email"
          placeholder="Email"
          class="input"
        />
        <a-input
          v-model:value="userCredentials.password"
          placeholder="Password"
          type="password"
          class="input"
        />
      </div>
      <div v-else class="spinner">
        <a-spin size="large" />
      </div>
      <a-typography-title v-if="errorMessage" type="danger" :level="5">{{
          errorMessage
        }}</a-typography-title>
    </a-modal>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useUsersStore } from "@/stores/users";
import { storeToRefs } from "pinia";

const userCredentials = reactive({
  username: "",
  email: "",
  password: "",
});
const open = ref(false);

const { isLogin } = defineProps(["isLogin"]);
const title = isLogin ? "Login" : "Signup";
const userStore = useUsersStore();
const { errorMessage, loading, user } = storeToRefs(userStore);

const showModal = () => {
  open.value = true;
};

const handleOk = async (e) => {
  if (isLogin) {
    await userStore.handleLogin(userCredentials);
  } else {
    await userStore.handleSignup(userCredentials);
  }

  if (user.value) {
    open.value = false;
    clearCredentials();
    userStore.clearMessageError();
  }
};

const handleCancel = (e) => {
  open.value = false;
  userStore.clearMessageError();
};

const clearCredentials = () => {
  userCredentials.username = "";
  userCredentials.email = "";
  userCredentials.password = "";
};

</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
</style>