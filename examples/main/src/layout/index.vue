<template>
  <div>
    <div class="go-back">
      <div class="go-back__back" @click="goBack">Back</div>
    </div>
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => router.go(-1);
</script>
<style scoped lang="scss">
// 桃心形状的
.go-back {
  &__back {
    display: inline-block;
    border: 1px solid #888888;
    padding: 2px 5px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
}
</style>