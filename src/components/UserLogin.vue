<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
    <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <button
          type="submit"
          class="w-full py-2 px-4 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow "
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import {useBaseURLComposable} from '../composable/useUrlcomposable'

const username = ref('');
const password = ref('');
const router = useRouter();

localStorage.clear();

const login = async () => {
  try {
    const params = new URLSearchParams();
    params.append('username', username.value);
    params.append('password', password.value);

    const response = await axios.post(`${useBaseURLComposable()}token`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    localStorage.setItem('token', response.data.access_token);
    router.push('/');
  } catch (error) {
    
    console.log(error)
  }
};
</script>


