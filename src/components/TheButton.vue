<script setup lang="ts">
import TheLoader from '@/components/TheLoader.vue'

const { variant = 'primary', loading = false } = defineProps<{
  variant?: 'primary' | 'secondary' | 'danger'
  loading?: boolean
}>()
</script>

<template>
  <button :class="variant">
    <slot v-if="!loading"></slot>
    <TheLoader v-else color="white" :size="16" :weight="3" />
  </button>
</template>

<style scoped>
button {
  border: none;
  outline: none;
  min-width: 70px;
  height: 32px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
button:hover {
  filter: brightness(1.2);
}
button.primary {
  background-color: #007bff;
  color: #fff;
}
button.secondary {
  background-color: #bcc1c8;
  color: #000;
}
button.danger {
  background-color: #f72439;
  color: #fff;
}
</style>
