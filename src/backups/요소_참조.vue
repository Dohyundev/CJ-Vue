<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'

const inputRef = useTemplateRef('abc')

onMounted(function () {
  inputRef.value?.focus()
})
</script>

<template>
  <div>
    <input ref="abc" type="text">
    <button>검색</button>
  </div>
</template>

<style scoped></style>
