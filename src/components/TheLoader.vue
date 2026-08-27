<script setup lang="ts">
// 객체 구조분해 할당
const { color = 'orange', size = 26, weight = 6 } = defineProps<{
  color?: string
  size?: number
  weight?: number
}>()
</script>

<template>
  <div class="hloader" :style="{
    '--hloader-color': color,
    '--hloader-size': size + 'px',
    '--hloader-weight': weight + 'px'
  }"></div>
</template>

<style scoped>
.hloader {
  --hloader-color: #e96900;
  --hloader-size: 80px;
  --hloader-weight: 8px;
  --hloader-duration: 1s;
  width: var(--hloader-size);
  height: var(--hloader-size);
  color: var(--hloader-color);
  border: var(--hloader-weight) solid;
  border-top-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: hloader var(--hloader-duration) infinite linear;
}
@keyframes hloader {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
