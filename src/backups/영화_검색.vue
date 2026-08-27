<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue'
import TheLoader from '@/components/TheLoader.vue'

export interface ResponseData {
  Search: Movie[]
  totalResults: string
  Response: string
}
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const movies = ref<Movie[]>([])
const isLoading = ref(false)
const searchText = ref('')
const inputRef = useTemplateRef('abc')

onMounted(function () {
  inputRef.value?.focus()
})

async function fetchMovies() {
  isLoading.value = true
  // await new Promise(resolve => setTimeout(resolve, 3000))
  const response = await fetch(`https://omdbapi.com/?apikey=9d38c929&s=` + searchText.value)
  const data = await response.json()
  movies.value = data.Search
  isLoading.value = false
}
</script>

<template>
  <div>
    <input ref="abc" type="text" v-model="searchText" @keydown.enter="fetchMovies">
    <button @click="fetchMovies">검색!</button>
  </div>
  <div>
     <TheLoader v-if="isLoading" />
    <ul @click="console.log(123)">
      <li v-for="movie in movies" :key="movie.imdbID">
        {{ movie.Title }} ({{ movie.Year }})
        <img :src="movie.Poster" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
img {
  width: 100px;
}
</style>
