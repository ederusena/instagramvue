<template>
  <div>
    <a-button type="primary" @click="showModal">{{ title }}</a-button>
    <a-modal v-model:open="open" @ok="handleOk" :title="title">
      <template #footer>
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button
          key="submit"
          type="primary"
          :loading="loading"
          @click="handleOk"
          >Submit</a-button
        >
      </template>
      <div class="input-container">
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
        <a-typography-title v-if="errorMessage" type="danger" :level="5">{{
          errorMessage
        }}</a-typography-title>
      </div>
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
const { errorMessage } = storeToRefs(userStore);

const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  console.log("ok");
  userStore.handleSignup(userCredentials);
};

const handleCancel = (e) => {
  userStore.clearMessageError();
  open.value = false;
};
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>