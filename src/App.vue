<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <a-layout class="layout">
    <NavBar />
    <RouterView />
  </a-layout>
</template>
