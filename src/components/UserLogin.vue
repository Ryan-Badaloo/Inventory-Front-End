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

    <div>
      <a href="" class="underline text-blue-700 hover:text-blue-400">Click Here To Register</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const params = new URLSearchParams();
        params.append('username', this.username);
        params.append('password', this.password);

        // const response = await axios.get(`http://localhost:8080/
        const response = await axios.post(`http://localhost:8000/login`, params);
        localStorage.setItem('token', response.data.access_token);
        this.$router.push('/menu');
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

