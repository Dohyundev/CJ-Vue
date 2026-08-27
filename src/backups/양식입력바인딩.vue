<script setup lang="ts">
import { ref } from 'vue'

const inputText = ref('')
const className = 'active'
</script>

<template>
  <input type="text" :value="inputText" @input="inputText = $event.target.value">
  <!-- <input type="text" v-model="inputText"> -->
  <p :class="className">inputText 데이터의 값은: {{ inputText }}</p>
</template>

<style scoped>
</style>
