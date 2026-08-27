import { ref } from 'vue'
import { defineStore } from 'pinia'

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

// defineStore('저장소이름', 함수)
// defineStore('영화 정보를 처리하는 저장소')
export const useMovieStore = defineStore('movie', function () {
  const movies = ref<Movie[]>([])
  const isLoading = ref(false)
  const searchText = ref('')

  async function fetchMovies() {
    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 2000))
    const response = await fetch(`https://omdbapi.com/?apikey=9d38c929&s=` + searchText.value)
    const data = await response.json()
    movies.value = data.Search
    isLoading.value = false
  }

  return {
    movies, isLoading, searchText, fetchMovies
  }
})
