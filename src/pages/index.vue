<template>
    <button @click="lazyOnloadImg">图片懒加载</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const lazyOnloadImg = () => {
    router.push('/lazyOnloadImg')
}
</script>
