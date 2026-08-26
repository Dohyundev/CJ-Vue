<script setup lang="ts">
import { ref } from 'vue'

// const fruits = ref(['사과', '바나나', '딸기', '딸기'])
const fruits = ref([
  { name: '사과', id: 'skdjfnkw3' },
  { name: '바나나', id: 'sldkjfn12' },
  { name: '딸기', id: 'dkj12fn12' },
  { name: '딸기', id: '017sj1hs2' },
])
</script>

<template>
  <button @click="fruits.unshift({ name: '포도', id: '1231hjsbg' })">
    추가
  </button>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="fruit.id">
      {{ index + 1 }}) {{ fruit.name }}
    </li>
  </ul>
</template>

<style scoped></style>
