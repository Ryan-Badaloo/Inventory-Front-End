import { createRouter, createWebHistory } from 'vue-router'
import { jwtDecode } from 'jwt-decode'
import HomeView from '@/views/HomeView.vue'
import UserLogin from '@/views/LoginPage.vue'
import AddItem from '@/views/AddItemPage.vue'
import ModifyUser from '@/views/ModifyUserPage.vue'
import UpdateItem from '@/views/UpdateItemPage.vue'
import AssignItem from '@/views/AssignItemPage.vue'
import ChangePassword from '@/views/ChangePasswordPage.vue'
import UpdateRequest from '@/views/UpdateRequestPage.vue'
import { tryOnBeforeUnmount } from '@vueuse/core'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      // meta: { requiresAuth: true } // Protected
    },
    {
      path: '/add-item',
      name: 'AddItem',
      component: AddItem,
      // meta: { requiresAuth: true } // Protected
    },

    {
      path: '/update-item-page',
      name: 'UpdateItem',
      component: UpdateItem,
      // meta: { requiresAuth: true } // Protected
    },
    {
      path: '/assign-item-page',
      name: 'AssignItem',
      component: AssignItem,
      // meta: { requiresAuth: true } // Protected
    },
    {
      path: '/modify-users',
      name: 'ModifyUser',
      component: ModifyUser,
      // meta: { requiresAuth: true, requiresAdmin: true } // Protected
    },
    {
      path: '/change-password',
      name: 'ChangePassword',
      component: ChangePassword,
      // meta: { requiresAuth: true } // Protected
    },
    {
      path: '/update-request/:passedText',
      name: 'UpdateRequest',
      component: UpdateRequest,
      props: true
      // meta: { requiresAuth: true } // Protected
    },
    {
      path: '/login',
      name: 'UserLogin',
      component: UserLogin,
    },
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
      console.log(decoded.sub, decoded.firstname, decoded.lastname, decoded.role)
    } catch (error) {
      console.log("Invalid token, clearing...");
      localStorage.removeItem('token');
      return next('/login');
    }
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    console.log("No Authentication Token Found")
    next('/login');
  } else if (to.matched.some(record => record.meta.requiresAdmin) && isAdmin() === false) {
    console.log("User is not an Admin")
    alert("User is not an Admin")
  } else {
    next();
  }

  function isAdmin() {
    const decoded = jwtDecode(token);
    const admin = decoded.role;
    if (admin === 1) {
      return true
    } else {
      return false
    }
  }
});


export default router
