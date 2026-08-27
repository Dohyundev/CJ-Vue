<script setup lang="ts">
// import { ref } from 'vue'
import { RouterLink } from 'vue-router'

</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/movies">Movies</RouterLink>
  </header>
</template>

<style scoped>
header {
  display: flex;
  gap: 10px;
}
.router-link-exact-active {
  color: red;
  font-weight: 700;
}
</style>
