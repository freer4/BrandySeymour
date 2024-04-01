import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'District9',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/community',
      name: 'Community',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CommunityView.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/BlogView.vue')      
    },

    {
      path: '/donate',
      name: 'Donate',
      component: () => import('../views/DonationView.vue')      
    },
    

    
    {
      path: '/blog/journey-statehouse',
      name: 'JourneyStatehouse',
      component: () => import('../views/Blogs/BlogOne.vue')
    },
    {
      path: '/blog/journey-statehouse-part-2',
      name: 'JourneyStatehouse2',
      component: () => import('../views/Blogs/JourneyStatehouse2.vue')
    },
    {
      path: '/blog/journey-statehouse-part-3',
      name: 'JourneyStatehouse3',
      component: () => import('../views/Blogs/JourneyStatehouse3.vue')
    },
  ]
})

export default router
