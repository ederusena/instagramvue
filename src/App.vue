<script setup>
import { useUsersStore } from "@/stores/users";
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const userStore = useUsersStore();
const { user } = storeToRefs(userStore);
onMounted(async () => {
  await userStore.getUser();
});

</script>

<template>
  <a-layout class="layout">
    <NavBar />
    {{ user }}
    <RouterView />
  </a-layout>
</template>
