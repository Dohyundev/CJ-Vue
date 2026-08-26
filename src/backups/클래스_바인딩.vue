<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)
const isNormal = ref(false)

function toggleActive() {
  isActive.value = !isActive.value
}
function toggleWeight() {
  isNormal.value = !isNormal.value
}
</script>

<template>
  <!-- <h1 class="active font-normal">Hello world!</h1> -->
   <h1
   :class="{
     active: isActive,
     'font-normal': isNormal,
     static: true
   }">
   Hello world!
  </h1>
  <button @click="toggleActive">Toggle Active!</button>
  <button @click="toggleWeight">Toggle Weight!</button>
</template>

<style scoped>
.active {
  color: red;
}
.font-normal {
  font-weight: 400;
}
</style>
