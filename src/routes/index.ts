import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

// https://google.com/dashboard/account
// https://google.com/#/dashboard/account

export default createRouter({
  history: createWebHistory(),
  routes: routes
})
