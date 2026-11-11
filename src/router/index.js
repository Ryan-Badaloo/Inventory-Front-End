import { createRouter, createWebHistory } from 'vue-router'
import { jwtDecode } from 'jwt-decode'
import HomeView from '@/views/HomeView.vue'
import UserLogin from '@/views/LoginPage.vue'
import AddItem from '@/views/AddItemPage.vue'
import ModifyWorkbench from '@/views/ModifyWorkbenchPage.vue'
import ViewWorkbench from '@/views/ViewWorkbenchPage.vue'
import ModifyUser from '@/views/ModifyUserPage.vue'
import ModifyClient from '@/views/ModifyClientPage.vue'
import SearchItem from '@/views/SearchItemPage.vue'
import AssignItem from '@/views/AssignItemPage.vue'
import UnassignItem from '@/views/UnassignItemPage.vue'
import AssignWorkbench from '@/views/AssignWorkbenchPage.vue'
import UnassignWorkbench from '@/views/UnassignWorkbenchPage.vue'
import ChangePassword from '@/views/ChangePasswordPage.vue'
import UpdateRequest from '@/views/UpdateRequestPage.vue'
import Settings from '@/views/SettingsPage.vue'
import Report from '@/views/ReportPage.vue'
import ViewItem from '@/views/ViewItemPage.vue'
import ViewClientDevices from '@/views/ViewClientDevicesPage.vue'
import UpdateItem from '@/views/UpdateItemPage.vue'
import { tryOnBeforeUnmount } from '@vueuse/core'
import { categories } from '@vueuse/core/metadata.mjs'

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
      path: '/search-item-page',
      name: 'SearchItem',
      component: SearchItem,
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
      path: '/assign-workbench-page',
      name: 'AssignWorkbench',
      component: AssignWorkbench,
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/unassign-workbench-page',
      name: 'UnassignWorkbench',
      component: UnassignWorkbench,
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/modify-workbenches',
      name: 'ModifyWorkbench',
      component: ModifyWorkbench,
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/view-workbench/:workbench_id',
      name: 'ViewWorkbench',
      component: ViewWorkbench,
      props: route => ({
        workbench_id: route.params.workbench_id,
      }),
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/modify-users',
      name: 'ModifyUser',
      component: ModifyUser,
      meta: { requiresAuth: true, requiresSupervisor: true } // Protected
    },
    {
      path: '/modify-clients',
      name: 'ModifyClient',
      component: ModifyClient,
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/view-client/:client_id',
      name: 'ViewClientDevices',
      component: ViewClientDevices,
      props: route => ({
        client_id: route.params.client_id,
      }),
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/change-password',
      name: 'ChangePassword',
      component: ChangePassword,
      meta: { requiresAuth: true, requiresSupervisor: true } // Protected
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
      meta: { requiresAuth: true, requiresSupervisor: true } // Protected
    },
    {
      path: '/reports',
      name: 'Report',
      component: Report,
      props: true,
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/view-item/:serial_number',
      name: 'ViewItem',
      component: ViewItem,
      props: route => ({
        serial_number: route.params.serial_number,
        category: route.query.category
      }),
      meta: { requiresAuth: true } // Protected
    },
    {
      path: '/update-item/:serial_number',
      name: 'UpdateItem',
      component: UpdateItem,
      props: route => ({
        serial_number: route.params.serial_number,
        category: route.query.category
      }),
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
        alert("Token expired, redirecting to login...");
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
    console.log("User is not an Authorized")
    alert("User is not an Authorized")
  } else if (to.matched.some(record => record.meta.requiresSupervisor) && isSupervisor() === false) {
    console.log("User is not an Authorized")
    alert("User is not an Authorized")
  } else if (to.matched.some(record => record.meta.requiresTechnician) && isTechnician() === false) {
    console.log("User is not an Authorized")
    alert("User is not an Authorized")
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

  function isSupervisor() {
    const decoded = jwtDecode(token);
    const supervisor = decoded.role;
    if (supervisor === 2 || supervisor === 1) {
      return true
    } else {
      return false
    }
  }


  function isTechnician() {
    const decoded = jwtDecode(token);
    const technician = decoded.role;
    if (technician === 3 || technician === 2 || technician === 1) {
      return true
    } else {
      return false
    }
  }
});





export default router
