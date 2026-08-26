<script setup lang="ts">
import { ref } from 'vue'

// let count = 0
const colorName = ref('color-red')
const count = ref(0)
// const isActive = ref(false)
// const elName = ref('paragraph')
const myAttributes = {
  class: 'active',
  id: 'paragraph',
  'data-count': 0
}

function increase() {
  count.value += 1
  console.log(count.value)
}
function changeColor() {
  if (colorName.value === 'color-red') {
    colorName.value = 'color-blue'
  } else {
    colorName.value = 'color-red'
  }
}
</script>

<template>
  <h1
    :class="colorName"
    @click="increase(), changeColor()">
    Hello {{ count }}~!!
  </h1>
  <p
    v-bind="myAttributes">
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped>
.color-red {
  color: red;
}
.color-blue {
  color: blue;
}
</style>
