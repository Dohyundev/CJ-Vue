<script setup lang="ts">
import { ref } from 'vue'
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
const isLoading = ref(true)

async function fetchMovies() {
  // await new Promise(resolve => setTimeout(resolve, 3000))
  const response = await fetch(`https://omdbapi.com/?apikey=9d38c929&s=spider`)
  const data = await response.json()
  movies.value = data.Search
  isLoading.value = false
}
fetchMovies()
</script>

<template>
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
