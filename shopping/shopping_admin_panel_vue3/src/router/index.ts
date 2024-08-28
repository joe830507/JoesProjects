import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/member',
      name: 'Member',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/MemberView.vue')
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('@/views/OrderView.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/views/ProductView.vue')
    },
    {
      path: '/report',
      name: 'Report',
      component: () => import('@/views/ReportView.vue')
    },
    {
      path: '/employee',
      name: 'Employee',
      component: () => import('@/views/EmployeeView.vue')
    },
    {
      path: '/authorization',
      name: 'Authorization',
      component: () => import('@/views/AuthorizationView.vue')
    }
  ]
})

export default router
