<script setup>
import { useUsersStore } from "@/stores/users";
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { storeToRefs } from "pinia";

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
