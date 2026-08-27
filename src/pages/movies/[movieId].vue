<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import TheLoader from '@/components/TheLoader.vue'

export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export interface Rating {
  Source: string
  Value: string
}


const route = useRoute()
const movieId = route.params.movieId
const movie = ref<Movie | null>(null)
const isLoading = ref(true)

async function fetchMovieDetails() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const response = await fetch(`https://omdbapi.com/?apikey=9d38c929&i=` + movieId)
  const data = await response.json()
  movie.value = data
  isLoading.value = false
}
fetchMovieDetails()
</script>

<template>
  <TheLoader v-if="isLoading" />
  <template v-if="movie">
    <h1>{{ movie.Title }}</h1>
    <p>{{ movie.Plot }}</p>
    <img :src="movie.Poster" alt="">
  </template>
</template>
