import { api } from '@/api';
import { useAuthStore } from '@/stores/auth';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: async () => await import('../pages/HomePage.vue')
    },

    {
      path: '/profile',
      component: async () => await import('../pages/ProfilePage.vue'),
      meta: {
        auth: true
      }
    },

    {
      path: '/admin-panel',
      component: async () => await import('../pages/AdminPanelPage.vue'),
      meta: {
        auth: true
      }
    },

    {
      path: '/login',
      component: async () => await import ('@/pages/LoginPage.vue')
    }
  ]
})

router.beforeResolve(async (to) => {
  const { profile, loadProfile} = useAuthStore()
  
  if (to.meta.auth) {
    try {
      await loadProfile()
      alert('loaded profile')
      if (!profile.isLoggedIn) return '/login'
    } catch (error) {
      return '/login'
    }
  } 
})