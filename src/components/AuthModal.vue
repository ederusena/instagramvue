<template>
  <div>
    <a-button type="primary" @click="showModal">{{ title }}</a-button>
    <a-modal v-model:open="open" :title="btnTitle" @ok="handleOk">
      <slot></slot>
    </a-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const open = ref(false);
const {title, btnTitle} = defineProps(["title", "btnTitle"]);

const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  console.log(e);
  open.value = false;
};
</script>


