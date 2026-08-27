<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const count = ref(4)
const double = computed(function () {
  return count.value * 2
}) // 계산된 데이터

// watch(감시할데이터, 실행할함수)
watch(count, function (newValue, oldValue) {
  console.log('count 데이터가 변경되었습니다.', newValue, oldValue)
})

function increase() {
  count.value += 1
}
function decrease() {
  count.value -= 1
}
</script>

<template>
  <div>{{ count }}</div>
  <div>{{ double }}</div>
  <button @click="increase">증가!</button>
  <button @click="decrease">감소!</button>
</template>
