import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ArticlesPage from '../views/ArticlesPage.vue'
import ShowPage from '../views/articles/ShowPage.vue'
import VideosPage from '../views/videos/DetailsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/video/:video_id',
    name: 'Videos',
    component: VideosPage
  },
  {
    path: '/articles',
    name: 'ArticlesPage',
    component: ArticlesPage
  },
  {
    path: '/article/:articleId',
    name: 'ShowPage',
    component: ShowPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
