<template>
  <div>Vue</div>
  <RsButton @click="goImageLazyLoading">imageLazyLoading</RsButton>
  <div>React</div>
  <RsButton @click="goReact">Go React</RsButton>
</template>
<script setup lang="ts">
import RsButton from "../../components/RsButton/index.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goImageLazyLoading = () => router.push("/vue/imageLazyLoading");
const goReact = () => router.push("/react");
</script>