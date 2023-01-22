import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/AddExpenses',
      name: 'AddExpenses',
      component: () => import('../views/AddExpensesView.vue')
    },
    {
      path: '/RecentExpenses',
      name: 'RecentExpenses',
      component: () => import('../views/RecentExpensesView.vue')
    },
    {
      path: '/FinancialStatement',
      name: 'FinancialStatement',
      component: () => import('../views/FinancialStatementView.vue')
    },
  ]
})

export default router
