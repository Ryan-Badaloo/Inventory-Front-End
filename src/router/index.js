import { createRouter, createWebHistory } from 'vue-router'
import { jwtDecode } from 'jwt-decode'
import HomeView from '@/views/HomeView.vue'
import UserLogin from '@/views/LoginPage.vue'
import AddItem from '@/views/AddItemPage.vue'
import ModifyUser from '@/views/ModifyUserPage.vue'
import ModifyClient from '@/views/ModifyClientPage.vue'
import UpdateItem from '@/views/UpdateItemPage.vue'
import AssignItem from '@/views/AssignItemPage.vue'
import UnassignItem from '@/views/UnassignItemPage.vue'
import ChangePassword from '@/views/ChangePasswordPage.vue'
import UpdateRequest from '@/views/UpdateRequestPage.vue'
import Settings from '@/views/SettingsPage.vue'
import Report from '@/views/ReportPage.vue'
import { tryOnBeforeUnmount } from '@vueuse/core'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'UserLogin',
      component: UserLogin,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
      meta: { requiresAuth: true } // Protected
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
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/assign-item-page',
      name: 'AssignItem',
      component: AssignItem,
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/unassign-item-page',
      name: 'UnassignItem',
      component: UnassignItem,
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/modify-users',
      name: 'ModifyUser',
      component: ModifyUser,
      meta: { requiresAuth: true, requiresAdmin: true } // Protected
    },
    {
      path: '/modify-clients',
      name: 'ModifyClient',
      component: ModifyClient,
      meta: { requiresAuth: true, requiresAdmin: true } // Protected
    },
    {
      path: '/change-password',
      name: 'ChangePassword',
      component: ChangePassword,
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/update-request/:passedText',
      name: 'UpdateRequest',
      component: UpdateRequest,
      props: true,
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      props: true,
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/reports',
      name: 'Report',
      component: Report,
      props: true,
      meta: { requiresAuth: true } // Protected
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
        return next('/');
      }
      console.log(decoded.sub, decoded.firstname, decoded.lastname, decoded.role)
    } catch (error) {
      console.log("Invalid token, clearing...");
      localStorage.removeItem('token');
      return next('/');
    }
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    console.log("No Authentication Token Found")
    next('/');
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
