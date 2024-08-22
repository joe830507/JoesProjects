import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NewsView from '@/views/NewsView.vue'
import MembersView from '@/views/MembersView.vue'
import OrdersView from '@/views/OrdersView.vue'

import NewsList from '@/components/news/NewsList.vue'
import AddNews from '@/components/news/AddNews.vue'
import UpdateNews from '@/components/news/UpdateNews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      children: [
        { path: '', name: 'NewsList', component: NewsList },
        {
          path: 'add',
          name: 'AddNews',
          component: AddNews
        },
        {
          path: ':id',
          name: 'UpdateNews',
          component: UpdateNews
        }
      ]
    },
    {
      path: '/members',
      name: 'members',
      component: MembersView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView
    }
  ]
})

export default router
