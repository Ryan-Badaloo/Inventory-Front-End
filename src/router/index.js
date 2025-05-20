import { createRouter, createWebHistory } from 'vue-router'
import { jwtDecode } from 'jwt-decode'
import HomeView from '@/views/HomeView.vue'
import UserLogin from '@/views/LoginPage.vue'
import UserRegister from '@/views/RegisterPage.vue'
import Test from '@/views/TestPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'UserLogin',
      component: UserLogin,
    },
    {
      path: '/register',
      name: 'UserRegister',
      component: UserRegister,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      meta: { requiresAuth: true } // Protected
    }
  ],
})


// Global navigation guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  console.log(token)
  if (token) {
    try {
      const decoded = jwtDecode(token);
      const isExpired = decoded.exp * 1000 < Date.now();
      if (isExpired) {
        console.log("Token expired, redirecting to login...");
        localStorage.removeItem('token');
        return next('/login');
      }
    } catch (error) {
      console.log("Invalid token, clearing...");
      localStorage.removeItem('token');
      return next('/login');
    }
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next('/login');
  } else {
    next();
  }
});


export default router
