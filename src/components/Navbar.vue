<script setup>
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}

function logout() {
  const token = localStorage.getItem('token')
  if (token) {
    localStorage.removeItem('token');
    console.log("Token has been cleared")
  }

}
</script>

<template>
    <nav class="bg-gray-800 rounded-br-full">
      <div class="mx-auto max-w-6xl sm:px-6 ">
        <div class="flex p-4 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
              <!-- <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" /> -->
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >MOAFM-CIS</span
              >
            </RouterLink>
            
            <div class="md:ml-auto">
              <div class="flex flex-wrap justify-center space-x-2">
                <RouterLink
                  to="/home"
                  :class="[isActiveLink('/home') ? 'bg-gray-700' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'rounded-md', 'px-3', 'py-2']"
                  >Home</RouterLink
                >
                <RouterLink
                  @click="logout()"
                  to="/"
                  :class="[isActiveLink('/') ? 'bg-gray-700' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'rounded-md', 'px-3', 'py-2']"
                  >Logout</RouterLink
                >
                <RouterLink
                  to="/modify-users"
                  :class="[isActiveLink('/add-user') ? 'bg-gray-700' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'rounded-md', 'px-3', 'py-2']"
                  >Modify Users</RouterLink
                >
                <RouterLink
                  to="/change-password"
                  :class="[isActiveLink('/add-user') ? 'bg-gray-700' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'rounded-md', 'px-3', 'py-2']"
                  >Change Password</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>