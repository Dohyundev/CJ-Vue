<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(false)

// 참(Truthy)
// ...

// 거짓(Falsy)
// false, 0, null, undefined, NaN, 0n, ''
// Not a Number
</script>

<template>
  <input type="text">
  <button @click="isShow = !isShow">토글</button>
  <h1 v-if="isShow">배열에 데이터가 들어있어요!</h1>
</template>

<style scoped></style>
