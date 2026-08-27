import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.ts'
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount('#app')
