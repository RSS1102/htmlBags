<template>
  <div>Vue</div>
  <RsButton @click="goImageLazyLoading">imageLazyLoading</RsButton>
</template>
<script setup lang="ts">
import RsButton from "../../components/RsButton/index.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goImageLazyLoading = () => router.push("/vue/imageLazyLoading");
</script>