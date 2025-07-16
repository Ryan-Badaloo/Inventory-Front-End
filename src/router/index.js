import { createRouter, createWebHistory } from 'vue-router'
import { jwtDecode } from 'jwt-decode'
import HomeView from '@/views/HomeView.vue'
import UserLogin from '@/views/LoginPage.vue'
import UserRegister from '@/views/RegisterPage.vue'
import AddItem from '@/views/AddItemPage.vue'
import ModifyUser from '@/views/ModifyUserPage.vue'
import UpdateItem from '@/views/UpdateItemPage.vue'
import AssignItem from '@/views/AssignItemPage.vue'
import ChangePassword from '@/views/ChangePasswordPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/add-item',
      name: 'AddItem',
      component: AddItem,
    },

    {
      path: '/update-item-page',
      name: 'UpdateItem',
      component: UpdateItem,
    },
    {
      path: '/assign-item-page',
      name: 'AssignItem',
      component: AssignItem,
    },
    {
      path: '/modify-users',
      name: 'ModifyUser',
      component: ModifyUser,
    },
    {
      path: '/change-password',
      name: 'ChangePassword',
      component: ChangePassword,
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
      // meta: { requiresAuth: true } // Protected

    }
  ],
})


// Ensures you have to be logged in to access
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
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
