<script setup lang="ts">
import { ref } from 'vue'
import TheButton from '@/components/TheButton.vue'

const isLoading = ref(false)

async function handleSearch() {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 3000))
  isLoading.value = false
}
</script>

<template>
  <TheButton :loading="isLoading" @click="handleSearch">검색</TheButton>
  <TheButton variant="secondary">취소</TheButton>
  <TheButton variant="primary">저장</TheButton>
  <TheButton variant="danger">삭제</TheButton>
</template>

<style scoped></style>
