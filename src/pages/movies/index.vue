<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import TheLoader from '@/components/TheLoader.vue'
import TheButton from '@/components/TheButton.vue'
import { RouterLink } from 'vue-router'
import { useMovieStore } from '@/stores/movie.ts'

const movieStore = useMovieStore()
const inputRef = useTemplateRef('abc')

onMounted(function () {
  inputRef.value?.focus()
})

// https://localhost:5173/movies
// https://localhost:5173/movies/tt19273122
// https://localhost:5173/dashboard/posts/12345
</script>

<template>
  <div>
    <input
      ref="abc"
      type="text"
      v-model="movieStore.searchText"
      @keydown.enter="movieStore.fetchMovies">
    <TheButton :loading="movieStore.isLoading" @click="movieStore.fetchMovies">검색!</TheButton>
  </div>
  <div>
     <TheLoader v-if="movieStore.isLoading" />
    <ul @click="console.log(123)">
      <li v-for="movie in movieStore.movies" :key="movie.imdbID">
        <RouterLink :to="'/movies/' + movie.imdbID">
          {{ movie.Title }} ({{ movie.Year }})
          <img :src="movie.Poster" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
img {
  width: 100px;
}
</style>
