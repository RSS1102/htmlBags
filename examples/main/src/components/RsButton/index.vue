<template>
  <div class="box">
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.box {
  display: inline-block;
  height: 42px;
  line-height: 250%;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin: 5px;

  &::before {
    content: "";
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background-color: #828282;
    border-radius: 10px;
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: -1;
  }

  &::after {
    content: "";
    width: 300%;
    height: 500%;
    background-color: rgb(255, 255, 255);
    background-image: conic-gradient(#ffffff, #fc97e9, #e7d0fe, #cca9fd, #02eded, #fefe05);
    border-radius: 10px;
    position: absolute;
    top: -100%;
    left: -100%;
    z-index: -2;
    animation: rotate 5s linear infinite;
  }

  .content {
    color: #ffffff;
    margin: 0 10px;
    text-align: center;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }


}
</style>