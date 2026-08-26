<script setup lang="ts">
import { ref } from 'vue'

const fontSize = ref(16)
</script>

<template>
  <!-- <h1 style="font-size: 16px;" class="color-red">Hello world!</h1> -->
  <h1 :style="{
    fontSize: fontSize + 'px'
    // fontSize: `${fontSize}px`
  }" class="color-red">Hello world!</h1>
  <button @click="fontSize += 2">크기 증가</button>
  <button @click="fontSize -= 2">크기 감소</button>
</template>

<style scoped>
.color-red {
  color: red
  /* font-size: 16px; */
}
</style>
